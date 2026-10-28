const BASE = "https://firefly-api.adobe.io";

async function asyncTextToImage(prompt, contentClass = "photo", id, token) {
  let body = {
    prompt,
    contentClass,
  };

  let resp = await fetch(`${BASE}/v3/images/generate-async`, {
    method: "POST",
    signal: AbortSignal.timeout(60000),
    headers: {
      "x-api-key": id,
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!resp.ok) throw new Error(`Submit HTTP ${resp.status}`);
  return await resp.json();
}
module.exports = { asyncTextToImage };
