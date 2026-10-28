# metadata

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | D | No | Not available in Reader | String | R/W |

Opens up the XMP metadata that a PDF document carries inside it. What comes back is a string holding that metadata as XML. The PDF Reference covers embedded XMP metadata in detail.

Exceptions

Assigning metadata a string that is not valid XMP triggers RaiseError.

Example 1: Attempt to assign metadata that is not in XMP format.

This intentionally invalid metadata assignment demonstrates rejection of non-XMP input. Expected error: `The given metadata was not in the XMP format`.

```javascript
this.metadata = "this is my metadata";
```

Example 2: Generate a PDF report file holding a document's metadata.

```javascript
var r = new Report();
r.writeText(this.metadata);
r.open("myMetadataReportFile");
```

Example 3: (Acrobat 8.0) Here is a demonstration of editing a document's metadata through E4X. It fills in the Copyright Status, the Copyright Notice, and the Copyright Info URL fields. You can fire this from the console or run it as a batch sequence.

Acrobat E4X metadata example: XML literals and namespace operators require the documented Acrobat JavaScript host; standard JavaScript/Node parsers do not support them.

The complete program is in the [upstream source](https://opensource.adobe.com/dc-acrobat-sdk-docs/library/jsapiref/doc.html#metadata).
