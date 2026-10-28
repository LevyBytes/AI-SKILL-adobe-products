# Case 2: imageMode uses uppercase text

**Input sample:**

```json
{
  "iccProfile": {
    "type": "standard",
    "name": "sRGB IEC61966-2.1",
    "imageMode": "RGB"
  }
}
```

**Response message:**

> Invalid value 'RGB' at path 'outputs[0].iccProfile.imageMode'. Accepted values are: rgb, grayscale

**Solution:** Use lowercase only. Standard profiles allow `"rgb"` and `"grayscale"`; custom profiles can also use `"cmyk"`.
