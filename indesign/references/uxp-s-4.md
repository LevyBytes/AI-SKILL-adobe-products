# Sounds, Source Field Type, Source Spaces, Source Type ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Sounds; SourceFieldType; SourceSpaces; SourceType; Spacing; SpanColumnCountOptions; SpanColumnTypeOptions; SpecialCharacters; SpellPreference — Instance.

## Sounds

Collection object for sound clips.

### Instance

> _Read Only_
>
> Number **length**
>
> Object count in this collection.

### Methods

> Sound **add**( Layer **layer**, LocationOptions **at**, Mixed **reference**, Object **withProperties** )
>
> Creates a Sound object.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Layer | layer | Layer where the Sound is created. (Optional) |
| LocationOptions | at | Insertion point for the Sound, based either on the reference object or on a position inside the container object. (Optional) |
| Mixed | reference | Reference object. Note: required for before/after insertion positions. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. (Optional) |
| Object | withProperties | Initial property values assigned to the new Sound. (Optional) |

> Number **count**()
>
> Shows how many elements are in the Sound.
> Sound **item**( Mixed **index** )
>
> Retrieves the Sound identified by the specified index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index/name value. Can accept: Long Integer or String. |

> Sound **itemByName**( String **name** )
>
> Retrieves the Sound identified by the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> Sound **itemByID**( Number **id** )
>
> Retrieves the Sound identified by the specified ID.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | id | ID value. |

> Sound **itemByRange**( Mixed **from**, Mixed **to** )
>
> Retrieves the Sounds included in the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start, supplied as a Sound, index, or name. Can accept: Sound, Long Integer or String. |
| Mixed | to | Range end, supplied as a Sound, index, or name. Can accept: Sound, Long Integer or String. |

> Sound **firstItem**()
>
> Retrieves the first Sound in this collection.
> Sound **lastItem**()
>
> Retrieves the last Sound in this collection.
> Sound **middleItem**()
>
> Retrieves the middle Sound in this collection.
> Sound **previousItem**( Sound **obj** )
>
> Retrieves the Sound whose index immediately precedes the specified one.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Sound | obj | Index of the Sound that comes after the desired Sound. |

> Sound **nextItem**( Sound **obj** )
>
> Retrieves the Sound whose index comes after the specified Sound in this collection.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Sound | obj | Sound whose index comes before the desired Sound. |

> Sound **anyItem**()
>
> Retrieves any Sound in this collection.
> Sound **everyItem**()
>
> Retrieves every Sound in this collection.
> String **toSource**()
>
> Builds source text that returns the Sound when run.
> Sound **[]**( Number **index** )
>
> Retrieves the Sound at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## SourceFieldType

Options identifying data merge field data types.

### Class

> _Read Only_
>
> Number `TEXT_FIELD` = 1684886630
>
> This field supplies a data merge text placeholder.
> _Read Only_
>
> Number `IMAGE_FIELD` = 1684883814
>
> This field supplies a data merge image placeholder.
> _Read Only_
>
> Number `QRCODE_FIELD` = 1684885862
>
> This field supplies a data merge QR code placeholder.

## SourceSpaces

Source choices used by the color-management system.

### Class

> _Read Only_
>
> Number `USE_DOCUMENT` = 1967419235
>
> Selects the document's color space.
> _Read Only_
>
> Number `PROOF_SPACE` = 1886548848
>
> Selects the proof color space.

## SourceType

Source type used for alternate text or actual text.

### Class

