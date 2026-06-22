# Indesign (part 20)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Choices for printing page sequences.
  \*/
  declare enum Sequences {
  /\*\*
  - Prints every page.
    \*/
    ALL = 1634495520,

/\*\*

- Prints only pages with even numbers.
  \*/
  EVEN = 1702258030,

/\*\*

- Prints only pages with odd numbers.
  \*/
  ODD = 1868850208,
  }

/\*\*

- Source choices for the color-management system.
  \*/
  declare enum SourceSpaces {
  /\*\*
  - Uses the proof color space.
    \*/
    `PROOF_SPACE` = 1886548848,

/\*\*

- Uses the document color space.
  \*/
  `USE_DOCUMENT` = 1967419235,
  }

/\*\*

- Choices for how many thumbnails appear on each page.
  \*/
  declare enum ThumbsPerPage {
  /\*\*
  - Fits one row containing two thumbnails on the page.
    \*/
    K1X2 = 1949399090,

/\*\*

- Lays out two by two.
  \*/
  K2X2 = 1949464626,

/\*\*

- Lays out three by three.
  \*/
  K3X3 = 1949530163,

/\*\*

- Lays out four by four.
  \*/
  K4X4 = 1949595700,

/\*\*

- Lays out five by five.
  \*/
  K5X5 = 1949661237,

/\*\*

- Lays out six by six.
  \*/
  K6X6 = 1949726774,

/\*\*

- Lays out seven by seven.
  \*/
  K7X7 = 1949792311,
  }

/\*\*

- Tiling type choices.
  \*/
  declare enum TilingTypes {
  /\*\*
  - Computes the needed tile count automatically, including overlap. For information, see tiling overlap.
    \*/
    AUTO = 1635019116,

/\*\*

- Raises overlap as needed so the rightmost tiles end at the document page's right edge and the bottommost tiles end at its bottom edge. For information, see tiling overlap.
  \*/
  `AUTO_JUSTIFIED` = 1634366324,

/\*\*

- Prints one tile with its upper-left corner placed at the rulers' zero point.
  \*/
  MANUAL = 1835955308,
  }

/\*\*

- Trapping choices.
  \*/
  declare enum Trapping {
  /\*\*
  - Adobe in-RIP trapping.
    \*/
    `ADOBE_INRIP` = 1919512660,

/\*\*

- Built-in application trapping.
  \*/
  `APPLICATION_BUILTIN` = 1114199152,

/\*\*

- Disables trapping.
  \*/
  OFF = 1330005536,
  }

/\*\*

- Ink trapping type choices.
  \*/
  declare enum InkTypes {
  /\*\*
  - Intended for traditional process inks and most spot inks.
    \*/
    NORMAL = 1852797549,

/\*\*

- For heavy, nontransparent inks where underlying colors should not trap, while edge trapping still can occur. Best for metallic inks.
  \*/
  OPAQUE = 1769230192,

/\*\*

- For heavy, nontransparent inks where underlying colors should not trap, while edge trapping still can occur. Best for inks that interact poorly with other inks.
  \*/
  `OPAQUE_IGNORE` = 1769228647,

/\*\*

- For clear inks that require underlying items to trap. Best for varnishes and dieline inks.
  \*/
  TRANSPARENT = 1769231474,
  }

/\*\*

- Printer preset choices.
  \*/
  declare enum PrinterPresetTypes {
  /\*\*
  - Custom printer preset.
    \*/
    CUSTOM = 1131639917,

/\*\*

- Default printer preset.
  \*/
  `DEFAULT_VALUE` = 1147563124,
  }

/\*\*

- Color-rendering dictionary (CRD) selection.
  \*/
  declare enum ColorRenderingDictionary {
  /\*\*
  - Selects the default CRD.
    \*/
    `DEFAULT_VALUE` = 1147563124,

/\*\*

- Selects the document's CRD.
  \*/
  `USE_DOCUMENT` = 1967419235,

/\*\*

- Selects the working CRD.
  \*/
  WORKING = 1466921579,
  }

/\*\*

- Page range choices.
  \*/
  declare enum PageRange {
  /\*\*
  - Prints or exports every page in the document.
    \*/
    `ALL_PAGES` = 1886547553,

/\*\*

- Exports selected items from the document.
  \*/
  `SELECTED_ITEMS` = 1886547571,
  }

/\*\*

