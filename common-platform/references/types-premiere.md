# Premiere (part 1)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/// <reference path="../../shared/global.d.ts" />

/\*\*

- These TypeScript definitions for Premiere Pro's ExtendScript API depend on
- work by Eric Robinson and Pravdomil Toman. Usefulness traces to their efforts;
- any remaining defects are credited to this maintainer.
-
- -bbb
- 4/15/19
- \*/

/\*\*

- 0 maps to false,
- 1 maps to true
  \*/

type NumericalBool = 0 | 1
type MediaType = "Video" | "Audio" | "any"
type SampleRateOption = 48000 | 96000
type BitsPerSampleOption = 16 | 24
type SDKEventType = "warning" | "info" | "error"

declare enum WorkAreaType {
`ENCODE_ENTIRE` = 0,
`ENCODE_IN_TO_OUT` = 1,
`ENCODE_WORK_AREA` = 2,
}

declare enum `TIME_FORMAT` {
`TIMEDISPLAY_24T`imecode = 100,
`TIMEDISPLAY_25T`imecode = 101,
`TIMEDISPLAY_2997D`ropTimecode = 102,
`TIMEDISPLAY_2997N`onDropTimecode = 103,
`TIMEDISPLAY_30T`imecode = 104,
`TIMEDISPLAY_50T`imecode = 105,
`TIMEDISPLAY_5994D`ropTimecode = 106,
`TIMEDISPLAY_5994N`onDropTimecode = 107,
`TIMEDISPLAY_60T`imecode = 108,
`TIMEDISPLAY_F`rames = 109,
`TIMEDISPLAY_23976T`imecode = 110,
`TIMEDISPLAY_16`mmFeetFrames = 111,
`TIMEDISPLAY_35`mmFeetFrames = 112,
`TIMEDISPLAY_48T`imecode = 113,
`TIMEDISPLAY_A`udioSamplesTimecode = 200,
`TIMEDISPLAY_A`udioMsTimecode = 201,
}

interface $ {
_PPP_: any
}

/\*\*

- Settings data shape for a sequence.
  \*/
  declare class SequenceSettings {
  audioChannelCount: number
  audioChannelType: number
  audioDisplayFormat: number
  audioSampleRate: Time
  compositeLinearColor: boolean
  editingMode: String
  maximumBitDepth: boolean
  maximumRenderQuality: boolean
  previewCode: String
  previewFileFormat: String
  previewFrameHeight: number
  previewFrameWidth: number
  videoDisplayFormat: number
  videoFieldType: number
  videoFrameRate: Time
  videoFrameHeight: number
  videoFrameWidth: number
  videoPixelAspectRatio: string
  vrHorzCapturedView: number
  vrLayout: number
  vrProjection: number
  vrVertCapturedView: number
  workingColorSpaceList: Array<any>
  workingColorSpace: String
  }

/\*\*

