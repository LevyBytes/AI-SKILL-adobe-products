# Step 1: Check that the target application is installed

Before sending anything, confirm that the needed target application version exists. The getSpecifier() function, exposed globally through the BridgeTalk class, supplies that information.

For example, the following script is run by Photoshop CS5 and prepares to send a message to Adobe Bridge CS5; it first verifies that the required Adobe Bridge version is present:

```javascript
var targetApp = BridgeTalk.getSpecifier( "bridge-3.0");
if( targetApp ) {
    // construct and send message
}
```

At send time, the messaging framework starts the target application automatically when it is not already running.
