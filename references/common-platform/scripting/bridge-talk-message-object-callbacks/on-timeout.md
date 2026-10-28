# onTimeout()

### Description

bridgeTalkObj.onTimeout()

If a time-out happens before the target finishes work on another message already sent by this application, the target application invokes this callback with a time-out message.

The message must set the timeout property to a value before this callback can run.

Define timeout-event handling by assigning a function in this form:

```javascript
bridgeTalkObj.onTimeout = function( timeoutMsgObject ) {
    // handler defined here
};
```
