# About Image Trace (beta)

The **Image Trace** public beta service converts raster artwork (PNG or JPEG) into **SVG-only** output (`image/svg+xml`) through server-side processing similar to Image Trace. No additional export formats are produced. Submit a job that includes an **`input`** object (`source.url` + `mediaType`) plus, when needed, **`settings.preset`** (`enhanced_general` or `high_fidelity_photo`). Processing is asynchronous; check completion by polling **`GET https://illustrator-api.adobe.io/v1/status/{jobId}`**, then use the presigned download URLs returned after a successful job.

For detailed walkthrough steps, see [Image Trace guide](../image-trace-guide/reference-index.md).
