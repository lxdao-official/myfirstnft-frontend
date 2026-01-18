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

// --- provider selection helpers (MetaMask first) ---
async function discoverEIP6963Providers(timeoutMs = 200) {
  if (typeof window === 'undefined') return [];
  const found = [];
  const handler = (event) => {
    if (event?.detail?.provider) found.push(event.detail);
  };

  window.addEventListener('eip6963:announceProvider', handler);
  try {
    window.dispatchEvent(new Event('eip6963:requestProvider'));
    await new Promise((r) => setTimeout(r, timeoutMs));
  } finally {
    window.removeEventListener('eip6963:announceProvider', handler);
  }
  return found;
}

async function getMetaMaskProvider() {
  if (typeof window === 'undefined') return null;

  // 1) EIP-6963 preferred
  const details = await discoverEIP6963Providers();
  const mmByRdns = details.find((d) => d?.info?.rdns === 'io.metamask');
  if (mmByRdns?.provider) return mmByRdns.provider;

  const mmByFlag = details.find((d) => d?.provider?.isMetaMask);
  if (mmByFlag?.provider) return mmByFlag.provider;

  // 2) Legacy: multiple injected providers array
  const eth = window.ethereum;
  if (eth?.providers && Array.isArray(eth.providers)) {
    const mm = eth.providers.find((p) => p?.isMetaMask);
    if (mm) return mm;
    return null;
  }

  // 3) Single injected: only accept if it is truly MetaMask
  if (eth?.isMetaMask) return eth;

  return null;
}

// dummy package for Web3Modal v1 custom provider
class MetaMaskProviderPackage { }

const providerOptions = {
  "custom-metamask": {
    display: {
      name: 'MetaMask',
      description: 'Connect to your MetaMask Wallet',
      logo: "/wallets/metamask.png",
    },
    package: MetaMaskProviderPackage,
    connector: async (_ProviderPackage, _options) => {
      const mm = await getMetaMaskProvider();
      if (!mm) {
        throw new Error(
          'MetaMask not found. Please install/enable MetaMask, or use WalletConnect.'
        );
      }
      await mm.request({ method: 'eth_requestAccounts' });
      return mm;
    },
  },
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: process.env.NEXT_PUBLIC_INFURA_PROJECT_ID,
      rpc: { 11155111: 'https://rpc.sepolia.org' },
      chainId: 11155111,
    },
  },
};

let web3ModelInstance;
if (typeof window !== 'undefined') {
  web3ModelInstance = new Web3Modal({
    cacheProvider: true,
    providerOptions,
    //disable injeced to prevent Web3Modal see window.ethereum as default entrance
    disableInjectedProvider: true,
  });
}
//clean web3Modal/walletconnect when user click
async function resetWeb3ModalSession() {
  try {
    await web3ModelInstance?.clearCachedProvider?.();
  } catch (e) { }

  // Best-effort cleanup for WalletConnect session restore
  try {
    localStorage.removeItem('WEB3_CONNECT_CACHED_PROVIDER');
    localStorage.removeItem('walletconnect');
    localStorage.removeItem('WALLETCONNECT_DEEPLINK_CHOICE');
    sessionStorage.clear();
  } catch (e) { }
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
  //to prevent web3Modal v1+WalletConnectProvider v1 automatically restore session.
  try {
    // WalletConnectProvider v1 usually has .disconnect() / .close()
    if (instance?.disconnect) await instance.disconnect();
    if (instance?.close) await instance.close();
  } catch (e) {
    // ignore
  }
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
      //only work without walletconnect
      const cached = web3ModelInstance?.cachedProvider;
      if (!fullAddress && cached && cached !== 'walletconnect' && !(typeof cached === 'string' && cached.startsWith('wc:'))) {
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
            const cached = web3ModelInstance?.cachedProvider;
            if (cached === "walletconnect") {
              await resetWeb3ModalSession();
            }

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
              body: err.message || 'An unknown error occurred during the wallet connection.',
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
                  // Prefer the currently connected provider (instance), fallback to window.ethereum
                  const req =
                    instance?.request
                      ? instance.request.bind(instance)
                      : window?.ethereum?.request
                        ? window.ethereum.request.bind(window.ethereum)
                        : null;

                  if (!req) {
                    showMessage({
                      type: 'error',
                      title: 'No wallet provider',
                      body: 'Wallet provider not found. Please connect your wallet again.',
                    });
                    return;
                  }

                  try {
                    await req({
                      method: 'wallet_switchEthereumChain',
                      params: [
                        {
                          chainId: `0x${parseInt(CHAIN_ID).toString(16)}`,
                        },
                      ],
                    });
                    window.location.reload();
                  } catch (err) {
                    // If chain is not found (error 4902), try to add it
                    if (err.code === 4902 && CHAIN_ID === '11155111') {
                      try {
                        await req({
                          method: 'wallet_addEthereumChain',
                          params: [
                            {
                              chainId: `0x${parseInt(CHAIN_ID).toString(16)}`,
                              chainName: 'Sepolia Test Network',
                              nativeCurrency: {
                                name: 'Sepolia Ether',
                                symbol: 'SEP',
                                decimals: 18,
                              },
                              rpcUrls: ['https://rpc.sepolia.org'],
                              blockExplorerUrls: ['https://sepolia.etherscan.io/'],
                            },
                          ],
                        });
                        window.location.reload();
                      } catch (addErr) {
                        showMessage({
                          type: 'error',
                          title: 'Failed to add network',
                          body: addErr.message,
                        });
                      }
                    } else {
                      showMessage({
                        type: 'error',
                        title: 'Failed to switch network',
                        body: err.message,
                      });
                    }
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
