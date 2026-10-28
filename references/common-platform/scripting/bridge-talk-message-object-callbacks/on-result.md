# onResult()

### Description

bridgeTalkObj.onResult()

The target application uses this callback to send a response back to the sender. That response may represent either an interim value or the final outcome from processing the message.

Handle the response by assigning a function in this form:

```javascript
bridgeTalkObj.onResult = function( responseMsgObject ) {
    // handler defined here
};
```

The target supplies a new message object, with the body property containing the result string.

See Passing values between applications. The target application's static BridgeTalk onReceive method supplies this value, and BridgeTalk packages it as a UTF-8-encoded string.
