# Communicating through messages — Passing values between applications

The static BridgeTalk.onReceive callback function may return any value type. The messaging framework still wraps the response as a response message and puts returned values in the message body after encoding the result as a UTF-8 string.
