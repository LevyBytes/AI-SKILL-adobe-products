# duplicate

23.0

**async** : _Promise_`<void>`

Copies this channel into its parent document, or into `targetDocument` when one is provided.

```javascript
// duplicate the channel
await channel.duplicate();

// duplicate to a different, compatible document
const newDoc = psApp.documents[1];
await channel.duplicate(newDoc);
```

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `targetDocument?` | [_Document_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/document.md) | when supplied, uses another document as the duplicate destination. |
