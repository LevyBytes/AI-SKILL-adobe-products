# LayerCollection.addSolid()

app.project.item(index).layers.addSolid(color, name, width, height, pixelAspect[, duration])

### Description

Builds a new SolidSource object using the values you provide, assigns that SolidSource as the mainSource of a brand-new FootageItem object, and registers the FootageItem with the project. It then constructs an AVLayer, points its source at the freshly made Footage Item, and appends that layer to this collection.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| color | Array of three floating-point values | The color of the solid. Three numbers, [R, G, B], in the range [0.0..1.0] |
| name | String | The name of the solid. |
| width | Integer | The width of the solid in pixels, in the range [4..30000] |
| height | Integer | The height of the solid in pixels, in the range [4..30000] |
| pixelAspect | Floating-point value | The pixel aspect ratio of the solid, in the range [0.01..100.0] |
| duration | Floating-point value | Optional. Expressed in seconds, this is how long a still layer lasts. Supply it and the new layer's duration takes that value; omit it and the duration defaults to the user's preference setting. By default that equals the duration of the CompItem containing the layer. For a different default, open Edit > Preferences > Import (Windows) or After Effects > Preferences > Import (MacOS) and set choices under Still Footage. |

### Returns

AVLayer object.
