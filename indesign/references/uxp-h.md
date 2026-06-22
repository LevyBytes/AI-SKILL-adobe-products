# Header Footer Break Types, Header Types, Hidden Text, Hidden Texts ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: HeaderFooterBreakTypes; HeaderTypes; HiddenText; HiddenTexts; HorizontalAlignment; HorizontalOrVertical — Class; HTMLExportPreference.

## HeaderFooterBreakTypes

Controls where header or footer rows are placed.

### Class

> _Read Only_
>
> Number `IN_ALL_TEXT_COLUMNS` = 1231115363
>
> Puts headers or footers into every text column.
> _Read Only_
>
> Number `ONCE_PER_TEXT_FRAME` = 1332761702
>
> Adds headers or footers again for each text frame.
> _Read Only_
>
> Number `ONCE_PER_PAGE` = 1332760673
>
> Uses a single header or footer instance on each page.

## HeaderTypes

Header type choices used for indexing sort options.

### Class

> _Read Only_
>
> Number `BASIC_LATIN` = 1213481548
>
> Basic Latin
> _Read Only_
>
> Number `FINNISH_SWEDISH` = 1213485894
>
> Finnish/Swedish
> _Read Only_
>
> Number `DANISH_NORWEGIAN` = 1213482062
>
> Danish/Norwegian
> _Read Only_
>
> Number **SPANISH** = 1213485936
>
> Spanish
> _Read Only_
>
> Number **CROATIAN** = 1213481842
>
> Croatian
> _Read Only_
>
> Number **CZECH** = 1213481850
>
> Czech
> _Read Only_
>
> Number **ESTONIAN** = 1213482355
>
> Estonian
> _Read Only_
>
> Number **HUNGARIAN** = 1213483125
>
> Hungarian
> _Read Only_
>
> Number **LATVIAN** = 1213484129
>
> Latvian
> _Read Only_
>
> Number **LITHUANIAN** = 1213484137
>
> Lithuanian
> _Read Only_
>
> Number **POLISH** = 1213485167
>
> Polish
> _Read Only_
>
> Number **ROMANIAN** = 1213485679
>
> Romanian
> _Read Only_
>
> Number **SLOVAK** = 1213485931
>
> Slovak
> _Read Only_
>
> Number **SLOVENIAN** = 1213485934
>
> Slovenian
> _Read Only_
>
> Number **TURKISH** = 1213486197
>
> Turkish
> _Read Only_
>
> Number **BELARUSIAN** = 1213481573
>
> Belarusian
> _Read Only_
>
> Number **BULGARIAN** = 1213481589
>
> Bulgarian
> _Read Only_
>
> Number **RUSSIAN** = 1213485685
>
> Russian
> _Read Only_
>
> Number **UKRAINIAN** = 1213486443
>
> Ukrainian
> _Read Only_
>
> Number `KOREAN_CONSONANT` = 1213483887
>
> Korean Consonant
> _Read Only_
>
> Number `KOREAN_CONSONANT_PLUS_VOWEL` = 1213483862
>
> Korean Consonant Plus Vowel
> _Read Only_
>
> Number `HIRAGANA_ALL` = 1213483073
>
> Hiragana: A, I, U, E, O...
> _Read Only_
>
> Number `HIRAGANA_CONSONANTS_ONLY` = 1213483075
>
> Hiragana: A, Ka, Sa, Ta, Na...
> _Read Only_
>
> Number `KATAKANA_ALL` = 1213483841
>
> Katakana: A, I, U, E, O...
> _Read Only_
>
> Number `KATAKANA_CONSONANTS_ONLY` = 1213483843
>
> Katakana: A, Ka, Sa, Ta, Na...
> _Read Only_
>
> Number `CHINESE_PINYIN` = 1213481808
>
> Chinese Pinyin
> _Read Only_
>
> Number `CHINESE_STROKE_COUNT` = 1213481811
>
> Chinese Stroke Count

## HiddenText

Object representing hidden text.

### Instance

> _Read Only_
>
> InsertionPoint **storyOffset**
>
> Points to the insertion point before the table in the story that contains the table.
> _Read Only_
>
> Number **id**
>
> Stores the HiddenText unique ID.
> _Read Only_
>
> Boolean **isValid**
>
> true is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Identifies the HiddenText parent. Possible parent types are Story, XmlStory, TextFrame, EndnoteTextFrame, InsertionPoint, Note, Cell or Footnote.
> _Read Only_
>
> Number **index**
>
> Gives the HiddenText position inside its container.
> _Read Only_
>
> Events **events**
>
> Provides the events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Provides the event-listener collection.
> _Read Only_
>
> Texts **texts**
>
> Provides the text-objects collection.
> _Read Only_
>
> Characters **characters**
>
> Provides the characters collection.
> _Read Only_
>
> Words **words**
>
> Provides the words collection.
> _Read Only_
>
> Lines **lines**
>
> Provides the lines collection.
> _Read Only_
>
> TextColumns **textColumns**
>
> Provides the text-columns collection.
> _Read Only_
>
> Paragraphs **paragraphs**
>
> Provides the paragraphs collection.
> _Read Only_
>
> InsertionPoints **insertionPoints**
>
> Provides the insertion-points collection.
> _Read Only_
>
> TextStyleRanges **textStyleRanges**
>
> Provides the text-style-ranges collection.
> String **label**
>
> Accepts any string as the property value.
> String **name**
>
> Names the HiddenText and maps to the HiddenText's label property.
> Object **properties**
>
> Allows multiple properties to be assigned in one operation.

### Methods

> **insertLabel**( String **key**, String **value** )
>
> Stores the supplied value under the specified label key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Label key. |
| String | value | Label value. |

> String **extractLabel**( String **key** )
>
> Retrieves the label value stored for the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Label key. |

> String **toSource**()
>
> Produces source text that evaluates back to the HiddenText.
> HiddenText **getElements**()
>
> Resolves the object specifier and returns an array of object references.
> String **toSpecifier**()
>
> Returns this object's specifier.
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
| String | eventType | Event type that was registered. |
| Mixed | handler | Event handler that was registered. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## HiddenTexts

Collection containing hidden text objects.

### Instance

> _Read Only_
>
> Number **length**
>
> Gives the object count in the collection.

### Methods

> Number **count**()
>
> Reports how many elements are in the HiddenText.
> HiddenText **item**( Mixed **index** )
>
> Retrieves the HiddenText identified by index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index or name. Accepts either Long Integer or String. |

> HiddenText **itemByName**( String **name** )
>
> Retrieves the HiddenText that has the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name to match. |

> HiddenText **itemByID**( Number **id** )
>
> Retrieves the HiddenText with the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID to match. |

> HiddenText **itemByRange**( Mixed **from**, Mixed **to** )
>
> Retrieves the HiddenTexts contained within the given range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | HiddenText, index, or name that starts the range. Can accept: HiddenText, Long Integer or String. |
| Mixed | to | HiddenText, index, or name that ends the range. Can accept: HiddenText, Long Integer or String. |

> HiddenText **firstItem**()
>
> Retrieves the collection's first HiddenText.
> HiddenText **lastItem**()
>
> Retrieves the collection's last HiddenText.
> HiddenText **middleItem**()
>
> Retrieves the collection's middle HiddenText.
> HiddenText **previousItem**( HiddenText **obj** )
>
> Retrieves the HiddenText whose index comes before the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| HiddenText | obj | HiddenText index that follows the desired HiddenText. |

> HiddenText **nextItem**( HiddenText **obj** )
>
> Retrieves the HiddenText whose index comes after the specified HiddenText in the collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| HiddenText | obj | HiddenText whose index precedes the desired HiddenText. |

> HiddenText **anyItem**()
>
> Retrieves any HiddenText from the collection.
> HiddenText **everyItem**()
>
> Retrieves every HiddenText from the collection.
> String **toSource**()
>
> Produces source text that evaluates back to the HiddenText.
> HiddenText **[]**( Number **index** )
>
> Retrieves the HiddenText at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index to retrieve. |

## HorizontalAlignment

Sets horizontal alignment for an anchored object. It does not apply when the anchored position is inline.

### Class

> _Read Only_
>
> Number `RIGHT_ALIGN` = 1919379572
>
> Positions the anchored object to the reference's right side.
> _Read Only_
>
> Number `LEFT_ALIGN` = 1818584692
>
> Positions the anchored object to the reference's left side.
> _Read Only_
>
> Number `CENTER_ALIGN` = 1667591796
>
> Centers the anchored object on the reference.
> _Read Only_
>
> Number `TEXT_ALIGN` = 1954046316
>
> Aligns the anchored object according to the text alignment.

## HorizontalOrVertical — Class

> _Read Only_
>
> Number **HORIZONTAL** = 1752134266
>
> Uses horizontal orientation.
> _Read Only_
>
> Number **VERTICAL** = 1986359924
>
> Uses vertical orientation.

## HTMLExportPreference

Preferences that control HTML export.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> true is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> Document **parent**
>
> Identifies the HTMLExportPreference parent, a Document.
> _Read Only_
>
> Events **events**
>
> Provides the events collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Provides the event-listener collection.
> Boolean **includeClassesInHTML**
>
> true makes InDesign add class attributes to HTML elements; false exports plain html without class attributes.
> UseSVGAsEnum **useSVGAs**
>
> Selects the Use SVG As setting.
> Boolean **exportSelection**
>
> When true and a selection exists, only the selected content is exported to HTML.
> ExportOrder **exportOrder**
>
> Chooses the export order.
> BulletListExportOption **bulletExportOption**
>
> Chooses how bullets are exported.
> NumberedListExportOption **numberedListExportOption**
>
> Chooses how numbered lists are exported.
> Boolean **viewDocumentAfterExport**
>
> true opens the document in a viewer after export.
> ImageExportOption **imageExportOption**
>
> Controls the image export option.
> ImageResolution **imageExportResolution**
>
> Sets the export resolution.
> ImageSizeOption **customImageSizeOption**
>
> Lets the user choose the image size option for conversion.
> Boolean **preserveLayoutAppearence**
>
> true formats images from the layout appearance.
> ImageAlignmentType **imageAlignment**
>
> Applies alignment to images.
> Number **imageSpaceBefore**
>
> Applies Space Before to images.
> Number **imageSpaceAfter**
>
> Applies Space After to images.
> ImageConversion **imageConversion**
>
> Chooses which file format converted images use. Note: requires true for copy optimized images and/or copy formatted images.
> GIFOptionsPalette **gifOptionsPalette**
>
> Chooses the palette for GIF conversion. Note: this setting is not used when image conversion is JPEG.
> Boolean **gifOptionsInterlaced**
>
> true creates interlaced GIFs. Note: not valid when image conversion is JPEG.
> JPEGOptionsQuality **jpegOptionsQuality**
>
> Sets converted JPEG image quality. Note: not valid when image conversion is GIF.
> JPEGOptionsFormat **jpegOptionsFormat**
>
> Sets how converted JPEG images are formatted. Note: this setting is not used when image conversion is GIF.
> Number **level**
>
> Sets the PNG compression level.
> Boolean **ignoreObjectConversionSettings**
>
> Ignores object-level image conversion settings.
> String **serverPath**
>
> Supplies the image server path.
> String **imageExtension**
>
> Supplies the image extension on the server.
> Boolean **preserveLocalOverride**
>
> true outputs the local style override.
> String **externalStyleSheets**
>
> Points to external cascading style sheet files.
> String **javascripts**
>
> Points to external javascript files.
> Boolean **generateCascadeStyleSheet**
>
> true makes InDesign generate a cascade style sheet.
> Object **properties**
>
> Allows multiple properties to be assigned in one operation.

### Methods

> String **toSource**()
>
> Produces source text that evaluates back to the HTMLExportPreference.
> HTMLExportPreference **getElements**()
>
> Resolves the object specifier and returns an array of object references.
> String **toSpecifier**()
>
> Returns this object's specifier.
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
| String | eventType | Event type that was registered. |
| Mixed | handler | Event handler that was registered. Can accept: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## See also

- [Characters](uxp-characters.md)
