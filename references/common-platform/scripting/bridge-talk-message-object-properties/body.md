# body

bridgeTalkObj.body

### Description

Message data payload.

- For an unsolicited message sent to another application, this usually holds a script stored as a string. The script can access the full document object model (DOM) of the target application.
- For a result message returned by a target application's static BridgeTalk onReceive method to this object's onResult callback, this contains that method's return value flattened into a string. See Passing values between applications.
- For an error notification sent to the onError callback, this contains the error message.

### Type

String
