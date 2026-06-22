# Indesign (part 12)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Delimiter selection uses the paragraph opening sentence or sentences. The first sentence is the text before the first period, question mark, or exclamation mark.
  \*/
  SENTENCE = 1380541555,

/\*\*

- Delimiter selection uses the first actual tab character. Note: the first tab stop is ignored. When the paragraph has no real tab character, the nested style continues to the paragraph end.
  \*/
  TABS = 1380541556,
  }

/\*\*

- Choices for the object that determines paragraph-rule-above width.
  \*/
  declare enum RuleWidth {
  /\*\*
  - Sets the rule width to the column width.
    \*/
    `COLUMN_WIDTH` = 1265399652,

/\*\*

- Sets the paragraph rule above to match the first text line width.
  \*/
  `TEXT_WIDTH` = 1886681207,
  }

/\*\*

- Text alignment choices.
  \*/
  declare enum Justification {
  /\*\*
  - Positions text away from the page binding spine.
    \*/
    `AWAY_FROM_BINDING_SIDE` = 1633772147,

/\*\*

- Places text on the center alignment.
  \*/
  `CENTER_ALIGN` = 1667591796,

/\*\*

- Justifies paragraph text and centers its final line.
  \*/
  `CENTER_JUSTIFIED` = 1667920756,

/\*\*

- Justifies all paragraph text, final line included.
  \*/
  `FULLY_JUSTIFIED` = 1718971500,

/\*\*

- Places text on the left alignment.
  \*/
  `LEFT_ALIGN` = 1818584692,

/\*\*

- Justifies paragraph text and places the final line at left.
  \*/
  `LEFT_JUSTIFIED` = 1818915700,

/\*\*

- Places text on the right alignment.
  \*/
  `RIGHT_ALIGN` = 1919379572,

/\*\*

- Justifies paragraph text and places the final line at right.
  \*/
  `RIGHT_JUSTIFIED` = 1919578996,

/\*\*

- Positions text toward the page or spread binding spine.
  \*/
  `TO_BINDING_SIDE` = 1630691955,
  }

/\*\*

- Choices for aligning single-word lines.
  \*/
  declare enum SingleWordJustification {
  /\*\*
  - Places the word on the center alignment.
    \*/
    `CENTER_ALIGN` = 1667591796,

/\*\*

- Applies full justification to the word.
  \*/
  `FULLY_JUSTIFIED` = 1718971500,

/\*\*

- Places the word on the left alignment.
  \*/
  `LEFT_ALIGN` = 1818584692,

/\*\*

- Places the word on the right alignment.
  \*/
  `RIGHT_ALIGN` = 1919379572,
  }

/\*\*

- Column and page break choices.
  \*/
  declare enum StartParagraph {
  /\*\*
  - Begins in the next open space.
    \*/
    ANYWHERE = 1851945579,

/\*\*

- Begins at the next column top.
  \*/
  `NEXT_COLUMN` = 1667396203,

/\*\*

- Begins at the next even-numbered page top.
  \*/
  `NEXT_EVEN_PAGE` = 1164993131,

/\*\*

- Begins at the top of the next threaded text frame.
  \*/
  `NEXT_FRAME` = 1313235563,

/\*\*

- Begins at the next odd-numbered page top.
  \*/
  `NEXT_ODD_PAGE` = 1332765291,

/\*\*

- Begins at the next page top.
  \*/
  `NEXT_PAGE` = 1885500011,
  }

/\*\*

- Orientation choices.
  \*/
  declare enum HorizontalOrVertical {
  /\*\*
  - Horizontal orientation mode.
    \*/
    HORIZONTAL = 1752134266,

/\*\*

- Vertical orientation mode.
  \*/
  VERTICAL = 1986359924,
  }

/\*\*

- Tab stop alignment choices.
  \*/
  declare enum TabStopAlignment {
  /\*\*
  - Center alignment.
    \*/
    `CENTER_ALIGN` = 1667591796,

/\*\*

- Lines up the chosen character on the tab stop.
  \*/
  `CHARACTER_ALIGN` = 1952604515,

/\*\*

- Left alignment.
  \*/
  `LEFT_ALIGN` = 1818584692,

/\*\*

- Right alignment.
  \*/
  `RIGHT_ALIGN` = 1919379572,
  }

/\*\*

- Choices for where the first text baseline starts.
  \*/
  declare enum FirstBaseline {
  /\*\*
  - Uses the font tallest-character ascent below the object top inset.
    \*/
    `ASCENT_OFFSET` = 1296135023,

/\*\*

- Places uppercase letter tops against the object top inset.
  \*/
  `CAP_HEIGHT` = 1296255087,

/\*\*

- Measures from the text baseline to the object top inset using text em-box height.
  \*/
  `EMBOX_HEIGHT` = 1296386159,

/\*\*

- Uses the minimum first baseline offset value for the text-baseline to object-top-inset distance.
  \*/
  `FIXED_HEIGHT` = 1313228911,

/\*\*

- Uses text leading as the baseline-to-top-inset distance.
  \*/
  `LEADING_OFFSET` = 1296852079,

/\*\*

- Places lowercase letter tops against the object top inset.
  \*/
  `X_HEIGHT` = 1299728495,
  }

/\*\*

- Text vertical-alignment choices.
  \*/
  declare enum VerticalJustification {
  /\*\*
  - Positions text at the object bottom.
    \*/
    `BOTTOM_ALIGN` = 1651471469,

/\*\*

- Centers text vertically inside the object.
  \*/
  `CENTER_ALIGN` = 1667591796,

/\*\*

- Distributes text lines vertically and evenly between the object top and bottom.
  \*/
  `JUSTIFY_ALIGN` = 1785951334,

/\*\*

- Positions text at the object top.
  \*/
  `TOP_ALIGN` = 1953460256,
  }

/\*\*

- Leading-type choices.
  \*/
  declare enum Leading {
  /\*\*
  - Applies automatic leading.
    \*/
    AUTO = 1635019116,
    }

/\*\*

- OpenType font figure-style choices.
  \*/
  declare enum OTFFigureStyle {
  /\*\*
  - Selects the font default figure style.
    \*/
    `DEFAULT_VALUE` = 1147563124,

/\*\*

- Selects proportional-width lining figures.
  \*/
  `PROPORTIONAL_LINING` = 1330932848,

/\*\*

- Selects proportional-width oldstyle figures.
  \*/
  `PROPORTIONAL_OLDSTYLE` = 1330933619,

/\*\*

- Selects monspaced lining figures.
  \*/
  `TABULAR_LINING` = 1330931316,

/\*\*

- Selects monospaced oldstyle figures.
  \*/
  `TABULAR_OLDSTYLE` = 1330933620,
  }

/\*\*

- Capitalization choices.
  \*/
  declare enum Capitalization {
  /\*\*
  - Selects all-uppercase letters.
    \*/
    `ALL_CAPS` = 1634493296,

/\*\*

- Selects OpenType small caps.
  \*/
  `CAP_TO_SMALL_CAP` = 1664250723,

/\*\*

- Leaves text capitalization unchanged.
  \*/
  NORMAL = 1852797549,

/\*\*

- Applies small caps to lowercase letters.
  \*/
  `SMALL_CAPS` = 1936548720,
  }

/\*\*

- Text position choices.
  \*/
  declare enum Position {
  /\*\*
  - Normal text position.
    \*/
    NORMAL = 1852797549,

/\*\*

- For OpenType fonts, reduces numeric text while keeping the main baseline. Note: numbers only.
  \*/
  `OT_DENOMINATOR` = 1884247140,

/\*\*

- For OpenType fonts, reduces numeric text and aligns character tops with primary text. Note: numbers only.
  \*/
  `OT_NUMERATOR` = 1884247150,

/\*\*

- For OpenType fonts, selects properly sized lowered glyphs when the font provides them.
  \*/
  `OT_SUBSCRIPT` = 1884247138,

/\*\*

- For OpenType fonts, selects properly sized raised glyphs when the font provides them.
  \*/
  `OT_SUPERSCRIPT` = 1884247155,

/\*\*

- Applies subscript positioning to text.
  \*/
  SUBSCRIPT = 1935831907,

/\*\*

- Applies superscript positioning to text.
  \*/
  SUPERSCRIPT = 1936749411,
  }

/\*\*

- Text frame content-type choices.
  \*/
  declare enum TextFrameContents {
  /\*\*
  - Populates the text frame with placeholder text.
    \*/
    `PLACEHOLDER_TEXT` = 1346925688,

/\*\*

- Populates the text frame with arabic placeholder text.
  \*/
  `PLACEHOLDER_TEXT_ARABIC` = 1346925665,

/\*\*

- Populates the text frame with cyrillic placeholder text.
  \*/
  `PLACEHOLDER_TEXT_CYRILLIC` = 1346925667,

/\*\*

- Populates the text frame with greek placeholder text.
  \*/
  `PLACEHOLDER_TEXT_GREEK` = 1346925671,

/\*\*

- Populates the text frame with hebrew placeholder text.
  \*/
  `PLACEHOLDER_TEXT_HEBREW` = 1346925672,
  }

/\*\*

- Special-character choices.
  \*/
  declare enum SpecialCharacters {
  /\*\*
  - Adds an arabic comma.
    \*/
    `ARABIC_COMMA` = 1396798051,

/\*\*

- Adds an arabic kashida.
  \*/
  `ARABIC_KASHIDA` = 1396798059,

/\*\*

- Adds an arabic question mark.
  \*/
  `ARABIC_QUESTION_MARK` = 1396797805,

/\*\*

- Adds an arabic semicolon.
  \*/
  `ARABIC_SEMICOLON` = 1396798307,

/\*\*

- Adds an automatic page number.
  \*/
  `AUTO_PAGE_NUMBER` = 1396797550,

/\*\*

- Adds a bullet character.
  \*/
  `BULLET_CHARACTER` = 1396862068,

/\*\*

- Adds a column break.
  \*/
  `COLUMN_BREAK` = 1396927554,

/\*\*

- Adds a copyright symbol.
  \*/
  `COPYRIGHT_SYMBOL` = 1396929140,

/\*\*

- Adds a degree symbol.
  \*/
  `DEGREE_SYMBOL` = 1396991858,

/\*\*

- Adds a discretionary hyphen.
  \*/
  `DISCRETIONARY_HYPHEN` = 1396983920,

/\*\*

- Adds a discretionary line break.
  \*/
  `DISCRETIONARY_LINE_BREAK` = 1397777484,

/\*\*

- Adds a dotted circle.
  \*/
  `DOTTED_CIRCLE` = 1399092323,

/\*\*

- Adds a double left quote.
  \*/
  `DOUBLE_LEFT_QUOTE` = 1396984945,

/\*\*

- Adds a double right quote.
  \*/
  `DOUBLE_RIGHT_QUOTE` = 1396986481,

/\*\*

- Adds a double straight quote.
  \*/
  `DOUBLE_STRAIGHT_QUOTE` = 1396986737,

/\*\*

- Adds an ellipsis character.
  \*/
  `ELLIPSIS_CHARACTER` = 1397518451,

/\*\*

- Adds an em dash.
  \*/
  `EM_DASH` = 1397058884,

/\*\*

- Adds an em space.
  \*/
  `EM_SPACE` = 1397058899,

/\*\*

- Adds an end nested style here character.
  \*/
  `END_NESTED_STYLE` = 1396855379,

/\*\*

- Adds an en dash.
  \*/
  `EN_DASH` = 1397059140,

/\*\*

- Adds an en space.
  \*/
  `EN_SPACE` = 1397059155,

/\*\*

- Adds a break to the next even page.
  \*/
  `EVEN_PAGE_BREAK` = 1397059650,

/\*\*

- Adds a figure space.
  \*/
  `FIGURE_SPACE` = 1397122899,

/\*\*

- Adds a fixed-width nonbreaking space.
  \*/
  `FIXED_WIDTH_NONBREAKING_SPACE` = 1399746146,

/\*\*

- Adds a flush space.
  \*/
  `FLUSH_SPACE` = 1397124179,

/\*\*

- Adds a footnote symbol.
  \*/
  `FOOTNOTE_SYMBOL` = 1399221837,

/\*\*

- Adds a forced line break.
  \*/
  `FORCED_LINE_BREAK` = 1397124194,

/\*\*

- Adds a frame break.
  \*/
  `FRAME_BREAK` = 1397125698,

/\*\*

- Adds a hair space.
  \*/
  `HAIR_SPACE` = 1397256787,

/\*\*

- Adds a hebrew geresh.
  \*/
  `HEBREW_GERESH` = 1397253989,

/\*\*

- Adds a hebrew gershayim.
  \*/
  `HEBREW_GERSHAYIM` = 1397254003,

/\*\*

- Adds a hebrew maqaf.
  \*/
  `HEBREW_MAQAF` = 1397252717,

/\*\*

- Adds a hebrew sof pasuk.
  \*/
  `HEBREW_SOF_PASUK` = 1397252723,

/\*\*

- Adds an indent to here character.
  \*/
  `INDENT_HERE_TAB` = 1397319796,

/\*\*

- Adds a left to right embedding mark.
  \*/
  `LEFT_TO_RIGHT_EMBEDDING` = 1399616101,

/\*\*

- Adds a left to right mark.
  \*/
  `LEFT_TO_RIGHT_MARK` = 1399616109,

/\*\*

- Adds a left to right override mark.
  \*/
  `LEFT_TO_RIGHT_OVERRIDE` = 1399616111,

/\*\*

- Adds the next page number.
  \*/
  `NEXT_PAGE_NUMBER` = 1397649518,

/\*\*

- Adds a nonbreaking hyphen.
  \*/
  `NONBREAKING_HYPHEN` = 1397645928,

/\*\*

- Adds a nonbreaking space.
  \*/
  `NONBREAKING_SPACE` = 1397645907,

/\*\*

- Adds a break to the next odd page.
  \*/
  `ODD_PAGE_BREAK` = 1397715010,

/\*\*

- Adds a page break.
  \*/
  `PAGE_BREAK` = 1397778242,

/\*\*

- Adds a paragraph symbol.
  \*/
  `PARAGRAPH_SYMBOL` = 1397776754,

/\*\*

- Adds a pop directional formatting mark.
  \*/
  `POP_DIRECTIONAL_FORMATTING` = 1399874662,

/\*\*

- Adds the previous page number.
  \*/
  `PREVIOUS_PAGE_NUMBER` = 1397780590,

/\*\*

- Adds a punctuation space.
  \*/
  `PUNCTUATION_SPACE` = 1397780051,

/\*\*

- Adds a quarter-width space.
  \*/
  `QUARTER_SPACE` = 1397847379,

/\*\*

- Adds a registered trademark.
  \*/
  `REGISTERED_TRADEMARK` = 1397904493,

/\*\*

- Adds a right indent tab.
  \*/
  `RIGHT_INDENT_TAB` = 1397909876,

/\*\*

- Adds a right to left embedding mark.
  \*/
  `RIGHT_TO_LEFT_EMBEDDING` = 1400007781,

/\*\*

- Adds a right to left mark.
  \*/
  `RIGHT_TO_LEFT_MARK` = 1400007789,

/\*\*

- Adds a right to left override mark.
  \*/
  `RIGHT_TO_LEFT_OVERRIDE` = 1400007791,

/\*\*

- Adds a section marker.
  \*/
  `SECTION_MARKER` = 1400073805,

/\*\*

- Adds a section symbol.
  \*/
  `SECTION_SYMBOL` = 1400073811,

/\*\*

- Adds a single left quote.
  \*/
  `SINGLE_LEFT_QUOTE` = 1397967985,

/\*\*

- Adds a single right quote.
  \*/
  `SINGLE_RIGHT_QUOTE` = 1397969521,

/\*\*

- Adds a single straight quote.
  \*/
  `SINGLE_STRAIGHT_QUOTE` = 1397969777,

/\*\*

- Adds a sixth-width space.
  \*/
  `SIXTH_SPACE` = 1397975379,

/\*\*

- Adds the specified text variable.
  \*/
  `TEXT_VARIABLE` = 1397781622,

/\*\*

- Adds a thin space.
  \*/
  `THIN_SPACE` = 1398042195,

/\*\*

- Adds a third-width space.
  \*/
  `THIRD_SPACE` = 1398040659,

/\*\*

- Adds a trademark symbol.
  \*/
  `TRADEMARK_SYMBOL` = 1398041963,

/\*\*

- Adds a zero width joiner.
  \*/
  `ZERO_WIDTH_JOINER` = 1400534890,

/\*\*

- Adds a zero-width non-joiner.
  \*/
  `ZERO_WIDTH_NONJOINER` = 1397780074,
  }

/\*\*

- Text case choices.
  \*/
  declare enum ChangecaseMode {
  /\*\*
  - Converts all letters to lowercase.
    \*/
    LOWERCASE = 1667460195,

/\*\*

- Capitalizes the first letter in each sentence.
  \*/
  SENTENCECASE = 1667461987,

/\*\*

- Capitalizes the first letter in every word.
  \*/
  TITLECASE = 1667462243,

/\*\*

- Converts all letters to uppercase.
  \*/
  UPPERCASE = 1667462499,
  }

/\*\*

- Binding-spine location within a spread.
  \*/
  declare enum BindingOptions {
  /\*\*
  - Selects the default binding side.
    \*/
    `DEFAULT_VALUE` = 1147563124,

/\*\*

- Assigns the page to the spread's binding-spine-left position.
  \*/
  `LEFT_ALIGN` = 1818584692,

/\*\*

- Assigns the page to the spread's binding-spine-right position.
  \*/
  `RIGHT_ALIGN` = 1919379572,
  }

/\*\*

- Page orientation choices.
  \*/
  declare enum PageOrientation {
  /\*\*
  - Landscape orientation.
    \*/
    LANDSCAPE = 2003395685,

/\*\*

- Portrait orientation.
  \*/
  PORTRAIT = 1751738216,
  }

/\*\*

- Zero-point placement choices.
  \*/
  declare enum RulerOrigin {
  /\*\*
  - Sets a separate horizontal-ruler zero point at each page top-left corner.
    \*/
    `PAGE_ORIGIN` = 1380143215,

/\*\*

- Sets zero at the left-most page top-left and at the binding-spine top. The horizontal ruler measures leftmost page to binding edge, then binding spine to the right-most page edge, and the zero point is locked against manual changes.
  \*/
  `SPINE_ORIGIN` = 1380143984,

/\*\*

- Sets zero at the spread top-left corner and lets ruler values continue across every spread page.
  \*/
  `SPREAD_ORIGIN` = 1380143983,
  }

/\*\*

