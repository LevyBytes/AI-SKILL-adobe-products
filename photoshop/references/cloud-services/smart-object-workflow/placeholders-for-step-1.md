# Placeholders for step 1

Set these values in the payload:

| Placeholder | Description |
| --- | --- |
| `<SIGNED_INPUT_ASSET_GET_URL>` | Presigned GET URL for your input asset (a PSD file). |
| `<SIGNED_SMART_OBJECT_ASSET_GET_URL>` | Presigned GET URL for the external file (PNG, JPEG, PSD, etc) to add as a new linked smart object layer. Placement is at the top of the layer stack, as specified by the placement field. |
| `<SIGNED_OUTPUT_POST_URL>` | Presigned POST (or PUT) URL where the output asset will be uploaded. In this example, the output is a PSD file as specified by the mediaType field |
