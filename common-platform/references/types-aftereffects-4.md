# Aftereffects (part 4)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*_ Assigns labelIndex on the referenced keyframe: 0 for None, or 1 to 16 for preset colors in Labels preferences. _/
setLabelAtKey(keyIndex: number, labelIndex: number): void

/\*_ True when this property supports interpolation. _/
isInterpolationTypeValid(type: KeyframeInterpolationType): boolean

/\*_ Assigns interpolation type settings on a key. _/
setInterpolationTypeAtKey(
keyIndex: number,
inType: KeyframeInterpolationType,
outType?: KeyframeInterpolationType,
): void

/\*_ Returns a key's 'in' interpolation type. _/
keyInInterpolationType(keyIndex: number): KeyframeInterpolationType

/\*_ Returns a key's 'out' interpolation type. _/
keyOutInterpolationType(keyIndex: number): KeyframeInterpolationType

/\*_ Assigns key spatial tangent vectors for 'in' and 'out'. _/
setSpatialTangentsAtKey(
keyIndex: number,
inTangent: [number, number],
outTangent: typeof inTangent,
): void
setSpatialTangentsAtKey(
keyIndex: number,
inTangent: [number, number, number],
outTangent: typeof inTangent,
): void

/\*_ Returns a key's 'in' spatial tangent. _/
keyInSpatialTangent(keyIndex: number): [number, number] | [number, number, number]

/\*_ Returns a key's 'out' spatial tangent. _/
keyOutSpatialTangent(keyIndex: number): [number, number] | [number, number, number]

/\*_ Assigns key temporal ease arrays for 'in' and 'out'. _/
setTemporalEaseAtKey(
keyIndex: number,
inTemporalEase: [KeyframeEase],
outTemporalEase?: typeof inTemporalEase,
): void
setTemporalEaseAtKey(
keyIndex: number,
inTemporalEase: [KeyframeEase, KeyframeEase],
outTemporalEase?: typeof inTemporalEase,
): void
setTemporalEaseAtKey(
keyIndex: number,
inTemporalEase: [KeyframeEase, KeyframeEase, KeyframeEase],
outTemporalEase?: typeof inTemporalEase,
): void

/\*_ Returns a key's 'in' temporal ease. _/
keyInTemporalEase(
keyIndex: number,
): [KeyframeEase] | [KeyframeEase, KeyframeEase] | [KeyframeEase, KeyframeEase, KeyframeEase]

/\*_ Returns a key's 'out' temporal ease. _/
keyOutTemporalEase(
keyIndex: number,
): [KeyframeEase] | [KeyframeEase, KeyframeEase] | [KeyframeEase, KeyframeEase, KeyframeEase]

/\*_ Assigns the temporal-continuity flag for a keyframe. _/
setTemporalContinuousAtKey(keyIndex: number, newVal: boolean): void

/\*_ Reports a keyframe's temporal-continuity state. _/
keyTemporalContinuous(keyIndex: number): boolean

/\*_ Assigns the temporal auto-Bezier flag for a keyframe. _/
setTemporalAutoBezierAtKey(keyIndex: number, newVal: boolean): void

/\*_ Reports a keyframe's temporal auto-Bezier state. _/
keyTemporalAutoBezier(keyIndex: number): boolean

/\*_ Assigns the spatial-continuity flag for a keyframe. _/
setSpatialContinuousAtKey(keyIndex: number, newVal: boolean): void

/\*_ Reports a keyframe's spatial-continuity state. _/
keySpatialContinuous(keyIndex: number): boolean

/\*_ Assigns the spatial auto-Bezier flag for a keyframe. _/
setSpatialAutoBezierAtKey(keyIndex: number, newVal: boolean): void

/\*_ Reports a keyframe's spatial auto-Bezier state. _/
keySpatialAutoBezier(keyIndex: number): boolean

/\*_ Sets a keyframe's roving state. _/
setRovingAtKey(keyIndex: number, newVal: boolean): void

/\*_ Reports a keyframe's roving state. _/
keyRoving(keyIndex: number): boolean

/\*_ Changes a keyframe's selected state. _/
setSelectedAtKey(keyIndex: number, onOff: boolean): void

/\*_ Reports a keyframe's selected state. _/
keySelected(keyIndex: number): boolean

