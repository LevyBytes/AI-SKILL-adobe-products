# Workflow

1. **Upload** the raster file to your storage service, then get a **presigned GET URL** or an equivalent temporary download URL supported by that platform.
2. **Submit** `POST https://illustrator-api.adobe.io/beta/images/vectorize`; include `input`, made up of the source URL and `mediaType`, and add optional `settings.preset` only when needed. See [Image Trace API (public beta)](https://raw.githubusercontent.com/AdobeDocs/ffs-illustrator-api/033ed1d5ffbf17213aefd11b5a39a0da218f8d06/src/pages/api/beta/index.md) for schema details.
3. **Poll** `GET https://illustrator-api.adobe.io/v1/status/{jobId}` with the `jobId` or `statusUrl` returned by submission until `status` becomes `succeeded` or `failed`.
4. **Download** the SVG output from the presigned URLs listed in the `outputs` array after the job succeeds.