- Paper size choices.
  \*/
  declare enum PaperSize {
  /\*\*
  - Automatic
    \*/
    AUTO = 1635019116,
    }

/\*\*

- PPD choices.
  \*/
  declare enum PPDValues {
  /\*\*
  - Device-independent.
    \*/
    `DEVICE_INDEPENDENT` = 1684367716,
    }

/\*\*

- Color profile choices.
  \*/
  declare enum Profile {
  /\*\*
  - Selects no CMS profile.
    \*/
    `NO_CMS` = 1970499183,

/\*\*

- Selects the PostScript CMS profile.
  \*/
  `POSTSCRIPT_CMS` = 1970303843,

/\*\*

- Selects the document profile.
  \*/
  `USE_DOCUMENT` = 1967419235,

/\*\*

- Selects the working profile.
  \*/
  WORKING = 1466921579,
  }

/\*\*

- Composite gray ink-screening choices for PostScript or PDF output.
  \*/
  declare enum Screeening {
  /\*\*
  - Selects screening with custom ink angle and frequency values. For information, see composite angle and composite frequency.
    \*/
    CUSTOM = 1131639917,

/\*\*

- Selects default screening settings.
  \*/
  `DEFAULT_VALUE` = 1147563124,
  }

/\*\*

- Paper size choices.
  \*/
  declare enum PaperSizes {
  /\*\*
  - Allows a custom paper size to be defined. Note: Custom paper sizes are not supported by every printer.
    \*/
    CUSTOM = 1131639917,

/\*\*

- Lets the printer driver determine the paper size.
  \*/
  `DEFINED_BY_DRIVER` = 1347634290,
  }

/\*\*

- Printer choices.
  \*/
  declare enum Printer {
  /\*\*
  - Prints to a PostScript file.
    \*/
    `POSTSCRIPT_FILE` = 1886611052,
    }

/\*\*

- Trap placement choices between vector objects and bitmap images.
  \*/
  declare enum TrapImagePlacementTypes {
  /\*\*
  - Builds a trap spanning the edge shared by vector objects and bitmap images.
    \*/
    `CENTER_EDGES` = 1953522542,

/\*\*

- Makes vector objects overlap adjacent images.
  \*/
  CHOKE = 1953522536,

/\*\*

- Makes bitmap images overlap adjoining objects.
  \*/
  `IMAGES_OVER_SPREAD` = 1953526640,

/\*\*

- Uses the same trapping rules applied elsewhere in the document. Note: When trapping an object to a photograph, this can create visibly uneven edges as the trap shifts across the edge.
  \*/
  `IMAGE_NEUTRAL_DENSITY` = 1953525348,
  }

/\*\*

- Shape choices for intersections in three-way traps.
  \*/
  declare enum TrapEndTypes {
  /\*\*
  - Shapes the trap end so it stays away from the intersecting object.
    \*/
    `MITER_TRAP_ENDS` = 1953525093,

/\*\*

- Reshapes the trap from the lightest neutral density object so it wraps around the point where all three objects meet.
  \*/
  `OVERLAP_TRAP_ENDS` = 1953525612,
  }

/\*\*

- EPS image-data export choices.
  \*/
  declare enum EPSImageData {
  /\*\*
  - Exports image data at high resolution. Note: Use this when the file is headed to a high-resolution output device.
    \*/
    `ALL_IMAGE_DATA` = 1853058416,

/\*\*

- Exports placed bitmap images only as screen-resolution versions (72 dpi). Note: Use this with OPI image replacement or for files intended for on-screen viewing.
  \*/
  `PROXY_IMAGE_DATA` = 1819243130,
  }

/\*\*

- Booklet type choices.
  \*/
  declare enum BookletTypeOptions {
  /\*\*
  - Consecutive imposition, four up.
    \*/
    `FOUR_UP_CONSECUTIVE` = 1110721363,

/\*\*

- Consecutive imposition, three up.
  \*/
  `THREE_UP_CONSECUTIVE` = 1110655827,

/\*\*

- Consecutive imposition, two up.
  \*/
  `TWO_UP_CONSECUTIVE` = 1110590291,

/\*\*

- Perfect-bound imposition, two up.
  \*/
  `TWO_UP_PERFECT_BOUND` = 1110593602,

/\*\*

- Saddle-stitch imposition, two up.
  \*/
  `TWO_UP_SADDLE_STITCH` = 1110594387,
  }

/\*\*

- Signature size choices.
  \*/
  declare enum SignatureSizeOptions {
  /\*\*
  - Signature size set to 12.
    \*/
    `SIGNATURE_SIZE_12` = 1112748338,

/\*\*

- Signature size set to 16.
  \*/
  `SIGNATURE_SIZE_16` = 1112748342,

/\*\*

- Signature size set to 32.
  \*/
  `SIGNATURE_SIZE_32` = 1112748850,

/\*\*

- Signature size set to 4.
  \*/
  `SIGNATURE_SIZE_4` = 1112748084,

/\*\*

- Signature size set to 8.
  \*/
  `SIGNATURE_SIZE_8` = 1112748088,
  }

/\*\*

- Controls for document print UI.
  \*/
  declare enum DocumentPrintUiOptions {
  /\*\*
  - Suppresses the file save dialog during printing.
    \*/
    `SUPPRESS_FILE_SAVE_DIALOG` = 1936089444,

/\*\*

- Suppresses the print dialog.
  \*/
  `SUPPRESS_PRINT_DIALOG` = 1936745575,

/\*\*

- Suppresses the progress bar during printing.
  \*/
  `SUPPRESS_PRINT_PROGRESS` = 1936748659,

/\*\*

- Suppresses warning dialogs during printing.
  \*/
  `SUPPRESS_PRINT_WARNINGS` = 1936750450,
  }

/\*\*

- Note background color choices.
  \*/
  declare enum NoteBackgrounds {
  /\*\*
  - Selects the galley background color.
    \*/
    `GALLEY_BACKGROUND_COLOR` = 1699168839,

/\*\*

- Selects the note color.
  \*/
  `USE_NOTE_COLOR` = 1700020807,
  }

/\*\*

- Note color choices.
  \*/
  declare enum NoteColorChoices {
  /\*\*
  - Selects the note color.
    \*/
    `USE_NOTE_PREF_COLOR` = 1700089923,

/\*\*

- Selects the color assigned to the user.
  \*/
  `USE_USER_COLOR` = 1700091203,
  }

/\*\*

- Changed-text marking choices.
  \*/
  declare enum ChangeMarkings {
  /\*\*
  - Leaves changed text unmarked.
    \*/
    NONE = 1852796517,

/\*\*

- Draws an outline around changed text.
  \*/
  OUTLINE = 1869900910,

/\*\*

- Marks changed text with strikethrough.
  \*/
  STRIKETHROUGH = 1699968114,

/\*\*

- Marks changed text with a single underline.
  \*/
  `UNDERLINE_SINGLE` = 1700097636,
  }

/\*\*

- Change bar location choices.
  \*/
  declare enum ChangebarLocations {
  /\*\*
  - Places change bars in the left margin.
    \*/
    `LEFT_ALIGN` = 1818584692,

/\*\*

- Places change bars in the right margin.
  \*/
  `RIGHT_ALIGN` = 1919379572,
  }

/\*\*

- Color choices for changed text.
  \*/
  declare enum ChangeTextColorChoices {
  /\*\*
  - Changed text uses the color configured in track changes preferences. Related topics: text color for added text, text color for deleted text, or text color for moved text.
    \*/
    `CHANGE_USES_CHANGE_PREF_COLOR` = 1700098147,

/\*\*

- Changed text uses the same color as galley text.
  \*/
  `CHANGE_USES_GALLEY_TEXT_COLOR` = 1700095843,
  }

/\*\*

- Background color choices for changed text.
  \*/
  declare enum ChangeBackgroundColorChoices {
  /\*\*
  - Changed text uses the background color configured in track changes preferences. Related topics: background color for added text, background color for deleted text, or background color for moved text.
    \*/
    `CHANGE_BACKGROUND_USES_CHANGE_PREF_COLOR` = 1700098146,

/\*\*

- Changed text uses the same background color as the galley.
  \*/
  `CHANGE_BACKGROUND_USES_GALLEY_BACKGROUND_COLOR` = 1700095842,

/\*\*

- Changed text uses the color assigned to the current user for its background.
  \*/
  `CHANGE_BACKGROUND_USES_USER_COLOR` = 1700099426,
  }

/\*\*

