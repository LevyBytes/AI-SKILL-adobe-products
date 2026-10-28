# sampleColor

24.0

**async** : _Promise_<[_SolidColor_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/solidcolor.md) \| [_NoColor_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/colors/nocolor.md)>

Samples the document at the supplied position and returns a SolidColor object.

```javascript
let col = await app.activeDocument.sampleColor({ x: 100, y: 100 });
console.log(col.rgb);
// {
//    red: 233,
//    green: 179,
//    blue: 135,
//    hexValue: "E9B387"
// }
```

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `position` | _object_ | Point to sample, `{x: number, y: number}`. |
| `position.x` | _number_ | X coordinate (pixels). |
| `position.y` | _number_ | Y coordinate (pixels). |
