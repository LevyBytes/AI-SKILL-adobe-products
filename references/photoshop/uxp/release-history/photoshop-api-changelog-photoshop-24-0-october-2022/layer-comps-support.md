# Layer Comps support

- [Document.layerComps](../../document/document-properties.md) was added, giving layer comp workflows APIs similar to ExtendScript.
- [LayerComps collection](../../host-api/layer-comps/reference-index.md)
  - Methods added for Layer Comp: `add()`, `removeAll()`, `getByName()`
  - Use [`LayerComps.add()`](../../host-api/layer-comps/add.md) to create layer comps in the document. Their constructors are available on the [app](../../host-api/objects/app.md) object.
- [LayerComp class](../../host-api/layer-comp/reference-index.md)
  - Properties added for Layer Comp: `name`, `comment`, `selected`, `appearance`, `position`, `visibility`, `childComp`.
  - Methods added for Layer Comp: `apply()`, `recapture()`, `remove()`, `resetLayerComp()`, `duplicate()`
