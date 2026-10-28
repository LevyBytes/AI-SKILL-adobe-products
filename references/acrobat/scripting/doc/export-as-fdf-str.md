# exportAsFDFStr

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 8.0 | No | No | All |

Produces the very results the doc.exportAsFDF method would, except it hands them back as a string rather than writing a file.

Parameters

| Parameter | Description |
| --- | --- |
| bAllFields | (optional) When true, every field is exported, even those holding no value. When false (the default), fields presently lacking a value are left out. |
| bNoPassword | (optional) When true (the default), text fields whose password flag is set are kept out of the exported FDF file. |
| aFields | (optional) Either an array of field names to submit or a string naming a single field: - When supplied, only these fields export, save for any that bNoPassword excludes. - An empty aFields array exports no fields; even so, the FDF file may still hold data, governed by the bAnnotations parameter. - Omitting this parameter or passing null exports every form field, save for those bNoPassword excludes. Give a non-terminal field name to export a whole subtree of fields (refer to the example below). |
| bFlags | (optional) When true, field flags get written into the FDF file produced. False is the default. |
| bAnnotations | This has to stay false — its default — because annotations get no support. |
| cHRef | If you provide it, its value lands as the source or target file inside the returned FDF expression (that is, the value carried by the FDF dictionary’s F key). |

Returns

The file contents the doc.exportAsFDF method would have produced, delivered as a string. When cHRef is provided, it lands as the value of the F key inside the FDF dictionary. Leave it out and the F key carries whatever value doc.exportAsFDF would generate.

Example: Pull the FirstName, LastName and Address fields back as an FDF-format string of form data.

```javascript
var cFDF = this.exportAsFDFStr({
   aFields: ["FirstName", "LastName", "Address"],
   cHRef: "http://www.example.com/formcatalog/ThisFormName.pdf"
});
```
