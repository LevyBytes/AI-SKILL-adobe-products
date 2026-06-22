# Indesign (part 15)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Choices for ruby overhang.
  \*/
  declare enum RubyOverhang {
  /\*\*
  - Prevents ruby overhang.
    \*/
    NONE = 1852796517,

/\*\*

- Sets ruby overhang to one-half the size of one chararacter.
  \*/
  `RUBY_OVERHANG_HALF_CHAR` = 1249011811,

/\*\*

- Sets ruby overhang to one-half ruby.
  \*/
  `RUBY_OVERHANG_HALF_RUBY` = 1249013554,

/\*\*

- Leaves ruby overhang without a size limit.
  \*/
  `RUBY_OVERHANG_NO_LIMIT` = 1249013621,

/\*\*

- Sets ruby overhang to the size of one character.
  \*/
  `RUBY_OVERHANG_ONE_CHAR` = 1249013603,

/\*\*

- Sets ruby overhang to one ruby.
  \*/
  `RUBY_OVERHANG_ONE_RUBY` = 1249013553,
  }

/\*\*

- Choices for warichu text alignment.
  \*/
  declare enum WarichuAlignment {
  /\*\*
  - Aligns warichu characters automatically.
    \*/
    AUTO = 1635019116,

/\*\*

- Centers warichu within the text frame.
  \*/
  `CENTER_ALIGN` = 1667591796,

/\*\*

- Justifies warichu lines, with the final line centered.
  \*/
  `CENTER_JUSTIFIED` = 1667920756,

/\*\*

- Justifies warichu lines so every line has equal length.
  \*/
  `FULLY_JUSTIFIED` = 1718971500,

/\*\*

- Positions warichu at the text frame's left side.
  \*/
  `LEFT_ALIGN` = 1818584692,

/\*\*

- Justifies warichu lines, with the final line left aligned.
  \*/
  `LEFT_JUSTIFIED` = 1818915700,

/\*\*

- Positions warichu at the text frame's rigt side.
  \*/
  `RIGHT_ALIGN` = 1919379572,

/\*\*

- Justifies warichu lines, with the final line right aligned.
  \*/
  `RIGHT_JUSTIFIED` = 1919578996,
  }

/\*\*

- Choices for kinsoku processing.
  \*/
  declare enum KinsokuType {
  /\*\*
  - Gives priority to the kinsoku adjustment amount.
    \*/
    `KINSOKU_PRIORITIZE_ADJUSTMENT_AMOUNT` = 1248553313,

/\*\*

- First tries moving characters to the previous line; if push-in fails, moves them to the next line.
  \*/
  `KINSOKU_PUSH_IN_FIRST` = 1248553318,

/\*\*

- First tries moving characters to the next line; if push-out fails, moves them to the previous line.
  \*/
  `KINSOKU_PUSH_OUT_FIRST` = 1248554854,

/\*\*

- Always sends characters to the next line and skips any push-in attempt.
  \*/
  `KINSOKU_PUSH_OUT_ONLY` = 1248554863,
  }

/\*\*

- Choices for hanging punctuation while a kinsoku set is active.
  \*/
  declare enum KinsokuHangTypes {
  /\*\*
  - Enables hanging punctuation, requires it outside the text frame, and prevents placement on the frame.
    \*/
    `KINSOKU_HANG_FORCE` = 1248553062,

/\*\*

- Enables hanging punctuation and allows punctuation marks on or outside the text frame, while keeping burasagari hanging as small as possible. Note: Behavior differs for justified and nonjustified text. For details about justification, see line alignment.
  \*/
  `KINSOKU_HANG_REGULAR` = 1248553074,

/\*\*

- Turns hanging punctuation off.
  \*/
  NONE = 1852796517,
  }

/\*\*

