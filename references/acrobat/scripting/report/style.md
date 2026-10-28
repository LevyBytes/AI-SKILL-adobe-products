# style

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | Not available in Reader | String | R/W |

Picks the font style applied to text that writeText produces. Allowed style values are:

```javascript
DefaultNoteText
NoteTitle
```

Example: Start a new report, set font size, write short text and open report.

```javascript
var rep = new Report();
rep.size = 1.2;
rep.style = "DefaultNoteText";
rep.writeText("Hello World!");
rep.open("My Report");
```
