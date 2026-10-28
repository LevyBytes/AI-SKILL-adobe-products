# Hierarchical dialog example

Example 4: Here a hierarchical list box is demonstrated. Opening the dialog box surfaces a hierarchical list; once the user picks an entry and presses the Select button, the document navigates to whichever destination was chosen. Attaching the Doc object as a property of the dialog box is how it gets handed to that dialog.

Load the layout script before the dialog script as document-level JavaScript. Set `dialog4.doc` to the document containing the named destinations, then invoke `app.execDialog(dialog4)`. The source’s `dotheDialog(dialog4, this)` helper performs that binding.

- [chapter-selection-layout.js](https://opensource.adobe.com/dc-acrobat-sdk-docs/library/jsapiref/JS_API_AcroJS.html#execdialog)
- [chapter-selection-dialog.js](https://opensource.adobe.com/dc-acrobat-sdk-docs/library/jsapiref/JS_API_AcroJS.html#execdialog)

What the routine below does is bind the Doc object onto the dialog box and then hand that dialog box off to app.execDialog. Both the dialog4 object and this routine may live at the document level.

```javascript

function dotheDialog(dialog,doc)
{
dialog.doc = doc;
var retn = app.execDialog( dialog )
}
```

A mouse-up action is one place from which the script below could then be fired.

```javascript

dotheDialog( dialog4, this );
```

Example 5: For an illustration of running privileged code out of a context that lacks privilege, refer to trustPropagatorFunction.

Related: [app.execDialog](exec-dialog.md).
