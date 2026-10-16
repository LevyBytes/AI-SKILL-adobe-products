# ItemCollection.addComp()

app.project.items.addComp(name, width, height, pixelAspect, duration, frameRate)

### Description

Builds a fresh CompItem object, adds it to this collection, and returns it.

When the ItemCollection is the project's or the root folder's, the new item's parentFolder becomes the root folder.

When the ItemCollection belongs to some other folder, the new item's parentFolder is set to that FolderItem.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | The name of the composition. |
| width | Integer, in the range [4..30000] | The width of the composition in pixels. |
| height | Integer, in the range [4..30000] | The height of the composition in pixels. |
| pixelAspect | Floating-point value, in the range [0.01..100.0] | The pixel aspect ratio of the composition. |
| duration | Floating-point value, in the range [0.0..10800.0] | The duration of the composition in seconds. |
| frameRate | Floating-point value, in the range [1.0..99.0] | The frame rate of the composition. |

### Returns

CompItem object
