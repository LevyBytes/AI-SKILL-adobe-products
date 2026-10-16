# exportAsText

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | Yes | F |

Writes the form fields out to a local hard disk as a tab-delimited text file. That text file abides by the conventions Microsoft Excel sets. Notably, exportAsText deals correctly with quotes and with multiline text fields.

Two lines get written to the text file: the first is a tab-delimited roster of the names of the fields named by aFields, and the second is a tab-delimited roster of those fields’ values.

Note

Whenever the cPath parameter is given, this method may run only during a batch or console event. Refer also to Privileged context. A treatment of JavaScript events lives in the event object.

Parameters

| Parameter | Description |
| --- | --- |
| bNoPassword | (optional) When true (the default), text fields whose password flag is set are kept out of the exported text file. |
| aFields | (optional) Either an array of field names to submit or a string naming a single field: - When supplied, only these fields export, save for any that bNoPassword excludes. - An empty aFields array exports no fields. - Omitting this parameter or passing null exports every form field, save for those bNoPassword excludes. |
| cPath | (optional) A string giving the device-independent path for the file. That path may be taken relative to where the current document sits. Drop the parameter and a dialog box lets the user pick the file. - The cPath parameter is required to be a safe path (refer to Safe path) and to carry a .txt extension. Failing those security conditions, this method raises a NotAllowedError (refer to Error object) exception and does not complete. |

Example: Run the script below from the console to write every field out to a tab-delimited file:

```javascript
this.exportAsText();
```

When a tab-delimited file needs to carry more than a single data line, consult getDataObjectContents
