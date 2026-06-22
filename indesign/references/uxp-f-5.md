# Font Types, Font, Fonts, Footnote First Baseline ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: FontTypes; Font — Instance; Fonts; FootnoteFirstBaseline; FootnoteMarkerPositioning; FootnoteNumberingStyle; FootnoteOption; FootnotePrefixSuffix; FootnoteRestarting; Footnote — Instance.

## FontTypes

Font type choices.

### Class

> _Read Only_
>
> Number `TYPE_1` = 1718899761
>
> Type 1.
> _Read Only_
>
> Number **TRUETYPE** = 1718899796
>
> TrueType.
> _Read Only_
>
> Number **CID** = 1718895433
>
> CID.
> _Read Only_
>
> Number **ATC** = 1718894932
>
> ATC.
> _Read Only_
>
> Number **BITMAP** = 1718895209
>
> Bitmap.
> _Read Only_
>
> Number **OCF** = 1718898499
>
> OCF.
> _Read Only_
>
> Number `OPENTYPE_CFF` = 1718898502
>
> OpenType CFF.
> _Read Only_
>
> Number `OPENTYPE_CID` = 1718898505
>
> OpenType CID.
> _Read Only_
>
> Number `OPENTYPE_TT` = 1718898516
>
> OpenType TT.
> _Read Only_
>
> Number **UNKNOWN** = 1433299822
>
> Font type cannot be determined.

## Font — Instance

> _Read Only_
>
> Boolean **allowEditableEmbedding**
>
> When true, embedding for editing is allowed for the font.
> _Read Only_
>
> Boolean **allowOutlines**
>
> When true, font outlines can be generated.
> _Read Only_
>
> Boolean **allowPDFEmbedding**
>
> When true, this font may be embedded in a PDF document.
> _Read Only_
>
> Boolean **allowPrinting**
>
> When true, printing is permitted for the font.
> _Read Only_
>
> String **fontFamily**
>
> Font family name.
> _Read Only_
>
> String **location**
>
> Full path to the Font.
> _Read Only_
>
> String **name**
>
> Font name.
> _Read Only_
>
> String **postscriptName**
>
> PostScript font name.
> _Read Only_
>
> Boolean **restrictedPrinting**
>
> When true, only restricted printing is allowed for the font.
> _Read Only_
>
> FontStatus **status**
>
> Font status.
> _Read Only_
>
> String **fontStyleName**
>
> Font style name.
> _Read Only_
>
> FontTypes **fontType**
>
> Font type.
> _Read Only_
>
> Number **numDesignAxes**
>
> Count of design axes in the variable font.
> _Read Only_
>
> String **designAxesName**
>
> Design-axis name in the variable font.
> _Read Only_
>
> Mixed **designAxesRange**
>
> Range for variable-font design axes. Can return: Array of Arrays of 2 Reals.
> _Read Only_
>
> Number **designAxesValues**
>
> Design-axis value in the variable font.
> _Read Only_
>
> Number **writingScript**
>
> Writing script.
> _Read Only_
>
> String **fullName**
>
> Full font name.
> _Read Only_
>
> String **fullNameNative**
>
> Full native font name.
> _Read Only_
>
> String **fontStyleNameNative**
>
> Native font-style name.
> _Read Only_
>
> String **platformName**
>
> Platform font name.
> _Read Only_
>
> String **version**
>
> Font version.
> _Read Only_
>
> String **registry**
>
> CID font registry.
> _Read Only_
>
> String **ordering**
>
> CID font ordering.
> _Read Only_
>
> Boolean **isValid**
>
> Reports true when the object specifier maps to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Parent object for the Font; either a Document or an Application.
> _Read Only_
>
> Number **index**
>
> Index of the Font inside its containing object.
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
> Object **properties**
>
> Lets several properties be assigned together.

### Methods

> Boolean **checkOpenTypeFeature**( Mixed **using** )
>
> Tests whether this font includes the specified OpenType feature.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | using | Feature to test; provide a String or an OpenType feature value. Accepted values: OpenTypeFeature enumerator or String. |

> **createSubsetFont**( String **charactersForSubset**, File **fontDestination** )
>
> Creates a font copy containing only the information needed to render the provided character list.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | charactersForSubset | String containing every character used by the generated font. |
| File | fontDestination | Destination file location for the new font. |

> String **toSource**()
>
> Produces source text that, when run, returns the Font.
> Font **getElements**()
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

## Fonts

A fonts collection.

### Instance

