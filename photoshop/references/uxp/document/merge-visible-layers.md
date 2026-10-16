# mergeVisibleLayers

23.0

**async** : _Promise_`<void>`

Combines all visible document layers into one layer.
Unlike [flatten](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/document.md#flatten), `mergeVisibleLayers` does not turn the resulting layer
into Background when no Background exists already. If the result is not Background, the merged layer
takes its name from the top selected layer, or from the topmost layer.
