# Aftereffects (part 1)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/// <reference path="../../shared/global.d.ts" />
/// <reference path="../../shared/ScriptUI.d.ts" />

/\*\*

- System global.
  \*/
  declare var system: System

declare interface \_AppVersion {
CS3: 8.0
CS4: 9.0
CS5: 10.0
`CS5_5`: 10.5
CS6: 11.0
CC: 12.0
CC2014: 13.0
CC2015: 13.5
`CC2015_1`: 13.6
`CC2015_2`: 13.7
`CC2015_3`: 13.8
CC2017: 14.0
CC2018: 15.0
CC2019: 16.0
CC2020: 17.0
}

declare const enum \_CommandID {
/\*\*

- File
  \*/
  NewProject = 2,
  NewFolder = 2139,
  NewAdobePhotoshopFile = 3147,
  NewMAXONCINEMA4DFile = 4007,
  OpenProject = 3,
  OpenRecentProject1 = 2330,
  OpenRecentProject2 = 2331,
  OpenRecentProject3 = 2332,
  OpenRecentProject4 = 2333,
  OpenRecentProject5 = 2334,
  BrowseInBridge = 3689,

Close = 4,
CloseProject = 3154,
Save = 5,
SaveAs = 6,
SaveACopy = 2166,
SaveACopyAsXML = 3785,
IncrementAndSave = 3088,
Revert = 7,

ImportFile = 2003,
ImportMultipleFiles = 2236,
ImportPlaceholder = 2126,
ImportSolid = 3000,
ImportRecentFootage1 = 2310,
ImportRecentFootage2 = 2311,
ImportRecentFootage3 = 2312,
ImportRecentFootage4 = 2313,
ImportRecentFootage5 = 2314,
ImportRecentFootage6 = 2315,
ImportRecentFootage7 = 2316,
ImportRecentFootage8 = 2317,
ImportRecentFootage9 = 2318,
ImportRecentFootage10 = 2319,
ExportAddToAdobeMediaEncoderQueue = 3800,
ExportAddToRenderQueue = 2161,

AddFootageToComp = 2005,
NewCompFromSelection = 2796,

CollectFiles = 2482,
ConsolidateAllFootage = 2107,
RemoveUnusedFootage = 2109,
ReduceProject = 2735,
FindMissingEffects = 4002,
FindMissingFonts = 4003,
FindMissingFootage = 4004,
WatchFolder = 2457,

RunScriptFile = 8000,
OpenScriptEditor = 8001,

CreateProxyStill = 2778,
CreateProxyMovie = 2779,
SetProxyFile = 2003,
SetProxyNone = 2119,
InterpretFootageMain = 2077,
InterpretFootageProxy = 2103,
InterpretFootageRememberInterpretation = 2254,
InterpretFootageApplyInterpretation = 2255,
ReplaceFootageFile = 2003,
ReplaceFootageWithLayeredComp = 3070,
ReplaceFootagePlaceholder = 2126,
ReplaceFootageSolid = 3000,
ReloadFootage = 2257,
RevealInExplorer = 2562,
RevealInFinder = 2562,
RevealInBridge = 3690,

ProjectSettings = 2611,

/\*\*

- Edit
  \*/
  Undo = 16,
  Redo = 2035,
  Redo2 = 17,

Cut = 18,
Copy = 19,
CopyWithPropertyLinks = 10310,
CopyExpressionOnly = 53,
Paste = 20,
Clear = 21,

Duplicate = 2080,
SplitLayer = 2158,
LiftWorkArea = 2613,
ExtractWorkArea = 2614,
SelectAll = 23,
DeselectAll = 2004,

PurgeAllMemoryAndDiskCache = 10200,
PurgeAllMemory = 2373,
PurgeUndo = 2371,
PurgeImageCacheMemory = 2372,
PurgeSnapshot = 2481,

EditOriginal = 2142,
EditInAdobeAudition = 3697,

TemplatesRenderSettings = 2149,
TemplatesOutputModule = 2150,
PasteMochaMask = 5006,

/\*\*

- Composition
  \*/
  NewComposition = 2000,

CompositionSettings = 2007,
SetPosterTime = 2012,
TrimCompToWorkArea = 2360,
CropCompToRegionOfInterest = 2997,
AddToAdobeMediaEncoderQueue = 3800,
AddToRenderQueue = 2161,
AddOutputModule = 2154,

SaveFrameAs = 2233,
SaveFrameAsPhotoshopLayers = 5001,
PreRender = 2780,

CompositionFlowchart = 2258,
CompositionMiniFlowchart = 3792,

/\*\*

- Layer
  \*/
  NewText = 2836,
  NewSolid = 2038,
  NewLight = 2563,
  NewCamera = 2564,
  NewNullObject = 2767,
  NewShapeLayer = 3736,
  NewAdjustmentLayer = 2279,
  // NewAdobePhotoshopFile = 3147,
  // NewMAXONCINEMA4DFile = 4007,
  LayerSettings = 2021,

OpenLayer = 3784,
OpenLayerSource = 2523,
// RevealInExplorer = 2562,
// RevealInFinder = 2562,

NewMask = 2367,
ResetMask = 2448,
RemoveMask = 2368,
RemoveAllMasks = 2369,
UnlockAllMasks = 2456,
LockOtherMasks = 2455,
HideLockedMasks = 2524,

QualityBest = 2045,
QualityDraft = 2044,
QualityWireframe = 2042,
QualityBilinear = 10207,
QualityBicubic = 10208,

HideOtherVideo = 2054,
ShowAllVideo = 2055,
UnlockAllLayers = 2244,

FlipHorizontal = 3766,
FlipVertical = 3767,
CenterInView = 3819,
CenterAnchorPointInLayerContent = 10312,
FitToComp = 2156,
FitToCompWidth = 2732,
FitToCompHeight = 2733,
EnableTimeRemapping = 2153,
TimeReverseLayer = 2135,
TimeStretch = 2024,
FreezeFrame = 3695,
AddMarker = 2157,

LayerStylesConvertToEditableStyles = 3740,
LayerStylesShowAll = 3743,
LayerStylesRemoveAll = 2072,
LayerStylesDropShadow = 9000,
LayerStylesInnerShadow = 9001,
LayerStylesOuterGlow = 9002,
LayerStylesInnerGlow = 9003,
LayerStylesBevelAndEmboss = 9004,
LayerStylesSatin = 9005,
LayerStylesColorOverlay = 9006,
LayerStylesGradientOverlay = 9007,
LayerStylesStroke = 9008,

GroupShapes = 3741,
UngroupShapes = 3742,

ConvertToEditableText = 3799,
CreateShapesFromText = 3781,
CreateMasksFromText = 2933,
CreateShapesFromVectorLayer = 3973,
CreateStereo3DRig = 3843,
CreateOrbitNull = 3844,
LinkFocusDistanceToPointOfInterest = 3845,
LinkFocusDistanceToLayer = 3847,
SetFocusDistanceToLayer = 3846,
AutoTrace = 3044,
PreCompose = 2071,

/\*\*

- Animation
  \*/
  SaveAnimationPreset = 3075,
  ApplyAnimationPreset = 2450,
  RecentAnimationPreset1 = 2460,
  RecentAnimationPreset2 = 2461,
  RecentAnimationPreset3 = 2462,
  RecentAnimationPreset4 = 2463,
  RecentAnimationPreset5 = 2464,
  BrowsePresets = 3691,

ConvertAudioToKeyframes = 5015,
ConvertExpressionToKeyframes = 2639,
RPFCameraImport = 5018,
SequenceLayers = 5003,
TimeReverseKeyframes = 3693,

RemoveAllTextAnimators = 3058,

AddExpression = 2702,
SeparateDimensions = 3764,
TrackCamera = 3983,
TrackInMochaAE = 5007,
WarpStabilizerVFX = 3986,
TrackMotion = 2568,
TrackMask = 10311,
TrackThisProperty = 2643,

RevealPropertiesWithKeyframes = 2387,
RevealPropertiesWithAnimation = 4011,
RevealAllModifiedProperties = 2771,

/\*\*

- View
  \*/
  ZoomIn = 2092,
  ZoomOut = 2093,

ResolutionFull = 2048,
ResolutionHalf = 2047,
ResolutionThird = 2081,
ResolutionQuarter = 2046,
ResolutionCustom = 2049,

UseDisplayColorManagement = 3704,

ShowRulers = 2280,

ShowGuides = 2274,
SnapToGuides = 2286,
LockGuides = 2275,
ClearGuides = 2276,

ShowGrid = 2277,
SnapToGrid = 2278,

ShowLayerControls = 2435,

/\*\*

- Window
  \*/
  Align = 5022,
  Audio = 2029,
  Brushed = 3014,
  Character = 3011,
  EffectsAndPresets = 3718,
  Info = 2028,
  MaskInterpolation = 5027,
  MediaBrowser = 4013,
  Metadata = 3788,
  MotionSketch = 5024,
  Paint = 3045,
  Paragraph = 3012,
  Preview = 2031,
  Progress = 4005,
  Smoother = 5028,
  Tools = 2010,
  Tracker = 5005,
  Wiggler = 5030,
  }

declare enum AlphaMode {
IGNORE = 5413,
PREMULTIPLIED = 5414,
STRAIGHT = 5412,
}

declare enum AutoKernType {
`NO_AUTO_KERN` = 11412,
`METRIC_KERN` = 11413,
`OPTICAL_KERN` = 11414,
}

declare enum AutoOrientType {
/\*_ Layer points along the motion-path direction. _/
`ALONG_PATH` = 4213,

/\*_ Layer faces the active camera, or aims at that camera's point of interest. _/
`CAMERA_OR_POINT_OF_INTEREST` = 4214,

/\*_ Per-character 3D text turns each character toward the active camera. _/
`CHARACTERS_TOWARD_CAMERA` = 4215,

/\*_ Layer may rotate freely without motion-path, point-of-interest, or layer dependencies. _/
`NO_AUTO_ORIENT` = 4212,
}

declare enum BaselineDirection {
`BASELINE_WITH_STREAM` = 11612,
`BASELINE_VERTICAL_ROTATED` = 11613,
`BASELINE_VERTICAL_CROSS_STREAM` = 11614,
}

declare enum BlendingMode {
ADD = 5220,
`ALPHA_ADD` = 5244,
`CLASSIC_COLOR_BURN` = 5219,
`CLASSIC_COLOR_DODGE` = 5225,
`CLASSIC_DIFFERENCE` = 5234,
COLOR = 5238,
`COLOR_BURN` = 5218,
`COLOR_DODGE` = 5224,
`DANCING_DISSOLVE` = 5214,
DARKEN = 5215,
`DARKER_COLOR` = 5247,
DIFFERENCE = 5233,
DISSOLVE = 5213,
DIVIDE = 5249,
EXCLUSION = 5235,
`HARD_LIGHT` = 5228,
`HARD_MIX` = 5232,
HUE = 5236,
LIGHTEN = 5221,
`LIGHTER_COLOR` = 5246,
`LINEAR_BURN` = 5217,
`LINEAR_DODGE` = 5223,
`LINEAR_LIGHT` = 5229,
`LUMINESCENT_PREMUL` = 5245,
LUMINOSITY = 5239,
MULTIPLY = 5216,
NORMAL = 5212,
OVERLAY = 5226,
`PIN_LIGHT` = 5231,
SATURATION = 5237,
SCREEN = 5222,
`SILHOUETE_ALPHA` = 5242,
`SILHOUETTE_LUMA` = 5243,
`SOFT_LIGHT` = 5227,
`STENCIL_ALPHA` = 5240,
`STENCIL_LUMA` = 5241,
SUBTRACT = 5248,
`VIVID_LIGHT` = 5230,
}

