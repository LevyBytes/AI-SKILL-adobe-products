# Text Style Ranges, Text Type Alignments, Text Variable Instance, Text Variable Instances ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: TextStyleRanges; TextTypeAlignments; TextVariableInstance; TextVariableInstances; TextVariable; TextVariables; TextWrapModes; TextWrapPreference; TextWrapSideOptions.

## TextStyleRanges

Text style range collection.

### Instance

> _Read Only_
>
> Number **length**
>
> Object count in the collection.

### Methods

> Number **count**()
>
> Shows the element count for TextStyleRange.
> TextStyleRange **item**( Mixed **index** )
>
> Gets the TextStyleRange identified by the specified index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index/name identifier. Can accept: Long Integer or String. |

> TextStyleRange **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the TextStyleRanges included in the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting TextStyleRange, index, or name for the range. Can accept: TextStyleRange, Long Integer or String. |
| Mixed | to | Ending TextStyleRange, index, or name for the range. Can accept: TextStyleRange, Long Integer or String. |

> TextStyleRange **firstItem**()
>
> Gets the first TextStyleRange in the collection.
> TextStyleRange **lastItem**()
>
> Gets the last TextStyleRange in the collection.
> TextStyleRange **middleItem**()
>
> Gets the middle TextStyleRange in the collection.
> TextStyleRange **previousItem**( TextStyleRange **obj** )
>
> Gets the TextStyleRange positioned immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| TextStyleRange | obj | Index of the TextStyleRange that comes after the desired TextStyleRange. |

> TextStyleRange **nextItem**( TextStyleRange **obj** )
>
> Gets the TextStyleRange positioned immediately after the specified TextStyleRange in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| TextStyleRange | obj | TextStyleRange that comes before the desired TextStyleRange. |

> TextStyleRange **anyItem**()
>
> Gets any TextStyleRange in the collection.
> TextStyleRange **everyItem**()
>
> Gets every TextStyleRange in the collection.
> String **toSource**()
>
> Builds a string that can be executed to return the TextStyleRange.
> TextStyleRange **[]**( Number **index** )
>
> Gets the TextStyleRange at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## TextTypeAlignments

Text alignment relative to the path.

### Class

> _Read Only_
>
> Number `ASCENDER_TEXT_ALIGNMENT` = 1952538995
>
> Places the ascender on the path (not the path's stroke).
> _Read Only_
>
> Number `DESCENDER_TEXT_ALIGNMENT` = 1952539763
>
> Places descender on the path (not the path's stroke).
> _Read Only_
>
> Number `CENTER_TEXT_ALIGNMENT` = 1952539508
>
> Places the midpoint between the ascender and the descender on the path (not the path's stroke).
> _Read Only_
>
> Number `BASELINE_TEXT_ALIGNMENT` = 1952539244
>
> Places the text baseline on the path (not the path's stroke).
> _Read Only_
>
> Number `ABOVE_RIGHT_EM_BOX_TEXT_ALIGNMENT` = 1952543333
>
> Places the em box top-edge or right-edge baseline on the path.
> _Read Only_
>
> Number `BELOW_LEFT_EM_BOX_TEXT_ALIGNMENT` = 1952607333
>
> Places the em box bottom-edge or left-edge baseline on the path.
> _Read Only_
>
> Number `ABOVE_RIGHT_ICF_BOX_TEXT_ALIGNMENT` = 1952543337
>
> Places the ideographic character face box top-edge or right-edge baseline on the path.
> _Read Only_
>
> Number `BELOW_LEFT_ICF_BOX_TEXT_ALIGNMENT` = 1952607337
>
> Places the ideographic character face box bottom-edge or left-edge baseline on the path.

## TextVariableInstance

Text variable instance within text.

### Instance

> _Read Only_
>
> String **name**
>
> TextVariableInstance name.
> _Read Only_
>
> String **resultText**
>
> Replacement text used for the variable marker. Note: This property is read-only; use it only when updating variables.
> _Read Only_
>
> InsertionPoint **storyOffset**
>
> Insertion point before the table within the story that contains the table.
> _Read Only_
>
> Number **id**
>
> Unique ID for the TextVariableInstance.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Owning object for the TextVariableInstance; one of XmlStory, TextFrame, EndnoteTextFrame, Story, Note, Cell, Footnote or Change.
> _Read Only_
>
> Number **index**
>
> Position of the TextVariableInstance inside its containing object.
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
> TextVariable **associatedTextVariable**
>
> Associated text variable.
> String **label**
>
> Settable string property.
> Object **properties**
>
> Lets several properties be set in one operation.

### Methods

> **remove**()
>
> Removes the TextVariableInstance.
> Text **convertToText**()
>
> Turns the footnote into story text and inserts that converted text where the footnote marker previously stood in the text.
> **insertLabel**( String **key**, String **value** )
>
> Assigns a label value for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key. |
| String | value | Value. |

> String **extractLabel**( String **key** )
>
> Retrieves the label value for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key. |

> String **toSource**()
>
> Builds a string that can be executed to return the TextVariableInstance.
> TextVariableInstance **getElements**()
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
| Mixed | handler | Handler already registered. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## TextVariableInstances

Text variable instance collection.

### Instance

> _Read Only_
>
> Number **length**
>
> Object count in the collection.

### Methods

> Number **count**()
>
> Shows the element count for TextVariableInstance.
> TextVariableInstance **add**( LocationOptions **to**, Mixed **reference**, Object **withProperties** )
>
> Creates a text variable instance at the requested location.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | to | Location relative to the reference object or inside the containing object. (Optional) |
| Mixed | reference | Reference object; required only for before/after placement. Accepted values: TextVariableInstance, XmlStory, TextFrame, EndnoteTextFrame, Story, Note, Cell, Footnote, Table, TextColumn, TextStyleRange, Text, InsertionPoint, Paragraph, Line, Word, Character or Change. (Optional) |
| Object | withProperties | Starting property values for the new TextVariableInstance. (Optional) |

> TextVariableInstance **item**( Mixed **index** )
>
> Gets the TextVariableInstance identified by the specified index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index/name identifier. Can accept: Long Integer or String. |

> TextVariableInstance **itemByName**( String **name** )
>
> Gets the TextVariableInstance with the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name. |

> TextVariableInstance **itemByID**( Number **id** )
>
> Gets the TextVariableInstance with the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID. |

> TextVariableInstance **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the TextVariableInstances included in the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting TextVariableInstance, index, or name for the range. Can accept: TextVariableInstance, Long Integer or String. |
| Mixed | to | Ending TextVariableInstance, index, or name for the range. Can accept: TextVariableInstance, Long Integer or String. |

> TextVariableInstance **firstItem**()
>
> Gets the first TextVariableInstance in the collection.
> TextVariableInstance **lastItem**()
>
> Gets the last TextVariableInstance in the collection.
> TextVariableInstance **middleItem**()
>
> Gets the middle TextVariableInstance in the collection.
> TextVariableInstance **previousItem**( TextVariableInstance **obj** )
>
> Gets the TextVariableInstance positioned immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| TextVariableInstance | obj | Index of the TextVariableInstance that comes after the desired TextVariableInstance. |

> TextVariableInstance **nextItem**( TextVariableInstance **obj** )
>
> Gets the TextVariableInstance positioned immediately after the specified TextVariableInstance in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| TextVariableInstance | obj | TextVariableInstance that comes before the desired TextVariableInstance. |

> TextVariableInstance **anyItem**()
>
> Gets any TextVariableInstance in the collection.
> TextVariableInstance **everyItem**()
>
> Gets every TextVariableInstance in the collection.
> String **toSource**()
>
> Builds a string that can be executed to return the TextVariableInstance.
> TextVariableInstance **[]**( Number **index** )
>
> Gets the TextVariableInstance at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## TextVariable

Text variable definition for a document.

### Instance

> _Read Only_
>
> TextVariableInstance **associatedInstances**
>
> Variable instances linked to the text variable.
> _Read Only_
>
> Mixed **variableOptions**
>
> Preference object for this text variable. Possible returns: PageNumberVariablePreference, ChapterNumberVariablePreference, DateVariablePreference, FileNameVariablePreference, MatchCharacterStylePreference, MatchParagraphStylePreference, CustomTextVariablePreference or CaptionMetadataVariablePreference.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent of the TextVariable (a Application or Document).
> _Read Only_
>
> Number **index**
>
> Position of the TextVariable inside its containing object.
> _Read Only_
>
> Preferences **preferences**
>
> Collection of preferences objects.
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
> TextVariable name.
> VariableTypes **variableType**
>
> Variable type.
> Object **properties**
>
> Lets several properties be set in one operation.

### Methods

> **remove**()
>
> Removes the TextVariable.
> Text **convertToText**()
>
> Converts all instances of this variable to text.
> String **toSource**()
>
> Builds a string that can be executed to return the TextVariable.
> TextVariable **getElements**()
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
| Mixed | handler | Handler already registered. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## TextVariables

Text variable collection.

### Instance

> _Read Only_
>
> Number **length**
>
> Object count in the collection.

### Methods

> TextVariable **add**( Object **withProperties** )
>
> Creates a TextVariable.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the new TextVariable. (Optional) |

> Number **count**()
>
> Shows the element count for TextVariable.
> TextVariable **item**( Mixed **index** )
>
> Gets the TextVariable identified by the specified index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index/name identifier. Can accept: Long Integer or String. |

> TextVariable **itemByName**( String **name** )
>
> Gets the TextVariable with the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name. |

> TextVariable **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the TextVariables included in the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting TextVariable, index, or name for the range. Can accept: TextVariable, Long Integer or String. |
| Mixed | to | Ending TextVariable, index, or name for the range. Can accept: TextVariable, Long Integer or String. |

> TextVariable **firstItem**()
>
> Gets the first TextVariable in the collection.
> TextVariable **lastItem**()
>
> Gets the last TextVariable in the collection.
> TextVariable **middleItem**()
>
> Gets the middle TextVariable in the collection.
> TextVariable **previousItem**( TextVariable **obj** )
>
> Gets the TextVariable positioned immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| TextVariable | obj | Index of the TextVariable that comes after the desired TextVariable. |

> TextVariable **nextItem**( TextVariable **obj** )
>
> Gets the TextVariable positioned immediately after the specified TextVariable in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| TextVariable | obj | TextVariable that comes before the desired TextVariable. |

> TextVariable **anyItem**()
>
> Gets any TextVariable in the collection.
> TextVariable **everyItem**()
>
> Gets every TextVariable in the collection.
> String **toSource**()
>
> Builds a string that can be executed to return the TextVariable.
> TextVariable **[]**( Number **index** )
>
> Gets the TextVariable at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## TextWrapModes

Text wrapping choices for an object.

### Class

> _Read Only_
>
> Number **NONE** = 1852796517
>
> Disables text wrap.
> _Read Only_
>
> Number `JUMP_OBJECT_TEXT_WRAP` = 1650552420
>
> Moves text above or below the object so none appears on the object's left or right.
> _Read Only_
>
> Number `NEXT_COLUMN_TEXT_WRAP` = 1853384306
>
> Moves text into the following available column.
> _Read Only_
>
> Number `BOUNDING_BOX_TEXT_WRAP` = 1651729523
>
> Text flows around the object's bounding box edges.
> _Read Only_
>
> Number **CONTOUR** = 1835233134
>
> Wraps text around the object using the specified contour options.

## TextWrapPreference

Text wrap preference settings.

### Instance

> _Read Only_
>
> ContourOption **contourOptions**
>
> Defines the contour used by the text wrap; applies only when the text wrap type is contour.
> _Read Only_
>
> Boolean **userModifiedWrap**
>
> True indicates that the user has directly changed the text wrap path.
> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier maps to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Identifies the parent for TextWrapPreference (a PageItem, HtmlItem, FormField, SignatureField, TextBox, RadioButton, ListBox, ComboBox, CheckBox, MultiStateObject, Button, MediaItem, Sound, Movie, EPSText, SplineItem, Polygon, GraphicLine, Rectangle, Oval, Graphic, SVG, ImportedPage, PICT, WMF, PDF, EPS, Image, Group, TextFrame, EndnoteTextFrame, Application, Document or ObjectStyle).
> _Read Only_
>
> Preferences **preferences**
>
> Holds a collection of preferences objects.
> _Read Only_
>
> Paths **paths**
>
> Holds a collection of paths.
> _Read Only_
>
> Events **events**
>
> Holds a collection of events.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Holds a collection of event listeners.
> Mixed **textWrapOffset**
>
> The smallest separation between text and the wrapped object's edges. The value shape depends on the selected text wrap type. For jump object text wrap, provide 2 values as [top, bottom]. For next column text wrap or contour, provide one value. For bounding box text wrap, provide 4 values as [top, left, bottom, right]. Can return: Unit, Array of Units or NothingEnum enumerator.
> Boolean **inverse**
>
> When true, flips the text wrap behavior to its inverse.
> Boolean **applyToMasterPageOnly**
>
> When true, a master-spread text wrap affects only that master spread and does not propagate to pages using the master.
> TextWrapSideOptions **textWrapSide**
>
> Options that determine the side used for text wrap.
> TextWrapModes **textWrapMode**
>
> Mode used for the text wrap.
> Object **properties**
>
> Lets several properties be assigned in one operation.

### Methods

> String **toSource**()
>
> Builds a string that, when executed, returns the TextWrapPreference.
> TextWrapPreference **getElements**()
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
| String | eventType | Event type to listen for. |
| Mixed | handler | Handler invoked for the event. Can accept: File or JavaScript Function. |
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

## TextWrapSideOptions

Options for choosing the side used by text wrap.

### Class

> _Read Only_
>
> Number `BOTH_SIDES` = 1953981043
>
> Text wraps on both sides.
> _Read Only_
>
> Number `LEFT_SIDE` = 1953983603
>
> Text wraps on the left side.
> _Read Only_
>
> Number `RIGHT_SIDE` = 1953985139
>
> Text wraps on the right side.
> _Read Only_
>
> Number `SIDE_TOWARDS_SPINE` = 1953985651
>
> Text wraps on the binding side.
> _Read Only_
>
> Number `SIDE_AWAY_FROM_SPINE` = 1953980787
>
> Text wraps on the side away from the binding.
> _Read Only_
>
> Number `LARGEST_AREA` = 1953975411
>
> Text wraps on the largest side.
