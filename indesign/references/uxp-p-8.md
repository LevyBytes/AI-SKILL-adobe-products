# Pdfjpeg Quality Options, Pdfx Standards, Percent Combobox, Percent Comboboxes ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: PDFJPEGQualityOptions; PDFXStandards; PercentCombobox; PercentComboboxes; PercentEditbox; PercentEditboxes; PerformanceMetricOptions; PICTs.

## PDFJPEGQualityOptions

PDF JPEG Quality settings.

## PDFXStandards

Settings that choose the PDF/X compliance standard.

### Class

> _Read Only_
>
> Number **NONE** = 1852796517
>
> Skips validation against any PDF/X standard.
> _Read Only_
>
> Number `PDFX1A2001_STANDARD` = 1396912481
>
> Validates against PDF/X-1a:2001.
> _Read Only_
>
> Number `PDFX32002_STANDARD` = 1396922419
>
> Validates against PDF/X-3:2002.
> _Read Only_
>
> Number `PDFX1A2003_STANDARD` = 1395745075
>
> Validates against PDF/X-1a:2003.
> _Read Only_
>
> Number `PDFX32003_STANDARD` = 1398289203
>
> Validates against PDF/X-3:2003.
> _Read Only_
>
> Number `PDFX42010_STANDARD` = 1398289496
>
> Uses the PDFX42010 standard.

## PercentCombobox

A percentage input control that combines a pop-up menu with an entry field.

### Instance

> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the PercentCombobox.
> _Read Only_
>
> Boolean **isValid**
>
> Indicates whether the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent container for the PercentCombobox, which may be a DialogColumn, DialogRow, EnablingGroup or BorderPanel.
> _Read Only_
>
> Number **index**
>
> Position of the PercentCombobox inside its containing object.
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
> String **stringList**
>
> Array of strings used as menu items for a dropdown or combobox control.
> Number **minimumValue**
>
> Lowest numeric value the user may type in a numeric editbox or combobox. Note: for a measurement editbox or combobox, the value is read as points no matter which edit units the control specifies; when the dialog opens, that point value is converted automatically to the edit unit.
> Number **maximumValue**
>
> Highest numeric value the user may type in a numeric editbox or combobox. Note: for a measurement editbox or combobox, the value is read as points no matter which edit units the control specifies; when the dialog opens, that point value is converted automatically to the edit unit.
> Number **smallNudge**
>
> Increment or decrement applied when the selected control receives an arrow-key press.
> Number **largeNudge**
>
> Increment or decrement applied when the selected control receives an arrow-key press while Shift is held.
> String **editContents**
>
> Default text for an editbox control. Note: do not set both editContents and editValue; when both appear, the script uses whichever one is encountered later.
> Number **editValue**
>
> Default real-number value for the editbox or combobox. Note: measurement controls interpret the value as points, and the dialog converts that point value to edit units when it opens. Note: do not set both editValue and editContents; when both appear, the script uses whichever one is encountered later.
> Number **minWidth**
>
> Control width; for an editbox or combobox, this defines the box's minimum width.
> Object **properties**
>
> Property used to set several properties in one operation.

### Methods

> String **toSource**()
>
> Builds a string that returns the PercentCombobox when evaluated.
> PercentCombobox **getElements**()
>
> Resolves the object specifier and produces an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type to listen for. |
| Mixed | handler | Handler for the event. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type that was registered. |
| Mixed | handler | Handler that was registered. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## PercentComboboxes

A collection containing percent comboboxes.

### Instance

> _Read Only_
>
> Number **length**
>
> Object count in the collection.

### Methods

> PercentCombobox **add**( Object **withProperties** )
>
> Creates a PercentCombobox.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the new PercentCombobox. (Optional) |

> Number **count**()
>
> Shows how many elements the PercentCombobox contains.
> PercentCombobox **item**( Mixed **index** )
>
> Gets the PercentCombobox identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Lookup value by index or by name. Accepted forms: Long Integer or String. |

> PercentCombobox **itemByID**( Number **id** )
>
> Gets the PercentCombobox identified by ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> PercentCombobox **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the PercentComboboxes inside the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | PercentCombobox, index, or name that starts the range. Can accept: PercentCombobox, Long Integer or String. |
| Mixed | to | PercentCombobox, index, or name that ends the range. Can accept: PercentCombobox, Long Integer or String. |

