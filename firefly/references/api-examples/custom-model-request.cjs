const axios = require("axios");

async function generateImagesWithCustomModel(accessToken, customModelId, clientId) {
    const response = await axios.request({
        method: "post",
        url: "https://firefly-api.adobe.io/v3/images/generate-async",
        headers: {
            "Authorization": `Bearer ${accessToken}`,
            "x-api-key": clientId,
            "x-model-version": "image3_custom",
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        data: JSON.stringify({
            prompt: "An almond seed in a warm setting",
            customModelId
        }),
        timeout: 60000
    });
    if (!response.data.statusUrl) throw new Error("Missing job statusUrl");
    return response.data;
}
module.exports = { generateImagesWithCustomModel };
