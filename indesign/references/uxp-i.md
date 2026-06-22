# Icc Profiles, Icon Sizes, Idle Event, Idle Task ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: ICCProfiles; IconSizes; IdleEvent; IdleTask; IdleTasks; ImageAlignmentType; ImageConversion; ImageDataTypes; ImageExportOption; ImageFormat; ImageIOPreference; ImagePageBreakType; ImagePreference — Instance; ImageResolution; ImageSizeOption.

## ICCProfiles

Controls which ICC profiles are included in the PDF document.

### Class

> _Read Only_
>
> Number `INCLUDE_NONE` = 1229144942
>
> Leaves ICC profiles out.
> _Read Only_
>
> Number `INCLUDE_ALL` = 1229144929
>
> Adds every ICC profile.
> _Read Only_
>
> Number `INCLUDE_TAGGED` = 1229144948
>
> Adds tagged source profiles.
> _Read Only_
>
> Number `INCLUDE_RGB_AND_TAGGED` = 1229144946
>
> Adds RGB profiles plus tagged source CMYK profiles.

## IconSizes

Options for icon sizing.

### Class

> _Read Only_
>
> Number `EXTRA_SMALL_ICON` = 1885696877
>
> Selects an extra small icon.
> _Read Only_
>
> Number `SMALL_ICON` = 1886612844
>
> Selects a small icon.
> _Read Only_
>
> Number `MEDIUM_ICON` = 1886217572
>
> Selects a medium icon.
> _Read Only_
>
> Number `LARGE_ICON` = 1884058215
>
> Selects a large icon.
> _Read Only_
>
> Number `EXTRA_LARGE_ICON` = 1885695079
>
> Selects an extra large icon.
> _Read Only_
>
> Number `JUMBO_ICON` = 1886943340
>
> Selects a jumbo icon.

## IdleEvent

Idle event object.

### Class

> _Read Only_
>
> String `ON_IDLE` = onIdle
>
> IdleEvent dispatches this at idle time; the event does not bubble and cannot be canceled.

### Instance

> _Read Only_
>
> Number **timeAllocated**
>
> Time allocated to this task when the event was dispatched.
> _Read Only_
>
> String **eventType**
>
> Event name.
> _Read Only_
>
> Object **target**
>
> Event target object.
> _Read Only_
>
> Object **currentTarget**
>
> Current propagation target for the event.
> _Read Only_
>
> EventPhases **eventPhase**
>
> Current propagation phase for the event.
> _Read Only_
>
> Boolean **bubbles**
>
> True means the event supports the bubbling propagation phase.
> _Read Only_
>
> Boolean **cancelable**
>
> True means the event target's default behavior can be canceled.
> _Read Only_
>
> Date **timeStamp**
>
> Time at which the event was initialized.
> _Read Only_
>
> Boolean **propagationStopped**
>
> True means propagation past the current target has stopped.
> _Read Only_
>
> Boolean **defaultPrevented**
>
> True means the event target's default behavior has been canceled.
> _Read Only_
>
> Number **id**
>
> Identifier assigned uniquely to the IdleEvent.
> _Read Only_
>
> Boolean **isValid**
>
> True indicates that the object specifier resolves to valid objects.
> _Read Only_
>
> IdleTask **parent**
>
> Owning IdleTask for the IdleEvent.
> _Read Only_
>
> Number **index**
>
> Position of the IdleEvent inside its container.
> Object **properties**
>
> Lets several properties be assigned in one operation.

### Methods

> **stopPropagation**()
>
> Stops event propagation past the current target.
> **preventDefault**()
>
> Cancels the event target's default behavior.
> String **toSource**()
>
> Builds a string that returns the IdleEvent when executed.
> IdleEvent **getElements**()
>
> Resolves the object specifier and returns an array of object references.
> String **toSpecifier**()
>
> Reads the object's specifier string.

## IdleTask

Attachable idle task object.

### Class

> _Read Only_
>
> String `ON_IDLE` = onIdle
>
> Fires for this IdleTask while the application is idle. The event stays local, cannot bubble, and cannot be canceled.

