# printx

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 3.01 | No | No | All |

Reshapes the input string cSource under the control of a formatting string, cFormat. Any string works as cFormat, and it may embed these special masking characters:

| Value | Effect |
| --- | --- |
| ? | Copy next character. |
| X | Copy next alphanumeric character, skipping any others. |
| A | Copy next alpha character, skipping any others. |
| 9 | Copy next numeric character, skipping any others. |
| ‘’\*’’ | Copy the rest of the source string from this point on. |
| ‘’'’ | Escape character. |
| > | Upper case translation until further notice. |
| < | Lower case translation until further notice. |
| = | Preserve case until further notice (default). |

Parameters

| Parameter | Description |
| --- | --- |
| cFormat | The formatting string to use. |
| cSource | The source string to use. |

Returns

The formatted string.

Example: Format a string as a U.S. telephone number.

```javascript
var v = "aaa14159697489zzz";
v = util.printx("9 (999) 999-9999", v);
console.println(v);
```
