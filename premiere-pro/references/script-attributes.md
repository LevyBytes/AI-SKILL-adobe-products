# Attributes (part 1)

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Application object — Attributes

### app.anywhere

app.anywhere

### Description

An Anywhere object that gives access to available Anywhere servers. It exists only when Premiere Pro runs in the discontinued Anywhere configuration.

### Type

Anywhere object.

### app.build

app.build

### Description

Reports the build number for the running Premiere Pro instance.

### Type

String; read-only.

### Example

Read the current application's build version.

```
// in Adobe Premiere Pro version 14.3.1 (Build 45)...
parseInt(app.build); // 45
```

### app.encoder

app.encoder

### Description

Through this property, scripts can reach Adobe Media Encoder on the same system.

Warning

On Mac only, app.encoder is broken in Premiere Pro 14.3.1 - 15. Premiere Pro 22 and later include the fix. See this discussion.

### Type

Encoder object.

### app.getAppPrefPath

app.getAppPrefPath

### Description

Path to the active "Adobe Premiere Pro Prefs" file.

### Type

String; read-only.

### Example

Preference-file path example.

```
app.getAppPrefPath;
// /Users/USERNAME/Documents/Adobe/Premiere Pro/14.0/Profile-USERNAME/
```

### app.bind

app.bind

### Description

Connects the specified function so that chosen event invokes it.

### Type

Boolean; true means success.

```
var success = app.bind("onActiveSequenceStructureChanged", myActiveSequenceStructureChangedFxn);
```

### app.getAppSystemPrefPath

app.getAppSystemPrefPath

### Description

Active Premiere Pro configuration files that are not tied to one user account.

### Type

String; read-only.

### Example

Configuration-folder path example.

```
app.getAppSystemPrefPath;
// /Library/Application Support/Adobe/Adobe Premiere Pro 2020/
```

### app.getPProPrefPath

app.getPProPrefPath

### Description

Path to the active "Adobe Premiere Pro Prefs" file.

### Type

String; read-only.

### Example

Preference-file path example.

```
app.getPProPrefPath;
// /Users/USERNAME/Documents/Adobe/Premiere Pro/14.0/Profile-USERNAME/
```

### app.getPProSystemPrefPath

app.getPProSystemPrefPath

### Description

Active Premiere Pro configuration files that are not tied to one user account.

### Type

String; read-only.

### Example

Configuration-folder path example.

```
app.getPProSystemPrefPath;
// /Library/Application Support/Adobe/Adobe Premiere Pro 2020/
```

### app.learnPanelContentDirPath

app.learnPanelContentDirPath

### Description

Returns the Learn panel content directory path.

### Type

String; read-only.

### Example

Learn panel content-path example.

```
app.learnPanelContentDirPath;
// /Users/Shared/Adobe/Premiere Pro 2020/Learn Panel/
```

### app.learnPanelExampleProjectDirPath

app.learnPanelExampleProjectDirPath

### Description

Returns the directory path for example projects used by the Learn panel.

### Type

String; read-only.

### Example

Learn panel example-project path.

```
app.learnPanelExampleProjectDirPath;
// /Users/Shared/Adobe/Premiere Pro/14.0/Tutorial/Going Home project/
```

### app.metadata

app.metadata

### Description

Retrieves the application's Metadata object.

### Type

Metadata object, read-only.

### app.path

app.path

### Description

Returns the application's executable-file path.

### Type

String; read-only.

### Example

Application executable-path example.

```
app.path;
// /Applications/Adobe Premiere Pro 2020/Adobe Premiere Pro 2020.app/
```

### app.production

app.production

### Description

Identifies which production is active now.

### Type

Production object when open; otherwise null.

### app.project

app.project

### Description

Indicates the currently active project.

### Type

Project object.

### app.projectManager

app.projectManager

### Description

Gives access to project-management functions in Premiere Pro.

### Type

ProjectManager object.

### app.projects

app.projects

### Description

Open projects are exposed as an array, and numProjects gives the count.

### Type

ProjectCollection object, read-only.

### app.properties

app.properties

### Description

Preference values can be read and changed through methods on the properties object.

### Type

Properties object, read-only;

### app.sourceMonitor

app.sourceMonitor

### Description

Gives access to SourceMonitor object.

### Type

SourceMonitor object.

### app.userGuid

app.userGuid

### Description

Identifies the signed-in Creative Cloud user with a unique value.

### Type

String; read-only.

### app.version

app.version

### Description

Identifies the Premiere Pro version that provides the API.

### Type

String; read-only.

### Example

Version example for 14.3.1 (Build 45).

```
app.version; // 14.3.1
```

## Marker object — Attributes

### Marker.comments

app.project.activeSequence.markers.getFirstMarker().comments

app.project.rootItem.children[index].getMarkers().getFirstMarker().comments

### Description

Marker comments.

### Type

String; read/write.

### Marker.end

app.project.activeSequence.markers.getFirstMarker().end

app.project.rootItem.children[index].getMarkers().getFirstMarker().end

### Description

Time object holding the marker end value.

NOTE: When setting a marker end time value, pass a Seconds value rather than replacing the entire Time object.

### Type

Time object; read/write.

### Marker.guid

app.project.activeSequence.markers.getFirstMarker().guid

app.project.rootItem.children[index].getMarkers().getFirstMarker().guid

### Description

Unique marker identifier created when the marker is instantiated.

### Type

String; read-only.

### Marker.name

app.project.activeSequence.markers.getFirstMarker().name

app.project.rootItem.children[index].getMarkers().getFirstMarker().name

### Description

Marker name.

### Type

String; read/write.

### Marker.start

app.project.activeSequence.markers.getFirstMarker().start

app.project.rootItem.children[index].getMarkers().getFirstMarker().start

### Description

Time object holding the marker beginning value.

### Type

Time object; read/write.

### Marker.type

app.project.activeSequence.markers.getFirstMarker().type

app.project.rootItem.children[index].getMarkers().getFirstMarker().type

### Description

Marker type, one of:

- "Comment"
- "Chapter"
- "Segmentation"
- "WebLink"

Note

Import can bring in marker types that Premiere Pro itself cannot create.

### Type

String; read-only.

## Metadata object — Attributes

### Metadata.getMetadata

app.metadata.getMetadata

### Description

description placeholder

### Type

String.

## Production object — Attributes

### Production.name

app.production.name

### Description

Production name.

### Type

String.

### Production.path

app.production.path

### Description

Production folder path.

### Type

String.

### Production.projects

app.production.projects

### Description

Array of currently open projects contained in the Production. Projects that are not open are omitted.

### Type

ProjectCollection object, read-only.

## Project object — Attributes

### Project.activeSequence

app.project.activeSequence

### Description

Currently active Sequence object in the project.

### Type

Sequence object, or 0 when no sequence is active.

### Project.cloudProjectlocalID

app.project.cloudProjectlocalID

### Description

Cloud project ID.

### Type

String; read/only.

### Project.documentID

app.project.documentID

### Description

Unique identifier for this project, using the xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx format.

### Type

String; read-only.

### Project.isCloudProject

app.project.isCloudProject

### Description

Checks whether the project is a cloud project.

### Type

Boolean; read-only.

### Project.name

app.project.name

### Description

Project name.

### Type

String; read-only.

### Project.path

app.project.path

### Description

Project file path.

### Type

String; read-only.

### Example

Get the path for the currently active project

```
app.project.path; // /Users/USERNAME/Desktop/Project.prproj
```

### Project.rootItem

app.project.rootItem

### Description

ProjectItem object representing the project's "root".

### Type

ProjectItem object; always uses type ProjectItemType_BIN.

### Project.sequences

app.project.sequences

### Description

Project sequences.

### Type

SequenceCollection object, read-only.

## ProjectManager object — Attributes

### ProjectManager.affectedSequences

app.projectManager.options.affectedSequences

### Description

Array of Sequence objects selected for export.

### Type

Array; read/write.

### ProjectManager.clipTranscoderOption

app.projectManager.options.clipTranscoderOption

### Description

Clip transcode selection; permitted values are:

- `CLIP_TRANSCODE_MATCH_PRESET` - Use the specified preset for transcoding.
- `CLIP_TRANSCODE_MATCH_CLIPS` - Conform to source clips.
- `CLIP_TRANSCODE_MATCH_SEQUENCE` - Conform to the sequence settings.

### Type

String; read/write.

### ProjectManager.clipTransferOption

app.projectManager.options.clipTransferOption

### Description

Clip transfer selection; permitted values are:

- `CLIP_TRANSFER_COPY` - Copy all source media.
- `CLIP_TRANSFER_TRANSCODE` - Transcode into the default output format.

app.projectManager.options.convertAECompsToClips

### Description

When true, dynamically-linked After Effects compositions are rendered as new media with the selected preset.

### Type

Boolean; read/write.

app.projectManager.options.convertImageSequencesToClips

### Description

When true, image sequences are transcoded into new media with the chosen preset.

### Type

Boolean; read/write.

app.projectManager.options.convertSyntheticsToClips

### Description

When true, clips from synthetic importers are transcoded into new media with the chosen preset.

### Type

Boolean; read/write.

### ProjectManager.copyToPreventAlphaLoss

app.projectManager.options.copyToPreventAlphaLoss

### Description

When true, transcoded media retains available alpha data.

### Type

Boolean; read/write.

### ProjectManager.destinationPath

app.projectManager.options.destinationPath

### Description

Export destination for the project and its media.

### Type

String; read/write.

### ProjectManager.encoderPresetFilePath

app.projectManager.options.encoderPresetFilePath

### Description

Path for the output preset, supplied as an .epr file.

### Type

String; read-write.

### ProjectManager.excludeUnused

app.projectManager.options.excludeUnused

### Description

When non-zero, unused project items are excluded from the export.

### Type

Boolean; read/write.

### ProjectManager.handleFrameCount

app.projectManager.options.handleFrameCount

### Description

Number of handle frames to include before and after media in and out points.

### Type

Integer; read/write.

### ProjectManager.includeAllSequences

app.projectManager.options.includeAllSequences

### Description

When true, every Sequence is included in the export.

### Type

Boolean; read/write.

### ProjectManager.includeConformedAudio

app.projectManager.options.includeConformedAudio

### Description

When true, conformed audio files accompany the export.

### Type

Boolean; read/write.

### ProjectManager.includePreviews

app.projectManager.options.includePreviews

### Description

When true, rendered preview files are included in the export package.

### Type

Boolean; read/write.

### ProjectManager.renameMedia

app.projectManager.options.renameMedia

### Description

When true, media renaming occurs during export.

### Type

Boolean; read/write.

## Properties object

app.properties

### Description

Description text is still to be supplied.

## Properties object — Methods

### Properties.clearProperty()

app.properties.clearProperty()

### Description

Description text is still to be supplied.

### Parameters

Parameter details are still to be supplied.

### Returns

Return value and type details are still to be supplied.

### Properties.doesPropertyExist()

app.properties.doesPropertyExist(property)

### Description

Reports whether the named preference property is present.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| property | String | Property name to test. |

### Returns

Boolean.

### Example

Tests preference labels at indices 10 and 99:

```
var property = 'BE.Prefs.LabelNames.10';
var exists = app.properties.doesPropertyExist(property);
alert('Property "' + property + '" exists: ' + exists.toString());

property = 'BE.Prefs.LabelNames.99';
exists = app.properties.doesPropertyExist(property);
alert('Property "' + property + '" exists: ' + exists.toString());
```

### Properties.getProperty()

app.properties.getProperty(property)

### Description

Fetches the value stored for a property.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| property | String | Property whose value should be read. |

### Returns

String.

### Example

Reads a label name at a specified index:

```
var labelIndex = 0;
var property = 'BE.Prefs.LabelNames.' + labelIndex;

if (app.properties.doesPropertyExist(property)) {
    alert(app.properties.getProperty(property));
} else {
    alert('Property "' + property + '" does not exist');
}
```

### Properties.isPropertyReadOnly()

app.properties.isPropertyReadOnly(property)

### Description

Reports whether the user can overwrite the specified property; absent properties return false.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| property | String | Property name to inspect. |

### Returns

Boolean.

### Properties.setProperty()

app.properties.setProperty(property, value, persistent, createIfNotExist)

### Description

Writes a property value.

Note

Premiere Pro preferences require a trailing path separator for any file path value.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| property | String | Property name to create or update. |
| value | Any | Value to store on the property. |
| persistent | Boolean | Controls whether the value persists across sessions. |
| createIfNotExist | Boolean | Create the property when it is absent. |

### Returns

null

### Example

Changes a label name:

```
var labelIndex = 0;
var property = 'BE.Prefs.LabelNamesX.' + labelIndex;

var newValue = 'Changed via Script';
var persistent = true;
var createIfNotExist = true;

if (app.properties.doesPropertyExist(property)) {
    if (app.properties.isPropertyReadOnly(property)) {
        alert('Could not rename property "' + property + '" because it is read-only.');
    } else {
        var oldValue = app.properties.getProperty(property);
        app.properties.setProperty(property, newValue, persistent, createIfNotExist);
        alert('Value changed from "' + oldValue + '" to "' + newValue + '"');
    }
} else {
    app.properties.setProperty(property, newValue, persistent, createIfNotExist);
    alert('Created new property "' + property + '" with value "' + newValue + '"');
}
```

## ProjectItem object — Attributes

### ProjectItem.children

app.project.rootItem.children[index].children

### Description

Array of project items under this project item.

### Type

ProjectItemCollection object, read-only.

### ProjectItem.getAudioChannelMapping

app.project.rootItem.children[index].getAudioChannelMapping

### Description

Audio channel mapping now in effect for the ProjectItem.

### Type

An audioChannelMapping object.

### ProjectItem.getOverrideColorSpaceList

app.project.rootItem.children[index].getOverrideColorSpaceList

### Description

Description text is still to be supplied.

Returns an object with data similar to:

```
{
    value: [
        sRGB,
        BT.601 (NTSC),
        BT.601 (PAL),
        BT.709,
        BT.709 (Scene),
        BT.2020,
        BT.2020 (Scene),
        BT.2100 PQ,
        BT.2100 PQ (Scene),
        BT.2100 HLG,
        BT.2100 HLG (Scene),
        DCDM XYZ,
    ]
};
```

### Type

Javascript Object.

### ProjectItem.name

app.project.rootItem.children[index].name

### Description

Project item name.

### Type

String; read/write.

### Example

Renames the first project item.

```
var item = app.project.rootItem.children[0];
if (item) {
    item.name = item.name + ', updated by PProPanel.';
} else {
    alert('Could not rename project item');
}
```

### ProjectItem.nodeId

app.project.rootItem.children[index].nodeId

### Description

Unique ID assigned when the project item is added to the project.

Note

Use this to tell references to the same source media apart.

### Type

String; read-only.

### ProjectItem.teamProjectsAssetId

app.project.rootItem.children[index].teamProjectsAssetId

### Description

Team Projects Asset ID for this item.

### Type

String; read-only.

### ProjectItem.treePath

app.project.rootItem.children[index].treePath

### Description

Project tree location for the item.

Example: \\ProjectName.prproj\\Media\\MXF\\filename.mxf

### Type

String; read-only.

### ProjectItem.type

app.project.rootItem.children[index].type

### Description

One of:

- "CLIP"
- "BIN"
- "ROOT"
- "FILE"

### Type

Enumerated value; read-only.

## TrackItem object — Attributes

### TrackItem.components

app.project.sequences[index].audioTracks[index].clips[index].components

app.project.sequences[index].videoTracks[index].clips[index].components

### Description

Components linked to this trackItem; the set may include intrinsic transformations and video/audio effects.

### Type

ComponentCollection object, read-only;

### TrackItem.duration

app.project.sequences[index].audioTracks[index].clips[index].duration

