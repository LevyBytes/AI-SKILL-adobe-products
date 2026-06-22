# Indesign (part 18)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Selects the tag file style.
  \*/
  `TAG_FILE_DEFINITION` = 1413903460,
  }

/\*\*

- Character-set choices for text-file export.
  \*/
  declare enum TextExportCharacterSet {
  /\*\*
  - Uses the platform's default character set.
    \*/
    `DEFAULT_PLATFORM` = 1415865972,

/\*\*

- Unicode UTF16 character-set entry.
  \*/
  UTF16 = 1937125686,

/\*\*

- Unicode UTF8 character-set entry.
  \*/
  UTF8 = 1937134904,
  }

/\*\*

- Choices controlling table conversion.
  \*/
  declare enum ConvertTablesOptions {
  /\*\*
  - Changes tables into unformatted, tab-delimited text.
    \*/
    `UNFORMATTED_TABBED_TEXT` = 1398101076,

/\*\*

- Changes tables into basic tables without formatting.
  \*/
  `UNFORMATTED_TABLE` = 1396921684,
  }

/\*\*

- Formatting choices applied to imported spreadsheets.
  \*/
  declare enum TableFormattingOptions {
  /\*\*
  - Retains formatting from the source spreadsheet.
    \*/
    `EXCEL_FORMATTED_TABLE` = 2020361812,

/\*\*

- Applies spreadsheet formatting only during initial import, not during later updates.
  \*/
  `EXCEL_FORMAT_ONLY_ONCE` = 2017873748,

/\*\*

- Changes the spreadsheet into unformatted, tab-delimited text.
  \*/
  `EXCEL_UNFORMATTED_TABBED_TEXT` = 2018858068,

/\*\*

- Changes the spreadsheet into an unformatted table.
  \*/
  `EXCEL_UNFORMATTED_TABLE` = 2020365652,
  }

/\*\*

- Alignment choices.
  \*/
  declare enum AlignmentStyleOptions {
  /\*\*
  - Aligns cells to the center.
    \*/
    `CENTER_ALIGN` = 1667591796,

/\*\*

- Aligns cells to the left.
  \*/
  `LEFT_ALIGN` = 1818584692,

/\*\*

- Aligns cells to the right.
  \*/
  `RIGHT_ALIGN` = 1919379572,

/\*\*

- Keeps alignment from the spreadsheet.
  \*/
  SPREADSHEET = 1936749171,
  }

/\*\*

- Choices for resolving clashes caused by matching style names.
  \*/
  declare enum ResolveStyleClash {
  /\*\*
  - Renames the incoming style automatically.
    \*/
    `RESOLVE_CLASH_AUTO_RENAME` = 2001879873,

/\*\*

- Selects the existing style.
  \*/
  `RESOLVE_CLASH_USE_EXISTING` = 2001879877,

/\*\*

- Selects the new style.
  \*/
  `RESOLVE_CLASH_USE_NEW` = 2001879886,
  }

/\*\*

- Container-type values.
  \*/
  declare enum ContainerType {
  /\*\*
  - Container stores alternative values where only one is usable.
    \*/
    ALT = 1298424180,

/\*\*

- Container stores unordered items.
  \*/
  BAG = 1298424423,

/\*\*

- Container stores ordered or sequential items.
  \*/
  SEQ = 1298428785,
  }

/\*\*

- Copyright-status values for a document.
  \*/
  declare enum CopyrightStatus {
  /\*\*
  - Marks the document as public domain.
    \*/
    NO = 1852776480,

/\*\*

- Indicates an unknown copyright status.
  \*/
  UNKNOWN = 1433299822,

/\*\*

- Marks the document as copyrighted.
  \*/
  YES = 2036691744,
  }

/\*\*

