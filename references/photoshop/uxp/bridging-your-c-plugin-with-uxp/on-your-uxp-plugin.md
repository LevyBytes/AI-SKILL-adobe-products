# On your UXP plugin

Register a messaging listener with the `messaging` API group. Descriptors sent from a CSDK plugin to this plugin's ID arrive through this callback.

```javascript
const { messaging } = require("photoshop");
function observeSdkMessages() {
    const callback = (message) => {
        console.log("Message from " + message.pluginId + ":" + message.message);
    };
    messaging.addSDKMessagingListener(callback);
    return () => messaging.removeSDKMessagingListener(callback);
}
module.exports = { observeSdkMessages };
```
