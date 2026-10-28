# Access Application DOM from Html Extension

Two JavaScript engines are involved here.

- Host application JavaScript engine - Application DOM/Extend script
  DOM
- CEP HTML runtime JavaScript engine - HTML DOM

The Application DOM is unavailable inside the CEP extension engine, and the CEP DOM is unavailable inside the host application's engine.

To reach the Application DOM from CEP extensions, use the CEP JavaScript library API `CSInterface.evalScript`, which runs extend script against the host application's DOM. The diagram below summarizes DOM access through this API.

[Figure: enter image description here](https://github.com/Adobe-CEP/CEP-Resources/raw/master/CEP_9.x/Documentation/images/dom_comm.jpg)

Sample JavaScript code in an HTML extension:

```javascript
var csInterface = new CSInterface();
csInterface.evalScript('app.documents.add();', function(result){
  alert(result);
});
```