declare enum BoxAutoFitPolicy {
NONE = 13412,
`HEIGHT_CURSOR` = 13413,
`HEIGHT_PRECISE_BOUNDS` = 13414,
`HEIGHT_BASELINE` = 13415,
}

declare enum BoxFirstBaselineAlignment {
ASCENT = 13013,
`CAP_HEIGHT` = 13014,
`EM_BOX` = 13017,
LEADING = 13015,
`LEGACY_METRIC` = 13018,
`MINIMUM_VALUE_ASIAN` = 13019,
`MINIMUM_VALUE_ROMAN` = 13012,
`TYPO_ASCENT` = 13020,
`X_HEIGHT` = 13016,
}

declare enum BoxVerticalAlignment {
TOP = 12812,
CENTER = 12813,
BOTTOM = 12814,
JUSTIFY = 12815,
}

declare enum ChannelType {
`CHANNEL_ALPHA` = 7816,
`CHANNEL_ALPHA_BOUNDARY` = 7822,
`CHANNEL_ALPHA_OVERLAY` = 7821,
`CHANNEL_BLUE` = 7815,
`CHANNEL_BLUE_COLORIZE` = 7819,
`CHANNEL_GREEN` = 7814,
`CHANNEL_GREEN_COLORIZE` = 7818,
`CHANNEL_RED` = 7813,
`CHANNEL_RED_COLORIZE` = 7817,
`CHANNEL_RGB` = 7812,
`CHANNEL_RGB_STRAIGHT` = 7820,
}