- Choices for leading model.
  \*/
  declare enum LeadingModel {
  /\*\*
  - Calculates line spacing from the aki above.
    \*/
    `LEADING_MODEL_AKI_ABOVE` = 1248616801,

/\*\*

- Calculates line spacing from the aki below.
  \*/
  `LEADING_MODEL_AKI_BELOW` = 1248616802,

/\*\*

- Calculates spacing between character center points.
  \*/
  `LEADING_MODEL_CENTER` = 1248619875,

/\*\*

- Center down leading model.
  \*/
  `LEADING_MODEL_CENTER_DOWN` = 1248617316,

/\*\*

- Calculates spacing between type baselines.
  \*/
  `LEADING_MODEL_ROMAN` = 1248619858,
  }

/\*\*

- Choices for predefined kinsoku sets.
  \*/
  declare enum KinsokuSet {
  /\*\*
  - Selects the hard or maximum kinsoku set, covering all Japanese characters that should not start or finish a line.
    \*/
    `HARD_KINSOKU` = 1248357235,

/\*\*

- Selects the Korean kinsoku set.
  \*/
  `KOREAN_KINSOKU` = 1263692659,

/\*\*

- Selects no kinsoku set.
  \*/
  NOTHING = 1851876449,

/\*\*

- Selects the simplified Chinese kinsoku set.
  \*/
  `SIMPLIFIED_CHINESE_KINSOKU` = 1396927347,

/\*\*

- Selects the soft or weak kinsoku set, leaving out long vowel symbols and small hiragana and katakana characters from the hard kinsoku set.
  \*/
  `SOFT_KINSOKU` = 1249078131,

/\*\*

- Selects the traditional Chinese kinsoku set.
  \*/
  `TRADITIONAL_CHINESE_KINSOKU` = 1413704563,
  }

/\*\*

- Choices for mojikumi tables.
  \*/
  declare enum MojikumiTableDefaults {
  /\*\*
  - Applies full-width spacing to every character.
    \*/
    `LINE_END_ALL_ONE_EM_ENUM` = 1246572848,

/\*\*

- Applies half-width spacing to every character.
  \*/
  `LINE_END_ALL_ONE_HALF_EM_ENUM` = 1246572593,

/\*\*

- Applies full-width spacing to punctuation.
  \*/
  `LINE_END_PERIOD_ONE_EM_ENUM` = 1246572852,

/\*\*

- Applies line end uke no float.
  \*/
  `LINE_END_UKE_NO_FLOAT_ENUM` = 1246572849,

/\*\*

- Turns mojikumi off.
  \*/
  NOTHING = 1851876449,

/\*\*

- Indents lines by one full space and applies no float to every character.
  \*/
  `ONE_EM_INDENT_LINE_END_ALL_NO_FLOAT_ENUM` = 1246572598,

/\*\*

- Indents lines by one full space and applies full-width spacing to every character.
  \*/
  `ONE_EM_INDENT_LINE_END_ALL_ONE_EM_ENUM` = 1246572597,

/\*\*

- Indents lines by one full space and applies half-width spacing to every character.
  \*/
  `ONE_EM_INDENT_LINE_END_ALL_ONE_HALF_EM_ENUM` = 1246572601,

/\*\*

- Indents lines by one full space and applies full-width spacing to punctuation and to the line's final character.
  \*/
  `ONE_EM_INDENT_LINE_END_PERIOD_ONE_EM_ENUM` = 1246572851,

/\*\*

- Indents lines by one full space and applies line end uke no float.
  \*/
  `ONE_EM_INDENT_LINE_END_UKE_NO_FLOAT_ENUM` = 1246572599,

/\*\*

- Indents lines by one space and applies line end uke one half space.
  \*/
  `ONE_EM_INDENT_LINE_END_UKE_ONE_HALF_EM_ENUM` = 1246572594,

/\*\*

- Applies full-witdh spacing to every character except the last character in the line, which may use full- or half-width spacing.
  \*/
  `ONE_OR_ONE_HALF_EM_INDENT_LINE_END_ALL_ONE_EM_ENUM` = 1246572596,

/\*\*

- Indents lines by one or one-half space and applies full-width spacing to punctuation and to the line's final character.
  \*/
  `ONE_OR_ONE_HALF_EM_INDENT_LINE_END_PERIOD_ONE_EM_ENUM` = 1246572850,

/\*\*

- Indents lines by one half space or one full space and applies line end uke no float.
  \*/
  `ONE_OR_ONE_HALF_EM_INDENT_LINE_END_UKE_NO_FLOAT_ENUM` = 1246572600,

/\*\*

- Indents lines by one full or half space and applies line end uke one half space.
  \*/
  `ONE_OR_ONE_HALF_EM_INDENT_LINE_END_UKE_ONE_HALF_EM_ENUM` = 1246572595,

/\*\*

- Applies mojikumi tsume and aki tuned for Simplified Chinese punctuation glyphs.
  \*/
  `SIMP_CHINESE_DEFAULT` = 1246572854,

/\*\*

- Applies mojikumi tsume and aki tuned for Traditional Chinese centered punctuation glyphs.
  \*/
  `TRAD_CHINESE_DEFAULT` = 1246572853,
  }

