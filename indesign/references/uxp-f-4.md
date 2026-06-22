# First Baseline, Fit Dimension, Fit Method Settings, Fit Options ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: FirstBaseline; FitDimension; FitMethodSettings; FitOptions; Fitting — Class; FlattenerLevel — Class; FlattenerPreference; FlattenerPreset; FlattenerPresets; FlipValues; Flip; FloatingWindowPosition; FloatingWindowSize; FolioBindingDirectionOptions; FolioOrientationOptions; FollowShapeModeOptions; FontDownloading; FontEmbedding.

## FirstBaseline

First-baseline text can start from these option values.

### Class

> _Read Only_
>
> Number `ASCENT_OFFSET` = 1296135023
>
> Places the font's tallest character below the object's top inset.
> _Read Only_
>
> Number `CAP_HEIGHT` = 1296255087
>
> Places uppercase letter tops against the object's top inset.
> _Read Only_
>
> Number `LEADING_OFFSET` = 1296852079
>
> Uses the text leading value for the distance from the text baseline to the object's top inset.
> _Read Only_
>
> Number `EMBOX_HEIGHT` = 1296386159
>
> Uses the text em-box height for the distance from the text baseline to the object's top inset.
> _Read Only_
>
> Number `X_HEIGHT` = 1299728495
>
> Places lowercase letter tops against the object's top inset.
> _Read Only_
>
> Number `FIXED_HEIGHT` = 1313228911
>
> Uses the minimum first baseline offset value as the distance from the text baseline to the object's top inset.

## FitDimension

Dimension-fitting options.

### Class

> _Read Only_
>
> Number **FIT1280X800** = 1718906725
>
> Fits to the 1280x800 dimension.
> _Read Only_
>
> Number **FIT1240X620** = 1718908023
>
> Fits to the 1240x620 dimension.
> _Read Only_
>
> Number **FIT1024X768** = 1718906726
>
> Fits to the 1024x768 dimension.
> _Read Only_
>
> Number **FIT984X588** = 1718906470
>
> Fits to the 984x588 dimension.
> _Read Only_
>
> Number **FIT800X600** = 1718904179
>
> Fits to the 800x600 dimension.
> _Read Only_
>
> Number **FIT760X420** = 1718907750
>
> Fits to the 760x420 dimension.
> _Read Only_
>
> Number **FIT640X480** = 1718907753
>
> Fits to the 640x480 dimension.
> _Read Only_
>
> Number **FIT600X300** = 1718907764
>
> Fits to the 600x300 dimension.

## FitMethodSettings

Settings for fit methods.

### Class

> _Read Only_
>
> Number `FIT_PREDEFINED_SETTINGS` = 1684301427
>
> Fits by using predefined settings.
> _Read Only_
>
> Number `FIT_GIVEN_WIDTH_AND_HEIGHT` = 1684305768
>
> Fits to the supplied width and height.
> _Read Only_
>
> Number `FIT_GIVEN_SCALE_PERCENTAGE` = 1684304739
>
> Fits to the supplied scale percentage.

## FitOptions

Options that fit content into a frame.

### Class

> _Read Only_
>
> Number `CONTENT_TO_FRAME` = 1668575078
>
> Resizes content so it matches the frame. Note: When content and frame sizes differ, the result can look distorted.
> _Read Only_
>
> Number `CENTER_CONTENT` = 1667591779
>
> Centers content in the frame while keeping both the frame size and the content size and proportions. Note: If the content exceeds the frame, the edges are hidden.
> _Read Only_
>
> Number **PROPORTIONALLY** = 1668247152
>
> Scales content to the frame while maintaining content proportions. Empty frame area can appear when the content and frame use different proportions.
> _Read Only_
>
> Number `CONTENT_AWARE_FIT` = 1667327593
>
> Chooses the best content crop region for the frame using Adobe Sensei. Note: Frame size remains intact, although content size may be scaled.
> _Read Only_
>
> Number `FRAME_TO_CONTENT` = 1718906723
>
> Changes the frame size so it matches the content.
> _Read Only_
>
> Number `FILL_PROPORTIONALLY` = 1718185072
>
> Scales content to fill the frame while keeping content proportions. If the content and frame proportions differ, the frame bounding box hides part of the content.
> _Read Only_
>
> Number `APPLY_FRAME_FITTING_OPTIONS` = 1634100847
>
> Applies the current frame fitting options to both frame and content. Before using this, confirm that the expected Frame Fitting Options are already applied on the frame. For example, placing an image in a frame set to 'Fit Content Proportionally' can alter crop settings in the Frame Fitting Options, and those changed settings are then used for later image placement when this API is called.

