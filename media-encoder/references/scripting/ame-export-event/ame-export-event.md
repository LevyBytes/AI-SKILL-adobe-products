# Adobe Media Encoder (AME) Scripting API Reference (A-Z) — AMEExportEvent

Available event types are: onMediaInfoCreated, onBatchItemStatusChanged, onItemEncodingStarted, onAudioPreEncodeProgress, onEncodingItemProgressUpdated, onEncodeComplete, onError, onPostProcessListInitialized.

### Properties

audioInfo: string : Supplies audio pre-encoding information for onAudioPreEncodeProgress (available since 24.0).

audioProgress: float : Supplies audio pre-encoding progress for onAudioPreEncodeProgress (available since 24.0).

encodeCompleteStatus: bool : Reports true after a batch item finishes encoding; available on onEncodeComplete.

encodeCompleteTime: float : Provides the encoding duration in milliseconds for onEncodeComplete.

groupIndex: unsigned int : Provides the batch group index for onBatchItemStatusChanged.

itemIndex: unsigned int : Provides the batch item index for onBatchItemStatusChanged.

onAudioPreEncodeProgress: constant string : Signals audio pre-encode progress changes (available since 24.0).

onBatchItemStatusChanged: constant string : Signals a batch item status change; call groupIndex, itemIndex, and status for details.

onEncodeComplete: constant string : Signals that the batch item has been encoded; use encodeCompleteStatus and encodeCompleteTime for details.

onEncodingItemProgressUpdated: constant string : Signals encoding progress.

onError: constant string : Signals an encoding error for the batch item.

onItemEncodingStarted: constant string : Signals that encoding has started for a batch item.

onMediaInfoCreated: constant string : Signals that media info has been created.

onPostProcessListInitialized: constant string : Signals that the post process list has been initialized.

progress: float : Provides the batch item encoding progress from 0 to 1 for onEncodingItemProgressUpdated.

status: unsigned int : Provides the batch item status for onBatchItemStatusChanged. Values are: 0 : Waiting, 1 : Done, 2 : Failed, 3 : Skipped, 4 : Encoding, 5 : Paused, 6 : Stopped, 7 : Any, 8 : AutoStart, 9 : Done Warning, 10 : Watch Folder Waiting.