- Sequence object.
  \*/
  declare class Sequence {
  /\*\*
  - Subtitle (Default)
    \*/
    static readonly `CAPTION_FORMAT_SUBTITLE`: number

/\*\*

- CEA-608
  \*/
  static readonly `CAPTION_FORMAT_608`: number

/\*\*

- CEA-708
  \*/
  static readonly `CAPTION_FORMAT_708`: number

/\*\*

- Teletext
  \*/
  static readonly `CAPTION_FORMAT_TELETEXT`: number

/\*\*

- EBU Subtitle
  \*/
  static readonly `CAPTION_FORMAT_OPEN_EBU`: number

/\*\*

- OP-42
  \*/
  static readonly `CAPTION_FORMAT_OP42`: number

/\*\*

- OP-47
  \*/
  static readonly `CAPTION_FORMAT_OP47`: number

/\*\*

- \*/
  sequenceSettings: SequenceSettings

/\*\*

- Audio tracks collection for the sequence.
  \*/
  readonly audioTracks: TrackCollection

/\*\*

- Sequence end timecode, returned as a string.
  \*/
  readonly end: string

/\*\*

- Width
  \*/
  readonly frameSizeHorizontal: number

/\*\*

- Height
  \*/
  readonly frameSizeVertical: number

/\*\*

- Sequence ID
  \*/
  readonly id: number

/\*\*

- Markers belonging to the sequence.
  \*/
  readonly markers: MarkerCollection

/\*\*

- Available colorspaces list.
  \*/
  readonly workingColorSpaceList: Array<any>

/\*\*

- Color space currently used by the sequence.
  \*/
  workingColorSpace: string

/\*\*

- Writable name.
  \*/
  name: string

/\*\*

- \*/
  videoDisplayFormat: number

/\*\*

- `projectItem` that corresponds to the sequence.
  \*/
  readonly projectItem: ProjectItem

/\*\*

- Permanent sequence ID inside its project.
  \*/
  readonly sequenceID: string

/\*\*

- \*/
  readonly timebase: string

/\*\*

- \*/
  readonly videoTracks: TrackCollection

/\*\*

- Starting timecode for the sequence's first frame, returned as a string.
  \*/
  readonly zeroPoint: string

/\*\*

- Adds a metadata key to the sequence and assigns its value.
- @param propertyID New property name.
- @param propertyValue New property value.
  \*/
  attachCustomProperty(propertyID: string, propertyValue: string): void

/\*\*

- \*/
  bind(eventName: string, function\_: any): void

/\*\*

- Duplicates a sequence.
- @returns duplicated Sequence.
  \*/
  clone(): Sequence

/\*\*

- Builds a caption track in the active sequence from caption data on a project item.
- @param projectItem Caption source clip, such as .srt.
- @param startAtTime Start offset in seconds from the sequence beginning.
- @param captionsFormat New-track caption format; optional and defaults to subtitle. Consult the caption-format table.
  \*/
  createCaptionTrack(projectItem: ProjectItem, startAtTime: number, captionFormat: number): Sequence

/\*\*

- Creates a new sequence from the source sequence's in and out points.
- @param ignoreMapping When True, the current selection controls which clips go into the new sequence instead of track targeting.
-
- With no selection present, track targeting decides which clips are added to the new sequence.
  \*/
  createSubsequence(ignoreMapping: Boolean): Sequence

/\*\*

- Exports this sequence as a new FCP XML file.
- @param exportPath Full destination file path, including file name.
- @param suppressUI Optional; suppresses warnings or errors encountered while exporting.
  \*/
  exportAsFinalCutProXML(exportPath: string, suppressUI?: number): boolean

/\*\*

- Premiere Pro immediately exports the sequence.
- @param outputFilePath Output file path, including name.
- @param presetPath .epr file used for the export.
- @param workAreaType Optional work-area selector.
  \*/
  exportAsMediaDirect(
  outputFilePath: string,
  presetPath: string,
  workAreaType?: WorkAreaType,
  ): string

/\*\*

- Exports the sequence, along with its constituent media, into a new PPro project.
- @param path Output path including the file name.
  \*/
  exportAsProject(exportPath: string): void

/\*\*

- Gets the file extension associated with a specified output preset, supplied as a .epr file.
- @param presetFilePath Full path to the .epr file.
  \*/
  getExportFileExtension(presetFilePath: string): string

/\*\*

- Gets the sequence in point as a timecode string.
  \*/
  getInPoint(): string

/\*\*

- Gets the sequence out point as a timecode string.
  \*/
  getOutPoint(): string

/\*\*

- Gets the sequence in point as a `Time` object.
  \*/
  getInPointAsTime(): Time

/\*\*

- Gets the sequence out point as a `Time` object.
  \*/
  getOutPointAsTime(): Time

/\*\*

- Gets the current player position as a `Time` object.
  \*/
  getPlayerPosition(): Time

/\*\*

- Assigns the sequence in point.
- @param seconds In-point time.
  \*/
  setInPoint(seconds: number): void

/\*\*

- Assigns the sequence out point.
- @param seconds Out-point time.
  \*/
  setOutPoint(seconds: number): void

/\*\*

- Moves the current player position.
- @param pos New player-position value in tick units.
  \*/
  setPlayerPosition(pos: string): void

/\*\*

- \*/
  setTimeout(eventName: string, function\_: any, milliseconds: number): void

/\*\*

- Sets the timecode for the sequence's first frame.
- @param newStartTime New start time expressed in `ticks`.
  \*/
  setZeroPoint(newStartTime: string): void

/\*\*

- Links the currently selected `trackItems` together when possible.
- @returns `True` on success.
  \*/
  linkSelection(): boolean

/\*\*

- Unlinks the currently selected `trackItems` when possible.
- @returns `True` on success.
  \*/
  unlinkSelection(): boolean

/\*\*

- Adds a .mogrt Motion Graphics Template asset to the sequence.
- @param pathToMOGRT Full .mogrt path.
- @param timeInTicks Tick-based insertion time.
- @param videoTrackOffset Video track offset from first track to target.
- @param audioTrackOffset Audio track offset from first track to target.
- @returns new `trackItem` for the inserted .mogrt.
  \*/
  importMGT(
  pathToMOGRT: String,
  timeInTicks: String,
  videoTrackOffset: number,
  audioTrackOffset: number,
  ): TrackItem

/\*\*

- Reports `true` when the work area is enabled.
  \*/
  isWorkAreaEnabled(): Boolean

/\*\*

- Sets whether the sequence work area is enabled.
- @param enableState Desired enabled state.
  \*/
  setWorkAreaEnabled(enableState: Boolean): void

/\*\*

- Reports the work-area in point measured in seconds.
  \*/
  getWorkAreaInPoint(): number

/\*\*

- Assigns the work-area in point using seconds.
- @param timeInSeconds Replacement in-point time.
  \*/
  setWorkAreaInPoint(timeInSeconds: number): void

/\*\*

- Reports the work-area out point measured in seconds.
  \*/
  getWorkAreaOutPoint(): number

/\*\*

- Assigns the work-area out point using seconds.
- @param timeInSeconds Replacement out-point time.
  \*/
  setWorkAreaOutPoint(timeInSeconds: number): void

/\*\*

- @returns work-area in point as a `Time` object.
  \*/
  getWorkAreaInPointAsTime(): Time

/\*\*

- Sets the work-area in point as `Time`.
  \*/
  setWorkAreaInPointAsTime(outPoint: Time): void

/\*\*

- @returns work-area out point as a `Time` object.
  \*/
  getWorkAreaOutPointAsTime(): Time

/\*\*

- Assigns the work-area out point with a `Time` value.
  \*/
  setWorkAreaOutPointAsTime(outPoint: Time): void

/\*\*

- Inserts a clip, represented by `trackItem`, into the sequence.
- @param projectItem Project item to insert.
- @param time Insertion time.
- @param vidTrackOffset Video-track distance from the first track to the target.
- @param audTrackOffset Audio-track distance from the first track to the target.
  \*/
  insertClip(
  projectItem: ProjectItem,
  time: Time,
  vidTrackOffset: number,
  audTrackOffset: number,
  ): TrackItem

/\*\*

- @returns selected clips as an `Array` of `trackItems`.
  \*/
  getSelection(): Array<TrackItem>

/\*\*

- Gets current settings for the sequence.
- @returns SequenceSettings
  \*/
  getSettings(): SequenceSettings

/\*\*

- Applies replacement settings for the sequence.
- @param newSettings Replacement settings.
  \*/
  setSettings(newSettings: SequenceSettings): void

/\*\*

- @returns true when effect analysis has finished.
  \*/

isDoneAnalyzingForVideoEffects(): Boolean

/\*\*

-
- @param numerator Desired frame-aspect-ratio numerator.
- @param denominator Desired frame-aspect-ratio denominator.
- @param motionPreset Either "default", "faster" or "slower".
- @param sequenceName Name assigned to the created sequence.
- @param nest Nested-sequence flag.
  \*/

autoReframeSequence(
numerator: Number,
denominator: Number,
motionPreset: String,
sequenceName: String,
nest: Boolean,
): Sequence

/\*\*

-
- @param action Either 'ApplyCuts' or 'CreateMarkers'.
- @param applyCutsToLinkedAudio Whether linked audio is included.
- @param sensitivity 'LowSensitivity', 'MediumSensitivity', or 'HighSensitivity'.
  \*/
  performCutDetectionOnSelection(
  action: String,
  applyCutsToLinkedAudio: Boolean,
  sensitivity: String,
  ): void
  /\*\*
- \*/
  unbind(eventName: string): void
  }

