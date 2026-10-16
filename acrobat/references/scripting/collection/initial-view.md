# initialView

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 9.0 | No | No | All | String | R/W |

A string that spells out the starting collection view. Tile, Details, Hidden, Custom, or null are among the values it accepts. Tile and Details ship as built-in views, whereas Custom signals a preference for a document-based Navigator.

Example: choose Details as the starting view.

```javascript
this.collection.initialView = "Details";
```
