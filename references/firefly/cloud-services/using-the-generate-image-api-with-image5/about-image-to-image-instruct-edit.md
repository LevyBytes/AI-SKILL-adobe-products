# About Image‑to‑Image instruct edit

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
        "uploadId": "123e4567-e89b-12d3-a456-426614174000"
      },
      "usage": "general"
    }
  ]
}
```

Upload ID of the refernce image(s)
