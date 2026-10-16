# Upload Source Image

This JavaScript sample uses `axios` with Firefly's Upload API to send an image:

```javascript
const axios = require("axios");
const fs = require("fs");

async function uploadImage({ filePath, fileType, accessToken }) {
  let stream = fs.createReadStream(filePath);
  let stats = fs.statSync(filePath);
  let fileSizeInBytes = stats.size;

  const config = {
    method: "post",
    url: "https://firefly-api.adobe.io/v2/storage/image",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "X-API-Key": process.env.FIREFLY_SERVICES_CLIENT_ID,
      "Content-Type": fileType,
      "Content-Length": fileSizeInBytes,
    },
    data: stream,
    maxContentLength: Infinity,
    maxBodyLength: Infinity,
  };

  const response = await axios(config);
  return response.data;
}

// Example usage
uploadImage({
  filePath: "./example-image.png",
  fileType: "image/png",
  accessToken: "YOUR_ACCESS_TOKEN",
})
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
```

**Example Response:**

```json
{
  "images": [
    {
      "id": "510aabb4-e154-4a7b-bd2e-f492ee71c938"
    }
  ]
}
```

Pass this `id` into later Firefly API requests. An upload id remains valid for **7 days** after the upload date.
