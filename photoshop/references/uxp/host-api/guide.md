# Guide

Represents one guide in the document.

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| coordinate | _number_ | R W | 23.0 | Coordinate in pixels from the ruler origin. Decimal values are allowed. Note: moving the ruler origin changes stored guide positions. **_Fixes in Photoshop 24.0:_** - _Resolves non-72 PPI coordinate values_ |
| direction | [_Direction_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#direction) | R W | 23.0 | Guide orientation: vertical or horizontal. |
| docId | _number_ | R | 23.0 | Document ID for this guide. |
| id | _number_ | R | 23.0 | For batchPlay operations, this guide ID plus its document ID can identify the guide while the document or guide remains alive. |
| parent | [_Document_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/document.md) | R | 23.0 | Document that owns this guide. |
| typename | _string_ | R | 23.0 | Referenced object class name: _"Guide"_. |

### Methods
