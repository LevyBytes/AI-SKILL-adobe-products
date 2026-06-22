# Indesign (part 21)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Size behavior choices.
  \*/
  declare enum SizeTypeEnum {
  /\*\*
  - Uses the default sizing mode.
    \*/
    `DEFAULT_SIZE` = 1147491177,

/\*\*

- Uses a fixed sizing mode.
  \*/
  `FIXED_SIZE` = 1181317203,

/\*\*

- Applies no sizing mode.
  \*/
  `NONE_SIZE` = 1315925587,

/\*\*

- Sizes relative to the text flow.
  \*/
  `RELATIVE_TO_TEXT_FLOW` = 1383289940,

/\*\*

- Sizes relative to text size.
  \*/
  `RELATIVE_TO_TEXT_SIZE` = 1383486579,

/\*\*

- Takes the height from a custom value.
  \*/
  `USE_CUSTOM_HEIGHT` = 1430472805,

/\*\*

- Takes the width from a custom value.
  \*/
  `USE_CUSTOM_WIDTH` = 1430476649,
  }

/\*\*

- Settings for preserving appearance from layout.
  \*/
  declare enum PreserveAppearanceFromLayoutEnum {
  /\*\*
  - Defers to the export preferences.
    \*/
    `PRESERVE_APPEARANCE_DEFAULT` = 1349665893,

/\*\*

- Rasterizes both container and content when possible.
  \*/
  `PRESERVE_APPEARANCE_RASTERIZE_CONTAINER` = 1349669490,

/\*\*

- Rasterizes content when that operation is possible.
  \*/
  `PRESERVE_APPEARANCE_RASTERIZE_CONTENT` = 1349669492,

/\*\*

- Reuses the existing image.
  \*/
  `PRESERVE_APPEARANCE_USE_EXISTING_IMAGE` = 1349670245,
  }

/\*\*

- Arrowhead alignment choices.
  \*/
  declare enum ArrowHeadAlignmentEnum {
  /\*\*
  - Places the arrowhead within the path, changing path geometry to fit arrow heads.
    \*/
    `INSIDE_PATH` = 1634230633,

/\*\*

- Places the arrowhead outside the path i.e. path geometry remains same.
  \*/
  `OUTSIDE_PATH` = 1634230639,
  }

/\*\*

- Reference-position choices for style X and Y attributes; choosing none disables the attribute.
  \*/
  declare enum TransformPositionReference {
  /\*\*
  - Uses the matching page edge: left edge for X attribute, top edge for Y attribute.
    \*/
    `PAGE_EDGE_REFERENCE` = 1348945255,

/\*\*

- Uses page margins as references: X follows page.Left, and Y follows the top margin.
  \*/
  `PAGE_MARGIN_REFERENCE` = 1883721063,
  }

/\*\*

- Dimension attribute selection.
  \*/
  declare enum DimensionAttributes {
  /\*\*
  - Controls both dimension height and width.
    \*/
    `BOTH_HEIGHT_WIDTH_ATTRIBUTE` = 1700227170,

/\*\*

- Controls the dimension height.
  \*/
  `HEIGHT_ATTRIBUTE` = 1699247183,

/\*\*

- Controls the dimension width.
  \*/
  `WIDTH_ATTRIBUTE` = 1700226127,
  }

/\*\*

- Position attribute selection.
  \*/
  declare enum PositionAttributes {
  /\*\*
  - Controls both X and Y position values.
    \*/
    `BOTH_X_Y_ATTRIBUTE` = 1698855001,

/\*\*

- Controls the X position value.
  \*/
  `X_ATTRIBUTE` = 1700282735,

/\*\*

- Controls the Y position value.
  \*/
  `Y_ATTRIBUTE` = 1700348271,
  }

/\*\*

- Performance metric choices.
  \*/
  declare enum PerformanceMetricOptions {
  /\*\*
  - AGMXShowTime
    \*/
    AGMXSHOWTIME = 1095191924,

/\*\*

- Counts attachable events after dispatch.
  \*/
  `ATTACHABLE_EVENT_COUNT` = 1095058292,

/\*\*

- Counts attached scripts after execution.
  \*/
  `ATTACHED_SCRIPTS_COUNT` = 1095975796,

/\*\*

- BIB allocation metric.
  \*/
  `BIB_ALLOCATIONS` = 1112097345,

/\*\*

- Peak BIB allocation metric.
  \*/
  `BIB_ALLOCATIONS_PEAK` = 1111576683,

/\*\*

- BIB cache metric.
  \*/
  `BIB_CACHE` = 1112097379,

/\*\*

- Peak BIB cache metric.
  \*/
  `BIB_CACHE_PEAK` = 1111707755,

/\*\*

- Count of change manager update calls.
  \*/
  `CHANGE_MANAGER_UPDATE_CALL_COUNT` = 1129137012,

/\*\*

- Time spent in change manager update calls.
  \*/
  `CHANGE_MANAGER_UPDATE_CALL_TIME` = 1129141357,

/\*\*

- Counts core allocations.
  \*/
  `CORE_ALLOCATION_COUNT` = 1128361059,

/\*\*

- Measures core memory size.
  \*/
  `CORE_MEMORY_SIZE` = 1129539962,

/\*\*

- Measures CPU time.
  \*/
  `CPU_TIME` = 1668314484,

/\*\*

- Records the current memory mark.
  \*/
  `CURRENT_MEMORY_MARK` = 1296921195,

/\*\*

- Counts database file bytes read.
  \*/
  `DATABASE_FILE_BYTES_READ` = 1145197156,

/\*\*

- Counts database file bytes written.
  \*/
  `DATABASE_FILE_BYTES_WRITTEN` = 1145198450,

/\*\*

- Counts database file page reads.
  \*/
  `DATABASE_FILE_PAGE_READS` = 1145194098,

/\*\*

- Measures database file read time.
  \*/
  `DATABASE_FILE_READ_TIME` = 1145197172,

/\*\*

- Measures database file write time.
  \*/
  `DATABASE_FILE_WRITE_TIME` = 1145198452,

/\*\*

- Counts database instantiation operations.
  \*/
  `DATABASE_INSTANTIATE_COUNT` = 1145194862,

/\*\*

- Counts new database UIDs.
  \*/
  `DATABASE_NEW_UID_COUNT` = 1145197929,

/\*\*

- Measures total attachable-event dispatch time.
  \*/
  `DISPATCH_EVENT_TIME` = 1145394285,

/\*\*

- Measures draw manager drawing time.
  \*/
  `DRAW_MANAGER_DRAW_TIME` = 1145918573,

/\*\*

- Counts draw manager interrupts.
  \*/
  `DRAW_MANAGER_NUMBER_OF_INTERRUPTS` = 1145915758,

/\*\*

- Counts drop shadow file read bytes.
  \*/
  `DROP_SHADOW_FILE_READ_BYTES` = 1145459298,

/\*\*

- Measures drop shadow file read time.
  \*/
  `DROP_SHADOW_FILE_READ_TIME` = 1145459316,

/\*\*

- Counts drop shadow file write bytes.
  \*/
  `DROP_SHADOW_FILE_WRITE_BYTES` = 1145460578,

/\*\*

- Measures drop shadow file write time.
  \*/
  `DROP_SHADOW_FILE_WRITE_TIME` = 1145460596,

/\*\*

- Counts drop shadow memory read bytes.
  \*/
  `DROP_SHADOW_MEMORY_READ_BYTES` = 1146311266,

/\*\*

- Measures drop shadow memory read time.
  \*/
  `DROP_SHADOW_MEMORY_READ_TIME` = 1146311284,

/\*\*

- Counts drop shadow memory write bytes.
  \*/
  `DROP_SHADOW_MEMORY_WRITE_BYTES` = 1146312546,

/\*\*

- Measures drop shadow memory write time.
  \*/
  `DROP_SHADOW_MEMORY_WRITE_TIME` = 1146312564,

/\*\*

- Counts galley composition operations.
  \*/
  `GALLEY_COMPOSITION_COUNT` = 1195590516,

/\*\*

- Measures galley composition time.
  \*/
  `GALLEY_COMPOSITION_TIME` = 1195594861,

/\*\*

- Counts GDI objects.
  \*/
  `GDI_OBJECT_COUNT` = 1195657582,

/\*\*

- Counts handles.
  \*/
  `HANDLE_COUNT` = 1212378740,

/\*\*

- Tracks heap allocations.
  \*/
  `HEAP_ALLOCATIONS` = 1212247148,

/\*\*

- Tracks peak heap allocations.
  \*/
  `HEAP_ALLOCATIONS_PEAK` = 1212239979,

/\*\*

- Counts image cache allocations.
  \*/
  `IMAGE_CACHE_ALLOCATIONS` = 1231897409,

/\*\*

- Counts peak image cache allocations.
  \*/
  `IMAGE_CACHE_ALLOCATIONS_PEAK` = 1229144427,

/\*\*

- Counts image cache file bytes read.
  \*/
  `IMAGE_CACHE_FILE_BYTES_READ` = 1231901284,

/\*\*

- Counts image cache file bytes written.
  \*/
  `IMAGE_CACHE_FILE_BYTES_WRITTEN` = 1231902578,

/\*\*

- Measures image cache file read time.
  \*/
  `IMAGE_CACHE_FILE_READ_TIME` = 1229148772,

/\*\*

- Measures image cache file write time.
  \*/
  `IMAGE_CACHE_FILE_WRITE_TIME` = 1229150066,

/\*\*

- Counts instance cache purge operations.
  \*/
  `INSTANCE_CACHE_PURGE_COUNT` = 1229148259,

/\*\*

- Counts layout composition operations.
  \*/
  `LAYOUT_COMPOSITION_COUNT` = 1279476596,

/\*\*

- Measures layout composition time.
  \*/
  `LAYOUT_COMPOSITION_TIME` = 1279480941,

/\*\*

- Counts memory purge operations.
  \*/
  `MEMORY_PURGE_COUNT` = 1297105780,

/\*\*

- Measures memory purge time.
  \*/
  `MEMORY_PURGE_TIME` = 1297110125,

/\*\*

- Counts minisave operations.
  \*/
  `MINISAVE_COUNT` = 1297302388,

/\*\*

- Measures new snapshot time.
  \*/
  `NEW_SNAPSHOT_TIME` = 1397651284,

/\*\*

- Reports thread count.
  \*/
  `NUMBER_OF_THREADS` = 1853122674,

/\*\*

- Reports overall system CPU usage.
  \*/
  `OVERALL_SYSTEM_CPU` = 1399025781,

/\*\*

- Reports overall user CPU usage.
  \*/
  `OVERALL_USER_CPU` = 1432580213,

/\*\*

- Tracks PDF allocactions.
  \*/
  `PDF_ALLOCACTIONS` = 1346651713,

/\*\*

- Tracks peak PDF allocactions.
  \*/
  `PDF_ALLOCACTIONS_PEAK` = 1346650475,

/\*\*

- Counts process IO bytes read.
  \*/
  `PROCESS_IO_BYTES_READ` = 1229935204,

/\*\*

- Counts process IO bytes written.
  \*/
  `PROCESS_IO_BYTES_WRITTEN` = 1229936498,

/\*\*

- Reports resident memory size.
  \*/
  `RESIDENT_MEMORY_SIZE` = 1381198202,

/\*\*

- Counts snapshots.
  \*/
  `SNAPSHOT_COUNT` = 1397965684,

/\*\*

- Counts snapshot read write bytes.
  \*/
  `SNAPSHOT_READ_WRITE_BYTE_COUNT` = 1397905251,

/\*\*

- Measures snapshot read write time.
  \*/
  `SNAPSHOT_READ_WRITE_TIME` = 1397905268,

/\*\*

- Captures the virtual memory footprint.
  \*/
  `VIRTUAL_MEMORY_SIZE` = 1448307066,

/\*\*

- VXferAlloc
  \*/
  VXFERALLOC = 1448633921,

/\*\*

- VXferAllocPeak
  \*/
  VXFERALLOCPEAK = 1448624491,

/\*\*

- VXferBytesRead
  \*/
  VXFERBYTESREAD = 1448633938,

/\*\*

- VXferBytesWritten
  \*/
  VXFERBYTESWRITTEN = 1448633943,

/\*\*

- VXferFileBytesRead
  \*/
  VXFERFILEBYTESREAD = 1447445106,

/\*\*

- VXFerFileBytesWritten
  \*/
  VXFERFILEBYTESWRITTEN = 1447445111,

/\*\*

- VXferReadTime
  \*/
  VXFERREADTIME = 1448628852,

/\*\*

- VXferWriteTime
  \*/
  VXFERWRITETIME = 1448630132,

/\*\*

- Tracks XMP filter time.
  \*/
  `XMP_FILTER_TIME` = 1481461876,
  }

