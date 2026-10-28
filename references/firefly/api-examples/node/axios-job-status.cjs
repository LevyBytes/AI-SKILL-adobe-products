const axios = require("axios");
async function pollImageJob(statusUrl, accessToken, clientId, attempts = 120) {
    if (!statusUrl) throw new Error("Missing job statusUrl");
    const headers = {Authorization: `Bearer ${accessToken}`, "x-api-key": clientId};
    for (let attempt = 0; attempt < attempts; attempt++) {
        const response = await axios.get(statusUrl, {headers, timeout: 60000});
        const data = response.data;
        if (data.status === "succeeded") return data;
        if (["failed", "cancelled", "timeout"].includes(data.status)) {
            throw new Error(`Firefly job ${data.status}`);
        }
        if (!["pending", "running", "cancel_pending"].includes(data.status)) {
            throw new Error(`Unknown Firefly job state: ${data.status}`);
        }
        if (attempt + 1 < attempts) await new Promise(resolve => setTimeout(resolve, 5000));
    }
    throw new Error("Firefly polling limit reached");
}
module.exports = { pollImageJob };
