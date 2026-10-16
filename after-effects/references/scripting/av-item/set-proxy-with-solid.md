# AVItem.setProxyWithSolid()

app.project.item(index).setProxyWithSolid(color, name, width, height, pixelAspect)

### Description

Builds a SolidSource object from the supplied values, makes it the proxySource attribute, and sets useProxy to true. Here too the interpretation parameters come from the user preferences rather than being preserved.

Note

Assigning a solid as a proxy is not possible from the interface; this capability exists only via scripting.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| color | Array of three floating-point values, [R, G, B], in the range [0.0..1.0]. | The color of the solid. |
| name | String | The name of the new object. |
| width, height | Integer, in the range [1..30000] | The pixel dimensions of the placeholder. |
| pixelAspect | Floating-point value, in the range [0.01..100.0] | The pixel aspect ratio of the solid. |

### Returns

Nothing.
