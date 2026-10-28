# About Text‑to‑Image generation

When `referenceBlobs` is empty, **Text‑to‑Image generation** runs, and the API creates a new image from the prompt. Use this mode for image content that should be created entirely from text.

**Sample request payload**

```json
{
  "prompt": "A hyper-detailed illustration of a floating city at sunrise",
  "aspectRatio": "16:9",
  "modelId": "firefly_image",
  "numVariations": 1,
  "referenceBlobs": []
}
```

An empty `referenceBlobs` array selects text-to-image generation.
