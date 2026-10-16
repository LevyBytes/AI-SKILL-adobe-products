# FontsObject.fontsWithDefaultDesignAxes

app.fonts.fontsWithDefaultDesignAxes

### Description

Gives back an array of variable Font objects, every one keyed to a distinct font dictionary and carrying default values across its design axes. The API offers a handy shortcut for narrowing down to one unique instance per installed variable font.

### Type

Array of Font objects; read-only.

### Example

```javascript
var variableFontList = app.fonts.fontsWithDefaultDesignAxes;
alert(variableFontList.length);
```
