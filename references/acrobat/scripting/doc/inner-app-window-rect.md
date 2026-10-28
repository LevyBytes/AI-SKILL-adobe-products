# innerAppWindowRect

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Array of Numbers | R |

Hands back a rectangle, given as screen coordinates in an array, that marks the bounds of the Acrobat inner application window. Elements belonging to the outer application rectangle, such as the title bar and the resizing border, are left out of this one.

Example: Echo the Acrobat inner application window back to the console.

```javascript
var coords = this.innerAppWindowRect;
console.println(coords.toSource())
// Possible output: [115, 154, 1307, 990]
```

See also innerDocWindowRect, outerAppWindowRect and outerDocWindowRect.
