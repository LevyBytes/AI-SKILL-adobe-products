# CEP filesystem and process APIs

The JavaScript engine in the CEP HTML engine is extended with APIs such as:

- local file access
- native process
- others

These APIs live in the JavaScript DOM. Use them like built-in JavaScript DOM APIs; no additional JavaScript files are required.

The API reference follows below.

`CEPEngine_extensions.js` is a CEF extension built into CEPHtmlEngine that expands the CEPHtmlEngine DOM with capabilities such as creating or deleting folders, reading or writing files, and creating or quitting processes. HTML extensions can call these built-in APIs directly without referencing an additional JavaScript file.

The examples below cover these tasks:

- make a folder.

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
