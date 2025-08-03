const { Buffer } = require('buffer');
const axios = require('axios');
const FormData = require('form-data');

const pinataApiKey = process.env.PINATA_API_KEY;
const pinataSecretKey = process.env.PINATA_SECRET_API_KEY;

export default async function uploadToIPFS(imageDataUrl) {
  try {
    const imageData = imageDataUrl.replace(/^data:image\/png;base64,/, "");
    const imageBuffer = Buffer.from(imageData, "base64");

    // Create form data for Pinata API
    const form = new FormData();
    form.append('file', imageBuffer, {
      filename: 'image.png',
      contentType: 'image/png'
    });

    // Optional: Add metadata
    const metadata = JSON.stringify({
      name: 'NFT Image',
      keyvalues: {
        description: 'Generated NFT image'
      }
    });
    form.append('pinataMetadata', metadata);

    // Optional: Add pinning options
    const options = JSON.stringify({
      cidVersion: 0,
    });
    form.append('pinataOptions', options);

    // Upload to Pinata using axios
    const response = await axios.post(
      'https://api.pinata.cloud/pinning/pinFileToIPFS',
      form,
      {
        headers: {
          'pinata_api_key': pinataApiKey,
          'pinata_secret_api_key': pinataSecretKey,
          ...form.getHeaders()
        }
      }
    );

    if (response.data && response.data.IpfsHash) {
      return "ipfs://" + response.data.IpfsHash;
    }
    throw new Error("Upload failed - no hash returned");
  } catch (error) {
    console.error("Error uploading to Pinata:", error);
    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
    }
    throw error;
  }
}
