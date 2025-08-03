import React, { useState, useContext, useEffect } from 'react';
import { Chip, Box, Typography, Button } from '@mui/material';
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';

import { SimpleModal } from './showMessage';
import contractABI from '../abi.json';
import showMessage from './showMessage';
import { formatAddress } from '../common/utils';
import { WalletContext } from '../hooks/useWallet';

const CHAIN_ID = process.env.NEXT_PUBLIC_CHAIN_ID;

const getNetworkConfig = (chainId) => {
  switch (chainId) {
    case '1':
      return 'mainnet';
    case '11155111':
      return 'sepolia';
    default:
      return 'sepolia';
  }
};

const NETWORK = getNetworkConfig(CHAIN_ID);

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: process.env.NEXT_PUBLIC_INFURA_PROJECT_ID,
    },
  },
};

let web3ModelInstance;
if (typeof window !== 'undefined') {
  web3ModelInstance = new Web3Modal({
    network: NETWORK,
    cacheProvider: true,
    providerOptions,
  });
}

let provider;
let signer;
let instance;
let contract;

export async function connectWallet() {
  if (!instance) {
    instance = await web3ModelInstance.connect();
    // https://docs.ethers.io/v5/api/providers/
    provider = new ethers.providers.Web3Provider(instance);
    // https://docs.ethers.io/v5/api/signer/
    signer = provider.getSigner();
    contract = new ethers.Contract(
      process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
      contractABI,
      provider
    );
  }

  return { provider, signer, web3Instance: instance, contract };
}

async function disconnectWallet() {
  provider = undefined;
  signer = undefined;
  instance = undefined;
  contract = undefined;
  await web3ModelInstance.clearCachedProvider();
}

export default function ConnectWallet(props) {
  const [loading, setLoading] = useState(false);
  const { address, fullAddress, setAddress, setFullAddress } =
    useContext(WalletContext);

  const [visible, setVisible] = useState(false);

  // try to connect after the page loaded
  useEffect(() => {
    (async () => {
      if (!fullAddress && web3ModelInstance?.cachedProvider) {
        try {
          const { provider, signer } = await connectWallet();
          const { chainId } = await provider.getNetwork();
          if (chainId !== parseInt(CHAIN_ID)) {
            return;
          }
          const address = await signer.getAddress();
          //const ens = await provider.lookupAddress(address);
          setAddress(formatAddress(address));
          setFullAddress(address);
        } catch (err) {
          await disconnectWallet();
          setAddress(null);
          setFullAddress(null);
        }
      }
    })();
  }, []);

  if (address && !loading) {
    return (
      <Chip
        label={address}
        color="primary"
        onDelete={async () => {
          await disconnectWallet();
          setAddress(null);
        }}
      />
    );
  }

  return (
    <>
      <Chip
        style={{ fontSize: 16 }}
        label={loading ? 'Connecting...' : 'Connect Wallet'}
        color="primary"
        onClick={async () => {
          setLoading(true);
          try {
            const { provider, signer, web3Instance } = await connectWallet();
            const { chainId } = await provider.getNetwork();
            if (chainId !== parseInt(CHAIN_ID)) {
              setVisible(true);
              return;
            }
            const address = await signer.getAddress();
            //const ens = await provider.lookupAddress(address);
            setAddress(formatAddress(address));
            setFullAddress(address);
            web3Instance.on('accountsChanged', async (accounts) => {
              if (accounts.length === 0) {
                await disconnectWallet();
                setAddress(null);
                setFullAddress(null);
              } else {
                const address = accounts[0];
                //const ens = await provider.lookupAddress(address);
                setAddress(formatAddress(address));
                setFullAddress(address);
              }
            });
          } catch (err) {
            await disconnectWallet();
            setAddress(null);
            setFullAddress(null);
            showMessage({
              type: 'error',
              title: 'Failed to connect wallet',
              body: err.message,
            });
          }
        }}
      />
      <SimpleModal
        title="Wrong Network"
        visible={visible}
        body={
          <Box>
            <Typography gutterBottom>
              You are connected to the wrong network. Please switch to the{' '}
              {NETWORK} (Chain ID: {CHAIN_ID}) first.
            </Typography>
            <Typography gutterBottom>
              You can click the following button to change the Chain ID.
            </Typography>
            <Typography gutterBottom>
              After changing successfully, we will refresh the page, and you can
              try Connect Wallet again.
            </Typography>
            <Box marginTop={4}>
              <Button
                variant="contained"
                onClick={async () => {
                  try {
                    await window?.ethereum?.request({
                      method: 'wallet_switchEthereumChain',
                      params: [
                        {
                          chainId: `0x${CHAIN_ID}`,
                        },
                      ],
                    });
                    window.location.reload();
                  } catch (err) {
                    if (err.code === 4902 && CHAIN_ID === '11155111') {
                      alert('Please enable Sepolia network first.');
                    }
                    showMessage({
                      type: 'error',
                      title: 'Failed to switch network',
                      body: err.message,
                    });
                  }
                }}
              >
                Change Network to {NETWORK}
              </Button>
            </Box>
          </Box>
        }
        type="Error"
        onClose={(event, reason) => {
          if (reason && reason == 'backdropClick') return;
          setVisible(false);
        }}
      />
    </>
  );
}
