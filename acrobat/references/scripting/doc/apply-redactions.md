# applyRedactions

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 9.0 | D | No | Not allowed in Reader: Only available in Acrobat products |

Puts redaction marks into effect across the document, stripping out every bit of content underneath, and if you wish stripping out the marks as well.

Parameters

| Parameter | Description |
| --- | --- |
| aMarks | (optional) Which redaction annotations to apply, given as an array. Leave it out and every redaction mark in the document is applied. |
| bKeepMarks | (optional) A boolean; when true, the redaction marks stay put after being applied. Leave it out or set it false and the redaction marks are stripped away. By default this is false. |
| bShowConfirmation | (optional) A boolean; when true, the user sees a confirmation dialog before any redaction marks get applied or stripped. Leave it out or set it false and no confirmation appears. By default this is false. |
| cProgText | (optional) A string the UI shows together with a progress monitor for this operation. Left blank or omitted, nothing about progress is shown. |

Returns

true when the document changed, false otherwise.

Example 1: Put every redaction mark in the current document into effect, showing the progress message given

```javascript
this.applyRedactions({cProgText: "Applying redactions through JS..."});
```

Example 2: Put into effect only the redaction marks sitting on the first page, showing a confirmation beforehand.

```javascript
var markArray = Array();
var pageAnnots = this.getAnnots(0);
for (var i=0; i < pageAnnots.length; i++) {
   if (pageAnnots[i].type == "Redact") {
       markArray[markArray.length] = pageAnnots[i];
   }
}
if (markArray.length > 0) {
   this.applyRedactions({
       aMarks:
markArray,
       bKeepMarks:
false,
       bShowConfirmation:
true,
       cProgText:
"Applying page 1 redactions..."
   });
}
```
