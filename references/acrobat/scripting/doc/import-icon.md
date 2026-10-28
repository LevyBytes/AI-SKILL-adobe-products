# importIcon

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | D | Yes | All |

Brings an icon into the document and pairs it with the name you specify.

Worth consulting as well: icons, addIcon, getIcon, removeIcon, the Field object methods buttonGetIcon, buttonImportIcon, buttonSetIcon, and the Icon object.

Starting at version 6.0, Acrobat tries first to open cDIPath as a PDF file. Should that fail, it attempts converting cDIPath into PDF out of one of the recognized graphics formats (BMP, GIF, JPEG, PCX, PNG, TIFF), then pulls the converted file in as a button icon.

Note

When cDIPath is supplied, a batch or console event is the only place this method can run. See Privileged context. A discussion of Acrobat JavaScript events sits in the event object.

Parameters

| Parameter | Description |
| --- | --- |
| cName | What name to tie to the icon. |
| cDIPath | (optional) A device-independent path leading to a PDF file on the user's hard drive. That path can be absolute or relative to the current document. cDIPath may be given only within a batch environment or from the console. Leave it off and the nPage parameter goes ignored, with the user prompted instead to locate a PDF file and browse to a specific page. |
| nPage | (optional) The 0-based index of whichever page in the PDF file gets imported as an icon. It defaults to 0. |

Returns

An integer that reports back whether the operation went through:

0: No error

1: The user cancelled the dialog box

-1: The selected file could not be opened

-2: The selected page was invalid

Example: This function comes in handy for stocking a document with a run of named icons to retrieve later. An author might, for instance, want a picture of a list box state to show up beside the list box whenever the user picks that state. Lacking this function, you could manage it with a batch of fields that get hidden and shown — but authoring that is awkward. Better to use a script along these lines:

```javascript
var f = this.getField("StateListBox");
var b = this.getField("StateButton");
b.buttonSetIcon(this.getIcon(f.value));
```

A single field pulls off the same effect this way.

Building a simple user interface to add named icons to a document is doable. Picture two fields existing: one named IconName to carry the icon name, and one named IconAdd to add the icon to the document. IconAdd's mouse-up script would read:

```javascript
var t = this.getField("IconName");
this.importIcon(t.value);
```

Run that same kind of script within a batch setting and you can stock a document with every selected icon file sitting in a folder.
