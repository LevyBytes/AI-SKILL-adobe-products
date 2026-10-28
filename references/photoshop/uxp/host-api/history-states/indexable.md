# Indexable

▪ [index: *number*]: [_HistoryState_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/historystate.md)

Use this index signature when retrieving history-state entries.

```javascript
// Iterate through all history states
app.activeDocument.historyStates.forEach((h) => console.log(h.name));

// Find all snapshot history states
var snapshots = app.activeDocument.historyStates.filter((h) => h.snapshot);
```

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| length | _number_ | R | 22.5 | Count of [HistoryState](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/historystate.md) entries held by this collection. |
| parent | Document | R | 22.5 | Document that owns this HistoryState collection. |

### Methods
