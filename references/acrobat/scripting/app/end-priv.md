# endPriv

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 7.0 | No | Yes | All |

Withdraws whatever privilege app.beginPriv granted to the current stack frame. Privilege granted by the current event stays in place.

Related methods are app. trustedFunction, app. trustPropagatorFunction and app. beginPriv.

Returns

undefined on success, exception on failure

Example: For examples of usage, see trustedFunction and trustPropagatorFunction.
