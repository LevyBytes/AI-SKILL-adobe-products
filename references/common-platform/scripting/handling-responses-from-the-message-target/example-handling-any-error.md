# Example: Handling any error

Here, the onError handler throws the error message again inside the sender:

```javascript
var bt = new BridgeTalk;
bt.onError = function (btObj) {
    var errorCode = parseInt (btObj.headers ["Error-Code"]);
    throw new Error (errorCode, btObj.body);
}
```
