# exportAsFDF

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 4.0 | No | Yes | F |

Writes the form fields out to the local hard drive as an FDF file.

Note

Whenever the cPath parameter is given, batch and console events are the only contexts in which this method may run. Refer also to Privileged context. A treatment of JavaScript events lives in the event object.

Parameters

| Parameter | Description |
| --- | --- |
| bAllFields | (optional) When true, every field is exported, even those holding no value. When false (the default), fields presently lacking a value are left out. |
| bNoPassword | (optional) When true (the default), text fields whose password flag is set are kept out of the exported FDF file. |
| aFields | (optional) Either an array of field names to submit or a string naming a single field: - When supplied, only these fields export, save for any that bNoPassword excludes. - An empty aFields array exports no fields; even so, the FDF file may still hold data, governed by the bAnnotations parameter. - Omitting this parameter or passing null exports every form field, save for those bNoPassword excludes. Give a non-terminal field name to export a whole subtree of fields (refer to the example below). |
| bFlags | (optional) When true, field flags get written into the FDF file produced. False is the default. |
| cPath | (optional) A string giving the device-independent path for the file. That path may be taken relative to where the current document sits. Drop the parameter and a dialog box lets the user pick the file. - The cPath parameter is required to be a safe path (refer to Safe path) and to carry a .fdf extension. Failing those security conditions, this method raises a NotAllowedError (refer to Error object) exception and does not complete. |
| bAnnotations | (optional, Acrobat 6.0) When true, annotations get written into the FDF file produced. False is the default. |

Example 1: Send out the whole form — empty fields and all — together with flags.

```javascript
this.exportAsFDF(true, true, null, true);
```

Example 2: Send out the name subtree without flags.

```javascript
this.exportAsFDF(false, true, "name");
```

A shortcut for exporting an entire subtree is what this example demonstrates. Handing “name” to the aFields parameter causes fields like “name.title”, “name.first”, “name.middle”, and “name.last” to export.
