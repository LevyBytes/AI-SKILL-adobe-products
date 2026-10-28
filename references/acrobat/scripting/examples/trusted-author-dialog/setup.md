# Trusted author dialog setup

Open when adding a folder-level Acrobat dialog that reads the identity email, browses for a document, and fills an empty Author property.

Load `dialog-layout.js` before `trusted-dialog.js` during Acrobat's trusted folder-level initialization. The layout variable and trusted function must share their script scope. Invoke `myDialog()` from the authorized menu or document action after initialization.

The layout preserves the Name field, identity email, Browse button and OK/Cancel controls. Each restricted operation balances `beginPriv()` with `endPriv()` even on failure. Cancelling the dialog does not open a file. An existing Author value is retained.

These files use Acrobat JavaScript globals, not Node modules. The host supplies `app`, `identity` and `console`; native Acrobat execution is required to verify host-specific trust enforcement.

Both files come from the `trustPropagatorFunction` example in the [Acrobat JavaScript reference](https://opensource.adobe.com/dc-acrobat-sdk-docs/library/jsapiref/JS_API_AcroJS.html#trustpropagatorfunction).