/\*\*

- Easing choices.
  \*/
  declare enum AnimationEaseOptions {
  /\*\*
  - Custom read-only easing type.
    \*/
    `CUSTOM_EASE` = 2051363407,

/\*\*

- Applies simple ease-in.
  \*/
  `EASE_IN` = 2051371849,

/\*\*

- Applies simple ease-in/ease-out.
  \*/
  `EASE_IN_OUT` = 2051361103,

/\*\*

- Applies simple ease-out.
  \*/
  `EASE_OUT` = 2051371855,

/\*\*

- Applies no easing.
  \*/
  `NO_EASE` = 2051960645,
  }

/\*\*

- Events that start playback for dynamic target objects.
  \*/
  declare enum DynamicTriggerEvents {
  /\*\*
  - Starts the target from a button click or self click.
    \*/
    `ON_CLICK` = 1953317740,

/\*\*

- Starts the target when the page is clicked.
  \*/
  `ON_PAGE_CLICK` = 1953321027,

/\*\*

- Starts the target when the page loads.
  \*/
  `ON_PAGE_LOAD` = 1953321036,

/\*\*

- Starts the target on button release.
  \*/
  `ON_RELEASE` = 1953321580,

/\*\*

- Starts the target on button rolloff.
  \*/
  `ON_ROLLOFF` = 1953321574,

/\*\*

- Starts the target from a button rollover or self rollover.
  \*/
  `ON_ROLLOVER` = 1953321590,

/\*\*

- Starts the target on self click.
  \*/
  `ON_SELF_CLICK` = 1951613804,

/\*\*

- Starts the target on self rollover.
  \*/
  `ON_SELF_ROLLOVER` = 1951617638,

/\*\*

- Starts the target when a multi-state object state loads.
  \*/
  `ON_STATE_LOAD` = 1953321804,
  }

