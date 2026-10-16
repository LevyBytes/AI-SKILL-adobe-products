# stringFromStream

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 7.0 | No | No | All |

Turns a ReadStream object into a string.

Parameters

| Parameter | Description |
| --- | --- |
| oStream | The ReadStream object that gets turned into a string. |
| cCharSet | (optional) Which encoding the string in oStream uses. Pick from utf-8, utf-16, Shift-JIS, BigFive, GBK, UHC; utf-8 is assumed when omitted. |

Returns

String

Example: Suppose a text file is embedded in this document. The snippet reads what the attachment holds and shows it inside the multiline text field.

```javascript
var oFile = this.getDataObjectContents("MyNotes.txt");
var cFile = util.stringFromStream(oFile, "utf-8");
this.getField("myTextField").value = cFile;
```

In this case getDataObjectContents supplies the file stream belonging to the attached document.
