# add

24.0

_Promise_<[*LayerComp*](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/layercomp.md)>

Appends a Layer Comp to the document collection. Without `options`, the recorded state includes visibility only.

Note: The command fails for a flat document, meaning one that has a single Background layer and nothing else.

### Parameters

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `options` | [_LayerCompCreateOptions_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/objects/createoptions/layercompcreateoptions.md) | \{} | Optional object literal whose key/value pairs follow [LayerCompCreateOptions](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/objects/createoptions/layercompcreateoptions.md) |

Run in Photoshop with the intended document active.

```javascript
const options = {
  name: "mockup",
  comment: "First attempt",
  visibility: true,
  position: true
};
await require("photoshop").app.activeDocument.layerComps.add(options);
```
