# Case 6: grayscale is spelled incorrectly

**Input sample:**

```json
{
  "iccProfile": {
    "type": "standard",
    "name": "sRGB IEC61966-2.1",
    "imageMode": "greyscale"
  }
}
```

**Response message:**

> Invalid value 'greyscale' at path 'outputs[0].iccProfile.imageMode'. Accepted values are: rgb, grayscale

**Solution:** This API expects the American spelling, `"grayscale"`, rather than `"greyscale"`.
