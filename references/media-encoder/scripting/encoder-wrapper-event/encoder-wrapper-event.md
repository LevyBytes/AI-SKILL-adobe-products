# Adobe Media Encoder (AME) Scripting API Reference (A-Z) - EncoderWrapperEvent

Event object used for encode progress and completion notifications.

### Properties

audioInfo: string : Supplies audio pre-encoding information for onAudioPreEncodeProgress (available since 24.0).

audioProgress: string : Supplies audio pre-encoding progress for onAudioPreEncodeProgress (available since 24.0).

onAudioPreEncodeProgress: constant string : Signals audio pre-encode progress changes (available since 24.0).

onEncodeFinished: constant string : Signals that the batch item has been encoded.

onEncodeProgress: constant string : Signals changes in batch item encode progress.

result: string : For onEncodeFinished, contains 'Done!', 'Failed!' or 'Stopped!'; onEncodeProgress carries a 0 to 100 progress value.
