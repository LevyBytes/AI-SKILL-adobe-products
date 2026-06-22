# Custom Models, Image Upload, Masking, Placement ...

> Adobe Firefly reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Custom Models; Image Upload; Masking; Placement; Understanding Firefly API Seeds; Structure Reference Images; Style Reference Images.

## Custom Models

Firefly's Custom Models API supports large-scale generation of image variations aligned to a brand. The page introduces concepts needed for custom models.

### Overview

Custom models let teams reproduce recognizable brand styles, characters, objects, and composition patterns.
After training, the model can be supplied during image generation so new visuals stay aligned with brand expectations at scale.

### Training modes

Custom models can be trained for several visual-design concerns:

- **Subject Models:** These models capture a particular character, product, or object.
  A subject model, for instance, can keep a brand mascot recognizable across different generated scenes.

- **Style Models:** These models capture aesthetic signals such as color palettes, patterns, brush stroke techniques, and illustration cues so generated assets share a consistent style that matches the brand's look and feel.

### Asset IDs

Adobe hosts custom models as secure assets, making them straightforward to organize, version, and reuse. Every custom model receives its own asset ID.

Asset IDs make it possible to manage several models while tracking updates and preserving a record of the styles, subjects, or structures represented by earlier versions.

Include the asset ID in API requests when generated images should use the learned traits from that specific model.

### Image generation with a custom model

To generate with a custom model, call `/v3/images/generate-async` and send the `x-model-version` header. That header selects the model version used for the image generation request.

### Example requests

### cURL

```bash
curl --request POST 'https://firefly-api.adobe.io/v3/images/generate-async' \
--header 'x-model-version: image3_custom' \
...
--data "{
    \"prompt\": \"An almond seed in a warm setting\",
    \"customModelId\": \"${CUSTOM_MODEL_ID}\"
  }"
```

### Python

```python
def generate_images_with_custom_model(access_token, custom_model_id):
    url = 'https://firefly-api.adobe.io/v3/images/generate-async'
    headers = {
      'x-model-version':'image3_custom',
      ...
    }

    data = {
        "prompt": "An almond seed in a warm setting",
        "customModelId": custom_model_id
    }

    response = requests.post(url, headers=headers, json=data)
    response.raise_for_status()
    result = response.json()
    print("Generate Image Response:", result)
    return result

```

### JavaScript

```js
async function generateImagesWithCustomModel(accessToken, customModelId) {
  const config = {
    method: "post",
    url: "https://firefly-api.adobe.io/v3/images/generate-async",
    headers: {
    "x-model-version":"image3_custom",
    ...
  },
  data: JSON.stringify({
      "prompt": "An almond seed in a warm setting",
      "customModelId": customModelId
    })
  };

  const response = await axios.request(config);
  return response.data;
}
```

## Image Upload

Work with images through Firefly APIs.

### Overview

Several Firefly API operations include image uploads in the transaction. Firefly API supports two upload approaches:

1. **Upload Endpoint:** Upload a local image through Firefly's Upload Endpoint. The operation creates an image ID for later API calls.
2. **Pre-signed URLs:** Let Firefly APIs access images from **Azure**, **AWS**, or **Dropbox** pre-signed URLs.

### Using the Upload Endpoint

Firefly Upload Endpoint accepts images sent directly from local storage. The response includes an image ID that subsequent API operations can reference.

### Prerequisites

If you still need a Firefly **Client ID** or **Access Token**, retrieve them first through the [Authentication Guide](api-getting-started.md). **Keep these credentials protected, and do not place them in client-side or public code.**

### Upload Source Image

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

### Pre-signed URLs

When the Firefly Upload Endpoint is not the preferred path, images may instead be referenced through pre-signed URLs on supported hosts. Supported domains currently include:

- `*.amazonaws.com`
- `*.windows.net`
- `*.dropboxusercontent.com`

### Image Formats

Allowed formats are `image/jpeg`, `image/png`, and `image/webp`.

