# Using Refine Mask, V1

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Enhance image mask quality with Refine Mask; Photoshop API v1 guides.

## Enhance image mask quality with Refine Mask

This guide explains how to use the Refine Masks API from code to improve image mask quality.

### Overview

This tutorial shows how the Mask Refinement API can improve image-mask quality. For image segmentation, graphic design, or other work that depends on crisp mask detail, the API supports smoother borders, cleaner edge treatment, and masks that better match the intended subject.

Use the walkthrough to add this tool to an image-processing workflow and raise the quality of mask-based tasks.

### About the Refine Masks API

Start with the broad flow of the Refine Masks API before moving into code.

- First, place a source image in a supported cloud storage provider. For the current provider list, see the API reference.
- Next, submit a _masked_ copy of that image. The Photoshop API uses the source image as context while refining the mask.
- For the input image, include one mask that requires refinement.

Use the [v1/mask-objects](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/api/index.md) endpoint first to create masks that can be sent with requests to this endpoint.

### Prerequisites

- Valid credentials. If they are not available yet, use the Firefly Services [Getting Started](api-guides-2.md) guide first to create a `client_id` and `client_secret`.
- Node.js on the local machine, plus basic working knowledge of `JavaScript`.
- Put both example assets in a supported cloud storage provider before sending requests.

### Source image

[Figure: Source image](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/assets/source-image-refinement.jpg)

### Mask image

[Figure: Mask image](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/assets/mask-image-refinement.png)

### Using color decontamination

Set `colorDecontamination` to control whether foreground color cleanup runs on the input image. With the value `true`, the API removes foreground color fringing and contamination so the returned RGBA mask is cleaner and more accurate.

### Calling the Refine Masks API

The Refine Masks API accepts a request body like this:

```json
{
  "image": {
    "source": {
      "url": "<source_image_url>"
    }
  },
  "mask": {
    "source": {
      "url": "<mask_image_url>"
    }
  },
  "colorDecontamination": false
}
```

For image sources, use pre-signed URLs issued by the cloud storage provider.

### Generated result

The image below shows the refined mask output.

**Result without color decontamination**

[Figure: Generated Result](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/assets/result-image-refinement.png)

**Result with color decontamination**

[Figure: Color Decontaminated Result](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/assets/result-image1-color.png)

### Complete sample code

For a complete implementation, use the full `JavaScript` sample below.

### Full code sample

```js
const axios = require("axios");

// REST API's status codes
const STATUS_ACCEPTED = 202;
const DEFAULT_SERVICE_BASE_URL = "https://api-facade-service-stage.adobe.io";

// object containing api endpoints
const apiEndpoints = {
  REFINE_MASK: "/v1/refine-mask",
};

/**
 * Function to make get api call
 * @param {string} url - Api end point
 * @param {object} headers - headers to be passed
 * @returns {Promise} - Response of the API call
 */
function makeGetCall(url, headers) {
  return axios.get(url, { headers });
}

/**
 * Function to make post api call
 * @param {string} url - Api end point
 * @param {object} payload - Payload to be passed
 * @param {object} headers - Headers to be passed
 * @returns {Promise} - Response of the API call
 */
function makePostCall(url, payload, headers) {
  return axios.post(url, payload, { headers });
}

/**
 * Function to make service api calls
 *  - post api call to get the status url
 *  - get api call to get the result
 * @param {string} url - Api end point
 * @param {object} payload - Payload to be passed
 * @param {object} headers - Headers to be passed
 * @returns {Promise} - Object of image urls and its properties
 */
async function makeServiceApiCall(url, payload, headers) {
  const postResponse = await makePostCall(url, payload, headers);
  if (postResponse.status === STATUS_ACCEPTED) {
    const statusUrl = postResponse.data.statusUrl;
    const getResult = await makeGetCall(statusUrl, headers);
    return getResult.data;
  } else {
    console.log("Error in serviceApiCall post operation ", postResponse);
  }
}

/**
 * Function to refine mask of the image
 * @param {object} payload - payload with image and masks
 * @param {object} headers - headers to be passed
 * @returns {Promise} - object containing foreground object images
 */
async function refineMask(headers, serviceBaseUrl, payload) {
  try {
    const endpoint = new URL(apiEndpoints.REFINE_MASK, serviceBaseUrl).toString();
    return makeServiceApiCall(endpoint, payload, headers);
  } catch (error) {
    console.log("Error inside refineMask function ", error);
  }
}

/**
 * Function to fetch token
 * @returns {Promise} - token string
 */
async function fetchAccessToken() {
  //TODO: Implement logic to fetch token
  const token = "Bearer <your_access_token>";
  return token;
}

/**
 * Function to generate headers
 * @returns {Promise} - headers object
 */
async function generateHeaders() {
  // const apiKey = await fetchApiKey();
  const token = await fetchAccessToken();
  const headers = {
    "Content-Type": "application/json",
    // Update X-Api-Key with the actual api key
    "X-Api-Key": "<your_api_key>",
    Authorization: token,
  };
  return headers;
}

async function main() {
  // update serviceBaseUrl
  const serviceBaseUrl = "<your_service_base_url>" || DEFAULT_SERVICE_BASE_URL;
  // update sourceImageUrl with the source image url
  const sourceImageUrl = "<your_source_image_url>";
  // update maskUrl with the mask url
  const maskUrl = "<your_mask_url>";
  const headers = await generateHeaders();

  const payload = {
    image: {
      source: {
        url: sourceImageUrl,
      },
    },
    mask: {
      source: {
        url: maskUrl,
      },
    },
    colorDecontamination: false,
  };
  const result = await refineMask(headers, serviceBaseUrl, payload);
  return result;
}

main();
```

## Photoshop API v1 guides

Use this page as an orientation point before opening the API guides. It covers prerequisites, sample code, and environment setup for Photoshop API v1 work.

### Overview

Across these guides, snippets and example implementations rely on one of the [sample PSD](https://github.com/AdobeDocs/cis-photoshop-api-docs/blob/main/sample_files/Example.psd) files. Download it if you want a test asset.

Store that file in accepted external storage before using it. Storage choices are described in the [File Storage](api-getting-started.md) documentation.

### Before you start

Before any example can run, obtain a Bearer token and API key. The [Getting Started](api-getting-started.md) section explains where to retrieve them.

To make the examples easier to run, export the token and API key first:

```shell

```

```shell

```

### Working with code samples

The sample-code sections provide:

- Full cURL examples that include the required headers
- Sample payloads for requests
- Response formats showing what to expect

Before running an example, swap placeholder values for real credentials and file URLs.

### Migrating from v1?

For teams still on the legacy Photoshop or Lightroom APIs (v1), Photoshop API v2 provides one architecture, single-call combined operations, and more flexible storage with a defined migration route.

**Start here:**

- **[Migration to v2 overview](api-v1-to-v2-3.md)** - Covers the changes, breaking differences, and a step-by-step migration path, including a reference table that connects each v1 endpoint to its matching v2 endpoint and guide.
- **[Key improvements and architecture with v2](api-v1-to-v2-3.md)** - Explains the migration value: combined operations, broader storage options, published action files, and additional architecture improvements.

From the migration overview, continue into focused endpoint guides for edit work, format conversion, document creation, layer tasks, actions, artboards, manifest, status, and convenience APIs.

## See also

- [Getting Started](uxp-xmp.md)
