const { Buffer } = require('buffer');
const FormData = require('form-data');
const axios = require('axios');

// upload to Infura IPFS
module.exports = async function (imageDataUrl) {
  const projectId = process.env.INFURA_API_KEY;
  const projectSecret = process.env.INFURA_API_SECRET;
  
  console.log('Infura API Key:', projectId);
  console.log('Infura API Secret:', projectSecret ? '***' + projectSecret.slice(-4) : 'undefined');
  
  const imageData = imageDataUrl.replace(/^data:image\/png;base64,/, "");
  const imageBuffer = Buffer.from(imageData, "base64");
  
  const formData = new FormData();
  formData.append('file', imageBuffer, {
    filename: 'image.png',
    contentType: 'image/png'
  });

  try {
    const response = await axios.post(
      'https://ipfs.infura.io:5001/api/v0/add',
      formData,
      {
        headers: {
          ...formData.getHeaders(),
          'Authorization': 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64')
        }
      }
    );

    const hash = response.data.Hash;
    return "ipfs://" + hash;
  } catch (error) {
    console.error('Error uploading to Infura IPFS:', error);
    throw error;
  }
};