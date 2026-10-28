const { getAccessToken } = require("./fetch-authentication.cjs");
const { pollJob } = require("./fetch-job-status.cjs");
const { uploadImage, downloadFile } = require("./fetch-image-transfer.cjs");
const { asyncExpandImage } = require("./async-expand-request.cjs");
const FIREFLY_SERVICES_CLIENT_ID = process.env.FIREFLY_SERVICES_CLIENT_ID;
const FIREFLY_SERVICES_CLIENT_SECRET = process.env.FIREFLY_SERVICES_CLIENT_SECRET;

async function main() {
let token = await getAccessToken(FIREFLY_SERVICES_CLIENT_ID, FIREFLY_SERVICES_CLIENT_SECRET);

let upload = await uploadImage("./source.jpg", "image/jpeg", FIREFLY_SERVICES_CLIENT_ID, token);
let uploadedImage = upload.images[0].id;

let sizes = ["2500x2500", "3000x3000", "3500x3500"];

let expandJobs = [];
for (let size of sizes) {
  console.log(`Create job to expand our source to ${size}`);
  expandJobs.push(asyncExpandImage(uploadedImage, size, FIREFLY_SERVICES_CLIENT_ID, token));
}

let jobs = await Promise.all(expandJobs);

let expandResults = [];
jobs.forEach((j) => {
  expandResults.push(pollJob(j.statusUrl, FIREFLY_SERVICES_CLIENT_ID, token));
});
console.log("Waiting for the jobs to complete...");

let finalResults = await Promise.all(expandResults);
console.log("All work done, now downloading.");

await Promise.all(finalResults.map((r, i) => {
  // we know we only have one result
  return downloadFile(r.result.outputs[0].image.url, `source_${sizes[i]}.jpg`);
}));
}
if (require.main === module) main().catch(error => { console.error(error); process.exitCode = 1; });
module.exports = { main };
