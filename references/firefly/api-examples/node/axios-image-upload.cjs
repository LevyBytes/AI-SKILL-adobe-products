const axios = require("axios");
const fs = require("fs");

async function uploadImage({ filePath, fileType, accessToken }) {
  const fileStats = fs.statSync(filePath);
  const fileSizeInBytes = fileStats.size;
  const fileStream = fs.createReadStream(filePath);

  const config = {
    method: "post",
    url: "https://firefly-api.adobe.io/v2/storage/image",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "X-API-Key": process.env.FIREFLY_SERVICES_CLIENT_ID,
      "Content-Type": fileType,
      "Content-Length": fileSizeInBytes,
    },
    data: fileStream,
    maxContentLength: Infinity,
    maxBodyLength: Infinity,
    timeout: 60000,
  };

  try {
    const response = await axios(config);
    return response.data;
  } finally {
    fileStream.destroy();
  }
}
module.exports = { uploadImage };