- Capitalization choices for index entries.
  \*/
  declare enum IndexCapitalizationOptions {
  /\*\*
  - Capitalizes every index entry. Note: Only topics created before this capitalization statement in the script are affected.
    \*/
    `ALL_ENTRIES` = 1097624645,

/\*\*

- Capitalizes every level 1 entry. Note: Only topics created before this capitalization statement in the script are affected.
  \*/
  `ALL_LEVEL_1_ENTRIES` = 1095517556,

/\*\*

- Capitalizes the specified topic together with its nested topics. Valid only for the topic capitalize method parameter; it cannot be supplied to the index capitalize method. Note: Run this after creating the selected topic and its nested subtopics.
  \*/
  `INCLUDE_SUBENTRIES` = 1767072325,

/\*\*

- Capitalizes the specified topic while leaving its nested topics unchanged. Valid only for the topic capitalize method parameter; it cannot be supplied to the index capitalize method. Note: Run this after creating the specified topic and its nested topics.
  \*/
  `SELECTED_ENTRY` = 1398042725,
  }

/\*\*

- Formatting choices for level 2 and lower index topics.
  \*/
  declare enum IndexFormat {
  /\*\*
  - Puts nested topics on the following line, indented from the parent topic.
    \*/
    `NESTED_FORMAT` = 1316243814,

/\*\*

- Keeps nested topics on the parent topic's line, divided by the specified separator.
  \*/
  `RUNIN_FORMAT` = 1382631782,
  }

/\*\*

- Instructional-text choices for cross references.
  \*/
  declare enum CrossReferenceType {
  /\*\*
  - Places the specified string before the referenced topic.
    \*/
    `CUSTOM_CROSS_REFERENCE` = 1131639875,

/\*\*

- Places the specified following topic separator plus specified string after the referenced topic. When no following topic separator is specified, a space is inserted.
  \*/
  `CUSTOM_CROSS_REFERENCE_AFTER` = 1131639905,

/\*\*

- Places the specified string plus specified before cross reference separator before the referenced topic. When no before cross reference separator is specified, a space is inserted.
  \*/
  `CUSTOM_CROSS_REFERENCE_BEFORE` = 1131639906,

/\*\*

- Places 'See' before the referenced topic.
  \*/
  SEE = 1701729125,

/\*\*

- Places 'See also' before the referenced topic.
  \*/
  `SEE_ALSO` = 1399144812,

/\*\*

- Places 'See also herein' before the referenced topic.
  \*/
  `SEE_ALSO_HEREIN` = 1398884466,

/\*\*

- Places 'See herein' before the referenced topic.
  \*/
  `SEE_HEREIN` = 1397256814,

/\*\*

- Uses 'See also' before the referenced topic when the topic has an associated page reference; otherwise uses 'See'.
  \*/
  `SEE_OR_ALSO_BRACKET` = 1399800172,
  }

/\*\*

- Choices for index page references.
  \*/
  declare enum PageReferenceType {
  /\*\*
  - Refers to the page where the index entry appears.
    \*/
    `CURRENT_PAGE` = 1668444263,

/\*\*

- Covers pages beginning with the page containing the inedex entry and ending at the nth page after it, where n is the included page count.
  \*/
  `FOR_NEXT_N_PAGES` = 1718513767,

/\*\*

- Covers pages beginning with the page containing the index entry and ending at the page containing the nth full paragraph after the entry's paragraph, where n is the paragraph count.
  \*/
  `FOR_NEXT_N_PARAGRAPHS` = 1718513778,

/\*\*

- Suppresses page numbers for the index topic.
  \*/
  `SUPPRESS_PAGE_NUMBERS` = 1852863079,

/\*\*

- Refers to the document's final page.
  \*/
  `TO_END_OF_DOCUMENT` = 1701799011,

/\*\*

- Refers to the final page in the numbered section that contains the index entry.
  \*/
  `TO_END_OF_SECTION` = 1701802851,

/\*\*

- Refers to the final page in the story that contains the index entry.
  \*/
  `TO_END_OF_STORY` = 1701802868,

/\*\*

- Covers pages from the index entry's page through the next paragraph style change.
  \*/
  `TO_NEXT_STYLE_CHANGE` = 1953395555,

/\*\*

- Covers pages from the index entry's page through the page containing the next occurrence of the specified paragraph style. When no paragraph style is specified, the index entry paragraph's style is used.
  \*/
  `TO_NEXT_USE_OF_STYLE` = 1953396083,
  }

/\*\*

