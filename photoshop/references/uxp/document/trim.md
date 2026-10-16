# trim

23.0

**async** : _Promise_`<void>`

Removes surrounding image area according to the supplied pixel type.
By default, every image side is included.
Individual sides can optionally be excluded.

```javascript
//  trim transparent pixels from only the bottom of the image
app.activeDocument.trim(constants.TrimType.TRANSPARENT, false, false, true, false);
```

### Parameters

| Name | Type | Default value | Description |
| --- | --- | --- | --- |
| `trimType` | [_TrimType_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#trimtype) | - | Uses the top left pixel color by default; |
| `top` | _boolean_ | true |  |
| `left` | _boolean_ | true |  |
| `bottom` | _boolean_ | true |  |
| `right` | _boolean_ | true |  |
