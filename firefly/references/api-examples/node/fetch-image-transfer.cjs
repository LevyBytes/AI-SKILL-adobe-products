const fs = require("fs");
const { Readable } = require("stream");
const { pipeline } = require("stream/promises");
const BASE = "https://firefly-api.adobe.io";

async function uploadImage(filePath, fileType, id, token) {
  let stats = fs.statSync(filePath);
  let fileSizeInBytes = stats.size;
  let stream = fs.createReadStream(filePath);
  try {

  let upload = await fetch(`${BASE}/v2/storage/image`, {
    method: "POST",
    signal: AbortSignal.timeout(60000),
    headers: {
      Authorization: `Bearer ${token}`,
      "X-API-Key": id,
      "Content-Type": fileType,
      "Content-Length": fileSizeInBytes,
    },
    duplex: "half",
    body: stream,
  });

  if (!upload.ok) throw new Error(`Upload HTTP ${upload.status}`);
  return await upload.json();
  } finally { stream.destroy(); }
}

async function downloadFile(url, filePath) {
    const response = await fetch(url, {signal: AbortSignal.timeout(60000)});
    if (!response.ok) throw new Error(`Download HTTP ${response.status}`);
    if (!response.body) throw new Error("Download response has no body");
    await pipeline(Readable.fromWeb(response.body), fs.createWriteStream(filePath));
}
module.exports = { uploadImage, downloadFile };
