# zoomType

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 3.01 | No | No | All | String | R/W |

The document's present zoom type. Valid zoom types are listed in the table that follows.

To reach any of the zoom types, use the handy zoomtype object, which defines them all.

| Zoom type | Keyword | Version |
| --- | --- | --- |
| NoVary | zoomtype.none |  |
| FitPage | zoomtype.fitP |  |
| FitWidth | zoomtype.fitW |  |
| FitHeight | zoomtype.fitH |  |
| FitVisibleWidth | zoomtype.fitV |  |
| Preferred | zoomtype.pref |  |
| ReflowWidth | zoomtype.refW | 6.0 |

Example: Make the document's zoom type fit the width.

```javascript
this.zoomType = zoomtype.fitW;
```
