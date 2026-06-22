# Indesign (part 14)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Changes the object into a rectangle with inverse rounded corners.
  \*/
  `CONVERT_TO_INVERSE_ROUNDED_RECTANGLE` = 1129531730,

/\*\*

- Changes the object into a diagonal line from the bounding box's upper-left corner to its lower-right corner.
  \*/
  `CONVERT_TO_LINE` = 1129532489,

/\*\*

- Changes the object into an open path.
  \*/
  `CONVERT_TO_OPEN_PATH` = 1129533296,

/\*\*

- Changes the object into an ellipse.
  \*/
  `CONVERT_TO_OVAL` = 1129533270,

/\*\*

- Changes the object into a polygon.
  \*/
  `CONVERT_TO_POLYGON` = 1129533519,

/\*\*

- Changes the object into a rectangle.
  \*/
  `CONVERT_TO_RECTANGLE` = 1129534021,

/\*\*

- Changes the object into a rectangle with rounded corners.
  \*/
  `CONVERT_TO_ROUNDED_RECTANGLE` = 1129534034,

/\*\*

- Changes the object into a straight line. For a square, circle, or bounding box that is wider than tall, the line is horizontal and joins the midpoint of each vertical side. When the bounding box is taller than wide, the line joins the midpoint of each horizontal side.
  \*/
  `CONVERT_TO_STRAIGHT_LINE` = 1129534284,

/\*\*

- Changes the object into a triangle.
  \*/
  `CONVERT_TO_TRIANGLE` = 1129534546,
  }

/\*\*

- Coordinate-space choices.
  \*/
  declare enum CoordinateSpaces {
  /\*\*
  - Inner-coordinate system
    \*/
    `INNER_COORDINATES` = 2021222766,

/\*\*

- Page-coordinate system.
  \*/
  `PAGE_COORDINATES` = 2021224551,

/\*\*

- Parent-coordinate system
  \*/
  `PARENT_COORDINATES` = 2021224545,

/\*\*

- Pasteboard-coordinate system
  \*/
  `PASTEBOARD_COORDINATES` = 2021224546,

/\*\*

- Spread-coordinate system.
  \*/
  `SPREAD_COORDINATES` = 2021225328,
  }

/\*\*

- Matrix-content selectors.
  \*/
  declare enum MatrixContent {
  /\*\*
  - Rotation component
    \*/
    `ROTATION_VALUE` = 1936746862,

/\*\*

- Scale components
  \*/
  `SCALE_VALUES` = 1735552887,

/\*\*

- Shear component
  \*/
  `SHEAR_VALUE` = 1936486004,

/\*\*

- Translation components
  \*/
  `TRANSLATION_VALUES` = 1936484720,
  }

/\*\*

- Bounding-box limit choices.
  \*/
  declare enum BoundingBoxLimits {
  /\*\*
  - Bounds of the geometric path
    \*/
    `GEOMETRIC_PATH_BOUNDS` = 1768844080,

/\*\*

- Bounds of the outer stroke
  \*/
  `OUTER_STROKE_BOUNDS` = 1768844081,
  }

/\*\*

- Constraint choices for resizing.
  \*/
  declare enum ResizeConstraints {
  /\*\*
  - Inverse-proportion constraint
    \*/
    `INVERSE_PROPORTIONS` = 1231976016,

/\*\*

- Preserve the current proportions
  \*/
  `KEEP_CURRENT_PROPORTIONS` = 1264939088,

/\*\*

- Preserve the current value
  \*/
  `KEEP_CURRENT_VALUE` = 1264939094,

/\*\*

- Tall-proportion constraint
  \*/
  `TALL_PROPORTIONS` = 1415670864,

/\*\*

- Wide-proportion constraint
  \*/
  `WIDE_PROPORTIONS` = 1466524752,
  }

/\*\*

- Resize-method choices.
  \*/
  declare enum ResizeMethods {
  /\*\*
  - Adds extra width and height to the current values
    \*/
    `ADDING_CURRENT_DIMENSIONS_TO` = 1215264592,

/\*\*

- Multiplies the current width and height by the supplied factors
  \*/
  `MULTIPLYING_CURRENT_DIMENSIONS_BY` = 1215264589,

/\*\*

- Replaces the current width and height values
  \*/
  `REPLACING_CURRENT_DIMENSIONS_WITH` = 1215264581,

/\*\*

- Changes the width-to-height ratio while keeping the current area
  \*/
  `RESHAPING_AREA_TO_RATIO` = 1215264577,

/\*\*

- Changes the width-to-height ratio while keeping the current perimeter
  \*/
  `RESHAPING_BORDER_TO_RATIO` = 1215264595,
  }

