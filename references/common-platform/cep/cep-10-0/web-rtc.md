# WebRTC

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

[WebRTC](http://www.webrtc.org/) targets streaming audio, video capture, and uses such as online video conferencing. It is disabled by default; enabling it requires adding the schema below to the manifest file. For details, see Customize CEF command parameters.

Manifest/XML excerpt for the documented CEP edition. Merge it at the shown manifest location; omitted settings are marked as comments.

```xml
<CEFCommandLine> <Parameter>--enable-media-stream</Parameter> </CEFCommandLine>
```

For WebRTC development, the CEP runtime follows the same usage model as Chrome. See the [samples](http://www.html5rocks.com/en/tutorials/getusermedia/intro/) for implementation guidance.
