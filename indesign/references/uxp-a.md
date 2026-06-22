# Add Page Options, Adjust Layout Preference, Adornment Overprint, Align Distribute Bounds ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: AddPageOptions; AdjustLayoutPreference; AdornmentOverprint; AlignDistributeBounds; AlignDistributePreference; AlignOptions; AlignmentStyleOptions — Class; AlternateGlyphForms; AlternatingFillsTypes; AnchorPoint; AnchorPosition; AnchoredObjectDefault; AnchoredObjectSetting; AnchoredRelativeTo; AngleCombobox; AngleComboboxes.

## AddPageOptions

Controls automatic page insertion when overset text requires additional pages.

### Class

> _Read Only_
>
> Number `END_OF_STORY` = 1634037619
>
> Places pages at the story end.
> _Read Only_
>
> Number `END_OF_SECTION` = 1634037624
>
> Places pages at the section end.
> _Read Only_
>
> Number `END_OF_DOCUMENT` = 1634037604
>
> Places pages at the document end.

## AdjustLayoutPreference

Preferences that control layout adjustment.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier maps to valid objects.
> _Read Only_
>
> Document **parent**
>
> Parent object for AdjustLayoutPreference (a Document).
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
> Boolean **enableAdjustLayout**
>
> When true, layout adjustment is active.
> Boolean **allowLockedObjectsToAdjust**
>
> When true, locked objects or objects on locked layers may be adjusted.
> Boolean **allowFontSizeAndLeadingAdjustment**
>
> When true, font sizes and leading may change during adjustment.
> Boolean **imposeFontSizeRestriction**
>
> When true, the adjustment enforces the font size restriction.
> Number **minimumFontSize**
>
> Smallest font size allowed after adjustment, in points.
> Number **maximumFontSize**
>
> Largest font size allowed after adjustment, in points.
> Boolean **enableAutoAdjustMargins**
>
> When true, margins update automatically after a page size change.
> Object **properties**
>
> Lets several properties be assigned in one operation.

### Methods

> String **toSource**()
>
> Builds a string that returns AdjustLayoutPreference when executed.
> AdjustLayoutPreference **getElements**()
>
> Resolves the object specifier into an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | The event type. |
| Mixed | handler | The event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | The registered event type. |
| Mixed | handler | The registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |

## AdornmentOverprint

Controls overprint behavior for kenten marks.

### Class

> _Read Only_
>
> Number **AUTO** = 1635019116
>
> Applies automatic overprint behavior.
> _Read Only_
>
> Number `OVERPRINT_ON` = 1701736302
>
> Enables overprint.
> _Read Only_
>
> Number `OVERPRINT_OFF` = 1701736294
>
> Disables overprint.

## AlignDistributeBounds

Choices for object alignment or distribution bounds.

### Class

> _Read Only_
>
> Number `ITEM_BOUNDS` = 1416587604
>
> Use object bounds as the alignment or distribution reference.
> _Read Only_
>
> Number `PAGE_BOUNDS` = 1416589377
>
> Use page bounds as the alignment or distribution reference.
> _Read Only_
>
> Number `MARGIN_BOUNDS` = 1416588609
>
> Use page margins as the alignment or distribution reference.
> _Read Only_
>
> Number `SPREAD_BOUNDS` = 1416590160
>
> Use spread bounds as the alignment or distribution reference.
> _Read Only_
>
> Number `KEY_OBJECT` = 1699439993
>
> Use a key object as the alignment or distribution reference.

## AlignDistributePreference

Settings for align and distribute operations.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier maps to valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent object for AlignDistributePreference (an Application).
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
> AlignDistributeBounds **alignDistributeBounds**
>
> Reference bounds used to align or distribute page items.
> Boolean **distributeAbsolute**
>
> When true, page-item spacing is distributed without using the bounds setting.
> Measurement Unit (Number or String)=any **distributeAbsoluteMeasurement**
>
> Distance used when distributing page items.
> Boolean **distributeSpaceAbsolute**
>
> When true, spacing between page items is distributed without using the bounds setting.
> Measurement Unit (Number or String)=any **distributeSpaceAbsoluteMeasurement**
>
> Distance used when distributing space between page items.
> Object **properties**
>
> Lets several properties be assigned in one operation.

### Methods

> String **toSource**()
>
> Builds a string that returns AlignDistributePreference when executed.
> AlignDistributePreference **getElements**()
>
> Resolves the object specifier into an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | The event type. |
| Mixed | handler | The event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | The registered event type. |
| Mixed | handler | The registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |

## AlignOptions

Controls object alignment choices.

### Class