/\*\*

- Choices for alignment to frame grids or baseline grids.
  \*/
  declare enum GridAlignment {
  /\*\*
  - Lines the text baseline up with the grid.
    \*/
    `ALIGN_BASELINE` = 1247896172,

/\*\*

- Lines the em box bottom up with the grid.
  \*/
  `ALIGN_EM_BOTTOM` = 1247896173,

/\*\*

- Lines the em box center up with the grid.
  \*/
  `ALIGN_EM_CENTER` = 1247896436,

/\*\*

- Lines the em box top up with the grid.
  \*/
  `ALIGN_EM_TOP` = 1247900784,

/\*\*

- Lines the ICF box bottom up with the grid.
  \*/
  `ALIGN_ICF_BOTTOM` = 1248420461,

/\*\*

- Lines the ICF box top up with the grid.
  \*/
  `ALIGN_ICF_TOP` = 1248425072,

/\*\*

- Leaves lines unaligned to the grid.
  \*/
  NONE = 1852796517,
  }

/\*\*

- Choices for aligning kenten characters against parent characters.
  \*/
  declare enum KentenAlignment {
  /\*\*
  - Centers kenten on the parent charactrers.
    \*/
    `ALIGN_KENTEN_CENTER` = 1248554595,

/\*\*

- Aligns kenten with the left side of parent characters.
  \*/
  `ALIGN_KENTEN_LEFT` = 1248554604,
  }

/\*\*

- Choices for hyphenation exception lists used while composing text.
  \*/
  declare enum ComposeUsing {
  /\*\*
  - Uses lists from both the document and the user dictionary.
    \*/
    BOTH = 1651471464,

/\*\*

- Uses the document-stored list.
  \*/
  `USE_DOCUMENT` = 1967419235,

/\*\*

- Uses the list in the external user dictionary.
  \*/
  `USE_USER_DICTIONARY` = 1433629284,
  }

/\*\*

- Choices for page number style.
  \*/
  declare enum PageNumberStyle {
  /\*\*
  - Arabic numerals style.
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

- Arabic-numeral page numbers render with three digits.
  \*/
  `DOUBLE_LEADING_ZEROS` = 1296329850,

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

- Lowercase letter style.
  \*/
  `LOWER_LETTERS` = 1296855660,

/\*\*

- Lowercase Roman numeral style.
  \*/
  `LOWER_ROMAN` = 1297247596,

/\*\*

- Arabic-numeral page numbers render with two digits.
  \*/
  `SINGLE_LEADING_ZEROS` = 1297312890,

/\*\*

- Arabic-numeral page numbers render with four digits.
  \*/
  `TRIPLE_LEADING_ZEROS` = 1297378426,

/\*\*

- Uppercase letter style.
  \*/
  `UPPER_LETTERS` = 1296855669,

/\*\*

- Uppercase Roman numeral style.
  \*/
  `UPPER_ROMAN` = 1297247605,
  }

/\*\*

- Choices for gradient type.
  \*/
  declare enum GradientType {
  /\*\*
  - Linear gradient.
    \*/
    LINEAR = 1635282023,

/\*\*

- Radial gradient.
  \*/
  RADIAL = 1918985319,
  }

