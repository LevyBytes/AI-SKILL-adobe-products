# Custom profile example

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

For CMYK workflows, custom profiles can set `imageMode: "cmyk"`; standard profiles do not offer that mode.
