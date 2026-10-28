# ICC profile control

V2 allows each export to declare its output ICC profile, either from standard Photoshop profiles or from a caller-provided custom profile. V1 did not include ICC profile control.

Any V2 output destination may include `iccProfile`:

```json
{
  "outputs": [
    {
      "mediaType": "image/jpeg",
      "destination": { "url": "https://storage.example.com/output.jpg" },
      "iccProfile": {
        "standard": "sRGB IEC61966-2.1"
      }
    }
  ]
}
```

Standard profiles include `sRGB IEC61966-2.1`, `Adobe RGB (1998)`, `ProPhoto RGB`, and others. A custom `.icc` file can be supplied through `iccProfile.custom.source.url`.

The full profile list and constraints are in [ICC Profile Migration](../../icc-profile-migration-guide-overview/reference-index.md).
