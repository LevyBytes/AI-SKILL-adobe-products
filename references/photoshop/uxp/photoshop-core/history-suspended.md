# historySuspended

23.1

_Promise_&lt;boolean&gt;

Returns true while history is suspended. Related API: [Document.suspendHistory](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/document.md#suspendhistory).

```javascript
await core.historySuspended({ documentID: 123 });
```

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `options` | _object_ | Object containing key of `documentID` for the target document. |
| `options.documentID` | _number_ | - |
