# Secure reliable transport modes

Understand Listener, Rendezvous, and Caller modes in Adobe Premiere SRT settings.

Premiere and the viewing client begin an SRT session with a handshake. After the handshake is valid, Premiere sends video to the viewing client. Three modes can establish a valid SRT connection:

Select Listener, Rendezvous, or Caller mode in Adobe SRT Settings when configuring the connection.

Use Listener, Rendezvous, or Caller mode in Adobe SRT Settings to define how the connection starts.

Connections between streaming modes

- Listener and Caller mode: These two modes pair together for SRT streaming connections. A connection in this setup always requires one caller and one listener. The caller starts the handshake with the listener, establishing the SRT connection no matter which way the video signal flows.

Premiere may be either the caller or the listener, although Premiere only streams video and audio outward and cannot receive or ingest an SRT video stream. The mode determines how the stream is established; it does not define the content stream direction. Video always travels from Premiere to the viewer. After the SRT connection is established, the selected modes no longer matter.

Choose modes according to the network, the viewer setup, or other streaming requirements, such as linking Premiere with a dedicated SRT ingest server.

Caller or Listener modes configuration example: When multiple Premiere workstations connect to a central SRT Routing server, one practical configuration is to put the Premiere workstations in Listener mode and set the SRT server to Caller mode. That setup lets changes happen at the centralized SRT Server.

Conversely, if Premiere workstations are not usually configured for a central SRT server, the server can use Listener mode and accept connections from any Premiere workstation without needing the IP address for each central SRT server. The Stream ID parameter can identify those streams to the server.

- Rendezvous mode: This peer-to-peer SRT handshake approach is mainly for simpler networks that are not managed by IT. When Premiere uses Rendezvous mode, the viewing client must use that same mode.

In Rendezvous mode, an IT administrator usually does not need to help traverse a firewall. Firewalls route the UDP data automatically to the correct endpoint. Each endpoint sends handshake packets or data through the same port.
