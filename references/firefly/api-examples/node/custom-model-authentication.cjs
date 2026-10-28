const axios = require("axios");
const qs = require("qs");

async function retrieveAccessToken() {
  const data = qs.stringify({
    grant_type: "client_credentials",
    client_id: process.env.CUSTOM_MODELS_CLIENT_ID,
    client_secret: process.env.CUSTOM_MODELS_CLIENT_SECRET,
    scope: "openid,AdobeID,firefly_api,ff_apis",
  });

  const config = {
    timeout: 60000,
    method: "post",
    url: "https://ims-na1.adobelogin.com/ims/token/v3",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    data: data,
  };

  const response = await axios.request(config);
  return response.data.access_token;
}
module.exports = { retrieveAccessToken };
