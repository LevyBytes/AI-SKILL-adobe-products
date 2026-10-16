# app.trustedFunction

Version (Key): 7.0 | Save-Prefs: No | Security: No | Product: All

Flags a function as trusted. A trusted function is allowed to deliberately bump up the privilege level for its own stack frame. That stack frame — essentially the function body — usually holds security-restricted methods that demand a privileged setting to run in. Raising the privilege level lets those restricted methods run even in contexts that are not privileged. See Privileged context.

Inside the function definition's body, any code that would ordinarily need a privileged context must be bracketed by calls to app.beginPriv and app.endPriv, just as the examples further down illustrate.

Note

Only during batch, console and application initialization events is this method available.

Parameters

Parameter — Description

oFunc

A function object naming the function that should be marked trusted.

Returns

When it works, the same function object you passed in is handed back, and from then on that function object is trusted. When it fails, it throws NotAllowedError.

Syntax

There are two ways to call this method.

Pass your implemented callback to `app.trustedFunction(callback)` and retain the returned function. Define the callback as a function expression or a separately named function. Register it in the documented privileged initialization context.

or

Pass your implemented callback to `app.trustedFunction(callback)` and retain the returned function. Define the callback as a function expression or a separately named function. Register it in the documented privileged initialization context.

Both the examples here and those trailing the app.trustPropagatorFunction method carry plenty of comments, the kind that unpack what a trusted function really is and call attention to several subtleties of the subject.

Related references:

- [Trusted document creation](trusted-document-creation.md)
- [Trusted access to active documents](trusted-active-documents.md)
- [Trusted function stack boundaries](trusted-function-stack-boundaries.md)
