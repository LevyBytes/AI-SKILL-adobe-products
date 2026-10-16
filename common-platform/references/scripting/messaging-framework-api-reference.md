# Messaging framework API reference

This application programming interface (API) specifies the communication protocol used by message-enabled applications. Once any supported application is loaded, all ExtendScript scripts can use these objects.

The messaging protocol can be extended. Scripts are its primary payload, but other data types can be sent as well.

Within the messaging API, BridgeTalk is the central class. Its static methods and properties expose environment information needed for interapplication communication. Instantiate BridgeTalk to create a BridgeTalk message object that contains the message itself. Related usage material appears in Communicating through messages and in the Adobe ExtendScript SDK example code.