/\*\*

- Structure listing the complete option set for `ProjectManager`.
  \*/
  declare class ProjectManagerOptions {
  /\*\*
  - Transfer mode setting for copying source media.
    \*/
    readonly `CLIP_TRANSFER_COPY`: string

/\*\*

- Transfer mode setting for transcoding source media.
  \*/
  readonly `CLIP_TRANSFER_TRANSCODE`: string

/\*\*

- Transcode mode setting for converting source media with a specific preset.
  \*/
  readonly `CLIP_TRANSCODE_MATCH_PRESET`: string

/\*\*

- Transcode mode setting for matching clips.
  \*/
  readonly `CLIP_TRANSCODE_MATCH_CLIPS`: string

/\*\*

- Transcode mode that matches sequence settings.
  \*/
  readonly `CLIP_TRANSCODE_MATCH_SEQUENCE`: string

/\*\*

- Selects one transcode option from:
-     `CLIP_TRANSCODE_MATCH_PRESET`
- `CLIP_TRANSCODE_MATCH_CLIPS`
-     `CLIP_TRANSCODE_MATCH_SEQUENCE`
  \*/
  clipTranscoderOption: string

/\*\*

- Selects one transfer option from:
-     `CLIP_TRANSFER_COPY`
- `CLIP_TRANSFER_TRANSCODE`
  \*/
  clipTransferOption: string

/\*\*

- When `true`, projectItems unused by any sequence are left out of the transfer.
  \*/
  excludeUnused: boolean

/\*\*

- Number of 'handle' frames supplied before and after clip in/out points in the sequence.
  \*/
  handleFrameCount: number

/\*\*

- When `true`, preview files are transferred too.
  \*/
  includePreviews: boolean

/\*\*

- When `true`, conformed audio files are transferred too.
  \*/
  includeConformedAudio: boolean

/\*\*

- When `true`, media files are renamed so they match clip names.
  \*/
  renameMedia: boolean

/\*\*

- Directory that contains the consolidation or transfer output.
  \*/
  destinationPath: String

/\*\*

- When `true`, every sequence in the project is transferred.
  \*/
  includeAllSequences: boolean

/\*\*

- `Array` containing every sequence affected by the transfer.
  \*/
  affectedSequences: Array<Sequence>

/\*\*

- Path to the encoder preset (.epr file) to use.
  \*/
  encoderPresetFilePath: String

/\*\*

- When `true`, image sequences are transcoded.
  \*/
  convertImageSequencesToClips: boolean

/\*\*

- When `true`, synthetic importer clips are transcoded.
  \*/
  convertSyntheticsToClips: boolean

/\*\*

- When `true`, After Effects compositions are transcoded.
  \*/
  convertAECompsToClips: boolean

/\*\*

- When `true`, source media is copied instead of transcoded if transcoding would lose alpha information.
  \*/
  copyToPreventAlphaLoss: boolean
  }

declare class ProjectManager {
/\*\*

- String array describing errors encountered.
  \*/
  errors: Array<Error>

/\*\*

- `ProjectManagerOptions` structure.
  \*/
  options: ProjectManagerOptions

/\*\*

- Runs consolidation and transfer.
- @param project `Project` selected for consolidation.
  \*/
  process(project: Project): number

/\*\*

- \*/
  unbind(eventName: string): void
  }

/\*\*

- \*/
  declare class SequenceCollection {
  /\*\*

  - \*/
    readonly numSequences: number

  /\*\*

  - \*/
    bind(eventName: string, function\_: any): void

  /\*\*

  - \*/
    setTimeout(eventName: string, function\_: any, milliseconds: number): void

  /\*\*

  - \*/
    unbind(eventName: string): void

  /\*\*

  - \*/
    [index: number]: Sequence
    }

/\*\*

- \*/
  declare class Metadata {
  /\*\*

  - \*/
    readonly getMetadata: string

  /\*\*

  - \*/
    addMarker(): void

  /\*\*

  - \*/
    bind(eventName: string, function\_: any): void

  /\*\*

  - \*/
    deleteMarker(): void

  /\*\*

  - \*/
    setMarkerData(): void

  /\*\*

  - \*/
    setMetadataValue(): void

  /\*\*

  - \*/
    setTimeout(eventName: string, function\_: any, milliseconds: number): void

  /\*\*

  - \*/
    unbind(eventName: string): void

  /\*\*

  - \*/
    updateMarker(): void
    }

/\*\*

