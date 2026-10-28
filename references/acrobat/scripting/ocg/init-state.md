# initState

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 7.0 | D | No | All | Boolean | R/W (Adobe Reader: R only) |

This property settles whether the OCG starts out on or off by default. The states Object lists the values it accepts.

Example: Set an initial state of an OCG to off.

```javascript
var ocgs = this.getOCGs();
ocgs[0].initState.constants.states.off;
```
