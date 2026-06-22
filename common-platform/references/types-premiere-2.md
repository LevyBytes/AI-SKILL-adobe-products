# Premiere (part 2)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

- Inserts a clip at a time offset from that track's final item.
  \*/
  insertClip(clipProjectItem: ProjectItem, time: number): boolean

/\*\*

- \*/
  isMuted(): boolean

/\*\*

- \*/
  isLocked(): boolean

/\*\*

- Overwrites a clip at an absolute track time.
  \*/
  overwriteClip(clipProjectItem: ProjectItem, time: number | Time): boolean

/\*\*

- \*/
  setMute(arg1?: number): void

/\*\*

- \*/
  setLocked(arg1?: number): void

/\*\*

- \*/
  setTimeout(eventName: string, function\_: any, milliseconds: number): void

/\*\*

- \*/
  isTargeted(): boolean

/\*\*

- \*/
  setTargeted(isTargeted: boolean, shouldBroadcast: boolean): boolean

/\*\*

- \*/
  unbind(eventName: string): void
  }

/\*\*

- \*/

declare class ComponentCollection {
/\*\*Item count.

- \*/
  readonly numItems: number
  /\*\*Item count.
- \*/
  readonly length: number;

/\*\*

- \*/
  [index: number]: Component
  }
  declare class Component {
  /\*\*
- \*/
  readonly displayName: string
  /\*\*
- \*/
  readonly matchName: string
  /\*\*
- \*/
  readonly properties: ComponentParamCollection
  }
  declare class TrackItem {
  /\*\*
- \*/
  readonly components: any

/\*\*

- \*/
  readonly duration: Time

/\*\*

- \*/
  readonly nodeId: string

/\*\*

- \*/
  end: Time

/\*\*

- \*/
  inPoint: Time

/\*\*

- \*/
  outPoint: Time

/\*\*

- \*/
  readonly mediaType: string

/\*\*

- \*/
  name: string

/\*\*

- @version 22.0
  \*/
  disabled: boolean

/\*\*

- @version 22.0
  \*/
  readonly parentTrackIndex: number

/\*\*

- \*/
  projectItem: ProjectItem

/\*\*

- \*/
  start: Time

/\*\*

- \*/
  readonly type: number

/\*\*

- \*/
  bind(eventName: string, function\_: any): void

/\*\*

- \*/
  getLinkedItems(): TrackItemCollection

/\*\*

- \*/
  isSelected(): boolean

/\*\*

- \*/
  isSpeedReversed(): 0 | 1

/\*\*

- \*/
  setSelected(isSelected: boolean, updateUI?: boolean): void

/\*\*

- \*/
  isAdjustmentLayer(): boolean

/\*\*

- \*/
  remove(rippleEdit: boolean, alignToVideo: boolean): boolean

/\*\*

- \*/
  getSpeed(): number

/\*\*

- \*/
  getMGTComponent(): Component

/\*\*

- \*/
  getColorSpace(): String

/\*\*

- \*/
  move(seconds: number): boolean

/\*\*

- \*/
  setTimeout(eventName: string, function\_: any, milliseconds: number): void

/\*\*

- \*/
  unbind(eventName: string): void
  }

/\*\*

- \*/
  declare class ProjectItem {
  /\*\*

  - \*/
    readonly children: ProjectItemCollection

  /\*\*

  - \*/
    name: string

  /\*\*

  - \*/
    readonly nodeId: string

  /\*\*

  - \*/
    readonly treePath: string

  /\*\*

  - \*/
    readonly type: number

  /\*\*

  - \*/
    timeDisplayFormat: number

  /\*\*

  - \*/
    videoComponents: () => ComponentCollection | undefined

  /\*\*

  - \*/
    attachProxy(mediaPath: string, isHiRes: number): boolean

  /\*\*

  - \*/
    detachProxy(): boolean

  /\*\*

  - \*/
    bind(eventName: string, function\_: any): void

  /\*\*

  - \*/
    canChangeMediaPath(): boolean

  /\*\*

  - \*/
    canProxy(): boolean

  /\*\*

  - \*/
    changeMediaPath(mediaPath: string, suppressWarnings: boolean): boolean

  /\*\*

  - \*/
    createBin(name: string): ProjectItem

  /\*\*

  - \*/
    createSmartBin(name: string, query: string): void

  /\*\*
  _ Checks projectItem sequence status.
  @returns true for sequence projectItems.
  _/
  isSequence(): boolean

  /\*\*

  - \*/
    createSubClip(
    name: string,
    startTime: object,
    endTime: object,
    hasHardBoundaries: number,
    takeVideo?: number,
    takeAudio?: number,
    ): ProjectItem

  /\*\*

  - \*/
    deleteBin(): void

  /\*\*

  - \*/
    findItemsMatchingMediaPath(matchString: string, ignoreSubclips?: number): void

  /\*\*

  - \*/
    getColorLabel(): number

  /\*\*

  - \*/
    getMarkers(): MarkerCollection

  /\*\*

  - \*/
    getMediaPath(): string

  /\*\*

  - \*/
    getProjectMetadata(): string

  /\*\*

  - \*/
    getProxyPath(): string

  /\*\*

  - \*/
    getXMPMetadata(): string

  /\*\*

  - \*/
    hasProxy(): boolean

  /\*\*

  - \*/
    moveBin(destination: ProjectItem): void

  /\*\*

  - \*/
    refreshMedia(): string

  /\*\*

  - \*/
    renameBin(name: string): boolean

  /\*\*

  - \*/
    select(): void

  /\*\*

  - \*/
    setColorLabel(newColor: number): void

  /\*\*

  - \*/
    setOverridePixelAspectRatio(numerator: number, denominator: number): boolean

  /\*\*

  - \*/
    setOverrideFrameRate(newFrameRate: number): boolean

  /\*\*

  - \*/
    setProjectMetadata(buffer: String, keysToBeUpdated: Array<any>): void

  /\*\*

  - \*/
    setScaleToFrameSize(): void

  /\*\*

  - \*/
    setStartTime(seconds: number): void

  /\*\*

  - Sets the clip in point.
  - @param seconds In-point time.
    \*/
    setInPoint(seconds: Time | number | string, p2: number): void

  /\*\*

  - Sets the clip out point.
  - @param seconds Out-point time.
    \*/
    setOutPoint(seconds: Time | number | string, p2: number): void

  /\*\*

  - Removes the clip in point.
    \*/
    clearInPoint(): boolean

  /\*\*

  - Removes the clip out point.
    \*/
    clearOutPoint(): boolean

  /\*\*

  - \*/
    setTimeout(eventName: string, function\_: any, milliseconds: number): void

  /\*\*

  - \*/
    setXMPMetadata(buffer: String): boolean

  /\*\*

  - \*/
    startTime(): Time

  /\*\*

  -
  - @param newColorSpace Use a value listed in sequence.workingColorSpaceList.
    \*/
    setOverrideColorSpace(newColorSpace: String): void

  /\*\*

  - \*/
    getColorSpace(): String

  /\*\*

  - \*/
    isMultiCamClip(): boolean

  /\*\*

  - \*/
    isMergedClip(): boolean

  /\*\*

  - \*/
    getInPoint(): Time

  /\*\*

  - \*/
    getOutPoint(): Time

/\*\*

- \*/
  unbind(eventName: string): void
  }

/\*\*

- \*/
  declare class ProjectCollection {
  /\*\*

  - \*/
    readonly numProjects: number

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
    [index: number]: Project
    }

/\*\*

- \*/
  declare class ProjectItemCollection {
  /\*\*

  - \*/
    readonly numItems: number

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
    [index: number]: ProjectItem
    }

/\*\*

- \*/
  declare class TrackCollection {
  /\*\*

  - \*/
    readonly numTracks: number

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
    [index: number]: Track
    }

/\*\*

- \*/
  declare class TrackItemCollection {
  /\*\*Item count.

  - \*/
    readonly numItems: number

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
    [index: number]: TrackItem
    }

/\*\*

- \*/
  declare class ScratchDiskType {
  /\*\*

  - \*/
    static readonly FirstAudioCaptureFolder: string

  /\*\*

  - \*/
    static readonly FirstAudioPreviewFolder: string

  /\*\*

  - \*/
    static readonly FirstAutoSaveFolder: string

  /\*\*

  - \*/
    static readonly FirstCClibrariesFolder: string

  /\*\*

  - \*/
    static readonly FirstCapsuleMediaFolder: string

  /\*\*

  - \*/
    static readonly FirstVideoCaptureFolder: string

  /\*\*

  - \*/
    static readonly FirstVideoPreviewFolder: string

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

- \*/
  declare class Csxs {
  /\*\*

  - \*/
    readonly resourceCentral: CsxsResourceCentral

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

- \*/
  declare class RemoteProductionCollection {
  /\*\*

  - \*/
    readonly numProductions: number

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

- \*/
  declare class RemoteProduction {
  /\*\*

  - \*/
    readonly description: string

  /\*\*

  - \*/
    readonly name: string

  /\*\*

  - \*/
    readonly url: string

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

type EncoderEvent =
| "onEncoderJobCanceled"
| "onEncoderJobQueued"
| "onEncoderJobComplete"
| "onEncoderJobError"
| "onEncoderJobProgress"
| "onEncoderLaunched"

/\*\*

- \*/
  declare class Encoder {
  /\*\*

  - \*/
    readonly `ENCODE_ENTIRE`: number

  /\*\*

  - \*/
    readonly `ENCODE_IN_TO_OUT`: number

  /\*\*

  - \*/
    readonly `ENCODE_WORKAREA`: number

  /\*\*

  - \*/
    bind(eventName: EncoderEvent, function\_: any): void

  /\*\*

  - \*/
    encodeFile(
    inputFilePath: string,
    outputFilePath: string,
    presetPath: string,
    removeOnCompletion?: number,
    startTime?: object,
    stopTime?: object,
    ): string

  /\*\*

  - \*/
    encodeProjectItem(
    projectItem: ProjectItem,
    outputFilePath: string,
    presetPath: string,
    WorkAreaType?: number,
    removeOnCompletion?: number,
    ): string

  /\*\*

  - \*/
    encodeSequence(
    sequence: Sequence,
    outputFilePath: string,
    presetPath: string,
    WorkAreaType?: number,
    removeOnCompletion?: number,
    ): string

  /\*\*

  - \*/
    getExporters(): Array<any>
    /\*\*
  - \*/
    launchEncoder(): boolean

  /\*\*

  - \*/
    setEmbeddedXMPEnabled(enable: number): void

  /\*\*

  - \*/
    setSidecarXMPEnabled(enable: number): void

  /\*\*

  - \*/
    setTimeout(eventName: string, function\_: any, milliseconds: number): void

  /\*\*

  - \*/
    startBatch(): boolean

  /\*\*

  - \*/
    lastExportMediaFolder(): String

  /\*\*

  - \*/
    unbind(eventName: string): void
    }

/\*\*

- _/
  declare class ComponentParamCollection {
  /\*\* Item count. _/
  readonly numItems: number

  /\*_ Item count. _/
  readonly length: number

  bind(eventName: string, function\_: any): void
  clearProperty(propertyKey: string): void
  doesPropertyExist(propertyKey: string): boolean
  getProperty(propertyKey: string): any
  isPropertyReadOnly(propertyKey: string): boolean
  setProperty(
  propertyKey: string,
  propertyValue: any,
  permanenceValue: number,
  allowCreateNewProperty: boolean,
  ): void

  setTimeout(eventName: string, function\_: any, milliseconds: number): void
  unbind(eventName: string): void
  [index: number]: ComponentParam
  getParamForDisplayName(paramName: string): ComponentParam | null
  }

declare class ComponentParam {
readonly displayName: string
addKey(): boolean
areKeyframesSupported(): boolean
findNearestKey(): object
findNextKey(): object
findPreviousKey(): object
getColorValue(): any[]
getKeys(): any[]
getValue(): any
getValueAtKey(time: Time): any
getValueAtTime(): any
isEmpty(): boolean
isTimeVarying(): boolean
keyExistsAtTime(): boolean
removeKey(): boolean
removeKeyRange(start: Time, end: Time): boolean
setColorValue(p0: number, p1: number, p2: number, p3: number, p4: boolean): boolean
setInterpolationTypeAtKey(): boolean
setTimeVarying(setTimeVarying: boolean, p1?: boolean): boolean
setValue(value: any, updateUI?: boolean | number): boolean
setValueAtKey(time: Time, value: any, updateUI?: boolean | number): boolean
}
/\*\*

- \*/
  declare class PrProduction {
  /\*\*
  - \*/
    name: string

/\*\*

- \*/
  projects: ProjectCollection

/\*\*

- \*/
  close(): void

/\*\*

- \*/
  getLocked(project: Project): Boolean

/\*\*

- \*/
  setLocked(project: Project, newLockState: Boolean): void

/\*\*

- \*/
  moveToTrash(projectPath: String, suppressUI: Boolean, saveProject: Boolean): Boolean
  }

type ApplicationEvent =
| "onSourceClipSelectedInProjectPanel"
| "onSequenceActivated"
| "onActiveSequenceChanged"
| "onActiveSequenceSelectionChanged"
| "onActiveSequenceTrackItemAdded"
| "onActiveSequenceTrackItemRemoved"
| "onActiveSequenceStructureChanged"
| "onProjectChanged"
| "onProjectEndDrop"

/\*\*

- \*/
  declare class Application {
  /\*\*

  - \*/
    readonly anywhere: Anywhere

  /\*\*

  - \*/
    readonly build: string

  /\*\*

  - \*/
    readonly csxs: Csxs

  /\*\*

  - \*/
    readonly encoder: Encoder

  /\*\*

  - \*/
    readonly projectManager: ProjectManager

  /\*\*

  - \*/
    readonly getAppPrefPath: string

  /\*\*

  - \*/
    readonly getAppSystemPrefPath: string

  /\*\*

  - \*/
    readonly getPProPrefPath: string

  /\*\*

  - \*/
    readonly getPProSystemPrefPath: string

  /\*\*

  - \*/
    readonly metadata: Metadata

  /\*\*

  - Project currently active.
    \*/
    project: Project

  /\*\*

  - \*/
    readonly projects: ProjectCollection

  /\*\*

  - \*/
    readonly properties: ComponentParamCollection

  /\*\*

  - \*/
    readonly sourceMonitor: SourceMonitor

  /\*\*

  - \*/
    readonly userGuid: string

  /\*\*

  - \*/
    readonly version: string

  /\*\*

  - \*/
    bind(eventName: ApplicationEvent, function\_: Function): void

  /\*\*

  - Alerts App that Preferences have changed.
  - The only currently valid argument is 'BE::PreferencesScratchDisksChanged'.
    \*/
    broadcastPrefsChanged(preferencesThatChanged: string): boolean

  /\*\*

  - \*/
    getEnableProxies(): number

  /\*\*

  - Checks whether the specified file is a doc.
  - @param filePath Path to check.
  - @returns true when PPro can open the document at that path as a project.
    \*/
    isDocument(filePath: string): boolean

  /\*\*

  - \*/
    isDocumentOpen(): boolean

  /\*\*

  - \*/
    openDocument(
    filePath: string,
    bypassConversionDialog?: boolean,
    bypassLocateFile?: boolean,
    bypassWarningDialog?: boolean,
    hideFromMRUList?: boolean,
    ): boolean

  /\*\*

  - @param newValueForTranscodeOnIngest
  - @returns newly assigned setting controlling PPro transcode-on-ingest behavior.
    \*/
    setEnableTranscodeOnIngest(newValueForTranscodeOnIngest: boolean): void

  /\*\*

  - \*/
    openFCPXML(): boolean

  /\*\*

  - \*/
    quit(): void

  /\*\*

  - \*/
    setEnableProxies(enable: number): boolean

  /\*\*

  - \*/
    setExtensionPersistent(extensionID: string, state?: number): void

  /\*\*

  - \*/
    setSDKEventMessage(value: string, eventType: string): boolean

  /\*\*

  - \*/
    setScratchDiskPath(value: string, type: string): boolean

  /\*\*

  - \*/
    setTimeout(eventName: string, function\_: any, milliseconds: number): void

  /\*\*

  - \*/
    getProjectViewIDs(): Array<string>

  /\*\*

  - \*/
    getProjectFromViewID(viewID: String): Project

  /\*\*

  - \*/
    showCursor(enable: boolean): void

  /\*\*

  - \*/
    getProjectViewSelection(viewID: String): Array<ProjectItem>

  /\*\*

  - \*/
    setProjectViewSelection(projectItems: Array<ProjectItem>, viewID: String): void

  /\*\*

  - \*/
    onItemAddedToProjectSuccess: undefined

  /\*\*

  - @returns array containing the names of all available workspaces.
    \*/
    getWorkspaces(): Array<string>

  /\*\*

  - @param workspaceName Workspace name to use.
  - @returns true on success.
    \*/
    setWorkspace(workspaceName: string): void

  /\*\*

  -
  - @param eventName Event to subscribe to.
  - @param function* Callback function.
    \*/
    addEventListener(eventName: string, function*: any): void

  /\*\*

  - \*/
    trace(message: string): void

  /\*\*

  - \*/
    unbind(eventName: string): void

  /\*\*

  - \*/
    enableQE(): void

  /\*\*

  - \*/
    newProject(projectName: string): boolean

  /\*\*

  - \*/
    production: PrProduction

  /\*\*

  - \*/
    openPrProduction(path: string): PrProduction
    }

/\*\*

- \*/
  declare class MarkerCollection {
  /\*\*

  - \*/
    readonly numMarkers: number

  /\*\*

  - \*/
    bind(eventName: string, function\_: any): void

  /\*\*

  - \*/
    createMarker(start: number, name: string, duration: number, comments: string): Marker

  /\*\*

  - \*/
    deleteMarker(marker: Marker): void

  /\*\*

  - \*/
    getFirstMarker(): Marker

  /\*\*

  - \*/
    getLastMarker(): Marker

  /\*\*

  - \*/
    getNextMarker(marker: Marker): Marker

  /\*\*

  - \*/
    getPrevMarker(marker: Marker): Marker

  /\*\*

  - \*/
    setTimeout(eventName: string, function\_: any, milliseconds: number): void

  /\*\*

  - \*/
    unbind(eventName: string): void

  /\*\*

  - \*/
    [index: number]: Marker
    }

/\*\*

- \*/
  declare class Marker {
  /\*\*

  - \*/
    comments: string

  /\*\*

  - \*/
    end: Time

  /\*\*

  - \*/
    readonly guid: string

  /\*\*

  - \*/
    name: string

  /\*\*

  - \*/
    start: Time

  /\*\*

  - \*/
    type: string

  /\*\*

  - \*/
    bind(eventName: string, function\_: any): void

  /\*\*

  - \*/
    getWebLinkFrameTarget(): string

  /\*\*

  - \*/
    getWebLinkURL(): string

  /\*\*

  - \*/
    setTimeout(eventName: string, function\_: any, milliseconds: number): void

  /\*\*

  - \*/
    setTypeAsChapter(): void

  /\*\*

  - \*/
    setTypeAsComment(): void

  /\*\*

  - \*/
    setTypeAsSegmentation(): void

  /\*\*

  - \*/
    setTypeAsWebLink(url: string, frameTarget: string): void

  /\*\*

  - \*/
    getColorByIndex(): number

  /\*\*

  - \*/
    setColorByIndex(index: number): void

  /\*\*

  - \*/
    unbind(eventName: string): void
    }

/\*\*

- \*/
  declare class Document {
  /\*\*

  - \*/
    bind(eventName: string, function\_: any): void

  /\*\*

  - \*/
    getFilePath(): string

  /\*\*

  - \*/
    importFiles(arg1: any): boolean

  /\*\*

  - \*/
    setTimeout(eventName: string, function\_: any, milliseconds: number): void

  /\*\*

  - \*/
    unbind(eventName: string): void
    }

declare const document: Document

interface SystemCompatibilityReport {
/\*\*

- @param fullOutputPath Path and filename where the report is written.
  \*/
  CreateReport(fullOutputPath: string): void
  }

declare const SystemCompatibilityReport: SystemCompatibilityReport