### Instance

> _Read Only_
>
> Number **id**
>
> Unique numeric identifier for the IdleTask.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent Application for this IdleTask.
> _Read Only_
>
> Number **index**
>
> Position of the IdleTask inside its containing object.
> _Read Only_
>
> Events **events**
>
> Event collection for this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection for this object.
> String **name**
>
> IdleTask name.
> Number **sleep**
>
> Delay, in milliseconds, before this task is called again. A value of zero deletes the task.
> String **label**
>
> User-settable string label.
> Object **properties**
>
> Lets several properties be assigned in one operation.

### Methods

> **remove**()
>
> Removes the IdleTask.
> **insertLabel**( String **key**, String **value** )
>
> Stores value under the specified key for the label.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Label key. |
| String | value | Label value. |

> String **extractLabel**( String **key** )
>
> Returns the label value stored for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Label key. |

> String **toSource**()
>
> Builds a string that, when executed, returns the IdleTask.
> IdleTask **getElements**()
>
> Resolves the object specifier and returns an array of object references.
> String **toSpecifier**()
>
> Returns the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type to listen for. |
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

## IdleTasks

Collection of idle tasks that can be attached.

### Instance

> _Read Only_
>
> Number **length**
>
> Object count in the collection.

### Methods

> IdleTask **add**( Object **withProperties** )
>
> Creates an IdleTask.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Initial property values for the new IdleTask. (Optional) |

> Number **count**()
>
> Shows how many elements are in the IdleTask collection.
> IdleTask **item**( Mixed **index** )
>
> Gets the IdleTask identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Lookup identifier. Can accept: Long Integer or String. |

> IdleTask **itemByName**( String **name** )
>
> Gets the IdleTask whose name matches.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> IdleTask **itemByID**( Number **id** )
>
> Looks up the IdleTask by ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> IdleTask **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets IdleTasks spanning the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start, supplied as an IdleTask, index, or name. Can accept: IdleTask, Long Integer or String. |
| Mixed | to | Range end, supplied as an IdleTask, index, or name. Can accept: IdleTask, Long Integer or String. |

> IdleTask **firstItem**()
>
> Gets the first IdleTask in the collection.
> IdleTask **lastItem**()
>
> Gets the last IdleTask in the collection.
> IdleTask **middleItem**()
>
> Gets the middle IdleTask in the collection.
> IdleTask **previousItem**( IdleTask **obj** )
>
> Gets the IdleTask immediately before the supplied one by index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| IdleTask | obj | IdleTask that follows the one being requested. |

> IdleTask **nextItem**( IdleTask **obj** )
>
> Gets the IdleTask immediately after the supplied one in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| IdleTask | obj | IdleTask that comes before the one being requested. |

> IdleTask **anyItem**()
>
> Gets any IdleTask in the collection.
> IdleTask **everyItem**()
>
> Gets every IdleTask in the collection.
> String **toSource**()
>
> Builds a string that, when executed, returns the IdleTask.
> IdleTask **[]**( Number **index** )
>
> Gets the IdleTask at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index to retrieve. |

## ImageAlignmentType

Image alignment type used for objects.

### Class

> _Read Only_
>
> Number `ALIGN_LEFT` = 1097616486
>
> Aligns the image left.
> _Read Only_
>
> Number `ALIGN_CENTER` = 1097614194
>
> Centers the image.
> _Read Only_
>
> Number `ALIGN_RIGHT` = 1097618036
>
> Aligns the image right.

## ImageConversion

Choices that control the file format used for image conversion.

### Class

> _Read Only_
>
> Number **AUTOMATIC** = 1768059764
>
> Selects the best format for the image.
> _Read Only_
>
> Number **JPEG** = 1785751398
>
> Converts every image to JPEG.
> _Read Only_
>
> Number **GIF** = 1734960742
>
> Converts every image to GIF.
> _Read Only_
>
> Number **PNG** = 1397059687
>
> Converts every image to PNG.

## ImageDataTypes

Settings for sending image data to a printer or file.

### Class

