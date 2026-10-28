# Access Application DOM from Html Extension

Two distinct JavaScript engines are involved here.

- Host application JavaScript engine - Application DOM/Extend script
  DOM
- CEP HTML runtime JavaScript engine - HTML DOM

The CEP extension engine cannot access Application DOM directly, and the host application's engine cannot reach CEP DOM directly.

To reach Application DOM from a CEP extension, the CEP JavaScript library supplies `CSInterface.evalScript`, which runs ExtendScript against the host application's DOM. The short diagram below shows that access path.

[Figure: enter image description here](https://github.com/Adobe-CEP/CEP-Resources/raw/master/CEP_8.x/Documentation/images/dom_comm.jpg)

Place this JavaScript snippet on the extension side.

```js
var csInterface = new CSInterface();
csInterface.evalScript("app.documents.add();", function (result) {
  alert(result);
});
```
