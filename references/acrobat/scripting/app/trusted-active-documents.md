# Trusted access to active documents

Example 2: How the app.activeDocs property acts depends on the setting it runs under:

Throughout a console or batch event, it gives back an array holding every active document.

Within a context that is not privileged, it gives back an array of only the active documents whose disclosed property is set to true.

You can work past this restriction in a non-privileged context by writing a trusted function that lifts the privilege level before calling activeDocs. Such a function would live in a .js file inside the User (or App) JavaScript folder.

```javascript
var trustedActiveDocs = app.trustedFunction(function () {
    app.beginPriv();
    try {
        return app.activeDocs;
    } finally {
        app.endPriv();
    }
});
```

A form button's mouse-up action can run the code below.

```javascript
var d = trustedActiveDocs();
console.println("There are d = " + d.length
    + " files open in the viewer.")
for ( var i=0; i< d.length; i++)
    console.println((i+1) + ". " + d[i].documentFileName )
```

Every document open in the viewer — disclosed or otherwise — gets its count and file name reported to the console.

Related: [app.trustedFunction](trusted-function.md).
