# AVItem.pixelAspect

app.project.item(index).pixelAspect

### Description

The item's pixel aspect ratio (PAR).

- For a CompItem the result is tied to the composition itself.
- For a FootageItem it is tied to the mainSource object.

What you read back after assigning a value can differ a little from what you put in. In the table that follows, the value displayed in the UI is set beside the more precise value this attribute returns.

| PAR in the After Effects UI | PAR returned by the pixelAspect attribute |
| --- | --- |
| 0.91 | 0.909091 |
| 1 | 1 |
| 1.5 | 1.5 |
| 1.09 | 1.09402 |
| 1.21 | 1.21212 |
| 1.33 | 1.33333 |
| 1.46 | 1.45869 |
| 2 | 2 |

### Type

Floating-point value, in the range [0.01..100.0]; read/write.
