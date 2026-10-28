# Generate an Image

Starting with the main point, here is code that uses `dog` as the default prompt for one generated image:

```js
async function generateImage({ accessToken, data = { prompt: "dog" } }) {
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://firefly-api.adobe.io/v3/images/generate",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "x-api-key": process.env.FIREFLY_SERVICES_CLIENT_ID,
      Authorization: `Bearer ${accessToken}`,
    },
    data: JSON.stringify(data),
  };

  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
```
