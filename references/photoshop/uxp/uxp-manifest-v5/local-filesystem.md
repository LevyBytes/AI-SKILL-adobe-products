# Local Filesystem

The `localFileSystem` permission governs access to the user's local file system. Without it, the plugin can use only the default locations `plugin://`, `plugin-temp://`, and `plugin-data://`; it has no other user file-system access. `localFileSystem` accepts:
- `request`: Grants local file-system access through picker dialogs for opening and saving files.
- `plugin`: Limits access to the plugin's own storage.
- `fullAccess`: Grants inspection, modification, and deletion rights for accessible files across every volume attached to this device. The user must approve it before installing or updating the plugin. 

```json
{
  "requiredPermissions": {
    "localFileSystem": "request"
  }
}
```

 

Canceling the save picker leaves the filesystem unchanged.

```javascript
const fs = require('uxp').storage.localFileSystem;
const file = await fs.getFileForSaving('manifest_demo.txt');
if (file) await file.write('Manifest v5 demo');
```

 When plugin storage does not explicitly specify `plugin`, the manifest uses that setting as the default.
