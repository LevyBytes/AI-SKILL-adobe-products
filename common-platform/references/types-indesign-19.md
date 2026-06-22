# Indesign (part 19)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Continues playback after a pause.
  \*/
  RESUME = 1919251317,

/\*\*

- Plays backward.
  \*/
  `REVERSE_PLAYBACK` = 1919252069,

/\*\*

- Ends playback.
  \*/
  STOP = 1937010544,

/\*\*

- Ends all playback.
  \*/
  `STOP_ALL` = 1937010785,
  }

/\*\*

- Choices for view zoom style.
  \*/
  declare enum ViewZoomStyle {
  /\*\*
  - Shows the page at 100% magnification.
    \*/
    `ACTUAL_SIZE` = 2053206906,

/\*\*

- Fits the whole page in the window.
  \*/
  `FIT_PAGE` = 2053534832,

/\*\*

- Scales the page text area to the window width; page margins and the lower page area may be hidden.
  \*/
  `FIT_VISIBLE` = 1212437334,

/\*\*

- Scales the page to the window width; the lower page area may be hidden.
  \*/
  `FIT_WIDTH` = 1212437335,

/\*\*

- Uses the page to fill the screen, hiding the toolbar, command bar, menu bar, and window controls.
  \*/
  `FULL_SCREEN` = 1987733107,

/\*\*

- Lays out pages as a continuous vertical column one page wide.
  \*/
  `ONE_COLUMN` = 1987735395,

/\*\*

- Shows one page at a time in the document pane.
  \*/
  `SINGLE_PAGE` = 1987736432,

/\*\*

- Lays out pages side by side in a continuous vertical column two pages wide.
  \*/
  `TWO_COLUMN` = 1987736675,

/\*\*

- Raises magnification to the next preset percentage.
  \*/
  `ZOOM_IN` = 2053990766,

/\*\*

- Lowers magnification to the previous preset percentage.
  \*/
  `ZOOM_OUT` = 2054124916,
  }

/\*\*

- Version Cue state values for the file.
  \*/
  declare enum VersionState {
  /\*\*
  - Local modifications make the version newer than the project.
    \*/
    `LOCAL_NEWER` = 1986221644,

/\*\*

- The version matches the project exactly.
  \*/
  `LOCAL_PROJECT_MATCH` = 1986221645,

/\*\*

- Indicates no resource and no local file.
  \*/
  `NO_RESOURCE` = 1986221646,

/\*\*

- The project contains a newer file.
  \*/
  `PROJECT_FILE_NEWER` = 1986221648,

/\*\*

- Local edits exist while the project file is newer.
  \*/
  `VERSION_CONFLICT` = 1986221635,

/\*\*

- The version is unknown.
  \*/
  `VERSION_UNKNOWN` = 1986221653,
  }

/\*\*

- Version Cue editing-state values for the file.
  \*/
  declare enum EditingState {
  /\*\*
  - Local or remote changes were made while the file was locked, so two versions exist.
    \*/
    `EDITING_CONFLICT` = 1986217283,

/\*\*

- The file has local modifications and is not locked.
  \*/
  `EDITING_LOCALLY` = 1986217292,

/\*\*

- The file has a local lock and may be modified.
  \*/
  `EDITING_LOCALLY_LOCKED` = 1986217291,

/\*\*

- The file is neither in use nor locked.
  \*/
  `EDITING_NOWHERE` = 1986217294,

/\*\*

- Lock is held but unavailable.
  \*/
  `EDITING_REMOTELY` = 1986217298,

/\*\*

- The editing status is unknown.
  \*/
  `EDITING_UNKNOWN` = 1986217301,
  }

/\*\*

- Version Cue synchronization-status values for the file.
  \*/
  declare enum VersionCueSyncStatus {
  /\*\*
  - Downloaded the project version of the file into the local workspace.
    \*/
    `FILE_DOWNLOADED` = 1986220868,

/\*\*

- Synchronization made no change because local and project versions matched.
  \*/
  `FILE_NO_CHANGE` = 1986220878,

/\*\*

- The file was skipped during synchronization.
  \*/
  `FILE_SKIPPED` = 1986220875,

/\*\*

- The file was unlocked locally.
  \*/
  `FILE_UNLOCKED` = 1986220876,

/\*\*

- Uploaded the local file version to the project.
  \*/
  `FILE_UPLOADED` = 1986220885,
  }