- \*/
  declare class Anywhere {
  /\*\*

  - \*/
    bind(eventName: string, function\_: any): void

  /\*\*

  - \*/
    getAuthenticationToken(): string

  /\*\*

  - \*/
    getCurrentEditingSessionActiveSequenceURL(): string

  /\*\*

  - \*/
    getCurrentEditingSessionSelectionURL(): string

  /\*\*

  - \*/
    getCurrentEditingSessionURL(): string

  /\*\*

  - \*/
    isProductionOpen(): boolean

  /\*\*

  - \*/
    listProductions(): RemoteProductionCollection

  /\*\*

  - \*/
    openProduction(inProductionURL: string): boolean

  /\*\*

  - \*/
    setAuthenticationToken(inAuthToken: string, inEmail: string): boolean

  /\*\*

  - \*/
    setTimeout(eventName: string, function\_: any, milliseconds: number): void

  /\*\*

  - \*/
    unbind(eventName: string): void
    }

/\*\*

- \*/
  declare class CsxsResourceCentral {
  /\*\*

  - \*/
    bind(eventName: string, function\_: any): void

  /\*\*

  - \*/
    getBrightness(): string

  /\*\*

  - \*/
    openURL(urlString: string): void

  /\*\*

  - \*/
    setTimeout(eventName: string, function\_: any, milliseconds: number): void

  /\*\*

  - \*/
    unbind(eventName: string): void

  /\*\*

  - \*/
    validateClient(token: string): boolean
    }

/\*\*

- \*/
  declare class SourceMonitor {
  /\*\*

  - \*/
    bind(eventName: string, function\_: any): void

  /\*\*

  - \*/
    closeAllClips(): void

  /\*\*

  - \*/
    closeClip(): void

  /\*\*

  - \*/
    openFilePath(filePath: string): boolean

  /\*\*

  - \*/
    play(speed?: number): void

  /\*\*

  - \*/
    getProjectItem(): ProjectItem | undefined

/\*\*

- \*/
  setTimeout(eventName: string, function\_: any, milliseconds: number): void

/\*\*

- \*/
  unbind(eventName: string): void

/\*\*

- \*/
  getPosition(): Time

/\*\*

- \*/
  openProjectItem(itemToOpen: ProjectItem): void
  }

/\*\*

- \*/
  declare class Time {
  /\*\*

  - \*/
    seconds: number

  /\*\*

  - \*/
    ticks: string

  /\*\*

  - \*/
    bind(eventName: string, function\_: any): void

  /\*\*

  - \*/
    getFormatted(Time: Time, timeFormat: `TIME_FORMAT`): String

  /\*\*

  - \*/
    setTimeout(eventName: string, function\_: any, milliseconds: number): void

  /\*\*

  - \*/
    unbind(eventName: string): void
    }

/\*\*

- \*/
  declare class ProjectItemType {
  /\*\*

  - \*/
    static readonly BIN: number

  /\*\*

  - \*/
    static readonly CLIP: number

  /\*\*

  - \*/
    static readonly FILE: number

  /\*\*

  - \*/
    static readonly ROOT: number

  /\*\*

  - \*/
    bind(eventName: string, function\_: any): void

  /\*\*

  - \*/
    setTimeout(eventName: string, function\_: any, milliseconds: number): void

  /\*\*

  - \*/
    unbind(eventName: string): void
    }

/\*\*

