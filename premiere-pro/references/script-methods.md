# Methods (part 1)

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Application object — Methods

### app.enableQE()

app.enableQE()

### Description

Turns on Premiere Pro's QE DOM.

### Parameters

None.

### Returns

Returns true when QE DOM enablement succeeds.

### app.getEnableProxies()

app.getEnableProxies()

### Description

Checks whether proxy use is enabled at the moment.

### Parameters

None.

### Returns

Returns 1 when proxies are enabled and 0 when they are disabled.

### app.getWorkspaces()

app.getWorkspaces()

### Description

Fetches the available workspaces as an array of Strings.

### Parameters

None.

### Returns

On success, returns an array of strings; on failure, returns null.

### Example

Workspace-list example.

```
app.getWorkspaces();
/* [
    "All Panels",
    "Assembly",
    "Audio",
    "Color",
    "Editing",
    "Effects",
    "Graphics",
    "Learning",
    "Libraries",
    "Metalogging",
    "Production"
]; */
```

### app.isDocument()

app.isDocument(path)

### Description

Checks whether the file at path is openable as a Premiere Pro project.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| path | String | A file path. |

### Returns

True means the file can open as a Premiere Pro project.

### Example

Valid-project test examples

```
app.isDocument('~/Desktop/myProject.prproj'); // true
app.isDocument('~/Desktop/textFile.txt');     // false
app.isDocument('~/Desktop/footageFile.mov');  // false
app.isDocument('~/Desktop/imageFile.mov');    // false
```

### app.isDocumentOpen()

app.isDocumentOpen()

### Description

Reports whether the application has any open projects.

### Parameters

None.

### Returns

Returns true when one or more projects are open; otherwise false.

### app.newProject()

app.newProject(path)

### Description

At the specified path, creates a new Project object for a .prproj file.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| path | String | Full path for the new project; a .prproj extension is not appended. |

### Returns

True indicates success.

### app.openDocument()

app.openDocument(path, [suppressConversionDialog], [bypassLocateFileDialog], [bypassWarningDialog], [doNotAddToMRUList])

### Description

Opens a Premiere Pro Project object from the file at the specified path.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| path | String | Full path to the document being opened. |
| suppressConversionDialog | Boolean | Optional. Suppresses the project conversion dialog. |
| bypassLocateFileDialog | Boolean | Optional. Skips the locate file dialog. |
| bypassWarningDialog | Boolean | Optional. Skips the warning dialog. |
| doNotAddToMRUList | Boolean | Optional. Does not add this file to the Most Recently Used List. |

### Returns

Returns true after the file opens successfully.

### app.openFCPXML()

app.openFCPXML(path, projPath)

### Description

Uses an FCP XML file plus projPath to open a Premiere Pro Project object.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| path | String |  |
| projPath | String |  |

### Returns

Returns true after the file opens as a Premiere Pro Project object.

### app.quit()

app.quit()

### Description

Exits Premiere Pro and asks the user to save Project object changes.

### Parameters

None.

### Returns

Nothing.

### app.setEnableProxies()

app.setEnableProxies(enabled)

### Description

Sets whether proxy use is currently enabled.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| enabled | Integer | 1 enables proxies, 0 disables them. |

### Returns

Returns 1 when proxy enablement changes.

### app.setExtensionPersistent()

app.setExtensionPersistent(extensionID, persistent)

### Description

Controls whether the extension identified by extensionID remains persistent during this session.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| extensionID | String | Extension to modify. |
| persistent | Integer | Pass 1 to keep the extension in memory, or 0 to permit unloading. |

### Returns

True indicates success.

### Example

```
var extensionID = 'com.adobe.PProPanel';
// 0 - while testing (to enable rapid reload);
// 1 - for "Never unload me, even when not visible."
var persistent = 0;

app.setExtensionPersistent(extensionID, persistent);
```

### app.setScratchDiskPath()

app.setScratchDiskPath(path, scratchDiskType)

### Description

Assigns the path used for one of Premiere Pro's scratch disk locations.

### Parameters

Parameter

Type

Description

path

String

The new path to use.

scratchDiskType

ScratchDiskType enum

Use one of these enumerated values: - ScratchDiskType.FirstVideoCaptureFolder - ScratchDiskType.FirstAudioCaptureFolder - ScratchDiskType.FirstVideoPreviewFolder - ScratchDiskType.FirstAudioPreviewFolder - ScratchDiskType.FirstAutoSaveFolder - ScratchDiskType.FirstCCLibrariesFolder - ScratchDiskType.FirstCapsuleMediaFolder

| --- | --- | --- |

### Returns

On success, returns true.

### Example

