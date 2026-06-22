# Edit Text, Get Job Status, Granular Labels, Layer Level Edits

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Edit text; Get job status; Generate Human Item Masks: Granular Labels; Photoshop API guides; Layer level edits.

## Edit text

Use the Edit Text endpoint to change text layers inside Photoshop files (PSD files).

In the example images, the original image on the left shows a font change made through Text API:

[Figure: alt image](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/assets/textlayer-example.png?raw=true)

One or more PSD text layers can be edited through the Edit Text endpoint. Users can:

Set text properties such as anti-alias and orientation, and change text contents. Changing only text properties does not alter styling.

Provide custom fonts through the API request body.

Update the text contents.

Replace the font.

Adjust font size.

Set font color as RGB, CMYK, grayscale, or lab.

Switch text orientation between horizontal and vertical.

Set paragraph alignment, including left, center, right, justify, justify left, justify center, and justify right.

Apply text treatments such as strike-through, underline, and capitalization.

Control line and character spacing with leading, tracking, and autoKern settings.

### Known limitations

- Missing fonts in layers are not detected automatically by the API. To avoid replacement when fonts may be absent, include an `href` to the font in `options.fonts`. For more information about supplying custom fonts, see [Font handling](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/guides/edit-text/index.md#font-handling).
- Verify that the input file is a PSD containing at least one text layer.
- Some text attributes, including tracking, leading, and kerning, do not preserve their original values.

### Font handling

For text-layer operations to work correctly, the required fonts for those layers must be present during PSD processing.

In the API request, refer to fonts by the correct Postscript name for each font. Any different name is handled by the API as a missing font.

To supply a custom font, include an href for that font in request `inputs`; use `<font_postscript_name>.<ext>` as the naming pattern.

**Example**

```js
{
  "storage": "external",
  "href": "<STORAGE_URL_TO_OPEN_SANS_CONDENSED_LIGHT_TTF>"
}
```

### Handling missing fonts

Set `manageMissingFonts` in request `options` to control the behavior for missing fonts. Two values are accepted:

- `fail` makes the request/job fail.
- `useDefault` applies the system designated default font: `ArialMT`.

You can also set a global font in the `globalFont` field inside request `options`; that font serves as the default for the current request.

NOTE

For OAuth integrations, Adobe Fonts can also serve as a global font. When the global font is custom, upload it to a supported cloud storage type, then put both `href` and the `storage` type under request `options.fonts`.

### Supported fonts

Supported Postscript fonts:

|---------------------------------- |
| AcuminVariableConcept |
| AdobeArabic-Bold |
| AdobeArabic-BoldItalic |
| AdobeArabic-Italic |
| AdobeArabic-Regular |
| AdobeDevanagari-Bold |
| AdobeDevanagari-BoldItalic |
| AdobeDevanagari-Italic |
| AdobeDevanagari-Regular |
| AdobeFanHeitiStd-Bold |
| AdobeGothicStd-Bold |
| AdobeGurmukhi-Bold |
| AdobeGurmukhi-Regular |
| AdobeHebrew-Bold |
| AdobeHebrew-BoldItalic |
| AdobeHebrew-Italic |
| AdobeHebrew-Regular |
| AdobeHeitiStd-Regular |
| AdobeMingStd-Light |
| AdobeMyungjoStd-Medium |
| AdobePiStd |
| AdobeSongStd-Light |
| AdobeThai-Bold |
| AdobeThai-BoldItalic |
| AdobeThai-Italic |
| AdobeThai-Regular |
| CourierStd |
| CourierStd-Bold |
| CourierStd-BoldOblique |
| CourierStd-Oblique |
| EmojiOneColor |
| KozGoPr6N-Bold |
| KozGoPr6N-Medium |
| KozGoPr6N-Regular |
| KozMinPr6N-Regular |
| MinionPro-Regular |
| MinionVariableConcept-Italic |
| MinionVariableConcept-Roman |
| MyriadArabic-Bold |
| MyriadArabic-BoldIt |
| MyriadArabic-It |
| MyriadArabic-Regular |
| MyriadHebrew-Bold |
| MyriadHebrew-BoldIt |
| MyriadHebrew-It |
| MyriadHebrew-Regular |
| MyriadPro-Bold |
| MyriadPro-BoldIt |
| MyriadPro-It |
| MyriadPro-Regular |
| MyriadVariableConcept-Italic |
| MyriadVariableConcept-Roman |
| NotoSansKhmer-Regular |
| NotoSansLao-Regular |
| NotoSansMyanmar-Regular |
| NotoSansSinhala-Regular |
| SourceCodeVariable-Italic |
| SourceCodeVariable-Roman |
| SourceSansVariable-Italic |
| SourceSansVariable-Roman |
| SourceSerifVariable-Roman |
| TrajanColor-Concept |

### Implementation examples

### Text layer update request

This code sample changes one text layer:

```shell
curl -X POST \
  https://image.adobe.io/pie/psdService/text \
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
        "name": "My Text Layer",
        "text": {
            "content": "CHANGED TO NEW TEXT",
            "orientation": "horizontal",
            "characterStyles": [{
                "size": 15,
                "orientation": "horizontal",
                "color": {
                    "red":255,
                    "green":0,
                    "blue":0
                }
            }],
            "paragraphStyles": [{
              "alignment": "right"
            }]
        }
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

### Updating paired text layers

Use this request for the paired update:

```shell
curl -X POST \
  https://image.adobe.io/pie/psdService/text \
  -H "Authorization: Bearer $token"  \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "inputs": [
    {
      "href": "<SIGNED_GET_URL>",
      "storage": "<storage>"
    }
  ],
  "options": {
    "fonts": [
      {
        "storage": "<storage>",
        "href": "<SIGNED_GET_URL>"
      }
    ],
    "layers": [
      {
        "name": "<name_of_text_layer_1_to_edit>",
        "text": {
            "orientation": "horizontal",
            "contents": "New text Contents 1",
            "antiAlias": "antiAliasSharp",
            "characterStyles": [{
              "autoKern": "metricsKern",
              "fontPostScriptName": "<font_postscript_name>",
              "fontCaps": "allCaps",
              "size": 25,
              "leading": 20,
              "tracking": 20,
              "syntheticBold": true,
              "ligature": true,
              "syntheticItalic": true,
              "color": {
                "blue": 100,
                "green": 200,
                "red": 163
              }
            }],
            "paragraphStyles": [{
              "align": "right"
            }]
        }
      },
      {
        "name": "<name_of_text_layer_2_to_edit>",
        "text": {
          "contents": "New text Contents 2",
          "characterStyles": [{
              "size": 45,
              "stylisticAlternates": true,
              "leading": 100,
              "tracking": 100,
              "baseline": "subScript",
              "strikethrough": true,
              "underline": true,
              "verticalScale": 150,
              "horizontalScale": 200,
              "color": {
                "blue": 300,
                "green": 100,
                "red": 63
              }
            }]
        }
      }
    ]
  },
  "outputs": [
    {
      "href": "<SIGNED_POST_URL>",
      "type": "vnd.adobe.photoshop",
      "storage": "<storage>"
    }
  ]
}'
```

### Changing the font in a text layer

This example changes the font in a text layer named `My Text Layer` to a custom font `VeganStylePersonalUse`. In the `text.characterStyles` section, the `fontName` field value is the custom font's full Postscript name:

```shell
curl -X POST \
  https://image.adobe.io/pie/psdService/text \
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
    "fonts": [
      {
        "storage": "<storage>",
        "href": "<SIGNED_GET_URL_TO_VeganStylePersonalUse.ttf>"
      }
    ],
    "layers":[
      {
        "name": "My Text Layer",
        "text": {
            "content": "CHANGED TO NEW TEXT",
            "orientation": "horizontal",
            "characterStyles": [{
                "size": 15,
                "orientation": "horizontal",
                "color": {
                    "red":255,
                    "green":0,
                    "blue":0
                }
            }],
            "paragraphStyles": [{
              "alignment": "right"
            }]
        }
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

## Get job status

Photoshop API endpoints start asynchronous jobs and include, in the response body, the URL used for polling job status.

### Fetch the status of a job

Invoking any Photoshop API endpoint starts an asynchronous job and returns a response body with the URL for polling that job's status.

After a successful API call returns the job ID, poll the corresponding `href` value to retrieve the job status:

```shell
curl -X GET \
  https://image.adobe.io/pie/psdService/status/<JOB_ID> \
  -H "Authorization: Bearer $token"  \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json"
```

### Poll for job status for all other APIs

When processing finishes successfully, the response body reports the job status for every requested output.

**Example response**

```json
{
  "jobId": "de2415fb-82c6-47fc-b102-04ad651c5ed4",
  "outputs": [
    {
      "input": "<SIGNED_GET_URL>",
      "status": "succeeded",
      "created": "2018-01-04T12:57:15.12345:Z",
      "modified": "2018-01-04T12:58:36.12345:Z",
      "_links": {
        "renditions": [
          {
            "href": "<SIGNED_GET_URL>",
            "width": 512,
            "storage": "<storage>",
            "type": "image/jpeg"
          },
          {
            "href": "<SIGNED_GET_URL>",
            "storage": "<storage>",
            "type": "image/png"
          }
        ]
      }
    }
  ],
  "_links": {
    "self": {
      "href": "https://image.adobe.io/pie/psdService/status/de2415fb-82c6-47fc-b102-04ad651c5ed4"
    }
  }
}
```

## Generate Human Item Masks: Granular Labels

**USAGE GUIDE • ADOBE FIREFLY PHOTOSHOP API • GENERATE HUMAN ITEM MASKS — GRANULAR LABELS**

Feature Guide — `useGranularLabels` | API Version: v1 | April 2026

### 1. Overview

The Generate Human Item Masks endpoint (`/v1/mask-body-parts`) finds and segments human body parts plus clothing items in images, returning separate mask images for each identified region. By default, bilateral body parts, meaning parts that occur on both sides of the body, are returned as one combined mask.

With granular labels enabled, that capability returns side-specific masks for bilateral parts. The response then contains separate, independent masks for the left and right instances of every applicable body part. The request body controls this behavior through the `useGranularLabels` boolean field.

### 2. When to Use Granular Labels

Set `useGranularLabels: true` when a workflow needs:

- **Independent per-limb compositing** — applying shadows, reflections, or lighting effects separately to the left and right sides of a subject.
- **Ground shadow generation** — placing realistic grounding shadows for individual feet or shoes in sports and retail images.
- **Leg and foot reflection effects** — building per-limb mirrored effects while keeping the opposite side from bleeding into the result.
- **High-volume automation** — running large batches of sports player or product imagery where manual mask splitting is impractical.
- **Precision apparel segmentation** — separating left/right sleeves, gloves, or shoes for e-commerce product presentation.

> If both sides of the body are handled the same way in your workflow, such as full-body background removal, granular labels are unnecessary. To keep the standard combined label set and reduce response payload size, omit the flag or set it to `false`.

### 3. API Reference

### HTTP route

```
POST https://image.adobe.io/v1/mask-body-parts
```

### Request fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `image` | object | Yes | Input image object with `source` (URL) and `mediaType` fields. |
| `image.source.url` | string | Yes | Input image presigned URL. Max dimensions: 4000 x 4000 px. |
| `image.mediaType` | string | Yes | Media type for the input image. Accepted: `image/jpeg`, `image/png`. |
| `mask` | object | Yes | Subject mask object with `source` (URL) and `mediaType` fields. |
| `mask.source.url` | string | Yes | Presigned URL for the subject mask image. Must be `image/png`. |
| `useGranularLabels` | boolean | No | When set to `true`, returns side-specific masks for bilateral body parts. Defaults to `false`. |

### 4. Request Examples

### Request with granular labels off

```json
{
  "image": {
    "source": { "url": "https://storage.example.com/athlete.png" },
    "mediaType": "image/png"
  },
  "mask": {
    "source": { "url": "https://storage.example.com/athlete_mask.png" },
    "mediaType": "image/png"
  }
}
```

### Request with granular labels on

```json
{
  "image": {
    "source": { "url": "https://storage.example.com/athlete.png" },
    "mediaType": "image/png"
  },
  "mask": {
    "source": { "url": "https://storage.example.com/athlete_mask.png" },
    "mediaType": "image/png"
  },
  "useGranularLabels": true
}
```

### 5. Response Structure

This endpoint runs work asynchronously. The first response returns `202 Accepted` plus `jobId` and `statusUrl`. Keep polling the status endpoint until `status` becomes `succeeded`; after that, fetch the array of mask objects.

### Polling Status

```
GET https://image.adobe.io/v1/status/{jobId}
```

### Succeeded Response (Granular Labels)

```json
{
  "jobId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "status": "succeeded",
  "masks": [
    {
      "label": "Left Shoe",
      "score": 0.97,
      "boundingBox": { "left": 142, "top": 810, "width": 190, "height": 110 },
      "destination": { "url": "https://storage.adobe.io/..." },
      "mediaType": "image/png"
    },
    {
      "label": "Right Shoe",
      "score": 0.96,
      "boundingBox": { "left": 352, "top": 812, "width": 188, "height": 108 },
      "destination": { "url": "https://storage.adobe.io/..." },
      "mediaType": "image/png"
    },
    {
      "label": "Left Leg",
      "score": 0.98,
      "boundingBox": { "...": "..." },
      "destination": { "url": "https://storage.adobe.io/..." },
      "mediaType": "image/png"
    },
    { "label": "Right Leg", "...": "..." },
    { "label": "Upper Clothes", "...": "..." }
  ]
}
```

### 6. Granular Label Reference

When `useGranularLabels` is `true`, the `masks` array can include the labels below. Non-bilateral labels such as Face, Hair, and Upper Clothes appear the same way in standard mode and granular mode.

| Body Region | Standard Labels | Granular Labels (New) |
| --- | --- | --- |
| Face / Head | Hair, Eyebrow, Eyes, Pupil, Nose, Mouth, Teeth, Face, Neck | Same (no change) |
| Beard | Beard | Same (no change) |
| Ears | Ear (combined) | **Left Ear, Right Ear** |
| Arms | Arm (combined) | **Left Arm, Right Arm** |
| Hands | Hand (combined) | **Left Hand, Right Hand** |
| Legs | Leg (combined) | **Left Leg, Right Leg** |
| Feet / Shoes | Feet / Shoe (combined) | **Left Shoe, Right Shoe** |
| Upper Apparel | Upper Clothes | Same (no change) |
| Lower Apparel | Lower Clothes | Same (no change) |
| Outerwear | Coat | Same (no change) |
| Dress | Dress | Same (no change) |
| Hat | Hat | Same (no change) |
| Glasses | Glasses | Same (no change) |
| Accessories | Accessories | Same (no change) |
| Background | Background | Same (no change) |

### 7. Best Practices

- Turn on `useGranularLabels` only for workflows that need left/right separation. Standard mode returns less data and may complete more quickly.
- Make sure the input mask covers the entire subject accurately. Low-quality subject masks can produce missing or combined left/right detections.
- Persist masks using `label` from the response array instead of relying on position. Read `label` for every mask before identifying it.
- Ground shadow workflows: calculate each foot's shadow anchor from `Left Shoe` and `Right Shoe` separately.
- Reflection workflows: reflect each shoe or leg mask on its own across the vertical axis so per-limb reflections align correctly.
- Keep input images at or below 4000 x 4000 px. Downscale higher-resolution source images before sending them to the API.

### 8. Error Handling

| HTTP Code | `error_code` | Meaning / Action |
| --- | --- | --- |
| 400 | `input_validation_error` | Malformed request body. Check required fields and data types. |
| 401 | `unauthorized` | Missing or invalid bearer token. Re-authenticate. |
| 403 | `forbidden` | Valid token but insufficient permissions. Verify API entitlements. |
| 429 | `too_many_requests` | Rate limit exceeded. Implement exponential backoff. |
| 500 | `internal_server_error` | Transient server error. Retry with backoff before escalating. |

_Adobe Firefly Photoshop API — Generate Human Item Masks Granular Labels Guide • April 2026 • v1_

## Photoshop API guides

Choose among **Photoshop API v2** (recommended for new work), **Photoshop API v1** (legacy), and **Migration** topics that connect v1 workflows to v2 from this page.

### Photoshop API v2 guides

In v2, one API architecture supports operation-combining workflows and storage flexibility.

- **[About Photoshop v2 API](api-photoshop-v2.md)** — Orientation for v2 guide structure and its relationship to migration material.
- **[Photoshop API v2 workflow guides](api-guides-v2.md)** — Workflow walkthroughs for Execute Actions, Smart Objects, benchmarking, and related tasks.

Endpoint-level details are in the [Photoshop API v2 reference](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/api/photoshop-v2/index.md).

### Photoshop API v1 guides

**Deprecated.** Photoshop API v1 has an end-of-life schedule; new integrations should use v2. Keep the v1 guides for maintaining current implementations or checking reference material.

- **[Photoshop API v1 guides overview](api-guides-4.md)** — Covers initial requirements, sample PSD preparation, authentication, code examples, and navigation into the v1 topic guides.

The OpenAPI material for v1 endpoints is available in the [Photoshop API v1 reference](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/api/index.md).

### Migration (v1 to v2)

When a project still depends on legacy v1 Photoshop or Lightroom APIs, these resources help plan and carry out the move to v2.

- **[Migrating to v2 overview](api-v1-to-v2-3.md)** — Covers breaking changes, the recommended migration sequence, and a table pairing legacy endpoints with the corresponding v2 guide.
- **[Key improvements and architecture with v2](api-v1-to-v2-3.md)** — Migration rationale covering combined operations, storage options, published action files, and architecture.

The migration overview points into guides for documents, layers, actions, artboards, manifest, status, convenience APIs, edit operations, and more.

## Layer level edits

Use layer-level edit workflows for Photoshop files to add, modify, move, or delete layers, including adjustment layers, pixel layers, and shape layers.

### Adding, editing and deleting layers

Use the `/documentOperations` API to apply layer-level and/or document-level edits to a PSD, then create new renditions with those changes.

In `options.layers`, pass a flat array containing only the layers targeted by the request body. Match items to your PSD by layer ID.

`add`, `edit`, `move`, and `delete` blocks specify what action applies to a layer object. A layer block without one of those attributes is ignored.

For `add` and `move`, also include one placement attribute: `insertAbove`, `insertBelow`, `insertInto`, `insertTop`, or `insertBottom`, so the service knows the destination.

A layer ID is not required when adding a new layer; the service creates one.

### Implementation examples

### Making an edit to a layer

```shell
curl -X POST \
  https://image.adobe.io/pie/psdService/documentOperations \
  -H "Authorization: Bearer $token"  \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "inputs":[
    {
      "href":"<your_signed_get_url>",
      "storage":"<your_storage>"
    }
  ],
  "options":{
    "layers":[
      {
        "edit":{},
        "id":750,
        "index":1,
        "locked":true,
        "name":"HeroImage",
        "type":"smartObject",
        "visible":true
      }
    ]
  },
  "outputs":[
    {
      "href":"<your_signed_post_url>",
      "storage":"<your_storage>",
      "type":"vnd.adobe.photoshop"
    }
  ]
}'
```

### Adding a new adjustment layer

This example adds a new `brightnessContrast` adjustment layer at the top of the PSD:

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
        "add":{
          "insertAbove": {
            "id": 549
          }
        },
        "adjustments":{
          "brightnessContrast":{
            "brightness":25,
            "contrast":-40
          }
        },
        "name":"NewBrightnessContrast",
        "type":"adjustmentLayer"
      }
    ]
  },
  "outputs":[
    {
      "href":"<SIGNED_POST_URL>",
      "storage":"<storage>",
      "type":"image/jpeg"
    }
  ]
}'
```

After the API call starts its asynchronous job, the response includes an href. Use that returned href when you [check job status](https://raw.githubusercontent.com/guides/get-job-status/index.md).

### Editing a pixel layer

Here the image in an existing pixel layer is replaced: the `Hero Image` layer inside `Example.psd`.

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
      "storage":"<your_storage>"
    }
  ],
  "options":{
    "layers":[
      {
        "edit":{},
        "input":{
          "href":"<SIGNED_GET_URL>",
          "storage":"<your_storage>"
        },
        "bounds":{
          "height":405,
          "left":0,
          "top":237,
          "width":300
        },
        "id":751,
        "index":2,
        "locked":false,
        "name":"BackgroundGradient",
        "type":"layer",
        "visible":true
      }
    ]
  },
  "outputs":[
    {
      "href":"<SIGNED_POST_URL>",
      "storage":"<your_storage>",
      "type":"vnd.adobe.photoshop"
    }
  ]
}'
```

This API call launches an asynchronous job and returns a response with an href. Use that href to [check job status](https://raw.githubusercontent.com/guides/get-job-status/index.md).
