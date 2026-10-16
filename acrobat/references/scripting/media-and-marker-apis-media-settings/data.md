# data

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Object | R/W |

An object — the MediaData object, as it is often called — through which a media player reads its media clip data, be that an external file or content embedded in the PDF. Its contents cannot be used straight from JavaScript.

You obtain this object from app.media.getAltTextData, app.media.getURLData, or, by a more indirect route, Rendition.getPlaySettings. Because the data object can be tied to the rendition's document, closing that document may render it unavailable.

Example: the samples accompanying app.media. getURLData show this.
