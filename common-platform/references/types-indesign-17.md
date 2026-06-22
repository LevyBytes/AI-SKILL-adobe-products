# Indesign (part 17)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- UI color choices for InCopy.
  \*/
  declare enum InCopyUIColors {
  /\*\*
  - Amber color.
    \*/
    AMBER = 1765895522,

/\*\*

- Aqua color.
  \*/
  AQUA = 1765896545,

/\*\*

- Black color.
  \*/
  BLACK = 1765960811,

/\*\*

- Blue color.
  \*/
  BLUE = 1765960821,

/\*\*

- Blueberry color.
  \*/
  BLUEBERRY = 1765960802,

/\*\*

- Brick red color.
  \*/
  `BRICK_RED` = 1765962340,

/\*\*

- Brown color.
  \*/
  BROWN = 1765962350,

/\*\*

- Burgundy color.
  \*/
  BURGUNDY = 1765962343,

/\*\*

- Canary color.
  \*/
  CANARY = 1766026873,

/\*\*

- Carnation color.
  \*/
  CARNATION = 1766023538,

/\*\*

- Charcoal color.
  \*/
  CHARCOAL = 1766025324,

/\*\*

- Cirrus color.
  \*/
  CIRRUS = 1766025586,

/\*\*

- Cornstarch color.
  \*/
  CORNSTARCH = 1766027886,

/\*\*

- Cute teal color.
  \*/
  `CUTE_TEAL` = 1766028396,

/\*\*

- Cyan color.
  \*/
  CYAN = 1766029678,

/\*\*

- Dark blue color.
  \*/
  `DARK_BLUE` = 1766089324,

/\*\*

- Dark green color.
  \*/
  `DARK_GREEN` = 1766090610,

/\*\*

- Eggplant color.
  \*/
  EGGPLANT = 1766156135,

/\*\*

- Electrolyte color.
  \*/
  ELECTROLYTE = 1766157411,

/\*\*

- Ether color.
  \*/
  ETHER = 1766159464,

/\*\*

- Fiesta color.
  \*/
  FIESTA = 1766222181,

/\*\*

- Forest color.
  \*/
  FOREST = 1766224756,

/\*\*

- Fuchsia color.
  \*/
  FUCHSIA = 1766225267,

/\*\*

- Gold color.
  \*/
  GOLD = 1766288484,

/\*\*

- Grape color.
  \*/
  GRAPE = 1766290032,

/\*\*

- Graphite color.
  \*/
  GRAPHITE = 1766289512,

/\*\*

- Grass green color.
  \*/
  `GRASS_GREEN` = 1766287218,

/\*\*

- Gray color.
  \*/
  GRAY = 1766290041,

/\*\*

- Green color.
  \*/
  GREEN = 1766290030,

/\*\*

- Grid blue color.
  \*/
  `GRID_BLUE` = 1766285932,

/\*\*

- Grid green color.
  \*/
  `GRID_GREEN` = 1766286439,

/\*\*

- Grid orange color.
  \*/
  `GRID_ORANGE` = 1766289266,

/\*\*

- Gunmetal color.
  \*/
  GUNMETAL = 1766290798,

/\*\*

- Iris color.
  \*/
  IRIS = 1766421107,

/\*\*

- Jade color.
  \*/
  JADE = 1766482276,

/\*\*

- Lavender color.
  \*/
  LAVENDER = 1766618734,

/\*\*

- Lemon color.
  \*/
  LEMON = 1766616430,

/\*\*

- Lichen color.
  \*/
  LICHEN = 1766615395,

/\*\*

- Light blue color.
  \*/
  `LIGHT_BLUE` = 1766613612,

/\*\*

- Light gray color.
  \*/
  `LIGHT_GRAY` = 1766614898,

/\*\*

- Light olive color.
  \*/
  `LIGHT_OLIVE` = 1766616940,

/\*\*

- Lime color.
  \*/
  LIME = 1766615405,

/\*\*

- Lipstick color.
  \*/
  LIPSTICK = 1766615408,

/\*\*

- Magenta color.
  \*/
  MAGENTA = 1766680430,

/\*\*

- Midnight color.
  \*/
  MIDNIGHT = 1766680932,

/\*\*

- Mocha color.
  \*/
  MOCHA = 1766682467,

/\*\*

- Mustard color.
  \*/
  MUSTARD = 1766684019,

/\*\*

- Ochre color.
  \*/
  OCHRE = 1766810482,

/\*\*

- Olive green color.
  \*/
  `OLIVE_GREEN` = 1766812790,

/\*\*

- Orange color.
  \*/
  ORANGE = 1766814318,

/\*\*

- Peach color.
  \*/
  PEACH = 1766876008,

/\*\*

- Pink color.
  \*/
  PINK = 1766878827,

/\*\*

- Powder color.
  \*/
  POWDER = 1766879095,

/\*\*

- Purple color.
  \*/
  PURPLE = 1766879856,

/\*\*

- Red color.
  \*/
  RED = 1767007588,

/\*\*

- Slate color.
  \*/
  SLATE = 1767074932,

/\*\*

- Smoke color.
  \*/
  SMOKE = 1767075179,

/\*\*

- Sulphur color.
  \*/
  SULPHUR = 1767077228,

/\*\*

- Tan color.
  \*/
  TAN = 1767137646,

/\*\*

- Teal color.
  \*/
  TEAL = 1767138668,

/\*\*

- Ultramarine color.
  \*/
  ULTRAMARINE = 1767205997,

/\*\*

- Violet color.
  \*/
  VIOLET = 1767271540,

/\*\*

- Wheat color.
  \*/
  WHEAT = 1767336037,

/\*\*

- White color.
  \*/
  WHITE = 1767336052,

/\*\*

- Yellow color.
  \*/
  YELLOW = 1767468151,
  }

/\*\*

- Cursor type choices.
  \*/
  declare enum CursorTypes {
  /\*\*
  - Selects a barbell cursor.
    \*/
    `BARBELL_CURSOR` = 1698841196,

/\*\*

- Selects a block cursor.
  \*/
  `BLOCK_CURSOR` = 1698851951,

/\*\*

- Selects a standard cursor.
  \*/
  `STANDARD_CURSOR` = 1699968100,

/\*\*

- Selects a thick cursor.
  \*/
  `THICK_CURSOR` = 1700029291,
  }

/\*\*

- Anti-aliasing type choices.
  \*/
  declare enum AntiAliasType {
  /\*\*
  - Color anti-aliasing mode.
    \*/
    `COLOR_ANTIALIASING` = 1665418322,

/\*\*

- Gray anti-aliasing mode.
  \*/
  `GRAY_ANTIALIASING` = 1732527186,

/\*\*

- Thicker anti-aliasing mode.
  \*/
  `THICKER_ANTIALIASING` = 1950444659,
  }

/\*\*

- Line-spacing type choices.
  \*/
  declare enum LineSpacingType {
  /\*\*
  - Double-space setting.
    \*/
    `DOUBLE_SPACE` = 1682068336,

/\*\*

- One-and-a-half-space setting.
  \*/
  `ONE_AND_HALF_SPACE` = 1866549363,

/\*\*

- Single-space setting.
  \*/
  `SINGLE_SPACE` = 1936282480,

/\*\*

- Triple-space setting.
  \*/
  `TRIPLE_SPACE` = 1951552368,
  }

/\*\*

- Page-numbering choices for book content objects in a book.
  \*/
  declare enum RepaginateOption {
  /\*\*
  - For each book content object, starts numbering at the next even-numbered page after the previous object's last page.
    \*/
    `NEXT_EVEN_PAGE` = 1164993131,

/\*\*

- For each book content object, starts numbering at the next odd-numbered page after the previous object's last page.
  \*/
  `NEXT_ODD_PAGE` = 1332765291,

/\*\*

- Continues page numbering in sequence from the previous book content object.
  \*/
  `NEXT_PAGE` = 1885500011,
  }

/\*\*

