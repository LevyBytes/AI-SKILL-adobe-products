# Validation Error, Validation Errors, Variable Numbering Styles, Variable Scopes ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: ValidationError; ValidationErrors; VariableNumberingStyles; VariableScopes; VariableTypes; VersionCueSyncStatus; VersionState; VerticalAlignment; VerticalJustification; VerticallyRelativeTo; ViewDisplaySettings; ViewPreference — Instance; ViewZoomBehavior; ViewZoomBehaviors; ViewZoomStyle.

## ValidationError

XML validation error record.

### Instance

> _Read Only_
>
> XMLElement **element**
>
> XMLElement that triggered the validation error.
> _Read Only_
>
> String **attributeName**
>
> Attribute name involved when the validation error points to an attribute.
> _Read Only_
>
> String **errorMessage**
>
> Message text for the validation error.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Document **parent**
>
> Parent object for the ValidationError (a Document).
> _Read Only_
>
> Number **index**
>
> Position of the ValidationError within its containing object.
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
> Object **properties**
>
> Allows several properties to be set at the same time.

### Methods

> String **toSource**()
>
> Builds a string that returns the ValidationError when executed.
> ValidationError **getElements**()
>
> Produces an array of object references after resolving the object specifier.
> String **toSpecifier**()
>
> Gets the specifier string for the object.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers a listener for the event.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type. |
| Mixed | handler | Event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## ValidationErrors

Collection containing XML validation errors.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by the collection.

### Methods

> Number **count**()
>
> Reports the element count for ValidationError.
> ValidationError **item**( Mixed **index** )
>
> Retrieves the ValidationError addressed by the given index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name selector. Can accept: Long Integer or String. |

> ValidationError **itemByRange**( Mixed **from**, Mixed **to** )
>
> Retrieves the ValidationErrors contained in the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting bound for the range: a ValidationError, index, or name. Can accept: ValidationError, Long Integer or String. |
| Mixed | to | Ending bound for the range: a ValidationError, index, or name. Can accept: ValidationError, Long Integer or String. |

> ValidationError **firstItem**()
>
> Retrieves the first ValidationError in the collection.
> ValidationError **lastItem**()
>
> Retrieves the last ValidationError in the collection.
> ValidationError **middleItem**()
>
> Retrieves the middle ValidationError in the collection.
> ValidationError **previousItem**( ValidationError **obj** )
>
> Retrieves the ValidationError at the index before the supplied ValidationError.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ValidationError | obj | ValidationError whose position follows the desired ValidationError. |

> ValidationError **nextItem**( ValidationError **obj** )
>
> Retrieves the ValidationError positioned after the supplied ValidationError in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ValidationError | obj | ValidationError whose position comes before the desired ValidationError. |

> ValidationError **anyItem**()
>
> Retrieves any ValidationError in the collection.
> ValidationError **everyItem**()
>
> Retrieves every ValidationError in the collection.
> String **toSource**()
>
> Builds a string that returns the ValidationError when executed.
> ValidationError **[]**( Number **index** )
>
> Retrieves the ValidationError at the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## VariableNumberingStyles

Number variable numbering style constants.

### Class

> _Read Only_
>
> Number **CURRENT** = 1298363762
>
> Current style.
> _Read Only_
>
> Number **ARABIC** = 1298231906
>
> Arabic numeral format.
> _Read Only_
>
> Number `UPPER_ROMAN` = 1297247605
>
> Uppercase Roman numeral format.
> _Read Only_
>
> Number `LOWER_ROMAN` = 1297247596
>
> Lowercase Roman numeral format.
> _Read Only_
>
> Number `UPPER_LETTERS` = 1296855669
>
> Uppercase letter format.
> _Read Only_
>
> Number `LOWER_LETTERS` = 1296855660
>
> Lowercase letter format.
> _Read Only_
>
> Number `SINGLE_LEADING_ZEROS` = 1297312890
>
> One leading zero.
> _Read Only_
>
> Number `DOUBLE_LEADING_ZEROS` = 1296329850
>
> Two leading zeros.
> _Read Only_
>
> Number **KANJI** = 1296788073
>
> Kanji format.
> _Read Only_
>
> Number `FULL_WIDTH_ARABIC` = 1296455521
>
> Full-width Arabic numeral format.

## VariableScopes

Page number variable scope constants.

### Class

> _Read Only_
>
> Number `DOCUMENT_SCOPE` = 1129538671
>
> Limits scope to the current document.
> _Read Only_
>
> Number `SECTION_SCOPE` = 1129542501
>
> Limits scope to the current section.

## VariableTypes

Text variable type constants.

### Class