/\*_ Gets one follower property from a separated multidimensional property. _/
getSeparationFollower(dim: number): Property<OneDProperty>

/\*_ Adds this property to the Essential Graphics panel for the given composition. _/
addToMotionGraphicsTemplate(comp: CompItem): boolean

/\*_ Adds this property to the Essential Graphics panel for the given composition and supplies a name. _/
addToMotionGraphicsTemplateAs(comp: CompItem, name: string): boolean

/\*_ Tests whether this property can be added to the Essential Graphics panel for the given composition. _/
canAddToMotionGraphicsTemplate(comp: CompItem): boolean

/\*_ Assigns items for the Dropdown Menu Control's Menu Property. _/
setPropertyParameters(items: string[]): Property<OneDProperty>

/\*_ Assigns this property's alternate source. _/
setAlternateSource(newSource: AVItem): void
}

declare class PropertyBase {
/\*_ Property name used when constructing unique naming paths. _/
readonly matchName: string

/\*_ Index of this property inside the parent group. _/
readonly propertyIndex: number

/\*_ Count of parent-group levels between this property and its containing layer. _/
readonly propertyDepth: number

/\*_ Type value for this property. _/
readonly propertyType: PropertyType

/\*_ Direct parent group for this property. _/
readonly parentProperty: PropertyGroup

/\*_ True after the property has changed from its creation state. _/
readonly isModified: boolean

/\*_ True when the UI can show an eyeball icon for this property. _/
readonly canSetEnabled: boolean

/\*_ True when this property is active. _/
readonly active: boolean

/\*_ True when the UI does not display this property. _/
readonly elided: boolean

/\*_ True when this property is an effect. _/
readonly isEffect: boolean

/\*_ True when this property is a mask. _/
readonly isMask: boolean

/\*_ Property name. _/
name: string

/\*_ True when this property is enabled. _/
enabled: boolean

/\*_ True when this property is selected. _/
selected: boolean

/\*_ Returns the parent group for this property. _/
propertyGroup(countUp?: number): PropertyGroup

/\*_ Deletes this object from the project. _/
remove(): void

/\*_ Repositions this property within its parent group. _/
moveTo(newIndex: number): void

/\*_ Creates a duplicate of this property object. _/
duplicate(): \_PropertyClasses

/\*_ Returns a member property or group; this is strictly a PropertyGroup method. _/
property(index: number): \_PropertyClasses
property(name: string): \_PropertyClasses
}

/\*_ Application preference settings control which expression-syntax variants can resolve layer properties by name. _/
declare interface PropertyGroup {
(index: number): \_PropertyClasses
(name: string): \_PropertyClasses
}

/** PropertyGroup is a container for Property objects and nested PropertyGroup objects. Groups may form a parent-child hierarchy from a root Layer down to one Property, for example the third mask's mask feather. Use PropertyBase methods and attributes to move through that hierarchy. \*/
declare class PropertyGroup extends PropertyBase {
/** Count of indexed properties held by the group. \*/
readonly numProperties: number

/\*_ Creates a property inside the group. _/
addProperty(name: string): \_PropertyClasses

/\*_ Reports whether the group accepts the named property. _/
canAddProperty(name: string): boolean

/\*_ Creates a variable font axis property in this group. _/
addVariableFontAxis(axisTag: string): OneDProperty
}

/** RenderQueue models render automation for one After Effects project's Render Queue panel. It exposes queue items and statuses, and its methods start, pause, or stop rendering. \*/
declare class RenderQueue {
/** True while rendering is underway. \*/
readonly rendering: boolean

/\*_ Queue-wide item total. _/
readonly numItems: number

/\*_ CC 2017(14.0)- _/
readonly canQueueInAME: boolean

/\*_ Render-queue item collection. _/
readonly items: RQItemCollection

/\*_ Reads or writes Notify for the full Render Queue _/
queueNotify: boolean

/\*_ Shows or hides the Render Queue panel. _/
showWindow(doShow: boolean): void

/\*_ Starts rendering and returns only after rendering finishes. _/
render(): void

/\*_ Pauses rendering or resumes it. _/
pauseRendering(pause: boolean): void

/\*_ Invokes Queue In AME _/
queueInAME(render_immediately_in_AME: boolean): void

/\*_ Ends the render operation. _/
stopRendering(): void

/\*_ Retrieves an item from the render-queue collection. _/
item(index: number): RenderQueueItem
}

