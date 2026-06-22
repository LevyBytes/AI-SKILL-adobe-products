# Display Settings, Distribute Options, Document Event, Document Intent Options ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: DisplaySettings; DistributeOptions; DocumentEvent; DocumentIntentOptions; DocumentPreference — Instance; DocumentPreset; DocumentPresets; DocumentPrintUiOptions.

## DisplaySettings

Properties for display settings.

### Instance

> _Read Only_
>
> Number **length**
>
> Counts the objects held by the collection.

### Methods

> Number **count**()
>
> Reports how many elements are in the DisplaySetting collection.
> DisplaySetting **item**( Mixed **index** )
>
> Gets the DisplaySetting identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name to resolve. Can accept: Long Integer or String. |

> DisplaySetting **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the DisplaySettings that fall inside the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting DisplaySetting, index, or name for the range. Can accept: DisplaySetting, Long Integer or String. |
| Mixed | to | Ending DisplaySetting, index, or name for the range. Can accept: DisplaySetting, Long Integer or String. |

> DisplaySetting **firstItem**()
>
> Gets the collection's first DisplaySetting.
> DisplaySetting **lastItem**()
>
> Gets the collection's final DisplaySetting.
> DisplaySetting **middleItem**()
>
> Gets the DisplaySetting located at the collection midpoint.
> DisplaySetting **previousItem**( DisplaySetting **obj** )
>
> Gets the DisplaySetting positioned immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| DisplaySetting | obj | Index of the DisplaySetting that follows the requested DisplaySetting. |

> DisplaySetting **nextItem**( DisplaySetting **obj** )
>
> Gets the DisplaySetting positioned after the supplied DisplaySetting in this collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| DisplaySetting | obj | DisplaySetting positioned before the requested DisplaySetting. |

> DisplaySetting **anyItem**()
>
> Gets one DisplaySetting from the collection.
> DisplaySetting **everyItem**()
>
> Gets all DisplaySetting objects in the collection.
> String **toSource**()
>
> Builds a string that can recreate the DisplaySetting when run.
> DisplaySetting **[]**( Number **index** )
>
> Gets the DisplaySetting at the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## DistributeOptions

Distribution choices for objects.

### Class

> _Read Only_
>
> Number `LEFT_EDGES` = 1281770852
>
> Uses object left edges as the distribution basis.
> _Read Only_
>
> Number `TOP_EDGES` = 1416643940
>
> Uses object top edges as the distribution basis.
> _Read Only_
>
> Number `RIGHT_EDGES` = 1383351652
>
> Uses object right edges as the distribution basis.
> _Read Only_
>
> Number `BOTTOM_EDGES` = 1114916196
>
> Uses object bottom edges as the distribution basis.
> _Read Only_
>
> Number `HORIZONTAL_CENTERS` = 1215257187
>
> Uses object horizontal centers as the distribution basis.
> _Read Only_
>
> Number `VERTICAL_CENTERS` = 1449481315
>
> Uses object vertical centers as the distribution basis.
> _Read Only_
>
> Number `HORIZONTAL_SPACE` = 1215257203
>
> Uses horizontal spacing between objects for distribution.
> _Read Only_
>
> Number `VERTICAL_SPACE` = 1449489523
>
> Uses vertical spacing between objects for distribution.

## DocumentEvent

An event associated with a document.

### Class

> _Read Only_
>
> String `BEFORE_NEW` = beforeNew
>
> Fires before Document creation; it supports bubbling and may be canceled.
> _Read Only_
>
> String `AFTER_NEW` = afterNew
>
> Fires after Document creation; it bubbles, but cancellation is not allowed.
> _Read Only_
>
> String `BEFORE_OPEN` = beforeOpen
>
> Fires before opening a Document; it supports bubbling and may be canceled.
> _Read Only_
>
> String `AFTER_OPEN` = afterOpen
>
> Fires after a Document opens; it bubbles, but cancellation is not allowed.
> _Read Only_
>
> String `BEFORE_SAVE` = beforeSave
>
> Fires before saving a Document; it supports bubbling and may be canceled.
> _Read Only_
>
> String `AFTER_SAVE` = afterSave
>
> Fires after a Document save completes; it bubbles, but cancellation is not allowed.
> _Read Only_
>
> String `BEFORE_SAVE_AS` = beforeSaveAs
>
> Fires before Save As writes a Document under a new name; it supports bubbling and may be canceled.
> _Read Only_
>
> String `AFTER_SAVE_AS` = afterSaveAs
>
> Fires after Save As writes a Document under a new name; it bubbles, but cancellation is not allowed.
> _Read Only_
>
> String `BEFORE_SAVE_A_COPY` = beforeSaveACopy
>
> Fires before saving a Document copy; it supports bubbling and may be canceled.
> _Read Only_
>
> String `AFTER_SAVE_A_COPY` = afterSaveACopy
>
> Fires after a Document copy is saved; it bubbles, but cancellation is not allowed.
> _Read Only_
>
> String `BEFORE_REVERT` = beforeRevert
>
> Fires before reverting a Document; it supports bubbling and may be canceled.
> _Read Only_
>
> String `AFTER_REVERT` = afterRevert
>
> Fires after a Document revert; it bubbles, but cancellation is not allowed.
> _Read Only_
>
> String `BEFORE_CLOSE` = beforeClose
>
> Fires before closing a Document; it bubbles, but cancellation is not allowed.
> _Read Only_
>
> String `AFTER_CLOSE` = afterClose
>
> Fires after a Document closes; it bubbles, but cancellation is not allowed.

