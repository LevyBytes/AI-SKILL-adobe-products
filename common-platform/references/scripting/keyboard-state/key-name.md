# keyName

ScriptUI.environment.keyboardState.keyName

Name of the key currently pressed. This is the JavaScript key name, returned as a string such as "A" or "a".

Note

Only one pressed key is supported; holding several keys reports undefined.

Modifier keys also report undefined; for those states, see shiftKey, ctrlKey, altKey, metaKey

### Type

String

### Example

With 'a' pressed, for example:

```javascript
var currentPressedKey = ScriptUI.environment.keyboardState.keyName;

alert(currentPressedKey); // "A"
```
