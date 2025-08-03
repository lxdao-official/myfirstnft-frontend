import nc from 'next-connect';
import createImage from '../../utils/createImage';
import uploadToIPFS from '../../utils/uploadToIPFS';
import generateSignature from '../../utils/generateSignature';

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Server Error!' });
  },
  onNoMatch: (req, res, next) => {
    res.status(404).json({ error: 'API not found!' });
  },
}).post(async (req, res) => {
  const { pfp, enableLaser } = req.body;
  console.log('Received a new request with pfp: ', pfp);

  try {
    const imageDataUrl = await createImage(pfp, enableLaser);
    
    const imageIPFSURI = await uploadToIPFS(imageDataUrl);
    
    const signature = await generateSignature(imageIPFSURI);

    res.json({
      success: true,
      image: imageDataUrl,
      imageIPFSURI: imageIPFSURI,
      signature: signature,
    });
  } catch (err) {
    console.error('Mint error:', err);
    res.status(500).json({
      success: false,
      errorMessage: err.message,
    });
  }
});

export default handler;