- Lock state choices.
  \*/
  declare enum LockStateValues {
  /\*\*
  - Story status is checked in.
    \*/
    `CHECKED_IN_STORY` = 1112695657,

/\*\*

- Story status is checked out.
  \*/
  `CHECKED_OUT_STORY` = 1112695663,

/\*\*

- Story status is embedded.
  \*/
  `EMBEDDED_STORY` = 1112696173,

/\*\*

- Story status is locked.
  \*/
  `LOCKED_STORY` = 1112697963,

/\*\*

- Story file status is missing.
  \*/
  `MISSING_LOCK_STATE` = 1112698227,

/\*\*

- The stories have mixed lock states.
  \*/
  `MIXED_LOCK_STATE` = 1112698232,

/\*\*

- No lock state.
  \*/
  NONE = 1852796517,

/\*\*

- Story status is unmanaged.
  \*/
  `UNMANAGED_STORY` = 1112700269,
  }

/\*\*

- Color space choices used to represent color in an exported JPEG.
  \*/
  declare enum JpegColorSpaceEnum {
  /\*\*
  - Represents every color value in the CMYK color space.
    \*/
    CMYK = 1129142603,

/\*\*

- Converts all color values into high-quality black-and-white images. Gray levels in converted objects represent the original objects' luminosity.
  \*/
  GRAY = 1766290041,

/\*\*

- Represents every color value in the RGB color space. Best suited for documents intended for on-screen viewing.
  \*/
  RGB = 1666336578,
  }

/\*\*

- Page export choices.
  \*/
  declare enum ExportRangeOrAllPages {
  /\*\*
  - Exports every page.
    \*/
    `EXPORT_ALL` = 1785742657,

/\*\*

- Exports the page range named in the page string property.
  \*/
  `EXPORT_RANGE` = 1785742674,
  }

/\*\*

- Records selected for merge.
  \*/
  declare enum RecordSelection {
  /\*\*
  - Merges every record.
    \*/
    `ALL_RECORDS` = 1684881778,

/\*\*

- Merges the specified record.
  \*/
  `ONE_RECORD` = 1684885362,

/\*\*

- Merges every record in the specified range.
  \*/
  RANGE = 1684886130,
  }

/\*\*

- Record arrangement order in the target document.
  \*/
  declare enum ArrangeBy {
  /\*\*
  - Orders records by column.
    \*/
    `COLUMNS_FIRST` = 1684882278,

/\*\*

- Orders records by row.
  \*/
  `ROWS_FIRST` = 1684886118,
  }

/\*\*

- Records-per-page choices.
  \*/
  declare enum RecordsPerPage {
  /\*\*
  - Places as many records on a page as will fit.
    \*/
    `MULTIPLE_RECORD` = 1684884850,

/\*\*

- Places each record on a separate new page.
  \*/
  `SINGLE_RECORD` = 1684886386,
  }

/\*\*

- Choices for fitting content into a frame.
  \*/
  declare enum Fitting {
  /\*\*
  - Uses Adobe Sensei to select the best content crop region for the frame. Note: Frame size is preserved, content size may scale, and centerImage property is turned off when this fitting is set.
    \*/
    `CONTENT_AWARE_FITTING` = 1684882241,

/\*\*

- Scales content to fill the frame while maintaining content proportions. If content and frame proportions differ, the frame bounding box hides some content.
  \*/
  `FILL_PROPORTIONAL` = 1684883056,

/\*\*

- Scales content to fit the frame. Note: Content with a different size than the frame appears stretched or squeezed.
  \*/
  `FIT_CONTENT_TO_FRAME` = 1684883043,

/\*\*

- Changes the frame size so it fits the content.
  \*/
  `FIT_FRAME_TO_CONTENT` = 1684883046,

/\*\*

- Applies frame fitting from the existing setting on the original frame.
  \*/
  `HONOUR_EXISTING_STYLE` = 1684883539,

/\*\*

- Keeps the original sizes of both the frame and the content. Note: Content larger than the frame is hidden along the edges.
  \*/
  `PRESERVE_SIZES` = 1684885619,

/\*\*

- Scales content to fit the frame while keeping content proportions. If their proportions differ, empty space appears inside the frame.
  \*/
  PROPORTIONAL = 1684885618,
  }

/\*\*

- Data type choices for data merge fields.
  \*/
  declare enum SourceFieldType {
  /\*\*
  - The field can populate a data merge image placeholder.
    \*/
    `IMAGE_FIELD` = 1684883814,

/\*\*

- The field can populate a data merge QR code placeholder.
  \*/
  `QRCODE_FIELD` = 1684885862,

/\*\*

- The field can populate a data merge text placeholder.
  \*/
  `TEXT_FIELD` = 1684886630,
  }

