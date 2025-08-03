const dotenv = require('dotenv');
const nc = require('next-connect');
const createImage = require('../../utils/createImage');
const uploadToIPFS = require('../../utils/uploadToIPFS');
const generateSignature = require('../../utils/generateSignature');

dotenv.config();

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Server Error!' });
  },
  onNoMatch: (req, res, next) => {
    res.status(404).json({ error: 'API not found!' });
  },
}).post(async (req, res) => {
  const pfp = req.body.pfp;
  const enableLaser = req.body.enableLaser;
  console.log('Received a new request with pfp: ', pfp);

  try {
    console.log('Creating image...');
    const imageDataUrl = await createImage(pfp, enableLaser);
    console.log('Image created');

    const imageIPFSURI = await uploadToIPFS(imageDataUrl);
    console.log('Image uploaded to IPFS: ', imageIPFSURI);

    const signature = await generateSignature(imageIPFSURI);
    console.log('Signature generated: ', signature);

    res.json({
      success: true,
      image: imageDataUrl,
      imageIPFSURI: imageIPFSURI,
      signature: signature,
    });
  } catch (err) {
    console.error('Mint error:', err);
    res.json({
      success: false,
      errorMessage: err.message,
    });
  }
});

export default handler;