/\*\*

- Conflict-resolution choices used during Version Cue synchronization.
  \*/
  declare enum SyncConflictResolution {
  /\*\*
  - Prompts the user for conflict-resolution choices.
    \*/
    `ASK_ABOUT_CONFLICTS` = 1986216769,

/\*\*

- Selects the local version.
  \*/
  `PREFER_LOCAL` = 1986216780,

/\*\*

- Selects the project version.
  \*/
  `PREFER_PROJECT` = 1986216784,

/\*\*

- Skips files with conflicts.
  \*/
  `SKIP_CONFLICTS` = 1986216787,
  }

/\*\*

- Language-region enum values.
  \*/
  declare enum LanguageAndRegion {
  /\*\*
  - Albania: Albanian
    \*/
    `ALBANIA_ALBANIAN` = 1936802124,

/\*\*

- Belarus: Belarusian
  \*/
  `BELARUS_BELARUSIAN` = 1650803289,

/\*\*

- Brazil: Portuguese
  \*/
  `BRAZIL_PORTUGUESE` = 1886667346,

/\*\*

- Bulgaria: Bulgarian
  \*/
  `BULGARIA_BULGARIAN` = 1650934343,

/\*\*

- Croatia: Croatian
  \*/
  `CROATIA_CROATIAN` = 1752320082,

/\*\*

- Czech Republic: Czech
  \*/
  `CZECH_REPUBLIC_CZECH` = 1668498266,

/\*\*

- Denmark: Danish
  \*/
  `DENMARK_DANISH` = 1684096075,

/\*\*

- Estonia: Estonian
  \*/
  `ESTONIA_ESTONIAN` = 1702118725,

/\*\*

- Finland: Finnish
  \*/
  `FINLAND_FINNISH` = 1718175305,

/\*\*

- France: French
  \*/
  `FRANCE_FRENCH` = 1718765138,

/\*\*

- Germany: German
  \*/
  `GERMANY_GERMAN` = 1684358213,

/\*\*

- Greece: Greek
  \*/
  `GREECE_GREEK` = 1701594962,

/\*\*

- Hungary: Hungarian
  \*/
  `HUNGARY_HUNGARIAN` = 1752516693,

/\*\*

- India: Tamil
  \*/
  `INDIA_TAMIL` = 1952532814,

/\*\*

- Indic
  \*/
  INDIC = 1768842345,

/\*\*

- Israel: Hebrew
  \*/
  `ISRAEL_HEBREW` = 1751468364,

/\*\*

- Italy: Italian
  \*/
  `ITALY_ITALIAN` = 1769228628,

/\*\*

- Japan: Japanese
  \*/
  `JAPAN_JAPANESE` = 1784760912,

/\*\*

- Latvia: Latvian
  \*/
  `LATVIA_LATVIAN` = 1819692118,

/\*\*

- Lituania: Lithuanian
  \*/
  `LITUANIA_LITHUANIAN` = 1819561044,

/\*\*

- Netherlands: Dutch
  \*/
  `NETHERLANDS_DUTCH` = 1852591692,

/\*\*

- Norway: Norwegian
  \*/
  `NORWAY_NORWEGIAN` = 1851936335,

/\*\*

- Poland: Polish
  \*/
  `POLAND_POLISH` = 1886146636,

/\*\*

- Republic Of Korea: Korean
  \*/
  `REPUBLIC_OF_KOREA_KOREAN` = 1802455890,

/\*\*

- Romania: Romanian
  \*/
  `ROMANIA_ROMANIAN` = 1919898191,

/\*\*

- Russian Federation: Russian
  \*/
  `RUSSIAN_FEDERATION_RUSSIAN` = 1920291413,

/\*\*

- Simplified Chinese
  \*/
  `SIMPLIFIED_CHINESE` = 2053653326,

/\*\*

- Slovakia: Slovak
  \*/
  `SLOVAKIA_SLOVAK` = 1936479051,

/\*\*

- Slovenia: Slovenian
  \*/
  `SLOVENIA_SLOVENIAN` = 1936479049,

/\*\*

- Spain: Spanish
  \*/
  `SPAIN_SPANISH` = 1702053203,

/\*\*

- Standard Arabic
  \*/
  `STANDARD_ARABIC` = 1634877765,

/\*\*

- Sweden: Swedish
  \*/
  `SWEDEN_SWEDISH` = 1937134422,

/\*\*

- Thailand: Thai
  \*/
  `THAILAND_THAI` = 1952994376,

/\*\*

- Traditional Chinese
  \*/
  `TRADITIONAL_CHINESE` = 2053657687,

/\*\*

- Turkey: Turkish
  \*/
  `TURKEY_TURKISH` = 1953649746,

/\*\*

- Ukraine: Ukrainian
  \*/
  `UKRAINE_UKRAINIAN` = 1969968449,

/\*\*

- United Kingdom: English
  \*/
  `UNITED_KINGDOM_ENGLISH` = 1701726018,

/\*\*

- United States: English
  \*/
  `UNITED_STATES_ENGLISH` = 1701729619,

/\*\*

- Vietnam: Vietnamese
  \*/
  `VIETNAM_VIETNAMESE` = 1986614862,
  }

