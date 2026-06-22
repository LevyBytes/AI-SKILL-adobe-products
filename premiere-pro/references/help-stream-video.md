# Overview Of Secure Reliable Transport, Enable Secure Reliable Transport Stream, Secure Reliable Transport Modes, Srt Settings

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Overview of Secure Reliable Transport; Enable Secure Reliable Transport stream; Secure reliable transport modes; SRT settings.

## Overview of Secure Reliable Transport

### Stream video and audio from Premiere to viewers by using SRT.

SRT is a video streaming protocol built on User Datagram Protocol (UDP). Premiere uses it to send video and audio packet data to viewers, and the viewer returns reliability acknowledgments as the stream arrives.

An SRT stream uses the same video stream parameters as the Transit Output, including Frame Size, Frame Rate, Sample Rate, Mix track Channelization, and more.

### Reliable and Secure Streaming with SRT

- More secure: SRT can use optional Advanced Encryption Standard (AES) Encryption, which protects the video and audio stream. This security option can make SRT safer than certain other network streaming protocols.
- Less data loss: Premiere divides outgoing data into discrete information packets and sends them sequentially to the viewing client application. When network congestion or weak network performance causes packet loss, the viewing client can ask for the missing packet again, preserving stream continuity.
- Better performance on slow networks: On poor or slow networks, SRT can deliver video data with fewer interruptions. The SRT stream always includes some latency, giving the two SRT endpoints time to receive packets, acknowledge them, and resend data lost across the network.

Packet verification reduces video and audio loss during network transmission, but it adds some latency between the sender and the receiver.

## Enable Secure Reliable Transport stream

### Turn on an SRT stream in Premiere for secure video and audio transmission.

Open Edit > Preferences > Playback > Transmit Device Playback.

In the Adobe SRT row, enable the Video Stream column and Audio Stream column to send video and audio to SRT.

Turn on the Adobe SRT setting in Playback preferences so video and audio streams transmit securely.

Use the Adobe SRT control in Playback preferences to route video and audio streams through a secure connection.

Choose Settings to open the SRT connection settings.

After adding the needed connection settings and preparing the viewing client, select OK to try the SRT connection.

## Secure reliable transport modes

### Understand Listener, Rendezvous, and Caller modes in Adobe Premiere SRT settings.

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

## SRT settings

### Review SRT modes and Premiere settings used to tune streaming and manage secure, reliable connections.
