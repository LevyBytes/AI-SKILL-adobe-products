# chooseSecurityPolicy

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 7.0 | No | Yes | Not available in Reader |

Pops up a dialog box so the user can select from a list of security policies, pared down by the options supplied.

Note

Runs only during a batch, console, or application-initialization event. Refer to Privileged context. UI will be shown by this method.

Parameters

| Parameter | Description |
| --- | --- |
| oOptions | (optional) A SecurityPolicyOptions object containing the parameters used for filtering the list of security policies returned. If not specified, all policies found are displayed. |

Returns

Returns a single SecurityPolicy object or null if the user cancelled the selection.

Example: Pick a policy and print its name.

```javascript
var options = { cHandler: security.APSHandler };
var policy = security.chooseSecurityPolicy( options );
console.println("The policy chosen was: " + policy.name);
```

One of the security constants is security.APSHandler.