/\*\*

- Choices for joining two path points.
  \*/
  declare enum JoinOptions {
  /\*\*
  - Combines two end points and replaces them with a single averaged point.
    \*/
    COMBINE = 1668113006,

/\*\*

- Connects two end points (default).
  \*/
  CONNECT = 1668178804,
  }

/\*\*

- Choices for path type.
  \*/
  declare enum PathType {
  /\*\*
  - Indicates a closed path.
    \*/
    `CLOSED_PATH` = 1668051812,

/\*\*

- Indicates an open path.
  \*/
  `OPEN_PATH` = 1869639280,
  }

/\*\*

- Path point type choices.
  \*/
  declare enum PointType {
  /\*\*
  - Corner point with either one direction line or two independent direction lines.
    \*/
    CORNER = 1668443762,

/\*\*

- Plain point with no direction lines.
  \*/
  PLAIN = 1886151022,

/\*\*

- Smooth point whose two direction lines are parallel.
  \*/
  SMOOTH = 1936553064,

/\*\*

- Special smooth point variant with two direction lines of equal length.
  \*/
  SYMMETRICAL = 1937337709,
  }

/\*\*

- Choices for generating preview images.
  \*/
  declare enum CreateProxy {
  /\*\*
  - Always generates preview images.
    \*/
    ALWAYS = 1699307895,

/\*\*

- Generates preview images when required.
  \*/
  `AS_NEEDED` = 1699311204,
  }

/\*\*

- Cropping choices for imported InDesign pages.
  \*/
  declare enum ImportedPageCropOptions {
  /\*\*
  - Uses the page's bleed area for placement.
    \*/
    `CROP_BLEED` = 1131573314,

/\*\*

- Uses the page's bounding box for placement.
  \*/
  `CROP_CONTENT` = 1131573315,

/\*\*

- Uses the page's slug area for placement.
  \*/
  `CROP_SLUG` = 1131565932,
  }

/\*\*

- Use SVG As Enum.
  \*/
  declare enum UseSVGAsEnum {
  /\*\*
  - Exports SVG as embed code.
    \*/
    `EMBED_CODE` = 1701667427,

/\*\*

- Exports SVG as object tags.
  \*/
  `OBJECT_TAGS` = 1868720756,
  }

/\*\*

- Choices for the active stroke/fill proxy.
  \*/
  declare enum StrokeFillProxyOptions {
  /\*\*
  - Activates the fill proxy.
    \*/
    FILL = 1181314156,

/\*\*

- Activates the stroke proxy.
  \*/
  STROKE = 1400140395,
  }

/\*\*

- Choices for the active stroke/fill proxy target.
  \*/
  declare enum StrokeFillTargetOptions {
  /\*\*
  - Applies formatting to the container.
    \*/
    `FORMATTING_AFFECTS_CONTAINER` = 1181696323,

/\*\*

- Applies formatting to text.
  \*/
  `FORMATTING_AFFECTS_TEXT` = 1181696340,
  }

/\*\*

- Choices for rotating place gun contents.
  \*/
  declare enum RotationDirection {
  /\*\*
  - Rotates the list backward (i.e., moves the backmost item to the front).
    \*/
    BACKWARD = 1113680759,

/\*\*

- Rotates the list forward (i.e., moves the front item to the end).
  \*/
  FORWARD = 1181708919,
  }

/\*\*

- Choices for a location relative to the reference object or inside the containing object.
  \*/
  declare enum LocationOptions {
  /\*\*
  - Positions the object after the reference object.
    \*/
    AFTER = 1634104421,

/\*\*

- Positions the object at the start of the containing object.
  \*/
  `AT_BEGINNING` = 1650945639,

/\*\*

- Positions the object at the end of the containing object.
  \*/
  `AT_END` = 1701733408,

/\*\*

- Positions the object before the reference object.
  \*/
  BEFORE = 1650812527,

/\*\*

- Location is unspecified.
  \*/
  UNKNOWN = 1433299822,
  }

/\*\*

