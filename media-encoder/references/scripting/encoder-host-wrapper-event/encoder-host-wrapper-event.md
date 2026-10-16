# Adobe Media Encoder (AME) Scripting API Reference (A-Z) — EncoderHostWrapperEvent

For batch-queue items, this event supports onItemEncodingStarted, onAudioPreEncodeProgress, onEncodingItemProgressUpdate, and onItemEncodeComplete. When the queue contains multiple batch items, use this event so every item can receive those event types. For the full batch queue, the event type is onBatchEncoderStatusChanged.

### Properties

audioInfo: string : Supplies audio pre-encoding information for onAudioPreEncodeProgress (available since 24.0).

audioProgress: float : Supplies audio pre-encoding progress for onAudioPreEncodeProgress (available since 24.0).

batchEncoderStatus: string : Gives the batch encoder status captured when the event fired; use it with onBatchEncoderStatusChanged, otherwise the value is invalid. Status values: invalid, paused, running, stopped, stopping (available since 23.3).

onAudioPreEncodeProgress: constant string : Signals audio pre-encode progress changes (available since 24.0).

onBatchEncoderStatusChanged: constant string : Signals that batch encoder status changed; read batchEncoderStatus for the new value (available since 23.3).

onEncodingItemProgressUpdate: constant string : Signals batch item encoding progress (available since 23.1).

onItemEncodeCompleted: constant string : Signals that the batch item has been encoded.

onItemEncodingStarted: constant string : Signals the start of batch item encoding (available since 23.1).

outputFilePath: string : Provides the output file path for onItemEncodingStarted and onItemEncodeComplete.

progress: float : Provides encoding progress from 0 to 1 for onEncodingItemProgressUpdate.

result: string : Provides the encoding result 'True' or 'False' for onItemEncodeComplete.

sourceFilePath: string : Provides the source file path for onItemEncodingStarted and onItemEncodeComplete.
