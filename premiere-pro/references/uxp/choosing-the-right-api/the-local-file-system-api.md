# The `LocalFileSystem` API

`LocalFileSystem` is an object-oriented API built around **Entry references**, where objects stand for files and folders. Use it when repeated actions target the same file or when the plugin needs to walk folder structures.

**Access the API:**

```javascript
const { localFileSystem, types } = require("uxp").storage;
```
