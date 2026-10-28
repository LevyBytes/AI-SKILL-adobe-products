const axios = require("axios");
async function submitMaskingJob(endpoint, payload, options) {
    const {accessToken, apiKey, serviceBaseUrl = "https://image.adobe.io", attempts = 120} = options;
    if (!accessToken || !apiKey) throw new Error("Provide accessToken and apiKey");
    if (!Number.isSafeInteger(attempts) || attempts < 1) throw new Error("Invalid polling limit");
    const headers = {"Content-Type": "application/json", "X-Api-Key": apiKey,
        Authorization: `Bearer ${accessToken}`};
    const url = new URL(endpoint, serviceBaseUrl).toString();
    const submitted = await axios.post(url, payload, {headers, timeout: 60000});
    if (submitted.status !== 202 || !submitted.data.statusUrl) {
        throw new Error("Masking request did not return an accepted job");
    }
    for (let attempt = 0; attempt < attempts; attempt++) {
        const response = await axios.get(submitted.data.statusUrl, {headers, timeout: 60000});
        const result = response.data;
        if (result.status === "succeeded") return result;
        if (result.status === "failed") throw new Error(result.message || "Masking job failed");
        if (!["not_started", "running"].includes(result.status)) {
            throw new Error(`Unknown masking job status: ${result.status}`);
        }
        if (attempt + 1 < attempts) await new Promise(resolve => setTimeout(resolve, 1000));
    }
    throw new Error("Masking polling limit reached");
}
module.exports = { submitMaskingJob };
