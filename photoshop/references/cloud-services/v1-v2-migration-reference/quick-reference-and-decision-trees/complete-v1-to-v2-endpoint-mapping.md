# Complete V1 to V2 endpoint mapping

| V1 Endpoint | V2 Endpoint | Category | Description |
| --- | --- | --- | --- |
| `/lrService/autoTone` | `/v2/edit` | Edit Operations | Runs an automatic tone adjustment |
| `/lrService/autoStraighten` | `/v2/edit` | Edit Operations | Automatically straightens the image |
| `/lrService/presets` | `/v2/edit` | Edit Operations | Applies Lightroom presets |
| `/lrService/xmp` | `/v2/edit` | Edit Operations | Applies XMP metadata |
| `/lrService/edit` | `/v2/edit` | Edit Operations | Performs manual adjustments |
| `/pie/psdService/renditionCreate` | `/v2/create-composite` | Format Conversion | Converts PSD input to other output formats |
| `/pie/psdService/documentCreate` | `/v2/create-composite` | Document Creation | Creates a new blank document |
| `/pie/psdService/documentOperations` | `/v2/create-composite` | Document/Layer Operations | Handles document-level changes and layer manipulation |
| `/pie/psdService/smartObject` | `/v2/create-composite` | Document/Layer Operations | Replaces or places smart objects through the dedicated endpoint |
| `/pie/psdService/photoshopActions` | `/v2/execute-actions` | Actions | Runs .atn action files |
| `/pie/psdService/actionJSON` | `/v2/execute-actions` | Actions | Runs inline ActionJSON |
| `/pie/psdService/text` | `/v2/execute-actions` | Actions | Edits text layers through the dedicated endpoint |
| `/pie/psdService/productCrop` | `/v2/execute-actions` | Actions | Runs the product crop workflow |
| `/pie/psdService/depthBlur` | Not yet supported (Neural Filters unavailable) | Actions | Runs the depth blur workflow |
| `/pie/psdService/splitView` | `/v2/execute-actions` | Actions | Runs the split view workflow |
| `/pie/psdService/sideBySide` | `/v2/execute-actions` | Actions | Runs the side by side workflow |
| `/pie/psdService/artboardCreate` | `/v2/create-artboard` | Artboards | Builds artboards from images |
| `/pie/psdService/documentManifest` | `/v2/generate-manifest` | Manifest | Produces a PSD manifest |
| `/pie/psdService/status/{jobId}` | `/v2/status/{jobId}` | Status | Reads job status for Photoshop |
| `/lrService/status/{jobId}` | `/v2/status/{jobId}` | Status | Reads job status for Lightroom |
| Sensei PSDC Engine | `/v2/create-composite` | Format Conversion | Converts PSD/Cloud PSD assets; the engine is retiring, not the endpoint |
