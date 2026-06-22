# Indesign (part 13)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Conflict-resolution choices for loaded master pages whose names match existing masterpages.
  \*/
  declare enum GlobalClashResolutionStrategyForMasterPage {
  /\*\*
  - Replaces the matching master page already present.
    \*/
    `LOAD_ALL_WITH_OVERWRITE` = 1279350607,

/\*\*

- Gives the incoming master page a new name.
  \*/
  `LOAD_ALL_WITH_RENAME` = 1279350610,
  }

/\*\*

- Clipping-path creation type.
  \*/
  declare enum ClippingPathType {
  /\*\*
  - Derives the clipping path from an alpha channel assigned to the graphic by a graphics application.
    \*/
    `ALPHA_CHANNEL` = 1634756707,

/\*\*

- Builds the clipping path from a pixel-value threshold together with tolerance settings.
  \*/
  `DETECT_EDGES` = 1685349735,

/\*\*

- Applies no clipping path.
  \*/
  NONE = 1852796517,

/\*\*

- Uses the clipping path supplied for the graphic in Photoshop.
  \*/
  `PHOTOSHOP_PATH` = 1886613620,

/\*\*

- (Read-only) Indicates that the clipping path was edited manually.
  \*/
  `USER_MODIFIED_PATH` = 1970106484,
  }

/\*\*

- Choices for updating links.
  \*/
  declare enum UpdateLinkOptions {
  /\*\*
  - Updates visibility settings so they match the changed file.
    \*/
    `APPLICATION_SETTINGS` = 1819243873,

/\*\*

- Keeps the current document's specified settings and ignores the modified ones.
  \*/
  `KEEP_OVERRIDES` = 1819241327,

/\*\*

- Update option has not been specified.
  \*/
  UNKNOWN = 1433299822,
  }

/\*\*

- Choices for icon dimensions.
  \*/
  declare enum IconSizes {
  /\*\*
  - Icon at the extra-large size.
    \*/
    `EXTRA_LARGE_ICON` = 1885695079,

/\*\*

- Icon at the extra-small size.
  \*/
  `EXTRA_SMALL_ICON` = 1885696877,

/\*\*

- Icon at jumbo size.
  \*/
  `JUMBO_ICON` = 1886943340,

/\*\*

- Icon at large size.
  \*/
  `LARGE_ICON` = 1884058215,

/\*\*

- Icon at medium size.
  \*/
  `MEDIUM_ICON` = 1886217572,

/\*\*

- Icon at small size.
  \*/
  `SMALL_ICON` = 1886612844,
  }

/\*\*

- Resizing behavior choices for palette layouts.
  \*/
  declare enum PanelLayoutResize {
  /\*\*
  - Keeps the master pages panel area from resizing when the panel changes size.
    \*/
    `MASTERS_FIXED` = 1886416230,

/\*\*

- Keeps the document pages panel area from resizing when the panel changes size.
  \*/
  `PAGES_FIXED` = 1886414456,

/\*\*

- Resizes panel areas using proportional scaling.
  \*/
  `PROPORTIONAL_RESIZE` = 1886417010,
  }

/\*\*

- Page-display arrangements available in Pages Panel
  \*/
  declare enum PageViewOptions {
  /\*\*
  - Arranges pages as vertical columns grouped by alternate layout.
    \*/
    `BY_ALTERNATE_LAYOUT` = 1987277931,

/\*\*

- Arranges pages in horizontal rows.
  \*/
  HORIZONTALLY = 1752396907,

/\*\*

- Arranges pages in one vertical column.
  \*/
  VERTICALLY = 1987211127,
  }

/\*\*

- Color-information representation choices for exported PDF output.
  \*/
  declare enum PDFColorSpace {
  /\*\*
  - Encodes all color values in CYMK color space.
    \*/
    CMYK = 1129142603,

/\*\*

- Converts every color value into high-quality black-and-white imagery, with gray levels reflecting source-object luminosity.
  \*/
  GRAY = 1766290041,

/\*\*

- Repurposes CMYK colors.
  \*/
  `REPURPOSE_CMYK` = 1917013337,

/\*\*

- Repurposes RGB colors.
  \*/
  `REPURPOSE_RGB` = 1917994818,

/\*\*

- Encodes color values in RGB, best for documents intended to be viewed onscreen.
  \*/
  RGB = 1666336578,

/\*\*

- Keeps every image in its original color space.
  \*/
  `UNCHANGED_COLOR_SPACE` = 1970161251,
  }

/\*\*

- Acrobat compatibility setting for an exported PDF document.
  \*/
  declare enum AcrobatCompatibility {
  /\*\*
  - Produces a file compatible with Acrobat 4.0 and later.
    \*/
    `ACROBAT_4` = 1097020464,

/\*\*

- Produces a file compatible with Acrobat 5.0 and later.
  \*/
  `ACROBAT_5` = 1097020720,

/\*\*

- Produces a file compatible with Acrobat 6.0 and later.
  \*/
  `ACROBAT_6` = 1097020976,

/\*\*

- Produces a file compatible with Acrobat 7.0 or higher.
  \*/
  `ACROBAT_7` = 1097021232,

/\*\*

- Compatibility target is Acrobat 8.0.
  \*/
  `ACROBAT_8` = 1097021488,
  }

/\*\*

- ICC profile inclusion choices for the PDF document.
  \*/
  declare enum ICCProfiles {
  /\*\*
  - Includes every ICC profile.
    \*/
    `INCLUDE_ALL` = 1229144929,

/\*\*

- Excludes ICC profiles.
  \*/
  `INCLUDE_NONE` = 1229144942,

/\*\*

- Includes RGB profiles and tagged source CMYK profiles.
  \*/
  `INCLUDE_RGB_AND_TAGGED` = 1229144946,

/\*\*

- Includes profiles from tagged sources.
  \*/
  `INCLUDE_TAGGED` = 1229144948,
  }

/\*\*

- Compression choices for bitmap images.
  \*/
  declare enum BitmapCompression {
  /\*\*
  - Automatic JPEG 2000 compression method.
    \*/
    `AUTOMATIC_JPEG_2000` = 1634365490,

/\*\*

- Applies JPEG compression while automatically selecting quality. Requires acrobat compatibility of acrobat 6 or higher.
  \*/
  `AUTO_COMPRESSION` = 1631808880,

/\*\*

- Applies JPEG compression.
  \*/
  JPEG = 1785751398,

/\*\*

- Applies JPEG 2000 compression. Requires acrobat compatibility of acrobat 6 or higher.
  \*/
  `JPEG_2000` = 1785751346,

/\*\*

- Applies no compression.
  \*/
  NONE = 1852796517,

/\*\*

- Applies ZIP compression.
  \*/
  ZIP = 2053730371,
  }

/\*\*

- Bitmap-image compression amount and type.
  \*/
  declare enum CompressionQuality {
  /\*\*
  - Applies 8-bit compression. Valid only when bitmap compression is ZIP.
    \*/
    `EIGHT_BIT` = 1701722210,

/\*\*

- Applies 4-bit compression. Valid only when bitmap compression is ZIP.
  \*/
  `FOUR_BIT` = 1701721186,

/\*\*

- Applies high compression. Not valid when bitmap compression is ZIP.
  \*/
  HIGH = 1701726313,

/\*\*

- Applies low compression. Not valid when bitmap compression is ZIP.
  \*/
  LOW = 1701727351,

/\*\*

- Applies maximum compression. Not valid when bitmap compression is ZIP.
  \*/
  MAXIMUM = 1701727608,

/\*\*

- Applies medium compression. Not valid when bitmap compression is ZIP.
  \*/
  MEDIUM = 1701727588,

/\*\*

- Applies minimum compression. Not valid when bitmap compression is ZIP.
  \*/
  MINIMUM = 1701727598,
  }

/\*\*

- Compression amount and type for monochrome bitmap images.
  \*/
  declare enum MonoBitmapCompression {
  /\*\*
  - Applies CCITT Group 3 compression.
    \*/
    CCIT3 = 1128879155,

/\*\*

- Applies CCITT Group 4 compression.
  \*/
  CCIT4 = 1128879156,

/\*\*

- Applies no compression.
  \*/
  NONE = 1852796517,

/\*\*

- Applies Run Length compression.
  \*/
  `RUN_LENGTH` = 1919839299,

/\*\*

- Applies ZIP compression.
  \*/
  ZIP = 2053730371,
  }

/\*\*

- PDF printer-mark weight
  \*/
  declare enum PDFMarkWeight {
  /\*\*
  - Printer-mark line weight is 0.125 points.
    \*/
    P125PT = 825374064,

/\*\*

- Printer-mark line weight is 0.25 points.
  \*/
  P25PT = 842346608,

/\*\*

- Printer-mark line weight is 0.50 points.
  \*/
  P50PT = 892350576,
  }

/\*\*

- Resampling-method choice.
  \*/
  declare enum Sampling {
  /\*\*
  - Determines pixel color with a weighted average.
    \*/
    `BICUBIC_DOWNSAMPLE` = 1650742125,

/\*\*

- Computes the average pixel color for a sample area and replaces that whole area with the result.
  \*/
  DOWNSAMPLE = 1684951917,

/\*\*

- Performs no resampling.
  \*/
  NONE = 1852796517,

/\*\*

- Picks the center pixel of the sample area and uses that color for the entire area.
  \*/
  SUBSAMPLE = 1935823725,
  }

/\*\*

- Preset format used when presets are transferred in or out.
  \*/
  declare enum ExportPresetFormat {
  /\*\*
  - Document-preset format.
    \*/
    `DOCUMENT_PRESETS_FORMAT` = 1683190892,

/\*\*

- Flattener-preset format.
  \*/
  `FLATTENER_PRESETS_FORMAT` = 1951626348,

/\*\*

- PDF export-preset format.
  \*/
  `PDF_EXPORT_PRESETS_FORMAT` = 1716745324,

/\*\*

- Printer-preset format.
  \*/
  `PRINTER_PRESETS_FORMAT` = 1918071916,
  }

/\*\*

- Portion of a PDF document used for placement.
  \*/
  declare enum PDFCrop {
  /\*\*
  - Places only the placeable-artwork area designated by the PDF author.
    \*/
    `CROP_ART` = 1131573313,

/\*\*

- Places only the area representing clipped content.
  \*/
  `CROP_BLEED` = 1131573314,

/\*\*

- Places the page bounding box while using all layers.
  \*/
  `CROP_CONTENT_ALL_LAYERS` = 1131561324,

/\*\*

- Places the page bounding box while using visible layers only.
  \*/
  `CROP_CONTENT_VISIBLE_LAYERS` = 1131566703,

/\*\*

- Places the area corresponding to the original PDF document's physical paper size.
  \*/
  `CROP_MEDIA` = 1131573325,

/\*\*

- Places only the area shown by Acrobat.
  \*/
  `CROP_PDF` = 1131573328,

/\*\*

- Places only the area corresponding to the document's final trim size.
  \*/
  `CROP_TRIM` = 1131573332,
  }

/\*\*

- Object groups to compress in a PDF document.
  \*/
  declare enum PDFCompressionType {
  /\*\*
  - Performs no compression.
    \*/
    `COMPRESS_NONE` = 1131368047,

/\*\*

- Compresses every object.
  \*/
  `COMPRESS_OBJECTS` = 1131368290,

/\*\*

- Compresses only objects associated with PDF structure.
  \*/
  `COMPRESS_STRUCTURE` = 1131369332,
  }

/\*\*

- Color-profile selection.
  \*/
  declare enum PDFProfileSelector {
  /\*\*
  - Selects the CMYK profile from the document.
    \*/
    `USE_DOCUMENT` = 1967419235,

/\*\*

- Selects the monitor color profile.
  \*/
  `USE_MONITOR_PROFILE` = 1836008528,

/\*\*

- Selects no profile.
  \*/
  `USE_NO_PROFILE` = 1851868240,

/\*\*

- Selects the working CMYK profile.
  \*/
  WORKING = 1466921579,
  }

/\*\*

- PDF/X compliance-standard choices.
  \*/
  declare enum PDFXStandards {
  /\*\*
  - Skips compliance checking against a PDF/X standard.
    \*/
    NONE = 1852796517,

/\*\*

- Checks compliance with the PDF/X-1a:2001 standard.
  \*/
  `PDFX1A2001_STANDARD` = 1396912481,

/\*\*

- Checks compliance with the PDF/X-1a:2003 standard.
  \*/
  `PDFX1A2003_STANDARD` = 1395745075,

/\*\*

- Checks compliance with the PDF/X-3:2002 standard.
  \*/
  `PDFX32002_STANDARD` = 1396922419,

/\*\*

- Checks compliance with the PDF/X-3:2003 standard.
  \*/
  `PDFX32003_STANDARD` = 1398289203,

/\*\*

- Uses the PDFX42010 standard.
  \*/
  `PDFX42010_STANDARD` = 1398289496,
  }

