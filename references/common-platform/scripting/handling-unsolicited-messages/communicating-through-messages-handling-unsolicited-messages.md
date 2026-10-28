# Communicating through messages - Handling unsolicited messages

Set the static onReceive property of the BridgeTalk class to a callback handler function when you need to control how the application treats unsolicited incoming messages. The handler receives one argument: a BridgeTalk message object.

By default, onReceive evaluates the incoming message body as JavaScript and returns that evaluation result. (For a script evaluation, the result is the value produced by the final script line.) To send the result back, the handler builds a new message object, stores the result as a string in that object's body property, and gives the object to the onResult() callback from the original message.

When evaluation fails, the default onReceive handler uses the same pattern for error data. It creates a new message object, stores the error details as a string in that object's body property, and passes the object to the original message's onError() callback.

To replace the default behavior, assign BridgeTalk.onReceive a function definition with this form:

```javascript
BridgeTalk.onReceive = function( bridgeTalkObject ) {
    // callback definition here
};
```

The received message object's body property holds the incoming data.

The function may return any type.

Your function is not required to construct and return a BridgeTalk message object explicitly.

The messaging framework then builds a new `BridgeTalk` message object and stores the `onReceive` handler return value as a string in that object's body property.

Return values are converted to a string with Unicode Transformation Format-8 (UTF-8) encoding. If the function returns nothing, the produced string is empty.

The result object is sent back to the sender when the sender implemented an onResult callback on the original message.
