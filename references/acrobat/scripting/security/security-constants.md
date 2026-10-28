# security constants

From Acrobat 7.0 onward, the security object defines a handful of convenience strings. These constants live as properties on the wrapper objects named below.

HandlerName object

Use these constants to pick which handler applies.

| Property | Type | Access | Description |
| --- | --- | --- | --- |
| StandardHandler | String | R | Specify this value in the handler property of a SecurityPolicy object built on the Standard (password-based) security handler. |
| PPKLiteHandler | String | R | Specify this value in the handler property of a SecurityPolicy object built on the PPKLite (certificate-based) security handler. You may also pass it to security.getHandler to spin up a fresh security context. |
| APSHandler | String | R | This is the value named in the handler property of a SecurityPolicy object built on the Adobe Policy Server security handler. You may also pass it to security.getHandler to spin up a fresh security context. |

Example: The string constant security.StandardHandler names the handler property on the SecurityPolicy object.

```javascript
security.getHandler(security.PPKLiteHandler, true);
```

EncryptTarget Object

Reach for these constants to declare what data a policy encrypts. They belong in the target property of the SecurityPolicy object.

| Property | Type | Access | Description |
| --- | --- | --- | --- |
| EncryptTargetDocument | String | R | Applied, the Security Policy encrypts the whole document. |
| EncryptTargetAttachments | String | R | Here the Security Policy encrypts solely the file attachments held inside the document. The document itself stays openable, yet the attachments will not open until the right security authentication is given. eEnvelope workflows put it to use. |

Example:

```javascript
var filterOptions = { target: security.EncryptTargetAttachments };
security.chooseSecurityPolicy( { oOptions: filterOptions } );
```
