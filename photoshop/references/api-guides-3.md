# Product Crop, Remove Background, Rendering And Conversions, Retrieve Manifest ...

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Product Crop; Remove Background; PSD Renditions and Conversions; Retrieve a PSD's JSON Manifest; Getting started with Smart Objects; Triggering an Event; Inpainting with Fill Mask.

## Product Crop

The Product Crop endpoint performs smart cropping on images by detecting the subject automatically and keeping it as the focal area.

The `/productCrop` endpoint accepts an input file and crops it. Multilayered PSD files are not supported.

### Known limitations

A known issue can occur when a figure or portrait appears inside the design on a salient object, such as a t-shirt, collectible, or artwork. In those cases, the model may crop around the figure instead of the object itself.

### Implementation example

Example crop request:

```shell
curl -X POST \
  https://image.adobe.io/pie/psdService/productCrop \
  -H "Authorization: Bearer $token"  \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "inputs": [
    {
      "href": "<SIGNED_GET_URL>",
      "storage": "<your_storage>"
    }
  ],
  "options": {
    "unit": "Pixels",
    "width": 0,
    "height": 0
  },
  "outputs": [
    {
      "storage": "<your_storage>",
      "type": "image/jpeg",
      "href": "<SIGNED_POST_URL>"
    }
  ]
}'
```

## Remove Background

This API applies advanced AI to find and isolate the main image subject automatically, then remove the background.

### Overview

The `/v2/remove-background` endpoint identifies an image subject, removes the background, and returns the subject as output. See [Photoshop API v2 reference](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/api/photoshop-v2/index.md) for interactive OpenAPI details covering this endpoint and related v2 operations.

[Figure: alt image](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/assets/imagecutout-cutout-example.png?raw=true)

```shell
curl -i -X POST \
  https://image.adobe.io/v2/remove-background \
  -H 'Authorization: Bearer $token' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: $apiKey' \
  -d '{
    "image": {
      "source": {
        "url": "<signed_get_url>"
      }
    },
    "mode": "cutout",
    "output": {
      "mediaType": "image/png"
    }
  }'
```

The response contains `jobId` and `statusUrl`. Use either `statusUrl` polling or `GET https://image.adobe.io/v2/status/{jobId}` with that `jobId`; stop after `status` reaches `succeeded` or `failed`.

### Customized workflow

Use this customized workflow when remove background output is needed as a Photoshop path rather than a regular mask. It requires chaining calls to the Remove Background service and the Photoshop Service.

To view the path in the path panel, open the result in the Photoshop Desktop application.

