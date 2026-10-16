# Using the Shell API

The [`shell`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/uxp/shell/shell.md) module exposes two primary methods:

- **`openPath()`**: opens a file or folder with the system default application.
- **`openExternal()`**: starts an application through a URL scheme.

Each call prompts for user approval, then gives back a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). On success, the promise resolves to an empty string; on failure, it resolves to an error message.

**Access the API:**

```javascript
const { shell } = require("uxp");
```
