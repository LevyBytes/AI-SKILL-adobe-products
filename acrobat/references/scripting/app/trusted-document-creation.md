# Trusted document creation

Example 1: app.newDoc counts as a security-restricted method requiring a privileged context to run within. It cannot, for one, run straight from a mouse-up event under normal conditions. This sample demonstrates running that method off a mouse-up event by wrapping it in a trusted function.

Drop the script below into a .js file sitting in the User (or App) JavaScript folder.

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

Restart Acrobat and the trustedNewDoc function will run from any location. The script below, wired to a button's mouse-up action, spins up a fresh document measuring 200 points on each side.

```javascript
trustedNewDoc( 200, 200 );
```

Security restrictions mean app.newDoc(200,200) cannot ordinarily fire from a mouse-up event. What makes creating the new document possible is the trusted function.

Note

This sample is kept simple. You could extend the trusted function so it carries the two optional arguments that app.newDoc accepts as well.

A menu item can run the trustedNewDoc function too.

```javascript
app.addMenuItem( {
    cName: "myTrustedNewDoc",
    cUser: "New Doc", cParent: "Tools",
    cExec: "trustedNewDoc(200,200)", nPos: 0
} );
```

Once more, trustedNewDoc could be made richer by letting the user supply the new document's dimensions — whether through a run of app.response dialog boxes or one full dialog box built with app.execDialog.

Note

Leave app.newDoc outside the app.beginPriv/app.endPriv pair and running trustedNewDoc from a context that is not privileged will fail, throwing an exception. The privilege level has to be raised on purpose, exactly the way shown.

Related: [app.trustedFunction](trusted-function.md).