```
var scratchPath = Folder.selectDialog('Choose new scratch disk folder');
if (scratchPath && scratchPath.exists) {
    app.setScratchDiskPath(scratchPath.fsName, ScratchDiskType.FirstAutoSaveFolder);
}
```

### app.setSDKEventMessage()

app.setSDKEventMessage(message, decorator)

### Description

Adds a text entry to Premiere Pro's Events panel.

### Parameters

Parameter

Type

Description

message

String

Text that should appear.

decorator

String

Decorator value, chosen from: - info - warning - error

| --- | --- | --- |

### Returns

On success, returns true.

### app.setWorkspace()

app.setWorkspace(workspace)

### Description

Activates the specified workspace. Call app.getWorkspaces() to retrieve every workspace that is available.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| workspace | String | Workspace name to activate. |

### Returns

Boolean.

### Example

Activate "Editing" workspace.

```
var workspace = 'Editing';
if (app.setWorkspace(workspace)) {
    alert('Workspace changed to "' + workspace + '"');
} else {
    alert('Could not set "' + workspace + '" workspace');
}
```

### app.trace()

app.trace()

### Description

Sends a text string to Premiere Pro's debug console.

### Parameters

None.

### Returns

Returns true after the trace entry is added.

### app.getProjectViewIDs()

app.getProjectViewIDs()

### Description

Lists view IDs for the open views tied to any project.

### Parameters

None.

### Returns

Array of view IDs; null is possible.

### Example

```
var allViewIDs = app.getProjectViewIDs();
if (allViewIDs){
    var firstOne = allViewIDs[0];
} else {
    // No views open.
}
```

### app.getProjectFromViewID()

app.getProjectFromViewID()

### Description

Gets the Project connected to the supplied View ID.

### Parameters

View ID previously obtained with getProjectViewIDs.

### Returns

Project object for the project linked to that View ID. Null can be returned.

### Example

```
var allViewIDs = app.getProjectViewIDs();
if (allViewIDs){
    var firstOne = allViewIDs[0];
    if (firstOne){
        var thisProject = getProjectFromViewID(firstOne);
        if (thisProject){
            var name = thisProject.name;
        } else {
            // no project associated with that view ID.
        }
} else {
    // No views open.
}
```

### app.getCurrentProjectViewSelection()

app.getCurrentProjectViewSelection()

### Description

Provides the ProjectItems selected in the currently active project view as an array.

### Parameters

None.

### Returns

ProjectItems array; null can be returned.

### Example

```
var selectedItems = app.getCurrentProjectViewSelection();
if (selectedItems){
    var firstOne = selectedItems[0];
} else {
    // No projectItems selected.
}
```

### app.broadcastPrefsChanged()

app.broadcastPrefsChanged()

### Description

Signals to Application that preferences changed.

### Parameters

String ID for the changed preference. (currently only listens to "BE::PreferencesScratchDisksChanged")

### Returns

Returns true when the update succeeds.

### Example

```
app.broadcastPrefsChanged("BE::PreferencesScratchDisksChanged");
```

## Anywhere object — Methods

### Anywhere.getAuthenticationToken()

app.anywhere.getAuthenticationToken()

### Description

Gets an authentication token.

### Parameters

None.

### Returns

String containing the login token; returns 0 on failure.

### Anywhere.getCurrentEditingSessionActiveSequenceURL()

app.anywhere.getCurrentEditingSessionActiveSequenceURL()

### Description

Gets the URL for the active sequence in a production.

### Parameters

None.

### Returns

String containing the asset's URL; returns 0 if the call fails, including when no active sequence exists or no editing session is open.

### Anywhere.getCurrentEditingSessionSelectionURL()

app.anywhere.getCurrentEditingSessionSelectionURL()

### Description

Gets the URL for the single asset that is currently selected. The call fails when the selection count is not exactly one.

### Parameters

None.

### Returns

String containing the asset's URL; returns 0 if the call fails, including when the selection count is not one.

### Anywhere.getCurrentEditingSessionURL()

app.anywhere.getCurrentEditingSessionURL()

### Description

Gets the URL of the Production that is being edited.

### Parameters

None.

### Returns

String containing the production's URL, or 0 when unsuccessful.

### Anywhere.isProductionOpen()

app.anywhere.isProductionOpen()

### Description

Checks whether an Anywhere or Team Projects production is open.

### Parameters

None.

### Returns

Returns true when a production is open; otherwise false.

### Anywhere.listProductions()

app.anywhere.listProductions()

### Description

Gets production names available to the current user on the active server.

### Parameters

None.

### Returns

Array of Strings with avialable production names; returns 0 on failure.

### Anywhere.openProduction()

app.anywhere.openProduction(productionURL)

### Description

Opens the production located at the supplied URL.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| productionURL | String | Production URL to open. |

