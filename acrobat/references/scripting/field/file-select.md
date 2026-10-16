# fileSelect

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.0 | D | Yes | F | Boolean | R/W |

When true, raises the file-select flag on the text field's Options tab (Field is Used for File Selection). This marks the field's value as the path to a file whose contents may be sent along with the form.

Either the user types the path straight into the field, or the user browses to the file. (See the browseForFileToSubmit method.)

Note

The file select flag cannot coexist with the multiline, charLimit, password, and defaultValue properties. On Mac OS, moreover, raising the file select flag makes the field read-only, so the user is obliged to browse for the file to place in it. (See browseForFileToSubmit.)

Setting this property is possible only during a batch or console event. See Privileged context. A discussion of JavaScript events lives in the event object.

Fields

text
