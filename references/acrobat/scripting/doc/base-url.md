# baseURL

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.0 | D | No | All | String | R/W |

Relative web links inside the document are resolved against the document's base URL. See also URL.

Example: Assigns the base URL, then adds a link that jumps to a page relative to that base URL.

```javascript
console.println("Base URL was " + this.baseURL);
this.baseURL = "http://www.example.com/products/";
console.println("Base URL is " + this.baseURL);
// Add a link to the first page
var link = this.addLink(0, [200,200, 400, 300])
// Set an action that goes to the Example Reader page on the Example website.
link.setAction("this.getURL('reader',false)")
```
