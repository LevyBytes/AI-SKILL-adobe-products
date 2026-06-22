# Methods (part 2)

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Project object — Methods

### Project.addPropertyToProjectMetadataSchema()

app.project.addPropertyToProjectMetadataSchema(propertyName, propertyLabel, propertyType)

### Description

Creates a field in Premiere Pro's private project metadata schema, using propertyType for its type.

### Parameters

Parameter

Type

Description

propertyName

String

Name of the property to add.

propertyLabel

String

Label for the property to add.

propertyType

Integer

Must be one of these values: - 0 - Integer - 1 - Real - 2 - String - 3 - Boolean

| --- | --- | --- |

### Returns

Returns true on success, undefined on failure.

### Project.closeDocument()

app.project.closeDocument(saveFirst, promptIfDirty)

### Description

Closes the current project document.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| saveFirst | Integer | When 1, saves the project before closing. |
| promptIfDirty | Integer | When 1, prompts the user about saving unsaved changes before closing. |

### Returns

Returns 0 on success.

### Project.consolidateDuplicates()

app.project.consolidateDuplicates()

### Description

Runs Premiere Pro's UI-available "Consolidate Duplicate Footage" functionality.

### Parameters

None.

### Returns

Returns 0 on success.

### Project.createNewSequence()

app.project.createNewSequence(sequenceName, sequenceID)

### Description

Builds a Sequence object for sequenceID.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| sequenceName | String | Sequence name. |
| sequenceID | String | Unique ID for the new sequence. |

### Returns

Returns a Sequence object if creation succeeds; otherwise returns 0.

### Project.createNewSequenceFromClips()

app.project.createNewSequenceFromClips(sequenceName, arrayOfProjectItems, [destinationBin])

### Description

Builds a Sequence named sequenceName in destinationBin and inserts the project items in order.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| sequenceName | String | Optional. Name for the new sequence. |
| arrayOfProjectItems | Array of ProjectItem objects | Array of project items to insert into the sequence. |
| destinationBin | ProjectItem object | Optional. Bin that will contain the sequence. |

### Returns

Returns the newly created Sequence object on success; returns 0 on failure.

### Project.deleteSequence()

app.project.deleteSequence(sequence)

### Description

Removes the supplied Sequence object from the project.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| sequence | Sequence object | Sequence targeted for deletion. |

### Returns

Returns true on success and false on failure.

### Project.exportAAF()

app.project.exportAAF(sequenceToExport, outputPath, mixdownVideo, explodeToMono, sampleRate, bitsPerSample, embedAudio, audioFileFormat, trimSources, handleFrames, presetPath, renderAudioEffects, includeClipCopies, preserveParentFolder)

### Description

Exports an AAF file for the specified Sequence object with the specified settings.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| sequenceToExport | Sequence object | Sequence to export. |
| outputPath | String | Output path for the .aaf file. |
| mixdownVideo | Integer | When 1, renders video before export. |
| explodeToMono | Integer | When 1, splits stereo tracks into mono. |
| sampleRate | Integer | Output audio sample rate. |
| bitsPerSample | Integer | Bits per sample for audio output. |
| embedAudio | Integer | When 1, embeds audio; when 0, keeps it external. |
| audioFileFormat | Integer | Use 0 for AIFF; use 1 for WAV. |
| trimSources | Integer | When 1, trims and re-encodes media before export; 0 exports the whole file. |
| handleFrames | Integer | Handle frame count (from 0 to 1000). |
| presetPath | String | Path to export preset (.epr) file. |
| renderAudioEffects | Integer | When 1, renders audio effects before export. |
| includeClipCopies | Integer | When 1, includes each copy of a clip. |
| preserveParentFolder | Integer | When 1, keeps the parent folder in the output. |

### Returns

Returns 0 on success.

### Project.exportFinalCutProXML()

app.project.exportFinalCutProXML(outputPath, suppressUI)

### Description

Writes the whole project as FCP XML at outputPath.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| outputPath | String | Output path for the .xml file. |
| suppressUI | Integer | When 1, warnings and alerts are not shown during export. |

### Returns

Returns 0 on success.

### Project.exportOMF()

app.project.exportOMF(sequence, outputPath, omfTitle, sampleRate, bitsPerSample, audioEncapsulated, audioFileFormat, trimAudioFiles, handleFrames, includePan)

### Description

