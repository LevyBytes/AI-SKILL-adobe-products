# convertUnits

23.4

_number_

Converts one numeric measurement from the source unit into a target unit. Valid unit constants are:
Constants.Units.\{CM, MM, INCHES, PIXELS, POINTS, PICAS}.
When either side of the conversion uses PIXELS, pass [Document.resolution](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/document.md#resolution).
For example, call this routine to express a document width in inches when it is currently measured in pixels.

```javascript
// convert the current document's width to inches
const exportDoc = psApp.activeDocument;
let widthInInches = psApp.convertUnits(
  exportDoc.width,
  Constants.Units.PIXELS,
  Constant.Units.INCHES,
  exportDoc.resolution,
);
```

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `fromValue` | _number_ | Numeric value to convert. |
| `fromUnits` | [_Units_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#units) | Unit currently used by fromValue; choose from [Constants.Units](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#units). |
| `toUnits` | [_Units_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#units) | Unit assigned to the returned value; choose from [Constants.Units](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#units). |
| `resolution?` | _number_ | Pixels-per-inch value used for conversions involving pixel values. |
