# PSD and TIFF outputs

**PSD** and **TIFF** outputs do not expose format-specific parameters in V2; there are no quality or compression options. Apply only the structural field changes:

**V1 PSD:**

```json
{
  "href": "https://...",
  "storage": "external",
  "type": "image/vnd.adobe.photoshop"
}
```

**V2 PSD:**

```json
{
  "destination": {
    "url": "https://..."
  },
  "mediaType": "image/vnd.adobe.photoshop"
}
```

**Cloud PSD (PSDC):**
Prefer `"mediaType": "document/vnd.adobe.cpsd+dcxucf"` as the primary PSDC media type. With ACP (Adobe Cloud Platform) storage or external storage, `document/vnd.adobe.cpsd+dcxucf` and `document/vnd.adobe.cpsd+dcx` both work. The older V1 value `image/vnd.adobe.photoshop+dcx` is not part of V2.
