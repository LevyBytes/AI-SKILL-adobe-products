# Assigned Stories, Assigned Story, Assignment Export Options, Assignment Status ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: AssignedStories; AssignedStory; AssignmentExportOptions; AssignmentStatus; Assignment — Instance; Assignments; AttachedDevices; AutoCorrectPreference — Instance; AutoCorrectTable; AutoCorrectTables; AutoEnum; AutoSizingReferenceEnum; AutoSizingTypeEnum.

## AssignedStories

Collection containing assigned stories.

### Instance

> _Read Only_
>
> Number **length**
>
> Collection object count.

### Methods

> Number **count**()
>
> Shows how many AssignedStory elements are present.
> AssignedStory **item**( Mixed **index** )
>
> Gets the AssignedStory identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Selector value; provide a position or object name. Can accept: Long Integer or String. |

> AssignedStory **itemByName**( String **name** )
>
> Gets the AssignedStory matching the supplied name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> AssignedStory **itemByID**( Number **id** )
>
> Gets the AssignedStory matching the supplied ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> AssignedStory **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the AssignedStories contained in the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting AssignedStory, index, or name for the range. Can accept: AssignedStory, Long Integer or String. |
| Mixed | to | Ending AssignedStory, index, or name for the range. Can accept: AssignedStory, Long Integer or String. |

> AssignedStory **firstItem**()
>
> Gets the first AssignedStory in the collection.
> AssignedStory **lastItem**()
>
> Gets the final AssignedStory in the collection.
> AssignedStory **middleItem**()
>
> Gets the middle AssignedStory in the collection.
> AssignedStory **previousItem**( AssignedStory **obj** )
>
> Gets the AssignedStory whose index comes immediately before the supplied one.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| AssignedStory | obj | Index of the AssignedStory that comes after the wanted AssignedStory. |

> AssignedStory **nextItem**( AssignedStory **obj** )
>
> Gets the AssignedStory whose index comes after the supplied AssignedStory in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| AssignedStory | obj | AssignedStory whose index precedes the wanted AssignedStory. |

> AssignedStory **anyItem**()
>
> Gets any AssignedStory from the collection.
> AssignedStory **everyItem**()
>
> Gets every AssignedStory in the collection.
> String **toSource**()
>
> Builds a string which, if run, yields the AssignedStory.
> AssignedStory **[]**( Number **index** )
>
> Gets the AssignedStory at the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## AssignedStory

An assigned-story object.

### Instance

> _Read Only_
>
> Mixed **storyReference**
>
> Assigned-story reference. Can return: Story, PageItem, Oval, Rectangle or Polygon.
> _Read Only_
>
> String **filePath**
>
> File path, colon-delimited on Mac OS. Can also accept: File.
> _Read Only_
>
> Number **id**
>
> Unique numeric ID assigned to the AssignedStory.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Assignment **parent**
>
> Parent object for the AssignedStory, namely an Assignment.
> _Read Only_
>
> Number **index**
>
> Position of the AssignedStory inside its container.
> _Read Only_
>
> Events **events**
>
> Events available on this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection for this object.
> String **name**
>
> Name assigned to the AssignedStory.
> String **label**
>
> A string value can be stored in this property.
> Object **properties**
>
> Use this property to assign several properties in one operation.

### Methods

> AssignedStory **move**( LocationOptions **to**, Mixed **reference** )
>
> Relocates the assigned story according to the requested placement.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | to | Placement for the assigned story relative to the reference object or inside the container. (Optional) |
| Mixed | reference | Reference object. Note: this is required when the to parameter uses before/after placement. Can accept: Assignment or AssignedStory. (Optional) |

> **insertLabel**( String **key**, String **value** )
>
> Stores the value under the specified label key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |
| String | value | Value to store. |

> String **extractLabel**( String **key** )
>
> Retrieves the label value for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |

> String **toSource**()
>
> Builds a string which, if run, yields the AssignedStory.
> AssignedStory **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier string.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type. |
| Mixed | handler | Event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## AssignmentExportOptions

