# newDoc

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | No | Yes | Not available in Reader |

Builds a fresh document and returns its Doc object. Optional parameters set the document's media box dimensions in points.

Note

Only during a batch or console event can this method run. See Privileged context. See the event object for a discussion of JavaScript events.

Parameters

| Parameter | Description |
| --- | --- |
| nWidth | (optional) The width (in points) for the new document. The default value is 612. |
| nHeight | (optional) The height (in points) for the new document. The default value is 792. |

Returns

The object of the newly created document.

Example: Tack a New entry onto the Acrobat File menu. New holds three items inside it: Letter, A4, and Custom. Place this script in a folder-level JavaScripts .js file.

Register these menu items in the documented initialization context. The example uses the shown default dimensions when a prompt returns null.

```javascript
app.addSubMenu({ cName: "New", cParent: "File", nPos: 0 })
app.addMenuItem({ cName: "Letter", cParent: "New", cExec:
    "app.newDoc();"});
app.addMenuItem({ cName: "A4", cParent: "New", cExec:
    "app.newDoc(420,595)"});
app.addMenuItem({ cName: "Custom...", cParent: "New", cExec:
    "var nWidth = app.response({ cQuestion:'Enter Width in Points', cTitle:     'Custom Page Size'});"
    +"if (nWidth == null) nWidth = 612;"
    +"var nHeight = app.response({ cQuestion:'Enter Height in Points', cTitle: 'Custom Page Size'});"
    +"if (nHeight == null) nHeight = 792;"
    +"app.newDoc({ nWidth: nWidth, nHeight: nHeight })"});
```

For Acrobat versions earlier than 7.0, the script above behaves correctly. On Acrobat 7.0 it works only when the user JavaScript preference Enable Menu Items JavaScript Execution Privileges is turned on.

Should that item stay unchecked, app.newDoc has to run through a trustedFunction, since from Acrobat 7.0 onward JavaScript fired by a menu event no longer carries privilege. See Privileged context.

That same example can also be done this way:

Register these menu items in the documented initialization context. The example uses the shown default dimensions when a prompt returns null.

```javascript
var trustedNewDoc = app.trustedFunction(function (nWidth, nHeight) {
    app.beginPriv();
    try {
        return app.newDoc(nWidth, nHeight);
    } finally {
        app.endPriv();
    }
});
```

This code is not finished. For the Custom menu item, you can add further lines that stop the user from submitting an empty string or a value that is too small or too large. Refer to the PDF Reference for the limits that currently apply.

Example: Spin up an empty document, grab its Doc object, and drop in a watermark.

```javascript
var myNewDoc = app.newDoc();
myNewDoc.addWatermarkFromText("Confidential",0,font.Helv,24,color.red);
```

The Doc object addWatermarkFromText method is what this example relies on.