/** RenderQueueItem represents one render-queue entry and exposes the settings for that render. Create it by adding a composition to the Render Queue through RQItemCollection. \*/
declare class RenderQueueItem {
/** Total Output Modules attached to this item. \*/
readonly numOutputModules: number

/\*_ Date when rendering started for this item. _/
readonly startTime: Date | null

/\*_ Seconds elapsed in this item's current render. _/
readonly elapsedSeconds: number | null

/\*_ Composition rendered by this item. _/
readonly comp: CompItem

/\*_ Output Modules collection for this item. _/
readonly outputModules: OMCollection

/\*_ Render Settings template names. _/
readonly templates: string[]

/\*_ Current render status for the item. _/
readonly status: RQItemStatus

/\*_ Sets Notify for each separate item in the Render Queue _/
queueItemNotify: boolean

/\*_ True when this item participates when the queue starts. _/
render: boolean

/\*_ Composition start time used for rendering. _/
timeSpanStart: number

/\*_ Composition duration used for rendering. _/
timeSpanDuration: number

/\*_ Number of frames omitted while rendering this item. _/
skipFrames: number

/\*_ Callback function invoked during rendering whenever this item's status changes. _/
onStatus: string | null

/\*_ Item log type. _/
logType: LogType

getSetting(key: string): string | number

getSettings(format: GetSettingsFormat): object

setSetting(key: string, value: string | number): void

setSettings(settings: object): void

/\*_ Returns an Output Module for this item. _/
outputModule(index: number): OutputModule

/\*_ Deletes the item from the render queue. _/
remove(): void

/\*_ Stores a named Render Settings template. _/
saveAsTemplate(name: string): void

/\*_ Uses a Render Settings template. _/
applyTemplate(templateName: string): void

/\*_ Creates a duplicate of this item. _/
duplicate(): RenderQueueItem
}

/** RQItemCollection holds every render-queue item in a project, matching the project's Render Queue panel. It gives access to RenderQueueItem objects and can create them from compositions. The first RenderQueueItem uses index position 1. \*/
declare class RQItemCollection extends Collection {
/** Gets a RenderQueueItem by index; indexing begins at 1. \*/
[index: number]: RenderQueueItem

/\*_ Adds a composition into the Render Queue. _/
add(comp: CompItem): RenderQueueItem
}

/** Settings offers script-friendly management for stored settings. Values are saved in the After Effects preferences file and persist between application sessions. Entries are addressed by section and key; each key maps to a value. In the preferences file, section names appear inside brackets and quotation marks, while key names appear in quotation marks below the section. All values are strings. \*/
declare class Settings {
/** Writes the fallback setting value. \*/
saveSetting(sectionName: string, keyName: string, value: string, type?: PREFType): void

/\*_ Fetches the stored value. _/
getSetting(sectionName: string, keyName: string, type?: PREFType): string

/\*_ Reports whether the named setting has a value. _/
haveSetting(sectionName: string, keyName: string, type?: PREFType): boolean
}

/** Shape carries the data describing a shape-layer path or a Mask outline path. \*/
declare class Shape {
/** True when the shape forms a closed curve. \*/
closed: boolean

/\*_ Shape anchor-point coordinates. _/
vertices: [number, number][]

/\*_ Tangent vectors entering the shape vertices. _/
inTangents: [number, number][]

/\*_ Tangent vectors leaving the shape vertices. _/
outTangents: [number, number][]

/\*_ Mask path segment sections between vertices that contain each feather point. _/
featherSegLocs: number[]

/\*_ Relative location of each feather point on its mask path segment. _/
featherRelSegLocs: number[]

/\*_ Feather radius amount for each feather point. _/
featherRadii: number[]

/\*_ Feather-radius interpolation type for each feather point. _/
featherInterps: number[]

/\*_ Feather tension value at every feather point. _/
featherTensions: number[]

/\*_ Inner or outer direction for each feather point. _/
featherTypes: number[]

/\*_ Relative angle between the two normals beside a curved outer feather-boundary corner on a mask path. _/
featherRelCornerAngles: number[]
}

