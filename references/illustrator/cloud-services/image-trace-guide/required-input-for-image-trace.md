# Required input for Image Trace

Use this request structure:

| Parameter | Required | Description |
| --- | --- | --- |
| `input` | Yes | Details for the source file. |
| `input.source.url` | Yes | Pre-signed URL for the file supplied as input. |
| `input.mediaType` | Yes | MIME type for the supplied file; allowed choices: `image/png` or `image/jpeg`. |
| `settings` | No | Optional object that contains only `preset` (see below). |
