# send()

bridgeTalkObj.send([timoutInSecs[, launchParameters]])

### Description

Transfers this message to the target application.

When the target application is not already running and the message includes a body, the messaging system starts that target application automatically and passes any launch parameters that were supplied. Under those conditions the message is queued instead of being delivered at once, and the method returns false. Processing occurs after the application has started.

A send call does not prove that the target received the message. To ask for a receipt acknowledgment, define an onReceived callback on this message object. That callback is separate from the BridgeTalk class static onReceive method, which is the entry point for messages that were not solicited.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| timoutInSecs | Number | Optional. A maximum number of seconds to wait for a result before returning from this function. The message is sent synchronously, and the function does not return until the target has processed the message or this number of seconds have passed. If not supplied or 0, the message is sent asynchronously, and the function returns immediately without waiting for a result. |
| launchParameters | String | Optional. A string of parameters to append to the name of the target application when launching it, if the application is not already running. If the target application is already running, this value is ignored. |

### Returns

Boolean. true if immediate delivery was possible; false when the message could not be delivered immediately or was queued for later sending.
