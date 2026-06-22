# Aftereffects (part 3)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/** ItemCollection represents item groups. A Project-owned ItemCollection includes every project Item, while a FolderItem-owned ItemCollection includes the Items inside that folder. \*/
declare class ItemCollection extends Collection {
/** Looks up an Item object by collection index; indexing starts at 1. \*/
readonly [index: number]: \_ItemClasses

/\*_ Adds a newly created CompItem object here. _/
addComp(
name: string,
width: number,
height: number,
pixelAspect: number,
duration: number,
frameRate: number,
): CompItem

/\*_ Creates a FolderItem object and inserts it in the collection. _/
addFolder(name: string): FolderItem
}

/\*_ KeyframeEase stores AE property keyframe-ease settings. Speed and influence values set through the property's setTemporalEaseAtKey method define the ease. _/
declare class KeyframeEase {
constructor(speed: number, influence: number)

/\*_ Speed value for a keyframe. _/
speed: number

/\*_ Influence value for a keyframe. _/
influence: number
}

declare class Layer extends PropertyGroup {
/\*_ Persistent unique identification number. _/
readonly id: number

/\*_ Layer index position. _/
readonly index: number

/\*_ Current layer time. _/
readonly time: number

/\*_ True when this layer includes video. _/
readonly hasVideo: boolean

/\*_ True when the layer is active at the current time. _/
readonly active: boolean

/\*_ True when this layer is a null layer. _/
readonly nullLayer: boolean

/\*_ Selected AE properties on this layer. _/
readonly selectedProperties: \_PropertyClasses[]

/\*_ Composition containing this layer. _/
readonly containingComp: CompItem

/\*_ True when this layer's name was set explicitly. _/
readonly isNameSet: boolean

/\*_ Layer name. _/
name: string

/\*_ Parent layer, if one is assigned. _/
parent: Layer | null

/\*_ Layer start time. _/
startTime: number

/\*_ Layer time-stretch percentage. _/
stretch: number

/\*_ Layer "in" point. _/
inPoint: number

/\*_ Layer "out" point. _/
outPoint: number

/\*_ True when the layer is enabled. _/
enabled: boolean

/\*_ True when the layer is soloed. _/
solo: boolean

/\*_ True when the layer is shy. _/
shy: boolean

/\*_ True when the layer is locked. _/
locked: boolean

/\*_ Descriptive layer comment. _/
comment: string

/\*_ Layer label color. _/
label: number

/\*_ Automatic-orientation type for this layer. _/
autoOrient: AutoOrientType

/\*_ Moves the layer to the composition top, making it the first layer. _/
moveToBeginning(): void

/\*_ Moves the layer to the composition bottom, making it the last layer. _/
moveToEnd(): void

/\*_ Places this layer below another layer. _/
moveAfter(layer: Layer): void

/\*_ Places this layer above another layer. _/
moveBefore(layer: Layer): void

/\*_ Creates a duplicate of this layer. _/
duplicate(): Layer

/\*_ Copies this layer into another composition at the top position. _/
copyToComp(intoComp: CompItem): void

/\*_ Runs Scene Edit Detection for this layer and returns detected scene times. _/
doSceneEditDetection(applyOptions: SceneEditDetectionMode): number[]

/\*_ Reports whether this layer is active at a specified time. _/
activeAtTime(time: number): boolean

/\*_ Assigns a new parent to this layer. _/
setParentWithJump(newParent?: Layer): void

/\*_ Applies a named animation-settings collection to the layer. _/
applyPreset(presetName: File): void

/\*_ Convenience property aliases _/
readonly marker: MarkerValueProperty
readonly transform: \_TransformGroup

/\*_ Transform convenience aliases _/
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

/** LayerCollection represents layer sets. The LayerCollection on a CompItem includes every layer object in that composition, and collection methods manage the layer list. \*/
declare class LayerCollection extends Collection {
/** Looks up a Layer object by collection index; indexing starts at 1. \*/
readonly [index: number]: Layer

/\*_ Creates an AVLayer and inserts it in this collection. _/
add(item: AVItem, duration?: number): AVLayer

/\*_ Creates a null layer and inserts it in this collection. _/
addNull(duration?: number): AVLayer

/\*_ Inserts a new AVLayer using a SolidSource-backed FootageItem. _/
addSolid(
color: ThreeDColorValue,
name: string,
width: number,
height: number,
pixelAspect: number,
duration?: number,
): AVLayer

/\*_ Creates a vertical text box. _/
addVerticalBoxText(width?: number, height?: number): TextLayer

/\*_ Creates a vertical text layer. _/
addVerticalText(sourceText?: string): TextLayer

/\*_ Creates a paragraph (box) text layer and inserts it in this collection. _/
addBoxText(size: [number, number], sourceText?: string | TextDocument): TextLayer

/\*_ Creates a point text layer and inserts it in this collection. _/
addText(sourceText?: string | TextDocument): TextLayer

/\*_ Creates a camera layer and inserts it in this collection. _/
addCamera(name: string, centerPoint: [number, number]): CameraLayer

/\*_ Creates a light layer and inserts it in this collection. _/
addLight(name: string, centerPoint: [number, number]): LightLayer

/\*_ Creates a shape layer and inserts it in this collection. _/
addShape(): ShapeLayer

/\*_ Gets the layer object with the requested name. _/
byName(name: string): Layer | null

/\*_ Builds a composition from the specified layer indices. _/
precompose(layerIndicies: number[], name: string, moveAllAttributes?: boolean): CompItem
}

/** LightLayer models a composition light layer; create it with the LayerCollection object's addLight method. \*/
declare class LightLayer extends Layer {
/** Convenience property aliases \*/
readonly lightOption: \_LightOptionsGroup

/\*_ For light layers, the layer used as a light source when lightType is LightType.ENVIRONMENT. _/
lightSource: AVLayer | null

/\*_ Light type for light layers. _/
lightType: LightType
}

/\*_ MarkerValue stores layer-marker data at a specific layer time. It can carry a comment plus optional chapter reference point, Web-page link, or Flash Video cue point metadata. _/
declare class MarkerValue {
constructor(
comment: string,
chapter?: string,
url?: string,
frameTarget?: string,
cuePointName?: string,
params?: string,
)

/\*_ Comment attached to the associated layer. _/
comment: string

/\*_ Chapter link reference point attached to the associated layer. _/
chapter: string

/\*_ Flash Video cue point name. _/
cuePointName: string

/\*_ Marker duration. _/
duration: number

/\*_ Flash Video cue point category: event or navigation. _/
eventCuePoint: boolean

/\*_ URL for a Web page associated with the layer. _/
url: string

/\*_ Frame target inside the Web page named by url. _/
frameTarget: string

/\*_ Label color for a composition marker or layer marker. _/
label: number

/\*_ Protected Region option state in the Composition Marker dialog box. _/
protectedRegion: boolean

/\*_ Gets key-value pairs attached to this marker value. _/
getParameters(): object

/\*_ Sets key-value pairs attached to this marker value. _/
setParameters(keyValuePairs: object): void
}

/** MaskPropertyGroup wraps mask attributes for a layer. \*/
declare class MaskPropertyGroup extends PropertyGroup {
/** Mask mode. \*/
maskMode: MaskMode

/\*_ True when this mask is inverted. _/
inverted: boolean

/\*_ True when this mask shape is RotoBezier. _/
rotoBezier: boolean

/\*_ Motion-blur behavior for this mask. _/
maskMotionBlur: MaskMotionBlur

/\*_ True when this mask is locked. _/
locked: boolean

/\*_ Color used for drawing the mask outline in the user interface. _/
color: ThreeDColorValue

/\*_ Mask shape. _/
maskShape: ShapeProperty

/\*_ Mask path. _/
maskPath: ShapeProperty

/\*_ Mask feather amount. _/
maskFeather: TwoDProperty

/\*_ Feather-falloff mode for this mask. _/
maskFeatherFalloff: MaskFeatherFalloff

/\*_ Mask opacity. _/
maskOpacity: OneDProperty

/\*_ Mask expansion amount. _/
maskExpansion: OneDProperty
}

/** OMCollection is the render queue's output-module collection. It exposes OutputModule objects, adds no extra operations, and uses index position 1 for the first OutputModule. \*/
declare class OMCollection extends Collection {
/** Looks up an OutputModule object by collection index; indexing starts at 1. \*/
readonly [index: number]: OutputModule
}

/** For a RenderQueueItem, OutputModule describes one rendered file or sequence and exposes file-output attributes and methods. \*/
declare class OutputModule {
/** User-interface name for this output module. \*/
readonly name: string

/\*_ Templates available for this output module. _/
readonly templates: string[]

/\*_ Path and name for the file to be rendered. _/
file: File

/\*_ Action performed after rendering. _/
postRenderAction: PostRenderAction

/\*_ True writes all source footage XMP metadata into the output file. _/
includeSourceXMP: boolean

/\*_ Drops the current OutputModule entry from its RenderQueueItem. _/
remove(): void

/\*_ Writes a template from the current OutputModule. _/
saveAsTemplate(name: string): void

/\*_ Applies the named template to this output module. _/
applyTemplate(templateName: string): void

getSetting(key: string): string | number

getSettings(format?: GetSettingsFormat): {
"Audio Bit Depth": string
"Audio Channels": string
"Audio Sample Rate": string
Channels: string
Color: string
Crop: string
"Crop Bottom": string
"Crop Left": string
"Crop Right": string
"Crop Top": string
Depth: string
Format: string
"Include Project Link": string
"Include Source XMP Metadata": string
"Lock Aspect Ratio": string
"Output Audio": string
"Output File Info": string
"Post-Render Action": string
Resize: string
"Resize Quality": string
"Resize to": object
"Starting #": string
"Use Comp Frame Number": string
"Use Region of Interest": string
"Video Output": string
}

setSetting(key: string, value: string | number): void

setSettings(settings: object): void
}

/\*_ PlaceholderSource describes the source footage for a placeholder. _/
declare class PlaceholderSource extends FootageSource {}

/** Project represents an After Effects project. Its attributes reach imported files, footage, compositions, and settings such as timecode base; its methods handle importing footage, creating solids, compositions, folders, and saving changes. \*/
declare class Project {
/** File for the project currently open. \*/
readonly file: File | null

/\*_ Folder containing all project contents; equivalent to the Project panel. _/
readonly rootFolder: FolderItem

/\*_ Every item in this project. _/
readonly items: ItemCollection

/\*_ Item currently active. _/
readonly activeItem: \_ItemClasses | null

/\*_ Total count of items in this project. _/
readonly numItems: number

/\*_ Items selected in the Project panel. _/
readonly selection: \_ItemClasses[]

/\*_ Render queue for this project. _/
readonly renderQueue: RenderQueue

/\*_ Fonts used in this project. _/
readonly usedFonts: { font: FontObject; usedAt: { layerID: number; layerTimeD: number }[] }[]

/\*_ True when the project has changes not yet saved. _/
readonly dirty: boolean

/\*_ Current project color depth. _/
bitsPerChannel: number

/\*_ True when thumbnail views use the transparency checkerboard pattern. _/
transparencyGridThumbnails: boolean

/\*_ Frame where numbering starts when the project is displayed. _/
displayStartFrame: number

/\*_ Gets or sets this project's GPU Acceleration option. _/
gpuAccelType: GpuAccelType

/\*_ True when the project uses linear blending. _/
linearBlending: boolean

/\*_ Project XMP metadata. _/
xmpPacket: string

/\*_ Frame Count menu setting from the Project Settings dialog box. _/
framesCountType: FramesCountType

/\*_ Use Feet + Frames menu setting from the Project Settings dialog box. _/
feetFramesFilmType: FeetFramesFilmType

/\*_ Use Feet + Frames setting from the Project Settings dialog box. _/
framesUseFeetFrames: boolean

/\*_ Footage Start Time setting in the Project Settings dialog box; used when Timecode is the selected time display style. _/
footageTimecodeDisplayStartType: FootageTimecodeDisplayStartType

/\*_ Time Display Style section value from the Project Settings dialog box. _/
timeDisplayType: TimeDisplayType

/\*_ Active tool in the Tools panel. _/
toolType: ToolType

/\*_ Current project gamma, limited to 2.2 or 2.4. _/
workingGamma: 2.2 | 2.4

/\*_ Project working-space color profile description as a string. _/
workingSpace: string

/\*_ Turns on Linearize Working Space for this project when true. _/
linearizeWorkingSpace: boolean

/\*_ Turns on Compensate for Scene-referred Profiles for this project when true. _/
compensateForSceneReferredProfiles: boolean

/\*_ Project Settings dialog value for Expressions Engine. _/
expressionEngine: "extendscript" | "javascript-1.0"

/\*_ Gets a project item. _/
item(index: number): \_ItemClasses

/\*_ Gets an item through its Item ID _/
itemByID(id: number): \_ItemClasses

/\*_ Merges duplicate footage references across the project. _/
consolidateFootage(): number

/\*_ Deletes footage that the project no longer uses. _/
removeUnusedFootage(): number

/\*_ Indicates true after a font substitution has occurred _/
replaceFont(fromFont: string, toFont: string, noFontLocking?: boolean): boolean

/\*_ Keeps only the supplied item set in the project. _/
reduceProject(array_of_items: \_ItemClasses[]): number

/\*_ Closes the project using standard save behavior. _/
close(closeOptions: CloseOptions): boolean

/\*_ Writes the project to storage. _/
save(file?: File): void

/\*_ Opens the Save dialog box. _/
saveWithDialog(): boolean

/\*_ Creates placeholder footage. _/
importPlaceholder(
name: string,
width: number,
height: number,
frameRate: number,
duration: number,
): PlaceholderItem

/\*_ Brings a file into the project. _/
importFile(importOptions: ImportOptions): \_ItemClasses

/\*_ Opens the Import File dialog box. _/
importFileWithDialog(): \_ItemClasses[] | null

/\*_ Toggles visibility for the Project panel. _/
showWindow(doShow: boolean): void

/\*_ Replaces matching text throughout expressions automatically. _/
autoFixExpressions(oldText: string, newText: string): void

/\*_ Starts a new team project. _/
newTeamProject(teamProjectName: string, description: string): boolean

/\*_ Loads a team project. _/
openTeamProject(teamProjectName: string): boolean

/\*_ Sends the active team project for sharing. _/
shareTeamProject(comment: string): boolean

/\*_ Synchronizes the active team project. _/
syncTeamProject(): boolean

/\*_ Closes the active team project. _/
closeTeamProject(): boolean

/\*_ Converts a team project into a local-disk After Effects project. _/
convertTeamProjectToProject(project_file: File): boolean

/\*_ Provides name strings for every team project visible to the current user; Archived Team Projects are excluded. _/
listTeamProjects(): string[]

/\*_ Gets a layer through its Layer ID _/
layerByID(id: number): Layer | null

/\*_ Reports whether the named team project is open. _/
isTeamProjectOpen(teamProjectName: string): boolean

/\*_ Reports whether a team project is open at all. _/
isAnyTeamProjectOpen(): boolean

/\*_ Reports whether After Effects has team projects enabled. This almost always returns true. _/
isTeamProjectEnabled(): boolean

/\*_ Reports whether the After Effects client is signed in to the team project server. _/
isLoggedInToTeamProject(): boolean

/\*_ Reports whether the Sync command is currently available. _/
isSyncCommandEnabled(): boolean

/\*_ Reports whether the Share command is currently available. _/
isShareCommandEnabled(): boolean

/\*_ Reports whether the Resolve command is currently available. _/
isResolveCommandEnabled(): boolean

/\*_ Uses the requested resolution method to resolve a conflict between the open team project and the server version. _/
resolveConflict(ResolveType: ResolveType): boolean

/\*_ Lists color profile descriptions that may be assigned as the project's color working space. _/
listColorProfiles(): string[]

/\*_ Chooses the initial folder for importing files. _/
setDefaultImportFolder(folder: Folder): boolean
}

type PropertyClassMembers = {
[P in keyof Property]: Property[P]
}
declare interface UnknownPropertyType extends PropertyClassMembers {
propertyValueType: PropertyValueType
value: any
}

declare interface NoValueType extends PropertyClassMembers {
propertyValueType: PropertyValueType.`NO_VALUE`
value: any
}

type ColorValue = [number, number, number, number]
type ThreeDColorValue = [number, number, number]

declare interface ColorType extends PropertyClassMembers {
propertyValueType: PropertyValueType.COLOR
value: ColorValue
}

declare interface BooleanType extends PropertyClassMembers {
propertyValueType: PropertyValueType.OneD
value: boolean
}
declare interface OneDType extends PropertyClassMembers {
propertyValueType: PropertyValueType.OneD
value: number
}

declare interface TwoDType extends PropertyClassMembers {
propertyValueType: PropertyValueType.TwoD
value: TwoDPoint
}

type TwoDPoint = [number, number]
declare interface TwoDSpatialType extends PropertyClassMembers {
propertyValueType: PropertyValueType.Two`D_SPATIAL`
value: TwoDPoint
}

type ThreeDPoint = [number, number, number]

declare interface ThreeDType extends PropertyClassMembers {
propertyValueType: PropertyValueType.ThreeD
value: ThreeDPoint
}

declare interface TextDocumentType extends PropertyClassMembers {
propertyValueType: PropertyValueType.`TEXT_DOCUMENT`
value: TextDocument
}

declare interface MarkerValueType extends PropertyClassMembers {
propertyValueType: PropertyValueType.MARKER
value: MarkerValue
}

declare interface ShapePropertyType extends PropertyClassMembers {
propertyValueType: PropertyValueType.SHAPE
value: Shape
}

type NoValueProperty = Property<NoValueType>
type ColorProperty = Property<ColorType>
type OneDProperty = Property<OneDType>
type TwoDProperty = Property<TwoDType>
type ThreeDProperty = Property<ThreeDType>
type TwoDOrThreeDProperty = Property<TwoDType | ThreeDType>
type ShapeProperty = Property<ShapePropertyType>
type MarkerValueProperty = Property<MarkerValueType>
type TextDocumentProperty = Property<TextDocumentType>

type AnyProperty =
| NoValueProperty
| ColorProperty
| OneDProperty
| TwoDProperty
| ThreeDProperty
| TwoDOrThreeDProperty
| ShapeProperty
| MarkerValueProperty
| TextDocumentProperty

/** Property stores value, keyframe, and expression details for one AE layer property. \*/
declare class Property<T extends UnknownPropertyType = UnknownPropertyType> extends PropertyBase {
/** Kind of value this property stores. \*/
readonly propertyValueType: T["propertyValueType"]

/\*_ Property value at the current state. _/
readonly value: T["value"]

/\*_ Selected dropdown-menu entry text for this property. _/
readonly valueText: string

/\*_ True when a lower allowed value exists. _/
readonly hasMin: boolean

/\*_ True when an upper allowed value exists. _/
readonly hasMax: boolean

/\*_ Lowest allowed value. _/
readonly minValue: number

/\*_ Highest allowed value. _/
readonly maxValue: number

/\*_ True when the value is spatial. _/
readonly isSpatial: boolean

/\*_ True when keyframes are supported by the property. _/
readonly canVaryOverTime: boolean

/\*_ True when scripts may assign the expression. _/
readonly canSetExpression: boolean

/\*_ True when keyframes or an enabled expression can vary this property's values. _/
readonly isTimeVarying: boolean

/\*_ Count of keyframes on this property. _/
readonly numKeys: number

/\*_ Human-readable units used for the value. _/
readonly unitsText: string

/\*_ Last expression-evaluation error message, when one exists. _/
readonly expressionError: string

/\*_ Selected keyframe indexes for this property. _/
readonly selectedKeys: number[]

/\*_ Position of this property among siblings. _/
readonly propertyIndex: number

/\*_ Dropdown menu item strings for the property. _/
readonly propertyParameters: string[]

/\*_ True when this property is a separated-dimension member of a multidimensional property. _/
readonly isSeparationFollower: boolean

/\*_ True when this multidimensional property can be split into separate dimensions. _/
readonly isSeparationLeader: boolean

/\*_ Dimension represented by a separated follower inside the multidimensional leader. _/
readonly separationDimension: number

/\*_ Multidimensional source property for this separated follower. _/
readonly separationLeader: TwoDOrThreeDProperty

/\*_ True when this is the Menu property on a Dropdown Menu Control effect. _/
readonly isDropdownEffect: boolean

/\*_ Media Replacement alternate render source _/
readonly alternateSource: AVItem

/\*_ True when Media Replacement can be assigned on the property _/
readonly canSetAlternateSource: boolean

/\*\*

- Essential Property instance member returning the original source Property used to make that Essential Property.
  \*/
  readonly essentialPropertySource: Property<T> | AVLayer | null

/\*_ Expression text assigned to this property. _/
expression: string

/\*_ True when the expression supplies generated property values. _/
expressionEnabled: boolean

/\*_ True when dimensions for the property are exposed as separate properties. _/
dimensionsSeparated: boolean

/\*_ Evaluates the property value at the supplied time. _/
valueAtTime(time: number, preExpression: boolean): T["value"]

/\*_ Assigns a non-animated property value. _/
setValue(newValue: T["value"]): void

/\*_ Adds a keyframe with a value at a specific time. _/
setValueAtTime(time: number, newValue: T["value"]): void

/\*_ Adds multiple keyframes with corresponding values. _/
setValuesAtTimes(times: number[], newValues: T["value"][]): void

/\*_ Locates a keyframe and changes this property's value there. _/
setValueAtKey(keyIndex: number, newValue: T["value"]): void

/\*_ Finds the keyframe closest to the supplied time. _/
nearestKeyIndex(time: number): number

/\*_ Returns the time for the requested key condition. _/
keyTime(keyIndex: number): number
keyTime(markerComment: string): number

/\*_ Returns the keyframe value at the time for the requested condition. _/
keyValue(keyIndex: number): T["value"]
keyValue(markerComment: string): MarkerValue

/\*_ Inserts a keyframe at the given time. _/
addKey(time: number): number

/\*_ Deletes a keyframe. _/
removeKey(keyIndex: number): void

/\*_ Gives the labelIndex for the keyframe: 0 for None, or 1 to 16 for preset colors in Labels preferences. _/
keyLabel(keyIndex: number): number
