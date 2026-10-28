# indexes

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.0 | No | Yes | All | Array | R |

Holds an array of every Index object the search engine can currently reach.

Note

(Acrobat 7.0) Reaching this property is possible only inside a batch or console event. Refer to Privileged context. A treatment of JavaScript events lives in the event object.

Example: Walk through every index and print out each one's name.

```javascript
for (var i = 0; i < search.indexes.length; i++) {
    console.println("Index[" + i + "]=", search.indexes[i].name);
}
```