### Returns

Returns 0 on success.

### Anywhere.setAuthenticationToken()

app.anywhere.setAuthenticationToken(token, emailAddress)

### Description

Uses the provided token to log the specified email address into the server.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| token | String | Authorization token. |
| emailAddress | String | Email address associated with the token. |

### Returns

Returns 0 on success.

## Encoder object — Methods

### Encoder.encodeFile()

app.encoder.encodeFile(filePath, outputPath, presetPath, workArea, removeUponCompletion, inPoint, outPoint)

### Description

Requests Adobe Media Encoder to render the specified file with the specified settings, optionally over a chosen range.

### Parameters

Parameter

Type

Description

filePath

String

Path to the file being rendered.

outputPath

String

Path for the output file.

presetPath

String

Path to a preset (.epr) file.

workArea

Integer

Integer selecting the work area: - 0 - `ENCODE_ENTIRE` - 1 - `ENCODE_IN_TO_OUT` - 2 - `ENCODE_WORK_AREA`

removeUponCompletion

Integer

When 1, removes the job after completion.

inPoint

Time object

Time object used as the new file's in point.

outPoint

Time object

Time object used as the new file's out point.

| --- | --- | --- |

### Returns

Returns a String job ID for the render job added to the AME queue, or 0 on failure.

### Encoder.encodeProjectItem()

app.encoder.encodeProjectItem(projectItem, outputPath, presetPath, workArea, removeUponCompletion)

### Description

Requests Adobe Media Encoder to render the specified ProjectItem object with the specified settings, optionally over a chosen range.

### Parameters

Parameter

Type

Description

projectItem

ProjectItem object

Project item to render.

outputPath

String

Path for the output file.

presetPath

String

Path to a preset (.epr) file.

workArea

Integer

Integer selecting the work area: - 0 - `ENCODE_ENTIRE` - 1 - `ENCODE_IN_TO_OUT` - 2 - `ENCODE_WORK_AREA`

removeUponCompletion

Integer

When 1, removes the job after completion.

| --- | --- | --- |

### Returns

Returns a String job ID for the render job added to the AME queue, or 0 on failure.

### Encoder.encodeSequence()

app.encoder.encodeSequence(sequence, outputPath, presetPath, workArea, removeUponCompletion)

### Description

Sends the specified Sequence object to Adobe Media Encoder for rendering with the provided settings.

### Parameters

Parameter

Type

Description

sequence

Sequence object

Sequence to render.

outputPath

String

Path for the output file.

presetPath

String

Path to a preset (.epr) file.

workArea

Integer

Integer selecting the work area: - 0 - `ENCODE_ENTIRE` - 1 - `ENCODE_IN_TO_OUT` - 2 - `ENCODE_WORK_AREA`

removeUponCompletion

Integer

When 1, removes the job after completion.

| --- | --- | --- |

### Returns

Returns a String job ID for the render job added to the AME queue, or 0 on failure.

### Encoder.launchEncoder()

app.encoder.launchEncoder()

### Description

Starts Adobe Media Encoder.

### Parameters

None.

### Returns

Returns 0 on success.

### Encoder.setEmbeddedXMPEnabled()

app.encoder.setEmbeddedXMPEnabled(enabled)

### Description

Controls whether embedded XMP metadata is written.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| enabled | Integer | Use 1 to enable sidecar output, or 0 to disable it. |

### Returns

Returns 0 on success.

Note

Premiere Pro and Adobe Media Encoder write sidecar XMP for certain formats and embed XMP for most others.

This choice depends on many conditions, and the API does not provide a way to force sidecar or embedded output for formats that normally use the other approach.

### Encoder.setSidecarXMPEnabled()

app.encoder.setSidecarXMPEnabled(enabled)

### Description

Controls whether output includes a sidecar file with XMP metadata.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| enabled | Integer | Use 1 to enable sidecar output, or 0 to disable it. |

### Returns

Returns 0 on success.

### Encoder.startBatch()

app.encoder.startBatch()

### Description

Starts rendering the Adobe Media Encoder render queue.

### Parameters

None.

### Returns

Returns 0 on success.

## Marker object — Methods

### Marker.getColorByIndex()

app.project.activeSequence.markers.getFirstMarker().getColorByIndex(index)

app.project.rootItem.children[index].getMarkers().getFirstMarker().getColorByIndex(index)

Note

Adobe Premire Pro 13.x added this functionality.

### Description

Gets the marker color index.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| index | Integer | Marker index to read. |

### Returns

Returns an Integer color index.

### Marker.getWebLinkFrameTarget()

app.project.activeSequence.markers.getFirstMarker().getWebLinkFrameTarget()

