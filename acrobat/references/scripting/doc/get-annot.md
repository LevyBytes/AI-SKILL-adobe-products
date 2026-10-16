# getAnnot

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | No | No | All |

Hands back the Annotation object that lives on a given page of the document.

Parameters

| Parameter | Description |
| --- | --- |
| nPage | Whichever page holds the Annotation object. |
| cName | What the Annotation object is called. |

Returns

The Annotation object, or null if there is no such annotation.

Example: Attempt to get a particular annotation.

```javascript
var ann = this.getAnnot(0, "OnMarketShare");
if (ann == null)
    console.println("Not Found!")
else
    console.println("Found it! type: " + ann.type);
```
