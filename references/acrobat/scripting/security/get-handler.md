# getHandler

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | No | Yes | All |

Yields a SecurityHandler object. A caller may spin up as many new engines as wanted, and every getHandler call makes another engine. The UI engine, though, is the only one of its kind.

Note

This method is reachable from batch, console, and app-initialization events. Refer to Privileged context.

Backward Compatibility: Since Adobe.PPKMS stopped existing as its own handler at Acrobat 7.0, calling getHandler with cName set to "Adobe.PPKMS" gives back the engine tied to the Adobe.PPKLite handler.

Parameters

| Parameter | Description |
| --- | --- |
| cName | The language-independent name of the security handler, as returned by the handlers property. (Acrobat 7.0) Beginning with Acrobat 7.0, constant strings are defined for each of the valid handlers. See security constants, in particular the HandlerName object object. |
| bUIEngine | (optional) If true, the method returns the existing security handler instance that is associated with the Acrobat user interface (so that, for example, a user can log in through the user interface). If false (the default), returns a new engine. |

Returns

The SecurityHandler object specified by cName. If the handler is not present, returns a null object.

Example: Pick the Adobe.PPKLite SecurityHandler.

```javascript
// Validate signatures on open
security.validateSignaturesOnOpen = true;

// List all available signature handlers
var a = security.handlers;
for (var i = 0; i < a.length; i++)
    console.println("a["+i+"] = "+a[i]);

// Use "Adobe.PPKLite" handler engine for the UI
var ppklite = security.getHandler(
    security.PPKLiteHandler, true);
// Log in
ppklite.login("dps017", "/C/profiles/DPSmith.pfx");
```

For a continuation of this example, see the one that follows signatureSign.