/\*\*

- Page transition type choices.
  \*/
  declare enum PageTransitionTypeOptions {
  /\*\*
  - Uses the Blinds page transition.
    \*/
    `BLINDS_TRANSITION` = 1886667372,

/\*\*

- Uses the Blinds page transition.
  \*/
  `BOX_TRANSITION` = 1886667384,

/\*\*

- Uses the Comb page transition.
  \*/
  `COMB_TRANSITION` = 1886667618,

/\*\*

- Uses the Cover page transition.
  \*/
  `COVER_TRANSITION` = 1886667638,

/\*\*

- Uses the Dissolve page transition.
  \*/
  `DISSOLVE_TRANSITION` = 1886667891,

/\*\*

- Uses the Fade page transition.
  \*/
  `FADE_TRANSITION` = 1886668388,

/\*\*

- Applies no page transition.
  \*/
  NONE = 1852796517,

/\*\*

- Uses the Push page transition.
  \*/
  `PUSH_TRANSITION` = 1886670963,

/\*\*

- Uses the Split page transition.
  \*/
  `SPLIT_TRANSITION` = 1886671728,

/\*\*

- Uses the Uncover page transition.
  \*/
  `UNCOVER_TRANSITION` = 1886672227,

/\*\*

- Uses the Wipe page transition.
  \*/
  `WIPE_TRANSITION` = 1886672752,

/\*\*

- Uses the Zoom In page transition.
  \*/
  `ZOOM_IN_TRANSITION` = 1886673481,

/\*\*

- Uses the Zoom Out page transition.
  \*/
  `ZOOM_OUT_TRANSITION` = 1886673487,
  }

/\*\*

- Page transition direction choices.
  \*/
  declare enum PageTransitionDirectionOptions {
  /\*\*
  - Moves from top to bottom.
    \*/
    DOWN = 1181971556,

/\*\*

- Uses a horizontal direction.
  \*/
  HORIZONTAL = 1752134266,

/\*\*

- Uses a horizontal inward direction.
  \*/
  `HORIZONTAL_IN` = 1886668873,

/\*\*

- Uses a horizontal outward direction.
  \*/
  `HORIZONTAL_OUT` = 1886668879,

/\*\*

- Uses an inward direction.
  \*/
  IN = 1768824864,

/\*\*

- Moves down and left.
  \*/
  `LEFT_DOWN` = 1886669892,

/\*\*

- Moves left to right.
  \*/
  `LEFT_TO_RIGHT` = 1819570786,

/\*\*

- Moves up and left.
  \*/
  `LEFT_UP` = 1886669909,

/\*\*

- Has no applicable direction.
  \*/
  `NOT_APPLICABLE` = 1886670401,

/\*\*

- Uses an outward direction.
  \*/
  OUT = 1886670708,

/\*\*

- Moves down and right.
  \*/
  `RIGHT_DOWN` = 1886671428,

/\*\*

- Moves right to left.
  \*/
  `RIGHT_TO_LEFT` = 1920232546,

/\*\*

- Moves up and right.
  \*/
  `RIGHT_UP` = 1886671445,

/\*\*

- Moves from bottom to top.
  \*/
  UP = 1181971566,

/\*\*

- Uses a vertical direction.
  \*/
  VERTICAL = 1986359924,

/\*\*

- Uses a vertical inward direction.
  \*/
  `VERTICAL_IN` = 1886672457,

/\*\*

- Uses a vertical outward direction.
  \*/
  `VERTICAL_OUT` = 1886672463,
  }

/\*\*

- JPEG quality choices for dynamic documents.
  \*/
  declare enum DynamicDocumentsJPEGQualityOptions {
  /\*\*
  - Selects high JPEG compression.
    \*/
    HIGH = 1701726313,

/\*\*

- Selects low JPEG compression.
  \*/
  LOW = 1701727351,

/\*\*

- Selects maximum JPEG compression.
  \*/
  MAXIMUM = 1701727608,

/\*\*

- Selects medium JPEG compression.
  \*/
  MEDIUM = 1701727588,

/\*\*

- Selects minimum JPEG compression.
  \*/
  MINIMUM = 1701727598,
  }

/\*\*

- Text export policy choices for dynamic documents.
  \*/
  declare enum DynamicDocumentsTextExportPolicy {
  /\*\*
  - Exports text as live text.
    \*/
    LIVE = 1952804972,

/\*\*

- Rasterizes the text.
  \*/
  RASTERIZE = 1952804978,

/\*\*

- Exports text as Text Layout Framework text.
  \*/
  TLF = 1952804980,

/\*\*

- Vectorizes the text.
  \*/
  VECTORIZE = 1952804982,
  }

/\*\*

- Fit method choices.
  \*/
  declare enum FitMethodSettings {
  /\*\*
  - Fits by the supplied scale percentage.
    \*/
    `FIT_GIVEN_SCALE_PERCENTAGE` = 1684304739,

/\*\*

- Fits to the supplied width and height.
  \*/
  `FIT_GIVEN_WIDTH_AND_HEIGHT` = 1684305768,

/\*\*

- Fits using predefined settings.
  \*/
  `FIT_PREDEFINED_SETTINGS` = 1684301427,
  }

/\*\*

- Dimension choices used for fitting.
  \*/
  declare enum FitDimension {
  /\*\*
  - Fits to 1024x768.
    \*/
    FIT1024X768 = 1718906726,

/\*\*

- Fits to 1240x620.
  \*/
  FIT1240X620 = 1718908023,

/\*\*

- Fits to 1280x800.
  \*/
  FIT1280X800 = 1718906725,

/\*\*

- Fits to 600x300.
  \*/
  FIT600X300 = 1718907764,

/\*\*

- Fits to 640x480.
  \*/
  FIT640X480 = 1718907753,

/\*\*

- Fits to 760x420.
  \*/
  FIT760X420 = 1718907750,

/\*\*

- Fits to 800x600.
  \*/
  FIT800X600 = 1718904179,

/\*\*

- Fits to 984x588.
  \*/
  FIT984X588 = 1718906470,
  }

/\*\*

- Page transition duration choices.
  \*/
  declare enum PageTransitionDurationOptions {
  /\*\*
  - Uses a fast duration.
    \*/
    FAST = 1180791668,

/\*\*

- Uses a medium duration.
  \*/
  MEDIUM = 1701727588,

/\*\*

- Uses a slow duration.
  \*/
  SLOW = 1886671692,
  }

/\*\*

