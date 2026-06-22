# Layout Grid Data Information, Layout Rule Options, Layout Window, Layout Windows ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: LayoutGridDataInformation; LayoutRuleOptions; LayoutWindow; LayoutWindows; LeadingModel; Leading; Libraries; LibraryPanelViews; LibraryPanel — Instance; Library; LineAlignment; LineSpacingType.

## LayoutGridDataInformation

Default property set for layout grids.

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
> Parent for this LayoutGridDataInformation (a Application or Document).
> _Read Only_
>
> Events **events**
>
> Event collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event-listener collection.
> Mixed **appliedFont**
>
> Font assigned to LayoutGridDataInformation, as either a font object or a font family name. Can return: Font or String.
> String **fontStyle**
>
> Font style name.
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
> Horizontal scale applied to LayoutGridDataInformation.
> Number **verticalScale**
>
> Vertical scale applied to LayoutGridDataInformation.
> Object **properties**
>
> Lets several properties be set together.

### Methods

> String **toSource**()
>
> Builds source text that can evaluate back to the LayoutGridDataInformation.
> LayoutGridDataInformation **getElements**()
>
> Resolves the object specifier into an array of object references.
> String **toSpecifier**()
>
> Gets this object's specifier string.
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

## LayoutRuleOptions

Page layout-rule setting options.

### Class

> _Read Only_
>
> Number **OFF** = 1330005536
>
> Leaves the page without a layout rule during resize.
> _Read Only_
>
> Number **SCALE** = 1280332643
>
> Scales page objects as the page changes size.
> _Read Only_
>
> Number **RECENTER** = 1280332387
>
> Recenters page objects while the page size changes.
> _Read Only_
>
> Number `GUIDE_BASED` = 1280329538
>
> Uses guide slicing when page objects resize with the page.
> _Read Only_
>
> Number `OBJECT_BASED` = 1280331586
>
> Moves and resizes page objects as the page changes size.
> _Read Only_
>
> Number `USE_MASTER` = 1280333133
>
> Uses the applied master page as the source for this page's layout rule.
> _Read Only_
>
> Number `PRESERVE_EXISTING` = 1280331890
>
> Keeps the page's current layout-rule setting; used when creating alternate layouts.

## LayoutWindow

Layout window object.

### Class

> _Read Only_
>
> String `AFTER_SELECTION_CHANGED` = afterSelectionChanged
>
> Fires after the active selection changes. It bubbles and cannot be canceled.
> _Read Only_
>
> String `AFTER_SELECTION_ATTRIBUTE_CHANGED` = afterSelectionAttributeChanged
>
> Fires after an attribute of the active selection changes. It bubbles and cannot be canceled.
> _Read Only_
>
> String `BEFORE_DEACTIVATE` = beforeDeactivate
>
> Fires before the LayoutWindow becomes inactive. It bubbles and cannot be canceled.
> _Read Only_
>
> String `AFTER_ACTIVATE` = afterActivate
>
> Fires after the LayoutWindow becomes active. It bubbles and cannot be canceled.
> _Read Only_
>
> String `AFTER_ATTRIBUTE_CHANGED` = afterAttributeChanged
>
> Fires when a property value changes on this LayoutWindow. It bubbles and cannot be canceled.
> _Read Only_
>
> String `AFTER_OPEN` = afterOpen
>
> Fires after a LayoutWindow opens. It bubbles and cannot be canceled.
> _Read Only_
>
> String `BEFORE_CLOSE` = beforeClose
>
> Fires before a LayoutWindow closes. It bubbles and can be canceled.
> _Read Only_
>
> String `AFTER_CLOSE` = afterClose
>
> Fires while a LayoutWindow is closing; because closing is already committed, cancellation is no longer possible. It bubbles and cannot be canceled.

### Instance

> _Read Only_
>
> String **name**
>
> LayoutWindow name.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Document **parent**
>
> Parent Document for this LayoutWindow.
> _Read Only_
>
> Number **index**
>
> Position of LayoutWindow inside its container.
> _Read Only_
>
> Events **events**
>
> Event collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event-listener collection.
> Boolean **overprintPreview**
>
> When true, shows an overprinting simulation.
> String **proofingProfile**
>
> Profile used for color proofing.
> ProofingType **proofingType**
>
> Color proofing method.
> Boolean **simulateInkBlack**
>
> When true, the proofing profile displays solid black as the dark gray many printers produce. Note: valid only when proofing type is custom.
> Boolean **simulatePaperWhite**
>
> When true, the proofing profile displays the muted white of real paper. Note: valid only when proofing type is custom.
> Boolean **preserveColorNumbers**
>
> When true, preserves CMYK values on items without embedded profiles plus native artwork such as type and line art. Note: images are converted when their profiles do not match the simulated device profile. Valid only when proofing type is custom.
> ViewDisplaySettings **viewDisplaySetting**
>
> Display performance override for the view.
> Mixed **transformReferencePoint**
>
> Default anchor point used when transforming objects. Can return: AnchorPoint enumerator or Array of 2 Units.
> Layer **activeLayer**
>
> Current active layer. Can also accept: String.
> Number **zoomPercentage**
>
> Percentage size used to enlarge or reduce the document view. (Range: 5 to 4000)
> Mixed **activeSpread**
>
> Frontmost spread. Can return: Spread or MasterSpread.
> Page **activePage**
>
> Frontmost page.
> ScreenModeOptions **screenMode**
>
> Layout view screen mode.
> Object **selection**
>
> Selected object(s). Can also accept: Object or NothingEnum enumerator.
> Number **bounds**
>
> Window bounds in pixels, formatted as [top, left, bottom, right].
> PageItem **selectionKeyObject**
>
> Key object for the selection. Can also accept: NothingEnum enumerator.
> Object **properties**
>
> Allows several properties to be set at once.

### Methods

> **zoom**( ZoomOptions **given** )
>
> Changes the window magnification to the requested display size.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| ZoomOptions | given | Display size. |

> **select**( Mixed **selectableItems**, SelectionOptions **existingSelection** )
>
> Selects the supplied object or objects.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | selectableItems | Selection targets; accepts Object, Array of Objects, NothingEnum enumerator or SelectAll enumerator. |
| SelectionOptions | existingSelection | Selection state for this LayoutWindow relative to objects already selected. (Optional) |

> **close**()
>
> Shuts the LayoutWindow.
> **maximize**()
>
> Expands the window to maximum size.
> **minimize**()
>
> Shrinks the window to minimum size.
> **restore**()
>
> Returns the window to its restored state.
> **bringToFront**()
>
> Brings this object to the front.
> String **toSource**()
>
> Builds source text that can evaluate back to the LayoutWindow.
> LayoutWindow **getElements**()
>
> Resolves the object specifier into an array of object references.
> String **toSpecifier**()
>
> Gets this object's specifier string.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type. |
| Mixed | handler | Event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## LayoutWindows

Collection containing layout windows.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by this collection.

### Methods

> Number **count**()
>
> Shows how many LayoutWindow elements are present.
> LayoutWindow **item**( Mixed **index** )
>
> Fetches the LayoutWindow identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index/name selector; accepts Long Integer or String. |

> LayoutWindow **itemByName**( String **name** )
>
> Fetches the LayoutWindow named by `name`.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | LayoutWindow name. |

> LayoutWindow **itemByRange**( Mixed **from**, Mixed **to** )
>
> Fetches LayoutWindows in the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting LayoutWindow, index, or name for the range. Can accept: LayoutWindow, Long Integer or String. |
| Mixed | to | Ending LayoutWindow, index, or name for the range. Can accept: LayoutWindow, Long Integer or String. |

> LayoutWindow **firstItem**()
>
> Fetches the first LayoutWindow in this collection.
> LayoutWindow **lastItem**()
>
> Fetches the last LayoutWindow in this collection.
> LayoutWindow **middleItem**()
>
> Fetches the middle LayoutWindow in this collection.
> LayoutWindow **previousItem**( LayoutWindow **obj** )
>
> Fetches the LayoutWindow whose index comes before the supplied LayoutWindow.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LayoutWindow | obj | LayoutWindow that follows the LayoutWindow being requested. |

> LayoutWindow **nextItem**( LayoutWindow **obj** )
>
> Fetches the LayoutWindow whose index comes after the supplied LayoutWindow.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LayoutWindow | obj | LayoutWindow that comes before the LayoutWindow being requested. |

> LayoutWindow **anyItem**()
>
> Fetches any LayoutWindow in this collection.
> LayoutWindow **everyItem**()
>
> Fetches every LayoutWindow in this collection.
> String **toSource**()
>
> Builds source text that can evaluate back to the LayoutWindow.
> LayoutWindow **[]**( Number **index** )
>
> Fetches the LayoutWindow at the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | LayoutWindow index. |

## LeadingModel

Leading-model option values.

### Class

> _Read Only_
>
> Number `LEADING_MODEL_ROMAN` = 1248619858
>
> Measures type baseline spacing.
> _Read Only_
>
> Number `LEADING_MODEL_AKI_BELOW` = 1248616802
>
> Measures line spacing from the aki below.
> _Read Only_
>
> Number `LEADING_MODEL_AKI_ABOVE` = 1248616801
>
> Measures line spacing from the aki above.
> _Read Only_
>
> Number `LEADING_MODEL_CENTER` = 1248619875
>
> Measures spacing between character center points.
> _Read Only_
>
> Number `LEADING_MODEL_CENTER_DOWN` = 1248617316
>
> Center-down leading model.

## Leading

Leading option values.

### Class

> _Read Only_
>
> Number **AUTO** = 1635019116
>
> Applies auto leading.

## Libraries

Collection containing object libraries.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by this collection.

### Methods

> Library **add**( File **fullName**, Object **withProperties** )
>
> Creates a new object library.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | fullName | Path and file name for the library. |
| Object | withProperties | Starting property values for the new Library. (Optional) |

> Number **count**()
>
> Shows how many Library elements are present.
> Library **item**( Mixed **index** )
>
> Fetches the Library identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index/name selector; accepts Long Integer or String. |

> Library **itemByName**( String **name** )
>
> Fetches the Library named by `name`.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Library name. |

> Library **itemByRange**( Mixed **from**, Mixed **to** )
>
> Fetches Libraries in the requested range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting Library, index, or name for the range. Can accept: Library, Long Integer or String. |
| Mixed | to | Ending Library, index, or name for the range. Can accept: Library, Long Integer or String. |

> Library **firstItem**()
>
> Fetches the first Library in this collection.
> Library **lastItem**()
>
> Fetches the last Library in this collection.
> Library **middleItem**()
>
> Fetches the middle Library in this collection.
> Library **previousItem**( Library **obj** )
>
> Fetches the Library whose index comes before the supplied Library.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Library | obj | Library that follows the Library being requested. |

> Library **nextItem**( Library **obj** )
>
> Fetches the Library whose index comes after the supplied Library.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Library | obj | Library that comes before the Library being requested. |

> Library **anyItem**()
>
> Fetches any Library in this collection.
> Library **everyItem**()
>
> Fetches every Library in this collection.
> String **toSource**()
>
> Builds source text that can evaluate back to the Library.
> Library **[]**( Number **index** )
>
> Fetches the Library at the supplied index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Library index. |

## LibraryPanelViews

Library panel view modes.

### Class

> _Read Only_
>
> Number `LIST_VIEW` = 1699501673
>
> Shows list view.
> _Read Only_
>
> Number `THUMBNAIL_VIEW` = 1700030550
>
> Shows thumbnail view.
> _Read Only_
>
> Number `LARGE_THUMBNAIL_VIEW` = 1699501142
>
> Shows large thumbnail view.

## LibraryPanel — Instance

> _Read Only_
>
> Library **associatedLibrary**
>
> Library shown by this LibraryPanel.
> _Read Only_
>
> String **name**
>
> Name assigned to the LibraryPanel.
> _Read Only_
>
> Boolean **isValid**
>
> true when the object specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> Owning Application for the LibraryPanel.
> _Read Only_
>
> Number **index**
>
> Position of this LibraryPanel inside its containing object.
> _Read Only_
>
> Events **events**
>
> Events collection for this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection for this object.
> LibraryPanelViews **view**
>
> View mode used by the LibraryPanel.
> SortAssets **sortOrder**
>
> Ordering applied to assets inside the LibraryPanel.
> Object **selection**
>
> Currently selected object or objects. Also accepts: Object or NothingEnum enumerator.
> Boolean **visible**
>
> true makes the panel visible.
> Object **properties**
>
> Allows multiple properties to be assigned together.

### Methods

> **showAll**()
>
> Displays every asset.
> **select**( Mixed **selectableItems**, SelectionOptions **existingSelection** )
>
> Chooses the requested object or objects.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | selectableItems | Object targets for selection. Accepts: Object, Array of Objects, NothingEnum enumerator or SelectAll enumerator. |
| SelectionOptions | existingSelection | How this LibraryPanel selection should combine with objects already selected. (Optional) |

> String **toSource**()
>
> Builds a string that can be executed to return the LibraryPanel.
> LibraryPanel **getElements**()
>
> Resolves the object specifier and returns an array of object references.
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
| Mixed | handler | Event handler to call. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type that was registered. |
| Mixed | handler | Event handler that was registered. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## Library

An object-library entity.

### Instance

> _Read Only_
>
> String **name**
>
> Name assigned to the Library.
> _Read Only_
>
> File **fullName**
>
> Complete path to the Library, including the Library name.
> _Read Only_
>
> File **filePath**
>
> Complete file path.
> _Read Only_
>
> Panel **associatedPanel**
>
> Panel linked to this Library.
> _Read Only_
>
> Boolean **isValid**
>
> true when the object specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> Owning Application for the Library.
> _Read Only_
>
> Number **index**
>
> Position of this Library inside its containing object.
> _Read Only_
>
> Assets **assets**
>
> Object-library asset collection.
> _Read Only_
>
> Events **events**
>
> Events collection for this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection for this object.
> Object **properties**
>
> Allows multiple properties to be assigned together.

### Methods

> **close**()
>
> Closes this Library.
> Asset **store**( Mixed **using**, Object **withProperties** )
>
> Saves the specified object into the library.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | using | Page item or items to store. Accepts: Array of PageItems, Movies, Sounds, Graphics or XMLElements. |
| Object | withProperties | Starting property values for the new Library. (Optional) |

> String **toSource**()
>
> Builds a string that can be executed to return the Library.
> Library **getElements**()
>
> Resolves the object specifier and returns an array of object references.
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
| Mixed | handler | Event handler to call. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type that was registered. |
| Mixed | handler | Event handler that was registered. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## LineAlignment

Options for line justification.

### Class

> _Read Only_
>
> Number `LEFT_OR_TOP_LINE_ALIGN` = 1818324084
>
> Aligns horizontal text left or vertical text to the top.
> _Read Only_
>
> Number `CENTER_LINE_ALIGN` = 1818321774
>
> Centers the text.
> _Read Only_
>
> Number `RIGHT_OR_BOTTOM_LINE_ALIGN` = 1818325602
>
> Aligns horizontal text right or vertical text to the bottom.
> _Read Only_
>
> Number `LEFT_OR_TOP_LINE_JUSTIFY` = 1819047018
>
> Justifies horizontal text to both sides and leaves the final line left aligned; for vertical text, justifies to both top and bottom and leaves the final line top aligned.
> _Read Only_
>
> Number `CENTER_LINE_JUSTIFY` = 1818455658
>
> Justifies horizontal text to both sides and centers the final line; for vertical text, justifies to both top and bottom and centers the final line.
> _Read Only_
>
> Number `RIGHT_OR_BOTTOM_LINE_JUSTIFY` = 1819435626
>
> Justifies horizontal text to both sides and leaves the final line right aligned; for vertical text, justifies to both top and bottom and leaves the final line bottom aligned.
> _Read Only_
>
> Number `FULL_LINE_JUSTIFY` = 1818651754
>
> Gives every line a uniform length by justifying horizontal text to both sides, or vertical text to both top and bottom.

## LineSpacingType

Type used for line spacing.

### Class

> _Read Only_
>
> Number `SINGLE_SPACE` = 1936282480
>
> Single spacing.
> _Read Only_
>
> Number `ONE_AND_HALF_SPACE` = 1866549363
>
> One-and-a-half spacing.
> _Read Only_
>
> Number `DOUBLE_SPACE` = 1682068336
>
> Double spacing.
> _Read Only_
>
> Number `TRIPLE_SPACE` = 1951552368
>
> Triple spacing.
