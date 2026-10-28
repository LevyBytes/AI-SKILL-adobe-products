# importAnFDF

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 4.0 | D | No | F |

Brings in the FDF file you name. importAnXFDF and importTextData are also worth a look.

Parameters

| Parameter | Description |
| --- | --- |
| cPath | (optional) The FDF file's device-independent path. It ought to resemble the value of an FDF file's F entry — one exported through the submitForm method or by way of the Forms > Manage Form Data > Export Data From Form menu item. That path may sit relative to where the current document is. Leave this parameter off and a dialog box opens for the user to pick the file. |

Example: Wired to a Page Open event, the snippet below tests whether one particular function — ProcResponse — already exists; lacking it, the snippet installs a document-level JavaScript that lives inside an FDF file.

```javascript
if(typeof ProcResponse == "undefined") this.importAnFDF("myDLJS.fdf");
```

Notice the path used here is relative. The trick comes in handy for auto-installing document-level scripts onto PDF files distilled out of a PostScript file.
