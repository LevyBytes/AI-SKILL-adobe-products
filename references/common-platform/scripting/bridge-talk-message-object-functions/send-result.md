# sendResult()

bridgeTalkObj.sendResult(result)

### Description

During unsolicited-message processing, the static BridgeTalk onReceive method can call this method on the received message object to send an intermediate result back to the sender. It triggers the original message's onResult callback and passes a new message object whose body contains the requested result value.

Multiple responses can be returned for a single message through this mechanism.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| result | Any | You can send data of any type as the result value. The messaging framework creates a BridgeTalk message object, and flattens this value into a string which it stores in the body of that message. See Passing values between applications. |

### Returns

Boolean. true when the received message defines an onResult callback and the response message can be sent; otherwise false.
