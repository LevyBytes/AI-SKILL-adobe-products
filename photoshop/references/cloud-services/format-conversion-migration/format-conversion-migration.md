# Format Conversion Migration

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

Use this migration note to update format-conversion and export workflows: the old v1 `/pie/psdService/renditionCreate` route becomes the v2 `/create-composite` route.

In v1, `/renditionCreate` mainly handled **PSD conversion and export to other formats**, including JPEG, PNG, and Cloud PSD. Its role was rendering/export; document edits and layer operations were outside that scope.

**V1 Endpoint:**

```text
POST /pie/psdService/renditionCreate
```

**V2 Endpoint:**

```text
POST /v2/create-composite
```