- Dynamic media handling choices.
  \*/
  declare enum DynamicMediaHandlingOptions {
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

- Animation design choices.
  \*/
  declare enum DesignOptions {
  /\*\*
  - Uses the current object's properties for the animation's starting appearance at runtime.
    \*/
    `FROM_CURRENT_APPEARANCE` = 1634551405,

/\*\*

- Uses the current object's properties for the animation's ending appearance at runtime.
  \*/
  `TO_CURRENT_APPEARANCE` = 1634554991,

/\*\*

- Uses current object properties as the start appearance and current position as the runtime end location.
  \*/
  `TO_CURRENT_LOCATION` = 1634553702,
  }

/\*\*

- Condition indicator method choices.
  \*/
  declare enum ConditionIndicatorMethod {
  /\*\*
  - Shows conditional text with highlighting.
    \*/
    `USE_HIGHLIGHT` = 1699244391,

/\*\*

- Shows conditional text with underlining.
  \*/
  `USE_UNDERLINE` = 1700097644,
  }

/\*\*

- Underline appearance choices for condition indicators.
  \*/
  declare enum ConditionUnderlineIndicatorAppearance {
  /\*\*
  - Uses a dashed underline.
    \*/
    DASHED = 1684108136,

/\*\*

- Uses a solid underline.
  \*/
  SOLID = 1936682084,

/\*\*

- Uses a wavy underline.
  \*/
  WAVY = 1937208953,
  }

/\*\*

- Condition indicator mode choices.
  \*/
  declare enum ConditionIndicatorMode {
  /\*\*
  - Hides condition indicators.
    \*/
    `HIDE_INDICATORS` = 1698908520,

/\*\*

- Shows and prints condition indicators.
  \*/
  `SHOW_AND_PRINT_INDICATORS` = 1698908528,

/\*\*

- Shows condition indicators only.
  \*/
  `SHOW_INDICATORS` = 1698908531,
  }

/\*\*

- Style type choices.
  \*/
  declare enum StyleType {
  /\*\*
  - Character Style
    \*/
    `CHARACTER_STYLE_TYPE` = 1665684340,

/\*\*

- Paragraph Style
  \*/
  `PARAGRAPH_STYLE_TYPE` = 1883730548,
  }

/\*\*

- Text direction choices.
  \*/
  declare enum TextDirection {
  /\*\*
  - Horizontal text flow direction.
    \*/
    `HORIZONTAL_TYPE` = 1702126696,

/\*\*

- Mixed text flow direction.
  \*/
  `MIXED_TYPE` = 1702126701,

/\*\*

- Unknown text flow direction.
  \*/
  `UNKNOWN_TYPE` = 1702126709,

/\*\*

- Vertical text flow direction.
  \*/
  `VERTICAL_TYPE` = 1702126710,
  }

/\*\*

- Text selection scope for threaded text frames.
  \*/
  declare enum ThreadedTextFrameTextOptions {
  /\*\*
  - Uses text from the complete story.
    \*/
    `TEXT_FOR_COMPLETE_STORY` = 1698911092,

/\*\*

- Uses text from the current text frame.
  \*/
  `TEXT_WITHIN_TEXTFRAME` = 1700021844,
  }

/\*\*

- Smooth scrolling choices.
  \*/
  declare enum SmoothScrollingOptions {
  /\*\*
  - Enables horizontal smooth scrolling.
    \*/
    HORIZONTAL = 1752134266,

/\*\*

- Disables smooth scrolling.
  \*/
  `NO_SMOOTH_SCROLL` = 1699959662,

/\*\*

- Enables vertical smooth scrolling.
  \*/
  VERTICAL = 1986359924,

/\*\*

- Enables vertical and horizontal smooth scrolling.
  \*/
  `VERTICAL_AND_HORIZONTAL` = 1699959650,
  }

/\*\*

- Folio orientation choices.
  \*/
  declare enum FolioOrientationOptions {
  /\*\*
  - Determines orientation automatically from the mini folios.
    \*/
    AUTO = 1635019116,

/\*\*

- Limits output to landscape orientation.
  \*/
  LANDSCAPE = 2003395685,

/\*\*

- Limits output to portrait orientation.
  \*/
  PORTRAIT = 1751738216,

/\*\*

- Allows both portrait and landscape orientations.
  \*/
  `PORTRAIT_AND_LANDSCAPE` = 1699303266,
  }

/\*\*

- Folio binding direction choices.
  \*/
  declare enum FolioBindingDirectionOptions {
  /\*\*
  - Uses left-edge binding.
    \*/
    LEFT = 1835102828,

/\*\*

- Uses right-edge binding.
  \*/
  RIGHT = 1835102834,
  }

/\*\*

- Available version-reporting choices.
  \*/
  declare enum DigpubVersion {
  /\*\*
  - Reports plugin, folio, and plist versions in that order.
    \*/
    ALL = 1634495520,

/\*\*

- Reports the folio version.
  \*/
  FOLIO = 1685087862,

/\*\*

- Reports the plist version.
  \*/
  PLIST = 1685090422,

/\*\*

- Reports the plugin version.
  \*/
  PLUGIN = 1685090412,
  }

/\*\*

- Attached device type choices.
  \*/
  declare enum AttachedDevices {
  /\*\*
  - Reports all devices, Android followed by iOS.
    \*/
    ALL = 1634495520,

/\*\*

- Reports Android devices.
  \*/
  ANDROID = 1685086564,

/\*\*

- Reports iOS devices.
  \*/
  IOS = 1684631411,
  }

/\*\*

- Available plugin and article version choices.
  \*/
  declare enum DigpubArticleVersion {
  /\*\*
  - Reports plugin and article versions in that order.
    \*/
    ALL = 1634495520,

/\*\*

- Reports the article version.
  \*/
  ARTICLE = 1685078390,

/\*\*

- Reports the plugin version.
  \*/
  PLUGIN = 1685090412,
  }

/\*\*

- Export order choices for epub and html.
  \*/
  declare enum ExportOrder {
  /\*\*
  - Uses the article defined in the article panel.
    \*/
    `ARTICLE_PANEL_ORDER` = 1700946288,

/\*\*

- Uses document layout.
  \*/
  `LAYOUT_ORDER` = 1700949113,

/\*\*

- Uses XML structure.
  \*/
  `XML_STRUCTURE_ORDER` = 1700952179,
  }

/\*\*

- Cover image choices for EPub export.
  \*/
  declare enum EpubCover {
  /\*\*
  - Uses an external image as the cover image.
    \*/
    `EXTERNAL_IMAGE` = 1700952169,

/\*\*

- Rasterizes the first page as the cover image.
  \*/
  `FIRST_PAGE` = 1700947536,

/\*\*

- Uses no cover image.
  \*/
  NONE = 1852796517,
  }

/\*\*

- Export choices for unordered lists.
  \*/
  declare enum BulletListExportOption {
  /\*\*
  - Converts to text.
    \*/
    `AS_TEXT` = 1700946804,

/\*\*

- Maps to an html unordered list.
  \*/
  `UNORDERED_LIST` = 1700949333,
  }

/\*\*

- Export choices for ordered lists.
  \*/
  declare enum NumberedListExportOption {
  /\*\*
  - Converts to text.
    \*/
    `AS_TEXT` = 1700946804,

/\*\*

- Maps to an html ordered list.
  \*/
  `ORDERED_LIST` = 1700949359,
  }

/\*\*

- EPUB version choices for EPub export.
  \*/
  declare enum EpubVersion {
  /\*\*
  - Uses EPUB 2.0.1.
    \*/
    EPUB2 = 1702257970,

/\*\*

- Uses EPUB 3.0.
  \*/
  EPUB3 = 1702257971,
  }

/\*\*

- Image export choices.
  \*/
  declare enum ImageExportOption {
  /\*\*
  - Links to the server.
    \*/
    `LINK_TO_SERVER` = 1700949107,

/\*\*

- Uses an optimized image.
  \*/
  `OPTIMIZED_IMAGE` = 1700949872,

/\*\*

- Uses the original image.
  \*/
  `ORIGINAL_IMAGE` = 1700949874,
  }

/\*\*

- Footnote placement choices.
  \*/
  declare enum EPubFootnotePlacement {
  /\*\*
  - Places the footnote after the paragraph.
    \*/
    `FOOTNOTE_AFTER_PARAGRAPH` = 1701213296,

/\*\*

- Places the footnote after the story.
  \*/
  `FOOTNOTE_AFTER_STORY` = 1701213267,

/\*\*

- Places the footnote inside a popup.
  \*/
  `FOOTNOTE_INSIDE_POPUP` = 1701213235,
  }

/\*\*

- Page range format choices for export.
  \*/
  declare enum PageRangeFormat {
  /\*\*
  - Exports every page.
    \*/
    `EXPORT_ALL_PAGES` = 1700883568,
