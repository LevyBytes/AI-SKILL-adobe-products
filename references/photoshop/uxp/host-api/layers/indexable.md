# Indexable

▪ [index: *number*]: [_Layer_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/layer.md)

Use this indexer to retrieve a layer from the collection.

```javascript
// Iterate through all the top layers of frontmost document
app.activeDocument.layers.forEach((h) => console.log(h.name));
```

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| length | _number_ | R | 22.5 | Collection element count for [Layer](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/layer.md) entries. |
| typename | _string_ | R | 22.5 | Object collection name: Layers. |

### Methods
