# Mediaencoder

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/// <reference path="../../shared/global.d.ts" />

// App

interface App {
readonly buildNumber: string
readonly launchTime: number
assertToConsole(): boolean
bringToFront(): boolean
cancelTask(p0: number): boolean
getBatchEncoder(): object
getBuildNumber(): string
getEncoderHost(): object
getExporter(): object
getFrontend(): FrontEnd
getScriptEngineName(): string
getWatchFolder(): object
isBlackVideo(p0: string): boolean
isSilentAudio(p0: string): boolean
quit(): boolean
renderFrameSequence(p0: string, p1: string, p2: boolean, p3: number): boolean
scheduleTask(p0: string, p1: number, p2: boolean): number
simulateUIEvents(p0: string): boolean
wait(p0: number): boolean
write(p0: string): boolean
addEventListener(): any
removeEventListener(): any
dispatchEvent(): any
}

declare interface FrontEnd {
/\*\*

- Queues the first comp from an After Effects project or the first sequence from a Premiere Pro project.
- @param compPath Path for an After Effects project or Premiere Pro project; the first comp or sequence is used.
- @param presetPath Optional. When presetPath is empty, the default preset is used.
- @param outputPath Optional. When outputPath is empty, the output file name is derived from compPath.
- @returns True when the item is added to the batch; otherwise false.
  \*/
  addCompToBatch(compPath: string, presetPath?: string, outputPath?: string): boolean

/\*\*

- Queues an After Effects comp or Premiere Pro sequence and returns an EncoderWrapper object.
- @param projectPath Path for a Premiere Pro or After Effects project.
- @param format Format example: â€˜H.264â€™
- @param presetPath A preset or a format input is required. Without a preset, the specified format's default preset is used.
- @param guid Unique id for a Premiere Pro sequence or After Effects composition.
- @param outputPath Optional. When outputPath is empty, the output file name is derived from projectPath.
- @returns EncoderWrapper instance.
  \*/
  addDLToBatch(
  projectPath: string,
  format: string,
  presetPath: string,
  guid: string,
  outputPath?: string,
  ): EncoderWrapper

/\*\*

- Adds an image sequence to the batch, with images ordered alphabetically.
- @param containingFolder Folder that contains the image files.
- @param imagePath Adds all images from containingFolder that share this extension into the output file.
- @param presetPath Optional. When presetPath is empty, the default preset is used.
- @param outputPath Optional. When outputPath is empty, the output file name is derived from containingFolder.
- @returns True when the item is added to the batch; otherwise false.
  \*/
  addFileSequenceToBatch(
  containingFolder: string,
  imagePath: string,
  presetPath?: string,
  outputPath?: string,
  ): boolean

/\*\*

- Queues a file and returns an EncoderWrapper object.
- @param filePath File path for a media source.
- @param format Format example: â€˜H.264â€™
- @param presetPath A preset or a format input is required. Without a preset, the specified format's default preset is used.
- @param outputPath Optional. When outputPath is empty, the output file name is derived from filePath.
- @returns EncoderWrapper object.
  \*/
  addFileToBatch(
  filePath: string,
  format: string,
  presetPath: string,
  outputPath?: string,
  ): EncoderWrapper

/\*\*

- Queues a media source.
- @param sourcePath Path for the media source.
- @returns True when the item is added to the batch; otherwise false.
  \*/
  addItemToBatch(sourcePath: string): boolean

/\*\*

- Queues a team project item, yielding an EncoderWrapper instance.
- @param projectsURL Team Projects URL or Team Projects Snap; PPro can create a tp2snap file for a ProjectItem through scripting API saveProjectSnapshot.
- @param format Format example: â€˜H.264â€™
- @param presetPath A preset or a format input is required. Without a preset, the specified format's default preset is used.
- @param outputPath Optional. When outputPath is empty, the output file name is derived from projectPath.
- @returns EncoderWrapper instance.
  \*/
  addTeamProjectsItemToBatch(
  projectsURL: string,
  format: string,
  presetPath: string,
  outputPath: string,
  ): EncoderWrapper

/\*\*

- Queues Final Cut Pro xml for batch processing.
- @param xmlPath Path for a Final Cut Pro xml file.
- @param presetPath A preset or a format input is required. Without a preset, the specified format's default preset is used.
- @param outputFolderPath Optional. When outputFolderPath is empty, the output file name is derived from the XML file path.
- @returns True when the item is added to the batch; otherwise false.
  \*/
  addXMLToBatch(xmlPath: string, presetPath: string, outputFolderPath?: string): boolean

/\*\*

- Gets GUIDs for objects, such as sequences or comps, at the top/root level.
- @param projectPath Path for a Premiere Pro or After Effects project.
- @returns Array of strings representing the GUID list.
  \*/
  getDLItemsAtRoot(projectPath: string): string[]

/\*\*

- Creates a batch item from the supplied media and yields an EncoderWrapper instance.
- @param mediaPaths Media paths separated by semicolons.
- @param format Format example: â€˜H.264â€™
- @param presetPath A preset or a format input is required. Without a preset, the specified format's default preset is used.
- @param outputPath Output path for the encoded media.
- @returns EncoderWrapper instance.
  \*/
  stitchFiles(
  mediaPaths: string,
  format: string,
  presetPath: string,
  outputPath: string,
  ): EncoderWrapper

/\*\*

- Stops the batch.
- @returns True when the batch is stopped; otherwise false.
  \*/
  stopBatch(): boolean

addEventListener(
type: "onBatchItemCreationFailed",
listener: (eventObj: AMEBatchItemCreationFailedEvent) => void,
useCapture?: boolean
): void;
removeEventListener(): any
dispatchEvent(): any
}

// app specific ---------------------- //