### Instance

> _Read Only_
>
> File **fullName**
>
> Full path for the DocumentEvent, including the DocumentEvent name.
> _Read Only_
>
> String **eventType**
>
> Event name.
> _Read Only_
>
> Object **target**
>
> Event target.
> _Read Only_
>
> Object **currentTarget**
>
> Current target during event propagation.
> _Read Only_
>
> EventPhases **eventPhase**
>
> Current phase in the event propagation sequence.
> _Read Only_
>
> Boolean **bubbles**
>
> When true, the event can take part in the bubbling propagation phase.
> _Read Only_
>
> Boolean **cancelable**
>
> When true, scripts may cancel the event target's default behavior.
> _Read Only_
>
> Date **timeStamp**
>
> Time at which the event was initialized.
> _Read Only_
>
> Boolean **propagationStopped**
>
> When true, propagation past the current target has already been stopped.
> _Read Only_
>
> Boolean **defaultPrevented**
>
> When true, the target's default event behavior has already been canceled.
> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the DocumentEvent.
> _Read Only_
>
> Boolean **isValid**
>
> Returns true when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the DocumentEvent (a Application or Document).
> _Read Only_
>
> Number **index**
>
> Position of the DocumentEvent inside its containing object.
> UserInteractionLevels **userInteractionLevel**
>
> Sets how dialogs and alerts appear while a script is processing.
> Object **properties**
>
> Supports assigning several properties in one operation.

### Methods

> **stopPropagation**()
>
> Stops the event from propagating beyond the current target.
> **preventDefault**()
>
> Cancels the event target's default behavior.
> String **toSource**()
>
> Builds a string that can recreate the DocumentEvent when run.
> DocumentEvent **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.

## DocumentIntentOptions

Choices for document intent.

### Class

> _Read Only_
>
> Number `PRINT_INTENT` = 1768846448
>
> Marks the document as intended for print output.
> _Read Only_
>
> Number `WEB_INTENT` = 1768846455
>
> Marks the document as intended for web output.
> _Read Only_
>
> Number `MOBILE_INTENT` = 1768846445
>
> Marks the document as intended for mobile publishing.

## DocumentPreference — Instance

> _Read Only_
>
> Boolean **isValid**
>
> Returns true when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the DocumentPreference (a Application or Document).
> _Read Only_
>
> Events **events**
>
> Events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listeners collection.
> Measurement Unit (Number or String)=any **pageHeight**
>
> Page height.
> Measurement Unit (Number or String)=any **pageWidth**
>
> Page width.
> PageOrientation **pageOrientation**
>
> Page orientation.
> Mixed **columnGuideColor**
>
> Color used for column guides; provide either a UI color or an array of three doubles in the 0 to 255 range representing R, G, and B. Returns either: UIColors enumerator or Array of 3 Reals (0 - 255).
> Mixed **marginGuideColor**
>
> Color used for margin guides; provide either a UI color or an array of three doubles in the 0 to 255 range representing R, G, and B. Returns either: UIColors enumerator or Array of 3 Reals (0 - 255).
> Boolean **createPrimaryTextFrame**
>
> When true, a newly created document gives the document A-master primary text frames.
> Number **pagesPerDocument**
>
> Number of pages in the document. (Range: 1 to 9999)
> Boolean **facingPages**
>
> When true, the document uses facing pages.
> Measurement Unit (Number or String)=any **documentBleedTopOffset**
>
> Offset amount for the top document bleed.
> Measurement Unit (Number or String)=any **documentBleedBottomOffset**
>
> Offset amount for the bottom document bleed. Note: document bleed uniform size must be false before setting the bleed bottom offset.
> Measurement Unit (Number or String)=any **documentBleedInsideOrLeftOffset**
>
> Offset amount for the inside or left document bleed. Note: document bleed uniform size must be false before setting the bleed inside or left offset.
> Measurement Unit (Number or String)=any **documentBleedOutsideOrRightOffset**
>
> Offset amount for the outside or right document bleed. Note: document bleed uniform size must be false before setting the bleed outside or right offset.
> Boolean **documentBleedUniformSize**
>
> When true, the document bleed top offset value is reused for bleed offset measurements on every document side. The default setting is true.
> Measurement Unit (Number or String)=any **slugTopOffset**
>
> Offset amount for the top slug.
> Measurement Unit (Number or String)=any **slugBottomOffset**
>
> Offset amount for the bottom slug. Note: document slug uniform size must be false before setting the slug bottom offset.
> Measurement Unit (Number or String)=any **slugInsideOrLeftOffset**
>
> Offset amount for the inside or left slug. Note: document slug uniform size must be false before setting the slug inside or left offset.
> Measurement Unit (Number or String)=any **slugRightOrOutsideOffset**
>
> Offset amount for the outside or right slug. Note: document slug uniform size must be false before setting the slug right or outside offset.
> Boolean **documentSlugUniformSize**
>
> When true, slug measurements on every document side reuse the slug top offset value. The default value is false.
> Boolean **preserveLayoutWhenShuffling**
>
> When true, spreads that had more than two pages keep their layout after allow page shuffle is enabled. When false, multi-page spreads become two-page spreads if they were created or modified after allow page shuffle was enabled.
> Boolean **allowPageShuffle**
>
> When true, adding pages to a spread limits that spread to two pages at most. When false, existing spreads can receive added or moved pages. For override details, see preserve layout when shuffling.
> Boolean **overprintBlack**
>
> When true, black overprints during document saving.
> Boolean **columnGuideLocked**
>
> When true, column guides are locked.
> Number **startPageNumber**
>
> Starting page number for a document. It is also the first section's starting page number for that document. Default value is 1.
> DocumentIntentOptions **intent**
>
> Document intent.
> PageBindingOptions **pageBinding**
>
> Page binding placement.
> HorizontalOrVertical **columnDirection**
>
> Text direction in the column.
> String **pageSize**
>
> Page size.
> Boolean **snippetImportUsesOriginalLocation**
>
> When true, UI-based snippet import places page items at their original location.
> Object **properties**
>
> Supports assigning several properties in one operation.

### Methods

> String **toSource**()
>
> Builds a string that can recreate the DocumentPreference when run.
> DocumentPreference **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Returns the specifier string for the object.
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

## DocumentPreset

Preset containing the full set of new document settings.

### Instance

> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the DocumentPreset.
> _Read Only_
>
> Boolean **isValid**
>
> Returns true when the object specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent object for the DocumentPreset (a Application).
> _Read Only_
>
> Number **index**
>
> Position of the DocumentPreset inside its containing object.
> _Read Only_
>
> Events **events**
>
> Events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listeners collection.
> String **name**
>
> DocumentPreset name.
> Number **pagesPerDocument**
>
> Number of pages in the document. (Range: 1 to 9999)
> Boolean **facingPages**
>
> When true, the document uses facing pages.
> Measurement Unit (Number or String)=any **pageHeight**
>
> Page height.
> Measurement Unit (Number or String)=any **pageWidth**
>
> Page width.
> PageOrientation **pageOrientation**
>
> Page orientation.
> Number **columnCount**
>
> Number of columns placed on the page.
> Measurement Unit (Number or String)=any **columnGutter**
>
> Distance between columns.
> Measurement Unit (Number or String)=any **top**
>
> Top edge of the DocumentPreset.
> Measurement Unit (Number or String)=any **bottom**
>
> Bottom edge of the DocumentPreset.
> Measurement Unit (Number or String)=any **left**
>
> Left edge of the DocumentPreset.
> Measurement Unit (Number or String)=any **right**
>
> Right edge of the DocumentPreset.
> Measurement Unit (Number or String)=any **documentBleedInsideOrLeftOffset**
>
> Offset amount for the inside or left document bleed. Note: document bleed uniform size must be false before setting the bleed inside or left offset.
> Measurement Unit (Number or String)=any **documentBleedTopOffset**
>
> Offset amount for the top document bleed.
> Measurement Unit (Number or String)=any **documentBleedOutsideOrRightOffset**
>
> Offset amount for the outside or right document bleed. Note: document bleed uniform size must be false before setting the bleed outside or right offset.
> Measurement Unit (Number or String)=any **documentBleedBottomOffset**
>
> Offset amount for the bottom document bleed. Note: document bleed uniform size must be false before setting the bleed bottom offset.
> Measurement Unit (Number or String)=any **slugInsideOrLeftOffset**
>
> Offset amount for the inside or left slug. Note: document slug uniform size must be false before setting the slug inside or left offset.
> Measurement Unit (Number or String)=any **slugTopOffset**
>
> Offset amount for the top slug.
> Measurement Unit (Number or String)=any **slugRightOrOutsideOffset**
>
> Offset amount for the outside or right slug. Note: document slug uniform size must be false before setting the slug right or outside offset.
> Measurement Unit (Number or String)=any **slugBottomOffset**
>
> Offset amount for the bottom slug. Note: document slug uniform size must be false before setting the slug bottom offset.
> Boolean **createPrimaryTextFrame**
>
> When true, a newly created document gives the document A-master primary text frames.
> Number **startPageNumber**
>
> Starting page number for a document. It is also the first section's starting page number for that document. Default value is 1.
> DocumentIntentOptions **intent**
>
> Document intent.
> Boolean **documentBleedUniformSize**
>
> When true, the document bleed top offset value is reused for bleed offset measurements on every document side. The default setting is true.
> Boolean **documentSlugUniformSize**
>
> When true, slug measurements on every document side reuse the slug top offset value. The default value is false.
> String **pageSize**
>
> Page size.
> String **label**
>
> Property accepting any string value.
> Object **properties**
>
> Supports assigning several properties in one operation.

