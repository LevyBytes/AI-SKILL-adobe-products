# Request structure

Use this general shape for execute-actions requests:

```json
{
  "image": {
    "source": {
      "url": "<INPUT_IMAGE_URL>"
    }
  },
  "options": {
    "actions": [],
    "uxp": {},
    "additionalContents": []
  },
  "outputs": [
    {
      "mediaType": "<OUTPUT_FORMAT>",
      "destination": {
        "validityPeriod": 3600
      },
      "scriptOutputPattern": "<FILENAME_OR_PATTERN>"
    }
  ]
}
```

Action definitions

UXP script

Additional images

**Key fields:**

- **`image.source.url`**: input image URL (required)
- **`options.actions`** (array, max 10) or **`options.uxp`** (single script): one of these is required
- **`options.additionalContents`**: optional list of extra images; up to 25
- **`outputs.mediaType`**: format to create (`image/jpeg`, `image/png`, `image/vnd.adobe.photoshop`, `application/json`)
- **`outputs.scriptOutputPattern`**: required when UXP scripts create files
- **`destination.validityPeriod`**: URL validity duration in seconds (default: 3600)
