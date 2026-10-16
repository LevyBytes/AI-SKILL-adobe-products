# Additional output capabilities

**Specific-layer export:**

```json
{
  "destination": {
    "url": "<OUTPUT_URL>"
  },
  "mediaType": "image/png",
  "layers": [
    {
      "id": 123
    },
    {
      "name": "Background"
    }
  ]
}
```

**ICC color profile:**

```json
{
  "destination": {
    "url": "<OUTPUT_URL>"
  },
  "mediaType": "image/jpeg",
  "iccProfile": {
    "type": "standard",
    "name": "sRGB IEC61966-2.1",
    "imageMode": "rgb"
  }
}
```

For expanded color-management choices, see the [ICC Profile Migration guide](../icc-profile-migration-guide-overview.md).

**Crop mode:**

```json
{
  "destination": {
    "url": "<OUTPUT_URL>"
  },
  "mediaType": "image/png",
  "cropMode": "trim_to_transparency"
}
```
