# altText

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | String | R |

Holds the annotation's alternate-text string; if none was set, this is an empty string.

Example: Fetch an annotation and print its altText into the debug console.

```javascript
var annot = this.media.getAnnot({ nPage:0, cAnnotTitle: "myScreen" });
console.println( "annot.altText = " + annot.altText );
```
