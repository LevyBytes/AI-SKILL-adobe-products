# Passing an object with toSource and eval

Objects can be transferred between applications only through this approach. This example sends a script that returns an object containing selected metadata for a specific file, then defines an onResult callback that receives it:

This message-body example requires the receiver and callback functions described in the surrounding BridgeTalk example. Keep the sending and receiving application roles separate.

```javascript
var bt = new BridgeTalk;
bt.target = "bridge-3.0";

//the script passed to the target application
// returns the object using "toSource"
bt.body = [
    "var tn = new Thumbnail(File('C:/Myphotos/photo1.jpg'));",
    "var md = {fname:tn.core.immediate.name,",
    "fsize:tn.core.immediate.size};",
    "md.toSource();"
].join("\n")

//For the result, use eval to reconstruct the object
bt.onResult = function(resObj) {
    md = bt.result = eval(resObj.body);
    // now you can access fname and fsize properties
    doSomething (md.fname, md.fsize);
}

// send the message
bt.send();
```
