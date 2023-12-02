'use client';
import React, { useState, useEffect } from 'react';
import { Chip, Box, Typography, Button } from '@mui/material';
import { useConnectModal, useChainModal } from '@rainbow-me/rainbowkit';
import { SimpleModal } from './showMessage';
import showMessage from './showMessage';
import { useAccount, useNetwork } from 'wagmi';

const CHAIN_ID = process.env.NEXT_PUBLIC_CHAIN_ID ?? '10';
const NETWORK = CHAIN_ID === '10' ? 'Optimism Mainnet' : 'Optimism Testnet';

export default function ConnectWallet(props) {
  const [loading, setLoading] = useState(false);
  const { address, isConnected } = useAccount();
  const [visible, setVisible] = useState(false);
  const { openConnectModal } = useConnectModal();
  const { openChainModal } = useChainModal();
  const { chain } = useNetwork();

  useEffect(() => {
    if (chain?.id != CHAIN_ID && isConnected) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [chain]);

  return (
    <>
      <Chip
        style={{ fontSize: 16 }}
        label={loading ? 'Connecting...' : address ? address : 'Connect Wallet'}
        color="primary"
        onClick={async () => {
          setLoading(true);
          try {
            openConnectModal && openConnectModal();
          } catch (err) {
            showMessage({
              type: 'error',
              title: 'Failed to connect wallet',
              body: err.message,
            });
          } finally {
            setLoading(false);
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
                  openChainModal();
                }}
              >
                Change Network
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
