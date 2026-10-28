# addWeblinks

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | D | No | Not allowed in Reader: Only available in Acrobat products |

Sweeps the pages you name for any text carrying an http: scheme and turns each one into a link with a URL action.

See also the removeWeblinks method

Parameters

| Parameter | Description |
| --- | --- |
| nStart | (optional) A 0-based index marking where an inclusive page range begins. Leave both nStart and nEnd out and the range spans every page in the document. Supply nStart by itself and the range is the lone page that nStart names. |
| nEnd | (optional) A 0-based index marking where an inclusive page range ends. Leave both nStart and nEnd out and the range spans every page in the document. Supply nEnd by itself and the range runs from 0 through nEnd. |

Returns

How many web links were added to the document.

Example: Comb the whole document, converting every bit of content that reads like a web address into a web link. Then report how many links were made.

```javascript
var numWeblinks = this.addWeblinks();
console.println("There were " + numWeblinks +

     " instances of text that looked like a web address,"

     +" and converted as such.");
```