> _Read Only_
>
> Number `SOURCE_CUSTOM` = 1934902125
>
> Source: Custom Text.
> _Read Only_
>
> Number `SOURCE_XMP_ALT_TEXT` = 1934907489
>
> Source: XMP Alt Text.
> _Read Only_
>
> Number `SOURCE_XMP_EXTENDED_DESCRIPTION` = 1934907493
>
> Source: XMP Extended Description.
> _Read Only_
>
> Number `SOURCE_XMP_TITLE` = 1934907508
>
> Source: XMP Title.
> _Read Only_
>
> Number `SOURCE_XMP_DESCRIPTION` = 1934907492
>
> Source: XMP Description.
> _Read Only_
>
> Number `SOURCE_XMP_HEADLINE` = 1934907496
>
> Source: XMP Headline.
> _Read Only_
>
> Number `SOURCE_XMP_OTHER` = 1934907503
>
> Source: user specified XMP metadata property.
> _Read Only_
>
> Number `SOURCE_XML_STRUCTURE` = 1934907507
>
> Source: XML Structure.

## Spacing

Paragraph spacing used when consecutive paragraphs share the same style.

### Class

> _Read Only_
>
> Number **SETIGNORE** = 1768386162
>
> Suppresses spacing between paragraphs using same style.

## SpanColumnCountOptions

Options for span column counts.

### Class

> _Read Only_
>
> Number **ALL** = 1634495520
>
> Paragraph covers all columns.

## SpanColumnTypeOptions

Paragraph span type.

### Class

> _Read Only_
>
> Number `SINGLE_COLUMN` = 1163092844
>
> Paragraph stays in a single column.
> _Read Only_
>
> Number `SPAN_COLUMNS` = 1936745326
>
> Paragraph spans across the columns.
> _Read Only_
>
> Number `SPLIT_COLUMNS` = 1937007470
>
> Paragraph divides into columns.

## SpecialCharacters

Options for special characters.

### Class

