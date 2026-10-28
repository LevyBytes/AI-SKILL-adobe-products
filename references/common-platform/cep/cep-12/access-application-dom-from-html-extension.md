# Access Application DOM from Html Extension

Two JavaScript runtimes are involved:

- Host application JavaScript engine - Application DOM/Extend script
  DOM
- CEP HTML runtime JavaScript engine - HTML DOM

CEP extension code cannot directly see the Application DOM, and host-side script code cannot directly see the CEP DOM.

To reach the Application DOM from a CEP extension, use the CEP JavaScript library API `CSInterface.evalScript` to run ExtendScript against the host application's DOM. The following diagram shows that access path.

[Figure: enter image description here](https://github.com/Adobe-CEP/CEP-Resources/raw/master/CEP_9.x/Documentation/images/dom_comm.jpg)

The HTML extension JavaScript can look like this:

```javascript
var csInterface = new CSInterface();
csInterface.evalScript('app.documents.add();', function(result){
  alert(result);
});
```