app.project.rootItem.children[index].getMarkers().getFirstMarker().getWebLinkFrameTarget()

### Description

Reads the marker's FrameTarget field.

### Parameters

None.

### Returns

On success, returns a String with the frame target; otherwise returns 0.

### Marker.getWebLinkURL()

app.project.activeSequence.markers.getFirstMarker().getWebLinkURL()

app.project.rootItem.children[index].getMarkers().getFirstMarker().getWebLinkURL()

### Description

Reads the marker's URL field.

### Parameters

None.

### Returns

On success, returns a String with the URL; otherwise returns 0.

### Marker.setColorByIndex()

app.project.activeSequence.markers.getFirstMarker().setColorByIndex(colorIndex, markerIndex)

app.project.rootItem.children[index].getMarkers().getFirstMarker().setColorByIndex(colorIndex, markerIndex)

Note

Adobe Premire Pro 13.x added this functionality.

### Description

Sets marker color using an index. Use these color indices:

- 0 = Green
- 1 = Red
- 2 = Purple
- 3 = Orange
- 4 = Yellow
- 5 = White
- 6 = Blue
- 7 = Cyan

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| colorIndex | Integer | Color index to apply to the marker. |
| markerIndex | Integer | Marker index to set. |

### Returns

Returns undefined.

### Marker.setTypeAsChapter()

app.project.activeSequence.markers.getFirstMarker().setTypeAsChapter()

app.project.rootItem.children[index].getMarkers().getFirstMarker().setTypeAsChapter()

### Description

Changes marker type to "Chapter".

### Parameters

None.

### Returns

Returns 0 on success.

### Marker.setTypeAsComment()

app.project.activeSequence.markers.getFirstMarker().setTypeAsComment()

app.project.rootItem.children[index].getMarkers().getFirstMarker().setTypeAsComment()

### Description

Changes marker type to "Comment".

### Parameters

None.

### Returns

Returns 0 on success.

### Marker.setTypeAsSegmentation()

app.project.activeSequence.markers.getFirstMarker().setTypeAsSegmentation()

app.project.rootItem.children[index].getMarkers().getFirstMarker().setTypeAsSegmentation()

### Description

Changes marker type to "Segmentation".

### Parameters

None.

### Returns

Returns 0 on success.

### Marker.setTypeAsWebLink()

app.project.activeSequence.markers.getFirstMarker().setTypeAsWebLink()

app.project.rootItem.children[index].getMarkers().getFirstMarker().setTypeAsWebLink()

### Description

Changes marker type to "WebLink".

### Parameters

None.

### Returns

Returns 0 on success.

## Metadata object — Methods

### Metadata.addMarker()

app.metadata.addMarker()

### Description

description placeholder

### Parameters

parameters placeholder

### Returns

return value/type placeholder

### Metadata.deleteMarker()

app.metadata.deleteMarker()

### Description

description placeholder

### Parameters

parameters placeholder

### Returns

return value/type placeholder

### Metadata.setMarkerData()

app.metadata.setMarkerData()

### Description

description placeholder

### Parameters

parameters placeholder

### Returns

return value/type placeholder

### Metadata.setMetadataValue()

app.metadata.setMetadataValue()

### Description

description placeholder

### Parameters

parameters placeholder

### Returns

return value/type placeholder

### Metadata.updateMarker()

app.metadata.updateMarker()

### Description

description placeholder

### Parameters

parameters placeholder

### Returns

return value/type placeholder

## Production object — Methods

### Production.addProject()

app.production.addProject(srcProjectPath, destProjectPath)

### Description

Copies a project into the Production directory from another location.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| srcProjectPath | String | Source project path. |
| destProjectPath | String | Target path for the project after addition. |

### Returns

Returns true on success.

### Production.close()

app.production.close()

### Description

Shuts the Production along with its open projects.

### Parameters

None.

### Returns

Returns true on success.

### Production.getLocked()

app.production.getLocked(project)

### Description

Gets the lock state for one project inside the Production.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| project | Project object | Project to inspect. |

### Returns

Locked Project yields true; unlocked Project yields false.

### Production.moveToTrash()

app.production.moveToTrash(projectOrFolderPath, suppressUI, saveProject)

### Description

Moves the specified path ("bin") or .prproj to the Production's Trash folder.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| projectOrFolderPath | String | Source project path. |
| suppressUI | Boolean | Controls suppression of resulting dialogs. |
| saveProject | Boolean | Controls saving the project(s) before the move. |

### Returns

Returns true on success.

### Production.setLocked()

app.production.setLocked(project,locked)

### Description

Sets the lock state for the specified project inside the Production.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| project | Project object | Project to modify. |
| locked | Boolean | Use true to lock, false to unlock. |

### Returns

Returns true on success.