## Fitting — Class

> _Read Only_
>
> Number **PROPORTIONAL** = 1684885618
>
> Resizes content to the frame while retaining content proportions. Empty frame area appears if content and frame proportions differ.
> _Read Only_
>
> Number `FIT_CONTENT_TO_FRAME` = 1684883043
>
> Resizes content so it fits the frame. Note: Content with a different size than the frame may appear stretched or squeezed.
> _Read Only_
>
> Number `FIT_FRAME_TO_CONTENT` = 1684883046
>
> Resizes the frame until it fits the content.
> _Read Only_
>
> Number `PRESERVE_SIZES` = 1684885619
>
> Keeps the original sizes of the frame and content. Note: When content exceeds the frame, the edges are hidden.
> _Read Only_
>
> Number `CONTENT_AWARE_FITTING` = 1684882241
>
> Chooses the best content crop region for the frame using Adobe Sensei. Note: Frame size is preserved, but content size may change. Setting this fitting switches centerImage property off.
> _Read Only_
>
> Number `HONOUR_EXISTING_STYLE` = 1684883539
>
> Applies frame fitting from the setting already present on the original frame.
> _Read Only_
>
> Number `FILL_PROPORTIONAL` = 1684883056
>
> Scales content so the frame is filled while maintaining content proportions. If the content and frame use different proportions, the frame bounding box hides some content.

## FlattenerLevel — Class

> _Read Only_
>
> Number **LOW** = 1701727351
>
> Rasterizes every artwork item.
> _Read Only_
>
> Number `MEDIUM_LOW` = 1718373708
>
> Rasterizes nearly all artwork.
> _Read Only_
>
> Number **MEDIUM** = 1701727588
>
> Rasterizes a moderate amount of artwork.
> _Read Only_
>
> Number `MEDIUM_HIGH` = 1718373704
>
> Rasterizes more artwork than the medium setting.
> _Read Only_
>
> Number **HIGH** = 1701726313
>
> Preserves the greatest possible amount of artwork as vector data.

## FlattenerPreference

Preferences for transparency flattening.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier maps to valid objects.
> _Read Only_
>
> Spread **parent**
>
> Parent object for this FlattenerPreference, which is a Spread.
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
> Mixed **rasterVectorBalance**
>
> Controls how much vector artwork flattening rasterizes, either through a FlattenerLevel enumerator or a 0 to 100 percentage. Can return: FlattenerLevel enumerator or Real (0 - 100).
> Number **lineArtAndTextResolution**
>
> Sets the resolution used when flattening rasterizes vector objects. (Range: 1 to 9600) For details, see raster vector balance.
> Number **gradientAndMeshResolution**
>
> Sets rasterization resolution for gradients, plus drop shadows and feathers during print or export output. (Range: 0 to 1200) Note: Values above 300 ppi usually add file size and print time without improving image quality.
> Boolean **clipComplexRegions**
>
> When true, vector-to-raster artwork boundaries are constrained to object paths.
> Boolean **convertAllStrokesToOutlines**
>
> When true, all strokes become outlines so stroke widths stay consistent while flattening runs. Note: Thin strokes can look a little heavier than their source width. This applies to every stroke, not only those participating in transparency.
> Boolean **convertAllTextToOutlines**
>
> When true, text on transparent spreads is outlined and type glyph data is discarded; text stroke width stays stable during flattening. Note: Small fonts may look slightly thicker in Acrobat or on low-quality desktop printers, while high-resolution printers and imagesetters keep type quality unaffected.
> Object **properties**
>
> Lets multiple properties be assigned together.

### Methods

