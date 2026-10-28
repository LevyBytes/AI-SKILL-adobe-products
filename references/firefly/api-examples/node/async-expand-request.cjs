const BASE = "https://firefly-api.adobe.io";

async function asyncExpandImage(source, size, id, token) {
  const [width, height] = size.split("x").map(Number);
  if (![width, height].every(n => Number.isSafeInteger(n) && n > 0)) {
    throw new Error("Expected positive width x height dimensions");
  }

  let body = {
    image: {
      source: {
        uploadId: source,
      },
    },
    size: {
      width,
      height,
    },
  };

  let resp = await fetch(`${BASE}/v3/images/expand-async`, {
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
module.exports = { asyncExpandImage };