- Measurement unit.
  \*/
  declare enum MeasurementUnits {
  /\*\*
  - Agate units.
    \*/
    AGATES = 2051106676,

/\*\*

- American point units.
  \*/
  `AMERICAN_POINTS` = 1514238068,

/\*\*

- Bai units.
  \*/
  BAI = 2051170665,

/\*\*

- Centimeter units.
  \*/
  CENTIMETERS = 2053336435,

/\*\*

- Cicero units.
  \*/
  CICEROS = 2053335395,

/\*\*

- Uses points for measurement and sets the point count between major tick marks on the chosen ruler. For details, see horizontal custom points and vertical custom points.
  \*/
  CUSTOM = 1131639917,

/\*\*

- Ha units.
  \*/
  HA = 1516790048,

/\*\*

- Inch units.
  \*/
  INCHES = 2053729891,

/\*\*

- Decimal-inch units.
  \*/
  `INCHES_DECIMAL` = 2053729892,

/\*\*

- Millimeter units.
  \*/
  MILLIMETERS = 2053991795,

/\*\*

- Mil units.
  \*/
  MILS = 2051893612,

/\*\*

- Pica units.
  \*/
  PICAS = 2054187363,

/\*\*

- Pixel units.
  \*/
  PIXELS = 2054187384,

/\*\*

- Point units.
  \*/
  POINTS = 2054188905,

/\*\*

- Q units.
  \*/
  Q = 2054255973,

/\*\*

- U units.
  \*/
  U = 2051691808,
  }

/\*\*

- Page binding placement.
  \*/
  declare enum PageBindingOptions {
  /\*\*
  - Selects default page binding.
    \*/
    `DEFAULT_VALUE` = 1147563124,

/\*\*

- Uses left-side page binding.
  \*/
  `LEFT_TO_RIGHT` = 1819570786,

/\*\*

- Uses right-side page binding.
  \*/
  `RIGHT_TO_LEFT` = 1920232546,
  }

/\*\*

- Baseline-grid offset zero point.
  \*/
  declare enum BaselineGridRelativeOption {
  /\*\*
  - Places the baseline-grid offset zero point at the top page margin.
    \*/
    `TOP_OF_MARGIN_OF_BASELINE_GRID_RELATIVE_OPTION` = 1162766189,

/\*\*

- Places the baseline-grid offset zero point at the page top.
  \*/
  `TOP_OF_PAGE_OF_BASELINE_GRID_RELATIVE_OPTION` = 1162766196,
  }

/\*\*

- Choices for binding-spine placement.
  \*/
  declare enum PageSideOptions {
  /\*\*
  - Identifies a page on the left side of the spread binding spine.
    \*/
    `LEFT_HAND` = 1818653800,

/\*\*

- Identifies a page on the right side of the spread binding spine.
  \*/
  `RIGHT_HAND` = 1919382632,

/\*\*

- Identifies a single-sided page.
  \*/
  `SINGLE_SIDED` = 1970496888,
  }

/\*\*

- Scaling choices.
  \*/
  declare enum WhenScalingOptions {
  /\*\*
  - Changes the item's transform scaling percentage
    \*/
    `ADJUST_SCALING_PERCENTAGE` = 1934587252,

/\*\*

- Scales the item's content
  \*/
  `APPLY_TO_CONTENT` = 1934192243,
  }

/\*\*

- Page color-label choices.
  \*/
  declare enum PageColorOptions {
  /\*\*
  - No color label.
    \*/
    NOTHING = 1851876449,

/\*\*

- Applies the color label from the page's master page.
  \*/
  `USE_MASTER_COLOR` = 1346594413,
  }

/\*\*

- Document-intent choices.
  \*/
  declare enum DocumentIntentOptions {
  /\*\*
  - Marks the document intent as mobile publishing.
    \*/
    `MOBILE_INTENT` = 1768846445,

/\*\*

- Marks the document intent as print output.
  \*/
  `PRINT_INTENT` = 1768846448,

/\*\*

- Marks the document intent as web output.
  \*/
  `WEB_INTENT` = 1768846455,
  }

/\*\*

- Choices for page layout-rule settings.
  \*/
  declare enum LayoutRuleOptions {
  /\*\*
  - Uses guide slicing while resizing objects with the page.
    \*/
    `GUIDE_BASED` = 1280329538,

/\*\*

- Moves and resizes page objects while the page resizes.
  \*/
  `OBJECT_BASED` = 1280331586,

/\*\*

- Leaves the resizing page without a layout rule.
  \*/
  OFF = 1330005536,

/\*\*

- Keeps the page layout-rule setting already present; used when creating alternate layouts.
  \*/
  `PRESERVE_EXISTING` = 1280331890,

/\*\*

- Recenters objects while the page resizes.
  \*/
  RECENTER = 1280332387,

/\*\*

- Scales page objects while the page resizes.
  \*/
  SCALE = 1280332643,

/\*\*

- Uses the layout rule from the page's applied master page.
  \*/
  `USE_MASTER` = 1280333133,
  }

/\*\*

- Modes for blending nearby snapshots into the new layout according to size and shape.
  \*/
  declare enum SnapshotBlendingModes {
  /\*\*
  - Blends up to three nearest snapshots, including snapshots outside the new layout class.
    \*/
    `FULL_SNAPSHOT_BLENDING` = 1399735925,

/\*\*

- Disables layout snapshot influence entirely.
  \*/
  `IGNORE_LAYOUT_SNAPSHOTS` = 1399736679,

/\*\*

- Restricts blending to layout snapshots in the same class as the new layout.
  \*/
  `LIMITED_SNAPSHOT_BLENDING` = 1399737449,

/\*\*

- Chooses the saved layout snapshot with the closest size and shape for the new layout.
  \*/
  `USE_NEAREST_SNAPSHOT` = 1399737957,
  }

/\*\*

- Color-space choices used when an EPS export needs color representation.
  \*/
  declare enum EPSColorSpace {
  /\*\*
  - Produces a separable output file with every color value mapped into the CYMK process-ink gamut.
    \*/
    CMYK = 1129142603,

/\*\*

- Turns all colors into high-quality grayscale imagery, with resulting gray levels derived from source-object luminosity.
  \*/
  GRAY = 1766290041,

/\*\*

- Applies PostScript color management, including profile handling.
  \*/
  `POSTSCRIPT_COLOR_MANAGEMENT` = 1164208483,

/\*\*

- Encodes color values in RGB, which suits documents intended for screen display.
  \*/
  RGB = 1666336578,

/\*\*

- Keeps every image in the color space it already uses.
  \*/
  `UNCHANGED_COLOR_SPACE` = 1970161251,
  }

/\*\*

- File-format choices for preview images.
  \*/
  declare enum PreviewTypes {
  /\*\*
  - Omits saving any preview image.
    \*/
    NONE = 1852796517,

/\*\*

- Stores the preview as TIFF.
  \*/
  `TIFF_PREVIEW` = 1164997734,
  }

/\*\*

- Font-embedding choices for an EPS export.
  \*/
  declare enum FontEmbedding {
  /\*\*
  - Places every font in the output once for each page.
    \*/
    COMPLETE = 2003332197,

/\*\*

- Includes font references only.
  \*/
  NONE = 1852796517,

/\*\*

- Includes just the document's used characters (glyphs), downloaded once on each page.
  \*/
  SUBSET = 1768842098,
  }

/\*\*

- Choices controlling page scaling.
  \*/
  declare enum ScaleModes {
  /\*\*
  - Fits the page to the paper size. Note: only valid when tile is false.
    \*/
    `SCALE_TO_FIT` = 1935897702,

/\*\*

- Adjusts both the page width and page height.
  \*/
  `SCALE_WIDTH_HEIGHT` = 1935898745,
  }

/\*\*

- Layer-selection choices for print output
  \*/
  declare enum PrintLayerOptions {
  /\*\*
  - Sends every layer to print.
    \*/
    `ALL_LAYERS` = 1634495564,

/\*\*

- Prints layers that are visible.
  \*/
  `VISIBLE_LAYERS` = 1986622284,

/\*\*

- Prints only layers that satisfy both visible and printable states.
  \*/
  `VISIBLE_PRINTABLE_LAYERS` = 1987080780,
  }

/\*\*

