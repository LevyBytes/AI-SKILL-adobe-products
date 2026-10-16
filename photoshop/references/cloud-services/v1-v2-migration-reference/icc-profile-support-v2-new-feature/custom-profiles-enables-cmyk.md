# Custom profiles (enables CMYK)

For CMYK output, provide a custom `.icc` file:

```json
{
  "iccProfile": {
    "type": "custom",
    "name": "U.S. Web Coated (SWOP) v2",
    "imageMode": "cmyk",
    "source": {
      "url": "https://example.com/profiles/custom.icc"
    }
  }
}
```

For custom profiles, `imageMode` may be `"rgb"`, `"grayscale"`, or `"cmyk"`.
