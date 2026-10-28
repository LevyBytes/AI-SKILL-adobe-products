# Access Application DOM from Html Extension

Two separate JavaScript engines are involved here.

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

- Host application JavaScript engine - Application DOM/Extend script
  DOM
- CEP HTML runtime JavaScript engine - HTML DOM

The CEP extension engine cannot see the Application DOM, and the host application's engine cannot see the CEP DOM.

For CEP extensions that need Application DOM access, the CEP JavaScript library exposes `CSInterface.evalScript`, which runs extend script against the host application's DOM. This diagram summarizes that access path.

[Figure: enter image description here](https://github.com/Adobe-CEP/CEP-Resources/raw/master/CEP_9.x/Documentation/images/dom_comm.jpg)

The HTML extension sample below shows the JavaScript side.

```javascript
var csInterface = new CSInterface();
csInterface.evalScript('app.documents.add();', function(result){
  alert(result);
});
```