> PercentCombobox **firstItem**()
>
> Gets the collection's first PercentCombobox.
> PercentCombobox **lastItem**()
>
> Gets the collection's last PercentCombobox.
> PercentCombobox **middleItem**()
>
> Gets the middle PercentCombobox in the collection.
> PercentCombobox **previousItem**( PercentCombobox **obj** )
>
> Gets the PercentCombobox whose index comes immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PercentCombobox | obj | Index of the PercentCombobox that follows the wanted PercentCombobox. |

> PercentCombobox **nextItem**( PercentCombobox **obj** )
>
> Gets the PercentCombobox whose index comes immediately after the specified PercentCombobox in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PercentCombobox | obj | PercentCombobox whose index is before the wanted PercentCombobox. |

> PercentCombobox **anyItem**()
>
> Gets any PercentCombobox in the collection.
> PercentCombobox **everyItem**()
>
> Gets every PercentCombobox in the collection.
> String **toSource**()
>
> Builds a string that returns the PercentCombobox when evaluated.
> PercentCombobox **[]**( Number **index** )
>
> Gets the PercentCombobox at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## PercentEditbox

A field for percentage entry.

### Instance

> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the PercentEditbox.
> _Read Only_
>
> Boolean **isValid**
>
> Indicates whether the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent container for the PercentEditbox, which may be a DialogColumn, DialogRow, EnablingGroup or BorderPanel.
> _Read Only_
>
> Number **index**
>
> Position of the PercentEditbox inside its containing object.
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
> Number **minimumValue**
>
> Lowest numeric value the user may type in a numeric editbox or combobox. Note: for a measurement editbox or combobox, the value is read as points no matter which edit units the control specifies; when the dialog opens, that point value is converted automatically to the edit unit.
> Number **maximumValue**
>
> Highest numeric value the user may type in a numeric editbox or combobox. Note: for a measurement editbox or combobox, the value is read as points no matter which edit units the control specifies; when the dialog opens, that point value is converted automatically to the edit unit.
> Number **smallNudge**
>
> Increment or decrement applied when the selected control receives an arrow-key press.
> Number **largeNudge**
>
> Increment or decrement applied when the selected control receives an arrow-key press while Shift is held.
> String **editContents**
>
> Default text for an editbox control. Note: do not set both editContents and editValue; when both appear, the script uses whichever one is encountered later.
> Number **editValue**
>
> Default real-number value for the editbox or combobox. Note: measurement controls interpret the value as points, and the dialog converts that point value to edit units when it opens. Note: do not set both editValue and editContents; when both appear, the script uses whichever one is encountered later.
> Number **minWidth**
>
> Control width; for an editbox or combobox, this defines the box's minimum width.
> Object **properties**
>
> Property used to set several properties in one operation.

### Methods

> String **toSource**()
>
> Builds a string that returns the PercentEditbox when evaluated.
> PercentEditbox **getElements**()
>
> Resolves the object specifier and produces an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type to listen for. |
| Mixed | handler | Handler for the event. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type that was registered. |
| Mixed | handler | Handler that was registered. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## PercentEditboxes

A collection containing percent editboxes.

### Instance

> _Read Only_
>
> Number **length**
>
> Object count in the collection.

### Methods

> PercentEditbox **add**( Object **withProperties** )
>
> Creates a PercentEditbox.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the new PercentEditbox. (Optional) |

> Number **count**()
>
> Shows how many elements the PercentEditbox contains.
> PercentEditbox **item**( Mixed **index** )
>
> Gets the PercentEditbox identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Lookup value by index or by name. Accepted forms: Long Integer or String. |

> PercentEditbox **itemByID**( Number **id** )
>
> Gets the PercentEditbox identified by ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> PercentEditbox **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the PercentEditboxes inside the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | PercentEditbox, index, or name that starts the range. Can accept: PercentEditbox, Long Integer or String. |
| Mixed | to | PercentEditbox, index, or name that ends the range. Can accept: PercentEditbox, Long Integer or String. |

