# Step 3: Specify how to handle a response

When the script result matters, or when the sender should process a reply, configure response handling before dispatching the message. Define the onResult() callback on the message object to do this.

Note

Message callbacks are optional, and some message-enabled applications do not implement them. By default, a response is the evaluation result of the script stored in the message object's body property. A target application can choose another response style; see Receiving messages.

After the target finishes working on the message, it checks the received message object for an onResult callback. When present, the target calls it automatically and passes the response. The response is placed in a string, then that string is stored in the body property of a new message object. Your onResult callback receives that new message object as its argument.

This handler passes the returned value into processResult, a function supplied by the script:

```javascript
bt.onResult = function (returnBtObj) {
    processResult(returnBtObj.body);
};
```

To handle script-processing errors, define an [onError()](../bridge-talk-message-object-callbacks/on-error.md#onerror) callback on the message object. You can also set a [timeout](../bridge-talk-message-object-properties/timeout.md#timeout) value and provide an [onTimeout()](../bridge-talk-message-object-callbacks/on-timeout.md#ontimeout) callback for cases where the target cannot finish within the allotted time. Additional detail is in the response-target section: [details](../handling-responses-from-the-message-target/reference-index.md).

!!! note
    When callbacks are used for a response, keep the message in a variable that remains alive until the reply arrives. If not, JavaScript might garbage-collect the message object, causing the response to disappear.
