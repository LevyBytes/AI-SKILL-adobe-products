# Breaking Changes, Feature Guide

> Adobe Firefly reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Migrating to the Image5 Model; Using the Generate Image API with Image5.

## Migrating to the Image5 Model

Review the API changes introduced by Image5 implementations.

### Overview

Using the Image5 model with the new Generate Image API brings major differences compared with the other Firefly Image APIs.

Because the old schema and the new schema are incompatible, migration means rebuilding the request payload. This guide outlines what changed and how to move an existing implementation forward.

### Breaking schema changes

This API change is a major version update and includes _non-backwards-compatible_ behavior.
Every client needs a _structured migration_.

The new API changes payload and schema requirements substantially. Because these are breaking changes, requests that fail to match the new schema are rejected by the API.

### New control fields

Several new configuration properties are introduced by the new API, and some may be required for particular models:

- `negativePrompt`
- `promptBiasingLocaleCode`
- `contentClass`
- `upsamplerType`
- `visualIntensity`
- `modelSpecificPayload.prompt_reasoner` — selects the prompt reasoning strategy, either `quality` or `speed`. When the value is `quality`, the response contains a populated `altText` field.

### Removed fields

The following fields that older APIs accepted are removed by the new Image5 model API:

- `aspectRatio` - The new API supports size only.
- `generationMetadata` - Clients cannot supply this value anymore.
- `modelVersion` - Callers can no longer select an API version.
- `modelSpecificPayload` - The extension payload block has been removed.
- `output.cai` - CAI directives cannot be configured. If downstream logic depends on CAI or storage controls, move that handling into the service layer.
- `output.storeInputs` - Storage toggle fields are unavailable.

There are no direct substitutes for these fields, so omit them from API request payloads.

### Repurposed fields

These fields have new names and changed meanings:

| Outdated field | New field | Details |
| --- | --- | --- |
| `N` | `numVariations` | Produces variations now, rather than raw N images. |
| `modelId` | `customModelId` | Semantics have changed; it is not a direct mapping. |

### Migration recommendations

Use these recommendations when mapping requests from the older APIs into the Image5 API format.

### Model selection

⚠️ Important: Treat this as more than a simple rename.
The new API has no explicit model-version selector. Choose the model through the higher-level header mechanism.

**Previous-model format**

```json
"modelId": "firefly_image",
  "modelVersion": "image5"
```

**Image5 model format**

```json
"contentClass": "photo",
"customModelId": "string"
```

### Number of images

For image count, switch to the new format.

**Previous-model format**

```json
"n": 1
```

**Image5 model format**

```json
"numVariations": 1
```

### Prompts

The new fields are optional, but they add useful control.

**Previous-model format**

```json
"prompt": "string"
```

**Image5 model format**

````json
"prompt": "string",
"negativePrompt": "string",
"promptBiasingLocaleCode": "string"

## Using the Generate Image API with Image5

This page covers the Image5 model features and workflows.

### Overview

Image5 is a newer model available through the Generate Image API, intended for generating more realistic images than earlier options.

The same request payload supports both **Text‑to‑Image generation** and **Image‑to‑Image instruct edit** operations.
The contents of `referenceBlobs` determine which mode runs.

### About Text‑to‑Image generation

When `referenceBlobs` is empty, **Text‑to‑Image generation** runs, and the API creates a new image from the prompt. Use this mode for image content that should be created entirely from text.

**Sample request payload**

```json
{
  "prompt": "A hyper-detailed illustration of a floating city at sunrise",
  "aspectRatio": "16:9",
  "modelId": "firefly_image",
  "numVariations": 1,
  "referenceBlobs": []  // Empty array indicates Text‑to‑Image generation
}
````

### Prompt Reasoner

Inside `modelSpecificPayload`, `prompt_reasoner` sets the prompt reasoning strategy applied during generation. It supports these two values:

- **`quality`** — turns on the higher-quality prompt reasoning path. The response also carries generated image-description text in `altText`.
- **`speed`** (default) — prioritizes faster generation and leaves `altText` blank.

**Sample request payload**

```json
{
  "prompt": "A beagle running through a park toward its owner",
  "aspectRatio": "4:3",
  "modelId": "firefly_image",
  "numVariations": 1,
  "referenceBlobs": [],
  "modelSpecificPayload": {
    "localeCode": "en-US",
    "prompt_reasoner": "quality"
  }
}
```

### About Image‑to‑Image instruct edit

When `referenceBlobs` contains one or more images, **Image‑to‑Image instruct edit** runs, and the API performs an instruct edit on the supplied image or images. Choose this mode for prompt-driven edits to an existing image when its structure and composition should remain intact.

**Sample request payload**

```json
{
  "prompt": "Add warm sunset lighting and enhance the reflection on the water",
  "modelId": "firefly_image",
  "numVariations": 1,
  "referenceBlobs": [
    {
      "source": {
        "uploadId": "123e4567-e89b-12d3-a456-426614174000" // Upload ID of the refernce image(s)
      },
      "usage": "general"
    }
  ]
}
```