> _Read Only_
>
> Number **length**
>
> Object count in the collection.

### Methods

> Number **count**()
>
> Shows how many elements are in the Font.
> Font **item**( Mixed **index** )
>
> Gets the Font for the supplied index or name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | index | Index/name selector. Accepted values: Long Integer or String. |

> Font **itemByName**( String **name** )
>
> Gets the Font matching the specified name.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | name | Name value. |

> Font **itemByRange**( Mixed **from**, Mixed **to** )
>
> Gets the Fonts that fall within the specified range.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Mixed | from | Range start, supplied as a Font, index, or name. Can accept: Font, Long Integer or String. |
| Mixed | to | Range end, supplied as a Font, index, or name. Can accept: Font, Long Integer or String. |

> Font **firstItem**()
>
> Gets the first Font in the collection.
> Font **lastItem**()
>
> Gets the last Font in the collection.
> Font **middleItem**()
>
> Gets the middle Font in the collection.
> Font **previousItem**( Font **obj** )
>
> Gets the Font at the index immediately before the specified Font.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Font | obj | Font positioned after the Font you want. |

> Font **nextItem**( Font **obj** )
>
> Gets the collection member immediately after the supplied Font.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Font | obj | Font positioned before the Font you want. |

> Font **anyItem**()
>
> Gets any Font from the collection.
> Font **everyItem**()
>
> Gets every Font in the collection.
> String **toSource**()
>
> Produces source text that, when run, returns the Font.
> Font **[]**( Number **index** )
>
> Gets the Font at the specified index.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| Number | index | Index value. |

## FootnoteFirstBaseline

Controls the vertical gap from the top of the footnote container to the first line of footnote text.

### Class

> _Read Only_
>
> Number `ASCENT_OFFSET` = 1296135023
>
> The font's tallest character sits below the footnote container top.
> _Read Only_
>
> Number `CAP_HEIGHT` = 1296255087
>
> Uppercase letter tops meet the top edge of the footnote container.
> _Read Only_
>
> Number `LEADING_OFFSET` = 1296852079
>
> Text leading determines the distance from the baseline to the footnote container top.
> _Read Only_
>
> Number `EMBOX_HEIGHT` = 1296386159
>
> Text em-box height determines the distance from the baseline to the footnote container top.
> _Read Only_
>
> Number `X_HEIGHT` = 1299728495
>
> Lowercase letters without ascenders, such as x, have tops that touch the footnote container top.
> _Read Only_
>
> Number `FIXED_HEIGHT` = 1313228911
>
> The footnote minimum first-baseline offset sets the distance from the text baseline to the top of the footnote container.

## FootnoteMarkerPositioning

Controls where footnote reference numbers sit in relation to main-text characters.

### Class

> _Read Only_
>
> Number `NORMAL_MARKER` = 1181576816
>
> Uses the footnote-reference character style to determine marker position. For details, see footnote marker style.
> _Read Only_
>
> Number `SUPERSCRIPT_MARKER` = 1181569904
>
> Places footnote reference numbers as superscript.
> _Read Only_
>
> Number `SUBSCRIPT_MARKER` = 1181578096
>
> Places footnote reference numbers as subscript.
> _Read Only_
>
> Number `RUBY_MARKER` = 1181577840
>
> Applies ruby-style positioning to the marker.

## FootnoteNumberingStyle

Options for footnote numbering styles.

### Class

> _Read Only_
>
> Number `UPPER_ROMAN` = 1297247605
>
> Formats with uppercase Roman numerals.
> _Read Only_
>
> Number `LOWER_ROMAN` = 1297247596
>
> Formats with lowercase Roman numerals.
> _Read Only_
>
> Number `UPPER_LETTERS` = 1296855669
>
> Formats with uppercase letters.
> _Read Only_
>
> Number `LOWER_LETTERS` = 1296855660
>
> Formats with lowercase letters.
> _Read Only_
>
> Number **ARABIC** = 1298231906
>
> Formats with Arabic numerals.
> _Read Only_
>
> Number **SYMBOLS** = 1181971321
>
> Formats with symbols.
> _Read Only_
>
> Number **KANJI** = 1296788073
>
> Kanji.
> _Read Only_
>
> Number `FULL_WIDTH_ARABIC` = 1296455521
>
> Full-width Arabic.
> _Read Only_
>
> Number `SINGLE_LEADING_ZEROS` = 1297312890
>
> Single leading zeros.
> _Read Only_
>
> Number `DOUBLE_LEADING_ZEROS` = 1296329850
>
> Double leading zeros.
> _Read Only_
>
> Number **ASTERISKS** = 1298232180
>
> Asterisks.
> _Read Only_
>
> Number `ARABIC_ALIF_BA_TAH` = 1296130420
>
> Formats with Arabic Alif Ba Tah.
> _Read Only_
>
> Number `ARABIC_ABJAD` = 1296130410
>
> Formats with Arabic Abjad.
> _Read Only_
>
> Number `HEBREW_BIBLICAL` = 1296589410
>
> Formats with Hebrew Biblical.
> _Read Only_
>
> Number `HEBREW_NON_STANDARD` = 1296589422
>
> Formats with Hebrew Non Standard.