- Header-type values for indexing sort options
  \*/
  declare enum HeaderTypes {
  /\*\*
  - Basic Latin
    \*/
    `BASIC_LATIN` = 1213481548,

/\*\*

- Belarusian
  \*/
  BELARUSIAN = 1213481573,

/\*\*

- Bulgarian
  \*/
  BULGARIAN = 1213481589,

/\*\*

- Chinese Pinyin
  \*/
  `CHINESE_PINYIN` = 1213481808,

/\*\*

- Chinese Stroke Count
  \*/
  `CHINESE_STROKE_COUNT` = 1213481811,

/\*\*

- Croatian
  \*/
  CROATIAN = 1213481842,

/\*\*

- Czech
  \*/
  CZECH = 1213481850,

/\*\*

- Danish/Norwegian
  \*/
  `DANISH_NORWEGIAN` = 1213482062,

/\*\*

- Estonian
  \*/
  ESTONIAN = 1213482355,

/\*\*

- Finnish/Swedish
  \*/
  `FINNISH_SWEDISH` = 1213485894,

/\*\*

- Hiragana: A, I, U, E, O...
  \*/
  `HIRAGANA_ALL` = 1213483073,

/\*\*

- Hiragana: A, Ka, Sa, Ta, Na...
  \*/
  `HIRAGANA_CONSONANTS_ONLY` = 1213483075,

/\*\*

- Hungarian
  \*/
  HUNGARIAN = 1213483125,

/\*\*

- Katakana: A, I, U, E, O...
  \*/
  `KATAKANA_ALL` = 1213483841,

/\*\*

- Katakana: A, Ka, Sa, Ta, Na...
  \*/
  `KATAKANA_CONSONANTS_ONLY` = 1213483843,

/\*\*

- Korean Consonant
  \*/
  `KOREAN_CONSONANT` = 1213483887,

/\*\*

- Korean Consonant Plus Vowel
  \*/
  `KOREAN_CONSONANT_PLUS_VOWEL` = 1213483862,

/\*\*

- Latvian
  \*/
  LATVIAN = 1213484129,

/\*\*

- Lithuanian
  \*/
  LITHUANIAN = 1213484137,

/\*\*

- Polish
  \*/
  POLISH = 1213485167,

/\*\*

- Romanian
  \*/
  ROMANIAN = 1213485679,

/\*\*

- Russian
  \*/
  RUSSIAN = 1213485685,

/\*\*

- Slovak
  \*/
  SLOVAK = 1213485931,

/\*\*

- Slovenian
  \*/
  SLOVENIAN = 1213485934,

/\*\*

- Spanish
  \*/
  SPANISH = 1213485936,

/\*\*

- Turkish
  \*/
  TURKISH = 1213486197,

/\*\*

- Ukrainian
  \*/
  UKRAINIAN = 1213486443,
  }

/\*\*

- Choices for controlling how tranparencies appear.
  \*/
  declare enum TagTransparency {
  /\*\*
  - Selects the default setting. For details, refer to display performance preferences.
    \*/
    `DEFAULT_VALUE` = 1147563124,

/\*\*

- Uses 144 dpi rendering for drop shadows and feathers, plus CMYK mattes and spread isolation.
  \*/
  `HIGH_QUALITY` = 1346922866,

/\*\*

- Shows basic transparency (opacity and blend modes) and approximates transparency effects such as drop shadow and feathering at low resolution. Note: Page content is not isolated from the background. Objects using blend modes other than Normal may look different in other applications and output.
  \*/
  `LOW_QUALITY` = 1481666146,

/\*\*

- Shows drop shadows and feathering at low resolution.
  \*/
  `MEDIUM_QUALITY` = 1481663597,

/\*\*

- Disables on-screen transparency display. Note: Transparency remains active when printing or exporting the file.
  \*/
  OFF = 1330005536,
  }

/\*\*

- Display choices for vector images.
  \*/
  declare enum TagVector {
  /\*\*
  - Selects the default setting. For details, refer to display performance preferences.
    \*/
    `DEFAULT_VALUE` = 1147563124,

/\*\*

- Shows the image grayed out.
  \*/
  `GRAY_OUT` = 1917284985,

/\*\*

- Shows a high-resolution version of the image.
  \*/
  `HIGH_RESOLUTION` = 1917348177,

/\*\*

- Shows a low-resolution proxy version of the image.
  \*/
  PROXY = 1917874808,
  }

/\*\*

- Display choices for raster images.
  \*/
  declare enum TagRaster {
  /\*\*
  - Selects the default setting. For details, refer to display performance preferences.
    \*/
    `DEFAULT_VALUE` = 1147563124,

/\*\*

- Shows raster images grayed out.
  \*/
  `GRAY_OUT` = 1917284985,

/\*\*

- Shows a high-resolution version of the image.
  \*/
  `HIGH_RESOLUTION` = 1917348177,

/\*\*

- Shows a low-resolution proxy image useful for identifying and positioning an image.
  \*/
  PROXY = 1917874808,
  }

/\*\*

- Choices for selected-hyperlink highlighting.
  \*/
  declare enum HyperlinkAppearanceHighlight {
  /\*\*
  - Highlights the inset hyperlink border.
    \*/
    INSET = 1853056372,

/\*\*

- Highlights the hyperlink fill color.
  \*/
  INVERT = 1853256308,

/\*\*

- Leaves the hyperlink unhighlighted.
  \*/
  NONE = 1852796517,

/\*\*

- Highlights the hyperlink border.
  \*/
  OUTLINE = 1869900910,
  }

/\*\*

- Choices for hyperlink border weight.
  \*/
  declare enum HyperlinkAppearanceWidth {
  /\*\*
  - Applies a medium border.
    \*/
    MEDIUM = 1701727588,

/\*\*

- Applies a thick border.
  \*/
  THICK = 1952999787,

/\*\*

- Applies a thin border.
  \*/
  THIN = 1952999790,
  }

/\*\*

- Choices for hyperlink border style.
  \*/
  declare enum HyperlinkAppearanceStyle {
  /\*\*
  - Applies a dashed stroke.
    \*/
    DASHED = 1684108136,

/\*\*

- Applies a solid stroke.
  \*/
  SOLID = 1936682084,
  }

/\*\*

- Choices for displaying a hyperlink destination page.
  \*/
  declare enum HyperlinkDestinationPageSetting {
  /\*\*
  - Scales the destination page to the window height; the right side of the page can be hidden. Note: Vertical window resizing updates the magnification automatically.
    \*/
    `FIT_HEIGHT` = 1212437352,

/\*\*

- Uses the visible portion of the destination page as the destination view.
  \*/
  `FIT_VIEW` = 1212437366,

/\*\*

- Scales the destination page's text area to the window width; page margins are hidden and the lower page area can be obscured. Note: Horizontal window resizing updates the magnification automatically.
  \*/
  `FIT_VISIBLE` = 1212437334,

/\*\*

- Scales the destination page to the window width; the lower page area can be hidden. Note: Horizontal window resizing updates the magnification automatically.
  \*/
  `FIT_WIDTH` = 1212437335,

/\*\*

- Scales the entire destination page into the document window. Note: Resizing the window updates magnification automatically.
  \*/
  `FIT_WINDOW` = 1212437367,

/\*\*

- Shows the destination page inside the specified rectangle. For rectangle size and position details, see the view bounds entry.
  \*/
  FIXED = 1212437350,

/\*\*

- Displays the destination page at the same zoom percentage as the previous page. Note: Resizing the window updates magnification automatically.
  \*/
  `INHERIT_ZOOM` = 1212437370,
  }

/\*\*

- Cross-reference building-block type values.
  \*/
  declare enum BuildingBlockTypes {
  /\*\*
  - Building-block type for bookmark names.
    \*/
    `BOOKMARK_NAME_BUILDING_BLOCK` = 1650614894,

/\*\*

- Building-block type for chapter numbers.
  \*/
  `CHAPTER_NUMBER_BUILDING_BLOCK` = 1650615150,

/\*\*

- Building-block type for custom strings.
  \*/
  `CUSTOM_STRING_BUILDING_BLOCK` = 1650615155,

/\*\*

- Building-block type for file names.
  \*/
  `FILE_NAME_BUILDING_BLOCK` = 1650615918,

/\*\*

- Building-block type for full paragraphs.
  \*/
  `FULL_PARAGRAPH_BUILDING_BLOCK` = 1650615920,

/\*\*

- Building-block type for page numbers.
  \*/
  `PAGE_NUMBER_BUILDING_BLOCK` = 1650618478,

/\*\*

- Building-block type for paragraph numbers.
  \*/
  `PARAGRAPH_NUMBER_BUILDING_BLOCK` = 1651533678,

/\*\*

- Building-block type for paragraph text.
  \*/
  `PARAGRAPH_TEXT_BUILDING_BLOCK` = 1650618484,
  }

/\*\*

- Sort-order values for hyperlink ranges.
  \*/
  declare enum RangeSortOrder {
  /\*\*
  - Orders the ranges ascending.
    \*/
    `ASCENDING_SORT` = 1634952307,

/\*\*

- Orders the ranges descending.
  \*/
  `DESCENDING_SORT` = 1685287796,

/\*\*

- Leaves the ranges unsorted.
  \*/
  `NO_SORT` = 1852797812,
  }

/\*\*

- Flag value showing whether the rule is disabled, treated as error, warning, or informational.
  \*/
  declare enum PreflightRuleFlag {
  /\*\*
  - Treat as an error when the rule check fails.
    \*/
    `RETURN_AS_ERROR` = 1699890546,

/\*\*

- Treat as informational only when the rule check fails.
  \*/
  `RETURN_AS_INFORMATIONAL` = 1699893865,

/\*\*

- Treat as a warning when the rule check fails.
  \*/
  `RETURN_AS_WARNING` = 1699893879,

/\*\*

- Indicates that the rule is disabled.
  \*/
  `RULE_IS_DISABLED` = 1699890274,
  }

/\*\*

- Data-type values for this data object.
  \*/
  declare enum RuleDataType {
  /\*\*
  - Boolean data type.
    \*/
    `BOOLEAN_DATA_TYPE` = 1920221804,

/\*\*

- int32 data type.
  \*/
  `INTEGER_DATA_TYPE` = 1920223598,

/\*\*

- List data type.
  \*/
  `LIST_DATA_TYPE` = 1920224372,

/\*\*

- Object data type.
  \*/
  `OBJECT_DATA_TYPE` = 1920225122,

/\*\*

- Real data type.
  \*/
  `REAL_DATA_TYPE` = 1920225900,

/\*\*

- int16 data type.
  \*/
  `SHORT_INTEGER_DATA_TYPE` = 1920226153,

/\*\*

- String data type.
  \*/
  `STRING_DATA_TYPE` = 1920226162,
  }

/\*\*

- Choices for preflight scope.
  \*/
  declare enum PreflightScopeOptions {
  /\*\*
  - Includes every document in the book preflight.
    \*/
    `PREFLIGHT_ALL_DOCUMENTS` = 1885552964,

/\*\*

- Includes every page in the preflight.
  \*/
  `PREFLIGHT_ALL_PAGES` = 1885552976,

/\*\*

- Includes only selected documents for book preflight.
  \*/
  `PREFLIGHT_SELECTED_DOCUMENTS` = 1885557572,
  }

/\*\*

- Choices for preflight layers.
  \*/
  declare enum PreflightLayerOptions {
  /\*\*
  - Preflight every layer
    \*/
    `PREFLIGHT_ALL_LAYERS` = 1886142796,

/\*\*

- Preflight layers that are visible
  \*/
  `PREFLIGHT_VISIBLE_LAYERS` = 1886148172,

/\*\*

- Preflight layers that are both visible and printable
  \*/
  `PREFLIGHT_VISIBLE_PRINTABLE_LAYERS` = 1886148176,
  }

/\*\*

- Choices for Preflight Profile handling.
  \*/
  declare enum PreflightProfileOptions {
  /\*\*
  - Runs preflight with the embedded profile.
    \*/
    `USE_EMBEDDED_PROFILE` = 1885619533,

/\*\*

- Runs preflight with the working profile.
  \*/
  `USE_WORKING_PROFILE` = 1885622342,
  }

/\*\*

- Choices for PNG page export ranges.
  \*/
  declare enum PNGExportRangeEnum {
  /\*\*
  - Exports every page.
    \*/
    `EXPORT_ALL` = 1785742657,

/\*\*

- Exports the range named by the page string property.
  \*/
  `EXPORT_RANGE` = 1785742674,
  }

/\*\*

