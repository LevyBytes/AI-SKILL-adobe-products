# Combo Boxes, Comment Status Enum, Comment Type Enum, Compose Using ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: ComboBoxes; CommentStatusEnum; CommentTypeEnum; ComposeUsing; CompositeFontEntries; CompositeFontEntry; CompositeFont; CompositeFonts; CompressionQuality; ConditionIndicatorMethod; ConditionIndicatorMode; ConditionSet; ConditionSets; ConditionUnderlineIndicatorAppearance.

## ComboBoxes

Collection containing comboboxes.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects in the collection.

### Methods

> Number **count**()
>
> Counts ComboBox elements.
> ComboBox **add**( Layer **layer**, LocationOptions **at**, Mixed **reference**, Object **withProperties** )
>
> Adds a new ComboBox.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Layer | layer | Layer where the ComboBox is created. (Optional) |
| LocationOptions | at | Insertion location for the ComboBox, positioned against the reference object or inside the container object. (Optional) |
| Mixed | reference | Reference object. Note: This is required for the before or after value of the at parameter. Accepts: PageItem, Layer, Page, MasterSpread, Spread, or Document. (Optional) |
| Object | withProperties | Starting property values for the new ComboBox. (Optional) |

> ComboBox **item**( Mixed **index** )
>
> Returns the ComboBox identified by the specified index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name. Accepts: Long Integer or String. |

> ComboBox **itemByName**( String **name** )
>
> Fetches the named ComboBox.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> ComboBox **itemByID**( Number **id** )
>
> Fetches the ComboBox with the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> ComboBox **itemByRange**( Mixed **from**, Mixed **to** )
>
> Returns the ComboBoxes inside the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | ComboBox, index, or name at the range start. Accepts: ComboBox, Long Integer or String. |
| Mixed | to | ComboBox, index, or name at the range end. Accepts: ComboBox, Long Integer or String. |

> ComboBox **firstItem**()
>
> Fetches the first ComboBox in the collection.
> ComboBox **lastItem**()
>
> Fetches the last ComboBox in the collection.
> ComboBox **middleItem**()
>
> Fetches the collection's middle ComboBox.
> ComboBox **previousItem**( ComboBox **obj** )
>
> Fetches the ComboBox indexed immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ComboBox | obj | Index belonging to the ComboBox after the desired ComboBox. |

> ComboBox **nextItem**( ComboBox **obj** )
>
> Returns the ComboBox whose index comes after the specified ComboBox in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ComboBox | obj | ComboBox positioned immediately before the desired ComboBox by index. |

> ComboBox **anyItem**()
>
> Fetches any ComboBox in the collection.
> ComboBox **everyItem**()
>
> Fetches every ComboBox in the collection.
> String **toSource**()
>
> Generates a string that, when executed, returns the ComboBox.
> ComboBox **[]**( Number **index** )
>
> Returns the ComboBox at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## CommentStatusEnum

Enum covering comment status values.

### Class

> _Read Only_
>
> Number `OPEN_STATUS` = 1634955120
>
> Comment status is open.
> _Read Only_
>
> Number `RESOLVED_STATUS` = 1634955877
>
> Comment status is resolved.

## CommentTypeEnum

Enum covering comment type values.

### Class

