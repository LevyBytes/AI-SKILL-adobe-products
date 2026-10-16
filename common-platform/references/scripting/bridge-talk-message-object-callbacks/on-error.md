# onError()

bridgeTalkObj.onError()

### Description

The target application calls this callback when it needs to report an error back to the sender. The returned information may cover JavaScript run-time errors, JavaScript exceptions, or C++ exceptions.

Define the error-response handler by assigning a function in this form:

```javascript
bridgeTalkObj.onError = function( errorMsgObject ) {
    // error handler defined here
};
```

In the received message object, the body property carries the error message. The headers property carries the error code through its Error-Code property. See Messaging error codes.
