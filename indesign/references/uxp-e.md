# E Pub Export Preference, E Pub Export Preview App Preference, E Pub Fixed Layout Export Preference, E Pub Footnote Placement ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: EPubExportPreference; EPubExportPreviewAppPreference; EPubFixedLayoutExportPreference; EPubFootnotePlacement; EditingState; EmptyFrameFittingOptions; EnablingGroup; EnablingGroups; EndCap; EndJoin; EndnoteFrameCreate.

## EPubExportPreference

Preference settings used for EPub export.

### Instance

> _Read Only_
>
> Number **level**
>
> PNG compression level value.
> _Read Only_
>
> Boolean **isValid**
>
> Reports true when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the EPubExportPreference, either a Book or Document.
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
> String **epubTitle**
>
> EPub title value.
> String **epubCreator**
>
> EPub creator value.
> String **epubSubject**
>
> EPub subject value.
> String **epubDescription**
>
> EPub description value.
> String **epubDate**
>
> EPub date value.
> String **epubRights**
>
> EPub rights value.
> Boolean **useExistingImageOnExport**
>
> When true, InDesign reuses existing images for graphic objects during export.
> Boolean **includeClassesInHTML**
>
> When true, InDesign adds class attributes to HTML elements; otherwise, it outputs plain html without class attributes.
> UseSVGAsEnum **useSVGAs**
>
> Use SVG As
> String **epubPublisher**
>
> EPub publisher value.
> String **id**
>
> Unique EPub identifier, such as ISBN.
> ExportOrder **exportOrder**
>
> Export order setting.
> EpubCover **epubCover**
>
> EPub cover selection.
> String **coverImageFile**
>
> File path for the EPub cover image.
> BulletListExportOption **bulletExportOption**
>
> Bullet export setting.
> NumberedListExportOption **numberedListExportOption**
>
> Numbered list export setting.
> Number **leftMargin**
>
> Left EPub margin.
> Number **rightMargin**
>
> Right EPub margin.
> Number **topMargin**
>
> Top EPub margin.
> Number **bottomMargin**
>
> Bottom EPub margin.
> ImageResolution **imageExportResolution**
>
> Resolution used for export.
> ImageSizeOption **customImageSizeOption**
>
> Lets the user choose the image size option for conversion.
> Boolean **preserveLayoutAppearence**
>
> When true, image formatting is based on layout appearance.
> ImageAlignmentType **imageAlignment**
>
> Alignment assigned to images.
> Number **imageSpaceBefore**
>
> Space Before value assigned to images.
> Number **imageSpaceAfter**
>
> Space After value assigned to images.
> Boolean **useImagePageBreak**
>
> When true, object handling uses the image page break settings.
> ImagePageBreakType **imagePageBreak**
>
> Image page break settings applied to objects.
> ImageConversion **imageConversion**
>
> File format used for image conversion. Note: valid when the export copies optimized images, formatted images, or both.
> GIFOptionsPalette **gifOptionsPalette**
>
> Color palette used for GIF conversion. Note: unavailable when image conversion is JPEG.
> Boolean **gifOptionsInterlaced**
>
> When true, interlaced GIFs are generated. Note: unavailable when image conversion is JPEG.
> JPEGOptionsQuality **jpegOptionsQuality**
>
> Quality setting for converted JPEG images. Note: unavailable when image conversion is GIF.
> JPEGOptionsFormat **jpegOptionsFormat**
>
> Formatting method used for converted JPEG images. Note: unavailable when image conversion is GIF.
> Boolean **ignoreObjectConversionSettings**
>
> Ignores image conversion settings defined at object level.
> String **tocStyleName**
>
> Name of the TOC style used to build the epub TOC.
> Boolean **breakDocument**
>
> When true, the InDesign document is split into smaller pieces while the epub is generated.
> String **paragraphStyleName**
>
> Paragraph style name used to split the InDesign document.
> Boolean **stripSoftReturn**
>
> When true, soft returns are stripped.
> Boolean **preserveLocalOverride**
>
> When true, local style overrides are written to the output.
> Boolean **embedFont**
>
> When true, fonts are embedded in the epub.
> String **externalStyleSheets**
>
> File path for external cascading style sheets.
> String **javascripts**
>
> File path for external javascripts.
> EpubVersion **version**
>
> EPUB version value.
> Boolean **generateCascadeStyleSheet**
>
> When true, InDesign generates the cascade style sheet.
> EPubFootnotePlacement **footnotePlacement**
>
> Placement setting for footnotes during EPub export.
> Object **properties**
>
> Allows multiple properties to be set together.

### Methods

> String **toSource**()
>
> Creates a string that, when run, returns the EPubExportPreference.
> EPubExportPreference **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Attaches a listener for an event.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | The event type. |
| Mixed | handler | The event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Detaches that listener from the event source.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | The registered event type. |
| Mixed | handler | The registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |

## EPubExportPreviewAppPreference

Preferences for EPub export preview applications.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> Reports true when the object specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent object for the EPubExportPreviewAppPreference, an Application.
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
> Boolean **viewDocumentAfterExport**
>
> When true, the document opens in the viewer after export.
> Object **properties**
>
> Allows multiple properties to be set together.

### Methods

> **addApplication**( String **applicationPath**, Boolean **selectedForReflowableEpub**, Boolean **selectedForFixedLayoutEpub**, Object **withProperties** )
>
> Creates another preference entry for a preview application.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | applicationPath | The full path of the application to be added. |
| Boolean | selectedForReflowableEpub | Check if the app is selected in Reflowable ePub export. |
| Boolean | selectedForFixedLayoutEpub | Check if the app is selected in Fixed Layout ePub export. |
| Object | withProperties | Initial values for properties of the new EPubExportPreviewAppPreference (Optional) |

> **removeApplication**( Number **indexOfApp**, Object **withProperties** )
>
> Deletes the selected application entry.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | indexOfApp | The index of the application to be removed. |
| Object | withProperties | Initial values for properties of the new EPubExportPreviewAppPreference (Optional) |

> Mixed **getApplicationAtIndex**( Boolean **indexOfApp**, Object **withProperties** )
>
> Returns information for the requested application.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | indexOfApp | The index of the application to get information for. |
| Object | withProperties | Initial values for properties of the new EPubExportPreviewAppPreference (Optional) |

> Number **getApplicationCount**()
>
> Count of applications added for ePub Preview.
> String **toSource**()
>
> Creates a string that, when run, returns the EPubExportPreviewAppPreference.
> EPubExportPreviewAppPreference **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Attaches a listener for an event.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | The event type. |
| Mixed | handler | The event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Detaches that listener from the event source.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | The registered event type. |
| Mixed | handler | The registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |

## EPubFixedLayoutExportPreference

Preference settings for fixed-layout EPub export.

### Instance

> _Read Only_
>
> Number **level**
>
> PNG compression level value.
> _Read Only_
>
> Boolean **isValid**
>
> Reports true when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the EPubFixedLayoutExportPreference, either a Book or Document.
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
> String **epubPublisher**
>
> EPub publisher value.
> String **id**
>
> Unique EPub identifier, such as ISBN.
> EpubCover **epubCover**
>
> EPub cover selection.
> String **coverImageFile**
>
> File path for the EPub cover image.
> ImageResolution **imageExportResolution**
>
> Resolution used for export.
> ImageConversion **imageConversion**
>
> File format used for image conversion. Note: valid when the export copies optimized images, formatted images, or both.
> GIFOptionsPalette **gifOptionsPalette**
>
> Color palette used for GIF conversion. Note: unavailable when image conversion is JPEG.
> Boolean **gifOptionsInterlaced**
>
> When true, interlaced GIFs are generated. Note: unavailable when image conversion is JPEG.
> JPEGOptionsQuality **jpegOptionsQuality**
>
> Quality setting for converted JPEG images. Note: unavailable when image conversion is GIF.
> JPEGOptionsFormat **jpegOptionsFormat**
>
> Formatting method used for converted JPEG images. Note: unavailable when image conversion is GIF.
> String **tocStyleName**
>
> Name of the TOC style used to build the epub TOC.
> String **externalStyleSheets**
>
> File path for external cascading style sheets.
> String **javascripts**
>
> File path for external javascripts.
> String **epubTitle**
>
> EPub title value.
> String **epubCreator**
>
> EPub creator value.
> String **epubSubject**
>
> EPub subject value.
> String **epubDescription**
>
> EPub description value.
> String **epubDate**
>
> EPub date value.
> String **epubRights**
>
> EPub rights value.
> String **epubPageRange**
>
> EPub page range value.
> PageRangeFormat **epubPageRangeFormat**
>
> EPub page range format value.
> EpubFixedLayoutSpreadControl **epubSpreadControlOptions**
>
> Spread control setting for fixed-layout EPub.
> EpubNavigationStyle **epubNavigationStyles**
>
> EPub navigation style value.
> Object **properties**
>
> Allows multiple properties to be set together.

### Methods

> String **toSource**()
>
> Creates a string that, when run, returns the EPubFixedLayoutExportPreference.
> EPubFixedLayoutExportPreference **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Attaches a listener for an event.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | The event type. |
| Mixed | handler | The event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Detaches that listener from the event source.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | The registered event type. |
| Mixed | handler | The registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |

## EPubFootnotePlacement

Available placements for footnotes.

### Class

> _Read Only_
>
> Number `FOOTNOTE_AFTER_STORY` = 1701213267
>
> Places the footnote after the story.
> _Read Only_
>
> Number `FOOTNOTE_AFTER_PARAGRAPH` = 1701213296
>
> Places the footnote after the paragraph.
> _Read Only_
>
> Number `FOOTNOTE_INSIDE_POPUP` = 1701213235
>
> Places the footnote inside a popup.

## EditingState

Version Cue file editing-state value.

### Class

> _Read Only_
>
> Number `EDITING_UNKNOWN` = 1986217301
>
> Editing status is unknown.
> _Read Only_
>
> Number `EDITING_NOWHERE` = 1986217294
>
> The file is currently not in use and has no lock.
> _Read Only_
>
> Number `EDITING_REMOTELY` = 1986217298
>
> A lock exists but cannot be used.
> _Read Only_
>
> Number `EDITING_LOCALLY` = 1986217292
>
> Local modifications exist, without a lock.
> _Read Only_
>
> Number `EDITING_LOCALLY_LOCKED` = 1986217291
>
> The file is locked locally and may be changed.
> _Read Only_
>
> Number `EDITING_CONFLICT` = 1986217283
>
> Local or remote changes occurred while the file was locked, so two versions exist.

## EmptyFrameFittingOptions

Fitting options for content placed into an empty frame.

### Class

> _Read Only_
>
> Number **NONE** = 1852796517
>
> Applies no fitting behavior.
> _Read Only_
>
> Number `CONTENT_TO_FRAME` = 1668575078
>
> Changes the content size so it matches the frame. Note: when content proportions differ from the frame, the result can look stretched or compressed.
> _Read Only_
>
> Number **PROPORTIONALLY** = 1668247152
>
> Fits content inside the frame while keeping its proportions intact. When the frame and content ratios differ, blank area can remain inside the frame.
> _Read Only_
>
> Number `FILL_PROPORTIONALLY` = 1718185072
>
> Scales content until the frame is filled while retaining the content's proportions. If the content ratio does not match the frame ratio, the frame hides part of the content.

## EnablingGroup

A bordered panel with an enabling checkbox inside it. Clicking the checkbox toggles whether the group is active, and the group may hold controls of any supported type and count.

### Instance

> _Read Only_
>
> Number **id**
>
> ID value that uniquely identifies the EnablingGroup.
> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Container that owns the EnablingGroup; possible containers are DialogColumn, DialogRow, EnablingGroup, or BorderPanel.
> _Read Only_
>
> Number **index**
>
> Position of the EnablingGroup inside its parent container.
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
> _Read Only_
>
> DialogColumns **dialogColumns**
>
> Dialog-column collection.
> _Read Only_
>
> Widgets **widgets**
>
> Widget collection.
> _Read Only_
>
> TextEditboxes **textEditboxes**
>
> Text editbox collection.
> _Read Only_
>
> IntegerEditboxes **integerEditboxes**
>
> Integer editbox collection.
> _Read Only_
>
> MeasurementEditboxes **measurementEditboxes**
>
> Measurement editbox collection.
> _Read Only_
>
> RealEditboxes **realEditboxes**
>
> Real-number editbox collection.
> _Read Only_
>
> AngleEditboxes **angleEditboxes**
>
> Angle editbox collection.
> _Read Only_
>
> PercentEditboxes **percentEditboxes**
>
> Percent editbox collection.
> _Read Only_
>
> IntegerComboboxes **integerComboboxes**
>
> Integer combobox collection.
> _Read Only_
>
> MeasurementComboboxes **measurementComboboxes**
>
> Measurement combobox collection.
> _Read Only_
>
> RealComboboxes **realComboboxes**
>
> Real-number combobox collection.
> _Read Only_
>
> AngleComboboxes **angleComboboxes**
>
> Angle combobox collection.
> _Read Only_
>
> PercentComboboxes **percentComboboxes**
>
> Percent combobox collection.
> _Read Only_
>
> CheckboxControls **checkboxControls**
>
> Checkbox-control collection.
> _Read Only_
>
> StaticTexts **staticTexts**
>
> Static-text object collection.
> _Read Only_
>
> Dropdowns **dropdowns**
>
> Dropdown collection.
> _Read Only_
>
> BorderPanels **borderPanels**
>
> Border-panel collection.
> _Read Only_
>
> EnablingGroups **enablingGroups**
>
> Enabling-group collection.
> _Read Only_
>
> RadiobuttonGroups **radiobuttonGroups**
>
> Radiobutton-group collection.
> Boolean **checkedState**
>
> When true, the dialog initially displays the control as checked.
> String **staticLabel**
>
> Label text displayed in the EnablingGroup.
> Number **minWidth**
>
> Control width. For an editbox or combobox, this value is the box's minimum width.
> Object **properties**
>
> Lets multiple properties be assigned in one operation.