> _Read Only_
>
> Number `LEFT_EDGES` = 1281770852
>
> Align using each object's left edge.
> _Read Only_
>
> Number `TOP_EDGES` = 1416643940
>
> Align using each object's top edge.
> _Read Only_
>
> Number `RIGHT_EDGES` = 1383351652
>
> Align using each object's right edge.
> _Read Only_
>
> Number `BOTTOM_EDGES` = 1114916196
>
> Align using each object's bottom edge.
> _Read Only_
>
> Number `HORIZONTAL_CENTERS` = 1215257187
>
> Align using the objects' horizontal centers.
> _Read Only_
>
> Number `VERTICAL_CENTERS` = 1449481315
>
> Align using the objects' vertical centers.

## AlignmentStyleOptions — Class

> _Read Only_
>
> Number **SPREADSHEET** = 1936749171
>
> Keeps the spreadsheet alignment.
> _Read Only_
>
> Number `LEFT_ALIGN` = 1818584692
>
> Aligns cells to the left.
> _Read Only_
>
> Number `RIGHT_ALIGN` = 1919379572
>
> Aligns cells to the right.
> _Read Only_
>
> Number `CENTER_ALIGN` = 1667591796
>
> Centers cell alignment.

## AlternateGlyphForms

Substitution choices for standard-glyph alternates.

### Class

> _Read Only_
>
> Number **NONE** = 1852796517
>
> Leaves alternate forms unused.
> _Read Only_
>
> Number `TRADITIONAL_FORM` = 1247897460
>
> Applies the traditional variant.
> _Read Only_
>
> Number `EXPERT_FORM` = 1247897445
>
> Applies the expert variant.
> _Read Only_
>
> Number `JIS78_FORM` = 1247897399
>
> Applies the JIS78 variant.
> _Read Only_
>
> Number `JIS83_FORM` = 1247897400
>
> Applies the JIS83 variant.
> _Read Only_
>
> Number `MONOSPACED_HALF_WIDTH_FORM` = 1247897453
>
> Applies the monospaced half-width variant.
> _Read Only_
>
> Number `THIRD_WIDTH_FORM` = 1247897448
>
> Applies the third-width variant.
> _Read Only_
>
> Number `QUARTER_WIDTH_FORM` = 1247897457
>
> Applies the quarter-width variant.
> _Read Only_
>
> Number `NLC_FORM` = 1247897454
>
> Applies the NLC variant.
> _Read Only_
>
> Number `PROPORTIONAL_WIDTH_FORM` = 1247897456
>
> Replaces half-width and full-width glyphs with proportional glyphs.
> _Read Only_
>
> Number `FULL_WIDTH_FORM` = 1247897446
>
> Applies the full-width variant.
> _Read Only_
>
> Number `JIS04_FORM` = 1247897396
>
> Applies the JIS04 variant.
> _Read Only_
>
> Number `JIS90_FORM` = 1247897401
>
> Applies the JIS90 variant.

## AlternatingFillsTypes

Pattern choices used for alternating fills.

### Class

> _Read Only_
>
> Number `NO_ALTERNATING_PATTERN` = 1097617007
>
> Applies no alternating pattern.
> _Read Only_
>
> Number `ALTERNATING_ROWS` = 1097618039
>
> Uses alternating fills by row.
> _Read Only_
>
> Number `ALTERNATING_COLUMNS` = 1097614188
>
> Uses alternating fills by column.

## AnchorPoint

During transformation operations, this bounding-box reference point stays fixed on the object. Note: Transformation operations cover rotation, scaling, flipping, and shearing.

### Class

> _Read Only_
>
> Number `TOP_LEFT_ANCHOR` = 1095660652
>
> Upper-left corner.
> _Read Only_
>
> Number `TOP_CENTER_ANCHOR` = 1095660643
>
> Center point along the bounding box's top edge.
> _Read Only_
>
> Number `TOP_RIGHT_ANCHOR` = 1095660658
>
> Upper-right corner.
> _Read Only_
>
> Number `LEFT_CENTER_ANCHOR` = 1095658595
>
> Midpoint on the bounding box's left edge.
> _Read Only_
>
> Number `CENTER_ANCHOR` = 1095656308
>
> Middle point of the bounding box.
> _Read Only_
>
> Number `RIGHT_CENTER_ANCHOR` = 1095660131
>
> Midpoint on the bounding box's right edge.
> _Read Only_
>
> Number `BOTTOM_LEFT_ANCHOR` = 1095656044
>
> Lower-left corner.
> _Read Only_
>
> Number `BOTTOM_CENTER_ANCHOR` = 1095656035
>
> Center point along the bounding box's bottom edge.
> _Read Only_
>
> Number `BOTTOM_RIGHT_ANCHOR` = 1095656050
>
> Lower-right corner.

## AnchorPosition