> _Read Only_
>
> Number `AUTO_PAGE_NUMBER` = 1396797550
>
> Adds an automatic page number.
> _Read Only_
>
> Number `NEXT_PAGE_NUMBER` = 1397649518
>
> Adds the next page number.
> _Read Only_
>
> Number `PREVIOUS_PAGE_NUMBER` = 1397780590
>
> Adds the previous page number.
> _Read Only_
>
> Number `SECTION_MARKER` = 1400073805
>
> Adds a section marker.
> _Read Only_
>
> Number `BULLET_CHARACTER` = 1396862068
>
> Adds a bullet character.
> _Read Only_
>
> Number `COPYRIGHT_SYMBOL` = 1396929140
>
> Adds a copyright symbol.
> _Read Only_
>
> Number `DEGREE_SYMBOL` = 1396991858
>
> Adds a degree symbol.
> _Read Only_
>
> Number `ELLIPSIS_CHARACTER` = 1397518451
>
> Adds an ellipsis character.
> _Read Only_
>
> Number `FORCED_LINE_BREAK` = 1397124194
>
> Adds a forced line break.
> _Read Only_
>
> Number `PARAGRAPH_SYMBOL` = 1397776754
>
> Adds a paragraph symbol.
> _Read Only_
>
> Number `REGISTERED_TRADEMARK` = 1397904493
>
> Adds a registered trademark.
> _Read Only_
>
> Number `SECTION_SYMBOL` = 1400073811
>
> Adds a section symbol.
> _Read Only_
>
> Number `TRADEMARK_SYMBOL` = 1398041963
>
> Adds a trademark symbol.
> _Read Only_
>
> Number `RIGHT_INDENT_TAB` = 1397909876
>
> Adds a right indent tab.
> _Read Only_
>
> Number `INDENT_HERE_TAB` = 1397319796
>
> Adds an indent to here character.
> _Read Only_
>
> Number `EM_DASH` = 1397058884
>
> Adds an em dash.
> _Read Only_
>
> Number `EN_DASH` = 1397059140
>
> Adds an en dash.
> _Read Only_
>
> Number `DISCRETIONARY_HYPHEN` = 1396983920
>
> Adds a discretionary hyphen.
> _Read Only_
>
> Number `NONBREAKING_HYPHEN` = 1397645928
>
> Adds a nonbreaking hyphen.
> _Read Only_
>
> Number `END_NESTED_STYLE` = 1396855379
>
> Adds an end nested style here character.
> _Read Only_
>
> Number `DOUBLE_LEFT_QUOTE` = 1396984945
>
> Adds a double left quote.
> _Read Only_
>
> Number `DOUBLE_RIGHT_QUOTE` = 1396986481
>
> Adds a double right quote.
> _Read Only_
>
> Number `SINGLE_LEFT_QUOTE` = 1397967985
>
> Adds a single left quote.
> _Read Only_
>
> Number `SINGLE_RIGHT_QUOTE` = 1397969521
>
> Adds a single right quote.
> _Read Only_
>
> Number `EM_SPACE` = 1397058899
>
> Adds an em space.
> _Read Only_
>
> Number `EN_SPACE` = 1397059155
>
> Adds an en space.
> _Read Only_
>
> Number `FLUSH_SPACE` = 1397124179
>
> Adds a flush space.
> _Read Only_
>
> Number `HAIR_SPACE` = 1397256787
>
> Adds a hair space.
> _Read Only_
>
> Number `NONBREAKING_SPACE` = 1397645907
>
> Adds a nonbreaking space.
> _Read Only_
>
> Number `THIN_SPACE` = 1398042195
>
> Adds a thin space.
> _Read Only_
>
> Number `FIGURE_SPACE` = 1397122899
>
> Adds a figure space.
> _Read Only_
>
> Number `PUNCTUATION_SPACE` = 1397780051
>
> Adds a punctuation space.
> _Read Only_
>
> Number `COLUMN_BREAK` = 1396927554
>
> Adds a column break.
> _Read Only_
>
> Number `FRAME_BREAK` = 1397125698
>
> Adds a frame break.
> _Read Only_
>
> Number `PAGE_BREAK` = 1397778242
>
> Adds a page break.
> _Read Only_
>
> Number `ODD_PAGE_BREAK` = 1397715010
>
> Adds a break to the next odd page.
> _Read Only_
>
> Number `EVEN_PAGE_BREAK` = 1397059650
>
> Adds a break to the next even page.
> _Read Only_
>
> Number `FOOTNOTE_SYMBOL` = 1399221837
>
> Adds a footnote symbol.
> _Read Only_
>
> Number `LEFT_TO_RIGHT_EMBEDDING` = 1399616101
>
> Adds a left to right embedding mark.
> _Read Only_
>
> Number `RIGHT_TO_LEFT_EMBEDDING` = 1400007781
>
> Adds a right to left embedding mark.
> _Read Only_
>
> Number `POP_DIRECTIONAL_FORMATTING` = 1399874662
>
> Adds a pop directional formatting mark.
> _Read Only_
>
> Number `LEFT_TO_RIGHT_OVERRIDE` = 1399616111
>
> Adds a left to right override mark.
> _Read Only_
>
> Number `RIGHT_TO_LEFT_OVERRIDE` = 1400007791
>
> Adds a right to left override mark.
> _Read Only_
>
> Number `DOTTED_CIRCLE` = 1399092323
>
> Adds a dotted circle.
> _Read Only_
>
> Number `ZERO_WIDTH_JOINER` = 1400534890
>
> Adds a zero width joiner.
> _Read Only_
>
> Number `TEXT_VARIABLE` = 1397781622
>
> Adds the specified text variable.
> _Read Only_
>
> Number `SINGLE_STRAIGHT_QUOTE` = 1397969777
>
> Adds a single straight quote.
> _Read Only_
>
> Number `DOUBLE_STRAIGHT_QUOTE` = 1396986737
>
> Adds a double straight quote.
> _Read Only_
>
> Number `DISCRETIONARY_LINE_BREAK` = 1397777484
>
> Adds a discretionary line break.
> _Read Only_
>
> Number `ZERO_WIDTH_NONJOINER` = 1397780074
>
> Adds a zero-width non-joiner.
> _Read Only_
>
> Number `THIRD_SPACE` = 1398040659
>
> Adds a third-width space.
> _Read Only_
>
> Number `QUARTER_SPACE` = 1397847379
>
> Adds a quarter-width space.
> _Read Only_
>
> Number `SIXTH_SPACE` = 1397975379
>
> Adds a sixth-width space.
> _Read Only_
>
> Number `FIXED_WIDTH_NONBREAKING_SPACE` = 1399746146
>
> Adds a fixed-width nonbreaking space.
> _Read Only_
>
> Number `HEBREW_MAQAF` = 1397252717
>
> Adds a hebrew maqaf.
> _Read Only_
>
> Number `HEBREW_GERESH` = 1397253989
>
> Adds a hebrew geresh.
> _Read Only_
>
> Number `HEBREW_GERSHAYIM` = 1397254003
>
> Adds a hebrew gershayim.
> _Read Only_
>
> Number `ARABIC_KASHIDA` = 1396798059
>
> Adds an arabic kashida.
> _Read Only_
>
> Number `ARABIC_COMMA` = 1396798051
>
> Adds an arabic comma.
> _Read Only_
>
> Number `ARABIC_SEMICOLON` = 1396798307
>
> Adds an arabic semicolon.
> _Read Only_
>
> Number `ARABIC_QUESTION_MARK` = 1396797805
>
> Adds an arabic question mark.
> _Read Only_
>
> Number `LEFT_TO_RIGHT_MARK` = 1399616109
>
> Adds a left to right mark.
> _Read Only_
>
> Number `RIGHT_TO_LEFT_MARK` = 1400007789
>
> Adds a right to left mark.
> _Read Only_
>
> Number `HEBREW_SOF_PASUK` = 1397252723
>
> Adds a hebrew sof pasuk.

