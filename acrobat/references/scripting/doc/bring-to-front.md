# bringToFront

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 5.0 | No | No | All |

Pulls an already-open document to the front.

Example: Among the open documents, this example looks for the one titled "Annual Report" and pulls it to the front.

```javascript
var d = app.activeDocs;
for (var i = 0; i < d.length; i++)
    if (d[i].info.Title == "Annual Report") d[i].bringToFront();
```
