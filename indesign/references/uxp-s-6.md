# State, States, Static Alignment Options, Static Text ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: State; States; StaticAlignmentOptions; StaticText; StaticTexts; Stories; StoryDirectionOptions; StoryGridDataInformation; StoryHorizontalOrVertical; StoryPreference — Instance; StoryTypes; StoryWindow.

## State

State defining how the field appears in an exported PDF.

### Instance

> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the State.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the State, either a Button, MultiStateObject, CheckBox or RadioButton.
> _Read Only_
>
> Number **index**
>
> Position held by the State inside its containing object.
> _Read Only_
>
> Ovals **ovals**
>
> Collection containing ellipses.
> _Read Only_
>
> SplineItems **splineItems**
>
> Collection containing spline items.
> _Read Only_
>
> PageItems **pageItems**
>
> Collection used to iterate every page item in a container, such as a document, page, or group, without filtering by item type.
> _Read Only_
>
> Rectangles **rectangles**
>
> Collection containing rectangles.
> _Read Only_
>
> GraphicLines **graphicLines**
>
> Collection containing graphic lines.
> _Read Only_
>
> TextFrames **textFrames**
>
> Collection containing text frames.
> _Read Only_
>
> Polygons **polygons**
>
> Collection containing polygons.
> _Read Only_
>
> EndnoteTextFrames **endnoteTextFrames**
>
> Collection containing endnote text frames.
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
> Images **images**
>
> Collection containing bitmap images from bitmap formats such as TIFF, JPEG, or GIF.
> _Read Only_
>
> Graphics **graphics**
>
> Collection containing imported graphics from vector, metafile, or bitmap formats.
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
> Groups **groups**
>
> Collection containing groups.
> _Read Only_
>
> EPSTexts **epstexts**
>
> EPSTexts
> _Read Only_
>
> SVGs **svgs**
>
> Collection containing SVG files.
> String **name**
>
> Name assigned to the State.
> Boolean **active**
>
> True makes the state active in the exported PDF.
> Boolean **enabled**
>
> True enables the state in PDF documents.
> Mixed **statetype**
>
> For a button, this identifies which user action controls the object's appearance. For a MultiStateObject, whose states have no associated user actions, this property holds a numeric value unique to the state. Can return: StateTypes enumerator or Long Integer.
> Object **properties**
>
> Allows multiple properties to be set in a single operation.

### Methods

> **releaseAsObject**()
>
> Turns this state's appearance into a page item and drops it from the parent object.
> **move**( Number **newPosition** )
>
> Repositions the state within its parent collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | newPosition | Index in the parent collection where the state should move. |

> **addItemsToState**( PageItem **pageitems** )
>
> Places page items into this state.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| PageItem | pageitems | Page item or items to include in this state. |

> **remove**()
>
> Removes the State.
> String **toSource**()
>
> Builds executable string source that evaluates back to the State.
> State **getElements**()
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
| Mixed | handler | Handler to invoke. Accepted forms: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## States

Collection containing states.

### Instance

> _Read Only_
>
> Number **length**
>
> Collection size, expressed as its object count.

### Methods

> State **add**( Object **withProperties** )
>
> Creates a State.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Initial property values for the new State. (Optional) |

> Number **count**()
>
> Reports how many elements the State collection contains.
> State **item**( Mixed **index** )
>
> Fetches the State identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name value. Can accept: Long Integer or String. |

> State **itemByName**( String **name** )
>
> Fetches the State that matches the supplied name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> State **itemByID**( Number **id** )
>
> Fetches the State that matches the supplied ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> State **itemByRange**( Mixed **from**, Mixed **to** )
>
> Fetches the States bounded by the supplied range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting State, index, or name for the range. Can accept: State, Long Integer or String. |
| Mixed | to | Ending State, index, or name for the range. Can accept: State, Long Integer or String. |

> State **firstItem**()
>
> Fetches the first State from the collection.
> State **lastItem**()
>
> Fetches the final State from the collection.
> State **middleItem**()
>
> Fetches the center State from the collection.
> State **previousItem**( State **obj** )
>
> Fetches the State positioned immediately before the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| State | obj | Index for the State that comes after the target State. |

