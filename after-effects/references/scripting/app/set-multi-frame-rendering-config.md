# app.setMultiFrameRenderingConfig()

app.setMultiFrameRenderingConfig(mfr_on, max_cpu_perc)

Note

This functionality was added in After Effects 22.0 (2022)

### Description

Invoke this from a script and you set the Multi-Frame Rendering configuration that the next render will use. Once the script finishes running, those settings revert to whatever the UI had before.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| mfr_on | Boolean | Set to true to enable Multi-Frame Rendering. |
| max_cpu_perc | Floating-point value, in the range [1..100] | The maximum CPU percentage Multi-Frame Rendering should utilize. If mfr_on is set to false, pass in 100. |

### Returns

Nothing.
