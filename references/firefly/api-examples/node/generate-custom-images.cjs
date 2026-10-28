const { retrieveAccessToken } = require("./custom-model-authentication.cjs");
const { listCustomModels } = require("./custom-model-discovery.cjs");
const { generateImageAsync } = require("./custom-model-generation.cjs");
const { pollImageJob } = require("./axios-job-status.cjs");
async function main() {
    const token = await retrieveAccessToken();
    const models = await listCustomModels(token);
    if (!models?.custom_models?.length) throw new Error("No custom models found");
    const customModelId = models.custom_models[0]["repo:assetId"];
    const statusUrl = await generateImageAsync(token, customModelId);
    const result = await pollImageJob(statusUrl, token, process.env.CUSTOM_MODELS_CLIENT_ID);
    console.log("Image generation completed:", result);
    return result;
}
if (require.main === module) main().catch(error => {
    console.error(error.response?.data || error.message || error);
    process.exitCode = 1;
});
module.exports = { main };