declare enum CloseOptions {
/\*_ Close while leaving changes unsaved. _/
`DO_NOT_SAVE_CHANGES` = 1212,

/\*_ Ask whether changes should be saved before closing. _/
`PROMPT_TO_SAVE_CHANGES` = 1213,

/\*_ Save automatically during close. _/
`SAVE_CHANGES` = 1214,
}

declare enum ComposerEngine {
`LATIN_CJK_ENGINE` = 10412,
`UNIVERSAL_TYPE_ENGINE` = 10413,
}

declare enum DigitSet {
`DEFAULT_DIGITS` = 12012,
`ARABIC_DIGITS` = 12013,
`HINDI_DIGITS` = 12014,
`FARSI_DIGITS` = 12015,
`ARABIC_DIGITS_RTL` = 12016,
}

declare enum CTFontType {
`CT_TYPE1_FONTTYPE` = 12612,
`CT_TRUETYPE_FONTTYPE` = 12613,
`CT_CID_FONTTYPE` = 12614,
`CT_ATC_FONTTYPE` = 12615,
`CT_BITMAP_FONTTYPE` = 12616,
`CT_OPENTYPE_CFF_FONTTYPE` = 12617,
`CT_OPENTYPE_CID_FONTTYPE` = 12618,
`CT_OPENTYPE_TT_FONTTYPE` = 12619,
`CT_TYPE3_FONTTYPE` = 12620,
`CT_SVG_FONTTYPE` = 12621,
}

declare enum CTFontTechnology {
`CT_TYPE1_FONT` = 12412,
`CT_TRUETYPE_FONT` = 12413,
`CT_CID_FONT` = 12414,
`CT_BITMAP_FONT` = 12415,
`CT_ATC_FONT` = 12416,
`CT_TYPE3_FONT` = 12417,
`CT_SVG_FONT` = 12418,
`CT_ANYTECHNOLOGY` = 12419,
}

declare enum CTScript {
`CT_ROMAN_SCRIPT` = 12212,
`CT_JAPANESE_SCRIPT` = 12213,
`CT_TRADITIONALCHINESE_SCRIPT` = 12214,
`CT_KOREAN_SCRIPT` = 12215,
`CT_ARABIC_SCRIPT` = 12216,
`CT_HEBREW_SCRIPT` = 12217,
`CT_GREEK_SCRIPT` = 12218,
`CT_CYRILLIC_SCRIPT` = 12219,
`CT_RIGHTLEFT_SCRIPT` = 12220,
`CT_DEVANAGARI_SCRIPT` = 12221,
`CT_GURMUKHI_SCRIPT` = 12222,
`CT_GUJARATI_SCRIPT` = 12223,
`CT_ORIYA_SCRIPT` = 12224,
`CT_BENGALI_SCRIPT` = 12225,
`CT_TAMIL_SCRIPT` = 12226,
`CT_TELUGU_SCRIPT` = 12227,
`CT_KANNADA_SCRIPT` = 12228,
`CT_MALAYALAM_SCRIPT` = 12229,
`CT_SINHALESE_SCRIPT` = 12230,
`CT_BURMESE_SCRIPT` = 12231,
`CT_KHMER_SCRIPT` = 12232,
`CT_THAI_SCRIPT` = 12233,
`CT_LAOTIAN_SCRIPT` = 12234,
`CT_GEORGIAN_SCRIPT` = 12235,
`CT_ARMENIAN_SCRIPT` = 12236,
`CT_SIMPLIFIEDCHINESE_SCRIPT` = 12237,
`CT_TIBETAN_SCRIPT` = 12238,
`CT_MONGOLIAN_SCRIPT` = 12239,
`CT_GEEZ_SCRIPT` = 12240,
`CT_EASTEUROPEANROMAN_SCRIPT` = 12241,
`CT_VIETNAMESE_SCRIPT` = 12242,
`CT_EXTENDEDARABIC_SCRIPT` = 12243,
`CT_KLINGON_SCRIPT` = 12244,
`CT_EMOJI_SCRIPT` = 12245,
`CT_ROHINGYA_SCRIPT` = 12246,
`CT_JAVANESE_SCRIPT` = 12247,
`CT_SUNDANESE_SCRIPT` = 12248,
`CT_LONTARA_SCRIPT` = 12249,
`CT_SYRIAC_SCRIPT` = 12250,
`CT_TAITHAM_SCRIPT` = 12251,
`CT_BUGINESE_SCRIPT` = 12252,
`CT_BALINESE_SCRIPT` = 12253,
`CT_CHEROKEE_SCRIPT` = 12254,
`CT_MANDAIC_SCRIPT` = 12255,
`CT_VAI_SCRIPT` = 12256,
`CT_THAANA_SCRIPT` = 12257,
`CT_BRAVANESE_SCRIPT` = 12258,
`CT_BRAHMI_SCRIPT` = 12259,
`CT_CARIAN_SCRIPT` = 12260,
`CT_CYPRIOT_SCRIPT` = 12261,
`CT_EGYPTIAN_SCRIPT` = 12262,
`CT_IMPERIALARAMAIC_SCRIPT` = 12263,
`CT_PAHLAVI_SCRIPT` = 12264,
`CT_PARTHIAN_SCRIPT` = 12265,
`CT_KHAROSHTHI_SCRIPT` = 12266,
`CT_LYCIAN_SCRIPT` = 12267,
`CT_LYDIAN_SCRIPT` = 12268,
`CT_PHOENICIAN_SCRIPT` = 12269,
`CT_PERSIAN_SCRIPT` = 12270,
`CT_SHAVIAN_SCRIPT` = 12271,
`CT_SUMAKKCUNEIFORM_SCRIPT` = 12272,
`CT_UGARITIC_SCRIPT` = 12273,
`CT_GLAGOLITIC_SCRIPT` = 12274,
`CT_GOTHIC_SCRIPT` = 12275,
`CT_OGHAM_SCRIPT` = 12276,
`CT_OLDITALIC_SCRIPT` = 12277,
`CT_ORKHON_SCRIPT` = 12278,
`CT_RUNIC_SCRIPT` = 12279,
`CT_MEROITICCURSIVE_SCRIPT` = 12280,
`CT_COPTIC_SCRIPT` = 12281,
`CT_OLCHIKI_SCRIPT` = 12282,
`CT_SORASOMPENG_SCRIPT` = 12283,
`CT_OLDHANGUL_SCRIPT` = 12284,
`CT_LISU_SCRIPT` = 12285,
`CT_NKO_SCRIPT` = 12286,
`CT_ADLAM_SCRIPT` = 12287,
`CT_BAMUM_SCRIPT` = 12288,
`CT_BASSAVAH_SCRIPT` = 12289,
`CT_NEWA_SCRIPT` = 12290,
`CT_NEWTAILU_SCRIPT` = 12291,
`CT_SCRIPT` = 12292,
`CT_OSAGE_SCRIPT` = 12293,
`CT_UCAS_SCRIPT` = 12294,
`CT_TIFINAGH_SCRIPT` = 12295,
`CT_KAYAHLI_SCRIPT` = 12296,
`CT_LAO_SCRIPT` = 12297,
`CT_TAILE_SCRIPT` = 12298,
`CT_TAIVIET_SCRIPT` = 12299,
`CT_DONTKNOW_SCRIPT` = 12300,
}

declare enum FastPreviewType {
`FP_ADAPTIVE_RESOLUTION` = 8013,
`FP_DRAFT` = 8014,
`FP_FAST_DRAFT` = 8015,
`FP_OFF` = 8012,
`FP_WIREFRAME` = 8016,
}

declare enum FeetFramesFilmType {
MM16 = 2412,
MM35 = 2413,
}

declare enum FieldSeparationType {
`LOWER_FIELD_FIRST` = 5614,
OFF = 5613,
`UPPER_FIELD_FIRST` = 5612,
}

declare enum FontBaselineOption {
`FONT_NORMAL_BASELINE` = 11212,
`FONT_FAUXED_SUPERSCRIPT` = 11213,
`FONT_FAUXED_SUBSCRIPT` = 11214,
}

declare enum FontCapsOption {
`FONT_NORMAL_CAPS` = 11012,
`FONT_SMALL_CAPS` = 11013,
`FONT_ALL_CAPS` = 11014,
`FONT_ALL_SMALL_CAPS` = 11015,
}

declare enum FootageTimecodeDisplayStartType {
`FTCS_START_0` = 2213,
`FTCS_USE_SOURCE_MEDIA` = 2212,
}

declare enum FrameBlendingType {
`FRAME_MIX` = 4013,
`NO_FRAME_BLEND` = 4012,
`PIXEL_MOTION` = 4014,
}

declare enum FramesCountType {
`FC_START_0` = 2612,
`FC_START_1` = 2613,
`FC_TIMECODE_CONVERSION` = 2614,
}

declare enum GetSettingsFormat {
NUMBER = 3413,
`NUMBER_SETTABLE` = 3414,
SPEC = 3412,
STRING = 3415,
`STRING_SETTABLE` = 3416,
}

declare enum GpuAccelType {
CUDA = 1813,
METAL = 1814,
OPENCL = 1812,
SOFTWARE = 1816,
VULKAN = 1815,
}

declare enum ImportAsType {
COMP = 3814,
`COMP_CROPPED_LAYERS` = 3812,
FOOTAGE = 3813,
PROJECT = 3815,
}

declare enum KeyframeInterpolationType {
BEZIER = 6613,
HOLD = 6614,
LINEAR = 6612,
}

declare enum Language {
CHINESE = 1619,
ENGLISH = 1612,
FRENCH = 1615,
GERMAN = 1614,
ITALIAN = 1616,
JAPANESE = 1613,
KOREAN = 1618,
PORTUGUESE = 1621,
RUSSIAN = 1620,
SPANISH = 1617,
}

declare enum LayerQuality {
BEST = 4614,
DRAFT = 4613,
WIREFRAME = 4612,
}

declare enum LayerSamplingQuality {
BICUBIC = 4813,
BILINEAR = 4812,
}

declare enum LeadingType {
`ROMAN_LEADING_TYPE` = 10812,
`JAPANESE_LEADING_TYPE` = 10813,
}

declare enum LightType {
AMBIENT = 4415,
PARALLEL = 4412,
POINT = 4414,
SPOT = 4413,
}

declare enum LineJoinType {
`LINE_JOIN_MITER` = 11812,
`LINE_JOIN_ROUND` = 11813,
`LINE_JOIN_BEVEL` = 11814,
}

declare enum LineOrientation {
HORIZONTAL = 13212,
`VERTICAL_RIGHT_TO_LEFT` = 13213,
`VERTICAL_LEFT_TO_RIGHT` = 13214,
}

declare enum LogType {
`ERRORS_AND_PER_FRAME_INFO` = 3214,
`ERRORS_AND_SETTINGS` = 3213,
`ERRORS_ONLY` = 3212,
}

declare enum MaskFeatherFalloff {
`FFO_LINEAR` = 7213,
`FFO_SMOOTH` = 7212,
}

declare enum MaskMode {
ADD = 6813,
DARKEN = 6817,
DIFFERENCE = 6818,
INTERSECT = 6815,
LIGHTEN = 6816,
NONE = 6812,
SUBTRACT = 6814,
}

declare enum MaskMotionBlur {
OFF = 7014,
ON = 7013,
`SAME_AS_LAYER` = 7012,
}

declare enum ParagraphDirection {
`DIRECTION_LEFT_TO_RIGHT` = 10212,
`DIRECTION_RIGHT_TO_LEFT` = 10213,
}

declare enum ParagraphJustification {
`CENTER_JUSTIFY` = 7415,
`FULL_JUSTIFY_LASTLINE_CENTER` = 7418,
`FULL_JUSTIFY_LASTLINE_FULL` = 7419,
`FULL_JUSTIFY_LASTLINE_LEFT` = 7416,
`FULL_JUSTIFY_LASTLINE_RIGHT` = 7417,
`LEFT_JUSTIFY` = 7413,
`MULTIPLE_JUSTIFICATIONS` = 7412,
`RIGHT_JUSTIFY` = 7414,
}

declare enum PostRenderAction {
IMPORT = 3613,
`IMPORT_AND_REPLACE_USAGE` = 3614,
NONE = 3612,
`SET_PROXY` = 3615,
}

declare enum PREFType {
`PREF_T`ype*`MACHINE_INDEPENDENT` = 8813,
`PREF_T`ype*`MACHINE_INDEPENDENT_COMPOSITION` = 8816,
`PREF_T`ype*`MACHINE_INDEPENDENT_OUTPUT` = 8815,
`PREF_T`ype*`MACHINE_INDEPENDENT_RENDER` = 8814,
`PREF_T`ype*`MACHINE_SPECIFIC` = 8812,
`PREF_T`ype*`MACHINE_SPECIFIC_PAINT` = 8818,
`PREF_T`ype\_`MACHINE_SPECIFIC_TEXT` = 8817,
}

declare enum PropertyType {
`INDEXED_GROUP` = 6214,
`NAMED_GROUP` = 6213,
PROPERTY = 6212,
}

declare enum PropertyValueType {
COLOR = 6418,
`CUSTOM_VALUE` = 6419,
`LAYER_INDEX` = 6421,
MARKER = 6420,
`MASK_INDEX` = 6422,
`NO_VALUE` = 6412,
OneD = 6417,
SHAPE = 6423,
`TEXT_DOCUMENT` = 6424,
ThreeD = 6414,
Three`D_SPATIAL` = 6413,
TwoD = 6416,
Two`D_SPATIAL` = 6415,
}

declare enum PulldownMethod {
`ADVANCE_24P` = 6013,
`PULLDOWN_3_2` = 6012,
}

declare enum PulldownPhase {
OFF = 5813,
SSWWW = 5814,
SWWWS = 5815,
`SWWWW_24P_ADVANCE` = 5821,
WSSWW = 5812,
`WSWWW_24P_ADVANCE` = 5820,
WWSSW = 5817,
`WWSWW_24P_ADVANCE` = 5819,
WWWSS = 5816,
`WWWSW_24P_ADVANCE` = 5818,
`WWWWS_24P_ADVANCE` = 5822,
}

declare enum PurgeTarget {
/\*_ Clears every item After Effects has cached to physical memory. _/
`ALL_CACHES` = 1412,

/\*_ Clears all saved image data. _/
`IMAGE_CACHES` = 1415,

/\*_ Clears cached composition/layer snapshot data. _/
`SNAPSHOT_CACHES` = 1414,

/\*_ Clears data stored in the undo cache. _/
`UNDO_CACHES` = 1413,

/\*_ Clears every After Effects RAM cache _/
`ALL_MEMORY_CACHES` = 1416,
}

declare enum ResolveType {
`ACCEPT_THEIRS` = 8612,
`ACCEPT_THEIRS_AND_COPY` = 8613,
`ACCEPT_YOURS` = 8614,
}

declare enum RQItemStatus {
DONE = 3019,
`ERR_STOPPED` = 3018,
`NEEDS_OUTPUT` = 3013,
QUEUED = 3015,
RENDERING = 3016,
UNQUEUED = 3014,
`USER_STOPPED` = 3017,
`WILL_CONTINUE` = 3012,
}

declare enum SceneEditDetectionMode {
MARKERS = 10012,
SPLIT = 10013,
`SPLIT_PRECOMP` = 10014,
NONE = 10015,
}

declare enum SubstitutedFontReplacementMatchPolicy {
`POSTSCRIPT_NAME` = 13612,
`CTFI_EQUAL` = 13613,
DISABLED = 13614,
}

declare enum TimeDisplayType {
FRAMES = 2013,
TIMECODE = 2012,
}

declare enum ToolType {
Tool_Arrow = 9012,
Tool_CameraDollyCamera = 9017,
Tool_CameraDollyToCursor = 9048,
Tool_CameraDollyTowardsCursor = 9047,
Tool_CameraMaya = 9014,
Tool_CameraOrbit = 9015,
Tool_CameraOrbitCamera = 9015,
Tool_CameraOrbitCursor = 9044,
Tool_CameraOrbitScene = 9045,
Tool_CameraPanCamera = 9016,
Tool_CameraPanCursor = 9046,
Tool_CameraTrackXY = 9016,
Tool_CameraTrackZ = 9017,
Tool_CloneStamp = 9019,
Tool_Eraser = 9020,
Tool_Feather = 9032,
Tool_Hairbrush = 9042,
Tool_Hand = 9021,
Tool_Magnify = 9022,
Tool_Oval = 9026,
Tool_Paintbrush = 9018,
Tool_PanBehind = 9023,
Tool_Pen = 9031,
Tool_PenConvert = 9035,
Tool_PenMinus = 9034,
Tool_PenPlus = 9033,
Tool_Pin = 9036,
Tool_PinAdvanced = 9043,
Tool_PinBend = 9038,
Tool_PinDepth = 9040,
Tool_PinStarch = 9037,
Tool_Polygon = 9027,
Tool_Quickselect = 9041,
Tool_Rect = 9024,
Tool_Rotate = 9013,
Tool_RoundedRect = 9025,
Tool_Star = 9028,
Tool_TextH = 9029,
Tool_TextV = 9030,
}

declare enum TrackMatteType {
ALPHA = 5013,
`ALPHA_INVERTED` = 5014,
LUMA = 5015,
`LUMA_INVERTED` = 5016,
`NO_TRACK_MATTE` = 5012,
}

declare enum ViewerType {
`VIEWER_COMPOSITION` = 7612,
`VIEWER_FOOTAGE` = 7614,
`VIEWER_LAYER` = 7613,
}

/\*\*

- TYPES
  \*/
  type \_PropertyClasses = Property | PropertyGroup | MaskPropertyGroup
  type \_ItemClasses = CompItem | FootageItem | FolderItem

/\*_ Removes text from the Info panel. _/
declare var clearOutput: () => void

/\*_ Produces random numbers. _/
declare var generateRandomNumber: () => number

declare var getEnumAsString: (enumValue: number) => string

/\*_ Parses string-form time into a number. _/
declare var currentFormatToTime: (
formattedTime: string,
fps: number,
isDuration?: boolean,
) => number

/\*_ Formats a numeric time as a string. _/
declare var timeToCurrentFormat: (time: number, fps: number, isDuration?: boolean) => string

/\*_ Sends text to the Info panel without adding a line break. _/
declare var write: (text: string) => void

/\*_ Sends text to the Info panel and appends a line break. _/
declare var writeLn: (text: string) => void

/\*_ True indicates that the specified object exists. _/
declare var isValid: (obj: object) => boolean

/** Gives access to After Effects objects and application settings. The single global object is always available as app. \*/
declare class Application {
/** Current After Effects project. \*/
readonly project: Project

/\*_ Version number of the After Effects application. _/
readonly version: string

/\*_ Name of this application build. _/
readonly buildName: string

/\*_ Number of this application build. _/
readonly buildNumber: number

/\*\* \*/
readonly fonts: FontsObject

/\*_ True when the local application is running in Watch Folder mode. _/
readonly isWatchFolder: boolean
