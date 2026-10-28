# add

24.0

[_ColorSampler_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/colorsampler.md)

Creates a [ColorSampler](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/colorsampler.md) in the collection at pixel coordinates `{x, y}`.

```javascript
app.activeDocument.colorSamplers.add({ x: 20, y: 20 });
app.activeDocument.colorSamplers.length; // returns 1
```

### Parameters

| Name | Type |
| --- | --- |
| `position` | _object_ |
| `position.x` | _number_ |
| `position.y` | _number_ |
