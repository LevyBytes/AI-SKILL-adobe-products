# CEP filesystem reading and decoding

- read a file.

```javascript
var path = "/tmp/test";
var result = window.cep.fs.readFile(path);
if(result.err === 0){
  //success
  alert(result.data); //result.data is file content
} else {
  throw new Error("CEP filesystem error: " + result.err);
}
```

Run in a CEP extension with the CEP filesystem and encoding APIs available. Set path to an accessible file or folder for the current platform before use.

- Read a file with base64 encoding mode. After `readFile` is called, the read data is returned as a base-encoded string, which you then decode to the needed format. Sample:

```javascript
var path = "/tmp/test";
var result = window.cep.fs.readFile(path, cep.encoding.Base64);
if(result.err === 0){
  //success
  var base64Data = result.data;
  var data = cep.encoding.convertion.b64_to_utf8(base64Data);
} else {
  throw new Error("CEP filesystem error: " + result.err);
}
```

Run in a CEP extension with the CEP filesystem and encoding APIs available. Set path to an accessible file or folder for the current platform before use.

Related: [CEP filesystem and process APIs](filesystem-process-apis.md).