/\*_ ShapeLayer represents a composition layer containing shapes; create one with LayerCollection.addShape(). _/
declare class ShapeLayer extends AVLayer {}

/** SolidSource represents footage whose source is a solid color. \*/
declare class SolidSource extends FootageSource {
/** Solid color value. \*/
color: ThreeDColorValue
}

/** ExtendScript File object describing the swatch file. \*/
declare interface \_Swatch {
/** ASE major version number. \*/
majorVersion: number

/\*_ ASE minor version number. _/
minorVersion: number

/\*_ Array containing SwatchValue entries. _/
values: \_SwatchValue[]
}

/** ExtendScript File object entry describing one swatch value. \*/
declare interface \_SwatchValue {
/** Color model tag: "RGB", "CMYK", "LAB", or "Gray" \*/
type: "RGB" | "CMYK" | "LAB" | "Gray"

/\*_ For type = "RGB", values use [0.0..1.0]; 0, 0, 0 maps to Black. _/
r: number
g: number
b: number

/\*_ For type = "CMYK", values use [0.0..1.0]; 0, 0, 0, 0 maps to White. _/
c: number
m: number
y: number
k: number

/\*_ For type = "LAB", L uses [0.0..1.0]; a and b use [-128.0..+128.0]; 0, 0, 0 maps to Black. _/
L: number
a: number
// b: number;

/\*_ For type = "Gray", the range is [0.0..1.0]; 0.0 maps to Black. _/
gray: number
value: number
}

/** System exposes user-system attributes such as user name, OS name, and OS version through the system global. \*/
declare class System {
/** Current user's name. \*/
readonly userName: string

/\*_ Host computer name. _/
readonly machineName: string

/\*_ Operating system name. _/
readonly osName: string

/\*_ Operating system version. _/
readonly osVersion: string

/\*_ Runs a command on the system command line. _/
callSystem(cmdLineToExecute: string): string
}

/\*_ TextDocument stores the value used by a TextLayer's Source Text property. Create it with the constructor by passing the string to encapsulate. _/
declare class TextDocument {
constructor(docText: string)

/\*_ True when the text layer uses point, or unbounded, text. _/
readonly pointText: boolean

/\*_ True when the text layer uses paragraph, or bounded, text. _/
readonly boxText: boolean

/\*_ Line count for a text layer _/
readonly composedLineCount: number

/\*_ Returns paragraph count for a text layer _/
readonly paragraphCount: number

/\*_ True when the text layer's box overflows. _/
readonly boxOverflow: boolean

/\*_ Font-file path on disk; not returned for every font type and may be an empty string for some fonts _/
readonly fontLocation: string

/\*_ Style metadata, such as "bold" or "italic" _/
readonly fontStyle: string

/\*_ Font family name _/
readonly fontFamily: string

/\*_ True when faux bold is enabled on a text layer _/
readonly fauxBold: boolean

/\*_ True when faux italic is enabled on a text layer _/
readonly fauxItalic: boolean

/\*_ True when allcaps is enabled on a text layer _/
readonly allCaps: boolean

/\*_ True when smallcaps is enabled on a text layer _/
readonly smallCaps: boolean

/\*_ True when superscript is enabled on a text layer _/
readonly superscript: boolean

/\*_ True when subscript is enabled on a text layer _/
readonly subscript: boolean

/\*_ Vertical scale for this text layer, in pixels. _/
readonly verticalScale: number

/\*_ Horizontal scale for this text layer, in pixels. _/
readonly horizontalScale: number

/\*_ Baseline shift for this text layer, in pixels. _/
readonly baselineShift: number

/\*_ Tsume value for this text layer. _/
readonly tsume: number

/\*_ Layer coordinates from a paragraph (box) text layer anchor point, as a [width, height] pixel-dimension array. _/
readonly boxTextPos: [number, number]

/\*_ Baseline (x,y) locations in a text layer. _/
readonly baselineLocs: number[]

/\*_ Source Text value for the text layer. _/
text: string

/\*_ True when the text layer renders fill. _/
applyFill: boolean

/\*_ True when the text layer renders stroke. _/
applyStroke: boolean

/\*_ True when the text box inserts hyphens automatically. _/
autoHyphenate: boolean

/\*_ True when the text layer computes leading automatically. _/
autoLeading: boolean

/\*_ Text layer kern type _/
autoKernType: AutoKernType

/\*_ Text layer baseline direction _/
baselineDirection: BaselineDirection

/\*_ Box fit policy for the text layer. _/
boxAutoFitPolicy: BoxAutoFitPolicy

/\*_ First-baseline alignment for the text layer box. _/
boxFirstBaselineAlignment: BoxFirstBaselineAlignment

/\*_ Minimum first-baseline alignment for the text layer box. _/
boxFirstBaselineAlignmentMinimum: number

/\*_ Box padding for the text layer. _/
boxInsetSpacing: number

/\*_ Box horizontal alignment for the text layer. _/
boxVerticalAlignment: BoxVerticalAlignment

/\*_ Composer engine for the text layer. _/
composerEngine: ComposerEngine

/\*_ Digit set for the text layer. _/
digitSet: DigitSet

/\*_ Paragraph direction for the text layer. _/
direction: ParagraphDirection

/\*_ End indent amount for the text layer. _/
endIndent: number

/\*_ True selects every line composer; false selects single line composer. _/
everyLineComposer: boolean

/\*_ Fill color for the text layer. _/
fillColor: ThreeDColorValue

/\*_ First-line indent amount for the text layer. _/
firstLineIndent: number

/\*_ PostScript-name font used by the text layer. _/
font: string

/\*_ Font baseline option for the text layer. _/
fontBaselineOption: FontBaselineOption

/\*_ Font caps option for the text layer. _/
fontCapsOption: FontCapsOption

/\*_ Provides information about the font _/
fontObject: FontObject

/\*_ Font size for the text layer, in pixels. _/
fontSize: number

/\*_ True when the text box uses hanging roman punctuation _/
hangingRoman: boolean

/\*_ Paragraph justification for the text layer. _/
justification: ParagraphJustification

/\*_ Kerning amount for the text layer. _/
kerning: number

/\*_ Distance between lines in the text layer. _/
leading: number

/\*_ Leading type for the text layer. _/
leadingType: LeadingType

/\*_ True when the text layer uses font ligatures _/
ligatures: boolean

/\*_ Line join type for the text layer. _/
lineJoinType: LineJoinType

/\*_ Line orientation for the text layer. _/
lineOrientation: LineOrientation

/\*_ True when no break is enabled for text boxes _/
noBreak: boolean

/\*_ Paragraph spacing after a line in the text layer. _/
spaceAfter: number | undefined

/\*_ Paragraph spacing before a line in the text layer. _/
spaceBefore: number | undefined

/\*_ Start indent amount for the text layer. _/
startIndent: number

/\*_ Stroke color for the text layer. _/
strokeColor: ThreeDColorValue

/\*_ Describes whether fill or stroke renders first for a text layer. _/
strokeOverFill: boolean

/\*_ Stroke thickness for the text layer. _/
strokeWidth: number

/\*_ Character spacing for the text layer. _/
tracking: number

/\*_ Pixel dimensions of the bounds for box text. _/
boxTextSize: [number, number]

/\*_ Text Document Object view limited to a character range. _/
characterRange(characterStart: number, characterEnd: number): TextDocument & CharacterRange

/\*_ Text Document Object view limited to a line range. _/
composedLineCharacterIndexesAt(characterIndex: number): TextDocument & ComposedLineRange

/\*_ Text Document Object view limited to a line range. _/
composedLineRange(lineStart: number, lineEnd: number): TextDocument & ComposedLineRange

/\*_ Finds start/end character indexes for the paragraph at characterIndex. _/
paragraphCharacterIndexesAt(characterIndex: number): { start: number; end: number }

paragraphRange(
paragraphIndexStart: number,
paragraphIndexEnd?: number,
): TextDocument & ParagraphRange

/\*_ Resets Character panel settings to their defaults. _/
resetCharStyle(): void

/\*_ Resets Paragraph panel settings to their defaults. _/
resetParagraphStyle(): void
}

/\*_ TextLayer represents a composition text layer; create it with LayerCollection.addText. _/
declare class TextLayer extends AVLayer {
readonly source: null

readonly text: \_TextProperties
readonly sourceText: TextDocumentProperty
}

declare class ThreeDModelLayer extends AVLayer {}

declare class View {
readonly active: boolean
readonly options: ViewOptions

setActive(): void
}

/** Viewer represents a Composition, Layer, or Footage panel. \*/
declare class Viewer {
/** Viewer content type. \*/
readonly type: ViewerType

/\*_ True when the viewer has focus. _/
readonly active: boolean

readonly views: View[]

activeViewIndex: number

/\*_ True when the viewer is maximized. _/
maximized: boolean

/\*_ Brings the viewer forward and focuses it. _/
setActive(): boolean
}

declare class ViewOptions {
/\*_ Channels menu state _/
channels: ChannelType

/\*_ True when checkerboards are enabled _/
checkerboards: boolean

/\*_ Current exposure value _/
exposure: number

/\*_ Fast Previews menu state _/
fastPreview: FastPreviewType

/\*_ True when viewer guides are locked. _/
guidesLocked: boolean

/\*_ True when dragged layers snap to guides in the viewer. _/
guidesSnap: boolean

/\*_ True when guides are visible in the viewer. _/
guidesVisibility: boolean

/\*_ True when rulers appear in the viewer. _/
rulers: boolean

/\*_ Viewer Zoom value _/
zoom: number
}

/\*\*

- Shortcut property groups
  \*/
  declare interface \_TransformGroup extends PropertyGroup {
  readonly anchorPoint: TwoDOrThreeDProperty
  readonly position: TwoDOrThreeDProperty
  readonly xPosition: OneDProperty
  readonly yPosition: OneDProperty
  readonly zPosition: OneDProperty
  readonly scale: TwoDOrThreeDProperty
  readonly orientation: ThreeDProperty
  readonly rotation: OneDProperty
  readonly xRotation: OneDProperty
  readonly yRotation: OneDProperty
  readonly zRotation: OneDProperty
  readonly opacity: OneDProperty
  readonly pointOfInterest: ThreeDProperty
  }

declare interface \_LightOptionsGroup extends PropertyGroup {
readonly intensity: OneDProperty
readonly color: ColorProperty
readonly coneAngle: OneDProperty
readonly coneFeather: OneDProperty
readonly falloff: OneDProperty
readonly radius: OneDProperty
readonly falloffDistance: OneDProperty
readonly castsShadows: OneDProperty
readonly shadowDarkness: OneDProperty
readonly shadowDiffusion: OneDProperty
}

declare interface \_CameraOptionsGroup extends PropertyGroup {
readonly zoom: OneDProperty
readonly depthOfField: OneDProperty
readonly focusDistance: OneDProperty
readonly aperture: OneDProperty
readonly blurLevel: OneDProperty
readonly irisShape: OneDProperty
readonly irisRotation: OneDProperty
readonly irisRoundness: OneDProperty
readonly irisAspectRatio: OneDProperty
readonly irisDiffractionFringe: OneDProperty
readonly highlightGain: OneDProperty
readonly highlightThreshold: OneDProperty
readonly highlightSaturation: OneDProperty
}

declare interface \_LayerStyles extends PropertyGroup {
readonly blendingOption: \_BlendOptionsGroup
readonly dropShadow: \_DropShadow
readonly innerShadow: \_InnerShadow
readonly outerGlow: \_OuterGlow
readonly innerGlow: \_InnerGlow
readonly bevelAndEmboss: \_BevelAndEmboss
readonly satin: \_Satin
readonly colorOverlay: \_ColorOverlay
readonly gradientOverlay: \_GradientOverlay
readonly stroke: \_Stroke
}

declare interface \_BlendOptionsGroup extends PropertyGroup {
readonly globalLightAngle: OneDProperty
readonly globalLightAltitude: OneDProperty
readonly advancedBlending: \_AdvBlendGroup
}

declare interface \_AdvBlendGroup extends PropertyGroup {
readonly fillOpacity: OneDProperty
readonly red: OneDProperty
readonly green: OneDProperty
readonly blue: OneDProperty
readonly blendInteriorStylesAsGroup: OneDProperty
readonly useBlendRangesFromSource: OneDProperty
}