> _Read Only_
>
> Number `CUSTOM_TEXT_TYPE` = 1414947700
>
> Custom text variable type.
> _Read Only_
>
> Number `FILE_NAME_TYPE` = 1414948462
>
> File name variable type.
> _Read Only_
>
> Number `LAST_PAGE_NUMBER_TYPE` = 1414952048
>
> Last page number variable type.
> _Read Only_
>
> Number `CHAPTER_NUMBER_TYPE` = 1668183152
>
> Chapter number variable type.
> _Read Only_
>
> Number `OUTPUT_DATE_TYPE` = 1414950756
>
> Output date variable type.
> _Read Only_
>
> Number `CREATION_DATE_TYPE` = 1414947684
>
> Creation date variable type.
> _Read Only_
>
> Number `MODIFICATION_DATE_TYPE` = 1414950244
>
> Modification date variable type.
> _Read Only_
>
> Number `MATCH_CHARACTER_STYLE_TYPE` = 1414947667
>
> Running header variable tied to a character style.
> _Read Only_
>
> Number `MATCH_PARAGRAPH_STYLE_TYPE` = 1414950995
>
> Running header variable tied to a paragraph style.
> _Read Only_
>
> Number `XREF_PAGE_NUMBER_TYPE` = 1414953074
>
> Private page-number variable for cross references.
> _Read Only_
>
> Number `XREF_CHAPTER_NUMBER_TYPE` = 1414947694
>
> Private chapter-number variable for cross references.
> _Read Only_
>
> Number `LIVE_CAPTION_TYPE` = 1414947693
>
> Live Caption variable type.

## VersionCueSyncStatus

Version Cue file synchronization state.

### Class

> _Read Only_
>
> Number `FILE_DOWNLOADED` = 1986220868
>
> The project copy was brought down into the local workspace.
> _Read Only_
>
> Number `FILE_UPLOADED` = 1986220885
>
> The local copy was sent up to the project.
> _Read Only_
>
> Number `FILE_UNLOCKED` = 1986220876
>
> Locally, the file lock was released.
> _Read Only_
>
> Number `FILE_SKIPPED` = 1986220875
>
> Synchronization did not run for the file.
> _Read Only_
>
> Number `FILE_NO_CHANGE` = 1986220878
>
> Synchronization found the local and project versions already matched, so nothing changed.

## VersionState

Version Cue state information for a file version.

### Class

> _Read Only_
>
> Number `VERSION_UNKNOWN` = 1986221653
>
> No known version information is available.
> _Read Only_
>
> Number `PROJECT_FILE_NEWER` = 1986221648
>
> The project copy is ahead of the local file.
> _Read Only_
>
> Number `LOCAL_PROJECT_MATCH` = 1986221645
>
> Local and project versions are the same.
> _Read Only_
>
> Number `LOCAL_NEWER` = 1986221644
>
> Local changes make this version newer than the project copy.
> _Read Only_
>
> Number `VERSION_CONFLICT` = 1986221635
>
> The project file is newer even though local edits also exist.
> _Read Only_
>
> Number `NO_RESOURCE` = 1986221646
>
> Neither a resource nor a local file exists.

## VerticalAlignment

Vertical placement setting for an anchored object.

### Class

> _Read Only_
>
> Number `TOP_ALIGN` = 1953460256
>
> Positions the anchored object at the vertical reference point's top.
> _Read Only_
>
> Number `BOTTOM_ALIGN` = 1651471469
>
> Positions the anchored object at the vertical reference point's bottom.
> _Read Only_
>
> Number `CENTER_ALIGN` = 1667591796
>
> Positions the anchored object on the vertical center of the vertical reference point.

## VerticalJustification

Choices that control vertical text alignment.

### Class

> _Read Only_
>
> Number `TOP_ALIGN` = 1953460256
>
> Text sits at the object's top.
> _Read Only_
>
> Number `CENTER_ALIGN` = 1667591796
>
> Text is vertically centered within the object.
> _Read Only_
>
> Number `BOTTOM_ALIGN` = 1651471469
>
> Text sits at the object's bottom.
> _Read Only_
>
> Number `JUSTIFY_ALIGN` = 1785951334
>
> Text lines are spread vertically from the top of the object to its bottom.

## VerticallyRelativeTo

Vertical reference point used by an anchored object.

### Class

