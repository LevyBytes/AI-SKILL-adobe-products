# convertProfile

23.0

**async** : _Promise_`<void>`

Updates the color profile.

`destinationProfile` accepts either a string naming a color mode,
or one of the following working color-space or Lab values.

`"Working RGB", "Working CMYK", "Working Gray", "Lab Color"`

### Parameters

| Name | Type |
| --- | --- |
| `destinationProfile` | _string_ |
| `intent` | [_Intent_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#intent) |
| `blackPointCompensation?` | _boolean_ |
| `dither?` | _boolean_ |
