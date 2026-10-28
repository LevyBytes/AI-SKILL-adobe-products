# HistoryState

One History panel entry is represented by this history-state object.

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| docId | _number_ | R | 22.5 | Document ID associated with this history state. |
| id | _number_ | R | 22.5 | batchPlay can address the state by combining this history ID with the document ID while the document remains open. |
| name | _string_ | R | 22.5 | History panel display name for this state. |
| parent | [_Document_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/document.md) | R | 22.5 | Document that owns this history state. |
| snapshot | _boolean_ | R | 22.5 | Indicates whether the state is a snapshot rather than an automatically generated entry. |
| typename | _string_ | R | 23.0 | Referenced object class name: _"HistoryState"_. |
