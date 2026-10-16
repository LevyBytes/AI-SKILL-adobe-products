# 8. Output fields

| V1 | V2 | Notes |
| --- | --- | --- |
| `href` | `destination.url` | Breaking |
| `storage` | `destination.storageType` (Azure/Dropbox only) | Breaking |
| `type` | `mediaType` | Breaking |
| `quality` (number, 1–12) | `quality` (string enum) | Breaking: see quality table |
| `compression` (`small`/`medium`/`large`) | `compression` (10-level enum) | Breaking |
| `overwrite` (boolean) | `shouldOverwrite` (boolean) | Breaking: renamed |
| `includeMetadata` (boolean) | **Removed** | No equivalent |
| `embedICCProfiles` (boolean) | **Removed** | Use `iccProfile` object |
| _(not in V1)_ | `width`, `height`, `maxWidth` | New |
| _(not in V1)_ | `iccProfile` object | New (replaces `embedICCProfiles`) |
| _(not in V1)_ | `destination.embedded` (`base64`/`string`/`json`) | New |
| _(not in V1)_ | `destination.validityPeriod` (60–86400 sec) | New |
| _(not in V1)_ | `scriptOutputPattern` (glob string) | New; UXP only; hosted/embedded destinations only |
