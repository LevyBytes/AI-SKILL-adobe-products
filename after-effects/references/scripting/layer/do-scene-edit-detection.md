# Layer.doSceneEditDetection()

app.project.item(index).layer(index).doSceneEditDetection(applyOptions)

Note

This functionality was added in After Effects 22.3 (2022)

### Description

Carries out Scene Edit Detection on whichever layer the method is invoked on and gives back an array listing the times of every scene it found. It mirrors picking a layer in the Timeline and choosing "Layer > Scene Edit Detection", where the lone argument decides whether those edits become markers, layer splits, or pre-comps, or stay off the layer entirely.

As happens in the UI, doSceneEditDetection raises an error when run on a non-video layer or on a video layer that has Time Remapping switched on.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| applyOptions | SceneEditDetectionMode enum | How the detected edits will be applied. One of: - SceneEditDetectionMode.MARKERS: Create markers at edit points. - SceneEditDetectionMode.SPLIT: Split layer. - SceneEditDetectionMode.`SPLIT_PRECOMP`: Split layer at edit points and pre-compose each one. - SceneEditDetectionMode.NONE: Detected edits are not applied to the layer. |

### Returns

Array of floating-point values; the times of the detected edit points expressed in composition time.