> String **toSource**()
>
> Produces executable string content that recreates the FlattenerPreference when run.
> FlattenerPreference **getElements**()
>
> Resolves this object specifier and builds an array containing the object references.
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

## FlattenerPreset

A transparency flattener properties preset.

### Instance

> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the FlattenerPreset.
> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier maps to valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent object for this FlattenerPreset, which is a Application.
> _Read Only_
>
> Number **index**
>
> Position of the FlattenerPreset inside its containing object.
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
> String **name**
>
> Name assigned to the FlattenerPreset.
> Mixed **rasterVectorBalance**
>
> Controls how much vector artwork flattening rasterizes, either through a FlattenerLevel enumerator or a 0 to 100 percentage. Can return: FlattenerLevel enumerator or Real (0 - 100).
> Number **lineArtAndTextResolution**
>
> Sets the resolution used when flattening rasterizes vector objects. (Range: 1 to 9600) For details, see raster vector balance.
> Number **gradientAndMeshResolution**
>
> Sets rasterization resolution for gradients, plus drop shadows and feathers during print or export output. (Range: 0 to 1200) Note: Values above 300 ppi usually add file size and print time without improving image quality.
> Boolean **clipComplexRegions**
>
> When true, vector-to-raster artwork boundaries are constrained to object paths.
> Boolean **convertAllStrokesToOutlines**
>
> When true, all strokes become outlines so stroke widths stay consistent while flattening runs. Note: Thin strokes can look a little heavier than their source width. This applies to every stroke, not only those participating in transparency.
> Boolean **convertAllTextToOutlines**
>
> When true, text on transparent spreads is outlined and type glyph data is discarded; text stroke width stays stable during flattening. Note: Small fonts may look slightly thicker in Acrobat or on low-quality desktop printers, while high-resolution printers and imagesetters keep type quality unaffected.
> String **label**
>
> Accepts any string as its value.
> Object **properties**
>
> Lets multiple properties be assigned together.

### Methods

> FlattenerPreset **duplicate**()
>
> Creates a duplicate FlattenerPreset.
> **remove**()
>
> Removes the FlattenerPreset.
> **insertLabel**( String **key**, String **value** )
>
> Stores the specified key with its associated value in the label.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | The key. |
| String | value | The value. |

> String **extractLabel**( String **key** )
>
> Retrieves the label value stored for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | The key. |

> String **toSource**()
>
> Produces executable string content that recreates the FlattenerPreset when run.
> FlattenerPreset **getElements**()
>
> Resolves this object specifier and builds an array containing the object references.
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

## FlattenerPresets

A transparency flattener preset collection.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by the collection.

### Methods

> FlattenerPreset **add**( Object **withProperties** )
>
> Creates a FlattenerPreset.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Initial values for properties of the new FlattenerPreset (Optional) |

> Number **count**()
>
> Shows how many elements the FlattenerPreset collection contains.
> FlattenerPreset **item**( Mixed **index** )
>
> Gets the FlattenerPreset identified by the provided index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | The index or name. Can accept: Long Integer or String. |

> FlattenerPreset **itemByName**( String **name** )
>
> Gets the FlattenerPreset that has the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | The name. |

> FlattenerPreset **itemByID**( Number **id** )
>
> Gets the FlattenerPreset that has the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | The ID. |

> FlattenerPreset **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the FlattenerPresets contained in the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | The FlattenerPreset, index, or name at the beginning of the range. Can accept: FlattenerPreset, Long Integer or String. |
| Mixed | to | The FlattenerPreset, index, or name at the end of the range. Can accept: FlattenerPreset, Long Integer or String. |

> FlattenerPreset **firstItem**()
>
> Gets the collection's first FlattenerPreset.
> FlattenerPreset **lastItem**()
>
> Gets the collection's last FlattenerPreset.
> FlattenerPreset **middleItem**()
>
> Gets the middle FlattenerPreset in this collection.
> FlattenerPreset **previousItem**( FlattenerPreset **obj** )
>
> Gets the FlattenerPreset whose index comes before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| FlattenerPreset | obj | The index of the FlattenerPreset that follows the desired FlattenerPreset. |

