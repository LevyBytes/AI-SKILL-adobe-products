# fileName

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | String | R |

For embedded media this yields an empty string. In every other case it gives back the media's file name or URL. You only get this property when the rendition's type is app.media.renditionType.media.

### type

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Number | R |

Carries an app.media.renditionType value that tells you which kind of rendition this is.

For now the two kinds are MediaRendition and RenditionList:

Should Rendition.type match app.media.renditionType.media, what you have is a MediaRendition. That is a single Rendition, the same one shown on the Settings tab of the Multimedia Properties dialog box.

Should Rendition.type match app.media.renditionType.selector, what you have is a RenditionList, an array of MediaRendition. This is the list shown on the Settings tab of the Multimedia Properties dialog box.

Because later releases of Acrobat could introduce further renditionType values, your JavaScript should never take for granted that only today's app.media.renditionType values will turn up.
