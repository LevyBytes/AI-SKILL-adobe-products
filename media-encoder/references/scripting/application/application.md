# Adobe Media Encoder (AME) Scripting API Reference (A-Z) — Application

Top-level app object.

### Properties

buildNumber: string : Retrieves the application build number.

### Methods

assertToConsole(): bool : Sends assert output to stdout.

bringToFront(): bool : Moves the application to the foreground.

cancelTask(taskID: int): bool : Cancels the task matching taskID.

getEncoderHost(): scripting object : Retrieves the encoder host object. See EncoderHostScriptObject.

getExporter(): scripting object : Retrieves the exporter object. See ExporterScriptObject.

getFrontend(): scripting object : Retrieves the front end object. See FrontendScriptObject.

getWatchFolder(): scripting object : Retrieves the watch folder object. See WatchFolderScriptObject.

isBlackVideo(sourcePath: string): bool : Reports true when every frame is black.

isSilentAudio(sourcePath: string): bool : Reports true when the audio is silent.

quit(): bool : Exits AME.

renderFrameSequence(sourcePath: string, outputPath: string, renderAll: bool, startFrame: int): bool : Renders still frames from the provided source.

scheduleTask(scriptToExecute: string, delayInMilliseconds: int, repeat: bool): int : Schedules script execution after delay and returns task ID.

scriptToExecute: provide the script text, for example 'app.getEncoderHost().runBatch()'.

wait(milliseconds: unsigned int): bool : Waits for the specified milliseconds without blocking the UI.

write(text: string): bool : Sends text to stdout.