> FlattenerPreset **nextItem**( FlattenerPreset **obj** )
>
> Gets the FlattenerPreset whose index comes after the supplied FlattenerPreset in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| FlattenerPreset | obj | The FlattenerPreset whose index comes before the desired FlattenerPreset. |

> FlattenerPreset **anyItem**()
>
> Gets any FlattenerPreset from the collection.
> FlattenerPreset **everyItem**()
>
> Gets every FlattenerPreset from the collection.
> String **toSource**()
>
> Produces executable string content that recreates the FlattenerPreset when run.
> FlattenerPreset **[]**( Number **index** )
>
> Gets the FlattenerPreset at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | The index. |

## FlipValues

Settings for flipping text, or leaving it unflipped, relative to a path.

### Class

> _Read Only_
>
> Number `NOT_FLIPPED` = 1852206192
>
> Applies no flip effect.
> _Read Only_
>
> Number **FLIPPED** = 2036755568
>
> Text is flipped across the path.
> _Read Only_
>
> Number `UNDEFINED_FLIP_VALUE` = 1969646704
>
> Flip effect is undefined.

## Flip

Options that set flip direction.

### Class

> _Read Only_
>
> Number **NONE** = 1852796517
>
> Output prints without flipping the image.
> _Read Only_
>
> Number **HORIZONTAL** = 1752134266
>
> Prints the image with a horizontal flip.
> _Read Only_
>
> Number **VERTICAL** = 1986359924
>
> Prints the image with a vertical flip.
> _Read Only_
>
> Number `HORIZONTAL_AND_VERTICAL` = 1215977068
>
> Prints the image with both flip axes applied; equivalent to rotate 180.
> _Read Only_
>
> Number **BOTH** = 1651471464
>
> Both axes are flipped; equivalent to rotate 180.

## FloatingWindowPosition

Options for choosing where a movie display window appears.

### Class

> _Read Only_
>
> Number `UPPER_LEFT` = 1668183118
>
> Places the window at the screen's upper-left corner.
> _Read Only_
>
> Number `UPPER_MIDDLE` = 1299541348
>
> Places the window along the top edge, centered between left and right.
> _Read Only_
>
> Number `UPPER_RIGHT` = 1299542644
>
> Places the window at the screen's upper-right corner.
> _Read Only_
>
> Number `CENTER_LEFT` = 1298361446
>
> Places the window on the left edge, midway between top and bottom.
> _Read Only_
>
> Number **CENTER** = 1298359662
>
> Places the window in the screen center.
> _Read Only_
>
> Number `CENTER_RIGHT` = 1298362996
>
> Places the window on the right edge, midway between top and bottom.
> _Read Only_
>
> Number `LOWER_LEFT` = 1298951270
>
> Places the window at the screen's lower-left corner.
> _Read Only_
>
> Number `LOWER_MIDDLE` = 1298951524
>
> Places the window along the bottom edge, centered between left and right.
> _Read Only_
>
> Number `LOWER_RIGHT` = 1298952820
>
> Places the window at the screen's lower-right corner.

## FloatingWindowSize

Movie floating-window size setting. Applies only when floating window is true.

### Class

> _Read Only_
>
> Number `ONE_FIFTH` = 1298557286
>
> Floating window dimensions become one fifth of the movie's original display width and height.
> _Read Only_
>
> Number `ONE_FOURTH` = 1298558834
>
> Floating window dimensions become one fourth of the movie's original display width and height.
> _Read Only_
>
> Number `ONE_HALF` = 1298686316
>
> Floating window dimensions become one half of the movie's original display width and height.
> _Read Only_
>
> Number **FULL** = 1298560364
>
> Floating window dimensions match the movie's original display size.
> _Read Only_
>
> Number **TWICE** = 1299476344
>
> Floating window dimensions become twice the movie's original display width and height.
> _Read Only_
>
> Number **TRIPLE** = 1299477112
>
> Floating window dimensions become triple the movie's original display width and height.
> _Read Only_
>
> Number **QUADRUPLE** = 1299281272
>
> Floating window dimensions become quadruple the movie's original display width and height.
> _Read Only_
>
> Number **MAX** = 1299014008
>
> Floating window occupies the full screen.

