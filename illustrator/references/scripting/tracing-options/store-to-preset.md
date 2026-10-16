# TracingOptions.storeToPreset()

image.tracing.tracingOptions.storeToPreset(parameter)

### Description

Stores this option set in the specified preset.

To overwrite, pass an Application.tracingPresetList name; to create one, pass a new name.

For an existing preset, the call overwrites an unlocked preset and returns true.

A locked preset makes the method return false.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| presetName | String | Preset name to save as |

### Returns

Boolean