/\*\*

- Choices for exporting layers.
  \*/
  declare enum ExportLayerOptions {
  /\*\*
  - Exports every layer
    \*/
    `EXPORT_ALL_LAYERS` = 1702388076,

/\*\*

- Exports visible layers
  \*/
  `EXPORT_VISIBLE_LAYERS` = 1702393452,

/\*\*

- Exports layers that are visible and printable
  \*/
  `EXPORT_VISIBLE_PRINTABLE_LAYERS` = 1702260844,
  }

/\*\*

- Magnification choices for PDF export.
  \*/
  declare enum PdfMagnificationOptions {
  /\*\*
  - Displays at actual size.
    \*/
    `ACTUAL_SIZE` = 2053206906,

/\*\*

- Uses the default magnification.
  \*/
  `DEFAULT_VALUE` = 1147563124,

/\*\*

- Selects the 50 percent magnification option.
  \*/
  `FIFTY_PERCENT` = 2053531248,

/\*\*

- Selects the fit height magnification option.
  \*/
  `FIT_HEIGHT` = 1212437352,

/\*\*

- Selects the fit page magnification option.
  \*/
  `FIT_PAGE` = 2053534832,

/\*\*

- Selects the fit visible magnification option.
  \*/
  `FIT_VISIBLE` = 1212437334,

/\*\*

- Selects the fit width magnification option.
  \*/
  `FIT_WIDTH` = 1212437335,

/\*\*

- Selects the 100 percent magnification option.
  \*/
  `ONE_HUNDRED_PERCENT` = 2053533544,

/\*\*

- Selects the 75 percent magnification option.
  \*/
  `SEVENTY_FIVE_PERCENT` = 2053534566,

/\*\*

- Selects the 25 percent magnification option.
  \*/
  `TWENTY_FIVE_PERCENT` = 2053534822,
  }

/\*\*

- Page-layout choices for PDF export.
  \*/
  declare enum PageLayoutOptions {
  /\*\*
  - Uses the default page layout.
    \*/
    `DEFAULT_VALUE` = 1147563124,

/\*\*

- Single-page layout.
  \*/
  `SINGLE_PAGE` = 1987736432,

/\*\*

- Continuous layout with one page.
  \*/
  `SINGLE_PAGE_CONTINUOUS` = 1884508259,

/\*\*

- Two-up layout with a cover page.
  \*/
  `TWO_UP_COVER_PAGE` = 1884570448,

/\*\*

- Continuous two-up cover-page layout.
  \*/
  `TWO_UP_COVER_PAGE_CONTINUOUS` = 1884570467,

/\*\*

- Two-up layout with facing pages.
  \*/
  `TWO_UP_FACING` = 1884575046,

/\*\*

- Continuous two-up facing-page layout.
  \*/
  `TWO_UP_FACING_CONTINUOUS` = 1884571235,
  }

/\*\*

- Raster-resolution choices for PDF export.
  \*/
  declare enum RasterResolutionOptions {
  /\*\*
  - Resolution option: 96 pixels per inch.
    \*/
    `NINETY_SIX_PPI` = 1853059184,

/\*\*

- Resolution option: 144 pixels per inch.
  \*/
  `ONE_HUNDRED_FORTY_FOUR_PPI` = 1868984432,

/\*\*

- Resolution option: 72 pixels per inch.
  \*/
  `SEVENTY_TWO_PPI` = 1937010800,
  }

/\*\*

- Raster-compression choices for PDF output.
  \*/
  declare enum PDFRasterCompressionOptions {
  /\*\*
  - Applies JPEG compression and automatically selects the best quality type.
    \*/
    `AUTOMATIC_COMPRESSION` = 1936875875,

/\*\*

- Applies JPEG compression.
  \*/
  `JPEG_COMPRESSION` = 1936878179,

/\*\*

- Uses the best quality type.
  \*/
  `LOSSLESS_COMPRESSION` = 1936878691,
  }

/\*\*

- JPEG quality choices for PDF output.
  \*/
  declare enum PDFJPEGQualityOptions {
  /\*\*
  - Applies high JPEG compression.
    \*/
    HIGH = 1701726313,

/\*\*

- Applies low JPEG compression.
  \*/
  LOW = 1701727351,

/\*\*

- Applies maximum JPEG compression.
  \*/
  MAXIMUM = 1701727608,

/\*\*

- Applies medium JPEG compression.
  \*/
  MEDIUM = 1701727588,

/\*\*

- Applies minimum JPEG compression.
  \*/
  MINIMUM = 1701727598,
  }

/\*\*

- Choices controlling how interactive elements are drawn.
  \*/
  declare enum InteractiveElementsOptions {
  /\*\*
  - Draws only the appearance of interactive elements.
    \*/
    `APPEARANCE_ONLY` = 1097887823,

/\*\*

- Leaves interactive elements out.
  \*/
  `DO_NOT_INCLUDE` = 1145981283,
  }

/\*\*

- Choices controlling how interactive elements are drawn.
  \*/
  declare enum InteractivePDFInteractiveElementsOptions {
  /\*\*
  - Draws only the appearance of interactive elements.
    \*/
    `APPEARANCE_ONLY` = 1097887823,

/\*\*

- Includes every interactive element.
  \*/
  `INCLUDE_ALL_MEDIA` = 1231241580,
  }

/\*\*

- Page-transition override choice used during export.
  \*/
  declare enum PageTransitionOverrideOptions {
  /\*\*
  - Blinds page transition.
    \*/
    `BLINDS_TRANSITION` = 1886667372,

/\*\*

- Blinds page transition.
  \*/
  `BOX_TRANSITION` = 1886667384,

/\*\*

- Comb page transition.
  \*/
  `COMB_TRANSITION` = 1886667618,

/\*\*

- Cover page transition.
  \*/
  `COVER_TRANSITION` = 1886667638,

/\*\*

- Dissolve page transition.
  \*/
  `DISSOLVE_TRANSITION` = 1886667891,

/\*\*

- Fade page transition.
  \*/
  `FADE_TRANSITION` = 1886668388,

/\*\*

- Takes the page transition from the document.
  \*/
  `FROM_DOCUMENT` = 1718764655,

/\*\*

- Applies no page transition.
  \*/
  NONE = 1852796517,

/\*\*

- Page Turn page transition (SWF only).
  \*/
  `PAGE_TURN_TRANSITION` = 1886670932,

/\*\*

- Push page transition.
  \*/
  `PUSH_TRANSITION` = 1886670963,

/\*\*

- Split page transition.
  \*/
  `SPLIT_TRANSITION` = 1886671728,

/\*\*

- Uncover page transition.
  \*/
  `UNCOVER_TRANSITION` = 1886672227,

/\*\*

- Wipe page transition.
  \*/
  `WIPE_TRANSITION` = 1886672752,

/\*\*

- Zoom In page transition.
  \*/
  `ZOOM_IN_TRANSITION` = 1886673481,

/\*\*

- Zoom Out page transition.
  \*/
  `ZOOM_OUT_TRANSITION` = 1886673487,
  }

/\*\*

- Structure-order choices for tagged PDF output
  \*/
  declare enum TaggedPDFStructureOrderOptions {
  /\*\*
  - Uses Articles order for the tagged PDF structure.
    \*/
    `USE_ARTICLES` = 1348554610,

/\*\*

- Uses XML structure with layout-heuristic fallback for the tagged PDF structure.
  \*/
  `USE_XML_STRUCTURE` = 1350062959,
  }

/\*\*

- Display-title choices for PDF export.
  \*/
  declare enum PdfDisplayTitleOptions {
  /\*\*
  - Displays the document title.
    \*/
    `DISPLAY_DOCUMENT_TITLE` = 1148413044,

/\*\*

- Displays the file name.
  \*/
  `DISPLAY_FILE_NAME` = 1148413550,
  }

/\*\*

- Basis choices for the paragraph shading top origin.
  \*/
  declare enum ParagraphShadingTopOriginEnum {
  /\*\*
  - Bases the paragraph shading top origin on the paragraph text ascent.
    \*/
    `ASCENT_TOP_ORIGIN` = 1886606433,

/\*\*

- Bases the paragraph shading top origin on the paragraph text baseline.
  \*/
  `BASELINE_TOP_ORIGIN` = 1886606434,

/\*\*

- Bases the paragraph shading top origin on the paragraph text leading.
  \*/
  `LEADING_TOP_ORIGIN` = 1885492332,
  }

/\*\*

- Basis choices for the paragraph shading bottom origin.
  \*/
  declare enum ParagraphShadingBottomOriginEnum {
  /\*\*
  - Bases the paragraph shading bottom origin on the paragraph text baseline.
    \*/
    `BASELINE_BOTTOM_ORIGIN` = 1886601826,

/\*\*

- Bases the paragraph shading bottom origin on the paragraph text descent.
  \*/
  `DESCENT_BOTTOM_ORIGIN` = 1886601828,
  }

/\*\*

- Choices controlling restart behavior for endnote numbering.
  \*/
  declare enum EndnoteRestarting {
  /\*\*
  - Keeps endnote numbering continuous through the document instead of restarting.
    \*/
    CONTINUOUS = 1164210803,

/\*\*

- Starts endnote numbering over for each story.
  \*/
  `STORY_RESTART` = 1165193843,
  }

/\*\*

- Scope choices for placing endnotes.
  \*/
  declare enum EndnoteScope {
  /\*\*
  - Endnotes belong to each document.
    \*/
    `ENDNOTE_DOCUMENT_SCOPE` = 1162765427,

/\*\*

- Endnotes belong to each story.
  \*/
  `STORY_SCOPE` = 1162769267,
  }

/\*\*

- Frame-creation choices for endnotes.
  \*/
  declare enum EndnoteFrameCreate {
  /\*\*
  - Loads endnotes in the placegun so they can be placed anywhere in the document.
    \*/
    `LOAD_ENDNOTE_PLACE_GUN` = 1162768487,

/\*\*

- Creates endnotes on a newly created page and frame.
  \*/
  `NEW_PAGE` = 1162767984,
  }

/\*\*

- Basis choices for paragraph border width.
  \*/
  declare enum ParagraphBorderEnum {
  /\*\*
  - Bases the paragraph border on the column width.
    \*/
    `COLUMN_WIDTH` = 1265399652,

/\*\*

- Bases the paragraph border on the width of paragraph text lines.
  \*/
  `TEXT_WIDTH` = 1886681207,
  }

/\*\*

- Basis choices for the paragraph border top origin.
  \*/
  declare enum ParagraphBorderTopOriginEnum {
  /\*\*
  - Bases the paragraph border top origin on the paragraph text ascent.
    \*/
    `ASCENT_TOP_ORIGIN` = 1886606433,

/\*\*

- Bases the paragraph border top origin on the paragraph text baseline.
  \*/
  `BASELINE_TOP_ORIGIN` = 1886606434,

/\*\*

- Bases the paragraph border top origin on the paragraph text leading.
  \*/
  `LEADING_TOP_ORIGIN` = 1885492332,
  }

/\*\*

- Basis choices for the paragraph border bottom origin.
  \*/
  declare enum ParagraphBorderBottomOriginEnum {
  /\*\*
  - Bases the paragraph border bottom origin on the paragraph text baseline.
    \*/
    `BASELINE_BOTTOM_ORIGIN` = 1886601826,

/\*\*

- Bases the paragraph border bottom origin on the paragraph text descent.
  \*/
  `DESCENT_BOTTOM_ORIGIN` = 1886601828,
  }

/\*\*

- Hyphenation styles supplied by a provider. Current support is limited to the Duden hyphenation provider.
  \*/
  declare enum HyphenationStyleEnum {
  /\*\*
  - Places hyphens at aesthetic hyphenation points.
    \*/
    `HYPH_AESTHETIC` = 1684104563,

/\*\*

- Places hyphens at every possible hyphenation point.
  \*/
  `HYPH_ALL` = 1684106348,

/\*\*

- Places hyphens at all hyphenation points except unaesthetic ones.
  \*/
  `HYPH_ALL_BUT_UNAESTHETIC` = 1684103797,

/\*\*

- Places hyphens at preferred aesthetic hyphenation points.
  \*/
  `HYPH_PREFERRED_AESTHETIC` = 1685086565,
  }

/\*\*

- Space handling between paragraphs that share the same style.
  \*/
  declare enum Spacing {
  /\*\*
  - Ignores spacing between paragraphs when they use the same style.
    \*/
    SETIGNORE = 1768386162,
    }

/\*\*

- Choices indicating the shape type to which an object is converted.
  \*/
  declare enum ConvertShapeOptions {
  /\*\*
  - Changes the object into a rectangle with beveled corners.
    \*/
    `CONVERT_TO_BEVELED_RECTANGLE` = 1129529938,

/\*\*

- Changes the object into a closed path.
  \*/
  `CONVERT_TO_CLOSED_PATH` = 1129530224,
