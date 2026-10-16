const { getAccessToken } = require("./fetch-authentication.cjs");
const { pollJob } = require("./fetch-job-status.cjs");
const { uploadImage, downloadFile } = require("./fetch-image-transfer.cjs");
const { asyncTextToImage } = require("./async-text-request.cjs");
const FIREFLY_SERVICES_CLIENT_ID = process.env.FIREFLY_SERVICES_CLIENT_ID;
const FIREFLY_SERVICES_CLIENT_SECRET = process.env.FIREFLY_SERVICES_CLIENT_SECRET;

async function main() {
let token = await getAccessToken(FIREFLY_SERVICES_CLIENT_ID, FIREFLY_SERVICES_CLIENT_SECRET);

let result = await asyncTextToImage(
  "a cat living their best life, sleeping in a sunbeam",
  "art",
  FIREFLY_SERVICES_CLIENT_ID,
  token,
);
console.log(result);

let jobResult = await pollJob(result.statusUrl, FIREFLY_SERVICES_CLIENT_ID, token);
console.log(JSON.stringify(jobResult, null, "\t"));

for (let output of jobResult.result.outputs) {
  let fileName = `./${output.seed}.jpg`;
  await downloadFile(output.image.url, fileName);
}
}
if (require.main === module) main().catch(error => { console.error(error); process.exitCode = 1; });
module.exports = { main };