## Masking

Control Firefly API image edits with masks.

| --- | --- |
| [Figure: a picture of a person with a green scenic background](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/masking-concept-original.jpg) Image | [Figure: a mask of a person shape with a white background](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/masking-concept-mask.jpg) Image Mask |

### Overview

Masking limits edits to selected parts of an image while keeping the remaining regions intact. It is useful when an operation needs exact control over which image areas change.

In Firefly APIs, masks can support workflows for filling images, expanding images, and compositing images.

### Mask

A mask is a grayscale layer over an image. Its tones indicate the regions that stay unchanged and the regions available for editing:

- **Black** areas are **protected**. Edits requested by the operation do not affect these regions.
- **White** areas are **exposed**. Requested edits apply only in the white zones.

### Example

### Original Image

[Figure: a picture of a person with a green scenic background](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/masking-concept-original.jpg)

### Mask

[Figure: a mask of a person shape with a white background](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/masking-concept-mask.jpg)

Here, the white background leaves the park scenery open to the requested edits.

Treat the white portions as the lit editable zones and the black portions as covered zones that remain protected from alteration.

### Inverted Mask

Inverting a mask swaps the black and white regions:

- Areas that were **black** turn **white**, making them **exposed** as editable zones.
- Areas that were **white** turn **black**, making them **protected** against changes.

### Example

[Figure: a mask of a person shape with a white background](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/masking-concept-mask.jpg)

With the original mask above, only the park scenery can be edited. The person is left unchanged.

[Figure: an inverted mask of a person shape with a black background](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/masking-concept-inverted.png)

With the inverted mask above, only the person can be edited. The park scenery is left unchanged.

Mask inversion quickly flips which areas are editable, giving you a simple way to target a different part of the image during editing.

## Placement

Control image positioning with placement.

| --- | --- |
| [Figure: expanded product with placement alignment top right](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/sevoi-top-right.png) Right Alignment | [Figure: expanded product with placement alignment top left](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/sevoi-top-left.png) Left Alignment |

### Overview

The Firefly APIs `placement` object controls image size and position in the final generation. Use it when the output needs exact alignment or inset values. Placement can specify either of these:

- **Alignment:** Controls how the image lines up inside the frame.
- **Inset:** Provides exact margins for the image inside the frame.

### Placement with Alignment

Use the alignment option to position the image against the frame by setting horizontal and vertical alignment values.

```json
"placement": {
    "alignment": {
        "horizontal": "left",
        "vertical": "top"
    }
}
```

In this example, the image is aligned with the frame's top-left corner.

### Placement with Inset

The inset option sets pixel margins for all four frame edges, controlling both image size and placement in the result.

```json
"placement": {
    "inset": {
        "left": 500,
        "top": 0,
        "right": 400,
        "bottom": 40
    }
}
```

The sample positions the image using:

- Left margin: 500 pixels
- Top margin: 0 pixels
- Right margin: 400 pixels
- Bottom margin: 40 pixels

## Understanding Firefly API Seeds

Seeds make it possible to create related AI images across multiple API calls.
This section explains seeds and their role in Firefly AI.

| --- | --- | --- |
| [Figure: original image](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/seed-concept-original-image.jpeg) Original Image | [Figure: same seed variation](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/seed-concept-same-seed-regeneration.jpeg) Same Seed Variation | [Figure: different seed variation](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/seed-concept-different-seed-regeneration.jpeg) Different Seed Variation |

### About seeds

When Firefly AI creates an image, it starts by selecting a random number known as a "seed". For AI generation, the seed is the starting value, or set of values, used by a random number generator (RNG) to vary the output.

Because computer programs are deterministic, they do not produce true randomness. A random seed enables AI [pseudorandomness](https://en.wikipedia.org/wiki/Pseudorandomness), which allows image results to differ even when the rest of the parameters stay unchanged. Reusing the same seed, prompt, and presets would produce the same image each time.

When Firefly produces an image you want to keep and adjust more precisely with other Firefly image options, such as style presets or reference images, use that image's seed to constrain variation and move closer to the desired result.

### Concepts in action

Prerequisites

For this exercise, you need a Firefly **Client ID** and **Access Token**. The [Authentication Guide](api-getting-started.md) explains how to retrieve them. **Keep these credentials protected, and do not place them in client-side or public code.**

### Find the seed

1. In a protected terminal session, set environment variables for your **Client ID** and **Access Token** with `export`:

```bash

```

2. Run this command to request a futuristic city image from Firefly:

```bash
curl --location 'https://firefly-api.adobe.io/v3/images/generate-async' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header "x-api-key: $FIREFLY_SERVICES_CLIENT_ID" \
--header "Authorization: Bearer $FIREFLY_SERVICES_ACCESS_TOKEN" \
--data '{
    "prompt": "a futuristic future cityscape with flying cars"
}'
```

Firefly returns async job metadata quickly:

```json
{
  "jobId": "<YOUR_JOB_ID>",
  "statusUrl": "https://firefly-epo854211.adobe.io/v3/status/urn:ff:jobs:...",
  "cancelUrl": "https://firefly-epo854211.adobe.io/v3/cancel/urn:ff:jobs:..."
}
```

3. Check job status by using the `jobId`:

```bash
curl -X GET "https://firefly-api.adobe.io/v3/status/<YOUR_JOB_ID>" \
    -H "x-api-key: $FIREFLY_SERVICES_CLIENT_ID" \
    -H "Authorization: Bearer $FIREFLY_SERVICES_ACCESS_TOKEN" \
    -H "Content-Type: application/json"
```

Once Firefly finishes generating the image, the final-status JSON includes the image seed in `outputs` along with other response details.

The following JSON shows a sample response for the generated image:

```json
{
  "status": "succeeded",
  "jobId": "urn:ff:jobs:epo854211:783e1c22-5a15-4a01-ab2b-32966a06ce6c",
  "result": {
    "size": {
      "width": 2048,
      "height": 2048
    },
    "outputs": [
      {
        "seed": 1842533538, // Here is the seed for our generated image
        "image": {
          "url": "https://pre-signed-firefly-prod.s3-accelerate.amazonaws.com/images/asdf-1234..."
        }
      }
    ],
    "contentClass": "art",
    "altText": "A futuristic city with towering glass buildings and glowing neon signs under a twilight sky."
  }
}
```

[Figure: a picture of a futuristic city 1](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/seedless-city-1.jpeg)

### Generate a seed image

Keep the original seed while adjusting other image generation options, including style presets or size.
Create related cityscape images with this seed:

`1842533538`

|  |  |
| --- | --- |
| ![a picture of a futuristic city 1](../../images/seedless-city-1.jpeg) Original Image | ![a variation of futuristic city 1](../../images/seeded-city-1.jpeg) Same Seed Image with Preset Variation |

1. Generate a cityscape variation with the command below. It applies the "landscape photography" and "science fiction" [style presets](../style-presets/index.md); add other options while experimenting.

```bash
curl --location 'https://firefly-api.adobe.io/v3/images/generate-async' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header "x-api-key: $`FIREFLY_SERVICES_CLIENT_ID`" \
--header "Authorization: Bearer $`FIREFLY_SERVICES_ACCESS_TOKEN`" \
--data '{
    "prompt": "a futuristic future cityscape with flying cars",
    "seeds": [
        1842533538
    ],
    "style": {
        "presets": [
            "landscape_photography", "science_fiction"
        ]
    }
}'
```

Firefly returns async job metadata quickly:

```json
{
  "jobId": "<`YOUR_JOB_ID`>",
  "statusUrl": "https://firefly-epo854211.adobe.io/v3/status/urn:ff:jobs:...",
  "cancelUrl": "https://firefly-epo854211.adobe.io/v3/cancel/urn:ff:jobs:..."
}
```

2. Fetch the completed output by querying with the `jobId`:

```bash
curl -X GET "https://firefly-api.adobe.io/v3/status/<`YOUR_JOB_ID`>" \
    -H "x-api-key: $`FIREFLY_SERVICES_CLIENT_ID`" \
    -H "Authorization: Bearer $`FIREFLY_SERVICES_ACCESS_TOKEN`" \
    -H "Content-Type: application/json"
```

Visible differences remain, but shared details persist. The seed drives those common traits.

## Structure Reference Images

Structure Reference can be used when generated images should keep a similar layout or form.

| --- | --- |
| [Figure: mountain](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/structure-image-reference-mountain.jpeg) Structure Reference Image | [Figure: volcano](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/structure-image-reference-volcano.jpeg) Generated Image

### Understanding Firefly's Structure Reference

A reference image can guide Firefly generation through Structure Reference, transferring composition cues such as outline and depth while allowing the resulting image to differ in detail, style, or mood. Used together with [Firefly's Style Reference](api-concepts.md), it adds control that goes beyond the prompt text.

In Firefly's Image APIs, the `structure` parameter exposes this capability through two properties:

- `strength`: accepts a value from `1` through `100` and sets how strongly the output follows the reference image. If `strength` is omitted, Firefly uses `50`.
- `imageReference`: supplies the object that points to the reference-image source.

### Concepts in action

Before you start

For this exercise, prepare a Firefly **Client ID** and **Access Token**. The [Authentication Guide](api-getting-started.md) explains how to get them. **Keep these credentials secure, and do not place them in client-side or public code.**

### Specifying strength

The `strength` value lets you tune how much the generated images echo the reference.

1. Start from the mountain reference image in the page-top example. Use the context menu on the "Structure Reference Image" to save it on your desktop.

2. After saving it, send the image to Firefly's storage API. In the command below, adjust the `--data-binary` path for your machine:

```bash
curl --location 'https://firefly-api.adobe.io/v2/storage/image' \
--header 'Content-Type: image/webp' \
--header 'Accept: application/json' \
--header "x-api-key: $`FIREFLY_SERVICES_CLIENT_ID`" \
--header "Authorization: Bearer $`FIREFLY_SERVICES_ACCESS_TOKEN`" \
--data-binary '@/Users/<`YOUR_MACHINE_USER_NAME`>/Desktop/structure-image-reference-mountain.webp'
```

Expect a response in this shape:

```json
{ "images": [{ "id": "0eb8584a-b850-4c4c-a234-185d6378ecb6" }] }
 //Your images.id here will be unique
```

3. Make the ID available for the following script:

```bash

```

4. Create a new image from the uploaded image. The next command demonstrates the effect of the `strength` parameter on output similarity.
   Try `100` for the initial `strength`, then test alternate settings.

```bash
curl --location 'https://firefly-api.adobe.io/v3/images/generate-async' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header "x-api-key: $`FIREFLY_SERVICES_CLIENT_ID`" \
--header "Authorization: Bearer $`FIREFLY_SERVICES_ACCESS_TOKEN`" \
--data '{
  "numVariations": 4,
  "prompt": "a photo of a volcano",
  "structure": {
    "strength": 100,
    "imageReference": {
      "source": {
        "uploadId": "'$`FIREFLY_UPLOAD_ID`'"
      }
    }
  }
}'
```

For the asynchronous job, the API answers quickly with a payload like this:

```json
{
  "jobId": "<`YOUR_JOB_ID`>",
  "statusUrl": "https://firefly-epo854211.adobe.io/v3/status/urn:ff:jobs:...",
  "cancelUrl": "https://firefly-epo854211.adobe.io/v3/cancel/urn:ff:jobs:..."
}
```

5. Use the `jobId` to retrieve the result:

NOTE

With `numVariations` set this way, the response creates four generated images for comparison and returns four URLs.

```bash
curl -X GET "https://firefly-api.adobe.io/v3/status/<`YOUR_JOB_ID`>" \
    -H "x-api-key: $`FIREFLY_SERVICES_CLIENT_ID`" \
    -H "Authorization: Bearer $`FIREFLY_SERVICES_ACCESS_TOKEN`" \
    -H "Content-Type: application/json"
```

## Style Reference Images

Style Reference images let generated variations follow a chosen style, color treatment, artistic approach, or atmosphere.

| --- | --- |
| [Figure: mountain](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/style-image-reference-mountain.jpeg) Style Reference Image | [Figure: dog](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/style-image-reference-dog.jpeg) Generated Image

### Using a Style Reference

An existing image can act as a Style Reference, steering the visual treatment of generated image variations. Style reference is useful when multiple generated assets should share a consistent appearance.

Together with a [Structure Reference][1], this feature provides image-generation control beyond the prompt alone.

### Specifying strength

Add a `strength` value from `1` to `100` on the style object to set how strongly the reference image affects generation. If strength is not provided, the value falls back to `50`.

### Concepts in action

This exercise uses a style reference image to create several generated variations.

Before you start

For the walkthrough, you need a Firefly **Client ID** and **Access Token**. The [Authentication Guide][2] shows how to obtain them. **Keep these credentials secure, and do not place them in client-side or public code.**

1. In a secure terminal, use `export` to place the **Client ID** and **Access Token** into environment variables:

```bash

```

2. Save the mountain image from the top of this page on your desktop as _style-image-reference-mountain.webp_. The later request uses that style to generate several image variations.

3. Call the endpoint below to upload the saved image to Firefly's storage API. Update `--data-binary` so it references the file you saved:

```bash
curl --location 'https://firefly-api.adobe.io/v2/storage/image' \
--header 'Content-Type: image/webp' \
--header 'Accept: application/json' \
--header "x-api-key: $`FIREFLY_SERVICES_CLIENT_ID`" \
--header "Authorization: Bearer $`FIREFLY_SERVICES_ACCESS_TOKEN`" \
--data-binary '@/Users/<`YOUR_MACHINE_USERNAME`>/Desktop/style-image-reference-mountain.webp'
```

The upload response returns an identifier in this format:

```json
{ "images": [{ "id": "0eb8584a-b850-4c4c-a234-185d6378ecb6" }] }
```

4. Store the `id` for use by the following script:

```bash

```

5. Start generation from the uploaded image with this request:

```bash
curl --location 'https://firefly-api.adobe.io/v3/images/generate-async' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header "x-api-key: $`FIREFLY_SERVICES_CLIENT_ID`" \
--header "Authorization: Bearer $`FIREFLY_SERVICES_ACCESS_TOKEN`" \
--data '{
  "numVariations": 4,
  "prompt": "a friendly dog",
  "style": {
    "imageReference": {
      "source": {
        "uploadId": "'$`FIREFLY_UPLOAD_ID`'"
      }
    }
  }
}'
```

For the asynchronous job, the request immediately returns a response in this form:

```json
{
  "jobId": "<`YOUR_JOB_ID`>",
  "statusUrl": "https://firefly-epo854211.adobe.io/v3/status/urn:ff:jobs:...",
  "cancelUrl": "https://firefly-epo854211.adobe.io/v3/cancel/urn:ff:jobs:..."
}
```

6. Use the `jobId` to retrieve the result:

NOTE

Because `numVariations` is set to four, the result includes four generated images that are straightforward to compare, with four returned URLs.

```bash
curl -X GET "https://firefly-api.adobe.io/v3/status/<`YOUR_JOB_ID`>" \
    -H "x-api-key: $`FIREFLY_SERVICES_CLIENT_ID`" \
    -H "Authorization: Bearer $`FIREFLY_SERVICES_ACCESS_TOKEN`" \
    -H "Content-Type: application/json"
```

[1]: ../structure-image-reference/index.md
[2]: ../../../getting-started/index.md
