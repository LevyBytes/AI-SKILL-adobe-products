# CEP filesystem and process APIs

The CEP HTML engine extends its JavaScript engine with APIs such as:

- local file access
- native process
- others

These APIs live in the JavaScript DOM and are used like other built-in JavaScript APIs. You do **NOT** need to include JavaScript files for them.

API reference:

`CEPEngine_extensions.js` is a CEF extension built into CEPHtmlEngine that expands the CEPHtmlEngine DOM with capabilities such as create/delete folder, read/write file, create/quit process, and similar operations. HTML extensions can call these built-in APIs directly without referencing any JavaScript file.

For example, you can

- make one directory.

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