> _Read Only_
>
> Number `STICKY_NOTE_TYPE` = 1635021678
>
> Comment type is sticky note.
> _Read Only_
>
> Number `HIGHLIGHT_TEXT_TYPE` = 1635018860
>
> Comment type is highlight text.
> _Read Only_
>
> Number `UNDERLINE_TEXT_TYPE` = 1635022188
>
> Comment type is underline text.
> _Read Only_
>
> Number `SQUIGGLY_TEXT_TYPE` = 1635021681
>
> Comment type is squiggly text.
> _Read Only_
>
> Number `STRIKETHROUGH_TEXT_TYPE` = 1635021682
>
> Comment type is strikethrough text.
> _Read Only_
>
> Number `REPLACE_TEXT_TYPE` = 1635021428
>
> Comment type is replace text.
> _Read Only_
>
> Number `INSERT_TEXT_TYPE` = 1635019124
>
> Comment type is insert text.
> _Read Only_
>
> Number `TEXT_TYPEWRITER_TYPE` = 1635021940
>
> Comment type is text typewriter.
> _Read Only_
>
> Number `TEXT_BOX_TYPE` = 1635021922
>
> Comment type is text box.
> _Read Only_
>
> Number `FREEFORM_DRAWING_TYPE` = 1635018340
>
> Comment type is freeform drawing.
> _Read Only_
>
> Number `LINE_SEGMENT_TYPE` = 1635019891
>
> Comment type is line segment.
> _Read Only_
>
> Number `OVAL_TYPE` = 1635020662
>
> Comment type is oval.
> _Read Only_
>
> Number `RECTANGLE_TYPE` = 1635021420
>
> Comment type is rectangle.
> _Read Only_
>
> Number `POLYGON_TYPE` = 1635020908
>
> Comment type is polygon.
> _Read Only_
>
> Number `ARROW_TYPE` = 1635017074
>
> Comment type is arrow.
> _Read Only_
>
> Number `TEXT_CALLOUT_TYPE` = 1635021923
>
> Comment type is text callout.
> _Read Only_
>
> Number `STAMP_TYPE` = 1635021680
>
> Comment type is stamp.
> _Read Only_
>
> Number `CONNECTED_LINES_TYPE` = 1635017582
>
> Comment type is connected lines.
> _Read Only_
>
> Number `CLOUD_TYPE` = 1635017572
>
> Comment type is cloud.
> _Read Only_
>
> Number `INVALID_COMMENT_TYPE` = 1635019118
>
> Comment type is invalid comment type.

## ComposeUsing

Options for composing text with hyphenation exception lists.

### Class

> _Read Only_
>
> Number `USE_USER_DICTIONARY` = 1433629284
>
> The external user dictionary provides the list.
> _Read Only_
>
> Number `USE_DOCUMENT` = 1967419235
>
> The document supplies the list.
> _Read Only_
>
> Number **BOTH** = 1651471464
>
> Both the document list and the user dictionary list are used.

## CompositeFontEntries

Composite font entries are grouped in this collection.

### Instance

> _Read Only_
>
> Number **length**
>
> Object count for this collection.

### Methods

> CompositeFontEntry **add**( Object **withProperties** )
>
> Adds a CompositeFontEntry.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Optional starting property values for the CompositeFontEntry being created. |

> Number **count**()
>
> Reports how many CompositeFontEntry elements are present.
> CompositeFontEntry **item**( Mixed **index** )
>
> Gets the CompositeFontEntry identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index value or name. Accepts: Long Integer or String. |

> CompositeFontEntry **itemByName**( String **name** )
>
> Gets the CompositeFontEntry that has the supplied name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> CompositeFontEntry **itemByID**( Number **id** )
>
> Gets the CompositeFontEntry whose ID matches the argument.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> CompositeFontEntry **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the CompositeFontEntries contained in the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting CompositeFontEntry, index, or name for the range. Accepts: CompositeFontEntry, Long Integer or String. |
| Mixed | to | Ending CompositeFontEntry, index, or name for the range. Accepts: CompositeFontEntry, Long Integer or String. |

> CompositeFontEntry **firstItem**()
>
> Gets the first CompositeFontEntry from the collection.
> CompositeFontEntry **lastItem**()
>
> Gets the final CompositeFontEntry from the collection.
> CompositeFontEntry **middleItem**()
>
> Gets the middle CompositeFontEntry from the collection.
> CompositeFontEntry **previousItem**( CompositeFontEntry **obj** )
>
> Gets the CompositeFontEntry positioned immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CompositeFontEntry | obj | CompositeFontEntry index that comes after the wanted CompositeFontEntry. |

