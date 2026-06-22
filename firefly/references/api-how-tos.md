# Cm Share Model, Firefly Expand Image Api Tutorial, Firefly Fill Image Api Tutorial

> Adobe Firefly reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Grant Applications Access to Your Custom Model Guide; Firefly Expand Image API Tutorial; Firefly Fill Image API Tutorial.

## Grant Applications Access to Your Custom Model Guide

This guide explains how to grant applications access to your custom models so API endpoints can use them.

### Overview

After you have [trained a custom model](api-concepts.md), share it with your technical account. The [List Custom Models](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md) API can then see it. The [Text to Image](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md) API can use it too.

Note

Models shared at the organization level are shared with individual projects as well.

[Share a custom model](https://youtu.be/_xxXrEWZ8cc)

### To share the custom model

Use this sequence:

1. In the [Adobe Developer Console](https://developer.adobe.com/console/home), open the relevant project. Select the API credential link from the sidenav or from the credentials section.

[Figure: Project credentials screenshot](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/how-tos/cm-share-model/images/api-cred.png)

[Figure: Technical Account Email](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/how-tos/cm-share-model/images/tech-account-email.png)

2. Copy the **Technical Account Email**.
3. Sign in to your [Firefly account](https://firefly.adobe.com/) and open [the custom model](https://firefly.adobe.com/custom-models) itself.
4. Choose **"..."** at the upper right to display additional actions, then choose **Share**.
5. When the modal appears, put the technical account email into _Add people or groups_.

[Figure: Invite to edit screenshot](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/how-tos/cm-share-model/images/invite-to-editbutton.png)

6. Select **Invite to edit**.

Tip

Sharing may show the account as _Pending_, but the custom model access has already been granted.

After sharing, the custom model can be reached from the API endpoint.

## Firefly Expand Image API Tutorial

Use the Expand Image API to extend an image generatively past its original borders.

[Figure: wallet advertisement hero image](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/expand-image-tutorial-hero-image.jpeg)

### Overview

Assume a Fortune 100 marketing team needs image variants in multiple sizes for social channels. Previously, each platform required manual resizing, which took time and introduced errors. Firefly's Expand Image API can automate the workflow and create multiple image variations sized for Instagram, Facebook, Twitter, and other platforms.

Before the code, here are the main stages:

- **Define Target Dimensions:** Social platforms require their own image sizes, so define the dimensions for each target platform.
- **Upload Source Image:** Upload the original asset with Firefly's [Upload API](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md).
- **Generate Image Variations:** Create each resized output through Firefly's [Expand Image API](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md).

You can work through the sequence, or [open the complete source code](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/how-tos/firefly-expand-image-api-tutorial.md#full-example) if you prefer to start from the finished implementation.

### Prerequisites

This tutorial expects that you already have a Firefly Services **Client ID** and **Client Secret**. If those are not available yet, use the [Adobe Developer Console](api-getting-started.md) page to learn how to obtain them.

### Set Up Your Environment

Before starting this [Node.js](https://nodejs.org/en/download/package-manager) tutorial, run this from a secure terminal:

```bash

mkdir firefly-expand-image-api-tutorial
cd firefly-expand-image-api-tutorial
npm init --y
npm install axios qs
touch index.js
```

### Download the Sample Image

Put this sample image alongside the project files:

[Figure: expand-image-tutorial-source-image.webp](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/expand-image-tutorial-source-image.jpeg)

### Define the Dimensions

Start by declaring the dimensions for every social media target:

```js
const SOCIAL_MEDIA_PLATFORMS = [
  {
    name: "Instagram Post",
    width: 1080,
    height: 1080,
  },
  {
    name: "Facebook Cover",
    width: 820,
    height: 312,
  },
  {
    name: "Twitter Post",
    width: 1024,
    height: 512,
  },
];
```

### Upload the Source Image

Then upload the source image with Firefly's [Upload API](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md). Use it as the base asset for every variation.

```js
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
    data: fileStream,
    maxContentLength: Infinity,
    maxBodyLength: Infinity,
  };

  const response = await axios(config);
  return response.data;
}
```

A successful request returns a response similar to this:

```json
{
  "images": [
    {
      "id": "510aabb4-e154-4a7b-bd2e-f492ee71c938"
    }
  ]
}
```

### Generate Image Variations

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

### Full Example

Before running this sample, review [prerequisites](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/how-tos/firefly-expand-image-api-tutorial.md#prerequisites) so the environment is prepared. Treat the listing as instructional only; using it in a production application at scale requires more work around error handling, logging, security, and related operational concerns.

```js
const axios = require("axios");
const qs = require("qs");
const fs = require("fs");

// Define social media platforms and their image dimensions
const SOCIAL_MEDIA_PLATFORMS = [
  {
    name: "Instagram Post",
    width: 1080,
    height: 1080,
  },
  {
    name: "Facebook Cover",
    width: 820,
    height: 312,
  },
  {
    name: "Twitter Post",
    width: 1024,
    height: 512,
  },
];

(async () => {
  const accessToken = await retrieveAccessToken();
  await createSocialMediaRenditions(accessToken);
})();

async function retrieveAccessToken() {
  let data = qs.stringify({
    grant_type: "client_credentials",
    client_id: process.env.FIREFLY_SERVICES_CLIENT_ID,
    client_secret: process.env.FIREFLY_SERVICES_CLIENT_SECRET,
    scope: "openid,AdobeID,session,additional_info,read_organizations,firefly_api,ff_apis",
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://ims-na1.adobelogin.com/ims/token/v3",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };

  try {
    const response = await axios.request(config);
    const { access_token } = response.data;
    return access_token;
  } catch (error) {
    console.log(error);
  }
}

async function uploadImage({ filePath, fileType, accessToken }) {
  const fileStream = fs.createReadStream(filePath);
  const fileStats = fs.statSync(filePath);
  const fileSizeInBytes = fileStats.size;

  const config = {
    method: "post",
    url: "https://firefly-api.adobe.io/v2/storage/image",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "X-API-Key": process.env.FIREFLY_SERVICES_CLIENT_ID,
      "Content-Type": fileType,
      "Content-Length": fileSizeInBytes,
    },
    data: fileStream,
    maxContentLength: Infinity,
    maxBodyLength: Infinity,
  };

  const response = await axios(config);
  return response.data;
}

async function genExpand({ imageId, width, height, accessToken }) {
  const body = {
    numVariations: 1,
    size: {
      width,
      height,
    },
    image: {
      source: {
        uploadId: imageId,
      },
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
    data: body,
  };

  const response = await axios(config);
  return response.data;
}

async function createSocialMediaRenditions(accessToken) {
  // Upload the source image
  let upload = await uploadImage({
    filePath: "./expand-image-tutorial-source-image.webp",
    fileType: "image/webp",
    accessToken,
  });

  let sourceImageId = upload.images[0].id;

  // Loop over each platform and generate renditions
  for (const platform of SOCIAL_MEDIA_PLATFORMS) {
    let result = await genExpand({
      imageId: sourceImageId,
      width: platform.width,
      height: platform.height,
      accessToken,
    });

    console.log(`Generated rendition for ${platform.name} at ${result.outputs[0].image.url}`);
  }
}
```

This tutorial uses CommmonJS so the first run is straightforward. To work with ES6 modules instead, change `require` statements to `import` statements and rename `index.js` as `index.mjs`.

### Deepen Your Understanding

After completing the tutorial, open the [API Reference](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md) for more advanced Firefly image-generation automation scenarios.

## Firefly Fill Image API Tutorial

Use the Fill Image API to make generative edits inside selected regions of an image.

| --- | --- | --- |
| [Figure: source-person-photo-1](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/source-person-photo-1.png) | [Figure: mask-person-photo-1](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/mask-person-photo-1.png) | [Figure: result-person-photo-1](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/result-person-photo-1.jpeg)

### Overview

Suppose you maintain a company website where thousands of employee portraits need a consistent, tasteful, professional appearance. With the Fill Image API, the background in each employee photo can be replaced using a shared visual style.

In this walkthrough:

- Upload employee images with matching mask images so each photo background can be targeted.
- Compose a prompt that defines the generated artwork for the replacement backgrounds.
- Call the Fill Image API to swap employee-photo backgrounds for consistent generated artwork.

Follow the tutorial sequentially, or [jump immediately to the full source code](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/how-tos/firefly-fill-image-api-tutorial.md#full-example) if you prefer to inspect the complete listing first.

### Prerequisites

- A Firefly Services **Client ID** and **Client Secret** are required. For credential setup, consult [Adobe Developer Console](api-getting-started.md).

### Set up your environment

Before starting this [Node.js](https://nodejs.org/en/download/package-manager) tutorial, use a protected terminal session for these commands:

```bash

mkdir firefly-fill-image-api-tutorial
cd firefly-fill-image-api-tutorial
npm init --y
npm install axios qs
touch index.js
```

### Download the sample images

Download the four files shown here, consisting of two source images and two masks, and place them in your project folder as PNG files.

| --- | --- |
| [Figure: source-person-photo-1](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/source-person-photo-1.png) source-person-photo-1.png | [Figure: mask-person-photo-1](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/mask-person-photo-1.png) mask-person-photo-1.png
| [Figure: source-person-photo-2](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/source-person-photo-2.png) source-person-photo-2.png | [Figure: mask-person-photo-2](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/mask-person-photo-2.png) mask-person-photo-2.png

Within your own applications, automate mask generation for your own images with [Photoshop Create Mask API](https://developer.adobe.com/firefly-services/docs/photoshop/api/?aio_internal).

### Step 1 - Upload the images

Use the [Upload API](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md) for both the source image and its mask image; the helper is:

```js
const fs = require("fs");

async function uploadImage({ filePath, fileType, accessToken }) {
  const fileStream = fs.createReadStream(filePath);
  const fileStats = fs.statSync(filePath);
  const fileSizeInBytes = fileStats.size;

  const config = {
    method: "post",
    url: "https://firefly-api.adobe.io/v2/storage/image",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "X-API-Key": process.env.FIREFLY_SERVICES_CLIENT_ID,
      "Content-Type": fileType,
      "Content-Length": fileSizeInBytes,
    },
    data: fileStream,
    maxContentLength: Infinity,
    maxBodyLength: Infinity,
  };

  const response = await axios(config);
  return response.data;
}
```

### Step 2 - Write a background prompt

Describe the replacement background you want the AI to create for the photos. For a polished corporate result, this sample uses corporate blue colors in a smooth gradient.

```js
const backgroundPrompt =
  "A professional background for corporate headshots, blending a smooth gradient in neutral tones (e.g., gray, beige, or light blue) with subtle abstract artistic elements. Include elegant geometric shapes, soft brushstroke patterns, or layered textures that provide a modern and sophisticated appearance without overpowering the subject. The abstract elements should create depth and interest while maintaining a clean, polished, and corporate-appropriate aesthetic.";
```

### Step 3 - Replace the backgrounds

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

### Step 4 - Generate new backgrounds

Iterate through the employee list and generate an image with an updated background for each photo:

```js
async function updateEmployeePhotos() {
  const accessToken = await getAccessToken();

  const employees = [
    {
      name: "Jane Smith",
      imagePath: "./source-person-photo-1.png",
      maskPath: "./mask-person-photo-1.png",
    },
    {
      name: "John Doe",
      imagePath: "./source-person-photo-2.png",
      maskPath: "./mask-person-photo-2.png",
    },
    // Add more employees as needed
  ];

  for (const employee of employees) {
    try {
      // Upload the source and mask images
      const sourceUploadResponse = await uploadImage(employee.imagePath, "image/png", accessToken);
      const sourceImageId = sourceUploadResponse.images[0].id;

      const maskUploadResponse = await uploadImage(employee.maskPath, "image/png", accessToken);
      const maskImageId = maskUploadResponse.images[0].id;

      // Generate the new image
      const result = await genFill({
        maskImageId,
        sourceImageId,
        backgroundPrompt,
        accessToken,
      });

      console.log(`Updated photo for ${employee.name}`);
      console.log(`New image URL: ${result.outputs[0].image.url}`);
    } catch (error) {
      console.error(`Error updating photo for ${employee.name}:`, error.response.data);
    }
  }
}
```

| --- | --- |
| [Figure: result-person-photo-1](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/result-person-photo-1.jpeg) | [Figure: result-person-photo-2](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/result-person-photo-2.jpeg)

### Full example

Use this complete sample when you want all tutorial steps in one file. If you skipped earlier sections, read this [tutorial's prerequisites](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/how-tos/firefly-fill-image-api-tutorial.md#prerequisites) section before executing the code.

The sample is written in CommonJS. For ES6 modules, replace `require` statements with `import` statements and rename `index.js` to `index.mjs`.

This listing is intended only for learning.

A live application should not rely on this sample until it adds robust error handling, logging, and security controls.

```js
const axios = require("axios");
const qs = require("qs");
const fs = require("fs");

// Define the background replacement prompt
const backgroundPrompt =
  "A professional background for corporate headshots, blending a smooth gradient in neutral tones (e.g., gray, beige, or light blue) with subtle abstract artistic elements. Include elegant geometric shapes, soft brushstroke patterns, or layered textures that provide a modern and sophisticated appearance without overpowering the subject. The abstract elements should create depth and interest while maintaining a clean, polished, and corporate-appropriate aesthetic.";

// Assuming you have a list of employee image file paths and corresponding mask file paths
const employees = [
  {
    name: "Jane Smith",
    imagePath: "./source-person-photo-1.png",
    maskPath: "./mask-person-photo-1.png",
  },
  {
    name: "John Doe",
    imagePath: "./source-person-photo-2.png",
    maskPath: "./mask-person-photo-2.png",
  },
  // Add more employees as needed
];

(async () => {
  const accessToken = await retrieveAccessToken();
  await updateEmployeePhotos(accessToken);
})();

async function retrieveAccessToken() {
  let data = qs.stringify({
    grant_type: "client_credentials",
    client_id: process.env.FIREFLY_SERVICES_CLIENT_ID,
    client_secret: process.env.FIREFLY_SERVICES_CLIENT_SECRET,
    scope: "openid,AdobeID,session,additional_info,read_organizations,firefly_api,ff_apis",
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://ims-na1.adobelogin.com/ims/token/v3",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };

  try {
    const response = await axios.request(config);
    const { access_token } = response.data;
    return access_token;
  } catch (error) {
    console.log(error);
  }
}

async function uploadImage({ filePath, fileType, accessToken }) {
  const fileStream = fs.createReadStream(filePath);
  const fileStats = fs.statSync(filePath);
  const fileSizeInBytes = fileStats.size;

  const config = {
    method: "post",
    url: "https://firefly-api.adobe.io/v2/storage/image",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "X-API-Key": process.env.FIREFLY_SERVICES_CLIENT_ID,
      "Content-Type": fileType,
      "Content-Length": fileSizeInBytes,
    },
    data: fileStream,
    maxContentLength: Infinity,
    maxBodyLength: Infinity,
  };

  const response = await axios(config);
  return response.data;
}

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

async function updateEmployeePhotos(accessToken) {
  for (let employee of employees) {
    try {
      // Upload the source and mask images
      const sourceUploadResponse = await uploadImage({
        filePath: employee.imagePath,
        fileType: "image/png",
        accessToken,
      });
      const sourceImageId = sourceUploadResponse.images[0].id;

      const maskUploadResponse = await uploadImage({
        filePath: employee.maskPath,
        fileType: "image/png",
        accessToken,
      });
      const maskImageId = maskUploadResponse.images[0].id;

      // Generate the new image
      const result = await genFill({
        maskId: maskImageId,
        sourceId: sourceImageId,
        prompt: backgroundPrompt,
        accessToken,
      });

      console.log(`Updated photo for ${employee.name} at url ${result.outputs[0].image.url}`);
    } catch (error) {
      console.error(`Error updating photo for ${employee.name}:`, error.response.data);
    }
  }
}
```

### Deepen your understanding

After your Fill Image API implementation is working, open the [API reference documentation](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md) for deeper technical material and advanced use cases.