Assignment file export options.

### Class

> _Read Only_
>
> Number `EMPTY_FRAMES` = 1098073446
>
> Exports frames while leaving their content out.
> _Read Only_
>
> Number `ASSIGNED_SPREADS` = 1098073459
>
> Exports only spreads that contain assigned frames.
> _Read Only_
>
> Number **EVERYTHING** = 1098073441
>
> Exports the full document.

## AssignmentStatus

Status value for the assigment.

### Class

> _Read Only_
>
> Number `ASSIGNMENT_UP_TO_DATE` = 1096119364
>
> Indicates that the assignment has not changed.
> _Read Only_
>
> Number `ASSIGNMENT_OUT_OF_DATE` = 1095724868
>
> Indicates that the assignment changed and requires an update.
> _Read Only_
>
> Number `ASSIGNMENT_FILE_MISSING` = 1095126387
>
> Indicates that the assignment file cannot be found.

## Assignment — Instance

> _Read Only_
>
> File **documentPath**
>
> Path for the document targeted by the hyperlink destination.
> _Read Only_
>
> AssignmentStatus **assignmentFileStatus**
>
> Assignment file status value.
> _Read Only_
>
> Boolean **packaged**
>
> True when the assignment has been packaged.
> _Read Only_
>
> Boolean **packageUpToDate**
>
> True when the assignment package is current.
> _Read Only_
>
> String **filePath**
>
> Assignment file path, colon-delimited on Mac OS. Also accepts: File.
> _Read Only_
>
> Number **id**
>
> Unique identifier assigned to the Assignment.
> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> Document **parent**
>
> Assignment parent, provided as a Document.
> _Read Only_
>
> Number **index**
>
> Assignment position inside its container.
> _Read Only_
>
> Events **events**
>
> Events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection.
> _Read Only_
>
> AssignedStories **assignedStories**
>
> Assigned story collection.
> String **name**
>
> Assignment name.
> String **userName**
>
> User name applied to tracked changes and notes.
> AssignmentExportOptions **exportOptions**
>
> Content selected for export in the assignment.
> Mixed **frameColor**
>
> Color applied to frames belonging to the assignment. Return forms: Array of 3 Reals (0 - 255), UIColors enumerator, or NothingEnum enumerator.
> Boolean **includeLinksWhenPackage**
>
> True includes linked files while the assignment is being packaged.
> String **label**
>
> String-settable label property.
> Object **properties**
>
> Several properties can be assigned together through this property.

### Methods

> **update**( String **versionComments**, Boolean **forceSave** )
>
> Refreshes the assignment file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | versionComments | Comment text for this version. (Optional) |
| Boolean | forceSave | True forces a version save. (Optional) |

> **remove**()
>
> Removes both the assignment and the related file.
> File **createPackage**( File **filePath**, Boolean **submit**, Object **withProperties** )
>
> Builds an assignment package.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | filePath | Full path name for the assignment package file. |
| Boolean | submit | True submits assigned stories before package creation. (Optional) |
| Object | withProperties | Starting property values for the new Assignment. (Optional) |

> **cancelPackage**()
>
> Stops the assignment package operation.
> **insertLabel**( String **key**, String **value** )
>
> Assigns the label to the value paired with the given key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |
| String | value | Value to store. |

> String **extractLabel**( String **key** )
>
> Retrieves the label value paired with the given key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |

> String **toSource**()
>
> Produces a string that, when executed, returns the Assignment.
> Assignment **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type. |
| Mixed | handler | Event handler; accepted values are File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler; accepted values are File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## Assignments

Assignment collection.

### Instance

> _Read Only_
>
> Number **length**
>
> Collection object count.

### Methods

> Assignment **add**( File **filePath**, String **versionComments**, Boolean **forceSave**, Object **withProperties** )
>
> Creates a new assignment.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | filePath | Full path name for the new assignment. |
| String | versionComments | Comment text for this version. (Optional) |
| Boolean | forceSave | True forces a version save. (Optional) |
| Object | withProperties | Starting property values for the new Assignment. (Optional) |

> Number **count**()
>
> Shows how many elements are in the Assignment.
> Assignment **item**( Mixed **index** )
>
> Gets the Assignment identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Identifier value; accepted forms are Long Integer or String. |

> Assignment **itemByName**( String **name** )
>
> Gets the Assignment with the supplied name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> Assignment **itemByID**( Number **id** )
>
> Gets the Assignment with the supplied ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> Assignment **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the Assignments contained in the supplied range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Assignment, index, or name used as the range start. Can accept: Assignment, Long Integer or String. |
| Mixed | to | Assignment, index, or name used as the range end. Can accept: Assignment, Long Integer or String. |

> Assignment **firstItem**()
>
> Gets the first Assignment in the collection.
> Assignment **lastItem**()
>
> Gets the last Assignment in the collection.
> Assignment **middleItem**()
>
> Gets the middle Assignment in the collection.
> Assignment **previousItem**( Assignment **obj** )
>
> Gets the Assignment whose index comes before the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Assignment | obj | Index of the Assignment that follows the wanted Assignment. |

> Assignment **nextItem**( Assignment **obj** )
>
> Gets the Assignment whose index comes after the supplied Assignment in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Assignment | obj | Assignment whose index precedes the wanted Assignment. |

> Assignment **anyItem**()
>
> Gets any Assignment from the collection.
> Assignment **everyItem**()
>
> Gets every Assignment in the collection.
> String **toSource**()
>
> Produces a string that, when executed, returns the Assignment.
> Assignment **[]**( Number **index** )
>
> Gets the Assignment with the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## AttachedDevices

Attached device type values.

### Class

> _Read Only_
>
> Number **ALL** = 1634495520
>
> All devices, with Android before iOS.
> _Read Only_
>
> Number **ANDROID** = 1685086564
>
> Android device category.
> _Read Only_
>
> Number **IOS** = 1684631411
>
> iOS device category.

## AutoCorrectPreference — Instance

> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> AutoCorrectPreference parent, provided as a Application.
> _Read Only_
>
> Events **events**
>
> Events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection.
> Boolean **autoCorrect**
>
> True automatically fixes misspellings present in the auto-correct table.
> Boolean **autoCorrectCapitalizationErrors**
>
> True automatically fixes capitalization errors listed in the auto-correct table.
> Object **properties**
>
> Several properties can be assigned together through this property.

### Methods

> String **toSource**()
>
> Produces a string that, when executed, returns the AutoCorrectPreference.
> AutoCorrectPreference **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type. |
| Mixed | handler | Event handler; accepted values are File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler; accepted values are File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## AutoCorrectTable

Auto-correct table object.

### Instance

> _Read Only_
>
> String **name**
>
> AutoCorrectTable name.
> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> AutoCorrectTable parent, provided as a Application.
> _Read Only_
>
> Number **index**
>
> AutoCorrectTable position inside its container.
> _Read Only_
>
> Events **events**
>
> Events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection.
> Mixed **autoCorrectWordPairList**
>
> Auto-correct word pair data, expressed as a misspelled word paired with its correction. Can return: Array of Arrays of 2 Strings.
> Object **properties**
>
> Several properties can be assigned together through this property.

### Methods

> String **toSource**()
>
> Produces a string that, when executed, returns the AutoCorrectTable.
> AutoCorrectTable **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type. |
| Mixed | handler | Event handler; accepted values are File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler; accepted values are File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## AutoCorrectTables

Auto-correct table collection.

### Instance

> _Read Only_
>
> Number **length**
>
> Collection object count.

### Methods

> Number **count**()
>
> Shows how many elements are in the AutoCorrectTable.
> AutoCorrectTable **item**( Mixed **index** )
>
> Gets the AutoCorrectTable identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Identifier value; accepted forms are Long Integer or String. |