> CompositeFontEntry **nextItem**( CompositeFontEntry **obj** )
>
> Gets the CompositeFontEntry positioned immediately after the specified CompositeFontEntry in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CompositeFontEntry | obj | CompositeFontEntry whose index precedes the wanted CompositeFontEntry. |

> CompositeFontEntry **anyItem**()
>
> Gets any CompositeFontEntry from the collection.
> CompositeFontEntry **everyItem**()
>
> Gets all CompositeFontEntry objects in the collection.
> String **toSource**()
>
> Builds a string that returns the CompositeFontEntry when executed.
> CompositeFontEntry **[]**( Number **index** )
>
> Gets the CompositeFontEntry identified by the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index to use. |

## CompositeFontEntry

This object represents one composite font entry.

### Instance

> _Read Only_
>
> Boolean **locked**
>
> True means the CompositeFontEntry is locked.
> _Read Only_
>
> Number **id**
>
> Unique identifier assigned to the CompositeFontEntry.
> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> CompositeFont **parent**
>
> Parent object for the CompositeFontEntry; this is a CompositeFont.
> _Read Only_
>
> Number **index**
>
> Position of the CompositeFontEntry inside its container.
> _Read Only_
>
> Events **events**
>
> Event collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection.
> String **name**
>
> Name assigned to the CompositeFontEntry.
> Mixed **appliedFont**
>
> Font used by the CompositeFontEntry, given either as a font object or as the font family name. Can return: Font or String.
> String **fontStyle**
>
> Font style name.
> Number **relativeSize**
>
> Entry size compared with the base entry. Note: You cannot modify the base entry.
> Number **horizontalScale**
>
> Horizontal scale applied to the CompositeFontEntry.
> Number **verticalScale**
>
> Vertical scale applied to the CompositeFontEntry.
> String **customCharacters**
>
> Characters affected by this set.
> Boolean **scaleOption**
>
> True scales characters from the center.
> Number **baselineShift**
>
> Baseline shift amount.
> String **label**
>
> String value available for custom use.
> Object **properties**
>
> Lets multiple properties be set together.

### Methods

> **remove**()
>
> Removes the CompositeFontEntry.
> **insertLabel**( String **key**, String **value** )
>
> Stores the specified key with its associated value in the label.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to store. |
| String | value | Value to associate. |

> String **extractLabel**( String **key** )
>
> Retrieves the label value tied to the supplied key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to look up. |

> String **toSource**()
>
> Builds a string that returns the CompositeFontEntry when executed.
> CompositeFontEntry **getElements**()
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
| String | eventType | Event type to register. |
| Mixed | handler | Event handler to invoke. Can accept: File or JavaScript Function. |
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

## CompositeFont

This object represents a composite font.

### Instance

> _Read Only_
>
> Number **id**
>
> Unique identifier assigned to the CompositeFont.
> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the CompositeFont; this is a Application or Document.
> _Read Only_
>
> Number **index**
>
> Position of the CompositeFont inside its container.
> _Read Only_
>
> Events **events**
>
> Event collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection.
> _Read Only_
>
> CompositeFontEntries **compositeFontEntries**
>
> Composite font entry collection.
> String **name**
>
> Name assigned to the CompositeFont.
> String **label**
>
> String value available for custom use.
> Object **properties**
>
> Lets multiple properties be set together.

### Methods

> **remove**()
>
> Removes the CompositeFont.
> **insertLabel**( String **key**, String **value** )
>
> Stores the specified key with its associated value in the label.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to store. |
| String | value | Value to associate. |

> String **extractLabel**( String **key** )
>
> Retrieves the label value tied to the supplied key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to look up. |

> String **toSource**()
>
> Builds a string that returns the CompositeFont when executed.
> CompositeFont **getElements**()
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
| String | eventType | Event type to register. |
| Mixed | handler | Event handler to invoke. Can accept: File or JavaScript Function. |
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

## CompositeFonts

Composite fonts are grouped in this collection.

### Instance

> _Read Only_
>
> Number **length**
>
> Object count for this collection.