- PNG export quality choices.
  \*/
  declare enum PNGQualityEnum {
  /\*\*
  - High quality.
    \*/
    HIGH = 1701726313,

/\*\*

- Low quality.
  \*/
  LOW = 1701727351,

/\*\*

- Maximum quality.
  \*/
  MAXIMUM = 1701727608,

/\*\*

- Medium quality.
  \*/
  MEDIUM = 1701727588,
  }

/\*\*

- Color-space choices for exported PNG color representation.
  \*/
  declare enum PNGColorSpaceEnum {
  /\*\*
  - Converts all color values into high-quality black-and-white images. The converted objects' gray levels reflect the original objects' luminosity.
    \*/
    GRAY = 1766290041,

/\*\*

- Uses the RGB color space for all color values. Best suited to documents intended for on-screen viewing.
  \*/
  RGB = 1666336578,
  }

/\*\*

- Choices for the user actions that alter a button's state.
  \*/
  declare enum StateTypes {
  /\*\*
  - Mouse pointer clicks within the button's area.
    \*/
    DOWN = 1181971556,

/\*\*

- Off state for Down.
  \*/
  `DOWN_OFF` = 1181967462,

/\*\*

- On state for Down.
  \*/
  `DOWN_ON` = 1181967471,

/\*\*

- Mouse pointer enters the button's area.
  \*/
  ROLLOVER = 1181971574,

/\*\*

- Off state for Rollover.
  \*/
  `ROLLOVER_OFF` = 1181972070,

/\*\*

- On state for Rollover.
  \*/
  `ROLLOVER_ON` = 1181972079,

/\*\*

- Default appearance used when no user activity occurs in the button's area.
  \*/
  UP = 1181971566,

/\*\*

- Off state for Up.
  \*/
  `UP_OFF` = 1181970022,

/\*\*

- On state for Up.
  \*/
  `UP_ON` = 1181970031,
  }

/\*\*

- Choices for placing a movie's display window.
  \*/
  declare enum FloatingWindowPosition {
  /\*\*
  - Places the window at screen center.
    \*/
    CENTER = 1298359662,

/\*\*

- Places the window along the left side, midway from top to bottom.
  \*/
  `CENTER_LEFT` = 1298361446,

/\*\*

- Places the window along the right side, midway from top to bottom.
  \*/
  `CENTER_RIGHT` = 1298362996,

/\*\*

- Places the window in the screen's lower-left corner.
  \*/
  `LOWER_LEFT` = 1298951270,

/\*\*

- Places the window at the bottom center, midway between the left and right edges.
  \*/
  `LOWER_MIDDLE` = 1298951524,

/\*\*

- Places the window in the screen's lower-right corner.
  \*/
  `LOWER_RIGHT` = 1298952820,

/\*\*

- Places the window in the screen's upper-left corner.
  \*/
  `UPPER_LEFT` = 1668183118,

/\*\*

- Places the window at the top center, midway between the left and right edges.
  \*/
  `UPPER_MIDDLE` = 1299541348,

/\*\*

- Places the window in the screen's upper-right corner.
  \*/
  `UPPER_RIGHT` = 1299542644,
  }

/\*\*

- Movie floating-window size values. Valid only when floating window is true.
  \*/
  declare enum FloatingWindowSize {
  /\*\*
  - Uses the movie's original display size for the floating window.
    \*/
    FULL = 1298560364,

/\*\*

- Makes the floating window fill the entire screen.
  \*/
  MAX = 1299014008,

/\*\*

- Sets the floating window to one fifth of the movie's original display length and height.
  \*/
  `ONE_FIFTH` = 1298557286,

/\*\*

- Sets the floating window to one fourth of the movie's original display length and height.
  \*/
  `ONE_FOURTH` = 1298558834,

/\*\*

- Sets the floating window to one half of the movie's original display length and height.
  \*/
  `ONE_HALF` = 1298686316,

/\*\*

- Sets the floating window to four times the movie's original display length and height.
  \*/
  QUADRUPLE = 1299281272,

/\*\*

- Sets the floating window to three times the movie's original display length and height.
  \*/
  TRIPLE = 1299477112,

/\*\*

- Sets the floating window to twice the movie's original display length and height.
  \*/
  TWICE = 1299476344,
  }

/\*\*

