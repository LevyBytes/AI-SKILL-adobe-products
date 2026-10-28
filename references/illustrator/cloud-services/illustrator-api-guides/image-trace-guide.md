# [Image Trace guide](../image-trace-guide/reference-index.md)

For raster-to-vector (Image Trace) jobs, provide `input` (`source.url` + `mediaType`), add optional `settings.preset` when needed, poll through `GET https://illustrator-api.adobe.io/v1/status/{jobId}`, and download SVG output. Consult the [public beta API reference](https://raw.githubusercontent.com/AdobeDocs/ffs-illustrator-api/main/src/pages/api/beta/index.md) alongside it.
