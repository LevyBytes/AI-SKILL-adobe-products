# Signature Fields, Signature Size Options, Single Word Justification, Size Type Enum ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: SignatureFields; SignatureSizeOptions; SingleWordJustification; SizeTypeEnum; SmartGuidePreference; SmartMatchOptions; SmoothScrollingOptions; SnapshotBlendingModes; Snippet; Snippets; SortAssets; SoundBehavior; SoundBehaviors; SoundPosterTypes.

## SignatureFields

Collection containing signature fields.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects in this collection.

### Methods

> Number **count**()
>
> Reports how many elements the SignatureField collection contains.
> SignatureField **add**( Layer **layer**, LocationOptions **at**, Mixed **reference**, Object **withProperties** )
>
> Adds a new SignatureField.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Layer | layer | Layer used to create the SignatureField. (Optional) |
| LocationOptions | at | Insertion point for the SignatureField, relative to the reference object or inside the container object. (Optional) |
| Mixed | reference | Reference object. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. Note: supply this when the at parameter is before or after. (Optional) |
| Object | withProperties | Starting property values for the new SignatureField. (Optional) |

> SignatureField **item**( Mixed **index** )
>
> Gets the SignatureField identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Either the index or the name. Can accept: Long Integer or String. |

> SignatureField **itemByName**( String **name** )
>
> Gets the SignatureField matching the supplied name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> SignatureField **itemByID**( Number **id** )
>
> Gets the SignatureField matching the supplied ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> SignatureField **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the SignatureFields included in the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start, given as a SignatureField, index, or name. Can accept: SignatureField, Long Integer or String. |
| Mixed | to | Range end, given as a SignatureField, index, or name. Can accept: SignatureField, Long Integer or String. |

> SignatureField **firstItem**()
>
> Gets the first SignatureField in the collection.
> SignatureField **lastItem**()
>
> Gets the last SignatureField in the collection.
> SignatureField **middleItem**()
>
> Gets the middle SignatureField in the collection.
> SignatureField **previousItem**( SignatureField **obj** )
>
> Gets the SignatureField positioned immediately before obj.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SignatureField | obj | SignatureField whose position follows the desired SignatureField. |

> SignatureField **nextItem**( SignatureField **obj** )
>
> Gets the SignatureField positioned immediately after obj.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SignatureField | obj | SignatureField whose position precedes the desired SignatureField. |

> SignatureField **anyItem**()
>
> Gets any SignatureField in the collection.
> SignatureField **everyItem**()
>
> Gets every SignatureField in the collection.
> String **toSource**()
>
> Builds a string that returns the SignatureField when executed.
> SignatureField **[]**( Number **index** )
>
> Gets the SignatureField at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index to use. |

## SignatureSizeOptions

Options for signature size.

### Class

> _Read Only_
>
> Number `SIGNATURE_SIZE_4` = 1112748084
>
> Represents signature size 4.
> _Read Only_
>
> Number `SIGNATURE_SIZE_8` = 1112748088
>
> Represents signature size 8.
> _Read Only_
>
> Number `SIGNATURE_SIZE_12` = 1112748338
>
> Represents signature size 12.
> _Read Only_
>
> Number `SIGNATURE_SIZE_16` = 1112748342
>
> Represents signature size 16.
> _Read Only_
>
> Number `SIGNATURE_SIZE_32` = 1112748850
>
> Represents signature size 32.

## SingleWordJustification

Options for aligning a line made up of one word.

### Class

> _Read Only_
>
> Number `LEFT_ALIGN` = 1818584692
>
> Aligns the word to the left.
> _Read Only_
>
> Number `CENTER_ALIGN` = 1667591796
>
> Centers the word.
> _Read Only_
>
> Number `RIGHT_ALIGN` = 1919379572
>
> Aligns the word to the right.
> _Read Only_
>
> Number `FULLY_JUSTIFIED` = 1718971500
>
> Justifies the single word fully.

## SizeTypeEnum

Options for size type.

### Class

> _Read Only_
>
> Number `NONE_SIZE` = 1315925587
>
> No size setting.
> _Read Only_
>
> Number `DEFAULT_SIZE` = 1147491177
>
> Default size setting.
> _Read Only_
>
> Number `FIXED_SIZE` = 1181317203
>
> Fixed size setting.
> _Read Only_
>
> Number `RELATIVE_TO_TEXT_FLOW` = 1383289940
>
> Size relative to text flow.
> _Read Only_
>
> Number `RELATIVE_TO_TEXT_SIZE` = 1383486579
>
> Size relative to text size.
> _Read Only_
>
> Number `USE_CUSTOM_WIDTH` = 1430476649
>
> Uses a custom width.
> _Read Only_
>
> Number `USE_CUSTOM_HEIGHT` = 1430472805
>
> Uses a custom height.

