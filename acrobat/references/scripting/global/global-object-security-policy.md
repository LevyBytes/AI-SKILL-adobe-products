# Global object security policy

Document access to global variables is reined in by the new global security policy. The Note in global lays out further details and the exceptions.

Within a document called docA.pdf, run the script below in a non-privileged context (a mouse-up button):

```javascript
global.x = 1
global.setPersistent("x", true);
```

Because the path for docA.pdf becomes the origin stored alongside the global.x variable, docA.pdf is cleared to reach that variable:

```javascript
console.println("global.x = " + global.x);
```

Setting this global from docA.pdf is done with global.x = 3, say, in any context.

For a document on a different path to read and write this global variable, both the read and the write have to happen in a trusted context at a raised privilege level. Written as folder JavaScript, here are the scripts.

```javascript
myTrustedGetGlobal = app.trustedFunction ( function()
{
    app.beginPriv();
    var y = global.x;
    return y
    app.endPriv();
});
myTrustedSetGlobal = app.trustedFunction ( function(value)
{
    app.beginPriv();
    global.x=value;
    app.endPriv();
});
```

By way of those trusted functions, a second document, docB.pdf, gains access to the global.x variable:

```javascript
// Mouse up button action from doc B
console.println("The value of global.x is " + myTrustedGetGlobal());
```

docB.pdf can set the global too:

```javascript
// Set global.x from docB.pdf
myTrustedSetGlobal(2);
```

The moment global.x is set from docB.pdf, its origin flips; a trusted function becomes the only route by which docA.pdf can still reach global.x directly:

```javascript
// Execute a mouse up button action from docA.pdf
console.println("The value of global.x is " + myTrustedGetGlobal());
```
