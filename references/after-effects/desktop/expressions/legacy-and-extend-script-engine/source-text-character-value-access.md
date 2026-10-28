# Source Text property array-index access to characters requires .value

Within the Legacy ExtendScript expression engine, you could reach a text property's characters through bracket notation, treating it like an array:

```javascript
text.sourceText[0]      // Returns the first character of the Source Text property's text value.
```

To get at the characters under the JavaScript engine, you must tack on .value:

```javascript
text.sourceText.value[0]    // Returns the first character of the Source Text property's text value.
```

This syntax works across both engines.
