# Adobe Media Encoder (AME) Scripting API Reference (A-Z) — FrontendScriptObject

Frontend-facing scripting methods.

### Methods

addCompToBatch(compPath: string, presetPath: string = "", outputPath: string = ""): bool : Places the first comp from an After Effects project, or the first sequence from a Premiere Pro project, into the batch.

compPath: Path such as an After Effects project or Premiere Pro project. The first comp or sequence is selected.

presetPath: Optional. With presetPath left empty, the default preset is used.

outputPath: Optional; a blank outputPath makes AME build the output file name using compPath.

addDLToBatch(projectPath: string, format: string, presetPath: string, guid: string, outputPath: string = ""): scripting object : Places an item such as an After Effects comp or Premiere Pro sequence into the batch and yields an EncoderWrapper object.

projectPath: Example input is a Premiere Pro or After Effects project path.

format: Example: 'H.264'

presetPath: A preset or a format input is required. Without a preset, AME applies the default preset for the specified format.

guid: Unique id for an item such as a Premiere Pro sequence or After Effects composition.

outputPath: Optional; a blank outputPath makes AME build the output file name using projectPath.

addFileSequenceToBatch(containingFolder: string, imagePath: string, presetPath: string, outputPath: string = ""): bool : Inserts an image sequence into the batch. Image ordering is alphabetical.

containingFolder: Folder where the image files are stored.

imagePath: Adds all images in the containing folder that share the same extension to the output file.

outputPath: Optional; a blank outputPath makes AME build the output file name using containingFolder.

addFileToBatch(filePath: string, format: string, presetPath: string, outputPath: string = ""): scripting object : Inserts a file into the batch and yields an EncoderWrapper object.

filePath: Media source file path.

format: Example: 'H.264'

presetPath: A preset or a format input is required. Without a preset, AME applies the default preset for the specified format.

outputPath: Optional; a blank outputPath makes AME build the output file name using filePath.

addItemToBatch(sourcePath: string): bool : Inserts a media source into the batch.

sourcePath: Media source path.

addTeamProjectsItemToBatch(projectsURL: string, format: string, presetPath: string, outputPath: string): scripting object : Inserts a team project item into the batch and yields an EncoderWrapper object.

projectsURL: Team Projects URL or Team Projects Snap. In PPro, saveProjectSnapshot from the scripting API can create a tp2snap file for a ProjectItem.

format: Example: 'H.264'

presetPath: A preset or a format input is required. Without a preset, AME applies the default preset for the specified format.

addXMLToBatch(xmlPath: string, presetPath: string, outputFolderPath: string = ""): bool : Inserts Final Cut Pro xml into the batch.

xmlPath: Path for a Final Cut Pro xml file.

outputFolderPath: Optional; a blank outputFolderPath makes AME build the output file name using xmlPath.

getDLItemsAtRoot(projectPath: string): array of strings : Provides the GUID list for top-level/root objects, including sequences and comps.

projectPath: Example input can point to a Premiere Pro or After Effects project.

stitchFiles(mediaPaths: string, format: string, presetPath: string, outputPath: string): scripting object : Creates a batch item for the specified media and yields an EncoderWrapper object.

mediaPaths: Media paths separated by semicolons.

format: Example: 'H.264'

presetPath: A preset or a format input is required. Without a preset, AME applies the default preset for the specified format.

stopBatch(): bool : Halts current processing.