/\*\*

- List type choices.
  \*/
  declare enum ListType {
  /\*\*
  - Bulleted-list mode.
    \*/
    `BULLET_LIST` = 1280598644,

/\*\*

- List formatting disabled.
  \*/
  `NO_LIST` = 1280601711,

/\*\*

- Numbered-list mode.
  \*/
  `NUMBERED_LIST` = 1280601709,
  }

/\*\*

- Bullet character-type choices.
  \*/
  declare enum BulletCharacterType {
  /\*\*
  - Glyph together with font.
    \*/
    `GLYPH_WITH_FONT` = 1111713638,

/\*\*

- Unicode without font.
  \*/
  `UNICODE_ONLY` = 1111717231,

/\*\*

- Unicode together with font.
  \*/
  `UNICODE_WITH_FONT` = 1111717222,
  }

/\*\*

- Numbering style choices.
  \*/
  declare enum NumberingStyle {
  /\*\*
  - Arabic numbering.
    \*/
    ARABIC = 1298231906,

/\*\*

- Selects Arabic Abjad numbering.
  \*/
  `ARABIC_ABJAD` = 1296130410,

/\*\*

- Selects Arabic Alif Ba Tah numbering.
  \*/
  `ARABIC_ALIF_BA_TAH` = 1296130420,

/\*\*

- Adds double leading zeros.
  \*/
  `DOUBLE_LEADING_ZEROS` = 1296329850,

/\*\*

- Adds no characters.
  \*/
  `FORMAT_NONE` = 1701733998,

/\*\*

- Selects Hebrew Biblical numbering.
  \*/
  `HEBREW_BIBLICAL` = 1296589410,

/\*\*

- Selects Hebrew Non Standard numbering.
  \*/
  `HEBREW_NON_STANDARD` = 1296589422,

/\*\*

- Kanji numbering.
  \*/
  KANJI = 1296788073,

/\*\*

- Modern Katakana sequence (a, i, u, e, o...).
  \*/
  `KATAKANA_MODERN` = 1265920877,

/\*\*

- Traditional Katakana sequence (i, ro, ha, ni...).
  \*/
  `KATAKANA_TRADITIONAL` = 1265920884,

/\*\*

- Lowercase letter numbering.
  \*/
  `LOWER_LETTERS` = 1296855660,

/\*\*

- Lowercase Roman numbering.
  \*/
  `LOWER_ROMAN` = 1297247596,

/\*\*

- Adds single leading zeros.
  \*/
  `SINGLE_LEADING_ZEROS` = 1297312890,

/\*\*

- Adds triple leading zeros.
  \*/
  `TRIPLE_LEADING_ZEROS` = 1297378426,

/\*\*

- Uppercase letter numbering.
  \*/
  `UPPER_LETTERS` = 1296855669,

/\*\*

- Uppercase Roman numbering.
  \*/
  `UPPER_ROMAN` = 1297247605,
  }

/\*\*

- Restart numbering choices.
  \*/
  declare enum RestartPolicy {
  /\*\*
  - Restarts numbering after a specified numbering level.
    \*/
    `AFTER_SPECIFIC_LEVEL` = 1701737324,

/\*\*

- Restarts numbering after any preceding higher numbering level.
  \*/
  `ANY_PREVIOUS_LEVEL` = 1701732720,

/\*\*

- Restarts numbering after any level within a range of numbering levels.
  \*/
  `RANGE_OF_LEVELS` = 1701737068,
  }

/\*\*

- List alignment choices.
  \*/
  declare enum ListAlignment {
  /\*\*
  - Centers the alignment.
    \*/
    `CENTER_ALIGN` = 1667591796,

/\*\*

- Aligns to the left.
  \*/
  `LEFT_ALIGN` = 1818584692,

/\*\*

- Aligns to the right.
  \*/
  `RIGHT_ALIGN` = 1919379572,
  }

/\*\*

- Chapter number source choices.
  \*/
  declare enum ChapterNumberSources {
  /\*\*
  - Continues the chapter number from the previous document.
    \*/
    `CONTINUE_FROM_PREVIOUS_DOCUMENT` = 1668178800,

/\*\*

- Reuses the previous document's chapter number.
  \*/
  `SAME_AS_PREVIOUS_DOCUMENT` = 1668182896,

/\*\*

- Chapter number supplied by the user.
  \*/
  `USER_DEFINED` = 1668183396,
  }

/\*\*

- Custom Layout Type choices.
  \*/
  declare enum CustomLayoutTypeEnum {
  /\*\*
  - Alignment and spacing layout.
    \*/
    `ALIGNMENT_AND_SPACING` = 1097618288,

/\*\*

- Left-floating layout.
  \*/
  `FLOAT_LEFT` = 1181502565,

/\*\*

- Right-floating layout.
  \*/
  `FLOAT_RIGHT` = 1181504105,
  }

/\*\*

- Export choices for assignment files.
  \*/
  declare enum AssignmentExportOptions {
  /\*\*
  - Exports only spreads that contain assigned frames.
    \*/
    `ASSIGNED_SPREADS` = 1098073459,

/\*\*

- Exports frames without exporting their content.
  \*/
  `EMPTY_FRAMES` = 1098073446,

/\*\*

- Exports the whole document.
  \*/
  EVERYTHING = 1098073441,
  }

/\*\*

- Assignment status choices.
  \*/
  declare enum AssignmentStatus {
  /\*\*
  - Assignment file status is missing.
    \*/
    `ASSIGNMENT_FILE_MISSING` = 1095126387,

/\*\*

- The assignment has changed and needs an update.
  \*/
  `ASSIGNMENT_OUT_OF_DATE` = 1095724868,

/\*\*

- The assignment has not changed.
  \*/
  `ASSIGNMENT_UP_TO_DATE` = 1096119364,
  }

/\*\*

- Display-performance settings used while scrolling.
  \*/
  declare enum PanningTypes {
  /\*\*
  - During scrolling, newly revealed images are greeked until mouse release; display quality and performance are both medium.
    \*/
    `GREEK_IMAGES` = 1699111248,

/\*\*

- During scrolling, newly revealed images and text are greeked until mouse release; display quality is highest and performance slowest.
  \*/
  `GREEK_IMAGES_AND_TEXT` = 1699639120,

/\*\*

- During scrolling, images and text are not greeked; display quality is lowest and performance fastest.
  \*/
  `NO_GREEKING` = 1699116368,
  }

/\*\*

- Choices for aligning or distributing objects.
  \*/
  declare enum AlignDistributeBounds {
  /\*\*
  - Aligns or distributes relative to object bounds.
    \*/
    `ITEM_BOUNDS` = 1416587604,

/\*\*

- Aligns or distributes relative to a key object.
  \*/
  `KEY_OBJECT` = 1699439993,

/\*\*

- Aligns or distributes relative to page margins.
  \*/
  `MARGIN_BOUNDS` = 1416588609,

/\*\*

- Aligns or distributes relative to page bounds.
  \*/
  `PAGE_BOUNDS` = 1416589377,

/\*\*

- Aligns or distributes relative to spread bounds.
  \*/
  `SPREAD_BOUNDS` = 1416590160,
  }

/\*\*

- Choices for aligning objects.
  \*/
  declare enum AlignOptions {
  /\*\*
  - Aligns the objects' bottom edges.
    \*/
    `BOTTOM_EDGES` = 1114916196,

/\*\*

- Aligns the objects' horizontal centers.
  \*/
  `HORIZONTAL_CENTERS` = 1215257187,

/\*\*

- Aligns the objects' left edges.
  \*/
  `LEFT_EDGES` = 1281770852,

/\*\*

- Aligns the objects' right edges.
  \*/
  `RIGHT_EDGES` = 1383351652,

/\*\*

- Aligns the objects' top edges.
  \*/
  `TOP_EDGES` = 1416643940,

/\*\*

- Aligns the objects' vertical centers.
  \*/
  `VERTICAL_CENTERS` = 1449481315,
  }

/\*\*

