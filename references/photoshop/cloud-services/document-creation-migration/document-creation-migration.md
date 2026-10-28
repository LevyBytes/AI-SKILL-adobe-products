# Document Creation Migration

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

Use this guide to update blank-document creation workflows that currently call v1 `/pie/psdService/documentCreate` so they call v2 `/create-composite`.

In v1, `/documentCreate` created blank Photoshop documents from supplied dimensions, resolution, color mode, and related properties.

**V1 Endpoint:**

```shell
POST /pie/psdService/documentCreate
```

**V2 Endpoint:**

```shell
POST /v2/create-composite
```

Note:

For documents based on artboards, call the separate `/v2/create-artboard` endpoint. See [Artboard Migration guide](../artboard-migration/reference-index.md).