## FootnoteOption

Settings used to define the default formatting for footnotes.

### Instance

> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Identifies the FootnoteOption parent, either a Application or Document.
> _Read Only_
>
> Events **events**
>
> Event objects belonging to this collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener objects belonging to this collection.
> Mixed **footnoteNumberingStyle**
>
> Controls the footnote numbering style. Returns may be: FootnoteNumberingStyle enumerator or String.
> Number **startAt**
>
> Sets the number used when footnote numbering begins.
> Mixed **restartNumbering**
>
> Chooses where footnote numbering starts over. Returns may be: FootnoteRestarting enumerator or String.
> Mixed **showPrefixSuffix**
>
> Specifies where the footnote prefix and/or suffix appears. Returns may be: FootnotePrefixSuffix enumerator or String.
> String **prefix**
>
> Text placed before the footnote. (Limit: 0 to 100 characters)
> String **suffix**
>
> Text placed after the footnote. (Limit: 0 to 100 characters)
> ParagraphStyle **footnoteTextStyle**
>
> Paragraph style used for footnotes. Note: Footnotes ignore the paragraph style's before and after spacing. Use spacer and space between to control spacing above footnotes and between them.
> CharacterStyle **footnoteMarkerStyle**
>
> Character style used for footnote reference numbers in the main text.
> Mixed **markerPositioning**
>
> Determines how footnote reference numbers are positioned in the main text. Returns may be: FootnoteMarkerPositioning enumerator or String.
> String **separatorText**
>
> Separator characters placed after the marker number and ahead of the note body. (Range: 0 to 100 characters)
> Measurement Unit (Number or String)=any **spaceBetween**
>
> Vertical spacing placed between footnotes. Note: Footnotes ignore space before and space after from their applied paragraph style.
> Measurement Unit (Number or String)=any **spacer**
>
> Minimum vertical distance from the bottom of the text column to the first footnote. Note: The first footnote ignores the space before value in its applied paragraph style.
> FootnoteFirstBaseline **footnoteFirstBaselineOffset**
>
> Distance from the top of the footnote container to the footnote text.
> Measurement Unit (Number or String)=any **footnoteMinimumFirstBaselineOffset**
>
> Minimum distance from the text baseline to the top of the footnote container.
> Boolean **eosPlacement**
>
> When true, end-of-story footnotes sit directly below the text. When false, those footnotes are positioned at the bottom of the column.
> Boolean **noSplitting**
>
> When true, footnotes are kept from splitting across columns. When false, footnotes can continue into following columns if their text expands the footnote area upward until it reaches the main-text reference number.
> Boolean **ruleOn**
>
> When true, a rule is drawn between the text and the first footnote in the column.
> Mixed **ruleType**
>
> Stroke type for the first-footnote rule in a column. Note: Requires rule on = true. Returns may be: StrokeStyle or String.
> Measurement Unit (Number or String)=any **ruleLineWeight**
>
> Stroke weight for the column's first-footnote rule. (Range: 0 to 1000) Note: Requires rule on = true.
> Mixed **ruleColor**
>
> Swatch (color, gradient, tint, or mixed ink) assigned to the first-footnote rule stroke in the column. Note: Requires rule on = true. Returns may be: Swatch or String.
> Mixed **ruleGapColor**
>
> Swatch (color, gradient, tint, or mixed ink) assigned to the gap in the column's first-footnote rule stroke. Note: Only valid for a non-solid rule type. Returns may be: Swatch or String.
> Number **ruleTint**
>
> Tint percentage for the column's first-footnote rule. (Range: 0 to 100) Note: Requires rule on = true.
> Number **ruleGapTint**
>
> Tint percentage for the gap color in the column's first-footnote rule. (Range: 0 to 100) Note: Only valid for a non-solid rule type.
> Boolean **ruleGapOverprint**
>
> When true, the first-footnote rule's gap color overprints in the column. Note: Only valid for a non-solid rule type.
> Boolean **ruleOverprint**
>
> When true, the column's first-footnote rule overprints. Note: Requires rule on = true.
> Measurement Unit (Number or String)=any **ruleLeftIndent**
>
> Left indent amount for the column's first-footnote rule. Note: Requires rule on = true.
> Measurement Unit (Number or String)=any **ruleWidth**
>
> Length assigned to the column's first-footnote rule. Note: Requires rule on = true.
> Measurement Unit (Number or String)=any **ruleOffset**
>
> Vertical offset assigned to the column's first-footnote rule. Note: Requires rule on = true.
> Boolean **continuingRuleOn**
>
> When true, a rule is drawn above footnote text continued from an earlier column. Note: Applies when no splitting is false or undefined.
> Mixed **continuingRuleType**
>
> Stroke type for the continued-footnote rule. Note: Requires continuing rule on = true. Returns may be: StrokeStyle or String.
> Measurement Unit (Number or String)=any **continuingRuleLineWeight**
>
> Stroke weight for the continued-footnote rule. (Range: 0 to 1000) Note: Requires continuing rule on = true.
> Mixed **continuingRuleColor**
>
> Swatch (color, gradient, tint, or mixed ink) assigned to the continued-footnote rule. Note: Requires continuing rule on = true. Returns may be: Swatch or String.
> Mixed **continuingRuleGapColor**
>
> Swatch (color, gradient, tint, or mixed ink) assigned to the gap in the continued-footnote rule stroke. Note: Only valid for a non-solid continuing rule type. Returns may be: Swatch or String.
> Number **continuingRuleTint**
>
> Tint percentage for the continued-footnote rule. (Range: 0 to 100) Note: Only valid for a non-solid continuing rule type.
> Number **continuingRuleGapTint**
>
> Tint percentage for the gap color in the continued-footnote rule. (Range: 0 to 100) Note: Only valid for a non-solid continuing rule type.
> Boolean **continuingRuleOverprint**
>
> When true, the continued-footnote rule overprints. Note: Requires continuing rule on = true.
> Boolean **continuingRuleGapOverprint**
>
> When true, the continued-footnote rule's gap color overprints. Note: Only valid for a non-solid continuing rule type.
> Measurement Unit (Number or String)=any **continuingRuleLeftIndent**
>
> Left indent amount for the continued-footnote rule. Note: Requires continuing rule on = true.
> Measurement Unit (Number or String)=any **continuingRuleWidth**
>
> Length assigned to the continued-footnote rule. Note: Requires continuing rule on = true.
> Measurement Unit (Number or String)=any **continuingRuleOffset**
>
> Vertical offset assigned to the continued-footnote rule. Note: Requires continuing rule on = true.
> Boolean **enableStraddling**
>
> When true, the document uses straddling footnotes. When false, the document does not use straddling footnotes.
> Object **properties**
>
> Enables several properties to be set in one operation.

### Methods

> String **toSource**()
>
> Builds a string that returns the FootnoteOption when executed.
> FootnoteOption **getElements**()
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
| String | eventType | Event type value. |
| Mixed | handler | Event handler target. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type value. |
| Mixed | handler | Registered event handler target. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## FootnotePrefixSuffix

Choices that control where a footnote prefix or suffix is placed.

### Class

> _Read Only_
>
> Number `NO_PREFIX_SUFFIX` = 1181774702
>
> No prefix or suffix is used.
> _Read Only_
>
> Number `PREFIX_SUFFIX_REFERENCE` = 1181774706
>
> Applies the prefix and/or suffix to the main-text footnote reference number.
> _Read Only_
>
> Number `PREFIX_SUFFIX_MARKER` = 1181774708
>
> Applies the prefix and/or suffix to the marker number inside the footnote text.
> _Read Only_
>
> Number `PREFIX_SUFFIX_BOTH` = 1181774690
>
> Applies the prefix and/or suffix in both places: the main-text footnote reference number and the marker number inside the footnote text.

## FootnoteRestarting

Settings that determine how footnote numbering restarts.

### Class

> _Read Only_
>
> Number `DONT_RESTART` = 1180988019
>
> Numbering is not restarted; footnotes continue sequentially through the whole document.
> _Read Only_
>
> Number `PAGE_RESTART` = 1181774451
>
> Footnote numbering starts over on each page.
> _Read Only_
>
> Number `SPREAD_RESTART` = 1181971059
>
> Footnote numbering starts over on each spread.
> _Read Only_
>
> Number `SECTION_RESTART` = 1181053555
>
> Footnote numbering starts over within each section.

