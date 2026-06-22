# Indesign (part 16)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Keeps text character vertical edges perfectly vertical regardless of path shape.
  \*/
  `SKEW_PATH_EFFECT` = 1601201779,

/\*\*

- Places the left edge of each character baseline on the path without rotating characters.
  \*/
  `STAIR_STEP_PATH_EFFECT` = 1601205107,
  }

/\*\*

- Text alignment choices relative to the path.
  \*/
  declare enum TextTypeAlignments {
  /\*\*
  - Sets the em box top-edge or right-edge baseline against the path.
    \*/
    `ABOVE_RIGHT_EM_BOX_TEXT_ALIGNMENT` = 1952543333,

/\*\*

- Sets the ideographic character face box top-edge or right-edge baseline against the path.
  \*/
  `ABOVE_RIGHT_ICF_BOX_TEXT_ALIGNMENT` = 1952543337,

/\*\*

- Sets the ascender on the path (not the path's stroke).
  \*/
  `ASCENDER_TEXT_ALIGNMENT` = 1952538995,

/\*\*

- Sets the text baseline on the path (not the path's stroke).
  \*/
  `BASELINE_TEXT_ALIGNMENT` = 1952539244,

/\*\*

- Sets the em box bottom-edge or left-edge baseline against the path.
  \*/
  `BELOW_LEFT_EM_BOX_TEXT_ALIGNMENT` = 1952607333,

/\*\*

- Sets the ideographic character face box bottom-edge or left-edge baseline against the path.
  \*/
  `BELOW_LEFT_ICF_BOX_TEXT_ALIGNMENT` = 1952607337,

/\*\*

- Sets the midpoint between ascender and descender on the path (not the path's stroke).
  \*/
  `CENTER_TEXT_ALIGNMENT` = 1952539508,

/\*\*

- Sets the descender on the path (not the path's stroke).
  \*/
  `DESCENDER_TEXT_ALIGNMENT` = 1952539763,
  }

/\*\*

- Choices for aligning text to the path's stroke.
  \*/
  declare enum PathTypeAlignments {
  /\*\*
  - Aligns text to the bottom of the path stroke.
    \*/
    `BOTTOM_PATH_ALIGNMENT` = 1885430367,

/\*\*

- Aligns text to the center of the path stroke.
  \*/
  `CENTER_PATH_ALIGNMENT` = 1885430623,

/\*\*

- Aligns text to the top of the path stroke.
  \*/
  `TOP_PATH_ALIGNMENT` = 1885434975,
  }

/\*\*

- Choices for flipping text or leaving it unflipped relative to the path.
  \*/
  declare enum FlipValues {
  /\*\*
  - Flips text across the path.
    \*/
    FLIPPED = 2036755568,

/\*\*

- Applies no flip effect.
  \*/
  `NOT_FLIPPED` = 1852206192,

/\*\*

- Flip effect is undefined.
  \*/
  `UNDEFINED_FLIP_VALUE` = 1969646704,
  }

/\*\*

- Choices for XML element location.
  \*/
  declare enum XMLElementLocation {
  /\*\*
  - Positions the element at the end of the containing object.
    \*/
    `ELEMENT_END` = 1483042404,

/\*\*

- Positions the element at the start of the containing object.
  \*/
  `ELEMENT_START` = 1482844014,
  }

/\*\*

- Choices for position relative to the reference XML element or within the XML element.
  \*/
  declare enum XMLElementPosition {
  /\*\*
  - Specifies placement after the XML element.
    \*/
    `AFTER_ELEMENT` = 1482778228,

/\*\*

- Specifies placement before the XML element.
  \*/
  `BEFORE_ELEMENT` = 1482843494,

/\*\*

- Specifies placement at the end of the XML element.
  \*/
  `ELEMENT_END` = 1483042404,

/\*\*

- Specifies placement at the start of the XML element.
  \*/
  `ELEMENT_START` = 1482844014,
  }

/\*\*

- Choices for bringing imported XML content into the document.
  \*/
  declare enum XMLImportStyles {
  /\*\*
  - Adds the imported content to the end.
    \*/
    `APPEND_IMPORT` = 1481466217,

/\*\*

- Combines the imported content with existing content.
  \*/
  `MERGE_IMPORT` = 1481469289,
  }

/\*\*

- Encoding choices for XML export content.
  \*/
  declare enum XMLFileEncoding {
  /\*\*
  - Shift-JIS character encoding.
    \*/
    `SHIFT_JIS` = 1249077875,

/\*\*

- UTF-16 character encoding.
  \*/
  UTF16 = 1937125686,

/\*\*

- UTF-8 character encoding.
  \*/
  UTF8 = 1937134904,
  }

/\*\*

- File format choices for converted images.
  \*/
  declare enum ImageConversion {
  /\*\*
  - Selects the best format according to the image.
    \*/
    AUTOMATIC = 1768059764,

/\*\*

- Applies GIF format to every image.
  \*/
  GIF = 1734960742,

/\*\*

- Applies JPEG format to every image.
  \*/
  JPEG = 1785751398,

/\*\*

- Applies PNG format to every image.
  \*/
  PNG = 1397059687,
  }

/\*\*

- Choices for the GIF conversion color palette.
  \*/
  declare enum GIFOptionsPalette {
  /\*\*
  - Applies the adaptive (no dither) palette.
    \*/
    `ADAPTIVE_PALETTE` = 1886151024,

/\*\*

- Applies the Macintosh palette.
  \*/
  `MACINTOSH_PALETTE` = 1886154096,

/\*\*

- Applies the Web palette.
  \*/
  `WEB_PALETTE` = 1886156656,

/\*\*

- Applies the Windows palette.
  \*/
  `WINDOWS_PALETTE` = 1886156644,
  }

/\*\*

- Choices for converted JPEG image quality.
  \*/
  declare enum JPEGOptionsQuality {
  /\*\*
  - High-quality setting.
    \*/
    HIGH = 1701726313,

/\*\*

- Low-quality setting.
  \*/
  LOW = 1701727351,

/\*\*

- Maximum-quality setting.
  \*/
  MAXIMUM = 1701727608,

/\*\*

- Medium-quality setting.
  \*/
  MEDIUM = 1701727588,
  }

/\*\*

- Format selections for JPEG images after conversion.
  \*/
  declare enum JPEGOptionsFormat {
  /\*\*
  - Downloads the image with baseline encoding in a single pass.
    \*/
    `BASELINE_ENCODING` = 1785751394,

/\*\*

- Downloads the image through progressive encoding, starting with a low-resolution pass and adding detail with later passes.
  \*/
  `PROGRESSIVE_ENCODING` = 1785751408,
  }

/\*\*

- Export behavior for untagged tables inside tagged stories.
  \*/
  declare enum XMLExportUntaggedTablesFormat {
  /\*\*
  - Outputs untagged tables as CALS XML.
    \*/
    CALS = 1484022643,

/\*\*

- Leaves untagged tables out of the export.
  \*/
  NONE = 1852796517,
  }

/\*\*

- XML transformation file source.
  \*/
  declare enum XMLTransformFile {
  /\*\*
  - Takes the stylesheet from the XML.
    \*/
    `STYLESHEET_IN_XML` = 1483961208,
    }

/\*\*

- Choices that set where an anchored object sits in relation to its anchor.
  \*/
  declare enum AnchorPosition {
  /\*\*
  - Puts the anchored object above the text line containing that object.
    \*/
    `ABOVE_LINE` = 1095716961,

/\*\*

- Uses a custom anchored placement.
  \*/
  ANCHORED = 1097814113,

/\*\*

- Positions the anchored object on the baseline of the line that holds it.
  \*/
  `INLINE_POSITION` = 1095716969,
  }

/\*\*

- Horizontal placement choices for anchored objects; inline anchored positions cannot use them.
  \*/
  declare enum HorizontalAlignment {
  /\*\*
  - Centers the anchored object on the reference.
    \*/
    `CENTER_ALIGN` = 1667591796,

/\*\*

- Positions the anchored object to the reference's left.
  \*/
  `LEFT_ALIGN` = 1818584692,

/\*\*

- Positions the anchored object to the reference's right.
  \*/
  `RIGHT_ALIGN` = 1919379572,

/\*\*

- Places the anchored object according to text alignment.
  \*/
  `TEXT_ALIGN` = 1954046316,
  }

/\*\*

- Vertical placement choices for anchored objects.
  \*/
  declare enum VerticalAlignment {
  /\*\*
  - Sets the anchored object at the lower end of the vertical reference point.
    \*/
    `BOTTOM_ALIGN` = 1651471469,

/\*\*

- Centers the anchored object vertically on the vertical reference point.
  \*/
  `CENTER_ALIGN` = 1667591796,

/\*\*

- Sets the anchored object at the upper end of the vertical reference point.
  \*/
  `TOP_ALIGN` = 1953460256,
  }

/\*\*

- Horizontal reference point choices for anchored objects.
  \*/
  declare enum AnchoredRelativeTo {
  /\*\*
  - Uses the anchor as the anchored object's alignment target.
    \*/
    `ANCHOR_LOCATION` = 1095786862,

/\*\*

- Uses the text or table column edge as the anchored object's alignment target.
  \*/
  `COLUMN_EDGE` = 1095787375,

/\*\*

- Uses the page edge as the anchored object's alignment target.
  \*/
  `PAGE_EDGE` = 1095790695,

/\*\*

- Uses the page margin as the anchored object's alignment target.
  \*/
  `PAGE_MARGINS` = 1095789927,

/\*\*

- Uses the text frame edge as the anchored object's alignment target.
  \*/
  `TEXT_FRAME` = 1954051174,
  }

/\*\*

- Line-ending balancing styles for text.
  \*/
  declare enum BalanceLinesStyle {
  /\*\*
  - Distributes line lengths evenly.
    \*/
    `FULLY_BALANCED` = 1114391921,

/\*\*

- Leaves line balancing disabled.
  \*/
  `NO_BALANCING` = 1114394470,

/\*\*

- Favors a longer final line.
  \*/
  `PYRAMID_SHAPE` = 1114394745,

/\*\*

- Favors a shorter final line.
  \*/
  `VEE_SHAPE` = 1114396261,
  }

/\*\*

- Vertical reference point choices for anchored objects.
  \*/
  declare enum VerticallyRelativeTo {
  /\*\*
  - Uses the capital-letter top as the anchored object's alignment target.
    \*/
    CAPHEIGHT = 1096185955,

/\*\*

- Uses the text or table column edge as the anchored object's alignment target.
  \*/
  `COLUMN_EDGE` = 1095787375,

/\*\*

- Uses the embox bottom as the anchored object's alignment target.
  \*/
  `EMBOX_BOTTOM` = 1096183106,

/\*\*

- Uses the embox middle as the anchored object's alignment target.
  \*/
  `EMBOX_MIDDLE` = 1096183117,

/\*\*

- Uses the embox top as the anchored object's alignment target.
  \*/
  `EMBOX_TOP` = 1096181101,

/\*\*

- Uses the tallest text glyph tops as the anchored object's alignment target.
  \*/
  `LINE_ASCENT` = 1096180083,

/\*\*

- Uses the line-of-text baseline as the anchored object's alignment target.
  \*/
  `LINE_BASELINE` = 1096180321,

/\*\*

- Uses the top of lowercase letters without ascenders, such as x, as the alignment target.
  \*/
  `LINE_XHEIGHT` = 1096185960,

/\*\*

- Uses the page edge as the anchored object's alignment target.
  \*/
  `PAGE_EDGE` = 1095790695,

/\*\*

- Uses the page margin as the anchored object's alignment target.
  \*/
  `PAGE_MARGINS` = 1095789927,

/\*\*

- Uses the text frame edge as the anchored object's alignment target.
  \*/
  `TEXT_FRAME` = 1954051174,

/\*\*

- Uses the top of text leading as the anchored object's alignment target.
  \*/
  `TOP_OF_LEADING` = 1096180332,
  }

/\*\*

- Positional form choices for OpenType text.
  \*/
  declare enum PositionalForms {
  /\*\*
  - Computes the form automatically.
    \*/
    CALCULATE = 1634756205,

/\*\*

- Final-form selection.
  \*/
  FINAL = 1718185569,

/\*\*

- Initial-form selection.
  \*/
  INITIAL = 1768843636,

/\*\*

- Isolated-form selection.
  \*/
  ISOLATED = 1769172844,

/\*\*

- Medial-form selection.
  \*/
  MEDIAL = 1835361385,

/\*\*

- No positional form.
  \*/
  NONE = 1852796517,
  }

/\*\*

- Choices for stroke alignment.
  \*/
  declare enum TextStrokeAlign {
  /\*\*
  - Centers the stroke across the path.
    \*/
    `CENTER_ALIGNMENT` = 1936998723,

/\*\*

- Places the stroke outside the path, as with a picture frame.
  \*/
  `OUTSIDE_ALIGNMENT` = 1936998735,
  }

/\*\*

- Join styles for ends.
  \*/
  declare enum OutlineJoin {
  /\*\*
  - Beveled end-join style.
    \*/
    `BEVEL_END_JOIN` = 1651142510,

/\*\*

- Mitered end-join style.
  \*/
  `MITER_END_JOIN` = 1835691886,

/\*\*

- Rounded end-join style.
  \*/
  `ROUND_END_JOIN` = 1919577966,
  }

/\*\*

- Origins used when computing the baseline frame grid offset.
  \*/
  declare enum BaselineFrameGridRelativeOption {
  /\*\*
  - Measures the grid offset from the text frame top.
    \*/
    `TOP_OF_FRAME` = 1163161446,

/\*\*

- Measures the grid offset from the text frame's top inset.
  \*/
  `TOP_OF_INSET` = 1163161449,

/\*\*

- Measures the grid offset from the page's top margin.
  \*/
  `TOP_OF_MARGIN` = 1163161453,

/\*\*

- Measures the grid offset from the page top.
  \*/
  `TOP_OF_PAGE` = 1163161458,
  }

/\*\*

- Settings for the vertical gap between the footnote container top and the first footnote text line.
  \*/
  declare enum FootnoteFirstBaseline {
  /\*\*
  - Positions the font's tallest character below the footnote container top.
    \*/
    `ASCENT_OFFSET` = 1296135023,

/\*\*

- Makes uppercase letter tops meet the footnote container top.
  \*/
  `CAP_HEIGHT` = 1296255087,

/\*\*

- Uses the text em box height to set the baseline-to-container-top distance.
  \*/
  `EMBOX_HEIGHT` = 1296386159,

/\*\*

- Uses the footnote minimum first-baseline offset value for the baseline-to-container-top distance.
  \*/
  `FIXED_HEIGHT` = 1313228911,

/\*\*

- Uses the text leading value for the baseline-to-container-top distance.
  \*/
  `LEADING_OFFSET` = 1296852079,

/\*\*

- Makes tops of lowercase letters without ascenders, such as x, meet the footnote container top.
  \*/
  `X_HEIGHT` = 1299728495,
  }

/\*\*

- Footnote numbering restart choices.
  \*/
  declare enum FootnoteRestarting {
  /\*\*
  - Keeps numbering continuous through the whole document without restarting.
    \*/
    `DONT_RESTART` = 1180988019,

/\*\*

- Begins footnote numbering again on every page.
  \*/
  `PAGE_RESTART` = 1181774451,

/\*\*

- Begins footnote numbering again in every section.
  \*/
  `SECTION_RESTART` = 1181053555,

/\*\*

- Begins footnote numbering again on every spread.
  \*/
  `SPREAD_RESTART` = 1181971059,
  }

/\*\*

- Placement choices for footnote prefixes or suffixes.
  \*/
  declare enum FootnotePrefixSuffix {
  /\*\*
  - Omits both prefix and suffix.
    \*/
    `NO_PREFIX_SUFFIX` = 1181774702,

/\*\*

- Applies the prefix and/or suffix to both the main-text reference number and the footnote-text marker number.
  \*/
  `PREFIX_SUFFIX_BOTH` = 1181774690,

/\*\*

- Applies the prefix and/or suffix to the marker number within footnote text.
  \*/
  `PREFIX_SUFFIX_MARKER` = 1181774708,

/\*\*

- Applies the prefix and/or suffix to the reference number in main text.
  \*/
  `PREFIX_SUFFIX_REFERENCE` = 1181774706,
  }

/\*\*

- Numbering styles available for footnotes.
  \*/
  declare enum FootnoteNumberingStyle {
  /\*\*
  - Arabic numeral style.
    \*/
    ARABIC = 1298231906,

/\*\*

- Arabic Abjad style.
  \*/
  `ARABIC_ABJAD` = 1296130410,

/\*\*

- Arabic Alif Ba Tah style.
  \*/
  `ARABIC_ALIF_BA_TAH` = 1296130420,

/\*\*

- Asterisk style.
  \*/
  ASTERISKS = 1298232180,

/\*\*

- Double-leading-zero style.
  \*/
  `DOUBLE_LEADING_ZEROS` = 1296329850,

/\*\*

- Full-width Arabic style.
  \*/
  `FULL_WIDTH_ARABIC` = 1296455521,

/\*\*

- Hebrew Biblical style.
  \*/
  `HEBREW_BIBLICAL` = 1296589410,

/\*\*

- Hebrew Non Standard style.
  \*/
  `HEBREW_NON_STANDARD` = 1296589422,

/\*\*

- Kanji style.
  \*/
  KANJI = 1296788073,

/\*\*

- Lowercase-letter style.
  \*/
  `LOWER_LETTERS` = 1296855660,

/\*\*

- Lowercase Roman-numeral style.
  \*/
  `LOWER_ROMAN` = 1297247596,

/\*\*

- Single-leading-zero style.
  \*/
  `SINGLE_LEADING_ZEROS` = 1297312890,

/\*\*

- Symbol-based style.
  \*/
  SYMBOLS = 1181971321,

/\*\*

- Uppercase-letter style.
  \*/
  `UPPER_LETTERS` = 1296855669,

/\*\*

- Uppercase Roman-numeral style.
  \*/
  `UPPER_ROMAN` = 1297247605,
  }

/\*\*

- Choices for placing footnote reference numbers relative to main-text characters.
  \*/
  declare enum FootnoteMarkerPositioning {
  /\*\*
  - Uses the character-style position assigned to footnote reference numbers; for details, see footnote marker style.
    \*/
    `NORMAL_MARKER` = 1181576816,

/\*\*

- Applies ruby-style positioning to the marker.
  \*/
  `RUBY_MARKER` = 1181577840,

/\*\*

- Formats footnote reference numbers as subscript.
  \*/
  `SUBSCRIPT_MARKER` = 1181578096,

/\*\*

- Formats footnote reference numbers as superscript.
  \*/
  `SUPERSCRIPT_MARKER` = 1181569904,
  }

/\*\*

- Choices for clearing overrides.
  \*/
  declare enum OverrideType {
  /\*\*
  - Removes every override type.
    \*/
    ALL = 1634495520,

/\*\*

- Removes character-style overrides only.
  \*/
  `CHARACTER_ONLY` = 1667789423,

/\*\*

- Removes paragraph-style overrides only.
  \*/
  `PARAGRAPH_ONLY` = 1885434479,
  }

/\*\*

- Strategy used when imported styles share names with styles already present.
  \*/
  declare enum GlobalClashResolutionStrategy {
  /\*\*
  - Skips imported styles whose names collide with existing items.
    \*/
    `DO_NOT_LOAD_THE_STYLE` = 1147495276,

/\*\*

- Replaces existing styles when their names collide with imported items.
  \*/
  `LOAD_ALL_WITH_OVERWRITE` = 1279350607,

/\*\*

- Keeps existing items by renaming imported styles that have colliding names.
  \*/
  `LOAD_ALL_WITH_RENAME` = 1279350610,
  }

/\*\*

- Choices for text orientation.
  \*/
  declare enum StoryHorizontalOrVertical {
  /\*\*
  - Sets text in a horizontal orientation.
    \*/
    HORIZONTAL = 1752134266,

/\*\*

- Marks the text direction as unknown.
  \*/
  UNKNOWN = 1433299822,

/\*\*

- Sets text in a vertical orientation.
  \*/
  VERTICAL = 1986359924,
  }

/\*\*

- Automatic page insertion choices triggered by overset text.
  \*/
  declare enum AddPageOptions {
  /\*\*
  - Adds pages at the document end.
    \*/
    `END_OF_DOCUMENT` = 1634037604,

/\*\*

- Adds pages at the section end.
  \*/
  `END_OF_SECTION` = 1634037624,

/\*\*

- Adds pages at the story end.
  \*/
  `END_OF_STORY` = 1634037619,
  }

/\*\*

- Kinds of text variables.
  \*/
  declare enum VariableTypes {
  /\*\*
  - Variable for a chapter number.
    \*/
    `CHAPTER_NUMBER_TYPE` = 1668183152,

/\*\*

- Variable for a creation date.
  \*/
  `CREATION_DATE_TYPE` = 1414947684,

/\*\*

- Variable for custom text.
  \*/
  `CUSTOM_TEXT_TYPE` = 1414947700,

/\*\*

- Variable for a file name.
  \*/
  `FILE_NAME_TYPE` = 1414948462,

/\*\*

- Variable for the last page number.
  \*/
  `LAST_PAGE_NUMBER_TYPE` = 1414952048,

/\*\*

- Variable for a Live Caption.
  \*/
  `LIVE_CAPTION_TYPE` = 1414947693,

/\*\*

- Running header variable based on a character style.
  \*/
  `MATCH_CHARACTER_STYLE_TYPE` = 1414947667,

/\*\*

- Running header variable based on a paragraph style.
  \*/
  `MATCH_PARAGRAPH_STYLE_TYPE` = 1414950995,

/\*\*

- Variable for a modification date.
  \*/
  `MODIFICATION_DATE_TYPE` = 1414950244,

/\*\*

- Variable for an output date.
  \*/
  `OUTPUT_DATE_TYPE` = 1414950756,

/\*\*

- Private variable for a cross reference chapter number.
  \*/
  `XREF_CHAPTER_NUMBER_TYPE` = 1414947694,

/\*\*

- Private variable for a cross reference page number.
  \*/
  `XREF_PAGE_NUMBER_TYPE` = 1414953074,
  }

/\*\*

- Scope choices for page number variables.
  \*/
  declare enum VariableScopes {
  /\*\*
  - Limits the scope to the current document.
    \*/
    `DOCUMENT_SCOPE` = 1129538671,

/\*\*

- Limits the scope to the current section.
  \*/
  `SECTION_SCOPE` = 1129542501,
  }

/\*\*

- Numbering styles for number variables.
  \*/
  declare enum VariableNumberingStyles {
  /\*\*
  - Arabic numeral style.
    \*/
    ARABIC = 1298231906,

/\*\*

- Current style.
  \*/
  CURRENT = 1298363762,

/\*\*

- Double-leading-zero style.
  \*/
  `DOUBLE_LEADING_ZEROS` = 1296329850,

/\*\*

- Full-width Arabic numeral style.
  \*/
  `FULL_WIDTH_ARABIC` = 1296455521,

/\*\*

- Kanji style.
  \*/
  KANJI = 1296788073,

/\*\*

- Lowercase-letter style.
  \*/
  `LOWER_LETTERS` = 1296855660,

/\*\*

- Lowercase Roman-numeral style.
  \*/
  `LOWER_ROMAN` = 1297247596,

/\*\*

- Single-leading-zero style.
  \*/
  `SINGLE_LEADING_ZEROS` = 1297312890,

/\*\*

- Uppercase-letter style.
  \*/
  `UPPER_LETTERS` = 1296855669,

/\*\*

- Uppercase Roman-numeral style.
  \*/
  `UPPER_ROMAN` = 1297247605,
  }

/\*\*

- Search strategy choices.
  \*/
  declare enum SearchStrategies {
  /\*\*
  - Starts a forward search from the current page beginning.
    \*/
    `FIRST_ON_PAGE` = 1396794992,

/\*\*

- Starts a backward search from the current page end.
  \*/
  `LAST_ON_PAGE` = 1396796528,
  }

/\*\*

- Case-conversion choices.
  \*/
  declare enum ChangeCaseOptions {
  /\*\*
  - Changes every letter to lowercase.
    \*/
    LOWERCASE = 1667460195,

/\*\*

- Performs no conversion.
  \*/
  NONE = 1852796517,

/\*\*

- Capitalizes the first word's first letter in each sentence.
  \*/
  SENTENCECASE = 1667461987,

/\*\*

- Capitalizes the first letter of every word.
  \*/
  TITLECASE = 1667462243,

/\*\*

- Changes every letter to uppercase.
  \*/
  UPPERCASE = 1667462499,
  }

/\*\*

- Text auto-sizing type choices.
  \*/
  declare enum AutoSizingTypeEnum {
  /\*\*
  - Resizes the text frame in both dimensions, height and width.
    \*/
    `HEIGHT_AND_WIDTH` = 1752069993,

/\*\*

- Resizes the text frame proportionally in height and width.
  \*/
  `HEIGHT_AND_WIDTH_PROPORTIONALLY` = 1752070000,

/\*\*

- Resizes the text frame by height only.
  \*/
  `HEIGHT_ONLY` = 1751476583,

/\*\*

- Disables text frame auto-sizing.
  \*/
  OFF = 1330005536,

/\*\*

- Resizes the text frame by width only.
  \*/
  `WIDTH_ONLY` = 2003395700,
  }

/\*\*

- Reference point choices for text auto-sizing.
  \*/
  declare enum AutoSizingReferenceEnum {
  /\*\*
  - Center point on the bottom edge of the bounding box.
    \*/
    `BOTTOM_CENTER_POINT` = 1651467109,

/\*\*

- Lower-left point of the bounding box.
  \*/
  `BOTTOM_LEFT_POINT` = 1651469413,

/\*\*

- Lower-right point of the bounding box.
  \*/
  `BOTTOM_RIGHT_POINT` = 1651470953,

/\*\*

- Center point of the bounding box.
  \*/
  `CENTER_POINT` = 1668183154,

/\*\*

- Center point along the bounding box's left edge.
  \*/
  `LEFT_CENTER_POINT` = 1818583909,

/\*\*

- Center point along the bounding box's right edge.
  \*/
  `RIGHT_CENTER_POINT` = 1919509349,

/\*\*

- Center point along the bounding box's top edge.
  \*/
  `TOP_CENTER_POINT` = 1953456997,

/\*\*

- Upper-left point of the bounding box.
  \*/
  `TOP_LEFT_POINT` = 1953459301,

/\*\*

- Upper-right point of the bounding box.
  \*/
  `TOP_RIGHT_POINT` = 1953460841,
  }

/\*\*

- Paragraph span type choices.
  \*/
  declare enum SpanColumnTypeOptions {
  /\*\*
  - Treats the paragraph as one column.
    \*/
    `SINGLE_COLUMN` = 1163092844,

/\*\*

- Lets the paragraph extend across columns.
  \*/
  `SPAN_COLUMNS` = 1936745326,

/\*\*

- Lets the paragraph divide columns.
  \*/
  `SPLIT_COLUMNS` = 1937007470,
  }

/\*\*

- Span column count choices.
  \*/
  declare enum SpanColumnCountOptions {
  /\*\*
  - Lets the paragraph span every column.
    \*/
    ALL = 1634495520,
    }

/\*\*

- Basis choices for paragraph shading width.
  \*/
  declare enum ParagraphShadingWidthEnum {
  /\*\*
  - Bases paragraph shading on the column width.
    \*/
    `COLUMN_WIDTH` = 1265399652,

/\*\*

- Bases paragraph shading on the paragraph's line-of-text width.
  \*/
  `TEXT_WIDTH` = 1886681207,
  }

/\*\*

- Choices for line justification.
  \*/
  declare enum LineAlignment {
  /\*\*
  - Centers the text.
    \*/
    `CENTER_LINE_ALIGN` = 1818321774,

/\*\*

- For horizontal text, justifies both left and right edges and centers the final line; for vertical text, justifies top and bottom and centers the final line.
  \*/
  `CENTER_LINE_JUSTIFY` = 1818455658,

/\*\*

- For horizontal text, justifies both left and right edges; for vertical text, justifies top and bottom so every line matches in length.
  \*/
  `FULL_LINE_JUSTIFY` = 1818651754,

/\*\*

- Aligns horizontal text to the left, or vertical text to the top.
  \*/
  `LEFT_OR_TOP_LINE_ALIGN` = 1818324084,

/\*\*

- For horizontal text, justifies left and right edges while left-aligning the final line; for vertical text, justifies top and bottom while top-aligning the final line.
  \*/
  `LEFT_OR_TOP_LINE_JUSTIFY` = 1819047018,

/\*\*

- Aligns horizontal text to the right, or vertical text to the bottom.
  \*/
  `RIGHT_OR_BOTTOM_LINE_ALIGN` = 1818325602,

/\*\*

- For horizontal text, justifies left and right edges while right-aligning the final line; for vertical text, justifies top and bottom while bottom-aligning the final line.
  \*/
  `RIGHT_OR_BOTTOM_LINE_JUSTIFY` = 1819435626,
  }

/\*\*

- View choices for grids.
  \*/
  declare enum GridViewSettings {
  /\*\*
  - Align view mode.
    \*/
    `ALIGN_VIEW_ENUM` = 1783062902,

/\*\*

- Combined grid and ZN view mode.
  \*/
  `GRID_AND_ZN_VIEW_ENUM` = 1783064442,

/\*\*

- Grid view mode.
  \*/
  `GRID_VIEW_ENUM` = 1783064438,

/\*\*

- ZN view mode.
  \*/
  `ZN_VIEW_ENUM` = 1783069302,
  }

/\*\*

- Placement choices for the character count display.
  \*/
  declare enum CharacterCountLocation {
  /\*\*
  - Shows the character count at the frame bottom.
    \*/
    `BOTTOM_ALIGN` = 1651471469,

/\*\*

- Shows the character count on the frame's left side.
  \*/
  `LEFT_ALIGN` = 1818584692,

/\*\*

- Suppresses the character count display.
  \*/
  NONE = 1852796517,

/\*\*

- Shows the character count on the frame's right side.
  \*/
  `RIGHT_ALIGN` = 1919379572,

/\*\*

- Shows the character count at the frame top.
  \*/
  `TOP_ALIGN` = 1953460256,
  }