## FolioBindingDirectionOptions

Folio binding-direction setting.

### Class

> _Read Only_
>
> Number **LEFT** = 1835102828
>
> Binding uses the left edge.
> _Read Only_
>
> Number **RIGHT** = 1835102834
>
> Binding uses the right edge.

## FolioOrientationOptions

Folio orientation setting.

### Class

> _Read Only_
>
> Number **PORTRAIT** = 1751738216
>
> Only portrait orientation is allowed.
> _Read Only_
>
> Number **LANDSCAPE** = 2003395685
>
> Only landscape orientation is allowed.
> _Read Only_
>
> Number `PORTRAIT_AND_LANDSCAPE` = 1699303266
>
> Both portrait and landscape orientations are allowed.
> _Read Only_
>
> Number **AUTO** = 1635019116
>
> Automatic orientation; the mini folios' orientation determines the result.

## FollowShapeModeOptions

Directional-feathering settings for follow-shape behavior.

### Class

> _Read Only_
>
> Number **NONE** = 1852796517
>
> Shape following is disabled, and the object's rectangular bounds are used.
> _Read Only_
>
> Number `LEADING_EDGE` = 1701721441
>
> Feathering applies only to the leading edge that faces the specified angle.
> _Read Only_
>
> Number `ALL_EDGES` = 1701721442
>
> Feathering applies to all edges facing the specified angle.

## FontDownloading

Options that control font downloading to the printer.

### Class

> _Read Only_
>
> Number **NONE** = 1852796517
>
> Only font references are downloaded. Note: choose this when fonts live on the printer.
> _Read Only_
>
> Number **COMPLETE** = 2003332197
>
> Every font is downloaded once for each page.
> _Read Only_
>
> Number **SUBSET** = 1768842098
>
> Only document-used characters (glyphs) are downloaded; the glyph data is sent once per page.
> _Read Only_
>
> Number `SUBSET_LARGE` = 1818325607
>
> Only document-used characters (glyphs) are downloaded; the glyph data is sent once per page. Note: use this when the glyph count is greater than 350.

## FontEmbedding

Controls font embedding for EPS export.

### Class

> _Read Only_
>
> Number **NONE** = 1852796517
>
> Only references to fonts are embedded.
> _Read Only_
>
> Number **COMPLETE** = 2003332197
>
> All fonts are embedded one time per page.
> _Read Only_
>
> Number **SUBSET** = 1768842098
>
> Embed only characters (glyphs) present in the document; glyphs are downloaded once for each page.

## FontLockingPreference

Preferences related to font locking.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> Reports true when the object specifier maps to valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent Application for the FontLockingPreference.
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
> Boolean **fontInputLocking**
>
> When true, missing-glyph protection is active during typing.
> Boolean **fontChangeLocking**
>
> When true, missing-glyph protection is active during font changes.
> Object **properties**
>
> Lets several properties be assigned together.

### Methods

> String **toSource**()
>
> Produces source text that, when run, returns the FontLockingPreference.
> FontLockingPreference **getElements**()
>
> Resolves this specifier and returns an array of object references.
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

## FontStatus

Options describing font status.

### Class

> _Read Only_
>
> Number **INSTALLED** = 1718831470
>
> Font is installed.
> _Read Only_
>
> Number `NOT_AVAILABLE` = 1718832705
>
> Font is unavailable.
> _Read Only_
>
> Number **FAUXED** = 1718830689
>
> Font uses faux styling.
> _Read Only_
>
> Number **SUBSTITUTED** = 1718834037
>
> Font is being substituted.
> _Read Only_
>
> Number **UNKNOWN** = 1433299822
>
> Font status cannot be determined.

## FontSyncPreference

Preferences for font sync.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> Reports true when the object specifier maps to valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent Application for the FontSyncPreference.
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
> Boolean **autoActivateFont**
>
> Preference for automatic font activation.
> Object **properties**
>
> Lets several properties be assigned together.

### Methods

> String **toSource**()
>
> Produces source text that, when run, returns the FontSyncPreference.
> FontSyncPreference **getElements**()
>
> Resolves this specifier and returns an array of object references.
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