### Methods

> String **toSource**()
>
> Builds a string that returns the EnablingGroup when that string is executed.
> EnablingGroup **getElements**()
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
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## EnablingGroups

A collection containing enabling groups.

### Instance

> _Read Only_
>
> Number **length**
>
> Count of objects held by the collection.

### Methods

> EnablingGroup **add**( Object **withProperties** )
>
> Creates an EnablingGroup object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Object | withProperties | Starting property values for the new EnablingGroup. (Optional) |

> Number **count**()
>
> Shows how many elements are in the EnablingGroup.
> EnablingGroup **item**( Mixed **index** )
>
> Gets the EnablingGroup identified by the given index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name. Accepts Long Integer or String values. |

> EnablingGroup **itemByID**( Number **id** )
>
> Gets the EnablingGroup identified by the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> EnablingGroup **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the EnablingGroups that fall inside the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | EnablingGroup, index, or name marking the range start. Can accept: EnablingGroup, Long Integer or String. |
| Mixed | to | EnablingGroup, index, or name marking the range end. Can accept: EnablingGroup, Long Integer or String. |

> EnablingGroup **firstItem**()
>
> Gets the first EnablingGroup in the collection.
> EnablingGroup **lastItem**()
>
> Gets the final EnablingGroup in the collection.
> EnablingGroup **middleItem**()
>
> Gets the middle EnablingGroup in the collection.
> EnablingGroup **previousItem**( EnablingGroup **obj** )
>
> Gets the EnablingGroup whose index comes immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| EnablingGroup | obj | Index of the EnablingGroup that follows the target EnablingGroup. |

> EnablingGroup **nextItem**( EnablingGroup **obj** )
>
> Gets the EnablingGroup positioned after the specified EnablingGroup in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| EnablingGroup | obj | EnablingGroup whose index precedes the target EnablingGroup. |

> EnablingGroup **anyItem**()
>
> Gets any EnablingGroup from the collection.
> EnablingGroup **everyItem**()
>
> Gets all EnablingGroup objects in the collection.
> String **toSource**()
>
> Builds a string that returns the EnablingGroup when that string is executed.
> EnablingGroup **[]**( Number **index** )
>
> Gets the EnablingGroup at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## EndCap

End cap type values.

### Class

> _Read Only_
>
> Number `BUTT_END_CAP` = 1650680176
>
> Squared stroke ending that terminates exactly at the path endpoint.
> _Read Only_
>
> Number `ROUND_END_CAP` = 1919115632
>
> Semicircular stroke ending that projects past the endpoint by half the stroke-width.
> _Read Only_
>
> Number `PROJECTING_END_CAP` = 1886020464
>
> Squared stroke ending that projects past the endpoint by half the stroke-width.

## EndJoin

End join type values.

### Class

> _Read Only_
>
> Number `MITER_END_JOIN` = 1835691886
>
> Miter-style end join.
> _Read Only_
>
> Number `ROUND_END_JOIN` = 1919577966
>
> Round-style end join.
> _Read Only_
>
> Number `BEVEL_END_JOIN` = 1651142510
>
> Bevel-style end join.

## EndnoteFrameCreate

Choices controlling how endnote frames are created.

### Class

> _Read Only_
>
> Number `LOAD_ENDNOTE_PLACE_GUN` = 1162768487
>
> Loads endnotes into the placegun so they can be placed anywhere in the document.
> _Read Only_
>
> Number `NEW_PAGE` = 1162767984
>
> Creates the endnotes on an automatically generated new page and frame.