- Status choices for book content files.
  \*/
  declare enum BookContentStatus {
  /\*\*
  - Indicates another user is using the book content object, so it is locked.
    \*/
    `DOCUMENT_IN_USE` = 1148150601,

/\*\*

- Indicates the book content object is open.
  \*/
  `DOCUMENT_IS_OPEN` = 1148150607,

/\*\*

- Indicates the book content object changed after repagination.
  \*/
  `DOCUMENT_OUT_OF_DATE` = 1148150596,

/\*\*

- Indicates the book content object cannot be found because it was moved, renamed, or deleted.
  \*/
  `MISSING_DOCUMENT` = 1148150605,

/\*\*

- Indicates the book content object is closed and unchanged.
  \*/
  NORMAL = 1852797549,
  }

/\*\*

- Name-matching choices used while synchronizing book styles.
  \*/
  declare enum SmartMatchOptions {
  /\*\*
  - During target style lookup, matches only the style name.
    \*/
    `MATCH_STYLE_NAME` = 1936552814,

/\*\*

- During target style lookup, matches the style's full path.
  \*/
  `MATCH_STYLE_PATH` = 1936549488,
  }

/\*\*

- Cell type selector for text or graphic cells.
  \*/
  declare enum CellTypeEnum {
  /\*\*
  - Cell containing a graphic or Page item.
    \*/
    `GRAPHIC_TYPE_CELL` = 1701728329,

/\*\*

- Cell containing text.
  \*/
  `TEXT_TYPE_CELL` = 1701730388,
  }

/\*\*

- Row type choices.
  \*/
  declare enum RowTypes {
  /\*\*
  - Sets the row as a body row.
    \*/
    `BODY_ROW` = 1161982583,

/\*\*

- Sets the row as a footer row. Note: when assigning footer-row type, the row must be the table's bottom row or be next to an existing footer row.
  \*/
  `FOOTER_ROW` = 1162244727,

/\*\*

- Sets the row as a header row. Note: when assigning header-row type, the row must be the table's top row or be next to an existing header row.
  \*/
  `HEADER_ROW` = 1162375799,

/\*\*

- (Read-only) Indicates the column's rows use multiple row types.
  \*/
  `MIXED_STATE` = 1162703479,
  }

/\*\*

- Placement choices for header and footer rows.
  \*/
  declare enum HeaderFooterBreakTypes {
  /\*\*
  - Places headers or footers in every text column.
    \*/
    `IN_ALL_TEXT_COLUMNS` = 1231115363,

/\*\*

- Places a single header or footer instance on each page.
  \*/
  `ONCE_PER_PAGE` = 1332760673,

/\*\*

- Repeats headers or footers in every text frame.
  \*/
  `ONCE_PER_TEXT_FRAME` = 1332761702,
  }

/\*\*

- Pattern choices for alternating fills.
  \*/
  declare enum AlternatingFillsTypes {
  /\*\*
  - Alternates fills by column.
    \*/
    `ALTERNATING_COLUMNS` = 1097614188,

/\*\*

- Alternates fills by row.
  \*/
  `ALTERNATING_ROWS` = 1097618039,

/\*\*

- Uses no alternating pattern.
  \*/
  `NO_ALTERNATING_PATTERN` = 1097617007,
  }

/\*\*

- Display-order choices for row and column strokes at corners.
  \*/
  declare enum StrokeOrderTypes {
  /\*\*
  - Puts row strokes above column strokes when their colors differ; also joins striped strokes and connects crossing points.
    \*/
    `BEST_JOINS` = 1935828330,

/\*\*

- Displays column strokes above row strokes.
  \*/
  `COLUMN_ON_TOP` = 1935896436,

/\*\*

- Puts row strokes in front when row and column colors differ; striped strokes join only where strokes meet in a T shape.
  \*/
  `INDESIGN_2_COMPATIBILITY` = 1936286819,

/\*\*

- Displays row strokes above column strokes.
  \*/
  `ROW_ON_TOP` = 1936879476,
  }

/\*\*

- Values that determine table-cell ordering in story and galley views.
  \*/
  declare enum DisplayOrderOptions {
  /\*\*
  - Orders by columns.
    \*/
    `ORDER_BY_COLUMNS` = 1652114254,

/\*\*

- Orders by rows.
  \*/
  `ORDER_BY_ROWS` = 1652118103,
  }

/\*\*

- Rasterization level choices.
  \*/
  declare enum FlattenerLevel {
  /\*\*
  - Preserves as much artwork as possible as vector data.
    \*/
    HIGH = 1701726313,

/\*\*

- Rasterizes all artwork.
  \*/
  LOW = 1701727351,

/\*\*

- Rasterizes a medium share of artwork.
  \*/
  MEDIUM = 1701727588,

/\*\*

- Rasterizes more artwork than the medium level.
  \*/
  `MEDIUM_HIGH` = 1718373704,

/\*\*

- Rasterizes nearly all artwork.
  \*/
  `MEDIUM_LOW` = 1718373708,
  }

/\*\*

- Transparency blending-space choices.
  \*/
  declare enum BlendingSpace {
  /\*\*
  - Selects the CMYK profile.
    \*/
    CMYK = 1129142603,

/\*\*

- Falls back to the current color profile.
  \*/
  `DEFAULT_VALUE` = 1147563124,

/\*\*

- Selects the RGB color profile.
  \*/
  RGB = 1666336578,
  }

/\*\*

- Blend mode choices.
  \*/
  declare enum BlendMode {
  /\*\*
  - Builds a color from the base color's luminance plus the blend color's hue and saturation. Note: gray levels remain intact, which helps when coloring monochrome images or tinting color images; this is the inverse of the luminosity blend mode.
    \*/
    COLOR = 1668246642,

/\*\*

- Darkens the base color according to the blend color. Note: blending with white leaves the result unchanged.
  \*/
  `COLOR_BURN` = 2020625768,

/\*\*

- Brightens the base color according to the blend color. Note: blending with pure black leaves the result unchanged.
  \*/
  `COLOR_DODGE` = 2020625767,

/\*\*

- Chooses the darker value from the base and blend colors for the result; lighter areas than the blend color are replaced, while darker areas remain unchanged.
  \*/
  DARKEN = 2020625769,

/\*\*

- Subtracts the blend color from the base color, or the reverse, based on whichever has higher brightness. Note: white inverts base color values, while black leaves the result unchanged.
  \*/
  DIFFERENCE = 2020625771,

/\*\*

- Produces a difference-like result with reduced contrast. Note: white inverts base color values, while black leaves the result unchanged.
  \*/
  EXCLUSION = 2020625772,

/\*\*

- If blend colors are lighter than 50% gray, the artwork is lightened as if screened; if darker than 50% gray, it is darkened as if multiplied. Note: painting with pure black or white produces pure black or white.
  \*/
  `HARD_LIGHT` = 2020625766,

/\*\*

- Builds a color from the base color's luminance and saturation plus the blend color's hue.
  \*/
  HUE = 2020625773,

/\*\*

- Chooses the lighter value from the base and blend colors for the result; darker areas than the blend color are replaced, while lighter areas remain unchanged.
  \*/
  LIGHTEN = 2020625770,

/\*\*

- Builds a color from the base color's hue and saturation plus the blend color's luminance. Note: this is the inverse of the color blend mode.
  \*/
  LUMINOSITY = 2020625776,

/\*\*

- Multiplies the base and blend colors to produce a darker color. Note: black multiplication yields black, and white multiplication leaves the color unchanged.
  \*/
  MULTIPLY = 2020625762,

/\*\*

- Applies the blend color to the object without interacting with the base color.
  \*/
  NORMAL = 1852797549,

/\*\*

- Multiplies or screens colors based on the base color; patterns or colors cover existing artwork while preserving base-color highlights and shadows and mixing in the blend color according to the original color's lightness or darkness.
  \*/
  OVERLAY = 2020625764,

/\*\*

- Builds a color from the base color's luminance and hue plus the blend color's saturation. Note: areas with no saturation, or 0% gray, do not change.
  \*/
  SATURATION = 1380545377,

/\*\*

- Multiplies the inverses of the blend and base colors to create a lighter color. Note: screening with white yields white, and screening with black leaves the color unchanged.
  \*/
  SCREEN = 2020625763,

/\*\*

- If blend colors are lighter than 50% gray, the artwork is lightened as if dodged; if darker than 50% gray, it is darkened as if burned. Note: pure black or white paint creates a clearly darker or lighter area, without becoming pure black or white.
  \*/
  `SOFT_LIGHT` = 2020625765,
  }

/\*\*

- Shadow mode choices.
  \*/
  declare enum ShadowMode {
  /\*\*
  - Applies a standard blurred drop shadow.
    \*/
    DROP = 2020623440,

/\*\*

- Applies no shadow.
  \*/
  NONE = 1852796517,
  }

/\*\*

- Feathering on/off choices.
  \*/
  declare enum FeatherMode {
  /\*\*
  - Applies no feathering.
    \*/
    NONE = 1852796517,

/\*\*

- Applies standard feathering.
  \*/
  STANDARD = 2020623970,
  }

/\*\*

- Corner type choices.
  \*/
  declare enum FeatherCornerType {
  /\*\*
  - Makes object edges transition from opaque to transparent.
    \*/
    DIFFUSION = 2020623203,

/\*\*

- Rounds the corners using the feather radius.
  \*/
  ROUNDED = 2020623202,

/\*\*

- Makes the gradient track the object's outside edge exactly, sharp corners included.
  \*/
  SHARP = 2020623201,
  }

/\*\*

- Override choices for flattener levels.
  \*/
  declare enum SpreadFlattenerLevel {
  /\*\*
  - Uses the chosen custom flattening level.
    \*/
    CUSTOM = 1131639917,

/\*\*

- Uses the default flattening level.
  \*/
  `DEFAULT_VALUE` = 1147563124,

/\*\*

- Disables flattening.
  \*/
  NONE = 1852796517,
  }

/\*\*

- Glow technique choices.
  \*/
  declare enum GlowTechnique {
  /\*\*
  - Precise technique.
    \*/
    PRECISE = 2020618338,

/\*\*

- Softer technique.
  \*/
  SOFTER = 2020618337,
  }

/\*\*

- Source choices for inner glow.
  \*/
  declare enum InnerGlowSource {
  /\*\*
  - Radiates the glow from the object's center.
    \*/
    `CENTER_SOURCED` = 2020618593,

/\*\*

- Radiates the glow from the object's edge.
  \*/
  `EDGE_SOURCED` = 2020618594,
  }

/\*\*

- Style choices for bevel and emboss.
  \*/
  declare enum BevelAndEmbossStyle {
  /\*\*
  - Applies an emboss effect to the object.
    \*/
    EMBOSS = 2020618851,

/\*\*

- Bevels the object's inside edges.
  \*/
  `INNER_BEVEL` = 2020618850,

/\*\*

- Bevels the object's outside edges.
  \*/
  `OUTER_BEVEL` = 2020618849,

/\*\*

- Applies an emboss effect to the object edges.
  \*/
  `PILLOW_EMBOSS` = 2020618852,
  }

/\*\*

- Technique choices for bevel and emboss.
  \*/
  declare enum BevelAndEmbossTechnique {
  /\*\*
  - Creates chiseled emboss and bevel contours with hard corners.
    \*/
    `CHISEL_HARD` = 2020619106,

/\*\*

- Creates chiseled emboss or bevel contours with some softening.
  \*/
  `CHISEL_SOFT` = 2020619107,

/\*\*

- Uses smooth emboss and bevel contours.
  \*/
  `SMOOTH_CONTOUR` = 2020619105,
  }

/\*\*

- Direction choices for bevel and emboss.
  \*/
  declare enum BevelAndEmbossDirection {
  /\*\*
  - Makes the effect look depressed.
    \*/
    DOWN = 1181971556,

/\*\*

- Makes the effect look raised.
  \*/
  UP = 1181971566,
  }

/\*\*

- Follow-shape choices for directional feathering.
  \*/
  declare enum FollowShapeModeOptions {
  /\*\*
  - Feathers every edge facing the specified angle.
    \*/
    `ALL_EDGES` = 1701721442,

/\*\*

- Feathers only the leading edge that faces the specified angle.
  \*/
  `LEADING_EDGE` = 1701721441,

/\*\*

- Turns off shape following and uses the object's rectangular bounds.
  \*/
  NONE = 1852796517,
  }

/\*\*

- Page number placement choices.
  \*/
  declare enum PageNumberPosition {
  /\*\*
  - Places page numbers after the entry text.
    \*/
    `AFTER_ENTRY` = 1634100590,

/\*\*

- Places page numbers before the entry text.
  \*/
  `BEFORE_ENTRY` = 1650877806,

/\*\*

- Turns page numbers off.
  \*/
  NONE = 1852796517,
  }

/\*\*

- Choices for numbered paragraphs.
  \*/
  declare enum NumberedParagraphsOptions {
  /\*\*
  - Leaves paragraph numbers out.
    \*/
    `EXCLUDE_NUMBERS` = 1952804469,

/\*\*

- Includes the complete paragraph text.
  \*/
  `INCLUDE_FULL_PARAGRAPH` = 1953064560,

/\*\*

- Includes only the paragraph number.
  \*/
  `INCLUDE_NUMBERS_ONLY` = 1953066607,
  }

/\*\*

- Enumeration for comment status.
  \*/
  declare enum CommentStatusEnum {
  /\*\*
  - Status value is open.
    \*/
    `OPEN_STATUS` = 1634955120,

/\*\*

- Status value is resolved.
  \*/
  `RESOLVED_STATUS` = 1634955877,
  }

/\*\*

- Enumeration for comment type.
  \*/
  declare enum CommentTypeEnum {
  /\*\*
  - Type value is arrow.
    \*/
    `ARROW_TYPE` = 1635017074,

/\*\*

- Type value is cloud.
  \*/
  `CLOUD_TYPE` = 1635017572,

/\*\*

- Type value is connected lines.
  \*/
  `CONNECTED_LINES_TYPE` = 1635017582,

/\*\*

- Type value is freeform drawing.
  \*/
  `FREEFORM_DRAWING_TYPE` = 1635018340,

/\*\*

- Type value is highlight text.
  \*/
  `HIGHLIGHT_TEXT_TYPE` = 1635018860,

/\*\*

- Type value is insert text.
  \*/
  `INSERT_TEXT_TYPE` = 1635019124,

/\*\*

- Type value is invalid comment type.
  \*/
  `INVALID_COMMENT_TYPE` = 1635019118,

/\*\*

- Type value is line segment.
  \*/
  `LINE_SEGMENT_TYPE` = 1635019891,

/\*\*

- Type value is oval.
  \*/
  `OVAL_TYPE` = 1635020662,

/\*\*

- Type value is polygon.
  \*/
  `POLYGON_TYPE` = 1635020908,

/\*\*

- Type value is rectangle.
  \*/
  `RECTANGLE_TYPE` = 1635021420,

/\*\*

- Type value is replace text.
  \*/
  `REPLACE_TEXT_TYPE` = 1635021428,

/\*\*

- Type value is squiggly text.
  \*/
  `SQUIGGLY_TEXT_TYPE` = 1635021681,

/\*\*

- Type value is stamp.
  \*/
  `STAMP_TYPE` = 1635021680,

/\*\*

- Type value is sticky note.
  \*/
  `STICKY_NOTE_TYPE` = 1635021678,

/\*\*

- Type value is strikethrough text.
  \*/
  `STRIKETHROUGH_TEXT_TYPE` = 1635021682,

/\*\*

- Type value is text box.
  \*/
  `TEXT_BOX_TYPE` = 1635021922,

/\*\*

- Type value is text callout.
  \*/
  `TEXT_CALLOUT_TYPE` = 1635021923,

/\*\*

- Type value is text typewriter.
  \*/
  `TEXT_TYPEWRITER_TYPE` = 1635021940,

/\*\*

- Type value is underline text.
  \*/
  `UNDERLINE_TEXT_TYPE` = 1635022188,
  }