> State **nextItem**( State **obj** )
>
> Fetches the State positioned immediately after the supplied State in this collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| State | obj | State that comes before the target State. |

> State **anyItem**()
>
> Fetches one State from the collection.
> State **everyItem**()
>
> Fetches each State in the collection.
> String **toSource**()
>
> Builds executable string source that evaluates back to the State.
> State **[]**( Number **index** )
>
> Fetches the State at the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## StaticAlignmentOptions

Alignment setting for static text.

### Class

> _Read Only_
>
> Number `LEFT_ALIGN` = 1818584692
>
> Aligns text to the left.
> _Read Only_
>
> Number `CENTER_ALIGN` = 1667591796
>
> Centers the text.
> _Read Only_
>
> Number `RIGHT_ALIGN` = 1919379572
>
> Aligns text to the right.

## StaticText

Static text control, usually serving as a label for another control or for a group of controls.

### Instance

> _Read Only_
>
> Number **id**
>
> Unique identifier assigned to the StaticText.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier can be resolved to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> StaticText parent object; one of DialogColumn, DialogRow, EnablingGroup, or BorderPanel.
> _Read Only_
>
> Number **index**
>
> Position of the StaticText inside the object that contains it.
> _Read Only_
>
> Events **events**
>
> Event collection associated with this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event-listener collection associated with this object.
> String **staticLabel**
>
> Label text shown by the StaticText.
> StaticAlignmentOptions **staticAlignment**
>
> Alignment applied to the StaticText text.
> Number **minWidth**
>
> Control width; for an editbox or combobox, this value sets the box's minimum width.
> Object **properties**
>
> Lets several properties be assigned in one operation.

### Methods

> String **toSource**()
>
> Produces executable source text that evaluates back to the StaticText.
> StaticText **getElements**()
>
> Resolves the object specifier and builds an array of object references.
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
| Mixed | handler | Event handler. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete; optional. |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete; optional. |

## StaticTexts

A collection containing StaticText objects.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects in this collection.

### Methods

> StaticText **add**( Object **withProperties** )
>
> Makes a new StaticText.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the new StaticText. Optional. |

> Number **count**()
>
> Shows how many elements the StaticText collection contains.
> StaticText **item**( Mixed **index** )
>
> Gets the StaticText identified by the given index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name. Accepts: Long Integer or String. |

> StaticText **itemByID**( Number **id** )
>
> Gets the StaticText that has the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> StaticText **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets StaticTexts inside the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start, supplied as a StaticText, index, or name. Accepts: StaticText, Long Integer or String. |
| Mixed | to | Range end, supplied as a StaticText, index, or name. Accepts: StaticText, Long Integer or String. |

> StaticText **firstItem**()
>
> Gets the collection's first StaticText.
> StaticText **lastItem**()
>
> Gets the collection's last StaticText.
> StaticText **middleItem**()
>
> Gets the StaticText in the middle of the collection.
> StaticText **previousItem**( StaticText **obj** )
>
> Gets the StaticText whose index precedes the specified one.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| StaticText | obj | StaticText index after the desired StaticText. |

> StaticText **nextItem**( StaticText **obj** )
>
> Gets the StaticText whose index comes after the specified StaticText in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| StaticText | obj | StaticText positioned before the desired StaticText. |

> StaticText **anyItem**()
>
> Gets any StaticText from the collection.
> StaticText **everyItem**()
>
> Gets all StaticText objects in the collection.
> String **toSource**()
>
> Produces executable source text that evaluates back to the StaticText.
> StaticText **[]**( Number **index** )
>
> Gets the StaticText at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## Stories

A collection containing Story objects.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects in this collection.

### Methods

> Number **count**()
>
> Shows how many elements the Story collection contains.
> Story **item**( Mixed **index** )
>
> Gets the Story identified by the given index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name. Accepts: Long Integer or String. |

> Story **itemByName**( String **name** )
>
> Gets the Story with the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> Story **itemByID**( Number **id** )
>
> Gets the Story that has the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> Story **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets Stories inside the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start, supplied as a Story, index, or name. Accepts: Story, Long Integer or String. |
| Mixed | to | Range end, supplied as a Story, index, or name. Accepts: Story, Long Integer or String. |

> Story **firstItem**()
>
> Gets the collection's first Story.
> Story **lastItem**()
>
> Gets the collection's last Story.
> Story **middleItem**()
>
> Gets the Story in the middle of the collection.
> Story **previousItem**( Story **obj** )
>
> Gets the Story whose index precedes the specified one.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Story | obj | Story index after the desired Story. |

> Story **nextItem**( Story **obj** )
>
> Gets the Story whose index comes after the specified Story in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Story | obj | Story positioned before the desired Story. |

> Story **anyItem**()
>
> Gets any Story from the collection.
> Story **everyItem**()
>
> Gets all Story objects in the collection.
> String **toSource**()
>
> Produces executable source text that evaluates back to the Story.
> Story **[]**( Number **index** )
>
> Gets the Story at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## StoryDirectionOptions

Options that specify story direction.

### Class

> _Read Only_
>
> Number `LEFT_TO_RIGHT_DIRECTION` = 1278366308
>
> Direction flows from left toward right.
> _Read Only_
>
> Number `RIGHT_TO_LEFT_DIRECTION` = 1379028068
>
> Direction flows from right toward left.
> _Read Only_
>
> Number `UNKNOWN_DIRECTION` = 1433299812
>
> Unknown direction.

## StoryGridDataInformation

Default frame-grid-specific properties.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier can be resolved to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent of the StoryGridDataInformation; either Application or Document.
> _Read Only_
>
> Events **events**
>
> Event collection associated with this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event-listener collection associated with this object.
> Mixed **appliedFont**
>
> Font used by StoryGridDataInformation, given either as a font object or as the font-family name. Can return: Font or String.
> String **fontStyle**
>
> Font-style name.
> Measurement Unit (Number or String)=any **pointSize**
>
> Text size.
> Number **characterAki**
>
> White-space amount between characters.
> Number **lineAki**
>
> White-space amount between lines.
> Number **horizontalScale**
>
> Horizontal scale applied to StoryGridDataInformation.
> Number **verticalScale**
>
> Vertical scale applied to StoryGridDataInformation.
> LineAlignment **lineAlignment**
>
> Line justification setting.
> GridAlignment **gridAlignment**
>
> Alignment relative to the frame grid or baseline grid.
> CharacterAlignment **characterAlignment**
>
> Alignment of small characters against the line's largest character.
> GridViewSettings **gridView**
>
> Grid view setting.
> CharacterCountLocation **characterCountLocation**
>
> Where the character-count display appears; applies only when show character count is true.
> Number **characterCountSize**
>
> Character size used for the character-count display.
> Object **properties**
>
> Lets several properties be assigned in one operation.

### Methods

> String **toSource**()
>
> Produces executable source text that evaluates back to the StoryGridDataInformation.
> StoryGridDataInformation **getElements**()
>
> Resolves the object specifier and builds an array of object references.
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
| Mixed | handler | Event handler. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete; optional. |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete; optional. |

## StoryHorizontalOrVertical

Options for text orientation.

### Class

> _Read Only_
>
> Number **HORIZONTAL** = 1752134266
>
> Sets horizontal text orientation.
> _Read Only_
>
> Number **VERTICAL** = 1986359924
>
> Sets vertical text orientation.
> _Read Only_
>
> Number **UNKNOWN** = 1433299822
>
> Text direction is unknown.

## StoryPreference — Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier can be resolved to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent of the StoryPreference; one of XmlStory, Application, Document, Story, or ObjectStyle.
> _Read Only_
>
> Events **events**
>
> Event collection associated with this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event-listener collection associated with this object.
> Boolean **opticalMarginAlignment**
>
> When true, characters at frame edges shift position to improve appearance.
> Measurement Unit (Number or String)=any **opticalMarginSize**
>
> Point size used as the calculation basis for optical margin alignment. Range: 0.1 to 1296.
> StoryDirectionOptions **storyDirection**
>
> Story direction.
> Object **properties**
>
> Lets several properties be assigned in one operation.

### Methods

> String **toSource**()
>
> Produces executable source text that evaluates back to the StoryPreference.
> StoryPreference **getElements**()
>
> Resolves the object specifier and builds an array of object references.
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
| Mixed | handler | Event handler. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete; optional. |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete; optional. |

## StoryTypes

Options that define story type.

### Class

> _Read Only_
>
> Number `REGULAR_STORY` = 1919382388
>
> Regular text story.
> _Read Only_
>
> Number `TOC_STORY` = 1953461108
>
> Table-of-contents story.
> _Read Only_
>
> Number `INDEXING_STORY` = 1768190836
>
> Index story.
> _Read Only_
>
> Number `ENDNOTE_STORY` = 1701737332
>
> Endnote story.

## StoryWindow

A story window.

### Class

> _Read Only_
>
> String `AFTER_SELECTION_CHANGED` = afterSelectionChanged
>
> Fires once the active selection has changed; bubbles and cannot be canceled.
> _Read Only_
>
> String `AFTER_SELECTION_ATTRIBUTE_CHANGED` = afterSelectionAttributeChanged
>
> Fires once an active-selection attribute has changed; bubbles and cannot be canceled.
> _Read Only_
>
> String `BEFORE_DEACTIVATE` = beforeDeactivate
>
> Fires before the StoryWindow is deactivated; bubbles and cannot be canceled.
> _Read Only_
>
> String `AFTER_ACTIVATE` = afterActivate
>
> Fires once the StoryWindow is activated; bubbles and cannot be canceled.
> _Read Only_
>
> String `AFTER_ATTRIBUTE_CHANGED` = afterAttributeChanged
>
> Fires when a StoryWindow property value changes; bubbles and cannot be canceled.
> _Read Only_
>
> String `AFTER_OPEN` = afterOpen
>
> Fires once a StoryWindow has opened; bubbles and cannot be canceled.
> _Read Only_
>
> String `BEFORE_CLOSE` = beforeClose
>
> Fires before a StoryWindow closes; bubbles and can be canceled.
> _Read Only_
>
> String `AFTER_CLOSE` = afterClose
>
> Fires while a StoryWindow closes. Because the close is already committed, cancelation is no longer possible; the event bubbles.

### Instance

> _Read Only_
>
> String **name**
>
> StoryWindow name.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier can be resolved to valid objects.
> _Read Only_
>
> Document **parent**
>
> Parent of the StoryWindow; a Document.
> _Read Only_
>
> Number **index**
>
> Position of the StoryWindow inside the object that contains it.
> _Read Only_
>
> Events **events**
>
> Event collection associated with this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event-listener collection associated with this object.
> Object **selection**
>
> Selected object or objects. Can also accept: Object or NothingEnum enumerator.
> Number **bounds**
>
> Window bounds, in pixels, expressed as [top, left, bottom, right].
> PageItem **selectionKeyObject**
>
> Selection key object. Can also accept: NothingEnum enumerator.
> Object **properties**
>
> Lets several properties be assigned in one operation.

### Methods

> **select**( Mixed **selectableItems**, SelectionOptions **existingSelection** )
>
> Selects the specified object or objects.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | selectableItems | Objects to select. Accepts: Object, Array of Objects, NothingEnum enumerator or SelectAll enumerator. |
| SelectionOptions | existingSelection | Selection state for this StoryWindow compared with objects already selected. Optional. |

> **close**()
>
> Closes this StoryWindow.
> **maximize**()
>
> Maximizes this window.
> **minimize**()
>
> Minimizes this window.
> **restore**()
>
> Restores this window.
> **bringToFront**()
>
> Brings the object forward.
> String **toSource**()
>
> Produces executable source text that evaluates back to the StoryWindow.
> StoryWindow **getElements**()
>
> Resolves the object specifier and builds an array of object references.
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
| Mixed | handler | Event handler. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete; optional. |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete; optional. |