## SpellPreference — Instance

> _Read Only_
>
> Boolean **isValid**
>
> True when the object specifier resolves to valid objects.
> _Read Only_
>
> Application **parent**
>
> Parent object for the SpellPreference (a Application).
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
> Boolean **dynamicSpellCheck**
>
> When true, InDesign underlines misspelled words, repeated words, uncapitalized proper nouns, and sentence-initial uncapitalized words. Note: enable the related properties too. Related checks: check misspelled words, check repeated words, check capitalized words, and check capitalized sentences.
> Mixed **misspelledWordColor**
>
> Underline color for misspelled words, supplied as a three-double array of R, G, and B values, with each value from 0 to 255, or as a UI color. Note: this requires dynamic spell check plus check misspelled words. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
> Mixed **repeatedWordColor**
>
> Underline color for repeated words, supplied as a three-double array of R, G, and B values, with each value from 0 to 255, or as a UI color. Note: this requires dynamic spell check plus check repeated words. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
> Mixed **uncapitalizedWordColor**
>
> Underline color for uncapitalized proper nouns, supplied as a three-double array of R, G, and B values, with each value from 0 to 255, or as a UI color. Note: this requires dynamic spell check plus check capitalized words. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
> Mixed **uncapitalizedSentenceColor**
>
> Underline color for the first word in sentences that start without a capital letter, supplied as a three-double array of R, G, and B values, with each value from 0 to 255, or as a UI color. Note: this requires dynamic spell check plus check capitalized sentences. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
> Boolean **checkMisspelledWords**
>
> When true, misspelled words are checked.
> Boolean **checkRepeatedWords**
>
> When true, repeated words are checked.
> Boolean **checkCapitalizedWords**
>
> When true, uncapitalized proper nouns are checked.
> Boolean **checkCapitalizedSentences**
>
> When true, sentence-initial uncapitalized words are checked.
> Object **properties**
>
> Property for setting several properties in one operation.

### Methods

> String **toSource**()
>
> Builds source text that returns the SpellPreference when run.
> SpellPreference **getElements**()
>
> Resolves the object specifier and produces object-reference array entries.
> String **toSpecifier**()
>
> Reads back the object specifier.
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
