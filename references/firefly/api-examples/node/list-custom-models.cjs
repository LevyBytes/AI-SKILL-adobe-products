const axios = require("axios");

async function listCustomModels(accessToken) {
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-api-key": process.env.CUSTOM_MODELS_CLIENT_ID,
    Authorization: `Bearer ${accessToken}`,
  };

  const config = {
    method: "get",
    timeout: 60000,
    url: "https://firefly-api.adobe.io/v3/custom-models",
    headers: headers,
  };

  try {
    const response = await axios.request(config);
    console.log("List Custom Models Response:", response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

module.exports = { listCustomModels };
