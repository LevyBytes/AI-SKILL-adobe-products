# Blending Setting, Blending Space, Book Content Status, Book Content ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: BlendingSetting; BlendingSpace; BookContentStatus; BookContent; BookContents; Book — Instance; BookletTypeOptions; Bookmark — Instance.

## BlendingSetting

Core blending controls for an object.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> Returns true when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the BlendingSetting, either a TransparencySetting, StrokeTransparencySetting, FillTransparencySetting or ContentTransparencySetting.
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
> BlendMode **blendMode**
>
> Blending mode used to control how the base color combines with the BlendingSetting color.
> Number **opacity**
>
> Fill opacity for the BlendingSetting, expressed as a percentage. (Range: 0 to 100)
> Boolean **knockoutGroup**
>
> When true, the BlendingSetting acts as a knockout group.
> Boolean **isolateBlending**
>
> When true, blending is restricted to the group. When false, blending also considers every object below the group.
> Object **properties**
>
> Lets several properties be assigned together.

### Methods

> String **toSource**()
>
> Produces a string that, when executed, returns the BlendingSetting.
> BlendingSetting **getElements**()
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
| Mixed | handler | Event handler. Accepts File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Accepts File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## BlendingSpace

Options for the transparency blending space.

### Class

> _Read Only_
>
> Number `DEFAULT_VALUE` = 1147563124
>
> Uses the active color profile by default.
> _Read Only_
>
> Number **RGB** = 1666336578
>
> Applies the RGB color profile.
> _Read Only_
>
> Number **CMYK** = 1129142603
>
> Applies the CMYK profile.

## BookContentStatus

Status choices for a book content file.

### Class

> _Read Only_
>
> Number **NORMAL** = 1852797549
>
> Indicates that the book content object is closed and has not changed.
> _Read Only_
>
> Number `MISSING_DOCUMENT` = 1148150605
>
> Indicates that the book content object cannot be found because it was moved, renamed, or deleted.
> _Read Only_
>
> Number `DOCUMENT_OUT_OF_DATE` = 1148150596
>
> Indicates that the book content object changed after repagination.
> _Read Only_
>
> Number `DOCUMENT_IN_USE` = 1148150601
>
> Indicates that another user is using the book content object, leaving it locked.
> _Read Only_
>
> Number `DOCUMENT_IS_OPEN` = 1148150607
>
> Indicates that the book content object is open.

## BookContent

A book entry that points to an added document.

### Instance

> _Read Only_
>
> File **fullName**
>
> Complete path to the BookContent, including the BookContent name.
> _Read Only_
>
> BookContentStatus **status**
>
> File status for the book content object.
> _Read Only_
>
> Number **size**
>
> Size of the BookContent file.
> _Read Only_
>
> Date **date**
>
> Creation date and time for the BookContent.
> _Read Only_
>
> String **documentPageRange**
>
> Page range occupied by the book content object inside the book.
> _Read Only_
>
> File **filePath**
>
> Complete path to the file.
> _Read Only_
>
> String **name**
>
> Name of the BookContent.
> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the BookContent.
> _Read Only_
>
> Boolean **isValid**
>
> Returns true when the object specifier resolves to valid objects.
> _Read Only_
>
> Book **parent**
>
> Parent of the BookContent, which is a Book.
> _Read Only_
>
> Number **index**
>
> Index of the BookContent within the object that contains it.
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
> String **label**
>
> Property that accepts any string value.
> Object **properties**
>
> Lets several properties be assigned together.

### Methods

> **preflight**( File **to**, Boolean **autoOpen** )
>
> Runs preflight for a book content object and can save the generated report.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | to | Destination for the saved preflight report. (Optional) |
| Boolean | autoOpen | When true, opens the report automatically after it is created. (Optional) |

> BookContent **move**( LocationOptions **to**, BookContent **reference** )
>
> Relocates the book content object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | to | Location relative to the reference object or inside the book. (Optional) |
| BookContent | reference | Reference object. Note: required when the to parameter is before or after. (Optional) |

> **remove**()
>
> Removes the BookContent.
> BookContent **replace**( File **using** )
>
> Swaps in a new file for a book content object. Note: if the replacement file takes the place of the current style source document, that replacement becomes the style source document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | using | Full path name for the replacement book content object. |

> **synchronize**()
>
> Aligns the book content object's formatting with the style source document.
> **insertLabel**( String **key**, String **value** )
>
> Stores the supplied value on the label under the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |
| String | value | Value to store. |

> String **extractLabel**( String **key** )
>
> Retrieves the label value stored for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |

> String **toSource**()
>
> Produces a string that, when executed, returns the BookContent.
> BookContent **getElements**()
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
| Mixed | handler | Event handler. Accepts File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Accepts File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## BookContents

Collection containing book content objects.

### Instance

> _Read Only_
>
> Number **length**
>
> Collection length, expressed as an object count.

### Methods

> BookContent **add**( File **fullName**, Number **at**, Object **withProperties** )
>
> Adds a new book content object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | fullName | Full path name for the new book content object. |
| Number | at | Position of the book content object within the book. (Optional) |
| Object | withProperties | Initial property values for the new BookContent. (Optional) |

> Number **count**()
>
> Shows how many elements are in the BookContent.
> BookContent **item**( Mixed **index** )
>
> Returns the BookContent identified by the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name. Accepts Long Integer or String. |

> BookContent **itemByName**( String **name** )
>
> Gets the BookContent identified by the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> BookContent **itemByID**( Number **id** )
>
> Gets the BookContent identified by the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> BookContent **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the BookContents that fall inside the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | BookContent, index, or name at the range start. Accepts BookContent, Long Integer or String. |
| Mixed | to | BookContent, index, or name at the range end. Accepts BookContent, Long Integer or String. |

> BookContent **firstItem**()
>
> Gets the first BookContent in the collection.
> BookContent **lastItem**()
>
> Gets the final BookContent in the collection.
> BookContent **middleItem**()
>
> Selects the collection's middle BookContent.
> BookContent **previousItem**( BookContent **obj** )
>
> Returns the BookContent at the index immediately before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| BookContent | obj | Index of the BookContent after the desired BookContent. |

> BookContent **nextItem**( BookContent **obj** )
>
> Returns the BookContent at the index immediately after the specified BookContent in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| BookContent | obj | BookContent whose index is before the desired BookContent. |

> BookContent **anyItem**()
>
> Gets any BookContent from the collection.
> BookContent **everyItem**()
>
> Gets every BookContent from the collection.
> String **toSource**()
>
> Produces a string that, when executed, returns the BookContent.
> BookContent **[]**( Number **index** )
>
> Gets the BookContent identified by the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## Book — Instance

> _Read Only_
>
> PreflightBookOption **preflightBookOptions**
>
> Settings for preflighting a book.
> _Read Only_
>
> EPubFixedLayoutExportPreference **epubFixedLayoutExportPreferences**
>
> Settings for EPub fixed layout export preferences.
> _Read Only_
>
> EPubExportPreference **epubExportPreferences**
>
> Settings for EPub export preferences.
> _Read Only_
>
> PrintPreference **printPreferences**
>
> Settings for print preferences.
> _Read Only_
>
> String **name**
>
> Name of the Book.
> _Read Only_
>
> File **fullName**
>
> Complete path to the Book, including the Book name.
> _Read Only_
>
> File **filePath**
>
> Complete path to the file.
> _Read Only_
>
> Boolean **modified**
>
> True means the Book changed after the most recent save.
> _Read Only_
>
> Boolean **saved**
>
> True means the Book has been saved since creation.
> _Read Only_
>
> Boolean **isValid**
>
> Returns true when the object specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent of the Book, which is an Application.
> _Read Only_
>
> Number **index**
>
> Index of the Book within the object that contains it.
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
> _Read Only_
>
> BookContents **bookContents**
>
> Book content object collection.
> Mixed **styleSourceDocument**
>
> Current document used as the style source. Return types: Document or BookContent.
> RepaginateOption **repaginationOption**
>
> Controls page numbering for book content objects inside the book.
> Boolean **insertBlankPage**
>
> When true, inserts a blank page as needed to fill page-number gaps caused by the odd or even setting in the repagination option.
> Boolean **automaticPagination**
>
> When true, page numbers update automatically after pages in book content files are added, deleted, or rearranged.
> Boolean **automaticDocumentConversion**
>
> When true, the book content object is converted automatically during repagination and synchronization.
> Boolean **synchronizeCrossReferenceFormat**
>
> When true, cross reference formats are synchronized.
> Boolean **mergeIdenticalLayers**
>
> When true, layers with identical names are merged during PDF export.
> String **label**
>
> Property that accepts any string value.
> Boolean **synchronizeTableOfContentStyle**
>
> When true, table of content styles are synchronized.
> Boolean **synchronizeTextVariable**
>
> When true, text variables are synchronized.
> Boolean **synchronizeTableStyle**
>
> When true, table styles are synchronized.
> Boolean **synchronizeParagraphStyle**
>
> When true, paragraph styles are synchronized.
> Boolean **synchronizeCharacterStyle**
>
> When true, character styles are synchronized.
> Boolean **synchronizeTrapStyle**
>
> When true, trap styles are synchronized.
> Boolean **synchronizeMasterPage**
>
> When true, master pages are synchronized.
> Boolean **synchronizeObjectStyle**
>
> When true, object styles are synchronized.
> Boolean **synchronizeSwatch**
>
> When true, swatches are synchronized.
> Boolean **synchronizeCellStyle**
>
> When true, cell styles are synchronized.
> Boolean **synchronizeBulletNumberingList**
>
> When true, bullets and numbering are synchronized.
> Boolean **synchronizeConditionalText**
>
> When true, conditional text is synchronized.
> SmartMatchOptions **smartMatchStyleGroups**
>
> Controls how styles with matching names are paired during book synchronization.
> Object **properties**
>
> Lets several properties be assigned together.

### Methods

> Boolean **packageForPrint**( File **to**, Boolean **copyingFonts**, Boolean **copyingLinkedGraphics**, Boolean **copyingProfiles**, Boolean **updatingGraphics**, Boolean **includingHiddenLayers**, Boolean **ignorePreflightErrors**, Boolean **creatingReport**, Boolean **includeIdml**, Boolean **includePdf**, String **pdfStyle**, Boolean **useDocumentHyphenationExceptionsOnly**, String **versionComments**, Boolean **forceSave** )
>
> Builds the package for the document.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | to | Folder, alias, or path where the packaged files are placed. |
| Boolean | copyingFonts | When true, copies the document's used fonts into the package folder. |
| Boolean | copyingLinkedGraphics | When true, copies linked graphics files into the package folder. |
| Boolean | copyingProfiles | When true, copies color profiles into the package folder. |
| Boolean | updatingGraphics | When true, updates graphics links so they point to the package folder. |
| Boolean | includingHiddenLayers | When true, copies fonts and links from hidden layers into the package. |
| Boolean | ignorePreflightErrors | When true, packaging continues despite preflight errors. When false, existing errors cancel packaging. |
| Boolean | creatingReport | When true, creates a package report containing printing instructions, print settings, fonts, links, required inks, and other details. |
| Boolean | includeIdml | When true, creates IDML and includes it in the package folder. (Optional) |
| Boolean | includePdf | When true, creates PDF and includes it in the package folder. (Optional) |
| String | pdfStyle | When PDF output is included, uses this style for PDF export if valid; otherwise it uses the last used PDF preset. (Optional) |
| Boolean | useDocumentHyphenationExceptionsOnly | When selected, InDesign flags this document so it will not reflow if another person opens or edits it on a computer with different hyphenation and dictionary settings. (Optional) |
| String | versionComments | Comments for the version. (Optional) |
| Boolean | forceSave | When true, forcibly saves a version. (Optional) |

> **preflight**( File **to**, Boolean **autoOpen** )
>
> Runs preflight for a book and can save the generated report.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | to | Destination for the saved preflight report. (Optional) |
| Boolean | autoOpen | When true, opens the report automatically after it is created. (Optional) |

> **print**( Boolean **printDialog**, Mixed **using** )
>
> Sends the Book(s) to the printer.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Boolean | printDialog | Whether to open the print dialog. (Optional) |
| Mixed | using | Preset selected for printing. Allowed values: a PrinterPresetTypes enumerator or a PrinterPreset. (Optional) |

> **close**( SaveOptions **saving**, File **savingIn**, String **versionComments**, Boolean **forceSave** )
>
> Closes the Book.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| SaveOptions | saving | Whether changes are saved before the Book closes. (Optional) |
| File | savingIn | File where the Book is saved. (Optional) |
| String | versionComments | Comment for this version. (Optional) |
| Boolean | forceSave | Forcibly saves a version. (Optional) |

> **save**( File **to**, String **versionComments**, Boolean **forceSave** )
>
> Writes the book to disk.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | to | File path. Note: required only when the book has not already been saved. If the book was saved previously, supplying a path writes a copy and then closes the original book. (Optional) |
| String | versionComments | Comment for this version. (Optional) |
| Boolean | forceSave | When true, forcibly saves a version. (Optional) |

> **exportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, BookContent **whichDocuments**, String **versionComments**, Boolean **forceSave** )
>
> Writes the book out to a file.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | format | Selects the export format. Use either an enumeration value or an extension listed in the Export dialog's Save as type or Format menu. Can accept: ExportFormat enumerator or String. |
| File | to | Target file for the exported book. (Optional) |
| Boolean | showingOptions | Controls whether the PDF Export Options Dialog is displayed. (Optional) |
| PDFExportPreset | using | Supplies the export preset. The value can be a preset object, an enumeration for an existing or user-defined preset, or a string naming the preset. If Showing Options is true, the preset chosen in the Export Dialog overrides this parameter. (Optional) |
| BookContent | whichDocuments | Identifies book content references from the current book; duplicate entries may be included. When this list is omitted, the full book contents are exported. (Optional) |
| String | versionComments | Comment text for this version. (Optional) |
| Boolean | forceSave | When true, forces a version save. (Optional) |

> **synchronize**()
>
> Brings the full book into sync with the style source document.
> **repaginate**()
>
> Recomputes pagination for the book.
> **insertLabel**( String **key**, String **value** )
>
> Stores value under the supplied key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Label key. |
| String | value | Label value. |

> String **extractLabel**( String **key** )
>
> Returns the label value stored for the supplied key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Label key. |

> **updateChapterAndParagraphNumbers**()
>
> Refreshes chapter and paragraph numbering across the book.
> **updateAllNumbers**()
>
> Refreshes all numbering throughout the book, including page, chapter, and paragraph numbers.
> **updateAllCrossReferences**()
>
> Refreshes every cross reference in the book.
> String **toSource**()
>
> Builds source text that returns this Book when executed.
> Book **getElements**()
>
> Resolves the object specifier and produces object references as an array.
> String **toSpecifier**()
>
> Returns the object specifier text.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type. |
| Mixed | handler | Event handler. Accepts either a File or a JavaScript Function. |
| Boolean | captures | Obsolete; retained only for compatibility. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Accepts either a File or a JavaScript Function. |
| Boolean | captures | Obsolete; retained only for compatibility. (Optional) |

## BookletTypeOptions

Booklet imposition type options.

### Class

> _Read Only_
>
> Number `TWO_UP_SADDLE_STITCH` = 1110594387
>
> Imposition setting for two up saddle stitch output.
> _Read Only_
>
> Number `TWO_UP_PERFECT_BOUND` = 1110593602
>
> Imposition setting for two up perfect bound output.
> _Read Only_
>
> Number `TWO_UP_CONSECUTIVE` = 1110590291
>
> Imposition setting for two up consecutive output.
> _Read Only_
>
> Number `THREE_UP_CONSECUTIVE` = 1110655827
>
> Imposition setting for three up consecutive output.
> _Read Only_
>
> Number `FOUR_UP_CONSECUTIVE` = 1110721363
>
> Imposition setting for four up consecutive output.

## Bookmark — Instance

> _Read Only_
>
> Number **indent**
>
> Bookmark indent depth.
> _Read Only_
>
> Mixed **destination**
>
> Hyperlink target used by the bookmark. Can return: HyperlinkTextDestination, HyperlinkPageDestination, HyperlinkExternalPageDestination or Page.
> _Read Only_
>
> Number **id**
>
> Unique Bookmark ID.
> _Read Only_
>
> Boolean **isValid**
>
> Returns true when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Bookmark parent, either a Document or Bookmark.
> _Read Only_
>
> Number **index**
>
> Bookmark position inside its containing object.
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
> _Read Only_
>
> Bookmarks **bookmarks**
>
> Bookmark collection.
> String **name**
>
> Bookmark name.
> String **label**
>
> String-valued label property.
> Object **properties**
>
> Lets several properties be assigned together.

### Methods

> **remove**()
>
> Deletes this Bookmark.
> Bookmark **move**( LocationOptions **to**, Mixed **reference** )
>
> Repositions the bookmark at the requested location.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| LocationOptions | to | Placement for the bookmark, relative to the reference object or inside the containing object. (Optional) |
| Mixed | reference | Reference object. Required when to specifies before or after. Can accept: Bookmark, Document or Bookmark. (Optional) |

> **showBookmark**()
>
> Navigates to the bookmark.
> **insertLabel**( String **key**, String **value** )
>
> Stores value under the supplied key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Label key. |
| String | value | Label value. |

> String **extractLabel**( String **key** )
>
> Returns the label value stored for the supplied key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Label key. |

> String **toSource**()
>
> Builds source text that returns this Bookmark when executed.
> Bookmark **getElements**()
>
> Resolves the object specifier and produces object references as an array.
> String **toSpecifier**()
>
> Returns the object specifier text.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type. |
| Mixed | handler | Event handler. Accepts either a File or a JavaScript Function. |
| Boolean | captures | Obsolete; retained only for compatibility. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler. Accepts either a File or a JavaScript Function. |
| Boolean | captures | Obsolete; retained only for compatibility. (Optional) |