Values that choose where an anchored object sits in relation to its anchor.

### Class

> _Read Only_
>
> Number `INLINE_POSITION` = 1095716969
>
> Aligns the anchored object to the baseline of its containing line.
> _Read Only_
>
> Number `ABOVE_LINE` = 1095716961
>
> Positions the anchored object above the text line that holds it.
> _Read Only_
>
> Number **ANCHORED** = 1097814113
>
> Uses a custom anchor position.

## AnchoredObjectDefault

Default settings for anchored objects.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the AnchoredObjectDefault (a Application or Document).
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
> ContentType **anchorContent**
>
> Starting frame type assigned to a newly created anchored object.
> Measurement Unit (Number or String)=any **initialAnchorHeight**
>
> Starting height assigned to a newly created anchored object.
> Measurement Unit (Number or String)=any **initialAnchorWidth**
>
> Starting width assigned to a newly created anchored object.
> ParagraphStyle **anchoredParagraphStyle**
>
> Starting paragraph style assigned to a newly created anchored object. Note: Applies when anchor content is text.
> ObjectStyle **anchoredObjectStyle**
>
> Starting object style assigned to a newly created anchored object.
> Object **properties**
>
> Lets several properties be set in one operation.

### Methods

> String **toSource**()
>
> Builds a string that can be executed to return the AnchoredObjectDefault.
> AnchoredObjectDefault **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Returns that object's specifier string.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Type of event. |
| Mixed | handler | Handler callback or file. Accepts File or JavaScript Function. |
| Boolean | captures | Optional obsolete parameter. |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Type of registered event. |
| Mixed | handler | Registered handler callback or file. Accepts File or JavaScript Function. |
| Boolean | captures | Optional obsolete parameter. |

## AnchoredObjectSetting

Settings associated with an anchored object.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Allowed AnchoredObjectSetting parents include a Application, Document, EPSText, SplineItem, Polygon, GraphicLine, Rectangle, Oval, Group, TextFrame, EndnoteTextFrame, Button, FormField, SignatureField, TextBox, RadioButton, ListBox, ComboBox, CheckBox, MultiStateObject or ObjectStyle.
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
> AnchorPosition **anchoredPosition**
>
> Position used by the anchored object relative to the anchor.
> Boolean **spineRelative**
>
> When true, the anchored object is positioned relative to the page or spread binding spine.
> Boolean **lockPosition**
>
> When true, users cannot reposition the anchored object manually.
> Boolean **pinPosition**
>
> When true, the anchored object's position stays pinned within the text frame top and bottom.
> AnchorPoint **anchorPoint**
>
> Point on the anchored object used for positioning.
> HorizontalAlignment **horizontalAlignment**
>
> With above-line anchored position, the anchored object is placed relative to the text area. With custom anchored position, the horizontal reference point determines horizontal alignment. Note: Not valid when anchored position is inline.
> AnchoredRelativeTo **horizontalReferencePoint**
>
> Page-based horizontal reference point; applies only when anchored position is custom.
> VerticalAlignment **verticalAlignment**
>
> Alignment between the anchored object reference point and the page's vertical reference point. Notes: Valid only when anchored position is custom.
> VerticallyRelativeTo **verticalReferencePoint**
>
> Page-based vertical reference point; applies when anchored position is custom.
> Measurement Unit (Number or String)=any **anchorXoffset**
>
> Horizontal (x) offset applied to the anchored object.
> Measurement Unit (Number or String)=any **anchorYoffset**
>
> Vertical (y) offset applied to the anchored object. For above-line positioning, this corresponds to the space after property.
> Measurement Unit (Number or String)=any **anchorSpaceAbove**
>
> Space placed above an above-line anchored object.
> Object **properties**
>
> Lets several properties be set in one operation.

### Methods

> **insertAnchoredObject**( InsertionPoint **storyOffset**, AnchorPosition **anchoredPosition** )
>
> Inserts the anchored object into the specified story.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| InsertionPoint | storyOffset | Location inside the story, expressed as an insertion point. |
| AnchorPosition | anchoredPosition | Position of the anchored object relative to the anchor. (Optional) |

> **releaseAnchoredObject**()
>
> Detaches the anchored object from its associated text.
> String **toSource**()
>
> Builds a string that can be executed to return the AnchoredObjectSetting.
> AnchoredObjectSetting **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Returns that object's specifier string.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Type of event. |
| Mixed | handler | Handler callback or file. Accepts File or JavaScript Function. |
| Boolean | captures | Optional obsolete parameter. |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Type of registered event. |
| Mixed | handler | Registered handler callback or file. Accepts File or JavaScript Function. |
| Boolean | captures | Optional obsolete parameter. |

## AnchoredRelativeTo

