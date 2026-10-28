# color properties

These are the colors the color object lays out.

| Color object | Keyword | Equivalent JavaScript | Version |
| --- | --- | --- | --- |
| Transparent | color.transparent | [ "T" ] |  |
| Black | color.black | [ "G", 0 ] |  |
| White | color.white | [ "G", 1 ] |  |
| Red | color.red | [ "RGB", 1,0,0 ] |  |
| Green | color.green | [ "RGB", 0,1,0 ] |  |
| Blue | color.blue | [ "RGB", 0, 0, 1 ] |  |
| Cyan | color.cyan | [ "CMYK", 1,0,0,0 ] |  |
| Magenta | color.magenta | [ "CMYK", 0,1 0,0 ] |  |
| Yellow | color.yellow | [ "CMYK", 0,0,1,0 ] |  |
| Dark Gray | color.dkGray | [ "G", 0.25 ] | 4.0 |
| Gray | color.gray | [ "G", 0.5 ] | 4.0 |
| Light Gray | color.ltGray | [ "G", 0.75 ] | 4.0 |

Example: here the field's text turns red whenever its value drops below zero and black whenever that value is zero or above.

```javascript
var f = event.target; /* field that the event occurs at */
f.target.textColor = event.value < 0 ? color.red : color.black;
```
