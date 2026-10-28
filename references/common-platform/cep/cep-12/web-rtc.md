# WebRTC

[WebRTC](http://www.webrtc.org/) targets streaming audio and video capture scenarios, such as online video conferencing. It is disabled by default. To enable it, add the schema below to the manifest file; Customize CEF command parameters has more detail.

Manifest/XML excerpt for the documented CEP edition. Merge it at the shown manifest location; omitted settings are marked as comments.

```xml
<CEFCommandLine> <Parameter>--enable-media-stream</Parameter> </CEFCommandLine>
```

For WebRTC development, the CEP runtime follows the same usage model as Chrome. See the [samples](http://www.html5rocks.com/en/tutorials/getusermedia/intro/) for implementation guidance.
