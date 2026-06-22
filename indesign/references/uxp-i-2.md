# Images, Ime Preference, Import Export Event, Import Format ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Images; IMEPreference; ImportExportEvent; ImportFormat; ImportPlatform; ImportedPageAttribute; ImportedPageCropOptions.

## Images

Collection of bitmap images from bitmap file formats, including TIFF, JPEG, or GIF.

### Instance

> _Read Only_
>
> Number **length**
>
> Number of objects in the collection.

### Methods

> Number **count**()
>
> Displays how many elements are in the Image.
> Image **item**( Mixed **index** )
>
> Returns the Image identified by the specified index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index/name selector. Accepted forms: Long Integer or a String. |

> Image **itemByName**( String **name** )
>
> Returns the Image with the supplied name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> Image **itemByID**( Number **id** )
>
> Returns the Image with the supplied ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> Image **itemByRange**( Mixed **from**, Mixed **to** )
>
> Returns the Images in the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start selector: Image, Long Integer, or a String. |
| Mixed | to | Range end selector: Image, Long Integer, or a String. |

> Image **firstItem**()
>
> Gets the first Image in the collection.
> Image **lastItem**()
>
> Gets the last Image in the collection.
> Image **middleItem**()
>
> Gets the collection's middle Image.
> Image **previousItem**( Image **obj** )
>
> Gets the Image immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Image | obj | Image positioned after the desired Image. |

> Image **nextItem**( Image **obj** )
>
> Returns the Image whose index comes after the specified Image in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Image | obj | Image positioned immediately before the target Image. |

> Image **anyItem**()
>
> Gets any Image in the collection.
> Image **everyItem**()
>
> Gets every Image in the collection.
> String **toSource**()
>
> Generates a string that, when executed, returns the Image.
> Image **[]**( Number **index** )
>
> Gets the Image at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index to use. |

## IMEPreference

Preferences for input method editor (IME) behavior.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> true when the object specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent of the IMEPreference, an Application.
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
> Boolean **inlineInput**
>
> true allows inline input for non-Latin text.
> Boolean **useNativeDigits**
>
> true uses native digits for Arabic languages.
> Object **properties**
>
> Property used to set several properties together.

### Methods

> String **toSource**()
>
> Generates a string that, when executed, returns the IMEPreference.
> IMEPreference **getElements**()
>
> Turns the object specifier into an object-reference array.
> String **toSpecifier**()
>
> Returns the object specifier string.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type. |
| Mixed | handler | Event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Optional legacy captures flag. |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Optional legacy captures flag. |

## ImportExportEvent

Event used for import or export activity.

### Class

> _Read Only_
>
> String `BEFORE_EXPORT` = beforeExport
>
> Fires before an ImportExportEvent export operation begins. The event bubbles, and callers can cancel it.
> _Read Only_
>
> String `AFTER_EXPORT` = afterExport
>
> Fires once an ImportExportEvent export operation has completed. The event bubbles, and cancellation is not supported.
> _Read Only_
>
> String `BEFORE_IMPORT` = beforeImport
>
> Fires before a file is imported into an ImportExportEvent. The event bubbles, and callers can cancel it.
> _Read Only_
>
> String `AFTER_IMPORT` = afterImport
>
> Fires after a file import into an ImportExportEvent completes. The event bubbles, and cancellation is not supported.
> _Read Only_
>
> String `FAILED_EXPORT` = failedExport
>
> Fires when an ImportExportEvent export is canceled or fails. The event bubbles, and cancellation is not supported.

### Instance

