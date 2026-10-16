# app.setScratchDiskPath()

app.setScratchDiskPath(path, scratchDiskType)

### Description

Assigns the path used for one of Premiere Pro's scratch disk locations.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| path | String | The new path to use. |
| scratchDiskType | ScratchDiskType enum | Use one of these enumerated values: - ScratchDiskType.FirstVideoCaptureFolder - ScratchDiskType.FirstAudioCaptureFolder - ScratchDiskType.FirstVideoPreviewFolder - ScratchDiskType.FirstAudioPreviewFolder - ScratchDiskType.FirstAutoSaveFolder - ScratchDiskType.FirstCCLibrariesFolder - ScratchDiskType.FirstCapsuleMediaFolder |

### Returns

On success, returns true.

### Example

```javascript
var scratchPath = Folder.selectDialog('Choose new scratch disk folder');
if (scratchPath && scratchPath.exists) {
    app.setScratchDiskPath(scratchPath.fsName, ScratchDiskType.FirstAutoSaveFolder);
}
```