### Methods

> CompositeFont **add**( Object **withProperties** )
>
> Adds a CompositeFont.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Optional starting property values for the CompositeFont being created. |

> Number **count**()
>
> Reports how many CompositeFont elements are present.
> CompositeFont **item**( Mixed **index** )
>
> Gets the CompositeFont identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index value or name. Accepts: Long Integer or String. |

> CompositeFont **itemByName**( String **name** )
>
> Gets the CompositeFont that has the supplied name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> CompositeFont **itemByID**( Number **id** )
>
> Gets the CompositeFont whose ID matches the argument.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> CompositeFont **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the CompositeFonts contained in the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting CompositeFont, index, or name for the range. Accepts: CompositeFont, Long Integer or String. |
| Mixed | to | Ending CompositeFont, index, or name for the range. Accepts: CompositeFont, Long Integer or String. |

> CompositeFont **firstItem**()
>
> Gets the first CompositeFont from the collection.
> CompositeFont **lastItem**()
>
> Gets the final CompositeFont from the collection.
> CompositeFont **middleItem**()
>
> Gets the middle CompositeFont from the collection.
> CompositeFont **previousItem**( CompositeFont **obj** )
>
> Gets the CompositeFont positioned immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CompositeFont | obj | CompositeFont index that comes after the wanted CompositeFont. |

> CompositeFont **nextItem**( CompositeFont **obj** )
>
> Gets the CompositeFont positioned immediately after the specified CompositeFont in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| CompositeFont | obj | CompositeFont whose index precedes the wanted CompositeFont. |

> CompositeFont **anyItem**()
>
> Gets any CompositeFont from the collection.
> CompositeFont **everyItem**()
>
> Gets all CompositeFont objects in the collection.
> String **toSource**()
>
> Builds a string that returns the CompositeFont when executed.
> CompositeFont **[]**( Number **index** )
>
> Gets the CompositeFont identified by the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index to use. |

## CompressionQuality

For bitmap images, this setting chooses the compression amount and kind.

### Class

> _Read Only_
>
> Number **MINIMUM** = 1701727598
>
> Applies minimum compression. It is invalid when bitmap compression is ZIP.
> _Read Only_
>
> Number **LOW** = 1701727351
>
> Applies low compression. It is invalid when bitmap compression is ZIP.
> _Read Only_
>
> Number **MEDIUM** = 1701727588
>
> Applies medium compression. It is invalid when bitmap compression is ZIP.
> _Read Only_
>
> Number **HIGH** = 1701726313
>
> Applies high compression. It is invalid when bitmap compression is ZIP.
> _Read Only_
>
> Number **MAXIMUM** = 1701727608
>
> Applies maximum compression. It is invalid when bitmap compression is ZIP.
> _Read Only_
>
> Number `FOUR_BIT` = 1701721186
>
> Applies 4-bit compression. This is valid only when bitmap compression is ZIP.
> _Read Only_
>
> Number `EIGHT_BIT` = 1701722210
>
> Applies 8-bit compression. This is valid only when bitmap compression is ZIP.

## ConditionIndicatorMethod

These values select how condition indicators are drawn.

### Class

> _Read Only_
>
> Number `USE_UNDERLINE` = 1700097644
>
> Conditional text is marked with an underline.
> _Read Only_
>
> Number `USE_HIGHLIGHT` = 1699244391
>
> Conditional text is marked with highlighting.

## ConditionIndicatorMode

Available settings for condition indicator display mode.

### Class

> _Read Only_
>
> Number `SHOW_INDICATORS` = 1698908531
>
> Condition indicators are shown only.
> _Read Only_
>
> Number `SHOW_AND_PRINT_INDICATORS` = 1698908528
>
> Condition indicators are both shown and printed.
> _Read Only_
>
> Number `HIDE_INDICATORS` = 1698908520
>
> Condition indicators are hidden.

## ConditionSet

This object stores a condition set for conditional text.

### Instance

