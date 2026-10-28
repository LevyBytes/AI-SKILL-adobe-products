# Indexable

▪ [index: *number*]: [_Channel_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/channel.md)

Use this indexer to retrieve channels from the collection.

```javascript
// Iterate through all channels in the document
app.activeDocument.channels.forEach((h) => console.log(h.name));
```

**_Fixes in Photoshop 24.6_**

- _Component channels now behave correctly in non-English localizations_
- _Bitmap and Indexed Color modes now return Channel objects correctly_

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| length | _number_ | R | 23.0 | Count of Channel elements held by this collection. |
| parent | [_Document_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/document.md) | R | 23.0 | Document that owns this Channel collection. |
| typename | _string_ | R | 23.0 | `Channels` object collection name. |

### Methods
