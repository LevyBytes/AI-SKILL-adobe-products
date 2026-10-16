# Passing a DOM object

A script can return a DOM object, but the object that comes back includes only properties the script accessed. In this example, the script requests the Adobe Bridge DOM Thumbnail object. Since the script touches only path and uri, only those two properties are returned:

This message-body example requires the receiver and callback functions described in the surrounding BridgeTalk example. Keep the sending and receiving application roles separate.

```javascript
var bt = new BridgeTalk;
bt.target = "bridge";

//set up the script passed to the target application
// to return the array using "toSource"
bt.body = [
    "var tn = new Thumbnail(File('C:/Myphotos/photo1.jpg'));",
    "var p = tn.path; var u = tn.uri;",
    "tn.toSource();"
].join("\n")

//For the result, use eval to reconstruct the object
bt.onResult = function(resObj) {
    // use eval to reconstruct the object
    tn = eval(resObj.body);
    // now the script can access tn.path and tn.uri,
    // but no other properties of the Adobe Bridge DOM Thumbnail object
    doSomething (tn.path, tn.uri);
}

// send the message
bt.send();
```