- Standard UI color choices.
  \*/
  declare enum UIColors {
  /\*\*
  - UI color: Black.
    \*/
    BLACK = 1765960811,

/\*\*

- UI color: Blue.
  \*/
  BLUE = 1765960821,

/\*\*

- UI color: Brick red.
  \*/
  `BRICK_RED` = 1765962340,

/\*\*

- UI color: Brown.
  \*/
  BROWN = 1765962350,

/\*\*

- UI color: Burgundy.
  \*/
  BURGUNDY = 1765962343,

/\*\*

- UI color: Charcoal.
  \*/
  CHARCOAL = 1766025324,

/\*\*

- UI color: Cute teal.
  \*/
  `CUTE_TEAL` = 1766028396,

/\*\*

- UI color: Cyan.
  \*/
  CYAN = 1766029678,

/\*\*

- UI color: Dark blue.
  \*/
  `DARK_BLUE` = 1766089324,

/\*\*

- UI color: Dark green.
  \*/
  `DARK_GREEN` = 1766090610,

/\*\*

- UI color: Fiesta.
  \*/
  FIESTA = 1766222181,

/\*\*

- UI color: Gold.
  \*/
  GOLD = 1766288484,

/\*\*

- UI color: Grass green.
  \*/
  `GRASS_GREEN` = 1766287218,

/\*\*

- UI color: Gray.
  \*/
  GRAY = 1766290041,

/\*\*

- UI color: Green.
  \*/
  GREEN = 1766290030,

/\*\*

- UI color: Grid blue.
  \*/
  `GRID_BLUE` = 1766285932,

/\*\*

- UI color: Grid green.
  \*/
  `GRID_GREEN` = 1766286439,

/\*\*

- UI color: Grid orange.
  \*/
  `GRID_ORANGE` = 1766289266,

/\*\*

- UI color: Lavender.
  \*/
  LAVENDER = 1766618734,

/\*\*

- UI color: Light blue.
  \*/
  `LIGHT_BLUE` = 1766613612,

/\*\*

- UI color: Light gray.
  \*/
  `LIGHT_GRAY` = 1766614898,

/\*\*

- UI color: Light olive.
  \*/
  `LIGHT_OLIVE` = 1766616940,

/\*\*

- UI color: Lipstick.
  \*/
  LIPSTICK = 1766615408,

/\*\*

- UI color: Magenta.
  \*/
  MAGENTA = 1766680430,

/\*\*

- UI color: Ochre.
  \*/
  OCHRE = 1766810482,

/\*\*

- UI color: Olive green.
  \*/
  `OLIVE_GREEN` = 1766812790,

/\*\*

- UI color: Orange.
  \*/
  ORANGE = 1766814318,

/\*\*

- UI color: Peach.
  \*/
  PEACH = 1766876008,

/\*\*

- UI color: Pink.
  \*/
  PINK = 1766878827,

/\*\*

- UI color: Purple.
  \*/
  PURPLE = 1766879856,

/\*\*

- UI color: Red.
  \*/
  RED = 1767007588,

/\*\*

- UI color: Sulphur.
  \*/
  SULPHUR = 1767077228,

/\*\*

- UI color: Tan.
  \*/
  TAN = 1767137646,

/\*\*

- UI color: Teal.
  \*/
  TEAL = 1767138668,

/\*\*

- UI color: Violet.
  \*/
  VIOLET = 1767271540,

/\*\*

- UI color: White.
  \*/
  WHITE = 1767336052,

/\*\*

- UI color: Yellow.
  \*/
  YELLOW = 1767468151,
  }

/\*\*

- Nothing value choices.
  \*/
  declare enum NothingEnum {
  /\*\*
  - Nothing.
    \*/
    NOTHING = 1851876449,
    }

/\*\*

- Automatic default value choices.
  \*/
  declare enum AutoEnum {
  /\*\*
  - Uses the automatically defined default value for the object, based on a parent or another object type.
    \*/
    `AUTO_VALUE` = 1635087471,
    }

/\*\*

