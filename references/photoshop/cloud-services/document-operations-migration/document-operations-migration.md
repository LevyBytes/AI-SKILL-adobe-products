# Document Operations Migration

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

For document-level editing operations, use this guide to move workloads off v1 `/pie/psdService/documentOperations` and onto v2 `/create-composite`.

In v1, cropping, resizing, trimming, and similar document-wide changes went through the `/documentOperations` endpoint for existing PSD files. These edits apply across the whole document instead of single-layer targets.

**V1 Endpoint:**

```text
POST /pie/psdService/documentOperations
```

**V2 Endpoint:**

```text
POST /v2/create-composite
```

For v2 requests, put document operations inside the `edits.document` object of the `/create-composite` payload.

Important:

Only part of the V1 document-operation surface is available in V2 today. Adobe is adding more capabilities over time, so compare your scenario with the supported operations listed below.
