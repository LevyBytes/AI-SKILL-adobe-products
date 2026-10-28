# createLayer

23.0

**async** : _Promise_<[*Layer*](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/layer.md)>

This is the general entry point for the kind-specific methods below; those methods provide additional detail.

Creates a layer of the requested kind. With no arguments, a pixel layer is created.
The options object carries properties tied to that kind,
although every layer also uses a shared base property set.
The override signatures below act as type guardrails so
the supplied options match the requested kind.

```javascript
await doc.createLayer(); // defaults to pixel layer

await doc.createLayer(
  constants.LayerKind.NORMAL, // pixel layer
  { name: "myLayer", opacity: 80, blendMode: constants.BlendMode.COLORDODGE },
);
```

_Promise_<[*Layer*](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/layer.md)>

### Parameters

| Name | Type |
| --- | --- |
| `kind?` | [_LayerKind.NORMAL_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#layerkind) |
| `options?` | [_PixelLayerCreateOptions_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/objects/createoptions/pixellayercreateoptions.md) |

**async** : _Promise_<[*Layer*](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/layer.md)>

Builds a group layer.

```javascript
await doc.createLayer(constants.LayerKind.GROUP, { name: "myLayer", opacity: 80 });
```

### Parameters

| Name | Type |
| --- | --- |
| `kind` | [_LayerKind.GROUP_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#layerkind) |
| `options?` | [_GroupLayerCreateOptions_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/objects/createoptions/grouplayercreateoptions.md) |

**async** : _Promise_<[*Layer*](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/layer.md)>

Builds text content as a layer.

```javascript
await doc.createLayer(Constants.LayerKind.TEXT, { name: "message", contents: "Hello World" });
```

### Parameters

| Name | Type |
| --- | --- |
| `kind` | [_LayerKind.TEXT_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#layerkind) |
| `options?` | [_TextLayerCreateOptions_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/objects/createoptions/textlayercreateoptions.md) |