- Choices for event propagation phases.
  \*/
  declare enum EventPhases {
  /\*\*
  - At-target propagation phase.
    \*/
    `AT_TARGET` = 1701724500,

/\*\*

- Bubbling propagation phase.
  \*/
  `BUBBLING_PHASE` = 1701724789,

/\*\*

- Marks propagation as finished.
  \*/
  DONE = 1701725252,

/\*\*

- Propagation has not started yet.
  \*/
  `NOT_DISPATCHING` = 1701727812,
  }

/\*\*

- Choices for export format.
  \*/
  declare enum ExportFormat {
  /\*\*
  - Exports using EPS format.
    \*/
    `EPS_TYPE` = 1952400720,

/\*\*

- Exports using EPub format.
  \*/
  EPUB = 1701868898,

/\*\*

- Exports using fixed layout EPub format.
  \*/
  `FIXED_LAYOUT_EPUB` = 1701865080,

/\*\*

- Exports using XHTML format.
  \*/
  HTML = 1213484364,

/\*\*

- Exports using XHTML FXL format.
  \*/
  HTMLFXL = 1213490808,

/\*\*

- Exports using InCopy markup (ICML) format.
  \*/
  `INCOPY_MARKUP` = 1768123756,

/\*\*

- Exports using InDesign markup (IDML) format.
  \*/
  `INDESIGN_MARKUP` = 1768189292,

/\*\*

- Exports using InDesign snippet (IDMS) format.
  \*/
  `INDESIGN_SNIPPET` = 1936617588,

/\*\*

- Exports using Interactive PDF format.
  \*/
  `INTERACTIVE_PDF` = 1952409936,

/\*\*

- Exports using JPEG format.
  \*/
  JPG = 1246775072,

/\*\*

- Exports using PDF format.
  \*/
  `PDF_TYPE` = 1952403524,

/\*\*

- Exports using PNG format.
  \*/
  `PNG_FORMAT` = 1699761735,

/\*\*

- Exports using rich text format (RTF).
  \*/
  RTF = 1381254688,

/\*\*

- Exports a tagged text file with a TXT extension.
  \*/
  `TAGGED_TEXT` = 1416066168,

/\*\*

- Exports using text (TXT) format.
  \*/
  `TEXT_TYPE` = 1952412773,

/\*\*

- Exports the document's tagged content as XML.
  \*/
  XML = 1481460768,
  }

/\*\*

- Color profile policy choices for placed vector files (PDF or EPS).
  \*/
  declare enum PlacedVectorProfilePolicy {
  /\*\*
  - Honors every profile and output intent.
    \*/
    `HONOR_ALL_PROFILES` = 1148217441,

/\*\*

- Ignores every profile and output intent.
  \*/
  `IGNORE_ALL` = 1148217697,

/\*\*

- Ignores output intent while honoring calibrated spaces.
  \*/
  `IGNORE_OUTPUT_INTENT` = 1148217711,
  }

/\*\*

- Policy choices for mismatched CMYK configuration handling.
  \*/
  declare enum ColorSettingsPolicy {
  /\*\*
  - Disables color management for documents with profiles that do not match the working space. For imported colors, numeric values take precedence over color appearance.
    \*/
    `COLOR_POLICY_OFF` = 1129344870,

/\*\*

- Keeps raw color numbers and disregards embedded color profiles.
  \*/
  `COMBINATION_OF_PRESERVE_AND_SAFE_CMYK` = 1129345124,

/\*\*

- Converts newly opened documents into the current working space. For imported colors, color appearance takes precedence over numeric values.
  \*/
  `CONVERT_TO_WORKING_SPACE` = 1129346931,

/\*\*

- Keeps embedded color profiles in newly opened documents.
  \*/
  `PRESERVE_EMBEDDED_PROFILES` = 1129345136,
  }

/\*\*

