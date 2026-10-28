# Case 3: Standard profile requests imageMode cmyk

**Input sample:**

```json
{
  "iccProfile": {
    "type": "standard",
    "name": "sRGB IEC61966-2.1",
    "imageMode": "cmyk"
  }
}
```

**Response message:**

> Invalid standard ICC profile image mode

**Solution:** Standard profiles accept `rgb` and `grayscale` only. For CMYK work, use a custom profile with `imageMode: "cmyk"`.
