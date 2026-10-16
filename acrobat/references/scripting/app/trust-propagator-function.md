# trustPropagatorFunction

Version (Key): 7.0 | Save-Prefs: No | Security: Yes | Product: All

Flags a function as a trust propagator. A function like this is not trusted on its own, yet it can take on trust whenever a trusted function calls it.

A trust propagator function passes along trust, not privilege. For that reason, exactly as with app.trustedFunction, an app.beginPriv/app.endPriv pair has to bracket any code in the function body that would normally run in a privileged context.

Utility functions are a natural fit for trust propagator functions. A trusted function can call them, and so can another trust propagator function, but a function that is not trusted cannot call them with success inside a non-privileged context.

Note

Functions written in .js files within the App JavaScript folder are trust propagator functions by implication. Functions written in .js files within the User JavaScript folder are not.

Only during batch, console, and application initialization is this method available.

Syntax

There are two ways to call this method.

Pass your implemented callback to `app.trustPropagatorFunction(callback)` and retain the returned function. Define the callback as a function expression or a separately named function. Register it in the documented privileged initialization context.

or

Pass your implemented callback to `app.trustPropagatorFunction(callback)` and retain the returned function. Define the callback as a function expression or a separately named function. Register it in the documented privileged initialization context.

Parameters

Parameter — Description

oFunc

A function object naming the function to mark as a trust propagator.

Returns

When it works, the same function object you passed in is handed back, and from then on that function object is a trust propagator. When it fails, it throws NotAllowedError.

Example 1: For background, see example 3 following trustedFunction.

What this sample sets up is a trust propagator function, mySaveAs, for saving a file into a folder, plus a trusted function, myTrustedSpecialTaskFunc, for carrying out an assortment of tasks that mix privileged and non-privileged code. Calling mySaveAs straight from a non-privileged context is not possible.

```javascript
mySaveAs = app.trustPropagatorFunction(function(doc,path)
{
    app.beginPriv();
        doc.saveAs(path);
    app.endPriv();
})
myTrustedSpecialTaskFunc = app.trustedFunction(function(doc,path)
{
    // Privileged and/or non-privileged code above
    app.beginPriv();
        mySaveAs(doc,path);
    app.endPriv();
    // Privileged and/or non-privileged code below
});
```

Run that code off a mouse-up button, say, and the current document gets saved to the path you named.

```javascript
myTrustedSpecialTaskFunc(this, "/c/temp/mySavedDoc.pdf");
```

Example 2: This sample puts together a basic dialog box by way of the app.execDialog method and runs privileged code through it.

The dialog box wants your name and asks you to browse to a document on your local hard drive (or a network drive). Click OK and the file you picked loads into the viewer while your name drops into the document properties' author field. (That name only goes in when the author field starts out empty.) On top of that, the dialog box surfaces the value of identity.email, which counts as privileged information.

A beginPriv/endPriv pair brackets any privileged code.

Take note of the ANTrustPropagateAll function, a handy tool when you are building dialog boxes that lean on privileged code. Feed it one object as its argument; it converts every function inside that object into a trust propagator function and then returns the object back.


Complete example files:

- [dialog-layout.js](../examples/trusted-author-dialog/dialog-layout.js)
- [trusted-dialog.js](../examples/trusted-author-dialog/trusted-dialog.js)
- [setup.md](../examples/trusted-author-dialog/setup.md)

Triggering this dialog box can happen from a button, though a menu item or a toolbar button suits it better. To add a menu item onto the Tools menu, for instance, set the code below into a User JavaScript file.

```javascript
app.addMenuItem( { cName: "myDialog", cUser: "My Cool Dialog",
    cParent: "Tools", cExec: "myDialog()", nPos: 0 } );
```
