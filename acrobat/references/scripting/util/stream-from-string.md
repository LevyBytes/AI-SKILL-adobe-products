# streamFromString

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 7.0 | No | No | All |

Turns a string into a ReadStream object.

Parameters

| Parameter | Description |
| --- | --- |
| cString | The string that gets turned into a ReadStream object. |
| cCharSet | (optional) Which encoding cString uses. Pick from utf-8, utf-16, Shift-JIS, BigFive, GBK, UHC; utf-8 is assumed when omitted. |

Returns

ReadStream object

Example: Grab whatever response sits in a text field of this document and tack it onto an attached document.

```javascript
var v = this.getField("myTextField").value;
var oFile = this.getDataObjectContents("MyNotes.txt");
var cFile = util.stringFromStream(oFile, "utf-8");
cFile += "rn" + cFile;
oFile = util.streamFromString( cFile, "utf-8");
this.setDataObjectContents("MyNotes.txt", oFile);
```

Here the Doc methods getDataObjectContents and setDataObjectContents work together with util.stringFromStream.
