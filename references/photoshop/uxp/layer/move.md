# move

23.0

_void_

Moves the layer relative to the layer passed in the parameters.
"placeAfter" positions the layer below relativeObject.
"placeBefore" positions the layer above relativeObject.
"placeInside" uses relativeObject as a group container.
`ElementPlacement.PLACEINSIDE` is only valid when `relativeObject.kind === LayerKind.group`

### Parameters

| Name | Type |
| --- | --- |
| `relativeObject` | [_Layer_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/layer.md) |
| `insertLocation` | [_ElementPlacement_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#elementplacement) |
