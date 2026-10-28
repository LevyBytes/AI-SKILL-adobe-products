# Project.importPlaceholder()

app.project.importPlaceholder(name, width, height, frameRate, duration)

### Description

Builds a new PlaceholderItem, appends it to the project's items array, and returns it — the same as the File > Import > Placeholder command.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | The name of the placeholder. |
| width | Integer, in the range [4..30000] | The width of the placeholder in pixels. |
| height | Integer, in the range [4..30000] | The height of the placeholder in pixels. |
| frameRate | Floating-point value, in the range [1.0..99.0] | The frame rate of the placeholder. |
| duration | Floating-point value, in the range [0.0..10800.0] | The duration of the placeholder in seconds. |

### Returns

PlaceholderItem object.