- Graphic-type choices for the movie poster.
  \*/
  declare enum MoviePosterTypes {
  /\*\*
  - Uses an image taken from the movie file.
    \*/
    `FROM_MOVIE` = 1298558310,

/\*\*

- None.
  \*/
  NONE = 1852796517,

/\*\*

- (Read-only) Reports a movie poster other than the generic standard image.
  \*/
  `PROXY_IMAGE` = 1299216505,

/\*\*

- Uses the generic image file for movie posters.
  \*/
  STANDARD = 2020623970,
  }

/\*\*

- Playback operation choices.
  \*/
  declare enum MoviePlayOperations {
  /\*\*
  - Puts playback on pause.
    \*/
    PAUSE = 1885435251,

/\*\*

- Begins playback.
  \*/
  PLAY = 1886151033,

/\*\*

- Begins playback from the specified navigation point.
  \*/
  `PLAY_FROM_NAVIGATION_POINT` = 1886154358,

/\*\*

- Continues playback after a pause.
  \*/
  RESUME = 1919251317,

/\*\*

- Ends playback.
  \*/
  STOP = 1937010544,

/\*\*

- Ends all playback (SWF only).
  \*/
  `STOP_ALL` = 1937010785,
  }

/\*\*

- Choices for sound poster graphics.
  \*/
  declare enum SoundPosterTypes {
  /\*\*
  - Omits a sound poster.
    \*/
    NONE = 1852796517,

/\*\*

- Uses a proxy image as the sound poster.
  \*/
  `PROXY_IMAGE` = 1299216505,

/\*\*

- Uses the generic sound poster.
  \*/
  STANDARD = 2020623970,
  }

/\*\*

- Choices for behavior trigger events.
  \*/
  declare enum BehaviorEvents {
  /\*\*
  - Triggers the behavior when the mouse button is clicked and held without release.
    \*/
    `MOUSE_DOWN` = 1835296118,

/\*\*

- Triggers the behavior when the mouse pointer enters the object's bounding-box area.
  \*/
  `MOUSE_ENTER` = 1835361654,

/\*\*

- Triggers the behavior when the mouse pointer leaves the object's bounding-box area.
  \*/
  `MOUSE_EXIT` = 1836606838,

/\*\*

- Triggers the behavior when the mouse is released after clicking.
  \*/
  `MOUSE_UP` = 1836410230,

/\*\*

- Triggers the behavior when focus shifts to another interactive object.
  \*/
  `ON_BLUR` = 1868719478,

/\*\*

- Triggers the behavior when the object gains focus through mouse action or the Tab key.
  \*/
  `ON_FOCUS` = 1868981622,
  }

/\*\*

- Zoom choices for the goto destination page.
  \*/
  declare enum GoToZoomOptions {
  /\*\*
  - Shows the page at 100% magnification.
    \*/
    `ACTUAL_SIZE` = 2053206906,

/\*\*

- Scales the page text area to the window width; page margins and the lower page area may be hidden.
  \*/
  `FIT_VISIBLE` = 1212437334,

/\*\*

- Scales the page to the window width; the lower page area may be hidden.
  \*/
  `FIT_WIDTH` = 1212437335,

/\*\*

- Scales the page into the display window.
  \*/
  `FIT_WINDOW` = 1212437367,

/\*\*

- Uses the zoom setting inherited from the previously displayed page.
  \*/
  `INHERIT_ZOOM` = 1212437370,
  }

/\*\*

- Playback operation choices.
  \*/
  declare enum PlayOperations {
  /\*\*
  - Puts playback on pause.
    \*/
    PAUSE = 1885435251,

/\*\*

- Begins playback.
  \*/
  PLAY = 1886151033,

/\*\*

- Continues playback after a pause.
  \*/
  RESUME = 1919251317,

/\*\*

- Ends playback.
  \*/
  STOP = 1937010544,

/\*\*

- Ends all playback (SWF only).
  \*/
  `STOP_ALL` = 1937010785,
  }

/\*\*

- Playback operation choices.
  \*/
  declare enum AnimationPlayOperations {
  /\*\*
  - Puts playback on pause.
    \*/
    PAUSE = 1885435251,

/\*\*

- Begins playback.
  \*/
  PLAY = 1886151033,
