# Galley Preference, General Preference, Gif Options Palette, Global Clash Resolution Strategy For Master Page ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: GalleyPreference — Instance; GeneralPreference; GIFOptionsPalette; GlobalClashResolutionStrategyForMasterPage; GlobalClashResolutionStrategy; GlowTechnique; GoToZoomOptions; GotoAnchorBehavior; GotoAnchorBehaviors; GotoFirstPageBehavior; GotoFirstPageBehaviors.

## GalleyPreference — Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent of the GalleyPreference (a Application or Document).
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
> Mixed **backgroundColor**
>
> Background color can be an R, G, and B array of three doubles from 0 to 255, or an InCopy UI color. . Returns: Array of 3 Reals (0 - 255) or InCopyUIColors enumerator.
> Boolean **blinkCursor**
>
> When true, the cursor blinks.
> CursorTypes **cursorType**
>
> Cursor type used in galley and story views.
> Boolean **smoothText**
>
> When true, anti-aliasing is applied to galley text.
> Mixed **textColor**
>
> Text color can be an R, G, and B array of three doubles from 0 to 255, or an InCopy UI color. Returns: Array of 3 Reals (0 - 255) or InCopyUIColors enumerator.
> Boolean **showDepthRuler**
>
> When true, the depth ruler is displayed.
> AntiAliasType **antiAliasType**
>
> Text anti-aliasing type used in story and galley views.
> Boolean **showParagraphStyleNames**
>
> When true, paragraph style names are shown.
> LineSpacingType **lineSpacingValue**
>
> Spacing amount between lines.
> String **displayFont**
>
> Font family name used for text display.
> Measurement Unit (Number or String)=any **displayFontSize**
>
> Size used for text display.
> Measurement Unit (Number or String)=any **infoColumnWidth**
>
> Width of the Info column.
> Boolean **showInfoColumn**
>
> When true, the Info column is displayed.
> Boolean **showParagraphBreakMarks**
>
> When true, paragraph break marks are shown.
> Object **properties**
>
> Property used to set several properties in one operation.

### Methods

> String **toSource**()
>
> Builds a string that, when executed, returns the GalleyPreference.
> GalleyPreference **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Returns the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type. |
| Mixed | handler | Event handler. Accepts: File or JavaScript Function. |
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

## GeneralPreference

Preferences that apply generally to the application.

### Instance

> _Read Only_
>
> Number **mainMonitorPpi**
>
> System-reported resolution value for the main monitor.
> _Read Only_
>
> Boolean **applicationBarShown**
>
> When true, the application bar is visible.
> _Read Only_
>
> Boolean **useApplicationFrame**
>
> When true, the application is contained in a frame.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent of the GeneralPreference (a Application).
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
> ToolTipOptions **toolTips**
>
> Behavior used for tool tips.
> Boolean **greekVectorGraphicsOnDrag**
>
> Controls whether vector graphics are greeked while dragging at high quality.
> Boolean **showConveyor**
>
> Shows the conveyor when the content collector or content placer tool is activated.
> Boolean **createLinksOnContentPlace**
>
> Enables link creation during content place.
> Boolean **mapStylesOnContentPlace**
>
> Enables style mapping during content place.
> Boolean **useCustomMonitorResolution**
>
> Enables a custom monitor resolution in pixels per inch instead of using system settings.
> Number **customMonitorPpi**
>
> Value, in pixels per inch, used as the custom monitor resolution.
> Number **uiBrightnessPreference**
>
> Sets the Application User Interface brightness preference. Range: 0.0 to 1.0. Presets: Dark = 0.0, Medium Dark = 0.50, Medium Bright = 0.51, Bright = 1.0. Other values from 0.0 to 1.0 map automatically to the nearest preset.
> Number **pasteboardColorPreference**
>
> Sets the Pasteboard color preference. Values: 0 = Default White; 1 = Match with Theme Color.
> Boolean **showWhatsNewOnStartup**
>
> When true, the What's New dialog is shown at startup.
> Boolean **autoAddSwatchToCCLibraries**
>
> When true, a swatch created through the new swatch dialog is also exported to CC Libraries.
> Boolean **autoAddCharStyleToCCLibraries**
>
> When true, a character style created through the new char style dialog is also exported to CC Libraries.
> Boolean **autoAddParaStyleToCCLibraries**
>
> When true, a paragraph style created through the new para style dialog is also exported to CC Libraries.
> Boolean **showStartWorkspace**
>
> When true, the start workspace appears when no documents are open.
> Boolean **showStockPurchaseAdornment**
>
> When true, stock cart adornment appears on unlicensed stock images.
> Boolean **showContentGrabber**
>
> Controls whether the content grabber adornment appears.
> Boolean **showLiveCorners**
>
> Controls whether the live corners grabber adornment appears.
> Boolean **showMasterPageOverlay**
>
> Controls whether selecting a page with the Page Tool shows the master page overlay.
> Boolean **objectsMoveWithPage**
>
> Controls whether repositioning a page from the UI also moves its page items. The option/alt key temporarily reverses this property.
> Boolean **preventSelectingLockedItems**
>
> Controls whether a locked item can be selected and interacted with. When off, only its position remains locked.
> Boolean **enableMultiTouchGestures**
>
> Controls whether multi-touch gestures are enabled.
> ToolsPanelOptions **toolsPanel**
>
> Controls how the Tools panel appears.
> Boolean **autoCollapseIconPanels**
>
> When true, panel drawers close automatically.
> Boolean **placeCursorUsesThumbnails**
>
> Controls whether imported-file thumbnails appear in the Place icon.
> Boolean **panelTabHeightPreference**
>
> When true, panels use Large Tabs; otherwise they use smaller tabs.
> Boolean **showLegacyNewDocumentDialog**
>
> When true, pressing Ctrl/Cmd + N opens the legacy new document dialog.
> Boolean **autoShowHiddenPanels**
>
> When true, vertical reveal strips appear while palette UI is hidden.
> Boolean **openDocumentsAsTabs**
>
> When true, documents open as tabs.
> Boolean **enableFloatingWindowDocking**
>
> When true, the user can dock floating windows as tabs.
> Number **openRecentLength**
>
> Count of entries the Open Recent menu displays. Range: 0 to 30
> Boolean **showTransformationValues**
>
> Controls whether transformation information appears dynamically with the cursor while page items are manipulated.
> Boolean **showAnchorObjectAdornment**
>
> Controls whether the anchor object adornment appears.
> Boolean **highlightObjectUnderSelectionTool**
>
> Controls whether the object under the selection tool is highlighted.
> Boolean **enableContentAwareFit**
>
> When true, content-aware fit is enabled by default while placing items.
> PreviewPagesOptions **previewPages**
>
> Pages used for creating preview images. Note: applies when include preview is true.
> File **temporaryFolder**
>
> Location used to store temporary files.
> PageNumberingOptions **pageNumbering**
>
> Page numbering method.
> Number **completeFontDownloadGlyphLimit**
>
> Glyph-count threshold at which font subsetting is triggered.
> Boolean **includePreview**
>
> When true, saved documents include a preview.
> Boolean **useIncomingSpotUponConflict**
>
> When true, an incoming spot color definition is used during conflicts while placing or pasting content.
> Boolean **ungroupRemembersLayers**
>
> When true, objects return to their original layers after ungrouping.
> PreviewSizeOptions **previewSize**
>
> Preview size. Note: applies when include preview is true.
> Object **properties**
>
> Property used to set several properties in one operation.

### Methods

> String **toSource**()
>
> Builds a string that, when executed, returns the GeneralPreference.
> GeneralPreference **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Returns the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type. |
| Mixed | handler | Event handler. Accepts: File or JavaScript Function. |
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

## GIFOptionsPalette

Palette choices used for GIF conversion.

### Class

> _Read Only_
>
> Number `ADAPTIVE_PALETTE` = 1886151024
>
> Selects the adaptive (no dither) palette.
> _Read Only_
>
> Number `MACINTOSH_PALETTE` = 1886154096
>
> Selects the Macintosh palette.
> _Read Only_
>
> Number `WEB_PALETTE` = 1886156656
>
> Selects the Web palette.
> _Read Only_
>
> Number `WINDOWS_PALETTE` = 1886156644
>
> Selects the Windows palette.

## GlobalClashResolutionStrategyForMasterPage

Resolution choices for loaded master pages whose names match existing masterpages.

### Class

> _Read Only_
>
> Number `LOAD_ALL_WITH_OVERWRITE` = 1279350607
>
> Replaces the existing master page.
> _Read Only_
>
> Number `LOAD_ALL_WITH_RENAME` = 1279350610
>
> Gives the new master page a different name.

## GlobalClashResolutionStrategy

Strategy used when imported styles share names with styles that already exist.

### Class

> _Read Only_
>
> Number `LOAD_ALL_WITH_OVERWRITE` = 1279350607
>
> Replaces existing styles when their names conflict with imported items.
> _Read Only_
>
> Number `LOAD_ALL_WITH_RENAME` = 1279350610
>
> Renames imported styles when names conflict so existing items remain intact.
> _Read Only_
>
> Number `DO_NOT_LOAD_THE_STYLE` = 1147495276
>
> Skips importing styles when their names conflict with existing items.

## GlowTechnique

Options for the glow technique.

### Class

> _Read Only_
>
> Number **SOFTER** = 2020618337
>
> Softer.
> _Read Only_
>
> Number **PRECISE** = 2020618338
>
> Precise.

## GoToZoomOptions

Zoom behavior choices for the page used as a goto destination.

### Class

> _Read Only_
>
> Number `INHERIT_ZOOM` = 1212437370
>
> Uses the zoom value from the page shown immediately before this one.
> _Read Only_
>
> Number `FIT_WINDOW` = 1212437367
>
> Scales the page so it fits inside the display window.
> _Read Only_
>
> Number `FIT_WIDTH` = 1212437335
>
> Scales the page to the window width; the lower page area can be hidden.
> _Read Only_
>
> Number `FIT_VISIBLE` = 1212437334
>
> Scales the page text area to the window width; margins are hidden, and the bottom area may also disappear.
> _Read Only_
>
> Number `ACTUAL_SIZE` = 2053206906
>
> Shows the page at 100% magnification.

## GotoAnchorBehavior

Behavior object used to move to an anchor.

### Instance

> _Read Only_
>
> String **anchorName**
>
> Name assigned to the anchor.
> _Read Only_
>
> String **name**
>
> Name assigned to the GotoAnchorBehavior.
> _Read Only_
>
> Number **id**
>
> Unique identifier for the GotoAnchorBehavior.
> _Read Only_
>
> Boolean **isValid**
>
> true indicates that the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Owning object. Can be: Button, CheckBox, ComboBox, ListBox, RadioButton, TextBox or SignatureField.
> _Read Only_
>
> Number **index**
>
> Position of the GotoAnchorBehavior inside its containing object.
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
> Mixed **anchorItem**
>
> Anchor target, supplied as a bookmark, hyperlink text destination, or page destination. Return type may be: Bookmark, HyperlinkTextDestination or HyperlinkPageDestination.
> GoToZoomOptions **zoomSetting**
>
> Zoom option to apply.
> String **filePath**
>
> File location; on Mac OS the path is colon delimited. Can also accept: File.
> Boolean **enableBehavior**
>
> When true, this behavior is active.
> BehaviorEvents **behaviorEvent**
>
> Event that starts the behavior.
> String **label**
>
> User-settable string property.
> Object **properties**
>
> Property bag for setting several values in one operation.

### Methods

> **remove**()
>
> Removes the GotoAnchorBehavior.
> **insertLabel**( String **key**, String **value** )
>
> Stores the specified value under the supplied label key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Label key. |
| String | value | Label value. |

> String **extractLabel**( String **key** )
>
> Retrieves the value stored for the specified label key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Label key. |

> String **toSource**()
>
> Produces a string that can be executed to recreate the GotoAnchorBehavior.
> GotoAnchorBehavior **getElements**()
>
> Resolves the object specifier and returns an array of object references.
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

## GotoAnchorBehaviors

Collection containing goto anchor behavior objects.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by the collection.

### Methods

> Number **count**()
>
> Shows how many elements the GotoAnchorBehavior collection contains.
> GotoAnchorBehavior **add**( Object **withProperties** )
>
> Builds a new GotoAnchorBehavior.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the new GotoAnchorBehavior (Optional) |

> GotoAnchorBehavior **item**( Mixed **index** )
>
> Gets the GotoAnchorBehavior identified by the specified index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Lookup key, either numeric or named. Can accept: Long Integer or String. |

> GotoAnchorBehavior **itemByName**( String **name** )
>
> Gets the GotoAnchorBehavior using the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> GotoAnchorBehavior **itemByID**( Number **id** )
>
> Gets the GotoAnchorBehavior using the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> GotoAnchorBehavior **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the GotoAnchorBehaviors that fall inside the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start, supplied as a GotoAnchorBehavior, index, or name. Can accept: GotoAnchorBehavior, Long Integer or String. |
| Mixed | to | Range end, supplied as a GotoAnchorBehavior, index, or name. Can accept: GotoAnchorBehavior, Long Integer or String. |

> GotoAnchorBehavior **firstItem**()
>
> Gets the first GotoAnchorBehavior in the collection.
> GotoAnchorBehavior **lastItem**()
>
> Gets the last GotoAnchorBehavior in the collection.
> GotoAnchorBehavior **middleItem**()
>
> Gets the middle GotoAnchorBehavior in the collection.
> GotoAnchorBehavior **previousItem**( GotoAnchorBehavior **obj** )
>
> Gets the GotoAnchorBehavior positioned immediately before the specified object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| GotoAnchorBehavior | obj | GotoAnchorBehavior index that comes after the desired GotoAnchorBehavior. |

> GotoAnchorBehavior **nextItem**( GotoAnchorBehavior **obj** )
>
> Gets the GotoAnchorBehavior positioned immediately after the specified object in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| GotoAnchorBehavior | obj | GotoAnchorBehavior whose index precedes the desired GotoAnchorBehavior. |

> GotoAnchorBehavior **anyItem**()
>
> Gets any GotoAnchorBehavior from the collection.
> GotoAnchorBehavior **everyItem**()
>
> Gets every GotoAnchorBehavior from the collection.
> String **toSource**()
>
> Produces a string that can be executed to recreate the GotoAnchorBehavior.
> GotoAnchorBehavior **[]**( Number **index** )
>
> Gets the GotoAnchorBehavior at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## GotoFirstPageBehavior

Behavior object used to move to the document's first page.

### Instance

> _Read Only_
>
> String **name**
>
> Name assigned to the GotoFirstPageBehavior.
> _Read Only_
>
> Number **id**
>
> Unique identifier for the GotoFirstPageBehavior.
> _Read Only_
>
> Boolean **isValid**
>
> true indicates that the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Owning object. Can be: Button, CheckBox, ComboBox, ListBox, RadioButton, TextBox or SignatureField.
> _Read Only_
>
> Number **index**
>
> Position of the GotoFirstPageBehavior inside its containing object.
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
> GoToZoomOptions **zoomSetting**
>
> Zoom option to apply.
> Boolean **enableBehavior**
>
> When true, this behavior is active.
> BehaviorEvents **behaviorEvent**
>
> Event that starts the behavior.
> String **label**
>
> User-settable string property.
> Object **properties**
>
> Property bag for setting several values in one operation.

### Methods

> **remove**()
>
> Removes the GotoFirstPageBehavior.
> **insertLabel**( String **key**, String **value** )
>
> Stores the specified value under the supplied label key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Label key. |
| String | value | Label value. |

> String **extractLabel**( String **key** )
>
> Retrieves the value stored for the specified label key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Label key. |

> String **toSource**()
>
> Produces a string that can be executed to recreate the GotoFirstPageBehavior.
> GotoFirstPageBehavior **getElements**()
>
> Resolves the object specifier and returns an array of object references.
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

## GotoFirstPageBehaviors

Collection containing goto first page behavior objects.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by the collection.

### Methods

> Number **count**()
>
> Shows how many elements the GotoFirstPageBehavior collection contains.
> GotoFirstPageBehavior **add**( Object **withProperties** )
>
> Builds a new GotoFirstPageBehavior.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the new GotoFirstPageBehavior (Optional) |

> GotoFirstPageBehavior **item**( Mixed **index** )
>
> Gets the GotoFirstPageBehavior identified by the specified index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Lookup key, either numeric or named. Can accept: Long Integer or String. |

> GotoFirstPageBehavior **itemByName**( String **name** )
>
> Gets the GotoFirstPageBehavior using the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> GotoFirstPageBehavior **itemByID**( Number **id** )
>
> Gets the GotoFirstPageBehavior using the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> GotoFirstPageBehavior **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the GotoFirstPageBehaviors that fall inside the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start, supplied as a GotoFirstPageBehavior, index, or name. Can accept: GotoFirstPageBehavior, Long Integer or String. |
| Mixed | to | Range end, supplied as a GotoFirstPageBehavior, index, or name. Can accept: GotoFirstPageBehavior, Long Integer or String. |

> GotoFirstPageBehavior **firstItem**()
>
> Gets the first GotoFirstPageBehavior in the collection.
> GotoFirstPageBehavior **lastItem**()
>
> Gets the last GotoFirstPageBehavior in the collection.
> GotoFirstPageBehavior **middleItem**()
>
> Gets the middle GotoFirstPageBehavior in the collection.
> GotoFirstPageBehavior **previousItem**( GotoFirstPageBehavior **obj** )
>
> Gets the GotoFirstPageBehavior positioned immediately before the specified object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| GotoFirstPageBehavior | obj | GotoFirstPageBehavior index that comes after the desired GotoFirstPageBehavior. |

> GotoFirstPageBehavior **nextItem**( GotoFirstPageBehavior **obj** )
>
> Gets the GotoFirstPageBehavior positioned immediately after the specified object in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| GotoFirstPageBehavior | obj | GotoFirstPageBehavior whose index precedes the desired GotoFirstPageBehavior. |

> GotoFirstPageBehavior **anyItem**()
>
> Gets any GotoFirstPageBehavior from the collection.
> GotoFirstPageBehavior **everyItem**()
>
> Gets every GotoFirstPageBehavior from the collection.
> String **toSource**()
>
> Produces a string that can be executed to recreate the GotoFirstPageBehavior.
> GotoFirstPageBehavior **[]**( Number **index** )
>
> Gets the GotoFirstPageBehavior at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |
