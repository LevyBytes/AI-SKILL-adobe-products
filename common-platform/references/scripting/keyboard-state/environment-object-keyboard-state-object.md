# Environment object — Keyboard state object

This JavaScript object reports the keyboard state at the moment it is read: the current key that is down, plus any modifier keys that are pressed.

Because it does not depend on the event-handling system, a script can read this object at any time to test for specific keys, such as keyboard modifiers, and branch to alternate actions.

Access it through the ScriptUI.environment object:

```javascript
var myKeyState = ScriptUI.environment.keyboardState;
```

The Keyboard State object contains the following properties:
