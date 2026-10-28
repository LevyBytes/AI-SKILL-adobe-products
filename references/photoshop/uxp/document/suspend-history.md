# suspendHistory

23.0

_Promise_`<void>`

Creates one history state covering everything performed
in the callback for this document only. All document changes should
be made inside that callback.

Note: changes made to another document are not captured
in the same history state.

The callback receives a SuspendHistoryContext object
that provides the current document in `document`.

For additional details and advanced context, see [`core.executeAsModal`](../executeasmodal.md)
API; `suspendHistory` is a simple wrapper for it.

```javascript
app.activeDocument.suspendHistory(async (context) => {
  // context.document below is, in this case, `app.activeDocument`
  context.document.activeLayers[0].name = "Changed name";
});
```

### Parameters

| Name | Type |
| --- | --- |
| `callback` | (`e`: SuspendHistoryContext) => _void_ |
| `historyStateName` | _string_ |
