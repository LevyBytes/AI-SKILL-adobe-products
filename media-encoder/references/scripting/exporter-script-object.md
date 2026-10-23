# Adobe Media Encoder (AME) Scripting API Reference (A-Z) - ExporterScriptObject

Provides several AME encoding entry points. AMEExportEvent listeners can be attached for these event types: onEncodeComplete, onError, onMediaInfoCreated, onBatchItemStatusChanged, onItemEncodingStarted, onEncodingItemProgressUpdated, onAudioPreEncodeProgress, onPostProcessListInitialized

### Properties

elapsedMilliseconds: float : Gives the encode duration in milliseconds.

encodeID: string : Gives the active encode item ID as a string.

### Methods

exportGroup(sourcePath: string, outputPath: string, presetsPath: string, matchSource: bool = false): bool : Runs the source through the supplied preset list. Returns true when successful.

sourcePath: Media path. Premiere Pro projects are not supported.

outputPath: When outputPath is empty, AME derives the output file location from the source location.

presetsPath: Multiple preset paths can be supplied with | between entries (e.g. 'path1|path2|path3'

matchSource: Optional; defaults to false.

exportItem(sourcePath: string, outputPath: string, presetPath: string, matchSource: bool = false, writeFramesToDisk: bool = false): scripting object : Runs the source with the supplied preset. The returned scripting object is an EncoderWrapper object.

sourcePath: Path to either media or a Premiere Pro project. For a Premiere Pro project, the last sequence is selected.

outputPath: A blank outputPath makes AME choose the output file location from the source location.

matchSource: Optional; defaults to false.

writeFramesToDisk: Optional; defaults to false. When enabled, the API writes frames at the 0%, 25%, 50%, 75%, and 100% duration marks, for five frames total. Limitation: the feature currently requires parallel encoding to be turned off.

exportSequence(projectPath: string, outputPath: string, presetPath: string, matchSource: bool = false, writeFramesToDisk: bool = false, leadingFramesToTrim: int = 0, trailingFramesToTrim: int = 0, sequenceName: string = ""): bool : Exports the Premiere Pro sequence using the supplied preset. Returns true when successful.

projectPath: Premiere Pro project path.

outputPath: A blank outputPath makes AME choose the output file location from the source location.

matchSource: Optional; defaults to false.

writeFramesToDisk: Optional; defaults to false. When enabled, the API writes frames at the 0%, 25%, 50%, 75%, and 100% duration marks, for five frames total. Limitation: the feature currently requires parallel encoding to be turned off.

leadingFramesToTrim: Optional; defaults to 0.

trailingFramesToTrim: Optional; defaults to 0.

sequenceName: Optional. When sequenceName is empty, AME uses the project's last sequence.

getSourceMediaInfo(sourcePath: string): scripting object : Provides a SourceMediaInfo object.

removeAllBatchItems(): bool : Clears every batch item from the queue. Returns true when successful.

trimExportForSR(sourcePath: string, outputPath: string, presetPath: string, matchSource: bool = false, writeFramesToDisk: bool = false, leadingFramesToTrim: int = 0, trailingFramesToTrim: int = 0): bool : Performs a smart render of the source with the supplied preset. Returns true when successful.

sourcePath: Path to either media or a Premiere Pro project. For a Premiere Pro project, the last sequence is selected.

outputPath: A blank outputPath makes AME choose the output file location from the source location.

matchSource: Optional; defaults to false.

writeFramesToDisk: Optional; defaults to false. When enabled, the API writes frames at the 0%, 25%, 50%, 75%, and 100% duration marks, for five frames total. Limitation: the feature currently requires parallel encoding to be turned off.

leadingFramesToTrim: Optional; defaults to 0.

trailingFramesToTrim: Optional; defaults to 0.