Writes an OMF file for sequence using the provided export settings.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| sequence | Sequence object | Sequence to output. |
| filePath | String | Output path for the .omf file. |
| omfTitle | String | OMF title. |
| sampleRate |  | Output audio sample rate. |
| bitsPerSample |  | Bits per sample for audio output. |
| audioEncapsulated | Integer | When 1, embeds audio; when 0, keeps it external. |
| audioFileFormat | Integer | Use 0 for AIFF; use 1 for WAV. |
| trimAudioFiles | Integer | 1 enables audio trimming. |
| handleFrames | Integer | Number of handle frames (from 0 to 1000). |
| includePan | Integer | Use 1 to include pan info; use 0 to omit it. |

### Returns

Returns 0 on success.

### Project.exportTimeline()

app.project.exportTimeline(exportControllerName)

### Description

Uses the named Export Controller plug-in to export the currently active Sequence object.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| exportControllerName | String | Export Controller plug-in name. For the Premiere Pro SDK example Export Controller, use "SDK Export Controller". |

### Returns

Returns 0 on success; otherwise returns an error code.

### Project.getGraphicsWhiteLuminance()

app.project.getGraphicsWhiteLuminance()

### Description

Gets this project's current graphics white luminance value.

### Parameters

None.

### Returns

Returns the graphics white value currently selected.

### Project.getInsertionBin()

app.project.getInsertionBin()

### Description

Returns a ProjectItem object for the bin that imports will target.

### Parameters

None.

### Returns

On success, returns a ProjectItem object; otherwise 0.

### Project.getProjectPanelMetadata()

app.project.getProjectPanelMetadata()

### Description

Returns the current Project panel layout.

### Parameters

None.

### Returns

Returns a String describing the current Project panel layout, or 0 on failure.

### Project.getSharedLocation()

app.project.getSharedLocation()

### Description

Returns the path to the destination where shared files should be copied.

### Parameters

None.

### Returns

Returns the path as a String.

### Project.getSupportedGraphicsWhiteLuminances()

app.project.getSupportedGraphicsWhiteLuminances()

### Description

Gets the graphics white luminance values supported by this project.

### Parameters

None.

### Returns

The return value is an array of supported graphics white settings. Current values are (100, 203, 300)

### Project.importAEComps()

app.project.importAEComps(path, compNames, [targetBin])

### Description

Imports named Compositions from the containing After Effects .aep project file. A target bin in the containing project may be specified; otherwise, the Compositions appear in this project's most recently targeted bin.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| path | String | Path to the After Effects .aep project file. |
| compNames | Array of strings | Composition names within the specified project to import. |
| targetBin | ProjectItem object | Optional. Bin that receives this import. |

### Returns

Returns 0 on success.

### Project.importAllAEComps()

app.project.importAllAEComps(path, [targetBin])

### Description

Imports named Compositions from the containing After Effects .aep project file. A target bin in the containing project may be specified; otherwise, the Compositions appear in this project's most recently targeted bin.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| path | String | Path to After Effects .aep project file. |
| targetBin | ProjectItem object | Optional. Bin that receives this import. |

### Returns

Returns 0 on success.

### Project.importFiles()

app.project.importFiles(filePaths, suppressUI, targetBin, importAsNumberedStills)

### Description

Imports media from the specified file paths.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| filePaths | Array of strings | File path array for import. |
| suppressUI | Boolean | Controls suppression of warning dialogs. |
| targetBin | ProjectItem object | Destination bin for imported files. |
| importAsNumberedStills | Boolean | Controls interpretation as a numbered-stills sequence. |

### Returns

Returns true on success and false otherwise.

### Project.importSequences()

app.project.importSequences(path, sequenceIDs)

### Description

Imports sequence objects whose sequenceIDs are specified, using the specified project as the source and the current project as the destination.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| path | String | Path to a project file. |
| sequenceIDs | Array | Sequence ID array for import. |

### Returns

Returns 0 on success.

### Project.isSharedLocationCopyEnabled()

app.project.isSharedLocationCopyEnabled()

### Description

Checks this project's shared-location copying state.

### Parameters

None.

### Returns

Returns true when copying is enabled; otherwise false.

### Project.newBarsAndTone()

app.project.newBarsAndTone(width, height, timeBase, PARNum, PARDen, audioSampleRate, name)

### Description

Builds a new Sequence object named by name using the preset (.sqpreset file) identified by the path.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| width | Integer |  |
| height | Integer |  |
| timeBase |  | Timebase for the new project item. |
| PARNum | Integer | Numerator for pixel aspect ration. |
| PARDen | Integer | Denominator for pixel aspect ration. |
| audioSampleRate |  | Audio sample rate. |
| name | String | Name assigned to the new project item. |

### Returns

On success, returns a ProjectItem object for the new bars and tone; otherwise returns 0.

### Project.newSequence()

app.project.newSequence(name, pathToSequencePreset)

### Description

Builds a new Sequence object named by name using the preset (.sqpreset file) identified by the path.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | Name for the new sequence. |
| pathToSequencePreset | String | Preset .sqpreset file path. |

### Returns

On success, returns a Sequence object; otherwise returns 0.

### Project.openSequence()

app.project.openSequence(sequence.sequenceID)

### Description

Activates the Sequence object identified by the provided sequence ID and opens it in the Timeline panel.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| sequenceID | Sequence.sequenceID | Valid sequence ID to open. |

### Returns

Returns true on success and false otherwise.

### Project.pauseGrowing()

app.project.pauseGrowing(pause)

### Description

Toggles pause state for growing file capture.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| pause | Integer | Use 1 to enable growing files. |

### Returns

Returns 0 on success.

### Project.save()

app.project.save()

### Description

Writes the project to the path it already uses.

### Parameters

None.

### Returns

Returns 0 on success.

### Project.saveAs()

app.project.saveAs(path)

### Description

Saves the active project under a unique path, opens that copy, and closes the previously open identical project.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| path | String | New file path. |

### Returns

Returns 0 on success; otherwise returns an error code.

### Project.setEnableTranscodeOnIngest()

app.project.setEnableTranscodeOnIngest(state)

### Description

Controls whether transcode-upon-ingest behavior is enabled for the given project.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| state | Boolean | Desired state. |

### Returns

Returns true on success.

### Project.setGraphicsWhiteLuminance()

app.project.setGraphicsWhiteLuminance(value)

### Description

Sets this project's current graphics white luminance value.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| value | Integer | Integer value; it must come from Project.getSupportedGraphicsWhiteLuminances(). |

### Returns

Returns true on success.

### Project.setProjectPanelMetadata()

app.project.setProjectPanelMetadata(layout)

### Description

Returns the current Project panel layout.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| layout | String | Project panel layout to apply. Note: To obtain a known-valid layout string, arrange the Project panel first, then call Project.getProjectPanelMetadata(). |

### Returns

Returns 0 on failure.

### Project.setScratchDiskPath()

app.project.setScratchDiskPath(newPath, whichScratchDiskPath)

### Description

Updates a selected scratch disk path to point at newPath.

### Parameters

Parameter

Type

Description

newPath

String

New path.

scratchDiskType

ScratchDiskType enum

One of: - ScratchDiskType.FirstVideoCaptureFolder - ScratchDiskType.FirstAudioCaptureFolder - ScratchDiskType.FirstVideoPreviewFolder - ScratchDiskType.FirstAudioPreviewFolder - ScratchDiskType.FirstAutoSaveFolder - ScratchDiskType.FirstCCLibrariesFolder - ScratchDiskType.FirstCapsuleMediaFolder - ScratchDiskType.FirstAudioCaptureFolder - ScratchDiskType.FirstVideoPreviewFolder - ScratchDiskType.FirstAudioPreviewFolder - ScratchDiskType.FirstAutoSaveFolder - ScratchDiskType.FirstCCLibrariesFolder - ScratchDiskType.FirstCapsuleMediaFolder

| --- | --- | --- |

### Returns

Returns 0 if unsuccessful.

## SourceMonitor object — Methods

### SourceMonitor.closeAllClips()

app.sourceMonitor.closeAllClips()

### Description

Closes every clip loaded in the Source monitor.

### Parameters

None.

### Returns

0 indicates success.

### SourceMonitor.closeClip()

app.sourceMonitor.closeClip()

### Description

Closes the clip currently at the front of the Source monitor.

### Parameters

None.

### Returns

0 indicates success.

### SourceMonitor.getPosition()

app.sourceMonitor.getPosition()

### Description

Reads the Source monitor's current time indicator position.

### Parameters

None.

### Returns

A Time object containing the Source monitor current-time-indicator position.

### SourceMonitor.getProjectItem()

app.sourceMonitor.getProjectItem()

### Description

Gets the project item for the media currently open in the Source monitor.

