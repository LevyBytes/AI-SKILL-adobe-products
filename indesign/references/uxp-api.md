# J, K

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: What is the OMV file?; JoinOptions; JpegColorSpaceEnum; JPEGExportPreference; JPEGOptionsFormat; JPEGOptionsQuality; Justification; KashidasOptions — Class; KentenAlignment; KentenCharacterSet; KentenCharacter; KinsokuHangTypes; KinsokuSet; KinsokuTable; KinsokuTables; KinsokuType.

## What is the OMV file?

[ExtendScript Toolkit (ESTK)](https://github.com/Adobe-CEP/CEP-Resources/tree/master/ExtendScript-Toolkit) users may recognize the "Object Model Viewer". Beginning with InDesign 18.0, ESTK cannot be counted on to connect with InDesign, so these OMV references are provided here instead.

## JoinOptions

Choices that control how two path points are joined.

### Class

> _Read Only_
>
> Number **CONNECT** = 1668178804
>
> Joins the two end points; this is the default.
> _Read Only_
>
> Number **COMBINE** = 1668113006
>
> Merges the two end points, replacing them with one averaged point.

## JpegColorSpaceEnum

Color-space choices used when an exported JPEG represents color.

### Class

> _Read Only_
>
> Number **RGB** = 1666336578
>
> Encodes every color value in RGB color space; use this for documents intended for screen viewing.
> _Read Only_
>
> Number **CMYK** = 1129142603
>
> Encodes every color value in CMYK color space.
> _Read Only_
>
> Number **GRAY** = 1766290041
>
> Turns color values into high-quality black-and-white output. The converted objects use gray levels based on their original luminosity.

## JPEGExportPreference

Preferences used when exporting JPEG files.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> Returns true when the object specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent object for the JPEGExportPreference; the type is Application.
> _Read Only_
>
> Events **events**
>
> Events collection associated with this object.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener collection associated with this object.
> Boolean **exportingSpread**
>
> When true, each spread exports as one JPEG file. When false, facing pages export separately and each file name receives a sequence number.
> JPEGOptionsQuality **jpegQuality**
>
> Compression quality setting.
> String **pageString**
>
> Pages selected for export, supplied as a page number or an array of page numbers. Note: applies when the JPEG export range is not all.
> JPEGOptionsFormat **jpegRenderingStyle**
>
> Rendering style setting.
> ExportRangeOrAllPages **jpegExportRange**
>
> Page range selected for export.
> Boolean **embedColorProfile**
>
> Set true to embed the color profile; set false to omit it.
> JpegColorSpaceEnum **jpegColorSpace**
>
> RGB, CMYK, or Gray selection.
> Boolean **useDocumentBleeds**
>
> When true, the exported JPEG uses the document's bleed settings.
> Boolean **antiAlias**
>
> When true, text and vectors use anti-aliasing during export.
> Boolean **simulateOverprint**
>
> When true, export simulates spot and process color overprinting as it would appear in print.
> Number **exportResolution**
>
> Export resolution as a real number rather than an integer. (Range: 1.0 to 2400.0)
> Object **properties**
>
> Property object for setting several properties together.

### Methods

> String **toSource**()
>
> Builds a string that, when executed, returns the JPEGExportPreference.
> JPEGExportPreference **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Gets the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers listener handling for events.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | The event type. |
| Mixed | handler | The event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters listener handling for events.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | The registered event type. |
| Mixed | handler | The registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |

## JPEGOptionsFormat

Options that set formatting for converted JPEG images.

### Class

> _Read Only_
>
> Number `BASELINE_ENCODING` = 1785751394
>
> Applies baseline encoding so the image downloads in one pass.
> _Read Only_
>
> Number `PROGRESSIVE_ENCODING` = 1785751408
>
> Applies progressive encoding so the image downloads over multiple passes; the first pass is low resolution, and later passes add image detail.

## JPEGOptionsQuality

Quality choices for converted JPEG images.

### Class

> _Read Only_
>
> Number **LOW** = 1701727351
>
> Sets low quality.
> _Read Only_
>
> Number **MEDIUM** = 1701727588
>
> Sets medium quality.
> _Read Only_
>
> Number **HIGH** = 1701726313
>
> Sets high quality.
> _Read Only_
>
> Number **MAXIMUM** = 1701727608
>
> Sets maximum quality.

## Justification

Text alignment choices.

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
> Aligns text in the center.
> _Read Only_
>
> Number `RIGHT_ALIGN` = 1919379572
>
> Aligns text to the right.
> _Read Only_
>
> Number `LEFT_JUSTIFIED` = 1818915700
>
> Justifies the paragraph and aligns its final line to the left.
> _Read Only_
>
> Number `RIGHT_JUSTIFIED` = 1919578996
>
> Justifies the paragraph and aligns its final line to the right.
> _Read Only_
>
> Number `CENTER_JUSTIFIED` = 1667920756
>
> Justifies the paragraph and centers its final line.
> _Read Only_
>
> Number `FULLY_JUSTIFIED` = 1718971500
>
> Justifies all text, including the paragraph's final line.
> _Read Only_
>
> Number `TO_BINDING_SIDE` = 1630691955
>
> Places text on the page or spread side nearest the binding spine.
> _Read Only_
>
> Number `AWAY_FROM_BINDING_SIDE` = 1633772147
>
> Places text on the side opposite the page's binding spine.

## KashidasOptions — Class

> _Read Only_
>
> Number `DEFAULT_KASHIDAS` = 1801544805
>
> Uses the default kashidas setting.
> _Read Only_
>
> Number `KASHIDAS_OFF` = 1801547622
>
> Disables kashidas.

## KentenAlignment

Choices for positioning kenten characters against their parent characters.

### Class

> _Read Only_
>
> Number `ALIGN_KENTEN_LEFT` = 1248554604
>
> Positions kenten at the left side of parent characters.
> _Read Only_
>
> Number `ALIGN_KENTEN_CENTER` = 1248554595
>
> Centers kenten relative to parent characters.

## KentenCharacterSet

Kenten character set choices.

### Class

> _Read Only_
>
> Number `CHARACTER_INPUT` = 1248028777
>
> Selects Character input.
> _Read Only_
>
> Number `SHIFT_JIS` = 1249077875
>
> Selects Shift JIS.
> _Read Only_
>
> Number **JIS** = 1246382419
>
> Selects JIS.
> _Read Only_
>
> Number **KUTEN** = 1248556404
>
> Selects Kuten.
> _Read Only_
>
> Number **UNICODE** = 1249209961
>
> Selects Unicode.

## KentenCharacter

Style choices for kenten characters.

### Class

> _Read Only_
>
> Number **NONE** = 1852796517
>
> No kenten is applied.
> _Read Only_
>
> Number `KENTEN_SESAME_DOT` = 1248551795
>
> Applies the kenten sesame dot.
> _Read Only_
>
> Number `KENTEN_WHITE_SESAME_DOT` = 1248551799
>
> Applies the kenten white sesame dot.
> _Read Only_
>
> Number `KENTEN_BLACK_CIRCLE` = 1248551523
>
> Applies the kenten black circle.
> _Read Only_
>
> Number `KENTEN_WHITE_CIRCLE` = 1248556899
>
> Applies the kenten white circle.
> _Read Only_
>
> Number `KENTEN_BLACK_TRIANGLE` = 1248551540
>
> Applies the kenten black triangle.
> _Read Only_
>
> Number `KENTEN_WHITE_TRIANGLE` = 1248556916
>
> Applies the kenten white triangle.
> _Read Only_
>
> Number `KENTEN_BULLSEYE` = 1248551525
>
> Applies the kenten bullseye.
> _Read Only_
>
> Number `KENTEN_FISHEYE` = 1248552549
>
> Applies the kenten fisheye.
> _Read Only_
>
> Number `KENTEN_SMALL_BLACK_CIRCLE` = 1248555875
>
> Applies the kenten small black circle.
> _Read Only_
>
> Number `KENTEN_SMALL_WHITE_CIRCLE` = 1248555895
>
> Applies the kenten small white circle.
> _Read Only_
>
> Number **CUSTOM** = 1131639917
>
> Applies a custom kenten style.

## KinsokuHangTypes

Hanging punctuation choices used while a kinsoku set is active.

### Class

> _Read Only_
>
> Number **NONE** = 1852796517
>
> Turns hanging punctuation off.
> _Read Only_
>
> Number `KINSOKU_HANG_REGULAR` = 1248553074
>
> Turns hanging punctuation on, letting punctuation marks sit on the text frame or outside it while keeping burasagari character hang distance to the smallest practical amount. Note: justified and nonjustified text behave differently; for justification details, see line alignment.
> _Read Only_
>
> Number `KINSOKU_HANG_FORCE` = 1248553062
>
> Turns on hanging punctuation and requires punctuation to hang outside the text frame, without permitting placement on the frame itself.

## KinsokuSet

Built-in choices for kinsoku sets.

### Class

> _Read Only_
>
> Number **NOTHING** = 1851876449
>
> Applies no kinsoku set.
> _Read Only_
>
> Number `HARD_KINSOKU` = 1248357235
>
> Applies the hard or maximum kinsoku set, containing every Japanese character restricted from starting or ending a line.
> _Read Only_
>
> Number `SOFT_KINSOKU` = 1249078131
>
> Applies the soft or weak kinsoku set; compared with the hard kinsoku set, it leaves out long vowel symbols plus small hiragana and katakana characters.
> _Read Only_
>
> Number `KOREAN_KINSOKU` = 1263692659
>
> Selects the Korean kinsoku set.
> _Read Only_
>
> Number `SIMPLIFIED_CHINESE_KINSOKU` = 1396927347
>
> Selects the simplified Chinese kinsoku set.
> _Read Only_
>
> Number `TRADITIONAL_CHINESE_KINSOKU` = 1413704563
>
> Selects the traditional Chinese kinsoku set.

## KinsokuTable

Kinsoku table object.

### Instance

> _Read Only_
>
> Number **id**
>
> Unique identifier for the KinsokuTable.
> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the KinsokuTable (a Document or Application).
> _Read Only_
>
> Number **index**
>
> Position of the KinsokuTable within its containing object.
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
> Name assigned to the KinsokuTable.
> String **cantBeginLineChars**
>
> Characters in the kinsoku set that are barred from starting lines.
> String **cantEndLineChars**
>
> Characters in the kinsoku set that are barred from ending lines.
> String **hangingPunctuationChars**
>
> Hanging punctuation characters included in the kinsoku set.
> String **cantBeSeparatedChars**
>
> Characters in the kinsoku set that must stay together.
> String **label**
>
> User-settable string property.
> Object **properties**
>
> Property bundle for assigning multiple properties together.

### Methods

> **remove**()
>
> Deletes this KinsokuTable.
> **insertLabel**( String **key**, String **value** )
>
> Uses the specified key to store a label value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key identifier. |
| String | value | Value to store. |

> String **extractLabel**( String **key** )
>
> Uses the specified key to read a label value.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key identifier. |

> String **toSource**()
>
> Builds an executable string that returns the KinsokuTable when run.
> KinsokuTable **getElements**()
>
> Resolves the object specifier and creates an array of object references.
> String **toSpecifier**()
>
> Fetches the object specifier.
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Registers an event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Event type. |
| Mixed | handler | Event handler; accepts File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type. |
| Mixed | handler | Registered event handler; accepts File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## KinsokuTables

Collection of kinsoku tables.

### Instance

> _Read Only_
>
> Number **length**
>
> Object count for the collection.

### Methods

> KinsokuTable **add**( String **name**, Object **withProperties** )
>
> Creates a kinsoku table.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name for the new kinsoku table. |
| Object | withProperties | Initial property values for the new KinsokuTable. (Optional) |

> Number **count**()
>
> Shows how many elements are in the KinsokuTable.
> KinsokuTable **item**( Mixed **index** )
>
> Fetches the KinsokuTable identified by the specified index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index/name selector. Can accept: Long Integer or String. |

> KinsokuTable **itemByName**( String **name** )
>
> Fetches the KinsokuTable that has the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> KinsokuTable **itemByID**( Number **id** )
>
> Fetches the KinsokuTable that has the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> KinsokuTable **itemByRange**( Mixed **from**, Mixed **to** )
>
> Fetches the KinsokuTables that fall inside the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Starting KinsokuTable, index, or name for the range. Can accept: KinsokuTable, Long Integer or String. |
| Mixed | to | Ending KinsokuTable, index, or name for the range. Can accept: KinsokuTable, Long Integer or String. |

> KinsokuTable **firstItem**()
>
> Fetches the first KinsokuTable in the collection.
> KinsokuTable **lastItem**()
>
> Fetches the last KinsokuTable in the collection.
> KinsokuTable **middleItem**()
>
> Fetches the middle KinsokuTable in the collection.
> KinsokuTable **previousItem**( KinsokuTable **obj** )
>
> Fetches the KinsokuTable positioned immediately before the supplied KinsokuTable.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| KinsokuTable | obj | KinsokuTable that follows the desired KinsokuTable. |

> KinsokuTable **nextItem**( KinsokuTable **obj** )
>
> Fetches the KinsokuTable positioned immediately after the supplied KinsokuTable.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| KinsokuTable | obj | KinsokuTable that comes before the desired KinsokuTable. |

> KinsokuTable **anyItem**()
>
> Fetches any KinsokuTable in the collection.
> KinsokuTable **everyItem**()
>
> Fetches every KinsokuTable in the collection.
> String **toSource**()
>
> Builds an executable string that returns the KinsokuTable when run.
> KinsokuTable **[]**( Number **index** )
>
> Fetches the KinsokuTable at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## KinsokuType

Settings for kinsoku processing.

### Class

> _Read Only_
>
> Number `KINSOKU_PUSH_IN_FIRST` = 1248553318
>
> First tries moving characters to the previous line; when push-in cannot be done, it moves characters to the next line.
> _Read Only_
>
> Number `KINSOKU_PUSH_OUT_FIRST` = 1248554854
>
> First tries moving characters to the next line; when push-out cannot be done, it moves characters to the previous line.
> _Read Only_
>
> Number `KINSOKU_PUSH_OUT_ONLY` = 1248554863
>
> Always sends characters to the next line. No push-in attempt is made.
> _Read Only_
>
> Number `KINSOKU_PRIORITIZE_ADJUSTMENT_AMOUNT` = 1248553313
>
> Kinsoku mode that prioritizes adjustment amount.

## See also

- [Characters](uxp-characters.md)
