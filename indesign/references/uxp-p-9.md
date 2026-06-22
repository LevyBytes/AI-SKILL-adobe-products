# Place Gun, Placed Vector Profile Policy, Play Operations, Png Color Space Enum ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: PlaceGun; PlacedVectorProfilePolicy; PlayOperations — Class; PNGColorSpaceEnum; PNGExportPreference; PNGExportRangeEnum; PNGQualityEnum; PointType; PolygonPreference.

## PlaceGun

Represents PlaceGun.

### Instance

> _Read Only_
>
> Boolean **loaded**
>
> Indicates whether the place gun is loaded with content ready to place.
> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Document **parent**
>
> Gives the PlaceGun parent (a Document).
> _Read Only_
>
> Snippets **snippets**
>
> Contains IDML snippets.
> _Read Only_
>
> Events **events**
>
> Contains events.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Contains event listeners.
> _Read Only_
>
> PageItems **pageItems**
>
> Collection for processing every page item in a container, such as a document, page, or group, without filtering by type.
> _Read Only_
>
> TextFrames **textFrames**
>
> Contains text frames.
> _Read Only_
>
> Rectangles **rectangles**
>
> Contains rectangles.
> _Read Only_
>
> SplineItems **splineItems**
>
> Contains spline items.
> _Read Only_
>
> Ovals **ovals**
>
> Contains ellipses.
> _Read Only_
>
> GraphicLines **graphicLines**
>
> Contains graphic lines.
> _Read Only_
>
> Polygons **polygons**
>
> Contains polygons.
> _Read Only_
>
> Groups **groups**
>
> Contains groups.
> _Read Only_
>
> Buttons **buttons**
>
> Contains buttons.
> _Read Only_
>
> FormFields **formFields**
>
> Contains form fields.
> _Read Only_
>
> MultiStateObjects **multiStateObjects**
>
> Contains multi-state objects.
> _Read Only_
>
> EPSTexts **epstexts**
>
> EPSTexts.
> _Read Only_
>
> Images **images**
>
> Contains bitmap images in bitmap file formats including TIFF, JPEG, or GIF.
> _Read Only_
>
> Graphics **graphics**
>
> Contains imported graphics in vector, metafile, or bitmap formats.
> _Read Only_
>
> EPSs **epss**
>
> Contains EPS files.
> _Read Only_
>
> WMFs **wmfs**
>
> Contains WMF graphics.
> _Read Only_
>
> PICTs **picts**
>
> Contains PICT graphics.
> _Read Only_
>
> PDFs **pdfs**
>
> Contains PDF files.
> _Read Only_
>
> ImportedPages **importedPages**
>
> Contains imported InDesign pages.
> _Read Only_
>
> CheckBoxes **checkBoxes**
>
> Contains checkboxes.
> _Read Only_
>
> ComboBoxes **comboBoxes**
>
> Contains comboboxes.
> _Read Only_
>
> ListBoxes **listBoxes**
>
> Contains listboxes.
> _Read Only_
>
> RadioButtons **radioButtons**
>
> Contains radio buttons.
> _Read Only_
>
> TextBoxes **textBoxes**
>
> Contains text boxes.
> _Read Only_
>
> SignatureFields **signatureFields**
>
> Contains signature fields.
> _Read Only_
>
> SVGs **svgs**
>
> Contains SVG files.
> Object **properties**
>
> Property used to set several properties together.

### Methods

> **abortPlaceGun**()
>
> Deletes the place gun contents.
> **rotate**( RotationDirection **direction** )
>
> Rotates the place gun contents.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| RotationDirection | direction | Direction for rotating the contents. (Optional) |

> **loadPlaceGun**( Mixed **fileName**, Boolean **showingOptions**, Object **withProperties** )
>
> Loads the place gun with one file or multiple files.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | fileName | Input file set for placement. Can accept: File or Array of Files. |
| Boolean | showingOptions | Controls display of the import options dialog. (Optional) |
| Object | withProperties | Starting property values for the placed object(s). (Optional) |

> String **toSource**()
>
> Generates a string that returns the PlaceGun when executed.
> PlaceGun **getElements**()
>
> Turns the object specifier into object-reference array entries.
> String **toSpecifier**()
>
> Returns the specifier string.
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
> Deletes the registered event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## PlacedVectorProfilePolicy

Color-profile policy for placed vector files (PDF or EPS).

### Class

