# Aftereffects (part 2)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*_ True when the local After Effects instance is acting as a render engine. _/
readonly isRenderEngine: boolean

/\*_ Language currently used by After Effects. _/
readonly language: Language

/\*_ Script-adjustable application settings. _/
readonly settings: Settings

/\*_ Runtime locale for the application, including language and region. _/
readonly isoLanguage: string

/\*_ Amount of memory this application is using. _/
readonly memoryInUse: number

/\*_ Preference access object. _/
readonly preferences: Preferences

/\*_ Viewer panel with focus now, or the one focused most recently. _/
readonly activeViewer: Viewer | null

/\*_ Application effect entries. _/
readonly effects: { displayName: string; matchName: string; version: string; category: string }[]

/\*_ Viewer object tied to the viewer panel that is focused now or most recently. _/
availableGPUAccelTypes: GpuAccelType

/\*_ True disables rendering, matching the effect of Caps Lock being enabled. _/
disableRendering: boolean

/\*_ Callback function name or string invoked after an application error. _/
onError: string | null

/\*\* Status number returned for externally run scripts,

- such as launches from a command line or AppleScript.
- 0 means no error was raised; positive values report
- an error during script execution.
  \*/
  exitCode: number

/\*_ On Windows command-line script runs, true keeps the application open afterward. _/
exitAfterLaunchAndEval: boolean

/\*_ True saves the project if an unexpected application shutdown occurs. _/
saveProjectOnCrash: boolean

/\*_ Builds a fresh project in After Effects. _/
newProject(): Project | null

/\*_ Opens either a project file or the Open Project dialog box. _/
open(file?: File): Project | null

/\*_ Closes the application. _/
quit(): void

/\*_ Enters Watch Folder mode and returns only after that mode is turned off. _/
watchFolder(folder_object_to_watch: Folder): void

/\*_ Temporarily stops a watch-folder process already running. _/
pauseWatchFolder(pause: boolean): void

/\*_ Stops the active watch-folder process. _/
endWatchFolder(): void

/\*_ Clears the requested cached-information category, matching Purge choices in the Edit menu. _/
purge(target: PurgeTarget): void

/\*_ Combines subsequent operations into one undoable action. _/
beginUndoGroup(undoString: string): void

/\*_ Closes an undo group; required only when a script includes multiple groups. _/
endUndoGroup(): void

/\*_ Starts hiding dialogs from the user interface. _/
beginSuppressDialogs(): void

/\*_ Stops hiding dialogs from the user interface. _/
endSuppressDialogs(alert: boolean): void

/\*_ Applies memory limits like those in the Memory & Cache preferences area. _/
setMemoryUsageLimits(imageCachePercentage: number, maximumMemoryPercentage: number): void

/\*\*

- Configures Multi-Frame Rendering for the next render.
-
- @param use_mfr Pass `true` to turn on Multi-Frame Rendering.
- @param max_cpu_perc CPU ceiling for Multi-Frame Rendering, from 1-100 percent. When `mfr_on` is `false`, use 100.
  \*/
  setMultiFrameRenderingConfig(use_mfr: boolean, max_cpu_percent: number): void

/\*_ Controls whether preferences are written when the application quits. _/
setSavePreferencesOnQuit(doSave: boolean): void

/\*_ Brings the After Effects main window forward on screen. _/
activate(): void

/\*_ Queues a JavaScript script to run after a delay. _/
scheduleTask(stringToExecute: string, delay: number, repeat: boolean): number

/\*_ Stops a task that was scheduled earlier. _/
cancelTask(taskID: number): void

/\*_ Parses an Adobe Swatch Exchange (ASE) file into a color swatch. _/
parseSwatchFile(file: File): \_Swatch

findMenuCommandId(str: string): number

executeCommand(id: number): void

/\*_ CC2015- _/
getenv(name: string): string
setTimeout(func: () => void, delay?: number): number
cancelTimeout(id: number): void
}

declare class ParagraphRange extends Range {
characterRange(): CharacterRange
}

declare class Preferences {
deletePref(section: string, key: string, type?: PREFType): void
getPrefAsBool(section: string, key: string, type?: PREFType): boolean
getPrefAsFloat(section: string, key: string, type?: PREFType): number
getPrefAsLong(section: string, key: string, type?: PREFType): number
getPrefAsString(section: string, key: string, type?: PREFType): string
havePref(section: string, key: string, type?: PREFType): boolean
reload(): void
savePrefAsBool(section: string, key: string, value: boolean, type?: PREFType): void
savePrefAsFloat(section: string, key: string, value: number, type?: PREFType): void
savePrefAsLong(section: string, key: string, value: number, type?: PREFType): void
savePrefAsString(section: string, key: string, value: string, type?: PREFType): void
saveToDisk(): void
}

/** AVItem exposes attributes and methods for audio/visual assets imported into After Effects. \*/
declare class AVItem extends Item {
/** FootageSource used as this item's proxy. \*/
readonly proxySource: FootageSource

/\*_ CompItem objects that reference this item. _/
readonly usedIn: CompItem[]

/\*_ True when this item includes video. _/
readonly hasVideo: boolean

/\*_ True when this item includes audio. _/
readonly hasAudio: boolean

/\*_ True when this item is missing or only a placeholder. _/
readonly footageMissing: boolean

/\*_ Indicates whether AVItem is valid as an alternate source for Property.setAlternateSource. _/
readonly isMediaReplacementCompatible: boolean

/\*_ Item width. _/
width: number

/\*_ Item height. _/
height: number

/\*_ Item pixel aspect ratio. _/
pixelAspect: number

/\*_ Item frame rate. _/
frameRate: number

/\*_ Per-frame duration for this item. _/
frameDuration: number

/\*_ Complete duration for this item. _/
duration: number

/\*_ True when this item is using a proxy source. _/
useProxy: boolean

/\*_ Item current time. _/
time: number

/\*_ Assigns a proxy file to this item. _/
setProxy(file: File): void

/\*_ Uses a sequence as this item's proxy. _/
setProxyWithSequence(file: File, forceAlphabetical: boolean): void

/\*_ Uses a solid as this item's proxy. _/
setProxyWithSolid(
color: ThreeDColorValue,
name: string,
width: number,
height: number,
pixelAspect: number,
): void

/\*_ Uses a placeholder as this item's proxy. _/
setProxyWithPlaceholder(
name: string,
width: number,
height: number,
frameRate: number,
duration: number,
): void

/\*_ Clears this item's proxy. _/
setProxyToNone(): void
}

/** AVLayer is the interface for layers backed by AVItem objects, including composition, footage, solid, text, and sound layers. \*/
declare class AVLayer extends Layer {
/** Source item assigned to this layer. \*/
readonly source: any

/\*_ True when the layer name comes from its named source rather than an explicit name. _/
readonly isNameFromSource: boolean

/\*_ Layer height. _/
readonly height: number

/\*_ Layer width. _/
readonly width: number

/\*_ True when collapseTransformation may be changed. _/
readonly canSetCollapseTransformation: boolean

/\*_ True when frame blending is turned on. _/
readonly frameBlending: boolean

/\*_ True when timeRemapEnabled may be changed. _/
readonly canSetTimeRemapEnabled: boolean

/\*_ True when this layer includes audio. _/
readonly hasAudio: boolean

/\*_ True when audio for this layer is active now. _/
readonly audioActive: boolean

/\*_ True when this layer acts as the track matte for the layer beneath it. _/
readonly isTrackMatte: boolean

/\*_ True when the layer above acts as this layer's track matte. _/
readonly hasTrackMatte: boolean

/\*_ Track matte layer for this layer, or null when no track matte exists. _/
readonly trackMatteLayer: AVLayer | null

/\*_ True when the layer's audio is turned on. _/
audioEnabled: boolean

/\*_ True when motion blur is turned on for this layer. _/
motionBlur: boolean

/\*_ True when effects on this layer are active. _/
effectsActive: boolean

/\*_ True when this layer is an adjustment layer. _/
adjustmentLayer: boolean

/\*_ True when this layer is an environment layer. _/
environmentLayer: boolean

/\*_ True when this layer is a guide layer. _/
guideLayer: boolean

/\*_ True when this layer uses 3D. _/
threeDLayer: boolean

/\*_ True when 3D is enabled per character in this text layer. _/
threeDPerChar: boolean

/\*_ True when collapse transformation is enabled. _/
collapseTransformation: boolean

/\*_ Frame-blending type applied to this layer. _/
frameBlendingType: FrameBlendingType

/\*_ True when time remapping is turned on for this layer. _/
timeRemapEnabled: boolean

/\*_ Blending mode assigned to this layer. _/
blendingMode: BlendingMode

/\*_ True when preserve transparency is turned on. _/
preserveTransparency: boolean

/\*_ Sampling-quality setting for this layer. _/
samplingQuality: LayerSamplingQuality

/\*\*

- For layers with a track matte, this value controls how that matte is applied.
-
- Legacy API; prefer `AVLayer.setTrackMatte()` and `AVLayer.removeTrackMatte()`.
-
- @deprecated since version 23.0.
  \*/
  trackMatteType: TrackMatteType

/\*_ Quality setting for this layer. _/
quality: LayerQuality

/\*_ Reports audio activity for this layer at a supplied time. _/
audioActiveAtTime(time: number): boolean

/\*_ Computes a transform using the supplied layer points. _/
calculateTransformFromPoints(
pointTopLeft: [number, number, number],
pointTopRight: typeof pointTopLeft,
pointBottomRight: typeof pointTopLeft,
): object

/\*_ Maps composition coordinates, such as sourcePointToComp output, into layer coordinates. _/
sourcePointToComp(point: [number, number]): [number, number]

/\*_ Maps composition coordinates, such as sourcePointToComp output, into layer coordinates. _/
compPointToSource(point: [number, number]): [number, number]

/\*_ Shows this layer in a Layer panel. _/
openInViewer(): Viewer | null

/\*_ Replaces this layer's source item. _/
replaceSource(newSource: AVItem, fixExpressions: boolean): void

/\*_ Gets a layer's source rectangle. _/
sourceRectAtTime(
timeT: number,
extents: boolean,
): { top: number; left: number; width: number; height: number }

/\*_ Inserts this layer into the Essential Graphics Panel for the requested composition. _/
addToMotionGraphicsTemplate(comp: CompItem): boolean

/\*_ Inserts this layer into the Essential Graphics Panel for the requested composition. _/
addToMotionGraphicsTemplateAs(comp: CompItem, name: string): boolean

/\*_ True when this layer is eligible for the specified composition's EGP. _/
canAddToMotionGraphicsTemplate(comp: CompItem): boolean

/\*_ Clears this layer's track matte while keeping the TrackMatteType value; setTrackMatteType() can also remove a matte. _/
removeTrackMatte(): void

/\*_ Assigns this layer's track matte layer and TrackMatteType. Passing null for trackMatteLayer clears the matte; removeTrackMatte() is another removal path. _/
setTrackMatte(trackMatteLayer: AVLayer | null, trackMatteType: TrackMatteType): void

/\*_ Convenience property aliases _/
readonly timeRemap: OneDProperty
readonly mask: MaskPropertyGroup
readonly effect: PropertyGroup
readonly layerStyle: \_LayerStyles
readonly geometryOption: \_GeometryOptionsGroup
readonly materialOption: \_MaterialOptionsGroup
readonly audio: \_AudioGroup
}

/** CameraLayer models a composition camera layer; create it through the LayerCollection addCamera method. \*/
declare class CameraLayer extends Layer {
/** Convenience property aliases \*/
readonly cameraOption: \_CameraOptionsGroup
}

declare class Range {
readonly characterEnd: number
readonly characterStart: number
readonly isRangeValid: boolean

toString(): string
}

declare class CharacterRange extends Range {
fillColor: [number, number, number]
kerning: AutoKernType
strokeColor: [number, number, number]
strokeOverFill: boolean
text: string

pasteFrom(characterRange: CharacterRange): void
}

declare class ComposedLineRange extends CharacterRange {}

/** Collection groups objects or values with array-like index access. Most collection objects are read-only, and their contents refresh automatically as objects are created or removed rather than being assigned directly. \*/
declare class Collection {
/** Count of objects in the collection. \*/
readonly length: number
}

/** CompItem models a composition and exposes operations plus composition information. In a project's item collection, access CompItem instances by their position index number. \*/
declare class CompItem extends AVItem {
/** Count of layers in the composition. \*/
readonly numLayers: number

/\*_ Camera layer active at the moment. _/
readonly activeCamera: CameraLayer | null

/\*_ Layer collection for the composition. _/
readonly layers: LayerCollection

/\*_ Composition marker property. _/
readonly markerProperty: MarkerValueProperty

/\*_ Layers currently selected in the composition. _/
readonly selectedLayers: Layer[]

/\*_ Properties currently selected in the composition. _/
readonly selectedProperties: \_PropertyClasses[]

/\*_ Rendering plug-in modules available for use. _/
readonly renderers: string[]

/\*_ Count of Essential Graphics panel properties for this composition. _/
readonly motionGraphicsTemplateControllerCount: number

/\*_ Duration represented by one frame. _/
frameDuration: number

/\*_ Start time of the work area. _/
workAreaStart: number

/\*_ Work area length. _/
workAreaDuration: number

/\*_ True when shy layers are shown in the Timeline panel. _/
hideShyLayers: boolean

/\*_ True when this composition uses motion blur. _/
motionBlur: boolean

/\*_ True when Draft 3D mode is active in the Composition panel. _/
draft3d: boolean

/\*_ True when this composition uses time filtering. _/
frameBlending: boolean

/\*_ True when nested composition frame rates are kept. _/
preserveNestedFrameRate: boolean

/\*_ True when nested composition resolutions are kept. _/
preserveNestedResolution: boolean

/\*_ Composition background color. _/
bgColor: ThreeDColorValue

/\*_ Changes how start time appears in the Timeline panel. _/
displayStartTime: number

/\*_ Downsampling factor for x and y resolution in the Composition panel. _/
resolutionFactor: [number, number]

/\*_ Camera shutter angle value. _/
shutterAngle: number

/\*_ Camera shutter phase value. _/
shutterPhase: number

/\*_ Minimum motion blur samples per frame for Classic 3D layers, shape layers, and selected effects. _/
motionBlurSamplesPerFrame: number

/\*_ Maximum samples used for 2D layer motion blur. _/
motionBlurAdaptiveSampleLimit: number

/\*_ Reads or writes the composition's Essential Graphics panel name property. _/
motionGraphicsTemplateName: string

/\*_ Rendering plug-in module used for this composition. _/
renderer: string

/\*_ True when this composition uses drop-frame timecode. _/
dropFrame: boolean

/\*_ Frame value at the composition beginning. _/
displayStartFrame: number

/\*_ Makes and returns a copy of this composition. _/
duplicate(): CompItem

/\*_ Returns a composition layer. _/
layer(index: number): Layer
layer(otherLayer: Layer, relIndex: number): Layer
layer(name: string): Layer

/\*_ Shows this composition in a Composition panel. _/
openInViewer(): Viewer | null

/\*_ Saves the specified frame as a png file. _/
saveFrameToPng(time: number, file: File): void

/\*_ Opens this Composition in the Preview panel, then adjusts preview zoom and exposure. _/
ramPreviewTest(unknown: any, zoom: number, exposure: number): void

/\*_ Exports this composition as a Motion Graphics template. _/
exportAsMotionGraphicsTemplate(doOverWriteFileIfExisting: boolean, file_path?: string): boolean

/\*_ Displays the composition inside the Essential Graphics panel. _/
openInEssentialGraphics(): void

/\*_ Returns one Essential Graphics panel property name. _/
getMotionGraphicsTemplateControllerName(index: number): string

/\*_ Assigns a name to one Essential Graphics panel property. _/
setMotionGraphicsControllerName(index: number, newName: string): string
}

/** FileSource describes footage loaded from a file. \*/
declare class FileSource extends FootageSource {
/** File defining this asset. \*/
readonly file: File

/\*_ Path to this asset's missing footage file. _/
readonly missingFootagePath: string

/\*_ Refreshes the asset from disk when used as a FootageItem mainSource. _/
reload(): void
}

/** FolderItem maps to a Project panel folder. It can hold items such as footage, compositions, and solids, plus nested folders. \*/
declare class FolderItem extends Item {
/** Items held by this folder. \*/
readonly items: ItemCollection

/\*_ Count of items inside the folder. _/
readonly numItems: number

/** Gets one item from the folder. \*/
item(index: number): \_ItemClasses
}
declare class FontObject {
/** Variable-font design axis data. \*/
readonly designAxesData: { name: string; tag: string; min: number; max: number }[] | undefined

/\*_ Design vector for variable fonts. _/
readonly designVector: number[] | undefined

/\*_ Font family name. _/
readonly familyName: string

/\*_ Font family prefix. _/
readonly familyPrefix: string

/\*_ Unique font identifier. _/
readonly fontID: number

/\*_ Complete font name. _/
readonly fullName: string

/\*_ True when this font exposes design axes. _/
readonly hasDesignAxes: boolean

/\*_ True when this font comes from Adobe Fonts. _/
readonly isFromAdobeFonts: boolean

/\*_ True when this font is a substitute. _/
readonly isSubstitute: boolean

/\*_ File-system location for the font. _/
readonly location: string

/\*_ Native family name for the font. _/
readonly nativeFamilyName: string

/\*_ Native full name for the font. _/
readonly nativeFullName: string

/\*_ Native style name for the font. _/
readonly nativeStyleName: string

/\*_ FontObject entries sharing this font's dictionary. _/
readonly otherFontsWithSameDict: FontObject[]

/\*_ Font PostScript name. _/
readonly postScriptName: string

/\*_ Font style name. _/
readonly styleName: string

/\*_ Technology used by this font. _/
readonly technology: CTFontTechnology

/\*_ Font type. _/
readonly type: CTFontType

/\*_ Font version string. _/
readonly version: string

/\*_ Script types supported by this font. _/
readonly writingScripts: CTScript[]

/\*_ Checks whether charString is available in the current font. _/
hasGlyphsFor(charString: string): boolean

/\*_ True when this Font Object shares the variable font used by the Font object receiving the call. _/
hasSameDict(fontObject: FontObject): boolean

//\*_ Returns the font weight name associated with its vector _/
postScriptNameForDesignVector(vectorValues?: number[]): string | null
}

declare class FontsObject {
readonly allFonts: FontObject[][]
readonly fontsDuplicateByPostScriptName: FontObject[]
readonly fontServerRevision: number
readonly fontsWithDefaultDesignAxes: FontObject[]
readonly missingOrSubstitutedFonts: FontObject[]

favoriteFontFamilyList: string[] | undefined
freezeSyncSubstitutedFonts: boolean
mruFontFamilyList: string
substitutedFontReplacementMatchPolicy: SubstitutedFontReplacementMatchPolicy

getCTScriptForString(charString: string, preferredCTScript: CTScript): { chars: number; ctScript: CTScript }[]
getDefaultFontForCTScript(ctScript: CTScript): FontObject
getFontByID(id: string): FontObject | undefined
getFontsByFamilyNameAndStyleName(familyName: string, styleName: string): FontObject[] | undefined
getFontsByPostScriptName(postscriptName: string): FontObject[] | undefined
pollForAndPushNonSystemFontFoldersChanges(): boolean
setDefaultFontForCTScript(ctScript: CTScript, font: FontObject | null): boolean
}

/** FootageItem represents imported project footage as shown in the Project panel. In a project's item collection, access these items by position index number. \*/
declare class FootageItem extends AVItem {
/** Footage source file. \*/
readonly file: File | null

/\*_ Settings associated with this footage item. _/
readonly mainSource: FootageSource

/\*_ Shows the footage in a Footage panel. _/
openInViewer(): Viewer | null

/\*_ Replaces one footage file with another. _/
replace(file: File): void

/\*_ Uses a placeholder object as replacement footage. _/
replaceWithPlaceholder(
name: string,
width: number,
height: number,
frameRate: number,
duration: number,
): void

/\*_ Uses an image sequence as replacement footage. _/
replaceWithSequence(file: File, forceAlphabetical: boolean): void

/\*_ Uses a solid as replacement footage. _/
replaceWithSolid(
color: ThreeDColorValue,
name: string,
width: number,
height: number,
pixelAspect: number,
): void
}

declare class PlaceholderItem extends FootageItem {}

/** FootageSource stores source-footage details. It serves as the mainSource of a FootageItem, or as the proxySource of a CompItem or FootageItem. \*/
declare class FootageSource {
/** Footage source file. \*/
readonly file: File | null

/\*_ True when the footage is a still image. _/
readonly isStill: boolean

/\*_ Effective frame rate shown and rendered in After Effects compositions. _/
readonly displayFrameRate: number

/\*_ True when a footage clip or proxy has an alpha channel. _/
hasAlpha: boolean

/\*_ Alpha-channel mode. _/
alphaMode: AlphaMode

/\*_ Color value used for premultiplication. _/
premulColor: ThreeDColorValue

/\*_ True requests inversion of the alpha channel on the footage clip or proxy. _/
invertAlpha: boolean

/\*_ Field separation type. _/
fieldSeparationType: FieldSeparationType

/\*_ Field-separation quality behavior for non-still footage. _/
highQualityFieldSeparation: boolean

/\*_ Footage pulldown type. _/
removePulldown: PulldownPhase

/\*_ Number of loops for an image sequence. _/
loop: number

/\*_ Native frame rate for the footage. _/
nativeFrameRate: number

/\*_ Frame rate that footage should conform to. _/
conformFrameRate: number

/\*_ Guesses the alphaMode value. _/
guessAlphaMode(): void

/\*_ Guesses the pulldownType value. _/
guessPulldown(method: PulldownMethod): void
}

/\*_ ImportOptions wraps the options used when Project.importFile imports a file. _/
declare class ImportOptions {
constructor(file?: File)

/\*_ File type requested for import. _/
importAs: ImportAsType

/\*_ True imports a file sequence instead of one file. _/
sequence: boolean

/\*_ True when the "Force alphabetical order" option is enabled. _/
forceAlphabetical: boolean

/\*_ File to import, or the first file in the sequence. _/
file: File

/\*_ Limits input to a specified file type. _/
canImportAs(type: ImportAsType): boolean
}

/** Item represents an object that can appear in the Project panel. \*/
declare class Item {
/** Unique identifier for this item. \*/
readonly id: number

/\*_ Item type. _/
readonly typeName: string

/\*_ Object name as displayed in the Project panel. _/
name: string

/\*_ Descriptive text. _/
comment: string

/\*_ Folder that contains this item. _/
parentFolder: FolderItem

/\*_ True when this item is selected. _/
selected: boolean

/\*_ Item label color. _/
label: number

/\*_ Creates a guide and appends it to the Item guides object. _/
addGuide(orientationType: number, position: number): number

/\*_ Deletes an existing guide. _/
removeGuide(guideIndex: number): void

/\*_ Changes an existing guide's position. _/
setGuide(position: number, guideIndex: number): void

/\*_ Removes this item from the project. _/
remove(): void
}
