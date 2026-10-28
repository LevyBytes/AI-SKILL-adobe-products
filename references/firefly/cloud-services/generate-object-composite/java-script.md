# JavaScript

```javascript
const axios = require("axios");

const API_BASE = "https://firefly-api.adobe.io";
const ACCESS_TOKEN = "your_access_token";
const API_KEY = "your_api_key";

async function generateObjectComposite() {
  const payload = {
    prompt: "a product on a wooden table in a cozy kitchen",
    image: {
      source: { url: "https://example.com/product.png" },
    },
  };

  const response = await axios.post(
    `${API_BASE}/v3/images/generate-object-composite-async`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "x-api-key": API_KEY,
        "Content-Type": "application/json",
      },
    },
  );

  console.log("Job ID:", response.data.jobId);
  console.log("Status URL:", response.data.statusUrl);
  console.log("Cancel URL:", response.data.cancelUrl);
  return response.data;
}

generateObjectComposite();
```
