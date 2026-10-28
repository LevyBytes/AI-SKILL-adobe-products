# Example: Setting up a sender to receive multiple responses

This example sends a message whose type is iterator. The previous example's onReceive handler processes it, while the sender processes each response returned by that target.

The sender creates a message with a script in its body string. That script uses the iterator variable i while walking every file in a specific folder, represented by an Adobe Bridge Thumbnail object.

For files, the script returns file size data. For contained folders, it returns -1. The script's final executed line supplies the message's final result value.

The message object's onResult method receives each intermediate result, stores it in an array named resArr, and immediately processes it with a script-defined processInterResult function:

This message-body example requires the receiver and callback functions described in the surrounding BridgeTalk example. Keep the sending and receiving application roles separate.

```javascript
// Code for send message and handling response
// in the sending application (any message-enabled application)
var idx = 0;
var resArr = new Array;
bt = new BridgeTalk;
bt.target = "bridge";
bt.type = "iterator";
bt.body = [
    "",
    "var fld = new Thumbnail(Folder('C/Junk'));",
    "if (i == (fld.children.length - 1))",
    "done = true; //no more files, end loop",
    "tn = fld.children[i];",
    "if (tn.spec.constructor.name == 'File')",
    "md = tn.core.immediate.size;",
    "else md = -1;"
].join("\n");

// store intermediate results
bt.onResult = function(rObj) {
    resArr[idx] = rObj.body;
    processInterResult(resArr[idx]);
    idx++;
};

bt.onError = function(eObj) {
    bt.error = eObj.body
};

bt.send();
```
