# name

| Type | Access |
| --- | --- |
| String | R |

The name the index administrator gave the index at indexing time.

See search. indexes, which returns an array of the Index objects currently accessed by the search engine.

Example: This example enumerates all of the indexes and writes their names to the console.

```javascript
for (var i = 0; i < search.indexes.length; i++) {
    console.println("Index[" + i + "] = " + search.indexes[i].name);
}
```
