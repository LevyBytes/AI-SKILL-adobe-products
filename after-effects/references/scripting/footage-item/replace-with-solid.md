# FootageItem.replaceWithSolid()

app.project.item(index).replaceWithSolid(color, name, width, height, pixelAspect)

### Description

Swaps this FootageItem's source over to the solid you specify. A new SolidSource object is created, its values are taken from the parameters, and mainSource is pointed at it.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| color | Array of three floating-point values, [R, G, B], in the range [0.0..1.0]. | The color of the solid. |
| name | String | The name of the solid. |
| width | Integer, in the range [4..30000] | The width of the solid in pixels. |
| height | Integer, in the range [4..30000] | The height of the solid in pixels. |
| pixelAspect | Floating-point value, in the range [0.01..100.0] | The pixel aspect ratio of the solid. |

## See also

- [Application](../application-object.md)
