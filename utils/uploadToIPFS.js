import { Buffer } from 'buffer';
import { NFTStorage, Blob } from 'nft.storage';

// upload to nft storage
export default async function uploadToIPFS(imageDataUrl) {
  if (!process.env.NFT_STORAGE_TOKEN) {
    throw new Error('NFT_STORAGE_TOKEN environment variable is required');
  }

  const nftStorage = new NFTStorage({
    token: process.env.NFT_STORAGE_TOKEN
  });
  
  const imageData = imageDataUrl.replace(/^data:image\/png;base64,/, "");
  const imageBuffer = Buffer.from(imageData, "base64");
  const someData = new Blob([imageBuffer]);
  const cid = await nftStorage.storeBlob(someData);

  return "ipfs://" + cid;
} 