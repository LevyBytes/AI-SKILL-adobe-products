const axios = require("axios");

async function generateImageAsync(accessToken, customModelId) {
  const config = {
    timeout: 60000,
    method: "post",
    url: "https://firefly-api.adobe.io/v3/images/generate-async",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      "x-accept-mimetype": "image/jpeg",
      "x-model-version": "image3_custom",
      "x-api-key": process.env.CUSTOM_MODELS_CLIENT_ID,
    },
    data: JSON.stringify({
      numVariations: 2,
      seeds: [66080, 82683],
      size: { width: 2048, height: 2048 },
      prompt: "Laika running over rolling green hills with a big vibrant sun in the background",
      contentClass: "photo",
      visualIntensity: 6,
      style: {
        presets: ["painting"],
        strength: 50,
      },
      promptBiasingLocaleCode: "en-US",
      customModelId: customModelId,
    }),
  };

  const response = await axios.request(config);
  console.log("Generate Image Async Response:", response.data);
  return response.data.statusUrl;
}
module.exports = { generateImageAsync };
