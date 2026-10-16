# noTrigger

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Boolean | R/W |

When this is true, the Acrobat user interface can no longer trigger the screen annotation. Ordinarily a click on a screen annotation kicks off a media player; this property shuts that behavior off.

The PDF file does not store this property. Any change you make lasts only for the current session.

Example: Drive the media clip from form buttons instead, so disable interaction on the annotation.

```javascript
annot = this.media.getAnnot({ nPage:0, cAnnotTitle: "myScreen" });
annot.noTrigger = true;
```
