# Project.setScratchDiskPath()

app.project.setScratchDiskPath(newPath, whichScratchDiskPath)

### Description

Updates a selected scratch disk path to point at newPath.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| newPath | String | New path. |
| scratchDiskType | ScratchDiskType enum | One of: - ScratchDiskType.FirstVideoCaptureFolder - ScratchDiskType.FirstAudioCaptureFolder - ScratchDiskType.FirstVideoPreviewFolder - ScratchDiskType.FirstAudioPreviewFolder - ScratchDiskType.FirstAutoSaveFolder - ScratchDiskType.FirstCCLibrariesFolder - ScratchDiskType.FirstCapsuleMediaFolder - ScratchDiskType.FirstAudioCaptureFolder - ScratchDiskType.FirstVideoPreviewFolder - ScratchDiskType.FirstAudioPreviewFolder - ScratchDiskType.FirstAutoSaveFolder - ScratchDiskType.FirstCCLibrariesFolder - ScratchDiskType.FirstCapsuleMediaFolder |

### Returns

Returns 0 if unsuccessful.
