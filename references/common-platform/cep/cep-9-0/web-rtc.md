# WebRTC

[WebRTC](http://www.webrtc.org/) is intended for streaming audio and video capture, such as online video conferencing. It is off by default. To turn it on, add the schema below to the manifest file. For details, see Customize CEF command parameters.

Manifest/XML excerpt for the documented CEP edition. Merge it at the shown manifest location; omitted settings are marked as comments.

```xml
<CEFCommandLine> <Parameter>--enable-media-stream</Parameter> </CEFCommandLine>
```

For WebRTC development, CEP runtime keeps the same usage experience as Chrome. See [samples](http://www.html5rocks.com/en/tutorials/getusermedia/intro/) for implementation guidance.