app.project.sequences[index].videoTracks[index].clips[index].duration

### Description

TrackItem duration.

### Type

Time object, read-only.

### TrackItem.end

app.project.sequences[index].audioTracks[index].clips[index].end

app.project.sequences[index].videoTracks[index].clips[index].end

### Description

Visible end time of the trackItem in the sequence, measured from the start of its corresponding sequence rather than the sequence zero point.

Note

This value can differ from the trackItem out point, which is measured from source media.

### Type

Time object, read/write.

### TrackItem.inPoint

app.project.sequences[index].audioTracks[index].clips[index].inPoint

app.project.sequences[index].videoTracks[index].clips[index].inPoint

### Description

Source-media in point for this trackItem instance, measured from source start.

### Type

Time object, read/write.

### TrackItem.matchName

app.project.sequences[index].audioTracks[index].clips[index].matchName

app.project.sequences[index].videoTracks[index].clips[index].matchName

### Description

Description text is still to be supplied.

### Type

String; read-only.

### TrackItem.mediaType

app.project.sequences[index].audioTracks[index].clips[index].mediaType

app.project.sequences[index].videoTracks[index].clips[index].mediaType

### Description

mediaType value for media supplied by this trackItem.

### Type

String, one of:

- "Audio"
- "Video"

### TrackItem.name

app.project.sequences[index].audioTracks[index].clips[index].name

app.project.sequences[index].videoTracks[index].clips[index].name

### Description

Track item name.

### Type

String; read/write.

### TrackItem.nodeId

app.project.sequences[index].audioTracks[index].clips[index].nodeId

app.project.sequences[index].videoTracks[index].clips[index].nodeId

### Description

Description text is still to be supplied.

### Type

String.

### TrackItem.outPoint

app.project.sequences[index].audioTracks[index].clips[index].outPoint

app.project.sequences[index].videoTracks[index].clips[index].outPoint

### Description

Source-media out point for this TrackItem instance, measured from source start.

### Type

Time object, read/write.

### TrackItem.projectItem

app.project.sequences[index].audioTracks[index].clips[index].projectItem

app.project.sequences[index].videoTracks[index].clips[index].projectItem

### Description

ProjectItem object that supplies media.

### Type

A ProjectItem object.

### TrackItem.start

app.project.sequences[index].audioTracks[index].clips[index].start

app.project.sequences[index].videoTracks[index].clips[index].start

### Description

Visible start time of the trackItem in the sequence, measured from the beginning of the corresponding sequence rather than the sequence zero point. It can differ from the trackItem in point, which is measured from source media.

### Type

Time object, read/write.

### TrackItem.type

app.project.sequences[index].audioTracks[index].clips[index].type

app.project.sequences[index].videoTracks[index].clips[index].type

### Description

Kind of media supplied by this trackItem.

### Type

Number, 1 means video, 2 means audio.

## Component object — Attributes

### Component.displayName

app.project.sequences[index].audioTracks[index].clips[index].components[index].displayName

app.project.sequences[index].videoTracks[index].clips[index].components[index].displayName

### Description

User-visible component name. Localized.

### Type

String; read-only.

### Component.matchName

app.project.sequences[index].audioTracks[index].clips[index].components[index].matchName

app.project.sequences[index].videoTracks[index].clips[index].components[index].matchName

### Description

Component name loaded from disk, used as the unique identifier for effect plug-ins.

### Type

String; read-only.

### Component.properties

app.project.sequences[index].audioTracks[index].clips[index].components[index].properties

app.project.sequences[index].videoTracks[index].clips[index].components[index].properties

### Description

Properties for the component, typically effect parameters.

### Type

Array of components, read-only; (ComponentParamCollection object).

## ComponentParam object — Attributes

### ComponentParam.displayName

app.project.sequences[index].audioTracks[index].clips[index].components[index].properties[index].displayName

app.project.sequences[index].videoTracks[index].clips[index].components[index].properties[index].displayName

### Description

User-visible component parameter name. Localized.

### Type

String; read-only.
