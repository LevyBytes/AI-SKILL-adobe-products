# JavaScript

```javascript
const axios = require("axios");

const API_BASE = "https://firefly-api.adobe.io";
const ACCESS_TOKEN = "your_access_token";
const API_KEY = "your_api_key";

async function adaptiveComposite() {
  const payload = {
    background: {
      image: {
        source: { url: "https://example.com/living-room.jpg" },
      },
      fillAreaMask: {
        source: { url: "https://example.com/placement-mask.png" },
      },
    },
    object: {
      image: {
        source: { url: "https://example.com/chair.png" },
      },
      mask: {
        source: { url: "https://example.com/chair-mask.png" },
      },
    },
    preserveBackground: true,
    harmonization: 0.7,
    shadowIntensity: 1,
    seeds: [42, 84, 126],
    output: { mediaType: "image/png" },
  };

  const response = await axios.post(`${API_BASE}/v3/images/adaptive-composite`, payload, {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "x-api-key": API_KEY,
      "Content-Type": "application/json",
    },
  });

  console.log("Job ID:", response.data.jobId);
  console.log("Status URL:", response.data.statusUrl);
  console.log("Cancel URL:", response.data.cancelUrl);
  return response.data;
}

adaptiveComposite();
```
