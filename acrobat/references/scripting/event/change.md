# change

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 3.01 | No | No | All | String | R/W |

Holds a string capturing whatever value change the user just keyed in. A JavaScript can swap out some or all of that string for other characters. That change might be a lone keystroke or a run of characters — for instance, when something is pasted into the field.

Example: Force every keystroke into upper case.

```javascript
// Custom Keystroke for text field
event.change = event.change.toUpperCase();
```
