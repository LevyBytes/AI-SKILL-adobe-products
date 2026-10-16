# app.execDialog

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 7.0 | No | No | All |

Puts a modal dialog box in front of the user. Until the user dismisses a modal dialog box, the host application cannot be worked with directly again.

A dialog descriptor is what the monitor parameter supplies: a generic object literal bundling handler functions for assorted events together with properties that lay out the dialog box's contents.

Each dialog box item is tagged by an ItemID, a unique 4-character string. You only need an ItemID when the element gets referenced somewhere else in the dialog box description — to read or write its value, to attach a handler to it, or to fold it into a tab order, for instance.

Note

So that Acrobat dialog boxes stand apart from those JavaScript builds, any dialog box added at the document level carries the title "JavaScript Dialog" and shows "Warning: JavaScript Dialog" across its bottom.

Parameters

| Parameter | Description |
| --- | --- |
| monitor | An object literal made up of several handlers (see Dialog box handlers) plus a description property laying out the dialog box elements (see description property). |
| inheritDialog | (optional) A Dialog object to reuse while this dialog box is shown. It helps when a run of dialog boxes (a wizard, say) is displayed, keeping one from vanishing before the next appears. By default no dialog box is reused. |
| parentDoc | (optional) A Doc object to serve as this dialog box's parent. By default the parent is the Acrobat application. |

Returns

A string — the ItemID of whichever element dismissed the dialog box. That value is "ok" or "cancel" when the dismissing element is the ok or cancel button.

Note

While a modal dialog box raised by app.execDialog is active, debugging is turned off.

Related references:

- [Dialog handlers and description](dialog-handlers-and-description.md)
- [Dialog element properties](dialog-element-properties.md)
- [Personal-data dialog example](personal-data-dialog-example.md)
- [Checkbox and radio dialog example](checkbox-radio-dialog-example.md)
- [List-box dialog example](listbox-dialog-example.md)
- [Hierarchical dialog example](hierarchical-dialog-example.md)