/\*\*

- Fitting choices for content placed in an empty frame.
  \*/
  declare enum EmptyFrameFittingOptions {
  /\*\*
  - Resizes content so it fits the frame. Note: content with proportions different from the frame is stretched or squeezed.
    \*/
    `CONTENT_TO_FRAME` = 1668575078,

/\*\*

- Resizes content to fill the frame while preserving the content's proportions. If frame and content proportions differ, the frame hides part of the content.
  \*/
  `FILL_PROPORTIONALLY` = 1718185072,

/\*\*

- Uses no fitting option.
  \*/
  NONE = 1852796517,

/\*\*

- Resizes content to fit the frame without changing content proportions. If the proportions differ, empty space remains inside the frame.
  \*/
  PROPORTIONALLY = 1668247152,
  }

/\*\*

- Corner-style choices.
  \*/
  declare enum CornerOptions {
  /\*\*
  - Beveled-corner choice.
    \*/
    `BEVEL_CORNER` = 1667588726,

/\*\*

- Fancy-corner choice.
  \*/
  `FANCY_CORNER` = 1667589742,

/\*\*

- Inset-corner choice.
  \*/
  `INSET_CORNER` = 1667591795,

/\*\*

- Inverted rounded-corner choice.
  \*/
  `INVERSE_ROUNDED_CORNER` = 1667591798,

/\*\*

- No corner treatment.
  \*/
  NONE = 1852796517,

/\*\*

- Rounded-corner choice.
  \*/
  `ROUNDED_CORNER` = 1667592804,
  }

/\*\*

- Dimension constraints used by the object-based layout rule
  \*/
  declare enum DimensionsConstraints {
  /\*\*
  - Keeps the dimension fixed relative to the parent.
    \*/
    `FIXED_DIMENSION` = 1145267817,

/\*\*

- Allows the dimension to vary relative to the parent.
  \*/
  `FLEXIBLE_DIMENSION` = 1145267820,
  }

/\*\*

- Object content-type choices.
  \*/
  declare enum ContentType {
  /\*\*
  - Indicates that the frame is a graphics frame.
    \*/
    `GRAPHIC_TYPE` = 1735553140,

/\*\*

- Indicates that the frame is a text frame.
  \*/
  `TEXT_TYPE` = 1952412773,

/\*\*

- No content type is assigned.
  \*/
  UNASSIGNED = 1970168179,
  }

/\*\*

- End-cap type choices.
  \*/
  declare enum EndCap {
  /\*\*
  - Squared ending that stops exactly at the path endpoint.
    \*/
    `BUTT_END_CAP` = 1650680176,

/\*\*

- Squared ending extended beyond the endpoint by half of the stroke-width.
  \*/
  `PROJECTING_END_CAP` = 1886020464,

/\*\*

- Semicircular ending extended beyond the endpoint by half of the stroke-width.
  \*/
  `ROUND_END_CAP` = 1919115632,
  }

/\*\*

- End-join type choices.
  \*/
  declare enum EndJoin {
  /\*\*
  - End join with a bevel.
    \*/
    `BEVEL_END_JOIN` = 1651142510,

/\*\*

- End join with a miter.
  \*/
  `MITER_END_JOIN` = 1835691886,

/\*\*

- End join with rounding.
  \*/
  `ROUND_END_JOIN` = 1919577966,
  }

/\*\*

- Automatic dash-or-dot stroke pattern adjustment for covering path corner points.
  \*/
  declare enum StrokeCornerAdjustment {
  /\*\*
  - Alters dash lengths so dashes always appear at path ends and corners while preserving the configured gap length. Note: shapes with unequal side lengths, such as rectangles, can end up with uneven dash lengths.
    \*/
    DASHES = 1162113896,

/\*\*

- Alters both dashes and gaps to cover corner and endpoint positions. Note: dash and gap sizes stay consistent around every side of the shape.
  \*/
  `DASHES_AND_GAPS` = 1148405616,

/\*\*

- Alters gap lengths so dashes or dots always appear at ends and corners while preserving dash length or dot diameter. Note: shapes with unequal side lengths, such as rectangles, can end up with uneven gaps.
  \*/
  GAPS = 1164406899,

/\*\*

- Makes no adjustment.
  \*/
  NONE = 1852796517,
  }

