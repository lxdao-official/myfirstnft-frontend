const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { Buffer } = require('buffer');

// upload to Cloudflare R2
module.exports = async function (imageDataUrl) {
  const accountId = process.env.R2_ACCOUNT_ID;
  const accessKeyId = process.env.R2_ACCESS_KEY_ID;
  const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;
  const bucketName = process.env.R2_BUCKET_NAME;
  const publicDomain = process.env.R2_PUBLIC_DOMAIN;

  const S3 = new S3Client({
    region: "auto",
    endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKey,
    },
  });

  const imageData = imageDataUrl.replace(/^data:image\/png;base64,/, "");
  const imageBuffer = Buffer.from(imageData, "base64");
  const fileName = `nft/nft-${Date.now()}.png`;

  try {
    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: fileName,
      Body: imageBuffer,
      ContentType: "image/png",
    });

    await S3.send(command);

    // Construct the public URL
    const url = `${publicDomain}/${fileName}`;
    return url;
  } catch (error) {
    console.error("Error uploading to Cloudflare R2:", error);
    throw error;
  }
};