- Default rendering intent choices.
  \*/
  declare enum DefaultRenderingIntent {
  /\*\*
  - Prioritizes color accuracy over relationships between colors and fits proofing workflows that simulate a specific output device. Note: Colors within the destination gamut remain unchanged, while out-of-gamut colors are clipped.
    \*/
    `ABSOLUTE_COLORIMETRIC` = 1380540771,

/\*\*

- Maintains the perceived visual relationship among colors so the result looks natural to the human eye, even if individual color values change.
  \*/
  PERCEPTUAL = 1380544611,

/\*\*

- Compares the source color space's extreme highlight with the destination color space highlight, then shifts all colors from that comparison. Out-of-gamut colors move to the nearest reproducible destination color. Note: This retains more original image color than perceptual rendering intent.
  \*/
  `RELATIVE_COLORIMETRIC` = 1380545123,

/\*\*

- Favors vivid image color, trading away some color accuracy.
  \*/
  SATURATION = 1380545377,
  }

/\*\*

- Choices for proofing colors.
  \*/
  declare enum ProofingType {
  /\*\*
  - Allows a custom proofing setup for a particular output condition.
    \*/
    CUSTOM = 1131639917,

/\*\*

- Creates a color soft proof with the document's CMYK profile.
  \*/
  `DOCUMENT_CMYK` = 1347708003,

/\*\*

- Disables the soft proof display.
  \*/
  `PROOF_OFF` = 1347710822,

/\*\*

- Creates a color soft proof with the current CMYK working space.
  \*/
  `WORKING_CMYK` = 1347712867,
  }

/\*\*

- Modes for changing conditions.
  \*/
  declare enum ChangeConditionsModes {
  /\*\*
  - Adds the change to applied conditions.
    \*/
    `ADD_TO` = 1633969202,

/\*\*

- Replaces the applied conditions with the change.
  \*/
  `REPLACE_WITH` = 1919250519,
  }

/\*\*

- Choices for search mode.
  \*/
  declare enum SearchModes {
  /\*\*
  - Mode for color search.
    \*/
    `COLOR_SEARCH` = 1180921708,

/\*\*

- Mode for glyph search.
  \*/
  `GLYPH_SEARCH` = 1181183091,

/\*\*

- Mode for grep search.
  \*/
  `GREP_SEARCH` = 1181184627,

/\*\*

- Mode for object search.
  \*/
  `OBJECT_SEARCH` = 1181704819,

/\*\*

- Mode for text search.
  \*/
  `TEXT_SEARCH` = 1182038131,
  }

/\*\*

- Choices for object type.
  \*/
  declare enum ObjectTypes {
  /\*\*
  - All frame-type objects.
    \*/
    `ALL_FRAMES_TYPE` = 1178682995,

/\*\*

- Graphics frame type.
  \*/
  `GRAPHIC_FRAMES_TYPE` = 1179076211,

/\*\*

- Text frame type.
  \*/
  `TEXT_FRAMES_TYPE` = 1179928178,

/\*\*

- Unassigned frame type.
  \*/
  `UNASSIGNED_FRAMES_TYPE` = 1179993715,
  }

/\*\*

- Choices for find/change transliterate character types.
  \*/
  declare enum FindChangeTransliterateCharacterTypes {
  /\*\*
  - Arabic Indic(hindi) digit characters.
    \*/
    `ARABIC_INDIC_DIGITS` = 1095328873,

/\*\*

- Farsi digit characters.
  \*/
  `FARSI_DIGITS` = 1684629089,

/\*\*

- Full-width hiragana characters.
  \*/
  `FULL_WIDTH_HIRAGANA` = 1179023176,

/\*\*

- Full-width katakana characters.
  \*/
  `FULL_WIDTH_KATAKANA` = 1179023179,

/\*\*

- Full-width Roman symbol characters.
  \*/
  `FULL_WIDTH_ROMAN_SYMBOLS` = 1179023186,

/\*\*

- Half-width katakana characters.
  \*/
  `HALF_WIDTH_KATAKANA` = 1179154251,

/\*\*

- Half-width Roman symbol characters.
  \*/
  `HALF_WIDTH_ROMAN_SYMBOLS` = 1179154258,

/\*\*

- Western Arabic digit characters (0, 1, 2, 3, ...).
  \*/
  `WESTERN_ARABIC_DIGITS` = 1463903337,
  }

/\*\*