> _Read Only_
>
> Number **id**
>
> Unique identifier assigned to the ConditionSet.
> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the ConditionSet; this is a Application or Document.
> _Read Only_
>
> Number **index**
>
> Position of the ConditionSet inside its container.
> _Read Only_
>
> Events **events**
>
> Event collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection.
> String **name**
>
> Name assigned to the ConditionSet.
> Mixed **setConditions**
>
> Set conditions paired with visibility states. Returned form: Ordered array containing condition:Condition, visibility:Boolean.
> String **label**
>
> String value available for custom use.
> Object **properties**
>
> Lets multiple properties be set together.

### Methods

> **remove**( Mixed **replacingWith** )
>
> Deletes a conditional-text condition set.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | replacingWith | Condition set applied to the text instead of the deleted condition set. The default applies no replacement condition set. Can accept: ConditionSet or String. (Optional) |

> **redefine**()
>
> Rebuilds a condition set from the current conditions and visibility states.
> **insertLabel**( String **key**, String **value** )
>
> Stores the specified key with its associated value in the label.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to store. |
| String | value | Value to associate. |

> String **extractLabel**( String **key** )
>
> Retrieves the label value tied to the supplied key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to look up. |

> String **toSource**()
>
> Builds a string that returns the ConditionSet when executed.
> ConditionSet **getElements**()
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
| String | eventType | Event type to register. |
| Mixed | handler | Event handler to invoke. Can accept: File or JavaScript Function. |
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

## ConditionSets

Condition sets for conditional text are grouped in this collection.

### Instance

> _Read Only_
>
> Number **length**
>
> Object count for this collection.

### Methods

> ConditionSet **add**( Object **withProperties** )
>
> Adds a ConditionSet.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Optional starting property values for the ConditionSet being created. |

> Number **count**()
>
> Reports how many ConditionSet elements are present.
> ConditionSet **item**( Mixed **index** )
>
> Gets the ConditionSet identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index value or name. Accepts: Long Integer or String. |

> ConditionSet **itemByName**( String **name** )
>
> Gets the ConditionSet that has the supplied name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> ConditionSet **itemByID**( Number **id** )
>
> Gets the ConditionSet whose ID matches the argument.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> ConditionSet **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the ConditionSets contained in the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting ConditionSet, index, or name for the range. Accepts: ConditionSet, Long Integer or String. |
| Mixed | to | Ending ConditionSet, index, or name for the range. Accepts: ConditionSet, Long Integer or String. |

> ConditionSet **firstItem**()
>
> Gets the first ConditionSet from the collection.
> ConditionSet **lastItem**()
>
> Gets the final ConditionSet from the collection.
> ConditionSet **middleItem**()
>
> Gets the middle ConditionSet from the collection.
> ConditionSet **previousItem**( ConditionSet **obj** )
>
> Gets the ConditionSet positioned immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ConditionSet | obj | ConditionSet index that comes after the wanted ConditionSet. |

> ConditionSet **nextItem**( ConditionSet **obj** )
>
> Gets the ConditionSet positioned immediately after the specified ConditionSet in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ConditionSet | obj | ConditionSet whose index precedes the wanted ConditionSet. |

> ConditionSet **anyItem**()
>
> Gets any ConditionSet from the collection.
> ConditionSet **everyItem**()
>
> Gets all ConditionSet objects in the collection.
> String **toSource**()
>
> Builds a string that returns the ConditionSet when executed.
> ConditionSet **[]**( Number **index** )
>
> Gets the ConditionSet identified by the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index to use. |

## ConditionUnderlineIndicatorAppearance

These values configure the appearance of condition underline indicators.

### Class

> _Read Only_
>
> Number **WAVY** = 1937208953
>
> Uses a wavy underline style.
> _Read Only_
>
> Number **SOLID** = 1936682084
>
> Uses a solid underline style.
> _Read Only_
>
> Number **DASHED** = 1684108136
>
> Uses a dashed underline style.

## See also

- [Characters](uxp-characters.md)
