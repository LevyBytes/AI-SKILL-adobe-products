# Metadata, Openprojectoptions, Pointf, Project ...

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Metadata — Static Methods; OpenProjectOptions — Properties; PointF — Properties; Project — Properties; ProjectColorSettings — Instance Methods; ProjectConverter — Static Methods; ProjectItem — Static Methods; ProjectItemSelection — Instance Methods; ProjectSettings — Static Methods; ProjectUtils — Static Methods; Properties — Static Methods; PRProduction — Static Methods; RectF — Properties.

## Metadata — Static Methods

### addPropertyToProjectMetadataSchema

25.0

_boolean_

Adds a schema property entry using the supplied name and label.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| name | _string_ | - |
| label | _string_ | - |
| type | _number_ | - |

### createSetProjectMetadataAction

25.0

_Action_

Builds an action that applies project metadata.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| projectItem | [_ProjectItem_](uxp-classes-4.md) | - |
| metadata | _string_ | - |
| updatedFields | [_string[]_](/ppro-reference/classes/string[]/) | - |

### createSetXMPMetadataAction

25.0

_Action_

Builds an action that applies project XMP metadata.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| projectItem | [_ProjectItem_](uxp-classes-4.md) | - |
| metadata | _string_ | - |

### getProjectColumnsMetadata

25.0

_string_

Retrieves project-column metadata for the supplied project item.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| projectItem | [_ProjectItem_](uxp-classes-4.md) | - |

### getProjectMetadata

25.0

_string_

Retrieves project metadata.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| projectItem | [_ProjectItem_](uxp-classes-4.md) | - |

### getProjectPanelMetadata

25.0

_string_

Retrieves metadata for the project panel.

### getXMPMetadata

25.0

_string_

Retrieves project XMP metadata.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| projectItem | [_ProjectItem_](uxp-classes-4.md) | - |

### setProjectPanelMetadata

25.0

_boolean_

Updates metadata for the project panel.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| metadata | _string_ | - |

## OpenProjectOptions — Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| showConvertProjectDialog | _boolean_ | R | 25.0 | Reports whether project open/close displays the convert project dialog |
| showLocateFileDialog | _boolean_ | R | 25.0 | Reports whether project open/close displays the locate file dialog |
| showWarningDialog | _boolean_ | R | 25.0 | Reports whether project open/close displays the warning file dialog |
| addToMRUList | _boolean_ | R | 25.0 | Reports whether project changes are added to the MRU list |

### OpenProjectOptions — Instance Methods

### setAddToMRUList

25.0

_OpenProjectOptions_

Sets whether project changes are added to the MRU list afterward.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| addToMRUList | _boolean_ | - |

### setShowConvertProjectDialog

25.0

_OpenProjectOptions_

Controls display of the convert project dialog during project open/close.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| showConvertProjectDialog | _boolean_ | - |

### setShowLocateFileDialog

25.0

_OpenProjectOptions_

Controls display of the locate file dialog during project open/close.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| showLocateFileDialog | _boolean_ | - |

### setShowWarningDialog

25.0

_OpenProjectOptions_

Controls display of the warning file dialog during project open/close.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| showConvertProjectDialog | _boolean_ | - |

## PointF — Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| x | _number_ | W | 25.0 | Gets or sets the point's x value |
| y | _number_ | W | 25.0 | Gets or sets the point's y value |

### PointF — Instance Methods

### distanceTo

25.0

_number_

Measures the distance between this point and another point.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| point | [_PointF_](uxp-classes-4.md) | - |

## Project — Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| guid | _Guid_ | R | 25.0 | Project unique identifier. |
| name | _string_ | R | 25.0 | Project name. |
| path | _string_ | R | 25.0 | Absolute file path for the project file. |

### Project — Static Methods

### createProject

25.0

_Project_

Creates a project.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| path | _string_ | - |

### getActiveProject

25.0

_Project_

Returns the active project.

### getProject

25.0

_Project_

Retrieves the project identified by the supplied UID.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| projectGuid | [_Guid_](uxp-classes-3.md) | - |

### isProject

25.0

_boolean_

Returns true when projectPath points to a file Premiere can open as a project.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| projectPath | _string_ | - |

### open

25.0

_Project_

Opens a project.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| path | _string_ | - |
| openProjectOptions | [_OpenProjectOptions_](uxp-classes-4.md) | - |

### Project — Instance Methods

### close

25.0

_boolean_

Closes this project.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| closeProjectOptions | [_CloseProjectOptions_](uxp-classes-2.md) | - |

### closeSequence

25.0

_boolean_

Closes a sequence and reports true on success.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| sequence | [_Sequence_](uxp-classes-5.md) | - |

### createSequence

25.0

_Sequence_

Creates a sequence from the default preset path.

**Note:** Prefer `createSequenceWithPresetPath()` because `presetPath` is deprecated.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| name | _string_ | - |
| presetPath | _string_ | - |

### createSequenceFromMedia

25.0

_Sequence_

Creates a sequence with the specified name and media items.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| name | _string_ | - |
| clipProjectItems | [_ClipProjectItem[]_](/ppro-reference/classes/clipprojectitem[]/) | - |
| targetBin | [_ProjectItem_](uxp-classes-4.md) | - |

### deleteSequence

25.0

_boolean_

Removes a sequence belonging to the project.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| sequence | [_Sequence_](uxp-classes-5.md) | - |

### executeTransaction

25.0

_boolean_

Runs an undoable transaction by passing a compound action.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| callback | _(compoundAction: CompoundAction) => void_ | - |
| undoString? | _string_ | - |

### getActiveSequence

25.0

_Sequence_

Retrieves the project's active sequence.

### getColorSettings

25.0

_ProjectColorSettings_

Retrieves ProjectColorSettings for the project.

### getInsertionBin

25.0

_ProjectItem_

Returns the bin currently used for insertion.

### getRootItem

25.0

_FolderItem_

Returns the project root item, which contains the project's lowest-level items.

### getSequence

25.0

_Sequence_

Retrieves a sequence from the project by id.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| guid | [_Guid_](uxp-classes-3.md) | - |

### getSequences

25.0

_Sequence[]_

Returns every sequence in this project as an array.

### importAEComps

25.0

_boolean_

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| aepPath | _string_ | - |
| compNames | [_string[]_](/ppro-reference/classes/string[]/) | - |
| TargetBin | [_ProjectItem_](uxp-classes-4.md) | - |

### importAllAEComps

25.0

_boolean_

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| aepPath | _string_ | - |
| TargetBin | [_ProjectItem_](uxp-classes-4.md) | - |

### importFiles

25.0

_boolean_

Imports files into the project's root bin or target bin.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| filePaths | [_string[]_](/ppro-reference/classes/string[]/) | - |
| suppressUI | _boolean_ | - |
| targetBin | [_ProjectItem_](uxp-classes-4.md) | - |
| asNumberedStills | _boolean_ | - |

### importSequences

25.0

_boolean_

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| projectPath | _string_ | - |
| sequenceIds | [_Guid[]_](/ppro-reference/classes/guid[]/) | - |

### lockedAccess

25.0

_void_

Obtains read/upgrade locked access to `Project`; the callback runs while project state stays stable. `executeTransaction` remains callable inside the locked section.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| callback | _() => void_ | - |

### openSequence

25.0

_boolean_

Opens a sequence and reports true on success.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| sequence | [_Sequence_](uxp-classes-5.md) | - |

### pauseGrowing

25.0

_boolean_

Pauses growing-file handling rather than performing file swaps.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| pause | _boolean_ | - |

### save

25.0

_boolean_

Persists project changes.

### saveAs

25.0

_boolean_

Saves the project at the supplied path.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| path | _string_ | - |

### setActiveSequence

25.0

_boolean_

Sets the project's active sequence.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| sequence | [_Sequence_](uxp-classes-5.md) | - |

## ProjectColorSettings — Instance Methods

### getGraphicsWhiteLuminance

25.0

_number_

Returns the value for graphics white luminance.

### getSupportedGraphicsWhiteLuminances

25.0

_number[]_

Retrieves all graphics white luminance values as an array.

## ProjectConverter — Static Methods

### exportAsFinalCutProXML

25.0

_boolean_

Writes the sequence to outputFilePath in Final Cut Pro XML format.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| sequence | [_Sequence_](uxp-classes-5.md) | - |
| outputFilePath | _string_ | - |
| suppressUI | _boolean_ | - |

### exportAsOpenTimelineIO

25.0

_boolean_

Writes the sequence to outputFilePath in OpenTimelineIO format.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| sequence | [_Sequence_](uxp-classes-5.md) | - |
| outputFilePath | _string_ | - |
| suppressUI | _boolean_ | - |

## ProjectItem — Static Methods

### cast

25.0

_ProjectItem_

