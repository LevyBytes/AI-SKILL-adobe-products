# CEP filesystem writing and encoding

- write a file.

```javascript
var data = "This is a test.";
var path = "/tmp/test";
var result = window.cep.fs.writeFile(path, data);
if (0 == result.err){
  console.log("Operation completed");
} else {
  throw new Error("CEP filesystem error: " + result.err);
}
```

Run in a CEP extension with the CEP filesystem and encoding APIs available. Set path to an accessible file or folder for the current platform before use.

- Write a file in base64 encoding mode. Before calling `writeFile()`, convert the input string into a base64-encoded string. Example:

```javascript
var data = "This is a test.";
var path = "/tmp/test";
data = cep.encoding.convertion.utf8_to_b64(data);

var result = window.cep.fs.writeFile(path, data, cep.encoding.Base64);
if (0 == result.err) {
  console.log("Operation completed");
} else {
  throw new Error("CEP filesystem error: " + result.err);
}
```

Run in a CEP extension with the CEP filesystem and encoding APIs available. Set path to an accessible file or folder for the current platform before use.

Related: [CEP filesystem and process APIs](filesystem-process-apis.md).
