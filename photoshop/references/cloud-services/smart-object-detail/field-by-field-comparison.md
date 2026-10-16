# Field-by-field comparison

| Old field | New field | Status | Notes |
| --- | --- | --- | --- |
| `instanceId` | — | REMOVED | Identity now inferred from `fileInfo` |
| `linked` | `isLinked` | CHANGED | Renamed; promoted to top level |
| `name` | `smartObjectData.fileInfo.name` | CHANGED | Moved into nested `fileInfo` |
| `path` | `smartObjectData.fileInfo.path` | CHANGED | Moved into nested `fileInfo` |
| `type` (MIME) | `smartObjectData.fileInfo.fileType` | CHANGED | MIME string replaced by short code (e.g. `"ps3"`, `"unknown"`) |
| — | `isSmartObject` | NEW | Explicit boolean flag |
| — | `isValid` | NEW | Validity state |
| — | `smartObjectData.transform` | NEW | 8-element quad `[x0,y0, x1,y1, x2,y2, x3,y3]` |
| — | `extracted.mediaType` + `.url` | NEW | Download URL for embedded smart object content |
