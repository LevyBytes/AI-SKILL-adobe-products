# warpStyle

• **warpStyle**: [_WarpStyle_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/warpstyle.md)

Holds properties for the Warp Text dialog.

| Name | Type | Access | Default | Min Version | Description |
| --- | --- | --- | --- | --- | --- |
| contents | _string_ | R W | - | 24.1 | Layer text content. |
| isParagraphText | _boolean_ | R | - | 24.1 | True when the Text Layer is a "Paragraph Text": bounded text whose characters flow horizontally or vertically inside those limits. |
| isPointText | _boolean_ | R | - | 24.1 | True for a Text Layer using "Point Text": the click location in the image establishes the start of a single horizontal or vertical text line. |
| orientation | [_Orientation_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#orientation) | R W | HORIZONTAL | 24.1 | Direction of text. |
| parent | [_Layer_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/classes/layer.md) | R | - | 24.1 | Layer that owns this TextItem. |
| textClickPoint | _object_ | R W | - | 24.1 | Text insertion point in the document, represented as an `\{x, y}` object with pixel coordinates. |
| typename | _string_ | R | - | 24.1 | Typename. |

### Methods
