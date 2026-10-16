# generativeUpscale

27.2

**async** : _Promise_<[*Document*](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/document.md)>

Runs AI-powered generative upscaling on the currently selected layer(s).

```javascript
// Upscale using Firefly model with default options (2x scale)
await document.generativeUpscale(constants.GenerativeUpscaleModel.FIREFLY);

// Upscale using Firefly model with 4x scale
const doc4x = await document.generativeUpscale(constants.GenerativeUpscaleModel.FIREFLY, {
  scale: 4,
});
```

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `model` | [_GenerativeUpscaleModel.FIREFLY_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#generativeupscalemodel) | Generative upscale model to apply. |
| `options?` | [_GenerativeUpscaleOptions_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/objects/generativeoptions/generativeupscaleoptions.md) | Model-specific options, such as `scale`. |