- Tool box tool enumeration.
  \*/
  declare enum UITools {
  /\*\*
  - Add anchor point tool
    \*/
    `ADD_ANCHOR_POINT` = 1633767540,

/\*\*

- Convert direction point tool
  \*/
  `CONVERT_DIRECTION_POINT` = 1667518580,

/\*\*

- Delete anchor point tool
  \*/
  `DELETE_ANCHOR_POINT` = 1684099188,

/\*\*

- Direct selection tool
  \*/
  `DIRECT_SELECTION_TOOL` = 1685277812,

/\*\*

- Ellipse frame tool
  \*/
  `ELLIPSE_FRAME_TOOL` = 1701205100,

/\*\*

- Ellipse tool
  \*/
  `ELLIPSE_TOOL` = 1701598316,

/\*\*

- Erase tool
  \*/
  `ERASE_TOOL` = 1701991269,

/\*\*

- Eye dropper tool
  \*/
  `EYE_DROPPER_TOOL` = 1701074028,

/\*\*

- Free transform tool
  \*/
  `FREE_TRANSFORM_TOOL` = 1718899820,

/\*\*

- Gap tool
  \*/
  `GAP_TOOL` = 1734430836,

/\*\*

- Gradient feather tool
  \*/
  `GRADIENT_FEATHER_TOOL` = 1734759532,

/\*\*

- Gradient swatch tool
  \*/
  `GRADIENT_SWATCH_TOOL` = 1735611500,

/\*\*

- Hand tool
  \*/
  `HAND_TOOL` = 1751209068,

/\*\*

- Line tool
  \*/
  `LINE_TOOL` = 1819169900,

/\*\*

- Measure tool
  \*/
  `MEASURE_TOOL` = 1835357292,

/\*\*

- Motion path tool
  \*/
  `MOTION_PATH_TOOL` = 1836078188,

/\*\*

- No selection is active
  \*/
  NONE = 1852796517,

/\*\*

- Note tool
  \*/
  `NOTE_TOOL` = 1852789868,

/\*\*

- Page tool
  \*/
  `PAGE_TOOL` = 1936741484,

/\*\*

- Pencil tool
  \*/
  `PENCIL_TOOL` = 1886274412,

/\*\*

- Pen tool
  \*/
  `PEN_TOOL` = 1885687412,

/\*\*

- Place cursor tool assigned after importing through the Place command
  \*/
  `PLACE_CURSOR_TOOL` = 1885557868,

/\*\*

- Polygon frame tool
  \*/
  `POLYGON_FRAME_TOOL` = 1885754476,

/\*\*

- Polygon tool
  \*/
  `POLYGON_TOOL` = 1886147692,

/\*\*

- Rectangle frame tool
  \*/
  `RECTANGLE_FRAME_TOOL` = 1919308908,

/\*\*

- Rectangle tool
  \*/
  `RECTANGLE_TOOL` = 1919243372,

/\*\*

- Rotate tool
  \*/
  `ROTATE_TOOL` = 1919898732,

/\*\*

- Scale tool
  \*/
  `SCALE_TOOL` = 1935889516,

/\*\*

- Scissors tool
  \*/
  `SCISSORS_TOOL` = 1935891060,

/\*\*

- Selection tool
  \*/
  `SELECTION_TOOL` = 1936018548,

/\*\*

- Shear tool
  \*/
  `SHEAR_TOOL` = 1936217196,

/\*\*

- Smooth tool
  \*/
  `SMOOTH_TOOL` = 1936544872,

/\*\*

- Table creation tool
  \*/
  `TABLE_TOOL` = 1952601196,

/\*\*

- Type on a path tool
  \*/
  `TYPE_ON_PATH_TOOL` = 1953452148,

/\*\*

- Type tool
  \*/
  `TYPE_TOOL` = 1954107508,

/\*\*

- Zoom tool
  \*/
  `ZOOM_TOOL` = 2053985388,
  }
