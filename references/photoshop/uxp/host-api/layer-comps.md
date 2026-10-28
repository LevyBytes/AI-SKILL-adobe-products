# LayerComps

Use `LayerComps` as a collection that supports array-style access to a document's Layer Comps.

Reach the collection through the [Document.layerComps](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/document.md#layercomps) property. This example adds a Layer Comp:

```javascript
const comp = await app.activeDocument.layerComps.add();
```
