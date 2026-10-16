# JavaScript

```js
const axios = require("axios");
const qs = require("qs");

(async () => {
  const accessToken = await retrieveAccessToken();
  await generateImage(accessToken);
})();

async function retrieveAccessToken() {
  const data = qs.stringify({
    grant_type: "client_credentials",
    client_id: process.env.FIREFLY_SERVICES_CLIENT_ID,
    client_secret: process.env.FIREFLY_SERVICES_CLIENT_SECRET,
    scope: "openid,AdobeID,session,additional_info,read_organizations,firefly_api,ff_apis",
  });

  const config = {
    method: "post",
    url: "https://ims-na1.adobelogin.com/ims/token/v3",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    data: data,
  };

  try {
    const response = await axios.request(config);
    console.log("Access Token Retrieved");
    return response.data.access_token;
  } catch (error) {
    console.error("Error retrieving access token:", error.response.data);
  }
}

async function generateImage(accessToken) {
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-api-key": process.env.FIREFLY_SERVICES_CLIENT_ID,
    Authorization: `Bearer ${accessToken}`,
  };

  const data = {
    prompt: "a realistic illustration of a cat coding", // Replace with your actual prompt
  };

  const config = {
    method: "post",
    url: "https://firefly-api.adobe.io/v3/images/generate-async",
    headers: headers,
    data: data,
  };

  try {
    const response = await axios.request(config);
    console.log("Generate Image Response:", response.data);

    // Access the generated image URL
    const imageUrl = response.data.outputs[0].image.url;
    console.log(`You can view the generated image at: ${imageUrl}`);
  } catch (error) {
    console.error("Error during generateImage:", error.response.data);
  }
}
```
