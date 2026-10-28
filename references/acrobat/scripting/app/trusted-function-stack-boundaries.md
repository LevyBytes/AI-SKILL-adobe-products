# Trusted function stack boundaries

Example 3: A trusted function can deliberately lift the current privilege level for its own stack frame and nowhere else. This sample surfaces a few of the issues that come with that.

The code below tries to break a trusted function into something more modular:

Define this trusted wrapper during folder-level initialization. The caller supplies the document and device-independent output path; privilege ends even if saving throws.

```javascript
function mySaveAs(doc, path) {
    doc.saveAs(path);
}
var myFunc = app.trustedFunction(function (doc, path) {
    app.beginPriv();
    try {
        mySaveAs(doc, path);
    } finally {
        app.endPriv();
    }
});
```

Trouble arises because the moment the privileged call doc.saveAs(path) runs, it sits not inside the stack frame (the function body) of the calling trusted function myFunc but inside the stack frame of mySaveAs, and mySaveAs is no trusted function. So when myFunc runs in a context that is not privileged, it throws an exception.

Turning mySaveAs into a trusted function is one route that gets myFunc to work. The catch: doing so leaves the privileged doc.saveAs function open to non-privileged execution by anyone aware that this function lives on your system.

You cannot just wrap doc.saveAs(path) in a beginPriv/endPriv pair. Run myFunc from a non-privileged context and the app.beginPriv inside the mySaveAs body will throw an exception. The reason: mySaveAs is not trusted, so it holds no authorization to ask for a raised privilege level.

Pulling together the points made above, what is needed is a sort of function with these traits:

A trusted function can call it.

It is not itself trusted, so a non-privileged context cannot call it directly.

Meeting those conditions is exactly what a trust propagator function does (see trustPropagatorFunction below).

Related: [app.trustedFunction](trusted-function.md).
