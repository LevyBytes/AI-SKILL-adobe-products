# Image Trace (beta)

**Public beta**

Image Trace is available as a public beta service. All users can use it, but APIs in this section may change.

In the Image Trace workflow, you submit raster inputs (PNG or JPEG) and receive only **SVG** output (`image/svg+xml`). Inputs are supplied through presigned URLs, status is checked with `GET https://illustrator-api.adobe.io/v1/status/{jobId}`, and the completed SVG is downloaded from the presigned URL. No additional output formats are produced.

- [Submit a Image Trace job](https://raw.githubusercontent.com/AdobeDocs/ffs-illustrator-api/main/src/pages/api/beta/index.md#operation/submitImageVectorizeJob)

For request and response structures, consult the [Image Trace API (public beta)](https://raw.githubusercontent.com/AdobeDocs/ffs-illustrator-api/main/src/pages/api/beta/index.md) reference; for the complete workflow, use the [Image Trace guide](../image-trace-guide/reference-index.md).
