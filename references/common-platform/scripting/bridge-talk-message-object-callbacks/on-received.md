# onReceived()

### Description

bridgeTalkObj.onReceived()

This callback is called by the target application to acknowledge message receipt. This is separate from the BridgeTalk class static onReceive\_ method, which processes unsolicited messages.

Define receipt-notification handling by assigning a function in this form:

```javascript
bridgeTalkObj.onReceived = function( origMsgObject ) {
    // handler defined here
};
```

The target returns the original message object, setting its body property to the empty string.
