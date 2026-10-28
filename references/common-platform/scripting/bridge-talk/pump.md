# BridgeTalk.pump()

BridgeTalk.pump()

### Description

Checks every active messaging interface for incoming and outgoing messages, then processes any that are present.

Note

Most applications already run a message-processing loop that keeps checking the message queues, so this method is seldom necessary.

### Returns

Boolean. true if any messages have been processed, false otherwise.
