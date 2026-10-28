# Communicating through messages

Adobe Bridge exposes an application programming interface (API) for communication between Adobe ExtendScript-aware applications and applications that support messaging. This is the broadest interapplication communication route. A messaging-enabled application can start another messaging-enabled application and can exchange scripts that perform particular work. For instance, a script running in Adobe Bridge can open Photoshop, then pass Photoshop a script that asks for a photomerge operation.

Exported functions give targeted entry points into selected application features, but an interapplication message carries a script that can use the target application's full document object model (DOM), along with all cross-DOM functions and exported application functions.

The messaging API includes the BridgeTalk class. Its globally available static functions and properties expose environment details needed for application-to-application messaging. By instantiating this class, you make a BridgeTalk message object that contains a message and can deliver it to another application. See Messaging framework API reference for object-level detail.
