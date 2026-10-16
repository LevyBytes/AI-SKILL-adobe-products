# Trusted menu-command example

Example 4 (Acrobat 8.0 and later)

Run app.execMenuItem inside folder JavaScript by means of a trusted function.

```javascript
var myTrustedMenu = app.trustedFunction(function (name) {
    app.beginPriv();
    try {
        return app.execMenuItem(name);
    } finally {
        app.endPriv();
    }
});
```

After Acrobat or Adobe Reader has been restarted, a script such as

```javascript

myTrustedMenu("PropertyToolbar");
```

can run from a non-privileged context — say a mouse-up button action — and won't fail silently. What that script does is toggle the Properties toolbar on or off.

Related: [app.execMenuItem](exec-menu-item.md).
