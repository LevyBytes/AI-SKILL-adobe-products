# Migration Checklist

- [ ] Replace endpoint `https://image.adobe.io/pie/psdService/smartObject` with `https://photoshop-api.adobe.io/v2/create-composite`
- [ ] Move `inputs[0].href` into `image.source.url`
- [ ] Drop `storage` fields (presigned URLs do not need them)
- [ ] Add `"type": "smart_object_layer"` to every layer entry
- [ ] For add operations: map `add.insertTop/Bottom/Above/Below` to `operation.type: "add"` plus `placement`
- [ ] For replace operations: include `operation.type: "edit"` (V2 requires it; replacement is not implicit)
- [ ] Move `input.href` into `smartObject.smartObjectFile.source.url`
- [ ] Change `outputs[0].href` into `outputs[0].destination.url`
- [ ] Change `outputs[0].type` into `outputs[0].mediaType: "image/vnd.adobe.photoshop"`