/\*\*

- Shape choices for one or both ends of an open path.
  \*/
  declare enum ArrowHead {
  /\*\*
  - Solid arrow head with a pierced end that bows sharply toward the point; the point forms a 45-degree angle.
    \*/
    `BARBED_ARROW_HEAD` = 1650553442,

/\*\*

- Vertical bar cut through by the stroke, meeting it at a right angle and matching its weight. The bar length is 4.5 times the stroke width.
  \*/
  `BAR_ARROW_HEAD` = 1651663208,

/\*\*

- Hollow circle with an outline matching the stroke weight. Its diameter is 5 times the stroke width.
  \*/
  `CIRCLE_ARROW_HEAD` = 1668440424,

/\*\*

- Solid circle whose diameter equals 5 times the stroke width.
  \*/
  `CIRCLE_SOLID_ARROW_HEAD` = 1668505960,

/\*\*

- Solid arrow head with a pierced end curving inward toward the point; the point forms a 45-degree angle.
  \*/
  `CURVED_ARROW_HEAD` = 1668702568,

/\*\*

- None.
  \*/
  NONE = 1852796517,

/\*\*

- Arrow head made from two slanted lines; their intersection creates a 45-degree angle, and the stroke weight matches the path stroke.
  \*/
  `SIMPLE_ARROW_HEAD` = 1936289136,

/\*\*

- Arrow head made from two slanted lines; their intersection creates a 90-degree angle, and the stroke weight matches the path stroke.
  \*/
  `SIMPLE_WIDE_ARROW_HEAD` = 1937203560,

/\*\*

- Hollow square placed perpendicular to the path, with an outline matching the stroke weight. One square side is 5 times the stroke width.
  \*/
  `SQUARE_ARROW_HEAD` = 1936810344,

/\*\*

- Solid square placed perpendicular to the path end. One square side is 5 times the stroke width.
  \*/
  `SQUARE_SOLID_ARROW_HEAD` = 1936941416,

/\*\*

- Solid triangle arrow head whose point forms a 45-degree angle.
  \*/
  `TRIANGLE_ARROW_HEAD` = 1953655150,

/\*\*

- Solid triangle arrow head whose point forms a 90-degree angle.
  \*/
  `TRIANGLE_WIDE_ARROW_HEAD` = 1953980776,
  }

/\*\*

- Display-performance choices.
  \*/
  declare enum DisplaySettingOptions {
  /\*\*
  - Uses the container object's default display-performance preference. For information, see default display settings.
    \*/
    `DEFAULT_VALUE` = 1147563124,

/\*\*

- Slower performance; shows high-resolution graphics and high-quality transparencies, with anti-aliasing enabled.
  \*/
  `HIGH_QUALITY` = 1346922866,

/\*\*

- Best performance; grays out graphics while disabling transparency and anti-aliasing.
  \*/
  OPTIMIZED = 1349480564,

/\*\*

- Moderate performance speed; shows proxy graphics and low-quality transparencies, with anti-aliasing enabled.
  \*/
  TYPICAL = 1349810544,
  }

/\*\*

- Choices for fitting content to a frame.
  \*/
  declare enum FitOptions {
  /\*\*
  - Applies the frame's current fitting options to both frame and content. Before using this, confirm that the expected Frame Fitting Options are set on the frame. For example, placing an image in a frame set to 'Fit Content Proportionally' can alter crop settings in the Frame Fitting Options; those changed settings may later be applied to subsequent image placements when this API is called.
    \*/
    `APPLY_FRAME_FITTING_OPTIONS` = 1634100847,

/\*\*

- Centers the content within the frame while preserving frame size, content size, and proportions. Note: when content exceeds the frame, edge content is hidden.
  \*/
  `CENTER_CONTENT` = 1667591779,

/\*\*

- Uses Adobe Sensei to choose the best crop region of the content for the frame. Note: frame size is preserved, but content size may be scaled.
  \*/
  `CONTENT_AWARE_FIT` = 1667327593,

/\*\*

- Resizes content so it fits the frame. Note: content with a different size than the frame is stretched or squeezed.
  \*/
  `CONTENT_TO_FRAME` = 1668575078,

/\*\*

- Resizes content to fill the frame while preserving the content's proportions. If frame and content proportions differ, the frame's bounding box hides some content.
  \*/
  `FILL_PROPORTIONALLY` = 1718185072,

/\*\*

- Adjusts the frame dimensions to match the content.
  \*/
  `FRAME_TO_CONTENT` = 1718906723,

/\*\*

- Fits the content inside the frame without changing its proportions. If frame and content proportions differ, empty space remains in the frame.
  \*/
  PROPORTIONALLY = 1668247152,
  }

