async function pollJob(statusUrl, clientId, accessToken, attempts = 120) {
    if (!statusUrl) throw new Error("Missing job statusUrl");
    const headers = {Authorization: `Bearer ${accessToken}`, "x-api-key": clientId};
    for (let attempt = 0; attempt < attempts; attempt++) {
        const response = await fetch(statusUrl, {headers, signal: AbortSignal.timeout(60000)});
        if (!response.ok) throw new Error(`Job HTTP ${response.status}`);
        const data = await response.json();
        if (data.status === "succeeded") return data;
        if (["failed", "cancelled", "timeout"].includes(data.status)) {
            throw new Error(`Firefly job ${data.status}`);
        }
        if (!["pending", "running", "cancel_pending"].includes(data.status)) {
            throw new Error(`Unknown Firefly job state: ${data.status}`);
        }
        if (attempt + 1 < attempts) await new Promise(resolve => setTimeout(resolve, 1000));
    }
    throw new Error("Firefly polling limit reached");
}
module.exports = { pollJob };