/\*\*

- Choices for user interaction level.
  \*/
  declare enum UserInteractionLevels {
  /\*\*
  - Shows alerts but suppresses dialogs.
    \*/
    `INTERACT_WITH_ALERTS` = 1699311170,

/\*\*

- Script execution shows every dialog and alert.
  \*/
  `INTERACT_WITH_ALL` = 1699311169,

/\*\*

- Script execution shows no dialogs or alerts.
  \*/
  `NEVER_INTERACT` = 1699640946,
  }

/\*\*

- Locale values.
  \*/
  declare enum Locale {
  /\*\*
  - Arabic
    \*/
    `ARABIC_LOCALE` = 1279476082,

/\*\*

- Czech
  \*/
  `CZECH_LOCALE` = 1279476602,

/\*\*

- Danish.
  \*/
  `DANISH_LOCALE` = 1279476846,

/\*\*

- English.
  \*/
  `ENGLISH_LOCALE` = 1279477102,

/\*\*

- Finnish.
  \*/
  `FINNISH_LOCALE` = 1279477358,

/\*\*

- French.
  \*/
  `FRENCH_LOCALE` = 1279477362,

/\*\*

- German.
  \*/
  `GERMAN_LOCALE` = 1279477613,

/\*\*

- Greek
  \*/
  `GREEK_LOCALE` = 1279477618,

/\*\*

- Hebrew
  \*/
  `HEBREW_LOCALE` = 1279477858,

/\*\*

- Hungarian
  \*/
  `HUNGARIAN_LOCALE` = 1279477877,

/\*\*

- International English.
  \*/
  `INTERNATIONAL_ENGLISH_LOCALE` = 1279477097,

/\*\*

- Italian.
  \*/
  `ITALIAN_LOCALE` = 1279478132,

/\*\*

- Japanese.
  \*/
  `JAPANESE_LOCALE` = 1279478384,

/\*\*

- en_KoreanLocale
  \*/
  `KOREAN_LOCALE` = 1279478639,

/\*\*

- Polish
  \*/
  `POLISH_LOCALE` = 1279479916,

/\*\*

- Portuguese.
  \*/
  `PORTUGUESE_LOCALE` = 1279479911,

/\*\*

- Romanian
  \*/
  `ROMANIAN_LOCALE` = 1279480431,

/\*\*

- Russian
  \*/
  `RUSSIAN_LOCALE` = 1279480437,

/\*\*

- simplified chinese
  \*/
  `SIMPLIFIED_CHINESE_LOCALE` = 1279476590,

/\*\*

- Spanish.
  \*/
  `SPANISH_LOCALE` = 1279480688,

/\*\*

- Swedish.
  \*/
  `SWEDISH_LOCALE` = 1279480695,

/\*\*

- traditional chinese
  \*/
  `TRADITIONAL_CHINESE_LOCALE` = 1279480951,

/\*\*

- Turkish
  \*/
  `TURKISH_LOCALE` = 1279480946,

/\*\*

- Ukrainian
  \*/
  `UKRAINIAN_LOCALE` = 1279481195,
  }

/\*\*

- Language values for script execution.
  \*/
  declare enum ScriptLanguage {
  /\*\*
  - JavaScript language.
    \*/
    JAVASCRIPT = 1246973031,

/\*\*

- No language is specified.
  \*/
  UNKNOWN = 1433299822,

/\*\*

- UxpScript language.
  \*/
  UXPSCRIPT = 1431522407,

/\*\*

- VBScript language.
  \*/
  `VISUAL_BASIC` = 1447185511,
  }

/\*\*

- Choices for selecting a feature set.
  \*/
  declare enum FeatureSetOptions {
  /\*\*
  - Selects the Japanese feature set and defaults.
    \*/
    JAPANESE = 1247899758,

/\*\*

- Selects the R2L feature set
  \*/
  RIGHTTOLEFT = 1381265228,

/\*\*

- Selects the Roman feature set and defaults.
  \*/
  ROMAN = 1383034222,
  }

/\*\*

- Undo choices for script execution.
  \*/
  declare enum UndoModes {
  /\*\*
  - Automatically undoes the whole script as part of the previous step.
    \*/
    `AUTO_UNDO` = 1699963221,

/\*\*

- Undoes the whole script as one step.
  \*/
  `ENTIRE_SCRIPT` = 1699963733,

/\*\*

- Performs a fast undo of the whole script as one step.
  \*/
  `FAST_ENTIRE_SCRIPT` = 1699964501,

/\*\*

- Undoes each script request as its own step.
  \*/
  `SCRIPT_REQUEST` = 1699967573,
  }

/\*\*

- Controls how a document is opened.
  \*/
  declare enum OpenOptions {
  /\*\*
  - Uses the default based on file type or extension.
    \*/
    `DEFAULT_VALUE` = 1147563124,

/\*\*

- Opens a copy of the document.
  \*/
  `OPEN_COPY` = 1332757360,

/\*\*

- Opens the document itself.
  \*/
  `OPEN_ORIGINAL` = 1332760434,
  }

/\*\*

- States reported for a task.
  \*/
  declare enum TaskState {
  /\*\*
  - Task stopped because cancellation happened before start or during execution.
    \*/
    CANCELLED = 1700029292,

/\*\*

- A cancel request has reached the task, but it has not stopped yet.
  \*/
  CANCELLING = 1700029281,

/\*\*

- Execution finished, whether it succeeded or ended with errors.
  \*/
  COMPLETED = 1700029296,

/\*\*

- The task is queued and waiting for execution scheduling.
  \*/
  QUEUED = 1699837285,

/\*\*

- The task is currently running.
  \*/
  RUNNING = 1700033141,

/\*\*

- The task is in a waiting state.
  \*/
  WAITING = 1700225396,
  }

/\*\*

- Task alert categories.
  \*/
  declare enum TaskAlertType {
  /\*\*
  - Error message.
    \*/
    `TASK_ERROR` = 1699040627,

/\*\*

- Informational message.
  \*/
  `TASK_INFORMATION` = 1699302771,

/\*\*

- Warning message.
  \*/
  `TASK_WARNING` = 1700220275,
  }

/\*\*

- Choices for saving a document before close or quit.
  \*/
  declare enum SaveOptions {
  /\*\*
  - Opens a prompt asking whether changes should be saved.
    \*/
    ASK = 1634954016,

/\*\*

- Closes without saving changes.
  \*/
  NO = 1852776480,

/\*\*

- Writes the changes.
  \*/
  YES = 2036691744,
  }

/\*\*

- View magnification choices.
  \*/
  declare enum ZoomOptions {
  /\*\*
  - Sets zoom to 100%.
    \*/
    `ACTUAL_SIZE` = 2053206906,

/\*\*

- Moves the active page to the window center.
  \*/
  `FIT_PAGE` = 2053534832,

/\*\*

- Moves the active spread to the window center.
  \*/
  `FIT_SPREAD` = 2053534835,

/\*\*

- Shows the full pasteboard inside the window.
  \*/
  `SHOW_PASTEBOARD` = 2054385762,

/\*\*

- Increases magnification to the next preset percentage.
  \*/
  `ZOOM_IN` = 2053990766,

/\*\*

- Lowers magnification to the next preset percentage.
  \*/
  `ZOOM_OUT` = 2054124916,
  }

/\*\*

- Display-performance settings that trade object redraw speed against visual quality.
  \*/
  declare enum ViewDisplaySettings {
  /\*\*
  - Prioritizes quality by showing high-resolution graphics, high-quality transparency, and anti-aliasing.
    \*/
    `HIGH_QUALITY` = 1346922866,

/\*\*

- Prioritizes speed by graying graphics and disabling both transparency and anti-aliasing.
  \*/
  OPTIMIZED = 1349480564,

/\*\*

- Balances speed and quality with proxy graphics, low-quality transparency, and anti-aliasing.
  \*/
  TYPICAL = 1349810544,
  }

/\*\*

- During transformations such as rotation, scaling, flipping, and shearing, this bounding-box reference point stays fixed.
  \*/
  declare enum AnchorPoint {
  /\*\*
  - Bottom-edge midpoint of the bounding box.
    \*/
    `BOTTOM_CENTER_ANCHOR` = 1095656035,

/\*\*

- Lower-left bounding-box corner.
  \*/
  `BOTTOM_LEFT_ANCHOR` = 1095656044,

/\*\*

- Lower-right bounding-box corner.
  \*/
  `BOTTOM_RIGHT_ANCHOR` = 1095656050,

/\*\*

- Middle point of the bounding box.
  \*/
  `CENTER_ANCHOR` = 1095656308,

/\*\*

- Left-edge midpoint of the bounding box.
  \*/
  `LEFT_CENTER_ANCHOR` = 1095658595,

/\*\*

- Right-edge midpoint of the bounding box.
  \*/
  `RIGHT_CENTER_ANCHOR` = 1095660131,

/\*\*

- Top-edge midpoint of the bounding box.
  \*/
  `TOP_CENTER_ANCHOR` = 1095660643,

/\*\*

- Upper-left bounding-box corner.
  \*/
  `TOP_LEFT_ANCHOR` = 1095660652,

/\*\*

- Upper-right bounding-box corner.
  \*/
  `TOP_RIGHT_ANCHOR` = 1095660658,
  }

/\*\*

- Color model choices.
  \*/
  declare enum ColorModel {
  /\*\*
  - Color model for mixed ink.
    \*/
    MIXEDINKMODEL = 1768844664,

/\*\*

- Process-color model.
  \*/
  PROCESS = 1886548851,

/\*\*

- Registration-color model.
  \*/
  REGISTRATION = 1919248243,

/\*\*

- Spot-color model.
  \*/
  SPOT = 1936748404,
  }

/\*\*

- Color space choices.
  \*/
  declare enum ColorSpace {
  /\*\*
  - CMYK color space.
    \*/
    CMYK = 1129142603,

/\*\*

- HSB color space.
  \*/
  HSB = 1665684290,

/\*\*

- LAB color space.
  \*/
  LAB = 1665941826,

/\*\*

- Mixed-ink color space.
  \*/
  MIXEDINK = 1666009432,

/\*\*

- RGB color space.
  \*/
  RGB = 1666336578,
  }

/\*\*

- Screen mode choices.
  \*/
  declare enum ScreenModeOptions {
  /\*\*
  - Uses Preview mode with editing disabled; mouse clicks and arrow keys advance to the previous or next spread.
    \*/
    `PRESENTATION_PREVIEW` = 1936552046,

/\*\*

- Normal view, with guides and frame edges visible.
  \*/
  `PREVIEW_OFF` = 1936552047,

/\*\*

- Preview mode that includes the bleed area.
  \*/
  `PREVIEW_TO_BLEED` = 1936552034,

/\*\*

- Preview mode showing print appearance while hiding guides and frame edges.
  \*/
  `PREVIEW_TO_PAGE` = 1936552048,

/\*\*

- Preview mode that includes the slug area.
  \*/
  `PREVIEW_TO_SLUG` = 1936552051,
  }

/\*\*

- Watermark vertical-position enum type.
  \*/
  declare enum WatermarkVerticalPositionEnum {
  /\*\*
  - Put the watermark at the vertical bottom.
    \*/
    `WATERMARK_V_BOTTOM` = 1884704866,

/\*\*

- Put the watermark at the vertical center.
  \*/
  `WATERMARK_V_CENTER` = 1884704867,

/\*\*

- Put the watermark at the vertical top.
  \*/
  `WATERMARK_V_TOP` = 1884704884,
  }

/\*\*

- Watermark horizontal-position enum type.
  \*/
  declare enum WatermarkHorizontalPositionEnum {
  /\*\*
  - Put the watermark at the horizontal center.
    \*/
    `WATERMARK_H_CENTER` = 1883787363,

/\*\*

- Put the watermark at the horizontal left.
  \*/
  `WATERMARK_H_LEFT` = 1883787372,

/\*\*

- Put the watermark at the horizontal right.
  \*/
  `WATERMARK_H_RIGHT` = 1883787378,
  }

/\*\*

- Page-numbering choices.
  \*/
  declare enum PageNumberingOptions {
  /\*\*
  - Assigns numbers sequentially across every page in the document.
    \*/
    ABSOLUTE = 1096971116,

/\*\*

- Follows the section's page-numbering specifications when numbering pages.
  \*/
  SECTION = 1935897710,
  }

/\*\*

- Tool tip behavior choices.
  \*/
  declare enum ToolTipOptions {
  /\*\*
  - Shows tool tips sooner than the normal timing.
    \*/
    FAST = 1180791668,

/\*\*

- Disables tool tips.
  \*/
  NONE = 1852796517,

/\*\*

- Shows tool tips.
  \*/
  NORMAL = 1852797549,
  }

/\*\*

- Selection-state choices relative to objects that were already selected.
  \*/
  declare enum SelectionOptions {
  /\*\*
  - Adds the object to the current selection; if nothing was selected before, the object becomes the sole selection.
    \*/
    `ADD_TO` = 1633969202,

/\*\*

- Removes the object from the selection.
  \*/
  `REMOVE_FROM` = 1919249734,

/\*\*

- Selects this object while clearing any previous selection.
  \*/
  `REPLACE_WITH` = 1919250519,

/\*\*

- Marks the key object. At least 2 objects must be selected, and the named key object must be among them.
  \*/
  `SET_KEY` = 1936028779,
  }

/\*\*

- Selection choices.
  \*/
  declare enum SelectAll {
  /\*\*
  - Selects everything.
    \*/
    ALL = 1634495520,
    }

/\*\*

- Preview-size choices.
  \*/
  declare enum PreviewSizeOptions {
  /\*\*
  - Preview at the extra large size (1024 x 1024).
    \*/
    `EXTRA_LARGE` = 1162629234,

/\*\*

- Preview at the large size (512 x 512).
  \*/
  LARGE = 1281446002,

/\*\*

- Preview at the medium size (256 x 256).
  \*/
  MEDIUM = 1701727588,

/\*\*

- Preview at the small size (128 x 128).
  \*/
  SMALL = 1399672946,
  }

/\*\*

- Tools panel layout choices.
  \*/
  declare enum ToolsPanelOptions {
  /\*\*
  - Two-column Tools panel layout.
    \*/
    `DOUBLE_COLUMN` = 1162109804,

/\*\*

- One-column Tools panel layout.
  \*/
  `SINGLE_COLUMN` = 1163092844,

/\*\*

- One-row Tools panel layout.
  \*/
  `SINGLE_ROW` = 1163096695,
  }

/\*\*

- Live drawing choices for page-item screen updates during user mouse actions.
  \*/
  declare enum LiveDrawingOptions {
  /\*\*
  - Uses live screen drawing during mouse operations after a delay when the user pauses before moving the mouse.
    \*/
    DELAYED = 1347765349,

/\*\*

- Uses live screen drawing throughout mouse operations.
  \*/
  IMMEDIATELY = 1347766637,

/\*\*

- Avoids live screen drawing during mouse operations and uses sprite mode.
  \*/
  NEVER = 1347767926,
  }

/\*\*

- Preview-page choices.
  \*/
  declare enum PreviewPagesOptions {
  /\*\*
  - Includes every page.
    \*/
    `ALL_PAGES` = 1886547553,

/\*\*

- Includes the first ten pages.
  \*/
  `FIRST_10_PAGES` = 1180192871,

/\*\*

- Includes the first two pages.
  \*/
  `FIRST_2_PAGES` = 1177702503,

/\*\*

- Includes the first five pages.
  \*/
  `FIRST_5_PAGES` = 1177899111,

/\*\*

- Includes only the first page.
  \*/
  `FIRST_PAGE` = 1700947536,
  }

/\*\*

- Alignment choices for static text.
  \*/
  declare enum StaticAlignmentOptions {
  /\*\*
  - Center-aligns the text.
    \*/
    `CENTER_ALIGN` = 1667591796,

/\*\*

- Left-aligns the text.
  \*/
  `LEFT_ALIGN` = 1818584692,

/\*\*

- Right-aligns the text.
  \*/
  `RIGHT_ALIGN` = 1919379572,
  }

/\*\*

- Rendering intent choices.
  \*/
  declare enum RenderingIntent {
  /\*\*
  - Keeps color values accurate rather than preserving color relationships; useful for checking how paper color affects printed output.
    \*/
    `ABSOLUTE_COLORIMETRIC` = 1380540771,

/\*\*

- Keeps the visual relationships among colors while sacrificing exact color values; best for photographs with high out-of-gamut percentages.
  \*/
  PERCEPTUAL = 1380544611,

/\*\*

- Matches the source color space highlight against the destination highlight, then shifts all colors; colors outside gamut move to the nearest reproducible destination color.
  \*/
  `RELATIVE_COLORIMETRIC` = 1380545123,

/\*\*

- Favors vivid color over accuracy; best for business graphics such as graphs or charts.
  \*/
  SATURATION = 1380545377,

/\*\*

- Applies the active color settings.
  \*/
  `USE_COLOR_SETTINGS` = 1380541299,
  }

/\*\*

- Printer-mark stroke weight choices.
  \*/
  declare enum MarkLineWeight {
  /\*\*
  - 05 mm.
    \*/
    P05MM = 808807789,

/\*\*

- 07 mm.
  \*/
  P07MM = 808938861,

/\*\*

- 10 mm.
  \*/
  P10MM = 825257325,

/\*\*

- 125 pt.
  \*/
  P125PT = 825374064,

/\*\*

- 15 mm.
  \*/
  P15MM = 825585005,

/\*\*

- 20 mm.
  \*/
  P20MM = 842034541,

/\*\*

- 25 pt.
  \*/
  P25PT = 842346608,

/\*\*

- 30 mm.
  \*/
  P30MM = 858811757,

/\*\*

- 50 pt.
  \*/
  P50PT = 892350576,
  }

/\*\*

- Printer-mark format choices.
  \*/
  declare enum MarkTypes {
  /\*\*
  - Chooses the default mark format.
    \*/
    `DEFAULT_VALUE` = 1147563124,

/\*\*

- Chooses J marks with no circle.
  \*/
  `J_MARK_WITHOUT_CIRCLE` = 1785556579,

/\*\*

- Chooses J marks that include a circle.
  \*/
  `J_MARK_WITH_CIRCLE` = 1785558883,
  }

/\*\*

- Composite color-output mode choices.
  \*/
  declare enum ColorOutputModes {
  /\*\*
  - Prints the specified pages in full color. Note: This is available only for PostScript printers.
    \*/
    `COMPOSITE_CMYK` = 1668105035,

/\*\*

- Prints the specified pages as grayscale output.
  \*/
  `COMPOSITE_GRAY` = 1668116583,

/\*\*

- Prints the specified pages in full color while preserving the document's original color values. Note: This option cannot simulate overprint.
  \*/
  `COMPOSITE_LEAVE_UNCHANGED` = 1668107349,

/\*\*

- Prints the specified pages in full color.
  \*/
  `COMPOSITE_RGB` = 1668108866,

/\*\*

- Allows separations to be generated by the printer. Note: This is valid only with a PostScript raster image processing (RIP) device.
  \*/
  `INRIP_SEPARATIONS` = 1919512691,

/\*\*

- Provides the printer with PostScript information for each required separation. Note: This is available only for PostScript printers.
  \*/
  SEPARATIONS = 1936027745,
  }

/\*\*

- Image data format choices.
  \*/
  declare enum DataFormat {
  /\*\*
  - Selects ASCII formatting.
    \*/
    ASCII = 1095975753,

/\*\*

- Selects binary formatting.
  \*/
  BINARY = 1114534521,
  }

/\*\*

- Flip-direction choices.
  \*/
  declare enum Flip {
  /\*\*
  - Flips both axes, equivalent to rotate 180.
    \*/
    BOTH = 1651471464,

/\*\*

- Mirrors the printed image horizontally.
  \*/
  HORIZONTAL = 1752134266,

/\*\*

- Mirrors the printed image on both axes, equivalent to rotate 180.
  \*/
  `HORIZONTAL_AND_VERTICAL` = 1215977068,

/\*\*

- Leaves the printed image unflipped.
  \*/
  NONE = 1852796517,

/\*\*

- Mirrors the printed image vertically.
  \*/
  VERTICAL = 1986359924,
  }

/\*\*

- Choices for sending fonts to the printer.
  \*/
  declare enum FontDownloading {
  /\*\*
  - Sends all fonts once per page.
    \*/
    COMPLETE = 2003332197,

/\*\*

- Sends only font references. Note: Use when fonts are already on the printer.
  \*/
  NONE = 1852796517,

/\*\*

- Sends only document-used characters (glyphs). Glyphs are sent once per page.
  \*/
  SUBSET = 1768842098,

/\*\*

- Sends only document-used characters (glyphs). Glyphs are sent once per page. Note: Use when the glyph count exceeds 350.
  \*/
  `SUBSET_LARGE` = 1818325607,
  }

/\*\*

- Choices for placing the page on paper or film.
  \*/
  declare enum PagePositions {
  /\*\*
  - Puts the page at the horizontal and vertical center.
    \*/
    CENTERED = 1668183106,

/\*\*

- Puts the page at the horizontal center.
  \*/
  `CENTER_HORIZONTALLY` = 1668183112,

/\*\*

- Puts the page at the vertical center.
  \*/
  `CENTER_VERTICALLY` = 1668183126,

/\*\*

- Places the page at the upper-left corner.
  \*/
  `UPPER_LEFT` = 1668183118,
  }

/\*\*

- Printer PostScript level choices.
  \*/
  declare enum PostScriptLevels {
  /\*\*
  - PostScript Level 2.
    \*/
    `LEVEL_2` = 1347636274,

/\*\*

- PostScript Level 3.
  \*/
  `LEVEL_3` = 1347636275,
  }

/\*\*

- Page orientation choices.
  \*/
  declare enum PrintPageOrientation {
  /\*\*
  - Landscape orientation.
    \*/
    LANDSCAPE = 2003395685,

/\*\*

- Portrait orientation.
  \*/
  PORTRAIT = 1751738216,

/\*\*

- Reversed landscape orientation.
  \*/
  `REVERSE_LANDSCAPE` = 1869771372,

/\*\*

- Reversed portrait orientation.
  \*/
  `REVERSE_PORTRAIT` = 1869771376,
  }

/\*\*

- Choices for sending image data to a printer or file.
  \*/
  declare enum ImageDataTypes {
  /\*\*
  - Sends data at full resolution.
    \*/
    `ALL_IMAGE_DATA` = 1853058416,

/\*\*

- Prints graphics frames with crossbars replacing the graphics.
  \*/
  NONE = 1852796517,

/\*\*

- Sends enough data to print graphics at the output device's best possible resolution.
  \*/
  `OPTIMIZED_SUBSAMPLING` = 1869640563,

/\*\*

- Sends placed bitmap images at screen resolution (72 dpi).
  \*/
  `PROXY_IMAGE_DATA` = 1819243130,
  }