/\*\*

- Character set choices for text-file import.
  \*/
  declare enum TextImportCharacterSet {
  /\*\*
  - ANSI character set.
    \*/
    ANSI = 1095652169,

/\*\*

- Character set entry for Arabic ASMO.
  \*/
  `ARABIC_ASMO` = 1415672685,

/\*\*

- Transparent variant of the Arabic ASMO character set.
  \*/
  `ARABIC_ASMO_TRANSPARENT` = 1415672692,

/\*\*

- Central European (ISO) character-set entry.
  \*/
  `CENTRALEUROPEAN_ISO` = 1416184645,

/\*\*

- Chinese Big 5 character-set entry.
  \*/
  `CHINESE_BIG_5` = 1415799349,

/\*\*

- Cyrillic (CP855) character-set entry.
  \*/
  `CYRILLIC_CP855` = 1415788597,

/\*\*

- Cyrillic (ISO) character-set entry.
  \*/
  `CYRILLIC_ISO` = 1416184697,

/\*\*

- Cyrillic (KOI8R) character-set entry.
  \*/
  `CYRILLIC_KOI8R` = 1416312946,

/\*\*

- Cyrillic (KOI8U) character-set entry.
  \*/
  `CYRILLIC_KOI8U` = 1416312949,

/\*\*

- DOS Latin 2 character-set entry.
  \*/
  `DOS_LATIN_2` = 1415867442,

/\*\*

- GB18030 character-set entry.
  \*/
  GB18030 = 1416061491,

/\*\*

- GB2312 character-set entry.
  \*/
  GB2312 = 1416061535,

/\*\*

- Greek (ISO) character-set entry.
  \*/
  `GREEK_ISO` = 1416185707,

/\*\*

- KSC5601 character-set entry.
  \*/
  KSC5601 = 1414230883,

/\*\*

- Macintosh Arabic character-set entry.
  \*/
  `MACINTOSH_ARABIC` = 1416446322,

/\*\*

- Macintosh CE (Cantral European) character-set entry.
  \*/
  `MACINTOSH_CE` = 1416446789,

/\*\*

- Macintosh Croatian character-set entry.
  \*/
  `MACINTOSH_CROATIAN` = 1416446834,

/\*\*

- Macintosh Cyrillic character-set entry.
  \*/
  `MACINTOSH_CYRILLIC` = 1416446841,

/\*\*

- Macintosh Greek character-set entry.
  \*/
  `MACINTOSH_GREEK` = 1416447858,

/\*\*

- Macintosh Greek (Shared caps) character-set entry.
  \*/
  `MACINTOSH_GREEK_SHARED_CAPS` = 1416447794,

/\*\*

- Macintosh Hebrew character-set entry.
  \*/
  `MACINTOSH_HEBREW` = 1416448098,

/\*\*

- Macintosh Icelandic character-set entry.
  \*/
  `MACINTOSH_ICELANDIC` = 1416448355,

/\*\*

- Macintosh Roman character-set entry.
  \*/
  `MACINTOSH_ROMAN` = 1416450669,

/\*\*

- Macintosh Romanian character-set entry.
  \*/
  `MACINTOSH_ROMANIAN` = 1416450671,

/\*\*

- Macintosh Turkish character-set entry.
  \*/
  `MACINTOSH_TURKISH` = 1416451186,

/\*\*

- Recommend:Shift_JIS 83pv character-set entry.
  \*/
  RECOMMENDSHIFTJIS83PV = 1412969328,

/\*\*

- Shift_JIS 90ms character-set entry.
  \*/
  SHIFTJIS90MS = 1413034093,

/\*\*

- Shift_JIS 90pv character-set entry.
  \*/
  SHIFTJIS90PV = 1413034096,

/\*\*

- Turkish (ISO) character-set entry.
  \*/
  `TURKISH_ISO` = 1416189045,

/\*\*

- Unicode UTF16 character-set entry.
  \*/
  UTF16 = 1937125686,

/\*\*

- Unicode UTF8 character-set entry.
  \*/
  UTF8 = 1937134904,

/\*\*

- Windows Arabic character-set entry.
  \*/
  `WINDOWS_ARABIC` = 1417101682,

/\*\*

- Tthe Windows Baltic character-set entry.
  \*/
  `WINDOWS_BALTIC` = 1417101940,

/\*\*

- Windows CE (Central European) character-set entry.
  \*/
  `WINDOWS_CE` = 1417102149,

/\*\*

- Windows Cyrillic character-set entry.
  \*/
  `WINDOWS_CYRILLIC` = 1417102201,

/\*\*

- Windows EE (Eastern European) character-set entry.
  \*/
  `WINDOWS_EE` = 1417102661,

/\*\*

- Windows Greek character-set entry.
  \*/
  `WINDOWS_GREEK` = 1417103218,

/\*\*

- Windows Hebrew character-set entry.
  \*/
  `WINDOWS_HEBREW` = 1417103458,

/\*\*

- Windows Turkish character-set entry.
  \*/
  `WINDOWS_TURKISH` = 1417106549,
  }