/\*\*

- Choices for placing a stroke relative to its path.
  \*/
  declare enum StrokeAlignment {
  /\*\*
  - Positions the stroke across the path centerline.
    \*/
    `CENTER_ALIGNMENT` = 1936998723,

/\*\*

- Positions the stroke inside the path.
  \*/
  `INSIDE_ALIGNMENT` = 1936998729,

/\*\*

- Positions the stroke outside the path, like a picture frame.
  \*/
  `OUTSIDE_ALIGNMENT` = 1936998735,
  }

/\*\*

- Ruler-guide type choices.
  \*/
  declare enum GuideTypeOptions {
  /\*\*
  - Liquid guide.
    \*/
    LIQUID = 1735617635,

/\*\*

- Ruler guide (default).
  \*/
  RULER = 1735618160,
  }

/\*\*

- Path basis choices for contour text wrap.
  \*/
  declare enum ContourOptionsTypes {
  /\*\*
  - Uses the specified alpha channel's edges as the text wrap shape. To specify the alpha channel, see contour path name.
    \*/
    `ALPHA_CHANNEL` = 1634756707,

/\*\*

- Uses the object's bounding box as the text wrap shape.
  \*/
  `BOUNDING_BOX` = 1701732962,

/\*\*

- Uses the image edges as the text wrap shape.
  \*/
  `DETECT_EDGES` = 1685349735,

/\*\*

- Uses the wrapped object's graphics frame as the text wrap shape.
  \*/
  `GRAPHIC_FRAME` = 1701734246,

/\*\*

- Uses the specified Photoshop path as the text wrap shape. To specify the Photoshop path, see contour path name.
  \*/
  `PHOTOSHOP_PATH` = 1886613620,

/\*\*

- Uses the clipping path, if Photoshop defines one, as the text wrap shape. Note: this enumeration cannot specify a path. To use a specific path for the text wrap shape, use the photoshop path contour options type enumeration value.
  \*/
  `SAME_AS_CLIPPING` = 1935762288,

/\*\*

- Smart Text Wrap uses Adobe Sensei to choose the key Subject in the content.
  \*/
  `SELECT_SUBJECT` = 1685087092,
  }

/\*\*

- Side choices for text wrap.
  \*/
  declare enum TextWrapSideOptions {
  /\*\*
  - Text wraps on both sides.
    \*/
    `BOTH_SIDES` = 1953981043,

/\*\*

- Text wraps on the largest side.
  \*/
  `LARGEST_AREA` = 1953975411,

/\*\*

- Text wraps on the left side.
  \*/
  `LEFT_SIDE` = 1953983603,

/\*\*

- Text wraps on the right side.
  \*/
  `RIGHT_SIDE` = 1953985139,

/\*\*

- Text wraps on the side away from the binding.
  \*/
  `SIDE_AWAY_FROM_SPINE` = 1953980787,

/\*\*

- Text wraps on the binding side.
  \*/
  `SIDE_TOWARDS_SPINE` = 1953985651,
  }

/\*\*

- Object text-wrap mode choices.
  \*/
  declare enum TextWrapModes {
  /\*\*
  - Makes text follow the object's bounding box.
    \*/
    `BOUNDING_BOX_TEXT_WRAP` = 1651729523,

/\*\*

- Makes text follow the object using the specified contour options.
  \*/
  CONTOUR = 1835233134,

/\*\*

- Forces text above or below the object so no text appears to the right or left of it.
  \*/
  `JUMP_OBJECT_TEXT_WRAP` = 1650552420,

/\*\*

- Sends text onward to the next column that can accept it.
  \*/
  `NEXT_COLUMN_TEXT_WRAP` = 1853384306,

/\*\*

- Applies no text wrap.
  \*/
  NONE = 1852796517,
  }