> _Read Only_
>
> Number `COLUMN_EDGE` = 1095787375
>
> Uses the edge of the text or table column as the anchored object's alignment target.
> _Read Only_
>
> Number `TEXT_FRAME` = 1954051174
>
> Uses the text frame edge as the anchored object's alignment target.
> _Read Only_
>
> Number `PAGE_MARGINS` = 1095789927
>
> Uses the page margin as the anchored object's alignment target.
> _Read Only_
>
> Number `PAGE_EDGE` = 1095790695
>
> Uses the page edge as the anchored object's alignment target.
> _Read Only_
>
> Number `LINE_BASELINE` = 1096180321
>
> Uses the baseline of the text line for anchored-object alignment.
> _Read Only_
>
> Number `LINE_XHEIGHT` = 1096185960
>
> Uses the top of lowercase letters without ascenders, such as x, for anchored-object alignment.
> _Read Only_
>
> Number `LINE_ASCENT` = 1096180083
>
> Uses the top of the text's tallest letters for anchored-object alignment.
> _Read Only_
>
> Number **CAPHEIGHT** = 1096185955
>
> Uses the top of capital letters for anchored-object alignment.
> _Read Only_
>
> Number `TOP_OF_LEADING` = 1096180332
>
> Uses the text leading's top for anchored-object alignment.
> _Read Only_
>
> Number `EMBOX_TOP` = 1096181101
>
> Uses the embox top for anchored-object alignment.
> _Read Only_
>
> Number `EMBOX_MIDDLE` = 1096183117
>
> Uses the embox middle for anchored-object alignment.
> _Read Only_
>
> Number `EMBOX_BOTTOM` = 1096183106
>
> Uses the embox bottom for anchored-object alignment.

## ViewDisplaySettings

Display performance choices that affect how quickly and accurately objects are drawn and redrawn.

### Class

> _Read Only_
>
> Number `HIGH_QUALITY` = 1346922866
>
> Prioritizes quality over speed by showing high-resolution graphics, high-quality transparencies, and anti-aliasing.
> _Read Only_
>
> Number **TYPICAL** = 1349810544
>
> Balances speed and quality by showing proxy graphics, low-quality transparencies, and anti-aliasing.
> _Read Only_
>
> Number **OPTIMIZED** = 1349480564
>
> Prioritizes speed by graying out graphics and disabling transparency and anti-aliasing.

## ViewPreference — Instance

> _Read Only_
>
> Boolean **isValid**
>
> Returns true when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for ViewPreference (a Application or Document).
> _Read Only_
>
> Events **events**
>
> Event collection for the object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection for the object.
> Number **pointsPerInch**
>
> Points used per inch, normally 72. (Range: 60 to 80)
> Number **horizontalCustomPoints**
>
> Point distance between major marks on the horizontal ruler. (Range: 4 to 256) Applies only when horizontal measurement units is custom.
> Number **verticalCustomPoints**
>
> Point distance between major marks on the vertical ruler. (Range: 4 to 256) Applies only when vertical measurement units is custom.
> MeasurementUnits **strokeMeasurementUnits**
>
> Unit used for stroke measurement values.
> Number **guideSnaptoZone**
>
> Pixel distance within which objects snap to guides. (Range: 1 to 36) Note: snapping happens only while guides are visible.
> Measurement Unit (Number or String)=any **cursorKeyIncrement**
>
> Arrow-key presses move the selected object by this distance. (Limits by unit: points: 0.001 to 100; picas: 0p0.001 to 8p4; mm: 0 to 35.278; cm: 0 to 3.5278; inches: 0 to 1.3889; ciceros: 0c0.001 to 7c9.839)
> MeasurementUnits **horizontalMeasurementUnits**
>
> Unit applied to the horizontal ruler and horizontally measured areas such as grid columns, horizontal offsets, column gutters, or others.
> MeasurementUnits **verticalMeasurementUnits**
>
> Unit applied to the vertical ruler and vertically measured areas such as grid rows, vertical offsets, row heights, or others.
> RulerOrigin **rulerOrigin**
>
> Default zero point at the vertical and horizontal ruler intersection, plus the horizontal ruler's scope.
> Boolean **showRulers**
>
> When true, the horizontal and vertical rulers are shown.
> Boolean **showFrameEdges**
>
> When true, unselected frame borders and diagonal lines inside empty unselected frames are shown.
> MeasurementUnits **typographicMeasurementUnits**
>
> Units used for typography.
> MeasurementUnits **textSizeMeasurementUnits**
>
> Unit used for text size values.
> MeasurementUnits **printDialogMeasurementUnits**
>
> Unit used in the print dialog.
> Boolean **showNotes**
>
> When true, notes appear.
> Object **properties**
>
> Enables several properties to be assigned together.

### Methods

> String **toSource**()
>
> Builds a string that, when executed, returns the ViewPreference.
> ViewPreference **getElements**()
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

## ViewZoomBehavior

Object representing view zoom behavior.

### Instance

> _Read Only_
>
> String **name**
>
> Name assigned to the ViewZoomBehavior.
> _Read Only_
>
> Number **id**
>
> Unique ID for the ViewZoomBehavior.
> _Read Only_
>
> Boolean **isValid**
>
> Returns true when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for ViewZoomBehavior; one of: Button, CheckBox, ComboBox, ListBox, RadioButton, TextBox or SignatureField.
> _Read Only_
>
> Number **index**
>
> Position of the ViewZoomBehavior inside its containing object.
> _Read Only_
>
> Events **events**
>
> Event collection for the object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection for the object.
> ViewZoomStyle **viewZoomStyle**
>
> Zoom style used by the view.
> Boolean **enableBehavior**
>
> When true, this behavior is active.
> BehaviorEvents **behaviorEvent**
>
> Event that starts the behavior.
> String **label**
>
> String-valued label property.
> Object **properties**
>
> Enables several properties to be assigned together.