## Footnote — Instance

> _Read Only_
>
> InsertionPoint **storyOffset**
>
> Location of the footnote marker inside the parent story.
> _Read Only_
>
> PageItem **allPageItems**
>
> All page items contained in the Footnote.
> _Read Only_
>
> Graphic **allGraphics**
>
> All graphics contained in the Footnote.
> _Read Only_
>
> Number **id**
>
> Unique ID assigned to the Footnote.
> _Read Only_
>
> Boolean **isValid**
>
> True is returned when the object specifier resolves to valid objects.
> _Read Only_
>
> Mixed **parent**
>
> Identifies the Footnote parent: a XmlStory, Cell, Story, TextFrame, EndnoteTextFrame or InsertionPoint.
> _Read Only_
>
> Number **index**
>
> Position of the Footnote inside its containing object.
> _Read Only_
>
> TextColumns **textColumns**
>
> Text column objects belonging to this collection.
> _Read Only_
>
> Texts **texts**
>
> Text objects belonging to this collection.
> _Read Only_
>
> TextStyleRanges **textStyleRanges**
>
> Text style range objects belonging to this collection.
> _Read Only_
>
> Paragraphs **paragraphs**
>
> Paragraph objects belonging to this collection.
> _Read Only_
>
> Lines **lines**
>
> Line objects belonging to this collection.
> _Read Only_
>
> Words **words**
>
> Word objects belonging to this collection.
> _Read Only_
>
> Characters **characters**
>
> Character objects belonging to this collection.
> _Read Only_
>
> InsertionPoints **insertionPoints**
>
> Insertion point objects belonging to this collection.
> _Read Only_
>
> TextVariableInstances **textVariableInstances**
>
> Text variable instance objects belonging to this collection.
> _Read Only_
>
> Ovals **ovals**
>
> Ellipse objects belonging to this collection.
> _Read Only_
>
> SplineItems **splineItems**
>
> Spline item objects in this collection.
> _Read Only_
>
> PageItems **pageItems**
>
> Page item collection for processing every page item in a container, such as a document, page, or group, independent of type.
> _Read Only_
>
> Rectangles **rectangles**
>
> Rectangle objects belonging to this collection.
> _Read Only_
>
> GraphicLines **graphicLines**
>
> Graphic line objects belonging to this collection.
> _Read Only_
>
> TextFrames **textFrames**
>
> Text frame objects belonging to this collection.
> _Read Only_
>
> Polygons **polygons**
>
> Polygon objects belonging to this collection.
> _Read Only_
>
> Events **events**
>
> Event objects belonging to this collection.
> _Read Only_
>
> EventListeners **eventListeners**
>
> Event listener objects belonging to this collection.
> _Read Only_
>
> Groups **groups**
>
> Group objects belonging to this collection.
> _Read Only_
>
> EPSTexts **epstexts**
>
> EPSTexts
> _Read Only_
>
> HiddenTexts **hiddenTexts**
>
> Hidden text objects belonging to this collection.
> Mixed **contents**
>
> Text contents stored in the footnote. Returns may be: String, SpecialCharacters enumerator, or an Array containing Strings or SpecialCharacters enumerators. Also accepts: NothingEnum enumerator, or an Array containing Strings, SpecialCharacters enumerators, or NothingEnum enumerators.
> String **label**
>
> String value assignable as a property.
> String **name**
>
> Name of the Footnote; this aliases the Footnote label property.
> Object **properties**
>
> Enables several properties to be set in one operation.

### Methods

> **remove**()
>
> Deletes the Footnote.
> Text **convertToText**()
>
> Turns the footnote into story text and inserts the converted text where the footnote marker used to be.
> **insertLabel**( String **key**, String **value** )
>
> Stores a label value under the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |
| String | value | Value to store. |

> String **extractLabel**( String **key** )
>
> Reads the label value stored under the specified key.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | key | Key value. |

> String **toSource**()
>
> Builds a string that returns the Footnote when executed.
> Footnote **getElements**()
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
| String | eventType | Event type value. |
| Mixed | handler | Event handler target. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
>
> Unregisters the event listener.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| String | eventType | Registered event type value. |
| Mixed | handler | Registered event handler target. Accepts: File or JavaScript Function. |
| Boolean | captures | Obsolete parameter. (Optional) |

## See also

- [Characters](uxp-characters.md)
