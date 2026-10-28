# Case 1: PSDC output includes ICC profile data

**Input sample:**

```json
{
  "mediaType": "document/vnd.adobe.cpsd+dcx",
  "iccProfile": {
    "type": "standard",
    "name": "sRGB IEC61966-2.1",
    "imageMode": "rgb"
  }
}
```

**Response message:**

> ICC profiles are not currently supported for PSDC (Photoshop Cloud Document) output format. Please remove the iccProfile field or use a different output format (JPEG, PNG, TIFF, or PSD) if ICC profile support is required.

**Solution:** Drop `iccProfile` from PSDC outputs, or choose JPEG, PNG, TIFF, or PSD.
