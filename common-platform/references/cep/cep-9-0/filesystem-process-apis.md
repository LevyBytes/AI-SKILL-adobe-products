# CEP filesystem and process APIs

CEP HTML engine extends its JavaScript engine with additional APIs, including:

- local file access
- native process
- others

These APIs live in the JavaScript DOM and are called like normal built-in JavaScript APIs. No additional JavaScript file needs to be included.

The API reference follows.

`CEPEngine_extensions.js` is a CEF extension built into CEPHtmlEngine that enlarges the CEPHtmlEngine DOM with capabilities such as creating or deleting folders, reading or writing files, creating or quitting processes, and similar tasks. HTML extensions can call these built-in APIs directly, with no JavaScript file reference.

Folder creation sample:

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
