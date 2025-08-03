const { ethers } = require('ethers');

// generate signature for image ipfs
module.exports = async function (imageIPFSURI) {
  const hash = ethers.utils.keccak256(
    ethers.utils.defaultAbiCoder.encode(['string'], [imageIPFSURI])
  );

  const signerWallet = new ethers.Wallet(process.env.SIGNER_WALLET_PRIVATE_KEY);

  const message = ethers.utils.arrayify(hash);
  const signature = await signerWallet.signMessage(message);

  return signature;
};