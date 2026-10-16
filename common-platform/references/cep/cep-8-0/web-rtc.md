# WebRTC

[WebRTC](http://www.webrtc.org/) is intended for streamed audio, captured video, and uses such as online video conferencing. It is off unless explicitly enabled. Add the schema below to the manifest file to turn it on. For more information, see Customize CEF command parameters.

XML excerpt for the documented CEP edition; merge at the described location. Comments mark omitted settings.

```xml
<CEFCommandLine> <Parameter>--enable-media-stream</Parameter> </CEFCommandLine>
```

For WebRTC work, the CEP runtime follows Chrome-style behavior. Use the [samples](http://www.html5rocks.com/en/tutorials/getusermedia/intro/) as implementation references.
