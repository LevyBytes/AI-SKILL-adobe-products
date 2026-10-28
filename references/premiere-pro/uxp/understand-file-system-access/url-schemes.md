# URL Schemes

UXP exposes shortcut URL schemes for common file-system locations:

| Scheme | Description | Permission Required |
| --- | --- | --- |
| `plugin:/` | Plugin installation folder (read-only) | `"plugin"` |
| `plugin-data:/` | Plugin data folder (read-write) | `"plugin"` |
| `plugin-temp:/` | Plugin temporary folder (read-write) | `"plugin"` |
| `file:/` | Arbitrary file system location (full path) | `"fullAccess"` |

These schemes work from HTML and JavaScript:

```html
<img src="plugin:/icons/logo.png" />
<img src="file:/Users/user/Downloads/sample.png" />
```

```javascript
const dataFile = await localFileSystem.getEntryWithUrl("plugin-data:/settings.json");
```
