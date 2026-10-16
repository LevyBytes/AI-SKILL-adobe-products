# Case 4: Standard profile name is invalid

**Input sample:**

```json
{
  "iccProfile": {
    "type": "standard",
    "name": "SRGB_IEC61966_2_1",
    "imageMode": "rgb"
  }
}
```

**Response message:**

> Unknown standard ICC profile name: `SRGB_IEC61966_2_1`

**Solution:** Provide the precise display name, `"sRGB IEC61966-2.1"`, including the spaces and the hyphen.