### Methods

> **remove**()
>
> Removes the DocumentPreset.
> DocumentPreset **duplicate**()
>
> Makes a duplicate DocumentPreset.
> **insertLabel**( String **key**, String **value** )
>
> Sets the label to the value linked with the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |
| String | value | Value to store. |

> String **extractLabel**( String **key** )
>
> Gets the label value linked with the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |

> String **toSource**()
>
> Builds a string that can recreate the DocumentPreset when run.
> DocumentPreset **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Returns the specifier string for the object.
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

## DocumentPresets

A collection containing document presets.

### Instance

> _Read Only_
>
> Number **length**
>
> Counts the objects held by the collection.

### Methods

> DocumentPreset **add**( Object **withProperties** )
>
> Adds a new DocumentPreset.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Initial property values for the new DocumentPreset. (Optional) |

> Number **count**()
>
> Reports how many elements are in the DocumentPreset collection.
> DocumentPreset **item**( Mixed **index** )
>
> Gets the DocumentPreset identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name to resolve. Can accept: Long Integer or String. |

> DocumentPreset **itemByName**( String **name** )
>
> Gets the DocumentPreset with the supplied name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> DocumentPreset **itemByID**( Number **id** )
>
> Gets the DocumentPreset with the supplied ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> DocumentPreset **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the DocumentPresets that fall inside the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting DocumentPreset, index, or name for the range. Can accept: DocumentPreset, Long Integer or String. |
| Mixed | to | Ending DocumentPreset, index, or name for the range. Can accept: DocumentPreset, Long Integer or String. |

> DocumentPreset **firstItem**()
>
> Gets the collection's first DocumentPreset.
> DocumentPreset **lastItem**()
>
> Gets the collection's final DocumentPreset.
> DocumentPreset **middleItem**()
>
> Gets the DocumentPreset located at the collection midpoint.
> DocumentPreset **previousItem**( DocumentPreset **obj** )
>
> Gets the DocumentPreset positioned immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| DocumentPreset | obj | Index of the DocumentPreset that follows the requested DocumentPreset. |

> DocumentPreset **nextItem**( DocumentPreset **obj** )
>
> Gets the DocumentPreset positioned after the supplied DocumentPreset in this collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| DocumentPreset | obj | DocumentPreset positioned before the requested DocumentPreset. |

> DocumentPreset **anyItem**()
>
> Gets one DocumentPreset from the collection.
> DocumentPreset **everyItem**()
>
> Gets all DocumentPreset objects in the collection.
> String **toSource**()
>
> Builds a string that can recreate the DocumentPreset when run.
> DocumentPreset **[]**( Number **index** )
>
> Gets the DocumentPreset at the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## DocumentPrintUiOptions

Options for the document print UI.

### Class

> _Read Only_
>
> Number `SUPPRESS_PRINT_PROGRESS` = 1936748659
>
> Hides the progress bar while printing.
> _Read Only_
>
> Number `SUPPRESS_PRINT_WARNINGS` = 1936750450
>
> Hides warning dialogs while printing.
> _Read Only_
>
> Number `SUPPRESS_PRINT_DIALOG` = 1936745575
>
> Hides the print dialog.
> _Read Only_
>
> Number `SUPPRESS_FILE_SAVE_DIALOG` = 1936089444
>
> Hides the file save dialog while printing.
