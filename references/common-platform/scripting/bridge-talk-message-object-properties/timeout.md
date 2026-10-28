# timeout

bridgeTalkObj.timeout

### Description

Seconds before the message times out.

If the message is still waiting in the input queue when this interval expires, it is discarded. When the sender defined onTimeout() for the message, the target application returns a time-out response.

### Type

Number

### type

bridgeTalkObj.type

### Description

Message type, identifying what kind of data the body contains.

Default is ExtendScript.

You may define a type for script-defined data. If you do, the target application needs a static BridgeTalk onReceive\_ method that detects and processes that type.

### Type

String
