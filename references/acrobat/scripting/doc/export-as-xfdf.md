# exportAsXFDF

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | No | Yes | F |

Writes the form fields out to the local hard drive as an XFDF file.

Acrobat form data takes an XML form in XFDF. Refer to the document XML Form Data Format Specification.

A matching import counterpart to this method exists: importAnXFDF.

Note

Whenever the cPath parameter is given, batch and console events are the only contexts in which this method may run. See Privileged context. A treatment of JavaScript events lives in the event object.

Parameters

| Parameter | Description |
| --- | --- |
| bAllFields | (optional) When true, every field is exported, even those holding no value. When false (the default), fields presently lacking a value are left out. |
| bNoPassword | (optional) When true (the default), text fields whose password flag is set are kept out of the exported XFDF. |
| aFields | (optional) Either an array of field names to submit or a string naming a single field: - When supplied, only these fields export, save for any that bNoPassword excludes. - An empty aFields array exports no fields; even so, the XFDF file may still hold data, governed by the bAnnotations parameter. - Omitting this parameter or passing null exports every form field, save for those bNoPassword excludes. Give a non-terminal field name to export a whole subtree of fields. |
| cPath | (optional) A string giving the device-independent path for the file. That path may be taken relative to where the current document sits. Drop the parameter and a dialog box lets the user pick the file. - The cPath parameter is required to be a safe path (refer to Safe path) and to carry a .xfdf extension. Failing those security conditions, this method raises a NotAllowedError (refer to Error object) exception and does not complete. |
| bAnnotations | (optional, Acrobat 6.0) When true, annotations get written into the XFDF file produced. False is the default. |
