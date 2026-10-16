# size

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.0 | No | No | Not available in Reader | Number | R/W |

Sets the size of any text writeText produces. It works as a multiplier: the actual size comes from the size property times the default size tied to the chosen style.

Example: Write a "Hello World!" document.

```javascript
var rep = new Report();
rep.size = 1.2;
rep.writeText("Hello World!");
```
