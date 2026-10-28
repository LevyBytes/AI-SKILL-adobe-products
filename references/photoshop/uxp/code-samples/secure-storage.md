# Secure Storage

Use secure storage to persist data between sessions. All secure storage APIs are asynchronous.

```javascript
const secureStorage = require("uxp").storage.secureStorage;
const value = await secureStorage.getItem("key");
```

The [secure-storage-sample](https://github.com/AdobeDocs/uxp-photoshop-plugin-samples/tree/main/secure-storage-sample) demonstrates these APIs.