Horizontal alignment reference point for an anchored object.

### Class

> _Read Only_
>
> Number `COLUMN_EDGE` = 1095787375
>
> Aligns the anchored object with the text or table column edge.
> _Read Only_
>
> Number `TEXT_FRAME` = 1954051174
>
> Aligns the anchored object with the text frame edge.
> _Read Only_
>
> Number `PAGE_MARGINS` = 1095789927
>
> Aligns the anchored object with the page margin.
> _Read Only_
>
> Number `PAGE_EDGE` = 1095790695
>
> Aligns the anchored object with the page edge.
> _Read Only_
>
> Number `ANCHOR_LOCATION` = 1095786862
>
> Aligns the anchored object with its anchor.

## AngleCombobox

Degree input control that combines a pop-up menu with an entry field.

### Instance

> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the AngleCombobox.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the AngleCombobox (a DialogColumn, DialogRow, EnablingGroup or BorderPanel).
> _Read Only_
>
> Number **index**
>
> Index of the AngleCombobox within its containing object.
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
> String **stringList**
>
> Menu items for a dropdown or combobox control, supplied as an array of strings.
> Number **minimumValue**
>
> Minimum value a user may enter in a numeric editbox or combobox. Note: For a measurement editbox or combobox, the value is treated as points regardless of the control's edit units. When the dialog opens, the points value is automatically converted to the edit unit.
> Number **maximumValue**
>
> Maximum value a user may enter in a numeric editbox or combobox. Note: For a measurement editbox or combobox, the value is treated as points regardless of the control's edit units. When the dialog opens, the points value is automatically converted to the edit unit.
> Number **smallNudge**
>
> Increment or decrement applied when the control is selected and the user presses a keyboard arrow key.
> Number **largeNudge**
>
> Increment or decrement applied when the control is selected and the user holds Shift while pressing a keyboard arrow key.
> String **editContents**
>
> Default contents for an editbox control. Note: Choose either edit contents or edit value, not both; when a script includes both, the later setting wins.
> Number **editValue**
>
> Real-number default value for the editbox or combobox. Note: Measurement controls interpret this value in points; the dialog converts that points value into edit units when it opens. Note: Choose either edit value or edit contents, not both; when a script includes both, the later setting wins.
> Number **minWidth**
>
> Control width. For an editbox or combobox, this sets the box's minimum width.
> Object **properties**
>
> Lets several properties be set in one operation.

### Methods

> String **toSource**()
>
> Builds a string that can be executed to return the AngleCombobox.
> AngleCombobox **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Returns that object's specifier string.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Type of event. |
| Mixed | handler | Handler callback or file. Accepts File or JavaScript Function. |
| Boolean | captures | Optional obsolete parameter. |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Type of registered event. |
| Mixed | handler | Registered handler callback or file. Accepts File or JavaScript Function. |
| Boolean | captures | Optional obsolete parameter. |

## AngleComboboxes

Collection containing angle comboboxes.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects in the collection.

### Methods

> AngleCombobox **add**( Object **withProperties** )
>
> Creates an AngleCombobox.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the new AngleCombobox. (Optional) |

> Number **count**()
>
> Shows how many elements the AngleCombobox contains.
> AngleCombobox **item**( Mixed **index** )
>
> Gets the AngleCombobox identified by the specified index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name value; accepts Long Integer or String. |

> AngleCombobox **itemByID**( Number **id** )
>
> Gets the AngleCombobox with the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID. |

> AngleCombobox **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets every AngleCombobox in the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start, supplied as AngleCombobox, Long Integer or String. |
| Mixed | to | Range end, supplied as AngleCombobox, Long Integer or String. |

> AngleCombobox **firstItem**()
>
> Gets the first AngleCombobox in the collection.
> AngleCombobox **lastItem**()
>
> Gets the last AngleCombobox in the collection.
> AngleCombobox **middleItem**()
>
> Gets the middle AngleCombobox in the collection.
> AngleCombobox **previousItem**( AngleCombobox **obj** )
>
> Gets the collection item immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| AngleCombobox | obj | AngleCombobox whose index follows the target AngleCombobox. |

> AngleCombobox **nextItem**( AngleCombobox **obj** )
>
> Gets the collection item immediately after the specified AngleCombobox.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| AngleCombobox | obj | AngleCombobox whose index precedes the target AngleCombobox. |

> AngleCombobox **anyItem**()
>
> Gets any AngleCombobox in the collection.
> AngleCombobox **everyItem**()
>
> Gets every AngleCombobox in the collection.
> String **toSource**()
>
> Builds a string that can be executed to return the AngleCombobox.
> AngleCombobox **[]**( Number **index** )
>
> Gets the AngleCombobox at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index. |