> _Read Only_
>
> Number `IGNORE_ALL` = 1148217697
>
> Ignores every profile and output intent.
> _Read Only_
>
> Number `IGNORE_OUTPUT_INTENT` = 1148217711
>
> Ignores output intent while honoring calibrated spaces.
> _Read Only_
>
> Number `HONOR_ALL_PROFILES` = 1148217441
>
> Honors every profile and output intent.

## PlayOperations — Class

> _Read Only_
>
> Number **PLAY** = 1886151033
>
> Begins playback.
> _Read Only_
>
> Number **STOP** = 1937010544
>
> Halts playback.
> _Read Only_
>
> Number **PAUSE** = 1885435251
>
> Suspends playback.
> _Read Only_
>
> Number **RESUME** = 1919251317
>
> Continues playback.
> _Read Only_
>
> Number `STOP_ALL` = 1937010785
>
> Ends every playback operation (SWF only).

## PNGColorSpaceEnum

Options for color space representation in exported PNG output.

### Class

> _Read Only_
>
> Number **RGB** = 1666336578
>
> Uses the RGB color space for all color values. Best for documents intended for on-screen viewing.
> _Read Only_
>
> Number **GRAY** = 1766290041
>
> Converts all color values into high-quality black-and-white images. The converted objects use gray levels to reflect original luminosity.

## PNGExportPreference

Preferences for PNG export.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> Resolves to true when the object specifier points at valid objects.
> _Read Only_
>
> Application **parent**
>
> Identifies the PNGExportPreference parent, which is a Application.
> _Read Only_
>
> Events **events**
>
> Event objects associated with this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener objects associated with this object.
> PNGExportRangeEnum **pngExportRange**
>
> Selects which page range is included in the export.
> String **pageString**
>
> Specifies the page or pages for export, either as a page number or as an array of page numbers. Note: Applies only when the PNG export range is not all.
> Boolean **exportingSpread**
>
> When true, each spread is written as one PNG file. When false, facing pages are written as separate files with sequential numbers appended to each filename.
> PNGQualityEnum **pngQuality**
>
> Sets the compression quality.
> Number **exportResolution**
>
> Uses a real-number export resolution value, not just whole integers. (Range: 1.0 to 2400.0)
> PNGColorSpaceEnum **pngColorSpace**
>
> RGB or Gray
> Boolean **transparentBackground**
>
> When true, the exported PNG uses a transparent background.
> Boolean **antiAlias**
>
> When true, text and vector artwork are anti-aliased during export.
> Boolean **useDocumentBleeds**
>
> When true, the exported PNG uses the document's bleed settings.
> Boolean **simulateOverprint**
>
> When true, overprinting spot and process colors are simulated as they would be for print output.
> Object **properties**
>
> Lets multiple properties be assigned together.

### Methods

> String **toSource**()
>
> Builds a string that returns the PNGExportPreference when executed.
> PNGExportPreference **getElements**()
>
> Resolves the object specifier and creates an array containing object references.
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
| Mixed | handler | Handler invoked for the event. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Previously registered event type. |
| Mixed | handler | Previously registered handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## PNGExportRangeEnum

PNG export settings that choose the page range.

## PNGQualityEnum

PNG image export quality settings.

## PointType

Classifies a path point.

### Class

> _Read Only_
>
> Number **SMOOTH** = 1936553064
>
> A smooth point uses two parallel direction lines.
> _Read Only_
>
> Number **CORNER** = 1668443762
>
> A corner point has either one direction line or two direction lines that act independently.
> _Read Only_
>
> Number **PLAIN** = 1886151022
>
> A plain point has no direction lines.
> _Read Only_
>
> Number **SYMMETRICAL** = 1937337709
>
> This smooth-point variant uses two direction lines of equal length.

## PolygonPreference

Default values used while creating polygons.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> Resolves to true when the object specifier points at valid objects.
> _Read Only_
>
> Application **parent**
>
> Identifies the PolygonPreference parent, which is a Application.
> _Read Only_
>
> Events **events**
>
> Event objects associated with this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener objects associated with this object.
> Number **insetPercentage**
>
> Sets the star inset percentage used for polygon sides. (Range: 0 to 100)
> Number **numberOfSides**
>
> Sets how many sides a polygon has. (Range: 3 to 100)
> Object **properties**
>
> Lets multiple properties be assigned together.

### Methods

> String **toSource**()
>
> Builds a string that returns the PolygonPreference when executed.
> PolygonPreference **getElements**()
>
> Resolves the object specifier and creates an array containing object references.
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
| Mixed | handler | Handler invoked for the event. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Previously registered event type. |
| Mixed | handler | Previously registered handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |
