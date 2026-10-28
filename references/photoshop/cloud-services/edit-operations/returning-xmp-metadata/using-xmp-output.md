# Using XMP Output

Generated XMP can then be used in these ways:

1. **Reapplied to other images** through the `xmp` parameter under `edits`:

   ```json
   {
     "edits": {
       "xmp": {
         "source": {
           "url": "<XMP_FILE_URL>"
         }
       }
     }
   }
   ```

2. **Saved as a preset** to keep editing consistent across multiple images.

3. **Imported into Lightroom** or into another XMP-compatible application.

4. **Inspected to see** which adjustments `autoTone` selected automatically.
