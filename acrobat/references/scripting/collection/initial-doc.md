# initialDoc

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 9.0 | No | No | All | String | R/W |

Reach for the initialDoc property to pin down which document in the collection shows first when the collection opens. What initialDoc holds is the name property belonging to the initial document's data object — or null where no initial document has been named.

Example: make the collection's third file the one shown first.

```javascript
this.collection.initialDoc = this.dataObjects[2].name;
```