/\*\*

- Choices describing font availability status.
  \*/
  declare enum FontStatus {
  /\*\*
  - Indicates a fauxed font.
    \*/
    FAUXED = 1718830689,

/\*\*

- Marks a font that is installed.
  \*/
  INSTALLED = 1718831470,

/\*\*

- Marks the font unavailable.
  \*/
  `NOT_AVAILABLE` = 1718832705,

/\*\*

- Identifies a substitute font.
  \*/
  SUBSTITUTED = 1718834037,

/\*\*

- Status for the font is unknown.
  \*/
  UNKNOWN = 1433299822,
  }

/\*\*

- Choices for font type.
  \*/
  declare enum FontTypes {
  /\*\*
  - ATC font type.
    \*/
    ATC = 1718894932,

/\*\*

- Bitmap font type.
  \*/
  BITMAP = 1718895209,

/\*\*

- CID font type.
  \*/
  CID = 1718895433,

/\*\*

- OCF font type.
  \*/
  OCF = 1718898499,

/\*\*

- OpenType CFF font type.
  \*/
  `OPENTYPE_CFF` = 1718898502,

/\*\*

- OpenType CID font type.
  \*/
  `OPENTYPE_CID` = 1718898505,

/\*\*

- OpenType TT font type.
  \*/
  `OPENTYPE_TT` = 1718898516,

/\*\*

- TrueType font type.
  \*/
  TRUETYPE = 1718899796,

/\*\*

- Type 1 font type.
  \*/
  `TYPE_1` = 1718899761,

/\*\*

- Unknown font type.
  \*/
  UNKNOWN = 1433299822,
  }

/\*\*

- Available choices for OpenType features.
  \*/
  declare enum OpenTypeFeature {
  /\*\*
  - Enables authentic small caps instead of scaled copies of the font's regular caps.
    \*/
    `ALL_SMALL_CAPS_FEATURE` = 1664250691,

/\*\*

- Turns on contextual ligatures together with connecting alternates.
  \*/
  `CONTEXTUAL_ALTERNATES_FEATURE` = 1330930497,

/\*\*

- Uses the current font's default figure style for figure glyphs.
  \*/
  `DEFAULT_FIGURE_STYLE_FEATURE` = 1330931268,

/\*\*

- For a non-standard fraction such as 4/13, where two numbers are separated by a slash, converts the second number into a denominator.
  \*/
  `DENOMINATOR_FEATURE` = 1884247108,

/\*\*

- Permits optional discretionary ligatures.
  \*/
  `DISCRETIONARY_LIGATURES_FEATURE` = 1330930764,

/\*\*

- Converts slash-separated numbers such as 1/2 into fraction glyphs. Note: Some fonts limit the fractions feature to standard fractions. For non-standard cases such as 4/13, denominator feature and numerator feature handle the individual number positions.
  \*/
  `FRACTIONS_FEATURE` = 1330931282,

/\*\*

- Justification alternate.
  \*/
  `JUSTIFICATION_ALTERNATE` = 1330932309,

/\*\*

- Low.
  \*/
  LOW = 1701727351,

/\*\*

- For a non-standard slash fraction such as 4/13, converts the first number into the numerator.
  \*/
  `NUMERATOR_FEATURE` = 1884247118,

/\*\*

- Raises the alphabetic characters in ordinal numbers as superscript.
  \*/
  `ORDINAL_FEATURE` = 1330933586,

/\*\*

- Overlap swash.
  \*/
  `OVERLAP_SWASH` = 1330933590,

/\*\*

- Uses full-height figures with varying widths.
  \*/
  `PROPORTIONAL_LINING_FEATURE` = 1330932816,

/\*\*

- Oldstyle figures receive variable heights and variable widths.
  \*/
  `PROPORTIONAL_OLDSTYLE_FEATURE` = 1330933587,

/\*\*

- Stretched alternate choice.
  \*/
  `STRETCHED_ALTERNATE` = 1330934610,

/\*\*

- Stylistic alternate choice.
  \*/
  `STYLISTIC_ALTERNATE` = 1330934612,

/\*\*

- Sizes lowered glyphs properly against nearby characters.
  \*/
  `SUBSCRIPT_FEATURE` = 1884247106,

/\*\*

- Sizes raised glyphs properly against nearby characters.
  \*/
  `SUPERSCRIPT_FEATURE` = 1884247123,

/\*\*

- Provides regular and contextual swashes, including possible alternate caps and end-of-word variants.
  \*/
  `SWASH_FEATURE` = 1330934615,

/\*\*

- Uses full-height figures with fixed, equal width.
  \*/
  `TABULAR_LINING_FEATURE` = 1330931284,

/\*\*

- Uses varying-height figures with fixed, equal widths.
  \*/
  `TABULAR_OLDSTYLE_FEATURE` = 1330933588,

/\*\*

- Enables alternate uppercase title characters.
  \*/
  `TITLING_FEATURE` = 1330934857,
  }