> PercentEditbox **firstItem**()
>
> Gets the collection's first PercentEditbox.
> PercentEditbox **lastItem**()
>
> Gets the collection's last PercentEditbox.
> PercentEditbox **middleItem**()
>
> Gets the middle PercentEditbox in the collection.
> PercentEditbox **previousItem**( PercentEditbox **obj** )
>
> Gets the PercentEditbox whose index comes immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PercentEditbox | obj | Index of the PercentEditbox that follows the wanted PercentEditbox. |

> PercentEditbox **nextItem**( PercentEditbox **obj** )
>
> Gets the PercentEditbox whose index comes immediately after the specified PercentEditbox in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PercentEditbox | obj | PercentEditbox whose index is before the wanted PercentEditbox. |

> PercentEditbox **anyItem**()
>
> Gets any PercentEditbox in the collection.
> PercentEditbox **everyItem**()
>
> Gets every PercentEditbox in the collection.
> String **toSource**()
>
> Builds a string that returns the PercentEditbox when evaluated.
> PercentEditbox **[]**( Number **index** )
>
> Gets the PercentEditbox at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## PerformanceMetricOptions

Performance metric settings.

### Class

> _Read Only_
>
> Number `CPU_TIME` = 1668314484
>
> Measures CPU time.
> _Read Only_
>
> Number `NUMBER_OF_THREADS` = 1853122674
>
> Reports thread count.
> _Read Only_
>
> Number `OVERALL_SYSTEM_CPU` = 1399025781
>
> Reports overall system CPU.
> _Read Only_
>
> Number `OVERALL_USER_CPU` = 1432580213
>
> Reports overall user CPU.
> _Read Only_
>
> Number `CORE_ALLOCATION_COUNT` = 1128361059
>
> Tracks core allocation count.
> _Read Only_
>
> Number `CORE_MEMORY_SIZE` = 1129539962
>
> Tracks core memory size.
> _Read Only_
>
> Number `RESIDENT_MEMORY_SIZE` = 1381198202
>
> Tracks resident memory size.
> _Read Only_
>
> Number `VIRTUAL_MEMORY_SIZE` = 1448307066
>
> Tracks virtual memory size.
> _Read Only_
>
> Number `CURRENT_MEMORY_MARK` = 1296921195
>
> Tracks current memory mark.
> _Read Only_
>
> Number `HANDLE_COUNT` = 1212378740
>
> Tracks handle count.
> _Read Only_
>
> Number `GDI_OBJECT_COUNT` = 1195657582
>
> Tracks GDI object count.
> _Read Only_
>
> Number `HEAP_ALLOCATIONS` = 1212247148
>
> Tracks heap allocation totals.
> _Read Only_
>
> Number `HEAP_ALLOCATIONS_PEAK` = 1212239979
>
> Tracks peak heap allocations.
> _Read Only_
>
> Number `MEMORY_PURGE_COUNT` = 1297105780
>
> Tracks memory purge count.
> _Read Only_
>
> Number `MEMORY_PURGE_TIME` = 1297110125
>
> Tracks memory purge time.
> _Read Only_
>
> Number `BIB_ALLOCATIONS` = 1112097345
>
> Tracks BIB allocation totals.
> _Read Only_
>
> Number `BIB_ALLOCATIONS_PEAK` = 1111576683
>
> Tracks peak BIB allocations.
> _Read Only_
>
> Number `BIB_CACHE` = 1112097379
>
> Tracks BIB cache usage.
> _Read Only_
>
> Number `BIB_CACHE_PEAK` = 1111707755
>
> Tracks peak BIB cache usage.
> _Read Only_
>
> Number `PDF_ALLOCACTIONS` = 1346651713
>
> Tracks PDF allocactions.
> _Read Only_
>
> Number `PDF_ALLOCACTIONS_PEAK` = 1346650475
>
> Tracks peak PDF allocactions.
> _Read Only_
>
> Number `IMAGE_CACHE_ALLOCATIONS` = 1231897409
>
> Tracks image cache allocations.
> _Read Only_
>
> Number `IMAGE_CACHE_ALLOCATIONS_PEAK` = 1229144427
>
> Tracks peak image cache allocations.
> _Read Only_
>
> Number `IMAGE_CACHE_FILE_BYTES_READ` = 1231901284
>
> Tracks image cache file bytes read.
> _Read Only_
>
> Number `IMAGE_CACHE_FILE_BYTES_WRITTEN` = 1231902578
>
> Tracks image cache file bytes written.
> _Read Only_
>
> Number `IMAGE_CACHE_FILE_READ_TIME` = 1229148772
>
> Tracks image cache file read time.
> _Read Only_
>
> Number `IMAGE_CACHE_FILE_WRITE_TIME` = 1229150066
>
> Tracks image cache file write time.
> _Read Only_
>
> Number **VXFERALLOC** = 1448633921
>
> Tracks VXferAlloc.
> _Read Only_
>
> Number **VXFERALLOCPEAK** = 1448624491
>
> Tracks VXferAllocPeak.
> _Read Only_
>
> Number **VXFERBYTESREAD** = 1448633938
>
> Tracks VXferBytesRead.
> _Read Only_
>
> Number **VXFERBYTESWRITTEN** = 1448633943
>
> Tracks VXferBytesWritten.
> _Read Only_
>
> Number **VXFERREADTIME** = 1448628852
>
> Tracks VXferReadTime.
> _Read Only_
>
> Number **VXFERWRITETIME** = 1448630132
>
> Tracks VXferWriteTime.
> _Read Only_
>
> Number **VXFERFILEBYTESREAD** = 1447445106
>
> Tracks VXferFileBytesRead.
> _Read Only_
>
> Number **VXFERFILEBYTESWRITTEN** = 1447445111
>
> Tracks VXFerFileBytesWritten.
> _Read Only_
>
> Number `PROCESS_IO_BYTES_READ` = 1229935204
>
> Tracks process IO bytes read.
> _Read Only_
>
> Number `PROCESS_IO_BYTES_WRITTEN` = 1229936498
>
> Tracks process IO bytes written.
> _Read Only_
>
> Number **AGMXSHOWTIME** = 1095191924
>
> Tracks AGMXShowTime.
> _Read Only_
>
> Number `DATABASE_FILE_BYTES_READ` = 1145197156
>
> Tracks database file bytes read.
> _Read Only_
>
> Number `DATABASE_FILE_BYTES_WRITTEN` = 1145198450
>
> Tracks database file bytes written.
> _Read Only_
>
> Number `DATABASE_FILE_READ_TIME` = 1145197172
>
> Tracks database file read time.
> _Read Only_
>
> Number `DATABASE_FILE_WRITE_TIME` = 1145198452
>
> Tracks database file write time.
> _Read Only_
>
> Number `DROP_SHADOW_MEMORY_READ_TIME` = 1146311284
>
> Tracks drop shadow memory read time.
> _Read Only_
>
> Number `DROP_SHADOW_MEMORY_READ_BYTES` = 1146311266
>
> Tracks drop shadow memory read bytes.
> _Read Only_
>
> Number `DROP_SHADOW_MEMORY_WRITE_TIME` = 1146312564
>
> Tracks drop shadow memory write time.
> _Read Only_
>
> Number `DROP_SHADOW_MEMORY_WRITE_BYTES` = 1146312546
>
> Tracks drop shadow memory write bytes.
> _Read Only_
>
> Number `DROP_SHADOW_FILE_READ_TIME` = 1145459316
>
> Tracks drop shadow file read time.
> _Read Only_
>
> Number `DROP_SHADOW_FILE_READ_BYTES` = 1145459298
>
> Tracks drop shadow file read bytes.
> _Read Only_
>
> Number `DROP_SHADOW_FILE_WRITE_TIME` = 1145460596
>
> Tracks drop shadow file write time.
> _Read Only_
>
> Number `DROP_SHADOW_FILE_WRITE_BYTES` = 1145460578
>
> Tracks drop shadow file write bytes.
> _Read Only_
>
> Number `CHANGE_MANAGER_UPDATE_CALL_COUNT` = 1129137012
>
> Tracks change manager update call count.
> _Read Only_
>
> Number `CHANGE_MANAGER_UPDATE_CALL_TIME` = 1129141357
>
> Tracks change manager update call time.
> _Read Only_
>
> Number `SNAPSHOT_COUNT` = 1397965684
>
> Tracks snapshot count.
> _Read Only_
>
> Number `GALLEY_COMPOSITION_TIME` = 1195594861
>
> Tracks galley composition time.
> _Read Only_
>
> Number `LAYOUT_COMPOSITION_TIME` = 1279480941
>
> Tracks layout composition time.
> _Read Only_
>
> Number `GALLEY_COMPOSITION_COUNT` = 1195590516
>
> Tracks galley composition count.
> _Read Only_
>
> Number `LAYOUT_COMPOSITION_COUNT` = 1279476596
>
> Tracks layout composition count.
> _Read Only_
>
> Number `DRAW_MANAGER_DRAW_TIME` = 1145918573
>
> Tracks draw manager draw time.
> _Read Only_
>
> Number `DRAW_MANAGER_NUMBER_OF_INTERRUPTS` = 1145915758
>
> Tracks draw manager number of interrupts.
> _Read Only_
>
> Number `SNAPSHOT_READ_WRITE_TIME` = 1397905268
>
> Tracks snapshot read write time.
> _Read Only_
>
> Number `NEW_SNAPSHOT_TIME` = 1397651284
>
> Tracks new snapshot time.
> _Read Only_
>
> Number `DATABASE_NEW_UID_COUNT` = 1145197929
>
> Tracks database new UID count.
> _Read Only_
>
> Number `DATABASE_INSTANTIATE_COUNT` = 1145194862
>
> Tracks database instantiate count.
> _Read Only_
>
> Number `INSTANCE_CACHE_PURGE_COUNT` = 1229148259
>
> Tracks instance cache purge count.
> _Read Only_
>
> Number `MINISAVE_COUNT` = 1297302388
>
> Tracks minisave count.
> _Read Only_
>
> Number `XMP_FILTER_TIME` = 1481461876
>
> Tracks XMP filter time.
> _Read Only_
>
> Number `SNAPSHOT_READ_WRITE_BYTE_COUNT` = 1397905251
>
> Tracks snapshot read write byte count.
> _Read Only_
>
> Number `DATABASE_FILE_PAGE_READS` = 1145194098
>
> Tracks database file page reads.
> _Read Only_
>
> Number `ATTACHABLE_EVENT_COUNT` = 1095058292
>
> Counts attachable events that have been dispatched.
> _Read Only_
>
> Number `ATTACHED_SCRIPTS_COUNT` = 1095975796
>
> Counts attached scripts that have been executed.
> _Read Only_
>
> Number `DISPATCH_EVENT_TIME` = 1145394285
>
> Measures total time spent dispatching attachable events.

