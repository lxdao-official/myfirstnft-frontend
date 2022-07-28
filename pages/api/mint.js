const axios = require('axios');
const dotenv = require('dotenv');
const nc = require('next-connect');

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
  // backend code https://github.com/GuoChanLiangXin/myfirstnft-backend
  const response = await axios.post(
    `${process.env.MFNFT_BACKEND_API}/mint`,
    req.body
  );

  res.json(response.data);
});

export default handler;
