# AVItem.setProxyWithPlaceholder()

app.project.item(index).setProxyWithPlaceholder(name, width, height ,frameRate, duration)

### Description

Builds a PlaceholderSource object from the supplied values, makes it the proxySource attribute, and sets useProxy to true. As with the other proxy calls, the interpretation parameters are taken from the user preferences rather than preserved.

Note

The interface offers no direct command for assigning a placeholder as a proxy; you only see this state when an existing proxy is later relocated or removed.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | The name of the new object. |
| width | Integer, in the range [4..30000] | The pixel dimensions of the placeholder. |
| height | Integer, in the range [4..30000] | The pixel dimensions of the placeholder. |
| frameRate | Integer, in the range [1..99] | Frame rate for the proxy. |
| duration | Integer, in the range [0.0..10800.0] | The total length in seconds, up to 3 hours. |

### Returns

Nothing.
