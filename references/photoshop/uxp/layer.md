# Layer

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

A document object that holds image visual content, matching the Photoshop layer concept.

Access a document's layers from the [Document.layers](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/document.md#layers) collection.

For group layers, read children through [Layer.layers](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/layer.md#layers).

```javascript
group.layers.forEach((layer) => {
  layer.visible = true;
});
```

## Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| allLocked | _boolean_ | R W | 22.5 | A true value blocks edits to this layer's pixels and properties. |
| blendMode | [_BlendMode_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#blendmode) | R W | 22.5 | Layer blend mode. **_Fixes in Photoshop 24.2:_** - _Passing a blend mode that does not exist now throws an error_ - _An impossible combination of document color mode, bit depth, and blend mode also throws instead of failing silently_ - _Before this version, setting blend mode on a background layer could convert it to a regular layer as a side effect and change its ID. Now an error is thrown because those side effects are not expected_ |
| bounds | [_Bounds_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/objects/bounds.md) | R | 22.5 | Layer bounds with effects included. |
| boundsNoEffects | [_Bounds_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/objects/bounds.md) | R | 22.5 | Layer bounds without effects. |
| document | [_Document_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/document.md) | R | 23.0 | Document containing this layer. |
| fillOpacity | _number_ | R W | 23.0 | Layer fill opacity, as a percentage. |
| filterMaskDensity | _number_ | R W | 23.0 | Filter-mask density, as a percentage. |
| filterMaskFeather | _number_ | R W | 23.0 | Filter-mask feather value from 0.0 to 1000.0. |
| id | _number_ | R | 22.5 | Layer ID usable in batchPlay calls. |
| isBackgroundLayer | _boolean_ | R | 22.5 | True for the special Background layer. |
| isClippingMask | _boolean_ | R W | 23.0 | Whether this layer acts as a clipping mask; releasing it also releases layers stacked above it. |
| kind | [_LayerKind_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#layerkind) | R | 22.5 | Layer kind. |
| layerMaskDensity | _number_ | R W | 23.0 | Layer-mask density, as a percentage. |
| layerMaskFeather | _number_ | R W | 23.0 | Layer-mask feather value from 0.0 to 1000.0. |
| layers | [_Layers_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/layers.md) | R | 23.0 | Child layers contained in the group. |
| linkedLayers | [_Layers_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/layers.md) | R | 22.5 | Linked layer collection. See [Layer.link](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/layer.md#link) |
| locked | _boolean_ | R | 22.5 | True when at least one layer property is locked. |
| name | _string_ | R W | 22.5 | Layer name. |
| opacity | _number_ | R W | 22.5 | Master layer opacity, in percent. |
| parent | [_Layer_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/layer.md) | R | 22.5 | Group layer containing this layer. Returns null when the layer sits at the document's top level. |
| pixelsLocked | _boolean_ | R W | 22.5 | When true, pixel edits on this layer are blocked. |
| positionLocked | _boolean_ | R W | 22.5 | When true, the layer cannot be moved. |
| textItem | [_TextItem_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/textitem.md) | R | 24.2 | Text-related properties and methods for Layers whose `kind` equals `LayerKind.TEXT` |
| transparentPixelsLocked | _boolean_ | R W | 22.5 | When true, transparent pixels cannot be edited |
| typename | _string_ | R | 23.0 | Referenced object class name: _"Layer"_. |
| vectorMaskDensity | _number_ | R W | 23.0 | Vector-mask density, as a percentage. |
| vectorMaskFeather | _number_ | R W | 23.0 | Vector-mask feather value from 0.0 to 1000.0. |
| visible | _boolean_ | R W | 22.5 | True if displayed. |

## Methods