/\*\*

- Choices for the import platform.
  \*/
  declare enum ImportPlatform {
  /\*\*
  - Macintosh platform.
    \*/
    MACINTOSH = 1296130931,

/\*\*

- Windows platform.
  \*/
  PC = 1466852474,
  }

/\*\*

- Conversion choices for manual page breaks.
  \*/
  declare enum ConvertPageBreaks {
  /\*\*
  - Changes manual page breaks into column breaks.
    \*/
    `COLUMN_BREAK` = 1396927554,

/\*\*

- Lets text reflow instead of keeping page breaks.
  \*/
  NONE = 1852796517,

/\*\*

- Keeps page breaks intact.
  \*/
  `PAGE_BREAK` = 1397778242,
  }

/\*\*

- Character-set choices for tagged-text export.
  \*/
  declare enum TagTextExportCharacterSet {
  /\*\*
  - ANSI.
    \*/
    ANSI = 1095652169,

/\*\*

- ASCII.
  \*/
  ASCII = 1095975753,

/\*\*

- Central European (ISO) character-set entry.
  \*/
  `CENTRALEUROPEAN_ISO` = 1416184645,

/\*\*

- Chinese Big 5
  \*/
  `CHINESE_BIG_5` = 1415799349,

/\*\*

- Cyrillic (ISO) character-set entry.
  \*/
  `CYRILLIC_ISO` = 1416184697,

/\*\*

- Selects GB18030 encoding.
  \*/
  GB18030 = 1416061491,

/\*\*

- Greek (ISO) character-set entry.
  \*/
  `GREEK_ISO` = 1416185707,

/\*\*

- Selects KSC5601 encoding.
  \*/
  KSC5601 = 1414230883,

/\*\*

- Shift_JIS.
  \*/
  `SHIFT_JIS` = 1249077875,

/\*\*

- Unicode.
  \*/
  UNICODE = 1249209961,

/\*\*

- Windows Arabic character-set entry.
  \*/
  `WINDOWS_ARABIC` = 1417101682,

/\*\*

- Windows Hebrew character-set entry.
  \*/
  `WINDOWS_HEBREW` = 1417103458,
  }

/\*\*

- Tag output form choices.
  \*/
  declare enum TagTextForm {
  /\*\*
  - Shortens tags, producing smaller text files.
    \*/
    ABBREVIATED = 1414816098,

/\*\*

- Shows tags in long form, producing larger text files.
  \*/
  VERBOSE = 1414821474,
  }

/\*\*

- Choices for handling style conflicts during tagged-text import.
  \*/
  declare enum StyleConflict {
  /\*\*
  - Selects the publication style.
    \*/
    `PUBLICATION_DEFINITION` = 1414819940,