- Choices for distributing objects.
  \*/
  declare enum DistributeOptions {
  /\*\*
  - Distributes using the objects' bottom edges.
    \*/
    `BOTTOM_EDGES` = 1114916196,

/\*\*

- Distributes using the objects' horizontal centers.
  \*/
  `HORIZONTAL_CENTERS` = 1215257187,

/\*\*

- Distributes using horizontal object spacing.
  \*/
  `HORIZONTAL_SPACE` = 1215257203,

/\*\*

- Distributes using the objects' left edges.
  \*/
  `LEFT_EDGES` = 1281770852,

/\*\*

- Distributes using the objects' right edges.
  \*/
  `RIGHT_EDGES` = 1383351652,

/\*\*

- Distributes using the objects' top edges.
  \*/
  `TOP_EDGES` = 1416643940,

/\*\*

- Distributes using the objects' vertical centers.
  \*/
  `VERTICAL_CENTERS` = 1449481315,

/\*\*

- Distributes using vertical object spacing.
  \*/
  `VERTICAL_SPACE` = 1449489523,
  }

/\*\*

- Source type for alternate or actual text.
  \*/
  declare enum SourceType {
  /\*\*
  - Custom text source.
    \*/
    `SOURCE_CUSTOM` = 1934902125,

/\*\*

- XML structure source.
  \*/
  `SOURCE_XML_STRUCTURE` = 1934907507,

/\*\*

- XMP alt-text source.
  \*/
  `SOURCE_XMP_ALT_TEXT` = 1934907489,

/\*\*

- XMP description source.
  \*/
  `SOURCE_XMP_DESCRIPTION` = 1934907492,

/\*\*

- XMP extended-description source.
  \*/
  `SOURCE_XMP_EXTENDED_DESCRIPTION` = 1934907493,

/\*\*

- XMP headline source.
  \*/
  `SOURCE_XMP_HEADLINE` = 1934907496,

/\*\*

- User-specified XMP metadata property
  \*/
  `SOURCE_XMP_OTHER` = 1934907503,

/\*\*

- XMP title source.
  \*/
  `SOURCE_XMP_TITLE` = 1934907508,
  }

/\*\*

- Tag type for a page item.
  \*/
  declare enum TagType {
  /\*\*
  - Tags as artifact.
    \*/
    `TAG_ARTIFACT` = 1952924006,

/\*\*

- Tags as Story or Figure based on object type.
  \*/
  `TAG_BASED_ON_OBJECT` = 1952924271,

/\*\*

- Determines the tag from XML structure, or falls back to standard tag.
  \*/
  `TAG_FROM_STRUCTURE` = 1952928613,
  }

/\*\*

- File format choices for converted images.
  \*/
  declare enum ImageFormat {
  /\*\*
  - Selects GIF format for the chosen object.
    \*/
    GIF = 1734960742,

/\*\*

- Selects JPEG format for the chosen object.
  \*/
  JPEG = 1785751398,

/\*\*

- Selects PNG format for the chosen object.
  \*/
  PNG = 1397059687,
  }

/\*\*

- Image size choice for a converted object.
  \*/
  declare enum ImageSizeOption {
  /\*\*
  - Uses absolute image size.
    \*/
    `SIZE_FIXED` = 1182295162,

/\*\*

- Uses image size relative to text flow.
  \*/
  `SIZE_RELATIVE_TO_TEXT_FLOW` = 1383486566,
  }

/\*\*

- Image resolution for a converted object.
  \*/
  declare enum ImageResolution {
  /\*\*
  - Resolution of 150 pixels per inch.
    \*/
    `PPI_150` = 1920151654,

/\*\*

- Resolution of 300 pixels per inch.
  \*/
  `PPI_300` = 1920160872,

/\*\*

- Resolution of 72 pixels per inch.
  \*/
  `PPI_72` = 1920160628,

/\*\*

- Resolution of 96 pixels per inch.
  \*/
  `PPI_96` = 1920159347,
  }

/\*\*

- Image alignment type for objects.
  \*/
  declare enum ImageAlignmentType {
  /\*\*
  - Aligns image center.
    \*/
    `ALIGN_CENTER` = 1097614194,

/\*\*

- Aligns image left.
  \*/
  `ALIGN_LEFT` = 1097616486,

/\*\*

- Aligns image right.
  \*/
  `ALIGN_RIGHT` = 1097618036,
  }

/\*\*

- Image Page Break choices.
  \*/
  declare enum ImagePageBreakType {
  /\*\*
  - Inserts a page break after the image.
    \*/
    `PAGE_BREAK_AFTER` = 1114792294,

/\*\*

- Inserts a page break before the image.
  \*/
  `PAGE_BREAK_BEFORE` = 1114792550,

/\*\*

- Inserts page breaks both before and after the image.
  \*/
  `PAGE_BREAK_BEFORE_AND_AFTER` = 1114792545,
  }
