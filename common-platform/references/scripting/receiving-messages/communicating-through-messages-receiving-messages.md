# Communicating through messages - Receiving messages

An application may act as a message target, meaning it can receive an unsolicited message from some other application. The target application's static BridgeTalk.onReceive callback function handles that unsolicited message. See Handling unsolicited messages.

A sender can also receive response messages, which are generated because the sender requested a response when it sent the message. These response messages can include:

- An error produced while the message was being processed
- A timeout produced during the processing attempt
- A notice confirming that the message was received
- Intermediate responses
- The final processing result.

The target application sends all such response messages automatically. The callbacks defined on the sending message object process them. For details, see Handling responses from the message target.
