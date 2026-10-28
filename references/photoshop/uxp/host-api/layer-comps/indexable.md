# Indexable

▪ [index: *number*]: [_LayerComp_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/layercomp.md)

Use this indexer to retrieve a Layer Comp from the collection.

Reach the collection through the [Document.layerComps](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/document.md#layercomps) property. This example adds a Layer Comp:

```javascript
const comp = await app.activeDocument.layerComps.add();
```

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| length | _number_ | R | 24.0 | Collection element count for [LayerComp](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/layercomp.md) entries |
| parent | [_Document_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/document.md) | R | 24.0 | Document that owns this Layer comp collection |
| typename | _string_ | R | 24.0 | Object collection name: LayerComps |

### Methods
