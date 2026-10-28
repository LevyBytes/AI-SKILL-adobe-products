# BridgeTalk.onReceive

BridgeTalk.onReceive

### Description

### Returns

callback function this application uses for unsolicited incoming messages. The default function evaluates the received message body and returns the evaluation result. To replace that default, assign a function definition in this form:

```javascript
BridgeTalk.onReceive = function( bridgeTalkObject ) {
    // act on received message
};
```

The received message object's body property stores the incoming data. The function may return any type. See Handling unsolicited messages.

Note

This function is not used for a message received as a response to a message sent by this application. Response messages are handled by the onResult, onReceived, or onError callbacks attached to the sent message.

### Type

Function
