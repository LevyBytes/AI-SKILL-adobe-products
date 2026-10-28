# Replace smart object placeholders

Set these values in the payload:

| Placeholder | Description |
| --- | --- |
| `<SIGNED_INPUT_ASSET_GET_URL>` | Presigned GET URL for your input PSD. This PSD must contain an existing smart object layer. |
| `<EXISTING_SMART_OBJECT_LAYER_NAME>` | The exact name of the smart object layer to replace (as it appears in the Layers panel). Use the manifest to find the layer name if needed. |
| `<SIGNED_NEW_SMART_OBJECT_GET_URL>` | Presigned GET URL for the new file to use as the smart object content. |
| `<SIGNED_OUTPUT_POST_URL>` | Presigned POST (or PUT) URL where the output PSD will be uploaded. |
