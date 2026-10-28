# Sequence.performSceneEditDetectionOnSelection()

app.project.sequences[index].performSceneEditDetectionOnSelection(actionDesired, applyCutsToLinkedAudio, sensitivity)

### Description

Runs cut detection on the selected sequence content.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| actionDesired | String | One of: - CreateMarkers - ApplyCuts |
| applyCutsToLinkedAudio | Boolean | Whether detected cuts also affect audio linked to the selection. |
| sensitivity | String | One of: - LowSensitivity - MediumSensitivity - HighSensitivity |

### Returns

Returns a boolean; true on success.
