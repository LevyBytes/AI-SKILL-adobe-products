const axios = require("axios");
const { pollImageJob } = require("./axios-job-status.cjs");

async function genExpand({ imageId, width, height, accessToken }) {
  const body = {
    numVariations: 1,
    size: {
      width,
      height,
    },
    image: {
      source: {
        uploadId: imageId,
      },
    },
  };

  const config = {
    method: "post",
    timeout: 60000,
    url: "https://firefly-api.adobe.io/v3/images/expand-async",
    headers: {
      "X-Api-Key": process.env.FIREFLY_SERVICES_CLIENT_ID,
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    data: body,
  };

  const response = await axios(config);
  return pollImageJob(response.data.statusUrl, accessToken, process.env.FIREFLY_SERVICES_CLIENT_ID);
}
module.exports = { genExpand };