- */
  declare class Project {
  /\*\*
  *f
  \*/
  activeSequence: Sequence

  /\*\*

  - \*/
    readonly documentID: string

  /\*\*

  - \*/
    readonly name: string

  /\*\*

  - Warning: on MacOS Ventura, reading the project path can raise an error while shutdown is in progress.
  - Bug ID: DVAPR-4242199
  -
  - Workaround: wrap path checks in try/catch when they might run during shutdown.
    \*/
    readonly path: string

  /\*\*

  - \*/
    readonly rootItem: ProjectItem

  /\*\*

  - \*/
    readonly sequences: SequenceCollection

  /\*\*

  - \*/
    addPropertyToProjectMetadataSchema(name: string, label: string, type: number): boolean

  /\*\*

  - \*/
    bind(eventName: string, function\_: any): void

  /\*\*

  - \*/
    closeDocument(): boolean

  /\*\*

  - \*/
    createNewSequence(sequenceName: string, placeholderID: string): Sequence

  /\*\*

  - \*/
    deleteAsset(): void

  /\*\*

  - \*/
    deleteSequence(sequence: Sequence): boolean

  /\*\*

  - \*/
    exportAAF(
    sequence: Sequence,
    filePath: string,
    mixDownVideo: number,
    explodeToMono: number,
    sampleRate: number,
    bitsPerSample: number,
    embedAudio: number,
    audioFileFormat: number,
    trimSources: number,
    handleFrames: number,
    ): number

  /\*\*

  - \*/
    exportFinalCutProXML(exportPath: string, suppressUI: number): boolean

  /\*\*

  - \*/
    consolidateDuplicates(): void

  /\*\*

  - \*/
    exportOMF(
    sequence: Sequence,
    filePath: string,
    OMFTitle: string,
    sampleRate: number,
    bitsPerSample: number,
    audioEncapsulated: number,
    audioFileFormat: number,
    trimAudioFiles: number,
    handleFrames: number,
    includePan: number,
    ): number

  /\*\*

  - \*/
    exportTimeline(exportControllerName: string): number

  /\*\*

  - \*/
    getInsertionBin(): ProjectItem

  /\*\*

  - \*/
    getProjectPanelMetadata(): string

  /\*\*

  - \*/
    importAEComps(aepPath: String, compsToImport: Array<any>, projectBin: ProjectItem): boolean

  /\*\*

  - \*/
    importAllAEComps(arg1: any, compsToImport: Array<any>, projectBin: ProjectItem): boolean

  /\*\*

  - Imports files into the project.
  - @param arrayOfFilePathsToImport Array of file paths to import.
  - @param suppressUI Optional; when true, warnings, translation reports, and errors are suppressed.
  - @param projectBin Optional destination bin for the imported media.
  - @param importAsNumberedStill Optional; when present, treats the file paths as a numbered-still sequence.
    \*/
    importFiles(
    arrayOfFilePathsToImport: string[],
    suppressUI?: boolean,
    projectBin?: ProjectItem,
    importAsNumberedStill?: boolean,
    ): boolean

  /\*\*

  - Imports sequences from a project.
  - @param projectPath Path to the project that supplies the sequences.
  - @param sequences Array of sequence IDs to import from that project.
    \*/
    importSequences(projectPath: String, sequencesToImport: Array<string>): boolean

  /\*\*

  - \*/
    openSequence(sequenceID: string): boolean

  /\*\*

  - \*/
    pauseGrowing(pausedOrNot: number): boolean

  /\*\*

  - \*/
    placeAsset(arg1: any): boolean

  /\*\*

  - \*/
    save(): void

  /\*\*

  - \*/
    saveAs(saveAsPath: string): boolean

  /\*\*

  - \*/
    setProjectPanelMetadata(newMetadata: string): void

  /\*\*

  -
  - @param newSequenceName Sequence name to assign.
  - @param projectItems Array of project items to add to the sequence.
  - @param targetBin Destination bin for the new sequence.
    \*/

  createNewSequenceFromClips(
  newSequenceName: string,
  projectItems: Array<ProjectItem>,
  targetBin: ProjectItem,
  ): Sequence

  /\*\*

  - \*/
    getSupportedGraphicsWhiteLuminances(): Array<any>

  /\*\*

  - \*/
    getGraphicsWhiteLuminance(): number

  /\*\*

  -
  - @param newGWL
    \*/
    setGraphicsWhiteLuminance(newGWL: number): boolean

  /\*\*

  -
  - @param width Integer.
  - @param height Integer.
  - @param timeBase Timebase assigned to the item being created.
  - @param pixelAspectNumerator Integer; pixel-aspect-ratio numerator.
  - @param pixelAspectDenominator Integer; pixel-aspect-ratio denominator.
  - @param audioSampleRate Audio sampling rate.
  - @param name Project-item name string.
    \*/
    newBarsAndTone(
    width: number,
    height: number,
    timeBase: number,
    pixelAspectNumerator: number,
    pixelAspectDenominator: number,
    audioSampleRate: number,
    name: string,
    ): boolean

  /\*\*

  - \*/
    setTimeout(eventName: string, function\_: any, milliseconds: number): void

  /\*\*

  - \*/
    unbind(eventName: string): void
    }

/\*\*

- \*/
  declare class Track {
  /\*\*

  - \*/
    name: String

  /\*\*

  - \*/
    readonly clips: TrackItemCollection

  /\*\*

  - \*/
    readonly id: number

  /\*\*

  - \*/
    readonly mediaType: string

  /\*\*

  - \*/
    readonly transitions: TrackItemCollection

  /\*\*

  - \*/
    bind(eventName: string, function\_: any): void