### Parameters

None.

### Returns

projectItem on success; null otherwise.

### SourceMonitor.openFilePath()

app.sourceMonitor.openFilePath(path)

### Description

Opens a file in the Source monitor.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| path | String | File path to open. |

### Returns

true indicates success.

### SourceMonitor.openProjectItem()

app.sourceMonitor.openProjectItem(projectItem)

### Description

Loads a project item into the Source monitor.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| projectItem | ProjectItem object | ProjectItem object to load. |

### Returns

0 indicates success.

### SourceMonitor.play()

app.sourceMonitor.play(playbackSpeed)

### Description

Starts Source monitor playback using the specified playback speed.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| playbackSpeed | Float | Playback speed value. |

### Returns

0 indicates success.

## ProjectItem object — Methods

### ProjectItem.attachProxy()

app.project.rootItem.children[index].attachProxy(mediaPath, isHiRes)

### Description

Connects media at newMediaPath to the project item as either high-resolution media or proxy media.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| mediaPath | String | Path for the newly assigned media. |
| isHiRes | Integer | Attach as proxy media with 0, or high resolution media with 1. |

### Returns

0 indicates success.

### ProjectItem.canChangeMediaPath()

app.project.rootItem.children[index].canChangeMediaPath()

### Description

Returns true when Premiere Pro can update the media path associated with this project item; otherwise it returns false.

### Parameters

None.

### Returns

Boolean; true means the media can be replaced, and false means it cannot.

### ProjectItem.canProxy()

app.project.rootItem.children[index].canProxy()

### Description

Indicates whether a proxy can be attached to this project item.

### Parameters

None.

### Returns

true when the project item allows proxy attachment; false otherwise.

### ProjectItem.changeMediaPath()

app.project.rootItem.children[index].changeMediaPath(newPath)

### Description

Redirects the project item to a different media path.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| newPath | String | Replacement path for the media file. |
| overrideChecks | Boolean | Bypass safety checks. |

### Returns

0 means the replacement succeeded.

### ProjectItem.clearInPoint()

app.project.rootItem.children[index].clearInPoint()

### Description

Removes the assigned in point, so the project item begins at startTime.

### Parameters

None

### Returns

0 indicates success.

### ProjectItem.clearOutPoint()

app.project.rootItem.children[index].clearOutPoint()

### Description

Removes the assigned out point, so the project item begins at startTime.

### Parameters

None

### Returns

0 indicates success.

### ProjectItem.createBin()

app.project.rootItem.children[index].createBin(name)

### Description

Adds an empty bin beneath the item; valid only when the item is a bin.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | Name for the new bin. |

### Returns

Project item for the new bin when successful, or 0 when creation fails.

### ProjectItem.createSmartBin()

app.project.rootItem.children[index].createSmartBin(name, queryString)

### Description

Creates a search bin, limited to bin project items.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | Name for the new bin. |
| queryString | String | Search query string. |

### Returns

projectItem for the newly created bin when successful.

### ProjectItem.createSubClip()

app.project.rootItem.children[index].createSubClip(name, startTime, endTime, hasHardBoundaries, takeAudio, takeVideo)

### Description

Builds a project item from a subclip taken from the current item.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | Name for the new subclip. |
| startTime | String | Subclip start time, in ticks. |
| endTime | String | Subclip end time, in ticks. |
| hasHardBoundaries | Integer | 1 prevents the user from extending in and out. |
| takeVideo | Integer | 1 uses video from the source. |
| takeAudio | Integer | 1 uses audio from the source. |

### Returns

Project item for the new subclip, or 0 if creation fails.

### ProjectItem.deleteBin()

app.project.rootItem.children[index].deleteBin()

### Description

Removes a bin and its full contents from the project.

### Parameters

None.

### Returns

0 means deletion succeeded.

### ProjectItem.findItemsMatchingMediaPath()

app.project.rootItem.children[index].findItemsMatchingMediaPath(pathToMatch, ignoreSubClips)

### Description

Returns project items that all reference the same media path.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| pathToMatch | String | Path value to match. |
| ignoreSubClips | Integer | 1 prevents subclips from being returned. |

### Returns

Array of project items, or 0 when no project items matching matchPath are found.

### ProjectItem.getColorLabel()

app.project.rootItem.children[index].getColorLabel()

### Description

Reads the project item's color label.

### Parameters

None.

### Returns

Integer; possible values are:
