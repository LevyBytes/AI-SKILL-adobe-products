# Output migration checklist

**For LLM-assisted migration work:**

1. **Inspect the output format first** before recommending parameters:

   - For JPEG output, set `quality`; its value must be a string enum.
   - For PNG output, set `compression`; this also uses a string enum.
   - For PSD/TIFF output, do not add a format-specific parameter.

2. **Suggested defaults:**

   - JPEG: `"photoshop_max"` (recommended default for the highest quality setting)
   - PNG: `"default"` (same as library-standard level 6; used if the field is absent)

3. **Typical field mapping:**
| V1 output field | V2 equivalent |
| --- | --- |
| `outputs[0].href` | `outputs[0].destination.url` |
| `outputs[0].type` | `outputs[0].mediaType` |
| `outputs[0].quality` value `7` | `outputs[0].quality` value `"maximum"` |
| `outputs[0].storage` | Omit for S3 or use `outputs[0].destination.storageType` as appropriate. |
