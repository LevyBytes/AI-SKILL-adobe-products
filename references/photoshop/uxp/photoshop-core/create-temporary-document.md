# createTemporaryDocument

23.0

_object_

Creates a temporary duplicate document for background processing. This document stays out of the UI,
and some editing features are limited.

```javascript
await core.createTemporaryDocument({ documentID: 123 });
```

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `options` | _object_ | Object containing the id the document to duplicate under property `documentID`. |
| `options.documentID` | _number_ | - |
