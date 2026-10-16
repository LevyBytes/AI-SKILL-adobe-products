# name

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 6.0 | D | No | C | string | R/W |

An annotation's name. The Doc object getAnnot method can take this value to locate the annotation and get at its properties and methods.

Annotations: All

Example: Find the annotation called myNote and tack on a comment.

```javascript
var gannot = this.getAnnot(0, "myNote");
gannot.contents += "rrDon't forget to check with Smith";
```
