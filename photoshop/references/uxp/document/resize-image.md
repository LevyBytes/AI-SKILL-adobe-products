# resizeImage

23.0

**async** : _Promise_`<void>`

Scales image dimensions to reach the target pixel values.

```javascript
await document.resizeImage(800, 600);
```

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `width?` | _number_ | Target width (pixels). |
| `height?` | _number_ | Target height (pixels). |
| `resolution?` | _number_ | Resolution value, expressed as ppi. |
| `resampleMethod?` | [_ResampleMethod_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#resamplemethod) | Interpolation method used while resizing the image. |
| `amount?` | _number_ | Noise amount used with preserve details, from 0..100. |
