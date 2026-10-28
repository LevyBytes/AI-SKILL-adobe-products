# Example: Simple response reception

Here, an application script requests from Adobe Bridge the count of files and folders in a particular folder; script evaluation produces that count. (The default BridgeTalk.onReceive method handles this correctly.)

The onResult method stores the number in fileCountResult, a script-defined message property, so it can be used afterward:

```javascript
var bt = new BridgeTalk;
bt.target = "bridge-3.0";
bt.body = "new Document('C:\\BridgeScripts');app.document.target.children.length;"
bt.onResult = function( retObj ) {
    processFileCount(retObj.body);
}

bt.send();
```