The [end-to-end sample bash script](https://github.com/AdobeDocs/cis-photoshop-api-docs/tree/main/sample-code/ic-customized-workflow-app) includes comments for trying this customized workflow.

Sample input/output files:

- [Download the sample input file](https://github.com/AdobeDocs/cis-photoshop-api-docs/blob/main/sample_files/ic_customized_workflow/input.jpg).
- [Download the sample output file](https://github.com/AdobeDocs/cis-photoshop-api-docs/blob/main/sample_files/ic_customized_workflow/result_with_path.jpg).

### Implementation steps

1. [Download the make-file.atn file](https://github.com/AdobeDocs/cis-photoshop-api-docs/blob/main/sample_files/ic_customized_workflow/make-path.atn). Use this file in the Photoshop action API call.
2. First call Remove Background v2 to create an intermediate RGBA remove background result.
3. Then call the Photoshop Action service with the intermediate result and the make-file.atn file to produce the final JPEG result with the desired Photoshop path embedded.
4. Open the final result in the Photoshop Desktop app and check the generated path in the path panel.

### Optional parameters

The V2 endpoint includes extra parameters for improving output quality:

| Parameter | Type | Description |
| --- | --- | --- |
| `mode` | string | Chooses the result form: `cutout` returns the subject on a transparent background, while `mask` returns a grayscale mask. |
| `trim` | boolean | Removes transparent edges from the output image. |
| `backgroundColor` | object | Applies a background fill color (RGBA). |
| `colorDecontamination` | number | Lowers color bleed from the removed background (0–1). |

For current technical details, consult [the removeBackground API reference](https://developer.adobe.com/firefly-services/docs/photoshop/api/photoshop-v2/#operation/removeBackground).

For deprecation timelines and support, see [Deprecation Announcement](https://raw.githubusercontent.com/getting-started/deprecation-announcement/index.md) and [Remove background](https://developer.adobe.com/firefly-services/docs/photoshop/api/photoshop-v2/#operation/removeBackground) in the API reference.

## PSD Renditions and Conversions

Use this endpoint when a workflow needs to build a fresh PSD document and produce renditions at different dimensions.

Use this endpoint to:

- Generate a new PSD document.
- Produce JPEG, TIFF or PNG renditions, with various sizes.
- Ask for thumbnail previews of every layer that can be rendered.
- Convert among the supported file types (PSD, JPEG, TIFF, PNG).

### Creating a document rendition

This implementation sample shows the API `/renditionCreate` producing more than one output rendition:

```shell
curl -X POST \
  https://image.adobe.io/pie/psdService/renditionCreate \
  -H "Authorization: Bearer $token"  \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "inputs":[
    {
      "href":"<SIGNED_GET_URL>",
      "storage":"<your_storage>"
    }
  ],
  "outputs":[
    {
      "href":"<SIGNED_POST_URL1>",
      "width": 512,
      "storage":"<your_storage>",
      "type":"image/jpeg"
    },
    {
      "href":"<SIGNED_POST_URL2>",
      "storage":"<your_storage>",
      "type":"image/png"
    }
  ]
}'
```

The API returns an href while starting the job asynchronously. Use that href with [the job-status polling guide](https://raw.githubusercontent.com/guides/get-job-status/index.md).

## Retrieve a PSD's JSON Manifest

Create a JSON manifest file from a PSD document.

The `/documentManifest` API accepts a single input PSD and produces a JSON manifest file. That JSON manifest represents every layer object included in the PSD document.

### Implementation example

For `Example.psd` kept in external storage, such as Azure, AWS, or Dropbox, a typical cURL request can be structured this way:

```shell
curl -X POST \
  https://image.adobe.io/pie/psdService/documentManifest \
  -H "Authorization: Bearer $token"  \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "inputs": [
    {
      "href":"<YOUR_PRESIGNED_URL>",
      "storage":"<storage>"
    }
  ]
}'
```

The API starts the work asynchronously and sends back a response that includes a URL. The `href` field points to [the job-status polling guide](https://raw.githubusercontent.com/guides/get-job-status/index.md); that same response also carries the JSON manifest.

### Poll for job status

After the job succeeds, the status payload includes the document JSON manifest plus additional metadata for the original input file.

**Response example:**

```json
{
  "jobId": "63c6e812-6cb8-43de-8a60-3681a9ec6feb",
  "outputs": [
    {
      "input": "<SIGNED_GET_URL>",
      "status": "succeeded",
      "created": "2018-08-24T23:07:36.8Z",
      "modified": "2018-08-24T23:07:37.688Z",
      "layers": [
        {
          "bounds": {
            "height": 64,
            "left": 12,
            "top": 1,
            "width": 39
          },
          "id": 549,
          "index": 8,
          "locked": false,
          "name": "CompanyLogo",
          "type": "smartObject",
          "visible": true
        },
        {
          "bounds": {
            "height": 153,
            "left": 31,
            "top": 334,
            "width": 197
          },
          "children": [
            {
              "bounds": {
                "height": 136,
                "left": 29,
                "top": 326,
                "width": 252
              },
              "text": {
                "content": "Reset your customers' expectations.",
                "paragraphStyles": [
                  {
                    "alignment": "left"
                  }
                ],
                "characterStyles": [
                  {
                    "fontAvailable": true,
                    "fontName": "AdobeClean-Bold",
                    "fontSize": 36,
                    "orientation": "horizontal"
                  }
                ]
              },
              "id": 412,
              "index": 6,
              "locked": false,
              "name": "Reset your customers' expectations.",
              "type": "textLayer",
              "visible": true
            },
            {
              "bounds": {
                "height": 67,
                "left": 30,
                "top": 452,
                "width": 230
              },
              "text": {
                "content": "Get our retail experience article and infographic.",
                "paragraphStyles": [
                  {
                    "alignment": "left"
                  }
                ],
                "characterStyles": [
                  {
                    "fontAvailable": true,
                    "fontName": "AdobeClean-Regular",
                    "fontSize": 15,
                    "orientation": "horizontal"
                  }
                ]
              },
              "id": 676,
              "index": 5,
              "locked": false,
              "name": "Get our retail experience article and infographic.",
              "type": "textLayer",
              "visible": true
            }
          ],
          "id": 453,
          "index": 7,
          "locked": false,
          "name": "Headline",
          "type": "layerSection",
          "visible": true
        },
        {
          "bounds": {
            "height": 34,
            "left": 31,
            "top": 508,
            "width": 99
          },
          "id": 762,
          "index": 3,
          "locked": false,
          "name": "CallToAction",
          "type": "smartObject",
          "visible": true
        },
        {
          "bounds": {
            "height": 405,
            "left": 0,
            "top": 237,
            "width": 300
          },
          "id": 751,
          "index": 2,
          "locked": false,
          "name": "BackgroundGradient",
          "type": "layer",
          "visible": true
        },
        {
          "bounds": {
            "height": 515,
            "left": -385,
            "top": -21,
            "width": 929
          },
          "id": 750,
          "index": 1,
          "locked": false,
          "name": "HeroImage",
          "type": "smartObject",
          "visible": true
        },
        {
          "bounds": {
            "height": 600,
            "left": 0,
            "top": 0,
            "width": 300
          },
          "id": 557,
          "index": 0,
          "locked": false,
          "name": "Background",
          "type": "layer",
          "visible": true
        }
      ],
      "document": {
        "height": 600,
        "name": "Example.psd",
        "width": 300
      }
    }
  ],
  "_links": {
    "self": {
      "href": "https://image.adobe.io/pie/psdService/status/8ec6e4f5-b580-41ac-b693-a72f150fec59"
    }
  }
}
```

## Getting started with Smart Objects

Use the Smart Object endpoint to create and modify an embedded Smart Object inside a PSD file.

When a Smart Object is replaced, the replacement is placed inside the original image's bounding box. The replacement scales to fit those original bounds and keeps its aspect ratio, regardless of whether the new image is larger or smaller than the old one. To change the replacement image bounds, include bounds parameters in the API call.

For these sample images, a Smart Object was generated in the "socks" layer, then the API swapped the original artwork for a new pattern to create two versions of the same photograph.

[Figure: alt image](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/assets/smartobject-example.png?raw=true)

### Known limitations

- Documents with transparent pixels, such as some .png files, can produce inconsistent bounds.
- Linked Smart Objects are not currently supported.
- When several layers reference the same embedded Smart Object, update each layer separately so the Smart Object is replaced in those layers.
- To improve performance, smart objects larger than 2000x2000 pixels are rasterized. For best processing behavior, ensure the embedded smart object being replaced has a name made only from alphanumeric characters.

### Implementation examples

### Creating a Smart Object

This example uses the `/smartObject` endpoint to create an embedded smart object.

```shell
curl -X POST \
  https://image.adobe.io/pie/psdService/smartObject \
  -H "Authorization: Bearer $token"  \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "inputs": [
  {
    "href": "<SIGNED_GET_URL>",
    "storage": "<storage>"
  }],
  "options": {
    "layers": [{
      "name": "New",
      "add": {
        "insertTop": true
      },
      "input": {
        "href": "<SIGNED_GET_URL>",
        "storage": "<storage>"
       }
      }
    ]
  },
  "outputs": [
  {
    "storage": "<storage>",
    "href": "<SIGNED_POST_URL>",
    "type": "vnd.adobe.photoshop"
  }
]}'
```

Submitting this API request launches the job asynchronously and returns an href in the payload. Use that href with [the job-status polling guide](https://raw.githubusercontent.com/guides/get-job-status/index.md).

### Replacing the image used by a smart object layer

Here, the `documentOperations` API is used to replace the smartObject.

```shell
curl -X POST \
  https://image.adobe.io/pie/psdService/documentOperations \
  -H "Authorization: Bearer $token"  \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "inputs":[
    {
      "href":"<SIGNED_GET_URL>",
      "storage":"<storage>"
    }
  ],
  "options":{
    "layers":[
      {
        "edit":{},
        "input":{
          "href":"<SIGNED_GET_URL>",
          "storage":"<storage>"
        },
        "smartObject" : {
          "type" : "image/png"
        },
        "attributes":{
          "bounds":{
            "height":515,
            "left":-385,
            "top":-21,
            "width":929
          }
        },
        "id":750,
        "index":1,
        "locked":false,
        "name":"HeroImage",
        "type":"smartObject",
        "visible":true
      }
    ]
  },
  "outputs":[
    {
      "href":"<SIGNED_POST_URL>",
      "storage":"<storage>",
      "type":"vnd.adobe.photoshop"
    }
  ]
}'
```

The request starts the job asynchronously and returns a response containing an href. Use that href with [the job-status polling guide](https://raw.githubusercontent.com/guides/get-job-status/index.md).

### Updating a layer's Smart Object

Here, the layer's Smart Object is replaced.

```shell
curl -X POST \
  https://image.adobe.io/pie/psdService/smartObject \
  -H "Authorization: Bearer $token"  \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "inputs": [
  {
    "href": "<SIGNED_GET_URL>",
    "storage": "<storage>"
  }],
  "options": {
    "layers": [{
      "name": "HeroImage",
      "input": {
        "href": "<SIGNED_GET_URL>",
        "storage": "<storage>"
      }
     }
    ]
  },
  "outputs": [
  {
    "storage": "<storage>",
    "href": "<SIGNED_POST_URL>",
    "type": "vnd.adobe.photoshop"
  }
]}'
```

## Triggering an Event

Include your IMS ORG ID in Photoshop API calls to trigger webhook events.

### Receive events

For background on webhook events and application setup, first read [using webhooks and events](api-getting-started-2.md).

To get Photoshop events delivered to the webhook application, include the IMS ORG ID as a header on the API call that starts the job:

```shell
-H 'x-gw-ims-org-id: <YOUR_IMS_ORG_ID>'
```

### Retrieving a PSD manifest

The `/documentManifest` API can process one or more input PSDs and return JSON manifest files for them. Each JSON manifest describes the layer objects present in the PSD document.

With `Example.psd` stored externally, a typical cURL call for that case can use this structure:

```shell
curl -X POST \
  https://image.adobe.io/pie/psdService/documentManifest \
  -H "Authorization: Bearer $token"  \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -H 'x-gw-ims-org-id: <YOUR_IMS_ORG_ID>' \
  -d '{
  "inputs": [
    {
      "href":"<SIGNED_GET_URL>",
      "storage":"<storage>"
    }
  ]
}'
```

This request launches an asynchronous job and responds with the href used by [the job-status and manifest polling guide](https://raw.githubusercontent.com/guides/get-job-status/index.md).

**Response example:**

```json
{
  "_links": {
    "self": {
      "href": "https://image.adobe.io/pie/psdService/status/63c6e812-6cb8-43de-8a60-3681a9ec6feb"
    }
  }
}
```

### Receive the job's status on the webhook application

The `body` field value holds the job result.

**Response example:**

```json
{
  "event_id": "b412a90e-8bc0-4f0d-931e-9e9b8d24993d",
  "event": {
    "header": {
      "msgType": "JOB_COMPLETION_STATUS",
      "msgId": "8afa1a46-2733-406c-a646-e1c1acdee333",
      "imsOrgId": "<YOUR_IMS_ORG_ID>",
      "eventCode": "photoshop-job-status",
      "_pipelineMeta": {
        "pipelineMessageId": "1586288145511:631472:VA7_A1:142:0"
      },
      "_smarts": {
        "definitionId": "3ee6c9056a9d72fc40e09ddf5fdbb0af752e8e49",
        "runningSmartId": "psmart-yw6wosjksniuuathenny"
      },
      "_adobeio": {
        "imsOrgId": "<YOUR_IMS_ORG_ID>",
        "providerMetadata": "di_event_code",
        "eventCode": "photoshop-job-status"
      }
    },
    "body": {
      "jobId": "63c6e812-6cb8-43de-8a60-3681a9ec6feb",
      "outputs": [
        {
          "status": "succeeded",
          "layers": [
            {
              "id": 2,
              "index": 0,
              "type": "layer",
              "name": "Layer",
              "locked": false,
              "visible": true,
              "bounds": {
                "top": 0,
                "left": 0,
                "width": 100,
                "height": 100
              },
              "blendOptions": {
                "opacity": 100,
                "mode": "normal"
              }
            }
          ],
          "document": {
            "name": "test.psd",
            "width": 1000,
            "height": 1000,
            "bitDepth": 8,
            "imageMode": "rgb",
            "photoshopBuild": "Adobe Creative Imaging Service"
          }
        }
      ],
      "_links": {
        "self": {
          "href": "https://image.adobe.io/pie/psdService/status/8ec6e4f5-b580-41ac-b693-a72f150fec59"
        }
      }
    }
  }
}
```

## Inpainting with Fill Mask

This guide shows how to call the Fill Masked Areas API from code while completing an image inpainting task.

### Overview

This guide performs image inpainting with the Fill Masked Areas API.

In computer vision, image inpainting is a core task; practical uses include image compositing, 3D effects, image re-targeting, and removing or manipulating objects.

The API receives an input image plus an input mask that marks the hole(s) in that image, then returns an image where the hole(s) have been filled.

### About the Fill Masked Areas API

Before moving into code, review the high-level operating model for the Fill Masked Areas API.

- Start with a source image that can be used through one of the supported cloud storage providers.
- Next, supply a _masked_ copy of the image. The mask identifies where the Photoshop API will generate new content.

Now begin the exercise.

### Prerequisites

- Valid credentials. If they are not available yet, start with the Firefly Services [Getting Started](api-guides-2.md) guide to get a `client_id` and `client_secret`.
- Node.js installed on your machine plus basic familiarity with `JavaScript`.
- Upload both images shown below to cloud storage supported by the service.

### Source image

[Figure: Source image](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/assets/source-image-fillMask.jpg)

### Mask image

[Figure: Mask image](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/assets/mask-image-fillMask.jpg)

### Calling the Fill Masked Areas API

Call the [v1/mask-objects](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/api/index.md) endpoint first, then use the generated masks in requests sent to this endpoint.

Below is a minimal request-body example for using the API:

```json
{
  "image": {
    "source": {
      "url": "<source_image_url>"
    }
  },
  "masks": [
    {
      "source": {
        "url": "<mask_image_url>"
      }
    }
  ]
}
```

For image sources, use pre-signed URLs from the cloud storage provider.

NOTE

The Photoshop API includes a `mask-objects` endpoint that can create masks for operations such as inpainting.

### Generated result

The image below shows the outcome after the dog is masked and that masked region is filled: the API produces a new image where the dog has been removed.

[Figure: Generated Result](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/assets/result-fillMask.png)

### Complete sample code

For an end-to-end implementation, use this JavaScript example.

### Complete JavaScript listing

```js
const axios = require("axios");

// Ensure ACCESS_TOKEN environment variable is there with the correct value of access token
const { ACCESS_TOKEN } = process.env;

// REST API's status codes
const STATUS_ACCEPTED = 202;
const DEFAULT_SERVICE_BASE_URL = "https://ff-services-api-stage.adobe.io";

// object containing api endpoints
const apiEndpoints = {
  FILL_MASKED_AREAS: "/v1/fill-masked-areas",
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
 * Function to fill masked areas of image based on the masks provided
 * @param {object} payload - payload with image and masks
 * @param {object} headers - headers to be passed
 * @returns {Promise} - result of the api response
 */
async function fillMaskedArea(headers, serviceBaseUrl, payload) {
  const endpoint = new URL(apiEndpoints.FILL_MASKED_AREAS, serviceBaseUrl).toString();
  return makeServiceApiCall(endpoint, payload, headers);
}

/**
 * Function to fetch token
 * @returns {Promise} - token string
 */
async function fetchAccessToken() {
  return `Bearer ${ACCESS_TOKEN}`;
}

/**
 * Function to generate headers
 * @returns {Promise} - headers object
 */
async function generateHeaders() {
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
  // update maskUrlArray with the mask urls
  const maskUrlArray = ["<your_mask_url>"];
  const headers = await generateHeaders();

  const payload = {
    image: {
      source: {
        url: sourceImageUrl,
      },
    },
    masks: maskUrlArray.map((mask) => ({
      source: {
        url: mask,
      },
    })),
  };
  const result = await fillMaskedArea(headers, serviceBaseUrl, payload);
  const finalImage = result.image.destination.url;
  return finalImage;
}

main();
```

## See also

- [Getting Started](uxp-xmp.md)
