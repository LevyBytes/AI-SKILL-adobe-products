# getField

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 9.0 | No | No | All |

Handed a collection field's name, the getField method gives back the collectionField object that goes with it.

Parameters

| Parameter | Description |
| --- | --- |
| name | A string giving the field name of the collectionField object slated to be retrieved. |

Returns

Either the matching collectionField object, or null when no such field turns up.

Example: fetch the collectionField object tied to the "from" field.

```javascript
var f = this.collection.getField("from");
```
