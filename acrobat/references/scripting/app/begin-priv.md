# beginPriv

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 7.0 | No | Yes | All |

Lifts the execution privilege of the current stack frame so that methods flagged secure can run without tripping security exceptions. Success demands a frame already on the stack standing for the execution of a trusted function, and every frame between the one now executing and that frame — the calling frame included — must stand for the execution of trust propagator functions.

To take the privilege back, call app.endPriv. A trusted function comes from app.trustedFunction, and a trust propagator function comes from app.trustPropagatorFunction. The notion of a stack frame is taken up just after the app.trustedFunction description.

Returns

undefined on success, exception on failure

Example: For examples of usage, see trustedFunction and trustPropagatorFunction.
