# removeWeblinks

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | D | No | Not available in Reader |

Walks the pages you name in search of links whose action targets a given web URL, and strips those out. See also addWeblinks.

Note

Only weblinks created through the application's UI are taken out by this call. Links driven from JavaScript instead (getURL, for instance) stay put.

Parameters

| Parameter | Description |
| --- | --- |
| nStart | (optional) A 0-based index marking where an inclusive page range begins. When neither nStart nor nEnd is given, every page in the document is affected. Supplying nStart alone narrows the range to just the one page nStart points at. |
| nEnd | (optional) A 0-based index marking where an inclusive page range ends. When neither nStart nor nEnd is given, every page in the document is affected. Supplying nEnd alone makes the range run from page 0 through nEnd. |

Returns

A count of how many web links were stripped from the document.

Example: clear every web link out of the document and print the outcome to the console window.

```javascript
var numWeblinks = this.removeWeblinks();
console.println("There were " + numWeblinks +

     " web links removed from the document.");
```
