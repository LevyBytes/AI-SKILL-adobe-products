# handlers

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.0 | No | No | All | Array | R |

Holds an array of the language-independent names for the security handlers on hand for encryption or signatures.

See also getSecurityPolicies.

What follows applies across different Acrobat versions:

From Acrobat 6.0 onward, this property may be read without restriction, so you can query which handlers exist.

Under Acrobat 6.0, the call came back with three handlers: Adobe.PPKLite, Adobe.PPKMS, and Adobe.AAB. From Acrobat 7.0 on, everything Adobe.PPKMS did was folded into Adobe.PPKLite, and Adobe.PPKMS no longer stands on its own as a handler.

From Acrobat 7.0 onward, one more handler exists, Adobe.APS. Its job is authentication ahead of any call to encryptUsingPolicy, getSecurityPolicies, or chooseSecurityPolicy. At present it serves no other purpose.

From Acrobat 7.0 onward, security constants are set for each handler. (The exception is Adobe.AAB; no constant was introduced for it, since the handler is likely headed for deprecation soon.) Use these constants when you spin up a new handler instance via getHandler or when you compare against the handlers list.

Example: Pull the roster of security handlers present on this system:

```javascript
for ( var i=0; i < security.handlers.length; i++ )

     console.println(security.handlers[i])
```

What prints to the console might read

```javascript
Adobe.APS
Adobe.PPKLite
Adobe.PPKMS
Adobe.AAB
```