Casts FolderItem or ClipProjectItem into ProjectItem.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| item | [_FolderItem_](uxp-classes-3.md) or [_ClipProjectItem_](uxp-classes-2.md) | - |

### ProjectItem — Instance Methods

### createSetColorLabelAction

25.0

_Action_

Creates an action that applies inColorLabelIndex to projectItem.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| inColorLabelIndex | _number_ | - |

### createSetNameAction

25.0

_Action_

Produces a projectItem rename action.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| inName | _string_ | - |

### getColorLabelIndex

25.0

_number_

Retrieves the color label index for projectItem.

### getId

25.0

_string_

Retrieves projectItem id.

### getParentBin

25.0

_FolderItem_

Retrieves the parent FolderItem for projectItem.

### getProject

25.0

_Project_

Retrieves this projectItem's parent Project.

## ProjectItemSelection — Instance Methods

### getItems

25.0

_ProjectItem[]_

Returns the ProjectItem entries contained in this selection.

## ProjectSettings — Static Methods

### createSetIngestSettingsAction

25.0

_Action_

Produces an action for applying IngestSettings.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| project | [_Project_](uxp-classes-4.md) | - |
| ingestSettings | [_IngestSettings_](uxp-classes-3.md) | - |

### createSetScratchDiskSettingsAction

25.0

_Action_

Produces an action for applying ScratchDiskSetting.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| project | [_Project_](uxp-classes-4.md) | - |
| scratchDiskSettings | [_ScratchDiskSettings_](uxp-classes-5.md) | - |

### getIngestSettings

25.0

_IngestSettings_

Retrieves IngestSettings for the supplied project.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| project | [_Project_](uxp-classes-4.md) | - |

### getScratchDiskSettings

25.0

_ScratchDiskSettings_

Returns the project's ScratchDiskSettings.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| project | [_Project_](uxp-classes-4.md) | - |

## ProjectUtils — Static Methods

### getProjectFromViewId

25.0

_Project_

Retrieves the project associated with the provided view guid.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| guid | [_Guid_](uxp-classes-3.md) | - |

### getProjectViewIds

25.0

_Guid[]_

Returns project view ids as an array.

### getSelection

25.0

_ProjectItemSelection_

Returns selected ProjectItem entries for the supplied project view.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| project | [_Project_](uxp-classes-4.md) | - |

### getSelectionFromViewId

25.0

_ProjectItemSelection_

Returns selected projectItem entries for the supplied view guid.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| guid | [_Guid_](uxp-classes-3.md) | - |

## Properties — Static Methods

### getProperties

25.0

_Properties_

Provides the Property Owner Object.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| propertyOwnerObject | [_Project_](uxp-classes-4.md) or [_Sequence_](uxp-classes-5.md) | An object instance, including Project, Sequence etc.., can also be supplied. |

### Properties — Instance Methods

### createClearValueAction

25.0

_Action_

Creates an action that clears the value for the supplied name. Failure is possible, for example, if the underlying properties object lacks action-based property-setting support.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| name | _string_ | - |

### createSetValueAction

25.0

_Action_

Creates an action that assigns a named value through scripting. Parameters use the form <name, value (number, boolean or string), persistence flag>. Failure is possible, for example, if the underlying properties object lacks action-based property-setting support.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| name | _string_ | property name |
| value | _boolean_ or _string_ or _number_ | Value written for that key |
| persistenceFlag | [_Constants.PropertyType_](uxp-ppro-reference.md) | Controls property persistence |

### getValue

25.0

_string_

Returns the named value as a native string.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| name | _string_ | - |

### getValueAsBool

25.0

_boolean_

Returns the named value in boolean form.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| name | _string_ | - |

### getValueAsFloat

25.0

_number_

Returns the named value in floating-point form.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| name | _string_ | - |

### getValueAsInt

25.0

_number_

Retrieves the named value as an integer.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| name | _string_ | - |

### hasValue

25.0

_boolean_

Reports whether this name has an associated value.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| name | _string_ | - |

## PRProduction — Static Methods

### getActiveProduction

25.0

_PRProduction_

Retrieves an instance for the active production.

### PRProduction — Instance Methods

### getScratchDiskSettings

25.0

_ScratchDiskSettings_

Returns the ScratchDiskSettings object associated with this production.

## RectF — Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| width | _number_ | W | 25.0 | Reads or writes the rect width |
| height | _number_ | W | 25.0 | Reads or writes the rect height |