> _Read Only_
>
> File **fullName**
>
> Complete path for the ImportExportEvent, including the ImportExportEvent name.
> _Read Only_
>
> String **format**
>
> Import or export file format.
> _Read Only_
>
> String **eventType**
>
> Event name.
> _Read Only_
>
> Object **target**
>
> Object that receives the event.
> _Read Only_
>
> Object **currentTarget**
>
> Current target reached while the event propagates.
> _Read Only_
>
> EventPhases **eventPhase**
>
> Propagation phase currently being processed for the event.
> _Read Only_
>
> Boolean **bubbles**
>
> When true, propagation can include the bubbling phase.
> _Read Only_
>
> Boolean **cancelable**
>
> When true, the target's default event action can be canceled.
> _Read Only_
>
> Date **timeStamp**
>
> Time at which the event was initialized.
> _Read Only_
>
> Boolean **propagationStopped**
>
> When true, event propagation has been stopped past the current target.
> _Read Only_
>
> Boolean **defaultPrevented**
>
> When true, the target's default event action has already been canceled.
> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the ImportExportEvent.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent of the ImportExportEvent, either a Application or Document.
> _Read Only_
>
> Number **index**
>
> Position of the ImportExportEvent inside its containing object.
> UserInteractionLevels **userInteractionLevel**
>
> Determines whether dialogs and alerts appear while scripts run.
> Object **properties**
>
> Lets several properties be assigned in one operation.

### Methods

> **stopPropagation**()
>
> Stops the event from propagating beyond the current target.
> **preventDefault**()
>
> Cancels the target's default event action.
> String **toSource**()
>
> Builds a string that, when executed, returns the ImportExportEvent.
> ImportExportEvent **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.

## ImportFormat

Options for importing styles.

### Class

> _Read Only_
>
> Number `CHARACTER_STYLES_FORMAT` = 1131565940
>
> Brings in character styles.
> _Read Only_
>
> Number `PARAGRAPH_STYLES_FORMAT` = 1885885300
>
> Brings in paragraph styles.
> _Read Only_
>
> Number `TEXT_STYLES_FORMAT` = 1668305780
>
> Brings in both character and paragraph styles.
> _Read Only_
>
> Number `TOC_STYLES_FORMAT` = 1415795572
>
> Brings in table of contents styles.
> _Read Only_
>
> Number `OBJECT_STYLES_FORMAT` = 1332368244
>
> Brings in object styles.
> _Read Only_
>
> Number `STROKE_STYLES_FORMAT` = 1817408620
>
> Brings in stroke styles.
> _Read Only_
>
> Number `TABLE_STYLES_FORMAT` = 1700033396
>
> Brings in table styles.
> _Read Only_
>
> Number `CELL_STYLES_FORMAT` = 1698919284
>
> Brings in cell styles.
> _Read Only_
>
> Number `TABLE_AND_CELL_STYLES_FORMAT` = 1700021107
>
> Brings in table and cell styles together.

## ImportPlatform

Options for import platform selection.

### Class

> _Read Only_
>
> Number **MACINTOSH** = 1296130931
>
> Macintosh platform.
> _Read Only_
>
> Number **PC** = 1466852474
>
> Windows platform.

## ImportedPageAttribute

Attribute data for a placed InDesign page.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent of the ImportedPageAttribute, a Application.
> _Read Only_
>
> Events **events**
>
> Collection of events.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Collection of event listeners.
> Number **pageNumber**
>
> Selects which page of the InDesign document is imported. This is read only for page items.
> ImportedPageCropOptions **importedPageCrop**
>
> Sets cropping for the imported InDesign page. This is read only for page items.
> Object **properties**
>
> Lets several properties be assigned in one operation.

### Methods

> String **toSource**()
>
> Builds a string that, when executed, returns the ImportedPageAttribute.
> ImportedPageAttribute **getElements**()
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

## ImportedPageCropOptions

Cropping option for an imported InDesign page.

### Class

> _Read Only_
>
> Number `CROP_CONTENT` = 1131573315
>
> Uses the page bounding box for placement.
> _Read Only_
>
> Number `CROP_BLEED` = 1131573314
>
> Uses the page bleed area for placement.
> _Read Only_
>
> Number `CROP_SLUG` = 1131565932
>
> Uses the page slug area for placement.
