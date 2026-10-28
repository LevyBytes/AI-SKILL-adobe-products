# Passing an array with toSource and eval

The following example sends a script that returns an array using that technique. The receiving onResult callback uses eval to rebuild it:

```javascript
// Code for send message and handling response
// in the sending application (any message-enabled application)
var idx = 0;
var resArr = new Array;
var bt = new BridgeTalk;
bt.target = "bridge-3.0";

// the script passed to the target application
// needs to return the array using "toSource"
bt.body = "var arr = [10, this string, 324]; arr.toSource()";

bt.onResult = function(resObj) {
    // use eval to reconstruct the array
    arr = eval(resObj.body);

    // now you can access the returned array
    for (i=0; i< arr.length(); i++)
        doSomething(arr[i]);
}

// send the message
bt.send();
```