/\*\*

- Choices for lining up smaller characters with the line's largest character.
  \*/
  declare enum CharacterAlignment {
  /\*\*
  - Lines up small characters in a line with the large character.
    \*/
    `ALIGN_BASELINE` = 1247896172,

/\*\*

- In horizontal text, lines up small characters with the bottom of the em box of large characters. In vertical text, places them at the left of the em box.
  \*/
  `ALIGN_EM_BOTTOM` = 1247896173,

/\*\*

- Centers small characters within the em box of large characters.
  \*/
  `ALIGN_EM_CENTER` = 1247896436,

/\*\*

- In horizontal text, lines up small characters with the top of the em box of large characters. In vertical text, places them at the right of the em box.
  \*/
  `ALIGN_EM_TOP` = 1247900784,

/\*\*

- In horizontal text, lines up small characters with the bottom of the ICF of large characters. In vertical text, places them at the left of the ICF.
  \*/
  `ALIGN_ICF_BOTTOM` = 1248420461,

/\*\*

- In horizontal text, lines up small characters with the top of the ICF of large characters. In vertical text, places them at the right of the ICF.
  \*/
  `ALIGN_ICF_TOP` = 1248425072,
  }

/\*\*

- Choices for substituting standard glyphs with alternate glyph forms.
  \*/
  declare enum AlternateGlyphForms {
  /\*\*
  - Selects the expert variant.
    \*/
    `EXPERT_FORM` = 1247897445,

/\*\*

- Selects the full-width variant.
  \*/
  `FULL_WIDTH_FORM` = 1247897446,

/\*\*

- Selects the JIS04 variant.
  \*/
  `JIS04_FORM` = 1247897396,

/\*\*

- Selects the JIS78 variant.
  \*/
  `JIS78_FORM` = 1247897399,

/\*\*

- Selects the JIS83 variant.
  \*/
  `JIS83_FORM` = 1247897400,

/\*\*

- Selects the JIS90 variant.
  \*/
  `JIS90_FORM` = 1247897401,

/\*\*

- Selects the monospaced half-width variant.
  \*/
  `MONOSPACED_HALF_WIDTH_FORM` = 1247897453,

/\*\*

- Selects the NLC variant.
  \*/
  `NLC_FORM` = 1247897454,

/\*\*

- Applies no alternate form.
  \*/
  NONE = 1852796517,

/\*\*

- Replaces half-width and full-width glyphs with proportional glyphs.
  \*/
  `PROPORTIONAL_WIDTH_FORM` = 1247897456,

/\*\*

- Selects the quarter-width variant.
  \*/
  `QUARTER_WIDTH_FORM` = 1247897457,

/\*\*

- Selects the third-width variant.
  \*/
  `THIRD_WIDTH_FORM` = 1247897448,

/\*\*

- Selects the traditional variant.
  \*/
  `TRADITIONAL_FORM` = 1247897460,
  }

/\*\*

- Kenten mark overprint choices.
  \*/
  declare enum AdornmentOverprint {
  /\*\*
  - Applies automatic overprint.
    \*/
    AUTO = 1635019116,

/\*\*

- Disables overprint.
  \*/
  `OVERPRINT_OFF` = 1701736294,

/\*\*

- Enables overprint.
  \*/
  `OVERPRINT_ON` = 1701736302,
  }

/\*\*

