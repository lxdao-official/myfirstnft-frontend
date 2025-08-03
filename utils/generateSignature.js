import { createWalletClient, http, keccak256, encodeAbiParameters, toHex } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';

// viem
export default async function generateSignature(imageIPFSURI) {
  if (!process.env.SIGNER_WALLET_PRIVATE_KEY) {
    throw new Error('SIGNER_WALLET_PRIVATE_KEY environment variable is required');
  }

  const encodedData = encodeAbiParameters(
    [{ type: 'string' }],
    [imageIPFSURI]
  );
  
  const hash = keccak256(encodedData);

  const account = privateKeyToAccount(process.env.SIGNER_WALLET_PRIVATE_KEY);
  const walletClient = createWalletClient({
    account,
    transport: http()
  });

  const signature = await walletClient.signMessage({
    message: { raw: toHex(hash) }
  });

  return signature;
} 