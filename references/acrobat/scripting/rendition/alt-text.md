# altText

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | String | R |

Holds the rendition's alternate-text string, or an empty string when none was given. You only get this property when the rendition's type is app.media.renditionType.media (a MediaRendition).

Example: Get the altText of a rendition.

```javascript
this.media.getRendition("myClip").altText;
```

See the examples that follow app.media. getAltTextSettings.
