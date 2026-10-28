# Reliable and Secure Streaming with SRT

- More secure: SRT can use optional Advanced Encryption Standard (AES) Encryption, which protects the video and audio stream. This security option can make SRT safer than certain other network streaming protocols.
- Less data loss: Premiere divides outgoing data into discrete information packets and sends them sequentially to the viewing client application. When network congestion or weak network performance causes packet loss, the viewing client can ask for the missing packet again, preserving stream continuity.
- Better performance on slow networks: On poor or slow networks, SRT can deliver video data with fewer interruptions. The SRT stream always includes some latency, giving the two SRT endpoints time to receive packets, acknowledge them, and resend data lost across the network.

Packet verification reduces video and audio loss during network transmission, but it adds some latency between the sender and the receiver.