### Methods

> **remove**()
>
> Removes this ViewZoomBehavior.
> **insertLabel**( String **key**, String **value** )
>
> Stores the supplied value under the specified key in the label.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key. |
| String | value | Value. |

> String **extractLabel**( String **key** )
>
> Retrieves the label value stored for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key. |

> String **toSource**()
>
> Builds a string that, when executed, returns the ViewZoomBehavior.
> ViewZoomBehavior **getElements**()
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

## ViewZoomBehaviors

Collection containing view zoom behavior objects.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects in the collection.

### Methods

> Number **count**()
>
> Reports the element count for the ViewZoomBehavior collection.
> ViewZoomBehavior **add**( Object **withProperties** )
>
> Adds a ViewZoomBehavior.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the new ViewZoomBehavior. (Optional) |

> ViewZoomBehavior **item**( Mixed **index** )
>
> Returns the ViewZoomBehavior identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index/name selector. Can accept: Long Integer or String. |

> ViewZoomBehavior **itemByName**( String **name** )
>
> Gets the ViewZoomBehavior whose name is supplied.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name. |

> ViewZoomBehavior **itemByID**( Number **id** )
>
> Returns the ViewZoomBehavior with the supplied ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID. |

> ViewZoomBehavior **itemByRange**( Mixed **from**, Mixed **to** )
>
> Returns the ViewZoomBehaviors in the supplied range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | ViewZoomBehavior, index, or name at the range start. Can accept: ViewZoomBehavior, Long Integer or String. |
| Mixed | to | ViewZoomBehavior, index, or name at the range end. Can accept: ViewZoomBehavior, Long Integer or String. |

> ViewZoomBehavior **firstItem**()
>
> Returns the collection's first ViewZoomBehavior.
> ViewZoomBehavior **lastItem**()
>
> Returns the collection's last ViewZoomBehavior.
> ViewZoomBehavior **middleItem**()
>
> Returns the collection's middle ViewZoomBehavior.
> ViewZoomBehavior **previousItem**( ViewZoomBehavior **obj** )
>
> Returns the ViewZoomBehavior with the index before the specified one.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ViewZoomBehavior | obj | Index of the ViewZoomBehavior that follows the target ViewZoomBehavior. |

> ViewZoomBehavior **nextItem**( ViewZoomBehavior **obj** )
>
> Returns the ViewZoomBehavior whose index is after the supplied ViewZoomBehavior in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ViewZoomBehavior | obj | ViewZoomBehavior whose index is before the target ViewZoomBehavior. |

> ViewZoomBehavior **anyItem**()
>
> Returns any ViewZoomBehavior from the collection.
> ViewZoomBehavior **everyItem**()
>
> Returns every ViewZoomBehavior in the collection.
> String **toSource**()
>
> Builds a string that, when executed, returns the ViewZoomBehavior.
> ViewZoomBehavior **[]**( Number **index** )
>
> Returns the ViewZoomBehavior at the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index. |

## ViewZoomStyle

Options for view zoom style.

### Class

> _Read Only_
>
> Number `FULL_SCREEN` = 1987733107
>
> Expands the page to fill the screen; hidden interface parts include toolbar plus command bar, menu bar, and window controls.
> _Read Only_
>
> Number `ZOOM_IN` = 2053990766
>
> Moves the view up to the next preset magnification percentage.
> _Read Only_
>
> Number `ZOOM_OUT` = 2054124916
>
> Moves the view down to the previous preset magnification percentage.
> _Read Only_
>
> Number `FIT_PAGE` = 2053534832
>
> Fits the whole page inside the window.
> _Read Only_
>
> Number `ACTUAL_SIZE` = 2053206906
>
> Uses 100% magnification for page display.
> _Read Only_
>
> Number `FIT_WIDTH` = 1212437335
>
> Fits the page to the window width, with possible hiding of the page's lower portion.
> _Read Only_
>
> Number `FIT_VISIBLE` = 1212437334
>
> Fits the text area of the page to the window width, while hiding page margins and possibly the lower portion of the page.
> _Read Only_
>
> Number `SINGLE_PAGE` = 1987736432
>
> Shows one page at a time in the document pane.
> _Read Only_
>
> Number `ONE_COLUMN` = 1987735395
>
> Places pages in a continuous vertical column one page wide.
> _Read Only_
>
> Number `TWO_COLUMN` = 1987736675
>
> Places pages side by side in a continuous vertical column two pages wide.
