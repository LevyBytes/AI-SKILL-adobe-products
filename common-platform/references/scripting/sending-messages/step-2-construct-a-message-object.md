# Step 2: Construct a message object

After that check, build the message that will be sent. Create a BridgeTalk message object and set its properties. At minimum, specify the target application and the message body, which is generally a script stored as a string.

Message scripts can be elaborate and can use the complete DOM exposed by the target application. The next example builds a script for Adobe Bridge that asks how many files or folders exist in a chosen folder:

```javascript
// create a new BridgeTalk message object
var bt = new BridgeTalk;

// send this msg to the Adobe Bridge CS4 application
var targetApp = BridgeTalk.getSpecifier( "bridge-3.0");
bt.target = targetApp;

// the script to evaluate is contained in a string in the "body" property
bt.body = "new Document('C:\\BridgeScripts');app.document.target.children.length;"
```
