# browseForFileToSubmit

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | No | No | All |

When called on a text field whose fileSelect flag is set (checked), it brings up a standard file-selection dialog box. Whatever path the user enters there is assigned automatically as the text field's value.

When called on a text field whose fileSelect flag is clear (unchecked), it throws an exception.

Example: The code below points at a text field with the file select flag checked. It runs as a button field's mouse-up action.

```javascript
var f = this.getField("resumeField");
f.browseForFileToSubmit();
```