- Kenten character style choices.
  \*/
  declare enum KentenCharacter {
  /\*\*
  - Selects a custom kenten style.
    \*/
    CUSTOM = 1131639917,

/\*\*

- Selects the kenten black circle.
  \*/
  `KENTEN_BLACK_CIRCLE` = 1248551523,

/\*\*

- Selects the kenten black triangle.
  \*/
  `KENTEN_BLACK_TRIANGLE` = 1248551540,

/\*\*

- Selects the kenten bullseye.
  \*/
  `KENTEN_BULLSEYE` = 1248551525,

/\*\*

- Selects the kenten fisheye.
  \*/
  `KENTEN_FISHEYE` = 1248552549,

/\*\*

- Selects the kenten sesame dot.
  \*/
  `KENTEN_SESAME_DOT` = 1248551795,

/\*\*

- Selects the kenten small black circle.
  \*/
  `KENTEN_SMALL_BLACK_CIRCLE` = 1248555875,

/\*\*

- Selects the kenten small white circle.
  \*/
  `KENTEN_SMALL_WHITE_CIRCLE` = 1248555895,

/\*\*

- Selects the kenten white circle.
  \*/
  `KENTEN_WHITE_CIRCLE` = 1248556899,

/\*\*

- Selects the kenten white sesame dot.
  \*/
  `KENTEN_WHITE_SESAME_DOT` = 1248551799,

/\*\*

- Selects the kenten white triangle.
  \*/
  `KENTEN_WHITE_TRIANGLE` = 1248556916,

/\*\*

- Applies no kenten.
  \*/
  NONE = 1852796517,
  }

/\*\*

- Choices for kenten or ruby placement relative to the parent character.
  \*/
  declare enum RubyKentenPosition {
  /\*\*
  - Sets kenten or ruby above and to the right of the parent character.
    \*/
    `ABOVE_RIGHT` = 1248551282,

/\*\*

- Sets kenten or ruby below and to the left of the parent character.
  \*/
  `BELOW_LEFT` = 1248551532,
  }

/\*\*

- Choices for the kenten character set.
  \*/
  declare enum KentenCharacterSet {
  /\*\*
  - Character input set.
    \*/
    `CHARACTER_INPUT` = 1248028777,

/\*\*

- JIS set.
  \*/
  JIS = 1246382419,

/\*\*

- Kuten set.
  \*/
  KUTEN = 1248556404,

/\*\*

- Shift JIS set.
  \*/
  `SHIFT_JIS` = 1249077875,

/\*\*

- Unicode set.
  \*/
  UNICODE = 1249209961,
  }

/\*\*

- Choices for ruby type.
  \*/
  declare enum RubyTypes {
  /\*\*
  - Supplies ruby for a character group.
    \*/
    `GROUP_RUBY` = 1249011570,

/\*\*

- Supplies ruby separately for each character in the group.
  \*/
  `PER_CHARACTER_RUBY` = 1249013859,
  }

/\*\*

- Choices for ruby alignment.
  \*/
  declare enum RubyAlignments {
  /\*\*
  - Ruby 1 aki.
    \*/
    `RUBY_1_AKI` = 1248997729,

/\*\*

- Centers ruby relative to its parent text.
  \*/
  `RUBY_CENTER` = 1249010548,

/\*\*

- Ruby equal aki.
  \*/
  `RUBY_EQUAL_AKI` = 1249011041,

/\*\*

- Spreads ruby over the parent text.
  \*/
  `RUBY_FULL_JUSTIFY` = 1249011306,

/\*\*

- Ruby JIS.
  \*/
  `RUBY_JIS` = 1249012339,

/\*\*

- Lines up ruby with the left-most parent-text character.
  \*/
  `RUBY_LEFT` = 1249012838,

/\*\*

- Lines up ruby with the right-most parent-text character.
  \*/
  `RUBY_RIGHT` = 1249014388,
  }

/\*\*

- Choices for spacing ruby beside parent text.
  \*/
  declare enum RubyParentSpacing {
  /\*\*
  - Ruby parent 121 aki spacing.
    \*/
    `RUBY_PARENT_121_AKI` = 1248997682,

/\*\*

- Ruby parent both-sides spacing.
  \*/
  `RUBY_PARENT_BOTH_SIDES` = 1249010291,

/\*\*

- Transfers parent text aki to the ruby characters.
  \*/
  `RUBY_PARENT_EQUAL_AKI` = 1249014113,

/\*\*

- Justifies ruby characters against both parent-text edges.
  \*/
  `RUBY_PARENT_FULL_JUSTIFY` = 1249014634,

/\*\*

- Does not derive ruby spacing from parent text.
  \*/
  `RUBY_PARENT_NO_ADJUSTMENT` = 1249013345,
  }
