# CEP filesystem and process APIs

The CEP HTML engine extends JavaScript with several API groups, including:

- local file access
- native process
- others

These APIs live in the JavaScript DOM and can be called directly. No extra JavaScript file reference is required.

API reference follows.

`CEPEngine_extensions.js` is a CEF extension built into CEPHtmlEngine that expands the CEPHtmlEngine DOM with capabilities such as creating/deleting folders, reading/writing files, creating/quitting processes, and similar operations. Invoke these built-in APIs directly from the HTML extension without referencing a JavaScript file.

For example, you can

- create a folder.

```javascript
var path = "/tmp/test";
var result = window.cep.fs.makedir(path);
if (0 == result.err){
  console.log("Operation completed");
} else {
  throw new Error("CEP filesystem error: " + result.err);
}
```

Run in a CEP extension with the CEP filesystem and encoding APIs available. Set path to an accessible file or folder for the current platform before use.

Related references:

- [CEP filesystem writing and encoding](filesystem-write-examples.md)
- [CEP filesystem reading and decoding](filesystem-read-examples.md)
- [CEP native process example](native-process-example.md)
