# Manifest Migration

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

Use this guide to migrate the v1 document manifest endpoint to `/v2/generate-manifest`.

The manifest generation endpoint extracts detailed PSD document data such as:

- Dimensions and properties for the document
- Hierarchy and structure for layers
- Layer properties together with bounds
- Optional thumbnails for layers
- Metadata in XMP

**V1 Endpoint:**

- `/pie/psdService/documentManifest`

**V2 Endpoint:**

- `/v2/generate-manifest`
