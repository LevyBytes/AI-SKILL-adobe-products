const axios = require("axios");

async function generateImage({ accessToken, data }) {
  let config = {
    method: "post",
    timeout: 60000,
    maxBodyLength: Infinity,
    url: "https://firefly-api.adobe.io/v3/images/generate",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "x-api-key": process.env.FIREFLY_SERVICES_CLIENT_ID,
      Authorization: `Bearer ${accessToken}`,
    },
    data: JSON.stringify(data),
  };

  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    throw error;
  }
}
module.exports = { generateImage };
