# removeField

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 9.0 | No | No | All |

Drop a field from the collection schema.

Parameters

| Parameter | Description |
| --- | --- |
| name | A string giving the name of the field slated for removal. |

Example: strip the "from" field out of the collection schema.

```javascript
this.collection.removeField("from");
```
