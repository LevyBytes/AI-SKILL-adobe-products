# available

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.0 | No | No | All | Boolean | R |

Yields true once the Search plug-in has loaded and querying is possible. Before running a query or otherwise touching the search object, a script writer ought to test this Boolean.

Example: Confirm the search object is present and ready.

```javascript
if (typeof search != "undefined" && search.available) {
    search.query("Cucumber");
}
```