## PICTs

A collection containing PICT graphics.

### Instance

> _Read Only_
>
> Number **length**
>
> Object count in the collection.

### Methods

> Number **count**()
>
> Shows how many elements the PICT contains.
> PICT **item**( Mixed **index** )
>
> Gets the PICT identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Lookup value by index or by name. Accepted forms: Long Integer or String. |

> PICT **itemByName**( String **name** )
>
> Gets the PICT identified by name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> PICT **itemByID**( Number **id** )
>
> Gets the PICT identified by ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> PICT **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the PICTs inside the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | PICT, index, or name that starts the range. Can accept: PICT, Long Integer or String. |
| Mixed | to | PICT, index, or name that ends the range. Can accept: PICT, Long Integer or String. |

> PICT **firstItem**()
>
> Gets the collection's first PICT.
> PICT **lastItem**()
>
> Gets the collection's last PICT.
> PICT **middleItem**()
>
> Gets the middle PICT in the collection.
> PICT **previousItem**( PICT **obj** )
>
> Gets the PICT whose index comes immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PICT | obj | Index of the PICT that follows the wanted PICT. |

> PICT **nextItem**( PICT **obj** )
>
> Gets the PICT whose index comes immediately after the specified PICT in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PICT | obj | PICT whose index is before the wanted PICT. |

> PICT **anyItem**()
>
> Gets any PICT in the collection.
> PICT **everyItem**()
>
> Gets every PICT in the collection.
> String **toSource**()
>
> Builds a string that returns the PICT when evaluated.
> PICT **[]**( Number **index** )
>
> Gets the PICT at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |
