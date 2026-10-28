# Generate Image Variations

Create a helper that generates resized variants for each social media target through Firefly's [Expand Image API](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md). The sample sends the HTTPs request with `axios`:

```js
const axios = require("axios");

async function genExpand({ imageId, width, height, accessToken }) {
  const body = {
    size: { width, height },
    image: {
      source: { uploadId: imageId },
    },
  };

  const config = {
    method: "post",
    url: "https://firefly-api.adobe.io/v3/images/expand-async",
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

For every platform, request an expanded version at its optimized dimensions, then print the generated image URL:

```js
async function createSocialMediaRenditions(accessToken) {
  // Upload the source image
  let upload = await uploadImage(
    "./expand-image-tutorial-source-image.webp",
    "image/webp",
    accessToken,
  );
  let sourceImageId = upload.images[0].id;

  // Iterate over each platform and generate renditions
  for (let platform of SOCIAL_MEDIA_PLATFORMS) {
    let result = await genExpand(sourceImageId, platform.width, platform.height, accessToken);

    console.log(`Generated image variation for ${platform.name} at ${result.outputs[0].image.url}`);
  }
}
```
