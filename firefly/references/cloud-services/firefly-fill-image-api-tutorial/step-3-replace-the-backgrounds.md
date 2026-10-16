# Step 3 - Replace the backgrounds

This JavaScript function sends a request to the [Fill Image API](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md) endpoint:

```js
async function genFill({ maskId, sourceId, prompt, accessToken }) {
  const body = {
    image: {
      mask: {
        uploadId: maskId,
      },
      source: {
        uploadId: sourceId,
      },
    },
    prompt: prompt,
  };

  const config = {
    method: "post",
    url: "https://firefly-api.adobe.io/v3/images/fill",
    headers: {
      "X-Api-Key": process.env.FIREFLY_SERVICES_CLIENT_ID,
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    data: JSON.stringify(body),
  };

  const response = await axios(config);
  return response.data;
}
```