> AutoCorrectTable **itemByName**( String **name** )
>
> Gets the AutoCorrectTable with the supplied name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> AutoCorrectTable **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the AutoCorrectTables contained in the supplied range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | AutoCorrectTable, index, or name used as the range start. Can accept: AutoCorrectTable, Long Integer or String. |
| Mixed | to | AutoCorrectTable, index, or name used as the range end. Can accept: AutoCorrectTable, Long Integer or String. |

> AutoCorrectTable **firstItem**()
>
> Gets the first AutoCorrectTable in the collection.
> AutoCorrectTable **lastItem**()
>
> Gets the last AutoCorrectTable in the collection.
> AutoCorrectTable **middleItem**()
>
> Gets the middle AutoCorrectTable in the collection.
> AutoCorrectTable **previousItem**( AutoCorrectTable **obj** )
>
> Gets the AutoCorrectTable whose index comes before the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| AutoCorrectTable | obj | Index of the AutoCorrectTable that follows the wanted AutoCorrectTable. |

> AutoCorrectTable **nextItem**( AutoCorrectTable **obj** )
>
> Gets the AutoCorrectTable whose index comes after the supplied AutoCorrectTable in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| AutoCorrectTable | obj | AutoCorrectTable whose index precedes the wanted AutoCorrectTable. |

> AutoCorrectTable **anyItem**()
>
> Gets any AutoCorrectTable from the collection.
> AutoCorrectTable **everyItem**()
>
> Gets every AutoCorrectTable in the collection.
> String **toSource**()
>
> Produces a string that, when executed, returns the AutoCorrectTable.
> AutoCorrectTable **[]**( Number **index** )
>
> Gets the AutoCorrectTable with the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## AutoEnum

Default value setting.

### Class

> _Read Only_
>
> Number `AUTO_VALUE` = 1635087471
>
> Applies the automatically defined default value for the object, using its parent or another object type as context.

## AutoSizingReferenceEnum

Reference points for text auto sizing.

### Class

> _Read Only_
>
> Number `TOP_LEFT_POINT` = 1953459301
>
> Bounding box top-left point.
> _Read Only_
>
> Number `TOP_CENTER_POINT` = 1953456997
>
> Center point on the bounding box top edge.
> _Read Only_
>
> Number `TOP_RIGHT_POINT` = 1953460841
>
> Bounding box top-right point.
> _Read Only_
>
> Number `LEFT_CENTER_POINT` = 1818583909
>
> Center point on the bounding box left edge.
> _Read Only_
>
> Number `CENTER_POINT` = 1668183154
>
> Bounding box center point.
> _Read Only_
>
> Number `RIGHT_CENTER_POINT` = 1919509349
>
> Center point on the bounding box right edge.
> _Read Only_
>
> Number `BOTTOM_LEFT_POINT` = 1651469413
>
> Bounding box bottom-left point.
> _Read Only_
>
> Number `BOTTOM_CENTER_POINT` = 1651467109
>
> Bounding box bottom-edge center point.
> _Read Only_
>
> Number `BOTTOM_RIGHT_POINT` = 1651470953
>
> Bounding box bottom-right point.

## AutoSizingTypeEnum

Text auto-sizing type options.

### Class

> _Read Only_
>
> Number **OFF** = 1330005536
>
> Disables text frame auto-sizing.
> _Read Only_
>
> Number `HEIGHT_ONLY` = 1751476583
>
> Resizes the text frame only along the height dimension.
> _Read Only_
>
> Number `WIDTH_ONLY` = 2003395700
>
> Resizes the text frame only along the width dimension.
> _Read Only_
>
> Number `HEIGHT_AND_WIDTH` = 1752069993
>
> Resizes the text frame in both(height and width) dimensions.
> _Read Only_
>
> Number `HEIGHT_AND_WIDTH_PROPORTIONALLY` = 1752070000
>
> Resizes the text frame proportionally in both(height and width) dimensions.