> _Read Only_
>
> Number `ALL_IMAGE_DATA` = 1853058416
>
> Outputs full-resolution data.
> _Read Only_
>
> Number `OPTIMIZED_SUBSAMPLING` = 1869640563
>
> Outputs only enough data for graphics to print at the highest resolution the output device supports.
> _Read Only_
>
> Number `PROXY_IMAGE_DATA` = 1819243130
>
> Outputs 72 dpi screen-resolution versions of placed bitmap images.
> _Read Only_
>
> Number **NONE** = 1852796517
>
> Prints graphic frames as crossbar placeholders instead of graphics.

## ImageExportOption

Options that choose the exported image form.

### Class

> _Read Only_
>
> Number `ORIGINAL_IMAGE` = 1700949874
>
> Keeps the original image.
> _Read Only_
>
> Number `OPTIMIZED_IMAGE` = 1700949872
>
> Uses an optimized image.
> _Read Only_
>
> Number `LINK_TO_SERVER` = 1700949107
>
> Points to server.

## ImageFormat

File-format choices for image conversion.

### Class

> _Read Only_
>
> Number **JPEG** = 1785751398
>
> Uses JPEG for the selected object.
> _Read Only_
>
> Number **GIF** = 1734960742
>
> Uses GIF for the selected object.
> _Read Only_
>
> Number **PNG** = 1397059687
>
> Uses PNG for the selected object.

## ImageIOPreference

Preferences for image I/O.

### Instance

> _Read Only_
>
> Number **previewResolution**
>
> Import-time image resolution in ppi.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the ImageIOPreference; type Application or Image.
> _Read Only_
>
> Events **events**
>
> Event collection for this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection for this object.
> Boolean **applyPhotoshopClippingPath**
>
> When true, placed images use clipping paths defined in Photoshop.
> Boolean **allowAutoEmbedding**
>
> When true, auto embedding is allowed.
> String **alphaChannelName**
>
> Alpha channel name.
> Object **properties**
>
> Lets several properties be assigned in one operation.

### Methods

> String **toSource**()
>
> Builds a string that, when executed, returns the ImageIOPreference.
> ImageIOPreference **getElements**()
>
> Resolves the object specifier and returns an array of object references.
> String **toSpecifier**()
>
> Returns the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type to listen for. |
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

## ImagePageBreakType

Image page break choices.

### Class

> _Read Only_
>
> Number `PAGE_BREAK_BEFORE` = 1114792550
>
> Places a page break before the image.
> _Read Only_
>
> Number `PAGE_BREAK_AFTER` = 1114792294
>
> Places a page break after the image.
> _Read Only_
>
> Number `PAGE_BREAK_BEFORE_AND_AFTER` = 1114792545
>
> Places page breaks before and after the image.

## ImagePreference — Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent Application for this ImagePreference.
> _Read Only_
>
> Events **events**
>
> Event collection for this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection for this object.
> Boolean **preserveBounds**
>
> When true, image bounds are preserved during relinking.
> Object **properties**
>
> Lets several properties be assigned in one operation.

### Methods

> String **toSource**()
>
> Builds a string that, when executed, returns the ImagePreference.
> ImagePreference **getElements**()
>
> Resolves the object specifier and returns an array of object references.
> String **toSpecifier**()
>
> Returns the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type to listen for. |
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

## ImageResolution

Resolution setting for the converted object image.

### Class

> _Read Only_
>
> Number `PPI_72` = 1920160628
>
> 72 pixels per inch
> _Read Only_
>
> Number `PPI_96` = 1920159347
>
> 96 pixels per inch
> _Read Only_
>
> Number `PPI_150` = 1920151654
>
> 150 pixels per inch
> _Read Only_
>
> Number `PPI_300` = 1920160872
>
> 300 pixels per inch

## ImageSizeOption

Controls how a converted object's image size is determined.

### Class

> _Read Only_
>
> Number `SIZE_FIXED` = 1182295162
>
> Uses an absolute image size.
> _Read Only_
>
> Number `SIZE_RELATIVE_TO_TEXT_FLOW` = 1383486566
>
> Sizes the image in relation to the text flow.
