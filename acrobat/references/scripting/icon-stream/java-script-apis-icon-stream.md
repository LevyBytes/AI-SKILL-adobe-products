# JavaScript APIs - Icon Stream

Standing in for an icon stream, this generic JavaScript object serves app.addToolButton and collab.addStateModel. Its properties are:

| Property | Description |
| --- | --- |
| read(nBytes) | A function that, given how many bytes to read, hands back a hex-encoded string. That data ought to be the icon laid out as 32 bits per pixel across 4 channels (ARGB), or 8 bits per channel with the channels interleaved. When the icon spans several layers, the function may yield the pixels of the frontmost layer first, then the layer behind it, and onward. |
| width | The icon width in pixels. |
| height | The icon height in pixels. |

Turning an Icon object into an Icon Stream object is the job of the util.iconStreamFromIcon method.
