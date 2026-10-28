# Step 4: Send the message

Call the message object's `send` method to dispatch it. No destination argument is needed because the message already contains its target application:

```javascript
bt.send();
```

A timeout value can be supplied as an option. Doing so makes the call synchronous: the method returns only after the target application responds or the timeout period ends. Without a timeout, as shown here, sending is asynchronous and send() returns right away.

Another optional argument can carry launch parameters for cases where the target application is not running and the messaging framework must start it.

The full script is:

ExtendScript preprocessor directives are processed by the Adobe host before JavaScript evaluation. The referenced include files must exist.

```javascript
// script to be executed in Photoshop CS4
#target "photoshop-11.0"

// check that the target app is installed
var targetApp = BridgeTalk.getSpecifier( "bridge-3.0");

if( targetApp ) {
    // construct a message object
    var bt = new BridgeTalk;

    // the message is intended for Adobe Bridge CS4
    bt.target = targetApp;

    // the script to evaluate is contained in a string in the "body" property
    bt.body = "new Document('C:\\BridgeScripts');app.document.target.children.length;"

    // define result handler callback
    bt.onResult = function(returnBtObj) {
    processResult(returnBtObj.body); } //fn defined elsewhere

    // send the message asynchronously
    bt.send();
}
```
