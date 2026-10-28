# Sending the message from UXP

To send messages to the C Plugin, note the Component Id defined in its resouce `PiPL`. This is the second parameter of `PIComponentProperty`.

Use that Id with the messaging group from the photoshop package to send the message.

```javascript
const { messaging } = require("photoshop");
function sendStatus(pluginComponentId) {
    return messaging.sendSDKPluginMessage(pluginComponentId, {
        status: "ok",
        filter: 416
    });
}
module.exports = { sendStatus };
```

Pass the receiving native plugin component ID supported by the Photoshop SDK messaging interface.
