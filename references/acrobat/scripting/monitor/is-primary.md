# isPrimary

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | No | No | All | Boolean | R |

A Boolean that reads true on the primary monitor and false on every other one.

Example: Grab the widest monitor and work out whether it happens to be the primary one.

```javascript
var monitors = app.monitors.widest();
var isIsNot = (monitors[0].isPrimary) ? "is" : "is not";
console.println("The widest monitor "+isIsNot+" the primary monitor.");
```
