# FootageItem.replaceWithPlaceholder()

app.project.item(index).replaceWithPlaceholder(name, width, height, frameRate, duration)

### Description

Swaps this FootageItem's source over to the placeholder you specify. A new PlaceholderSource object is created, its values are taken from the parameters, and mainSource is pointed at it.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | The name of the placeholder. |
| width | Integer, in the range [4..30000] | The width of the placeholder in pixels. |
| height | Integer, in the range [4..30000] | The height of the placeholder in pixels. |
| frameRate | Floating-point value, in the range [1.0..99.0] | The frame rate of the placeholder. |
| duration | Floating-point value, in the range [0.0..10800.0] | The duration of the placeholder in seconds. |
