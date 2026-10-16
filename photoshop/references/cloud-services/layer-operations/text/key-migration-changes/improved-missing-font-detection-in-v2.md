# Improved missing font detection in V2

V2 detects missing fonts correctly during text layer edits in every case, whether the request changes `fontName`, `fontSize`, or another character attribute. V1 did not always find missing fonts for those edits, so the selected strategy was not applied consistently.

**Scenario:** A PSD contains a text layer set in `AdobeClean-Regular`, but the server cannot access that font. The request edits the layer, for example by changing only `fontSize` or by setting `fontName` to another missing font:

```json
{
  "characterStyles": [{ "fontSize": 24 }]
}
```

**V1 behavior:** The missing font goes unnoticed. The job finishes without using `missingFontStrategy`, and the output document still reports `AdobeClean-Regular`.

**V2 behavior:** The missing font is detected correctly, and the configured `missingFontStrategy` is used:

- `"use_default"` - `AdobeClean-Regular` is replaced by `defaultFontPostScriptName`, or by `ArialMT` when unset. The job completes.
- `"fail"` - the job fails with an error that identifies `AdobeClean-Regular` as missing.