## SmartGuidePreference

Preferences for Smart Guide behavior.

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
> Parent object for the SmartGuidePreference (a Application).
> _Read Only_
>
> Events **events**
>
> Collection containing events.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Collection containing event listeners.
> Boolean **enabled**
>
> When true, smart guides are enabled.
> Boolean **alignToObjectEdges**
>
> When true, smart alignment uses object edges.
> Boolean **alignToObjectCenter**
>
> When true, smart alignment uses object centers.
> Boolean **smartDimensions**
>
> When true, smart dimensions guides are enabled.
> Boolean **smartSpacing**
>
> When true, smart spacing guides are enabled.
> Mixed **guideColor**
>
> Guide color, supplied either as a three-double array with each value in the 0 to 255 range for R, G, and B. A UI color is also valid. Returns may be: Array of 3 Reals (0 - 255) or UIColors enumerator.
> Object **properties**
>
> Enables setting several properties in one assignment.

### Methods

> String **toSource**()
>
> Builds a string that returns the SmartGuidePreference when executed.
> SmartGuidePreference **getElements**()
>
> Converts the object specifier into an array of object references.
> String **toSpecifier**()
>
> Returns this object's specifier.
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

## SmartMatchOptions

Name-matching choices used while synchronizing styles in a book.

### Class

> _Read Only_
>
> Number `MATCH_STYLE_PATH` = 1936549488
>
> Uses the style's full path when searching for styles in target.
> _Read Only_
>
> Number `MATCH_STYLE_NAME` = 1936552814
>
> Uses just the style name when searching for styles in target.

## SmoothScrollingOptions

Option controlling smooth scrolling.

### Class

> _Read Only_
>
> Number `NO_SMOOTH_SCROLL` = 1699959662
>
> Disables smooth scrolling.
> _Read Only_
>
> Number **VERTICAL** = 1986359924
>
> Enables vertical smooth scrolling.
> _Read Only_
>
> Number **HORIZONTAL** = 1752134266
>
> Enables horizontal smooth scrolling.
> _Read Only_
>
> Number `VERTICAL_AND_HORIZONTAL` = 1699959650
>
> Enables vertical and horizontal smooth scrolling.

## SnapshotBlendingModes

Blending modes that choose which nearby snapshots, based on size and shape, feed into the new layout.

### Class

> _Read Only_
>
> Number `IGNORE_LAYOUT_SNAPSHOTS` = 1399736679
>
> Disables layout snapshot influence entirely.
> _Read Only_
>
> Number `USE_NEAREST_SNAPSHOT` = 1399737957
>
> Uses the layout snapshot closest to the new layout in size and shape.
> _Read Only_
>
> Number `LIMITED_SNAPSHOT_BLENDING` = 1399737449
>
> Uses only layout snapshots from the same class as the new layout.
> _Read Only_
>
> Number `FULL_SNAPSHOT_BLENDING` = 1399735925
>
> Uses as many as three closest snapshots, including snapshots in a different class than the new layout.

## Snippet

IDML snippet object.

### Class

> _Read Only_
>
> String `BEFORE_PLACE` = beforePlace
>
> Fires before a Snippet is placed. This event bubbles and can be canceled.

### Instance

> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the Snippet.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> PlaceGun **parent**
>
> Parent object for the Snippet (a PlaceGun).
> _Read Only_
>
> Number **index**
>
> Position of the Snippet within its containing object.
> _Read Only_
>
> PageItems **pageItems**
>
> Collection of page items that lets callers process every page item in a container, such as a document, page, or group, without filtering by type.
> _Read Only_
>
> TextFrames **textFrames**
>
> Collection containing text frames.
> _Read Only_
>
> Rectangles **rectangles**
>
> Collection containing rectangles.
> _Read Only_
>
> SplineItems **splineItems**
>
> Collection containing spline items.
> _Read Only_
>
> Ovals **ovals**
>
> Collection containing ellipses.
> _Read Only_
>
> GraphicLines **graphicLines**
>
> Collection containing graphic lines.
> _Read Only_
>
> Polygons **polygons**
>
> Collection containing polygons.
> _Read Only_
>
> Groups **groups**
>
> Collection containing groups.
> _Read Only_
>
> Buttons **buttons**
>
> Collection containing buttons.
> _Read Only_
>
> FormFields **formFields**
>
> Collection containing form fields.
> _Read Only_
>
> MultiStateObjects **multiStateObjects**
>
> Collection containing multi-state objects.
> _Read Only_
>
> EPSTexts **epstexts**
>
> EPSTexts
> _Read Only_
>
> Images **images**
>
> Collection containing bitmap images across bitmap file formats such as TIFF, JPEG, or GIF.
> _Read Only_
>
> Graphics **graphics**
>
> Collection containing imported graphics across graphic file formats: vector, metafile, or bitmap.
> _Read Only_
>
> EPSs **epss**
>
> Collection containing EPS files.
> _Read Only_
>
> WMFs **wmfs**
>
> Collection containing WMF graphics.
> _Read Only_
>
> PICTs **picts**
>
> Collection containing PICT graphics.
> _Read Only_
>
> PDFs **pdfs**
>
> Collection containing PDF files.
> _Read Only_
>
> CheckBoxes **checkBoxes**
>
> Collection containing checkboxes.
> _Read Only_
>
> ComboBoxes **comboBoxes**
>
> Collection containing comboboxes.
> _Read Only_
>
> ListBoxes **listBoxes**
>
> Collection containing listboxes.
> _Read Only_
>
> RadioButtons **radioButtons**
>
> Collection containing radio buttons.
> _Read Only_
>
> TextBoxes **textBoxes**
>
> Collection containing text boxes.
> _Read Only_
>
> SignatureFields **signatureFields**
>
> Collection containing signature fields.
> _Read Only_
>
> Events **events**
>
> Collection containing events.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Collection containing event listeners.
> _Read Only_
>
> SVGs **svgs**
>
> Collection containing SVG files.
> String **label**
>
> String property that may hold any string value.
> String **name**
>
> Snippet name; this aliases the Snippet's label property.
> Object **properties**
>
> Enables setting several properties in one assignment.

### Methods

> **remove**()
>
> Removes the Snippet.
> **insertLabel**( String **key**, String **value** )
>
> Stores value as the label entry associated with the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key for the label entry. |
| String | value | Value to store. |

> String **extractLabel**( String **key** )
>
> Reads the label value stored for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key to look up. |

> String **toSource**()
>
> Builds executable text that evaluates back to this Snippet.
> Snippet **getElements**()
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
| String | eventType | Event type value. |
| Mixed | handler | Event handler target. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type value. |
| Mixed | handler | Registered event handler target. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## Snippets

Collection containing IDML snippets.

### Instance

> _Read Only_
>
> Number **length**
>
> Object count for the collection.

### Methods

> Number **count**()
>
> Reports how many Snippet elements are present.
> Snippet **item**( Mixed **index** )
>
> Gets the Snippet addressed by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name value. Accepts: Long Integer or String. |

> Snippet **itemByName**( String **name** )
>
> Gets the Snippet matching the supplied name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> Snippet **itemByID**( Number **id** )
>
> Gets the Snippet matching the supplied ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> Snippet **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the Snippets spanning the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting Snippet, index, or name for the range. Accepts: Snippet, Long Integer or String. |
| Mixed | to | Ending Snippet, index, or name for the range. Accepts: Snippet, Long Integer or String. |

> Snippet **firstItem**()
>
> Gets the first Snippet in the collection.
> Snippet **lastItem**()
>
> Gets the last Snippet in the collection.
> Snippet **middleItem**()
>
> Gets the middle Snippet in the collection.
> Snippet **previousItem**( Snippet **obj** )
>
> Gets the Snippet positioned immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Snippet | obj | Snippet index that follows the desired Snippet. |

> Snippet **nextItem**( Snippet **obj** )
>
> Gets the Snippet whose index comes after the specified Snippet in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Snippet | obj | Snippet whose index comes before the desired Snippet. |

> Snippet **anyItem**()
>
> Gets any Snippet in the collection.
> Snippet **everyItem**()
>
> Gets every Snippet in the collection.
> String **toSource**()
>
> Builds executable text that evaluates back to this Snippet.
> Snippet **[]**( Number **index** )
>
> Gets the Snippet at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## SortAssets

Options controlling sort order.

### Class

