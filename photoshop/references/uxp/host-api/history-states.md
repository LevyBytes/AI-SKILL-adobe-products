# HistoryStates

This collection class supports array-style access to a document's history states and also offers familiar ExtendScript-style helpers such as `getByName`

```javascript
// Iterate through all history states
app.activeDocument.historyStates.forEach((h) => console.log(h.name));

// Find all snapshot history states
var snapshots = app.activeDocument.historyStates.filter((h) => h.snapshot);
```