- Views available in the Library panel.
  \*/
  declare enum LibraryPanelViews {
  /\*\*
  - Large-thumbnail Library panel view.
    \*/
    `LARGE_THUMBNAIL_VIEW` = 1699501142,

/\*\*

- List Library panel view.
  \*/
  `LIST_VIEW` = 1699501673,

/\*\*

- Thumbnail Library panel view.
  \*/
  `THUMBNAIL_VIEW` = 1700030550,
  }

/\*\*

- Choices for asset sort order.
  \*/
  declare enum SortAssets {
  /\*\*
  - Sorts by name.
    \*/
    `BY_NAME` = 1699955278,

/\*\*

- Sorts newest first.
  \*/
  `BY_NEWEST` = 1699955310,

/\*\*

- Sorts oldest first.
  \*/
  `BY_OLDEST` = 1699955279,

/\*\*

- Sorts by type.
  \*/
  `BY_TYPE` = 1699955284,
  }

/\*\*

- Choices for link status.
  \*/
  declare enum LinkStatus {
  /\*\*
  - Indicates the file is embedded in the document.
    \*/
    `LINK_EMBEDDED` = 1282237028,

/\*\*

- Indicates the url link cannot be accessed.
  \*/
  `LINK_INACCESSIBLE` = 1818848865,

/\*\*

- Indicates the linked file has been moved, renamed, or deleted.
  \*/
  `LINK_MISSING` = 1819109747,

/\*\*

- Indicates a newer version of the file exists on disk.
  \*/
  `LINK_OUT_OF_DATE` = 1819242340,

/\*\*

- Indicates a normal link.
  \*/
  NORMAL = 1852797549,
  }

/\*\*

- Choices for link resource rendition type.
  \*/
  declare enum LinkResourceRenditionType {
  /\*\*
  - The link resource uses its original rendition.
    \*/
    ACTUAL = 1282372201,

/\*\*

- The link resource uses FPO rendition.
  \*/
  FPO = 1281781871,
  }

/\*\*

- Choices for asset type.
  \*/
  declare enum AssetType {
  /\*\*
  - Catalogs the asset as an EPS asset.
    \*/
    `EPS_TYPE` = 1952400720,

/\*\*

- Catalogs the asset as a geometric page item asset.
  \*/
  `GEOMETRY_TYPE` = 1952409445,

/\*\*

- Catalogs the asset as an image asset.
  \*/
  `IMAGE_TYPE` = 1952409965,

/\*\*

- InDesign file asset.
  \*/
  `INDESIGN_FILE_TYPE` = 1952409956,

/\*\*

- Catalogs the asset as a page asset.
  \*/
  `PAGE_TYPE` = 1952411745,

/\*\*

- Catalogs the asset as a PDF asset.
  \*/
  `PDF_TYPE` = 1952403524,

/\*\*

- Structure asset.
  \*/
  `STRUCTURE_TYPE` = 1952412532,

/\*\*

- Catalogs the asset as a text asset.
  \*/
  `TEXT_TYPE` = 1952412773,
  }

/\*\*

- Choices for change type.
  \*/
  declare enum ChangeTypes {
  /\*\*
  - Deleted text change.
    \*/
    `DELETED_TEXT` = 1799644524,

/\*\*

- Added text change.
  \*/
  `INSERTED_TEXT` = 1799974515,

/\*\*

- Moved text change.
  \*/
  `MOVED_TEXT` = 1800236918,
  }

/\*\*

- Choices for type-on-a-path alignment and appearance.
  \*/
  declare enum TextPathEffects {
  /\*\*
  - Places each character baseline's center on the path while aligning each vertical edge with the path's center point.
    \*/
    `GRAVITY_PATH_EFFECT` = 1601201767,

/\*\*

- Places each character baseline's center parallel to the path tangent. This is the default effect.
  \*/
  `RAINBOW_PATH_EFFECT` = 1601201778,

/\*\*

- Keeps text character horizontal edges perfectly horizontal regardless of path shape.
  \*/
  `RIBBON_PATH_EFFECT` = 1601201715,
