# shiftKey, ctrlKey, altKey, metaKey

ScriptUI.environment.keyboardState.shiftKey

ScriptUI.environment.keyboardState.ctrlKey

ScriptUI.environment.keyboardState.altKey

ScriptUI.environment.keyboardState.metaKey

### Description

true when the named modifier key is active at that moment.

Note

metaKey captures both the META and COMMAND keys.

### Type

Boolean

### Example

Example of checking whether a modifier key is held while a script runs:

```javascript
var shiftHeld = ScriptUI.environment.keyboardState.shiftKey;

if (shiftHeld) {
    alert("User is holding shift!");
}
```

Or test keyboard modifier combinations:

```javascript
var keyboardState = ScriptUI.environment.keyboardState;

if (keyboardState.shiftKey && keyboardState.altKey) {
    alert("Shift and alt held!");
}
```

Interface buttons can also use this as an alternative to reading modifiers through keyboard events, which can be harder to reason about and less intuitive for users unless event state handling is already solid.

Example:

```javascript
button.onClick = function () {
    if (ScriptUI.environment.keyboardState.shiftKey) {
        // Special functionality for 'shift' key here
        return;
    }

    // normal button behaviour here
}
```
