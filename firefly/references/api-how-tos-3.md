# Upscale, Using Async Apis

> Adobe Firefly reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Using the Firefly Upscale Image API; Using the Asynchronous Adobe Firefly APIs.

## Using the Firefly Upscale Image API

This guide covers the Firefly Upscale Image API and shows how it fits production workflows where source fidelity is important.

### Overview

The Firefly Upscale Image API raises the resolution of photos and artwork while keeping the original details, structure, and color fidelity. It is designed to avoid hallucinated detail and invented textures that can appear with aggressive AI upscaling, making it useful when a production workflow depends on source accuracy.

Core benefits:

- Raise the resolution of your own photos and artwork while keeping real detail and avoiding artificial additions.
- Keep generative AI images crisp, including textures and patterns, when zooming in or preparing larger outputs.

The API supports 2x and 4x upscaling with an asynchronous flow: submit the job, receive a job ID, poll for status, and then fetch the output.

### How it works

1. Send an upscale request that includes the source image and requested scale factor.
2. Receive the job ID and polling URL in the response.
3. Keep polling the status endpoint until processing finishes.
4. Download the upscaled image from the output URL returned by the job.

This asynchronous pattern is useful for batch systems that process many assets at the same time.

### Use cases

### 1. Upscaling product images for eCommerce

**Scenario:** A retailer needs higher-resolution catalog images for product detail pages, zoom views, or print-quality output, while avoiding texture or color changes that could misrepresent the item.

**Why Firefly Upscale:** The API focuses on source fidelity. It preserves structural proportions, color accuracy, and tone so the product still looks like the original item instead of a sharpened reinterpretation. Color and tone remain aligned with the source, and fine surface detail such as fabric, packaging, and labels is kept without excessive sharpening.

At 2x scale, results are very stable and usually ready for most catalog workflows. At 4x, clean product shots can still produce strong results, although complex textures may vary and may benefit from a quick review before publication.

[**Recommended scale:**](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/how-tos/upscale/index.md#scale-factor-guidance) Use 2x for most catalog work. Use 4x when a larger resolution increase is required and the source image is high quality.

Expected output:

- Color and tone remain close to the original
- Fine surface details stay intact without excessive sharpening
- Packaging text is generally readable, especially at 4x when the source text is sharp and high contrast
- At 4x, smooth surfaces can show amplified noise; review hero images before use

### 2. Preparing video stills for print

**Scenario:** A videographer pulls a frame from footage and needs to enlarge it for a poster, exhibition print, or editorial layout. Video frames are usually much smaller than print specifications require.

**Why Firefly Upscale:** Video stills often include faces, small structural details, and cinematic grain. Aggressive upscalers can distort those areas or invent content. Firefly Upscale API uses a conservative enhancement approach, improving detail without over-inventing so the source frame remains recognizable and authentic. Low geometric distortion also makes it practical for enlarging stills without warping the composition.

[**Recommended scale:**](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/how-tos/upscale/index.md#scale-factor-guidance) Start with 2x. If the image is still below print requirements, use 4x and plan for possible light retouching to address tonal variation.

Expected output:

- Facial features usually keep a natural softness. Review subtle fine-detail shifts before using portrait-forward prints
- Original footage grain is usually preserved in a controlled way, which supports a filmic look
- At 4x, skies, skin, and other smooth areas may show edge halos or extra noise. These issues are usually minor and can be corrected in post

### Scale factor guidance

**2x** gives the most consistent production-ready output across content types. Structure, color, and tone remain close to the source, with low artifact risk. It is the best starting point for most workflows.

**4x** can work well for clean, high-quality source images and can add clarity for print or large-format use. It is less predictable than 2x, especially on smooth surfaces, gradients, and faces. Review the result before publishing directly at this scale.

### Limitations and considerations

- **4x on complex textures:** Smooth or gradient-heavy surfaces can show extra noise, including skies, skin, and fabric. Plan for light retouching when publishing at this scale.
- **Faces at 4x:** Fine facial detail may shift slightly. Do not use unreviewed output for portrait-forward or identity-sensitive cases.
- **Grain amplification:** This is the issue seen most often across content types, especially in smooth background regions. Clean-background product images usually show little of it.
- **Color space:** Outputs use RGB. Inputs can be either CMYK or RGB.

### API quick reference

**Endpoint:** `POST /v1/images/upsample-async`

**Base URL:** `https://firefly-api.adobe.io`

**Key request parameters:**

| Parameter | Description |
| --- | --- |
| image | Source image (upload ID or pre-signed URL) |
| scale | Supported scale factors are 2, 3, 4 and 6 |

**Authentication:** Bearer token via Adobe IMS + `x-api-key` header

**Response:** Returns a job ID and status URL. Poll the status URL until `status: succeeded`, then retrieve the output image URL. The maximum image output resolution is 6k.

For full schema details, see the [API Reference](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md).

### Ready to get started?

1. Obtain Firefly Services credentials through the [Adobe Developer Console](https://developer.adobe.com/console/).
2. Trade the Client ID and Client Secret for an Adobe IMS access token.
3. Send the source image through the [Firefly Storage Upload](api-concepts.md) endpoint.
4. Start the upscale job using the image ID and requested scale.
5. Poll until the job completes, then download the output.

For authentication setup and examples, refer to [Firefly API Getting Started](api-getting-started.md).

## Using the Asynchronous Adobe Firefly APIs

The newer asynchronous APIs make it easier to manage Firefly requests and responses efficiently.

### Introduction

Earlier Firefly APIs worked synchronously. You could call an API with a text prompt to generate an image, but the Firefly platform waited to return the response until asset generation finished. If you need background on the standard synchronous APIs, see the [Quickstart Guide](api-guides.md).

[Figure: bears in dresses dancing](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/bearsdancingforest.jpg)

Currently, the async operations include:

- [Generate Image Async](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md)
- [Expand Image Async](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md)
- [Fill Image Async](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md)
- [Generate Object Composite Async](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md)
- [Generate Similar Images Async](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md)

### Sequence of Calls

Each workflow follows the same general sequence:

- Send a request with the required and optional arguments.
- Firefly returns a job ID and URL. Use them to check request status or cancel the job.
- Poll the job for a reasonable interval, such as once per second, until a success or failure response arrives.
- When the job succeeds, Firefly returns a result that contains URLs.
- Retrieve the generated assets from those URLs.

### Generating Images with the Async API

This example uses the asynchronous text-to-image endpoint; consult [Generate Image Async API Reference](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md). Authentication is omitted because it follows the synchronous-call pattern.

Required and optional arguments are the same as on the synchronous endpoint. At minimum, send a text prompt. You can also send optional values that guide the final result, including content class, structure controls, and style settings. The main request-code change is the endpoint:

```js
let BASE = "https://firefly-api.adobe.io";

async function asyncTextToImage(prompt, contentClass = "photo", id, token) {
  let body = {
    prompt,
    contentClass,
  };

  let resp = await fetch(`${BASE}/v3/images/generate-async`, {
    method: "POST",
    headers: {
      "x-api-key": id,
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return await resp.json();
}
```

This small `Node.js` wrapper calls the endpoint while passing a text prompt and content class. Other generation options can be added as needed.

The response is now different. With the synchronous endpoint, the method waited until image generation completed. With async generation, a successful request quickly returns a response like this:

```json
{
  "jobId": "urn:ff:jobs:eso851211:86ffe2ea-d765-4bd3-b2fd-568ca8fc36ac",
  "statusUrl": "https://firefly-api.adobe.io/v3/status/urn:ff:jobs:eso851211:86ffe2ea-d765-4bd3-b2fd-568ca8fc36ac",
  "cancelUrl": "https://firefly-api.adobe.io/v3/cancel/urn:ff:jobs:eso851211:86ffe2ea-d765-4bd3-b2fd-568ca8fc36ac"
}
```

Use `statusUrl` and `cancelUrl` to check the request or cancel it. `jobId` can also be saved for logging. This sample repeatedly polls `statusUrl` until Firefly finishes:

```js
async function pollJob(jobUrl, id, token) {
  let status = "";

  while (status !== "succeeded" && status !== "failed") {
    let resp = await fetch(jobUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
        "x-api-key": id,
      },
    });

    let data = await resp.json();
    status = data.status;

    // delay is a utility to 'pause' for X ms
    if (status !== "succeeded" && status !== "failed") await delay(1000);
    if (status === "succeeded") return data;
  }

  return status;
}
```

While a job is running, the response resembles this:

```json
{
  "status": "running",
  "jobId": "86ffe2ea-d765-4bd3-b2fd-568ca8fc36ac"
}
```

After Firefly creates the image successfully, the final status is similar to this:

```json
{
  "status": "succeeded",
  "jobId": "urn:ff:jobs:eso851211:86ffe2ea-d765-4bd3-b2fd-568ca8fc36ac",
  "result": {
    "size": {
      "width": 2048,
      "height": 2048
    },
    "outputs": [
      {
        "seed": 2142812600,
        "image": {
          "url": "https://pre-signed-firefly-prod.s3-accelerate.amazonaws.com/images/0c5c80a3-7189-4bd3-a52e-87b36e4fc47b12345"
        }
      }
    ],
    "contentClass": "art",
    "altText": "A futuristic city glowing at night with neon lights and flying cars streaking across a dark sky."
  }
}
```

The complete script below uses a static prompt, sends the Firefly request, then polls the request status. Once the image is ready, it saves the output locally. Utility functions such as authentication match the synchronous-call pattern, although your implementation may handle authentication differently.

```js
let FIREFLY_SERVICES_CLIENT_ID = process.env.FIREFLY_SERVICES_CLIENT_ID;
let FIREFLY_SERVICES_CLIENT_SECRET = process.env.FIREFLY_SERVICES_CLIENT_SECRET;

let BASE = "https://firefly-api.adobe.io";

async function getAccessToken(id, secret) {
  const params = new URLSearchParams();

  params.append("grant_type", "client_credentials");
  params.append("client_id", id);
  params.append("client_secret", secret);
  params.append(
    "scope",
    "openid,AdobeID,read_organizations,firefly_enterprise,firefly_api,ff_apis",
  );

  let resp = await fetch("https://ims-na1.adobelogin.com/ims/token/v3", {
    method: "POST",
    body: params,
  });

  let data = await resp.json();
  return data.access_token;
}

async function asyncTextToImage(prompt, contentClass = "photo", id, token) {
  let body = {
    prompt,
    contentClass,
  };

  let resp = await fetch(`${BASE}/v3/images/generate-async`, {
    method: "POST",
    headers: {
      "x-api-key": id,
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return await resp.json();
}

async function delay(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, x);
  });
}

async function pollJob(jobUrl, id, token) {
  let status = "";

  while (status !== "succeeded" && status !== "failed") {
    let resp = await fetch(jobUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
        "x-api-key": id,
      },
    });

    let data = await resp.json();
    console.log(data);
    status = data.status;

    if (status !== "succeeded" && status !== "failed") await delay(1000);
    if (status === "succeeded") return data;
  }

  return status;
}

async function downloadFile(url, filePath) {
  let res = await fetch(url);
  const body = Readable.fromWeb(res.body);
  const download_write_stream = fs.createWriteStream(filePath);
  return await finished(body.pipe(download_write_stream));
}

let token = await getAccessToken(FIREFLY_SERVICES_CLIENT_ID, FIREFLY_SERVICES_CLIENT_SECRET);

let result = await asyncTextToImage(
  "a cat living their best life, sleeping in a sunbeam",
  "art",
  FIREFLY_SERVICES_CLIENT_ID,
  token,
);
console.log(result);

let jobResult = await pollJob(result.statusUrl, FIREFLY_SERVICES_CLIENT_ID, token);
console.log(JSON.stringify(jobResult, null, "\t"));

for (let output of jobResult.result.outputs) {
  let fileName = `./${output.seed}.jpg`;
  await downloadFile(output.image.url, fileName);
}
```

### Expanding Images with Async APIs

Async APIs can be even more useful for resize workflows. In this example, a source image is uploaded, then the [Expand Image Asynchronous API](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/api/index.md) resizes it. Instead of resizing one output at a time, the code starts several jobs together so the image can be resized more efficiently.

First, here is a wrapper that uses only a small part of the available parameters. This wrapper needs the source image plus the target size:

```js
async function asyncExpandImage(source, size, id, token) {
  let [width, height] = size.split("x");

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
    headers: {
      "x-api-key": id,
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return await resp.json();
}
```

Next, authenticate and upload the source image:

```js
let token = await getAccessToken(FIREFLY_SERVICES_CLIENT_ID, FIREFLY_SERVICES_CLIENT_SECRET);

let upload = await uploadImage("./source.jpg", "image/jpeg", FIREFLY_SERVICES_CLIENT_ID, token);
let uploadedImage = upload.images[0].id;
```

`uploadImage` wraps the [`upload`](https://developer.adobe.com/firefly-services/docs/firefly-api/guides/api/upload_image/) method. As with synchronous Firefly APIs, signed URLs from supported cloud storage providers can also be used.

Define the target sizes, start the jobs, and wait for them:

```js
let sizes = ["2500x2500", "3000x3000", "3500x3500"];

let expandJobs = [];
for (let size of sizes) {
  console.log(`Create job to expand our source to ${size}`);
  expandJobs.push(asyncExpandImage(uploadedImage, size, FIREFLY_SERVICES_CLIENT_ID, token));
}

let jobs = await Promise.all(expandJobs);
```

Production code should generally add more error handling. At this stage, all three resize jobs have been started.

Now configure polling and wait for completion:

```js
let expandResults = [];
jobs.forEach((j) => {
  expandResults.push(pollJob(j.statusUrl, FIREFLY_SERVICES_CLIENT_ID, token));
});
console.log("Waiting for the jobs to complete...");

let finalResults = await Promise.all(expandResults);
```

After the jobs finish, download the outputs:

```js
console.log("All work done, now downloading.");

finalResults.forEach((r, i) => {
  // we know we only have one result
  downloadFile(r.result.outputs[0].image.url, `source_${sizes[i]}.jpg`);
});
```

Here is the full example script:

```js
let FIREFLY_SERVICES_CLIENT_ID = process.env.FIREFLY_SERVICES_CLIENT_ID;
let FIREFLY_SERVICES_CLIENT_SECRET = process.env.FIREFLY_SERVICES_CLIENT_SECRET;

let BASE = "https://firefly-api.adobe.io";

async function getAccessToken(id, secret) {
  const params = new URLSearchParams();

  params.append("grant_type", "client_credentials");
  params.append("client_id", id);
  params.append("client_secret", secret);
  params.append(
    "scope",
    "openid,AdobeID,read_organizations,firefly_enterprise,firefly_api,ff_apis",
  );

  let resp = await fetch("https://ims-na1.adobelogin.com/ims/token/v3", {
    method: "POST",
    body: params,
  });

  let data = await resp.json();
  return data.access_token;
}

async function asyncExpandImage(source, size, id, token) {
  let [width, height] = size.split("x");

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
    headers: {
      "x-api-key": id,
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return await resp.json();
}

async function delay(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, x);
  });
}

async function pollJob(jobUrl, id, token) {
  let status = "";

  while (status !== "succeeded" && status !== "failed") {
    let resp = await fetch(jobUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
        "x-api-key": id,
      },
    });

    let data = await resp.json();
    status = data.status;

    if (status !== "succeeded" && status !== "failed") await delay(1000);
    if (status === "succeeded") return data;
  }

  // only returns for fails now, meh
  return status;
}

async function uploadImage(filePath, fileType, id, token) {
  let stream = fs.createReadStream(filePath);
  let stats = fs.statSync(filePath);
  let fileSizeInBytes = stats.size;

  let upload = await fetch(`${BASE}/v2/storage/image`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "X-API-Key": id,
      "Content-Type": fileType,
      "Content-Length": fileSizeInBytes,
    },
    duplex: "half",
    body: stream,
  });

  return await upload.json();
}

async function downloadFile(url, filePath) {
  let res = await fetch(url);
  const body = Readable.fromWeb(res.body);
  const download_write_stream = fs.createWriteStream(filePath);
  return await finished(body.pipe(download_write_stream));
}

let token = await getAccessToken(FIREFLY_SERVICES_CLIENT_ID, FIREFLY_SERVICES_CLIENT_SECRET);

let upload = await uploadImage("./source.jpg", "image/jpeg", FIREFLY_SERVICES_CLIENT_ID, token);
let uploadedImage = upload.images[0].id;

let sizes = ["2500x2500", "3000x3000", "3500x3500"];

let expandJobs = [];
for (let size of sizes) {
  console.log(`Create job to expand our source to ${size}`);
  expandJobs.push(asyncExpandImage(uploadedImage, size, FIREFLY_SERVICES_CLIENT_ID, token));
}

let jobs = await Promise.all(expandJobs);

let expandResults = [];
jobs.forEach((j) => {
  expandResults.push(pollJob(j.statusUrl, FIREFLY_SERVICES_CLIENT_ID, token));
});
console.log("Waiting for the jobs to complete...");

let finalResults = await Promise.all(expandResults);
console.log("All work done, now downloading.");

finalResults.forEach((r, i) => {
  // we know we only have one result
  downloadFile(r.result.outputs[0].image.url, `source_${sizes[i]}.jpg`);
});
```
