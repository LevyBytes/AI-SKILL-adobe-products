# Communicating through messages - Handling responses from the message target

Handle replies to a message you sent by defining callback handler functions directly on that message object. The target application can return a response only when the received message object includes the relevant callback.

Note

Message callbacks are optional, and some message-enabled applications do not provide them.

Once the target receives your message, the target application's static BridgeTalk object's onReceive method processes it and may call one of the message object's callbacks to send a response. For each response, the messaging framework wraps the data in a new message object targeted back to the sender. Your callback functions are called with that response message object.

A response message can be:

- When processing the message body fails, such as because of a JavaScript syntax error, the target application calls onError() and passes a response message containing the error code and message. Without an onError() callback, the error is hidden from the sender. The message can appear unprocessed because no result ever reaches onResult().

- Sending a message is asynchronous. A true result from send does not prove that the target application actually received the message. To learn that receipt occurred, define onReceived() on the message object. The target returns the original message object to that callback after first replacing the body value with an empty string.

- A message object's timeout property can hold a number of seconds. If the message stays in the input queue until that interval expires, it is discarded. When the sender supplied an onTimeout() callback, the target returns a time-out message.

- The sent script can return intermediate responses by calling the original message object's sendResult() method. The script may send any data type, but the data is wrapped as a body string in a new message object and passed to your callback. See Passing values between applications.

- After finishing the message, the target application can return a result of any type. If the message contained a script and the target is using the default BridgeTalk onReceive callback, the return value is the final result from evaluating that script. Whatever the case, the value is stored as a body string in a new message object and passed to your callback. See Passing values between applications.

The examples below cover a single response, multiple responses, and response processing that also handles errors.
