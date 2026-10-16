# JavaScript

```js
async function generateImage(accessToken) {
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-api-key": process.env.FIREFLY_SERVICES_CLIENT_ID,
    Authorization: `Bearer ${accessToken}`,
  };

  const data = {
    prompt: "a realistic illustration of a cat coding", // Replace with your actual prompt
  };

  const config = {
    method: "post",
    url: "https://firefly-api.adobe.io/v3/images/generate-async",
    headers: headers,
    data: data,
  };

  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    console.error("Error during generateImage:", error);
  }
}
```

The API returns a payload in this form:

```json
{
  "size": {
    "width": 2048,
    "height": 2048
  },
  "outputs": [
    {
      "seed": 1779323515,
      "image": {
        "url": "https://pre-signed-firefly-prod.s3-accelerate.amazonaws.com/images/asdf-12345?lots=of&query=params..."
      }
    }
  ],
  "contentClass": "art",
  "altText": "A futuristic city glowing at night with neon lights reflecting off wet streets and flying cars soaring between towering skyscrapers."
}
```
