# New smart object block (heavily restructured)

`smartObjectData.transform` contains the ordered coordinates `[x0, y0, x1, y1, x2, y2, x3, y3]`. The valid JSON below uses an illustrative 100-by-100 square; actual values come from the manifest.

```json
{
  "isSmartObject": true,
  "isLinked": false,
  "isValid": true,
  "smartObjectData": {
    "type": "smartObject",
    "transform": [
      0,
      0,
      100,
      0,
      100,
      100,
      0,
      100
    ],
    "fileInfo": {
      "name": "foo.psd",
      "path": "foo.psd",
      "fileType": "ps3",
      "linked": false
    }
  },
  "extracted": {
    "mediaType": "application/octet-stream",
    "url": "https://photoshop-api.adobe.io/v2/short-url/urn:..."
  }
}
```

`extracted` appears only for embedded smart objects, not linked ones. Within `fileInfo`, `ccLibrariesElement` is present only for assets linked from CC Libraries.
