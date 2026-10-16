# add

23.0

[_Guide_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/guide.md)

Adds a guide to the collection at the supplied coordinate and direction.

**_Fixes in Photoshop 24.0:_**

- _Corrects coordinate when resolution is not 72 PPI_
- _Returns a valid guide instance_

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `direction` | [_Direction_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#direction) | Vertical or horizontal orientation for the guide. |
| `coordinate` | _number_ | Coordinate in pixels from the ruler origin. Decimal values are allowed. Note: moving the ruler origin changes stored guide positions. |