> _Read Only_
>
> Number `BY_NAME` = 1699955278
>
> Orders by name.
> _Read Only_
>
> Number `BY_OLDEST` = 1699955279
>
> Places oldest entries first.
> _Read Only_
>
> Number `BY_NEWEST` = 1699955310
>
> Places newest entries first.
> _Read Only_
>
> Number `BY_TYPE` = 1699955284
>
> Orders by type.

## SoundBehavior

Object representing sound behavior.

### Instance

> _Read Only_
>
> String **name**
>
> Name assigned to the SoundBehavior.
> _Read Only_
>
> Number **id**
>
> Unique SoundBehavior ID.
> _Read Only_
>
> Boolean **isValid**
>
> Returns true when resolution of the object specifier produces valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Containing object for this SoundBehavior; possible parents are Button, CheckBox, ComboBox, ListBox, RadioButton, TextBox or SignatureField.
> _Read Only_
>
> Number **index**
>
> Position of the SoundBehavior inside its containing object.
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
> Sound **soundItem**
>
> Sound page item.
> PlayOperations **operation**
>
> Playback mode.
> Boolean **enableBehavior**
>
> True enables the behavior.
> BehaviorEvents **behaviorEvent**
>
> Event that triggers the behavior.
> String **label**
>
> String-backed label property.
> Object **properties**
>
> Property bag for setting several properties together.

### Methods

> **remove**()
>
> Deletes the SoundBehavior.
> **insertLabel**( String **key**, String **value** )
>
> Stores a label entry under the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |
| String | value | Value to store. |

> String **extractLabel**( String **key** )
>
> Returns the label entry for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |

> String **toSource**()
>
> Builds executable text that evaluates back to this SoundBehavior.
> SoundBehavior **getElements**()
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
| String | eventType | Event type value. |
| Mixed | handler | Event handler target. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type value. |
| Mixed | handler | Registered event handler target. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## SoundBehaviors

Collection containing sound behavior objects.

### Instance

> _Read Only_
>
> Number **length**
>
> Object count for the collection.

### Methods

> Number **count**()
>
> Reports how many SoundBehavior elements are present.
> SoundBehavior **add**( Object **withProperties** )
>
> Creates a SoundBehavior.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Initial property values for the new SoundBehavior. (Optional) |

> SoundBehavior **item**( Mixed **index** )
>
> Gets the SoundBehavior addressed by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name value. Accepts: Long Integer or String. |

> SoundBehavior **itemByName**( String **name** )
>
> Gets the SoundBehavior matching the supplied name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> SoundBehavior **itemByID**( Number **id** )
>
> Gets the SoundBehavior matching the supplied ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> SoundBehavior **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the SoundBehaviors spanning the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting SoundBehavior, index, or name for the range. Accepts: SoundBehavior, Long Integer or String. |
| Mixed | to | Ending SoundBehavior, index, or name for the range. Accepts: SoundBehavior, Long Integer or String. |

> SoundBehavior **firstItem**()
>
> Gets the first SoundBehavior in the collection.
> SoundBehavior **lastItem**()
>
> Gets the last SoundBehavior in the collection.
> SoundBehavior **middleItem**()
>
> Gets the middle SoundBehavior in the collection.
> SoundBehavior **previousItem**( SoundBehavior **obj** )
>
> Gets the SoundBehavior positioned immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SoundBehavior | obj | SoundBehavior index that follows the desired SoundBehavior. |

> SoundBehavior **nextItem**( SoundBehavior **obj** )
>
> Gets the SoundBehavior whose index comes after the specified SoundBehavior in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SoundBehavior | obj | SoundBehavior whose index comes before the desired SoundBehavior. |

> SoundBehavior **anyItem**()
>
> Gets any SoundBehavior in the collection.
> SoundBehavior **everyItem**()
>
> Gets every SoundBehavior in the collection.
> String **toSource**()
>
> Builds executable text that evaluates back to this SoundBehavior.
> SoundBehavior **[]**( Number **index** )
>
> Gets the SoundBehavior at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## SoundPosterTypes

Options for sound poster graphics.

### Class

> _Read Only_
>
> Number **NONE** = 1852796517
>
> No sound poster is used.
> _Read Only_
>
> Number **STANDARD** = 2020623970
>
> Uses a generic sound poster.
> _Read Only_
>
> Number `PROXY_IMAGE` = 1299216505
>
> Uses a proxy image sound poster.
