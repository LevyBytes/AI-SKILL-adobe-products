# Adobe Media Encoder (AME) Scripting API Reference (A-Z) - EncoderHostScriptObject

This object exposes utility methods, including commands that run, pause, or stop the batch.

### Methods

createEncoderForFormat(inFormatName: string): scripting object : Provides an 'EncoderWrapper' script object for the requested format.

getBatchEncoderStatus(): string : Provides the current batch encoder status. Status values: invalid, paused, running, stopped, stopping (available since 23.3).

getCurrentBatchPreview(inOutputPath: string): bool : Writes the current batch preview image, in tiff format, to the supplied path.

inOutputPath: path where the 'tiff' file should be stored.

getFormatList(): array of strings : Provides a list of every available format.

getSourceInfo(sourcePath: string): scripting object : Provides a 'SourceMediaInfo' script object with detailed information for the supplied source.

sourcePath: media path.

getSupportedImportFileTypes(): array of strings : Provides the list of every available format.

isBatchRunning(): bool : Reports true while a batch job is running.

pauseBatch(): bool : Pauses the batch; the return value is true in all cases.

runBatch(): bool : Runs the batch; the return value is true in all cases.

stopBatch(): bool : Stops the batch; the return value is true in all cases.
