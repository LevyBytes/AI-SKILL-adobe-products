# exportAsXFDFStr

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 8.0 | No | No | All |

Produces the very results the doc.exportAsXFDF method would, except it hands them back as a string rather than writing a file.

Parameters

| Parameter | Description |
| --- | --- |
| bAllFields | (optional) When true, every field is exported, even those holding no value. When false (the default), fields presently lacking a value are left out. |
| bNoPassword | (optional) When true (the default), text fields whose password flag is set are kept out of the exported XFDF file. |
| aFields | (optional) Either an array of field names to submit or a string naming a single field: - When supplied, only these fields export, save for any that bNoPassword excludes. - An empty aFields array exports no fields; even so, the XFDF file may still hold data, governed by the bAnnotations parameter. - Omitting this parameter or passing null exports every form field, save for those bNoPassword excludes. Give a non-terminal field name to export a whole subtree of fields. |
| bAnnotations | This has to stay false — its default — because annotations get no support. |
| cHRef | If you provide it, its value lands as the source or target file inside the returned XFDF expression (that is, the value of the href attribute on the f element that is a child of the xfdf element). |

Returns

The file contents the doc.exportAsXFDF method would have produced, delivered as a string. When cHRef is provided, it lands as the value of the href attribute on the f element child of the xfdf element. Leave it out and that f element’s href attribute carries whatever value doc.exportAsXFDF would generate.

Example: Pull the values of the FirstName, LastName and Address form fields back as an XFDF-format string.

```javascript
var cXFDF = this.exportAsXFDFStr({
   aFields: ["FirstName", "LastName", "Address"],
   cHRef: "http://www.example.com/formcatalog/ThisFormName.pdf"
});
```
