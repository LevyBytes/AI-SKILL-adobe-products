const axios = require("axios");

async function listCustomModels(accessToken) {
  const config = {
    timeout: 60000,
    method: "get",
    url: "https://firefly-api.adobe.io/v3/custom-models",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "x-api-key": process.env.CUSTOM_MODELS_CLIENT_ID,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  const response = await axios.request(config);
  console.log("List Custom Models Response:", response.data);
  return response.data;
}
module.exports = { listCustomModels };
