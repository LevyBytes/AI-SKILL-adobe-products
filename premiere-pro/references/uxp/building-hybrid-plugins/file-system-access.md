# File System Access

Hybrid plugins get less restrictive UXP sandboxing, so direct file-system paths are available:

```js
let entry = "/path/to/file.txt";
```

Standard UXP plugins differ because they need `require('uxp').storage.localFileSystem` for files outside the sandbox. For the standard access model, see the [Filesystem Operations recipe](../filesystem-operations/reference-index.md).
