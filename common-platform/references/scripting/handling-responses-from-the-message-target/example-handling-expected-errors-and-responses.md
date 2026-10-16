# Example: Handling expected errors and responses

This example builds a message that asks Adobe Bridge for XMP metadata from a named file. The onResult method passes the data to a script-defined processFileSize function. onError handles failures. For instance, when the requested file does not exist, the resulting error is delivered to onError:

```javascript
var bt = new BridgeTalk;
bt.target = "bridge-3.0";
bt.body = "var tn = new Thumbnail('C/MyPhotos/temp.gif'); tn.core.immediate.size;"
bt.onResult = function( resultMsg ) {
    processFileSize(resultMsg.body);
}

bt.onError = function( errorMsg ) {
    var errCode = parseInt (errorMsg.headers ["Error-Code"]);
    throw new Error (errCode, errorMsg.body);
}

bt.send();
```
