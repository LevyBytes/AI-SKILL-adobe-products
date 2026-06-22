# Animate (part 1)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

// Docs here: https://help.adobe.com/archive/en_US/flash/cs5/flash_cs5_extending.pdf

/// <reference path="../../shared/JavaScript.d.ts" />
/// <reference path="../../shared/ScriptUI.d.ts" />

/**_ Helpful Interfaces _**/
declare interface Point {
x: number
y: number
}

declare interface Point3D extends Point {
z: number
}

declare interface SimpleShape {
left: number
top: number
right: number
bottom: number
}

/\*\*

- Sound-envelope boundary values.
  \*/
  declare interface Limits {
  start: number
  end: number
  }

/\*\*

- Flash Player target installed in the document PI.
  \*/
  declare interface InstalledPlayer {
  /\*\*
  - Document string name.
    \*/
    name: string
    /\*\*
  - Usable with Document.setPlayerVersion() to assign the current player for a document.
    \*/
    version: string
    /\*\*
  - Lowest ActionScript version required by the document. Use an integer from minASVersion through maxASVersion, inclusive, to assign the document ActionScript version through Document.asVersion.
    \*/
    minASVersion: number
    /\*\*
  - Highest ActionScript version supported by the document.
    \*/
    maxASVersion: number
    /\*\*
  - Default Stage width in pixels for this target. For iPhone the default is 320 x 480 pixels; for Android it is 480 x 800.
    \*/
    stageWidth: number
    /\*\*
  - Default Stage height in pixels for this target. For iPhone the default is 320 x 480 pixels; for Android it is 480 x 800.
    \*/
    stageHeight: number
    }

/\*\*

- Object returned from fl.findObjectInDoc(ByName/ByType)
  \*/
  declare interface ObjectInDoc {
  /\*\*
  - Keyframe containing the element.
    \*/
    keyframe: number
    /\*\*
  - Layer containing the keyframe.
    \*/
    layer: Layer
    /\*\*
  - Timeline containing the layer.
    \*/
    timeline: Timeline
    /\*\*
  - Timeline parent; for example, the timeline may belong to a symbol instance.
    \*/
    parent: any
    }

/\*\*

- ImageFormat value accepted by SpriteSheetExporter.exportSpriteSheet();
  \*/
  declare interface ImageFormat {
  /\*\*
  - "png" and "jpg" are the valid values.
    \*/
    format: string
    /\*\*
  - Valid color value, with optional alpha.
    \*/
    backgroundColor: string | number
    /\*\*
  - Applies only when ImageFormat.format is "jpg".
  - Integer range is 1 to 100.
    \*/
    quality: number
    /\*\*
  - Applies only when ImageFormat.format is "png".
  - Allowed integer values are 8, 24, or 32.
    \*/
    bitDepth: number
    }

/**_ Global Functions _**/
/\*\*

- Function; runs when the extensible tool becomes active, meaning it has been selected in the Tools panel.
- Use it for initialization work required by the tool.
  \*/
  declare function activate(): void

/\*\*

- Method; shows a string in a modal Alert dialog box with an OK button.
  \*/
  declare function alert(alertText: string): void

/\*\*

- Function; runs when Flash opens and loads the extensible tool into the Tools panel.
- Use it to supply information Flash needs about the tool.
  \*/
  declare function configureTool(): void

/\*\*

- Method; shows a string in a modal Alert dialog box with OK and Cancel buttons.
- Note: with no open documents (FLA files), it raises an error condition.
  \*/
  declare function confirm(strAlert: string): boolean

/\*\*

- Function; runs when the extensible tool becomes inactive, meaning the active tool changes away from it.
- Use it for cleanup required by the tool.
- @returns Boolean value: true when the user clicks OK; false when the user clicks Cancel.
  \*/
  declare function deactivate(): void

/\*\*

- Function; runs when the user presses a key while the extensible tool is active.
- Call tools.getKeyDown() to identify the key.
  \*/
  declare function keydown(): void

/\*\*

- Function; runs on key release while the extensible tool remains active.
  \*/
  declare function keyup(): void

/\*\*

- Function; runs when the Stage receives a mouse-button double-click while the extensible tool is active.
  \*/
  declare function mouseDoubleClick(): void

/\*\*

- Function; runs while the extensible tool is active when a mouse press begins with the pointer positioned over the Stage.
- @param pt Point value describing where the mouse was when the press occurred. The runtime supplies it to the function at mouse-down time. This parameter is optional.
  \*/
  declare function mouseDown(pt?: Point): void

/\*\*

- Function; runs each time the extensible tool is active and the pointer travels over a specified point on the Stage. The mouse button may be pressed or not pressed.
- @param pt Point value for the current mouse position. The runtime passes it on each movement so the script can follow mouse location. When the Stage is in edit or edit-in-place mode, the coordinates are measured relative to the object currently being edited. In other cases, the coordinates use the Stage as their frame of reference. This parameter is optional.
  \*/
  declare function mouseMove(pt?: Point): void

/\*\*

- Function; runs while the extensible tool is active after a mouse-button press that began on the Stage is released.
  \*/
  declare function mouseUp(): void

/\*\*

- Function; runs when the extensible tool is active and its settings are changed in the Property inspector.
- Query tools.activeTool when the script needs the current option values (see tools.activeTool).
  \*/
  declare function notifySettingsChanged(): void

/\*\*

- Method; opens a modal Alert dialog box with OK and Cancel buttons, showing a prompt plus optional starting text.
- @returns The string entered by the user when OK is clicked; null when Cancel is clicked.
- @param promptMsg String displayed by the Prompt dialog box; Mac OS X allows up to 256 characters.
- @param text Optional string supplying the text field's initial value.
  \*/
  declare function prompt(promptMsg: string, text: string): string | null

/\*\*

- Function; runs while the extensible tool is active and the mouse moves, giving the script a chance to choose custom pointers.
- Call tools.setCursor() from the script to choose which pointer should appear.
- See tools.setCursor() for the list mapping pointer choices to integer values.
  \*/
  declare function setCursor(): void

/\*\*

- The FLfile object supports Flash extensions that need to access, change, or delete local files and folders. Adobe exposes the FLfile API as an extension of the JavaScript API. That extension is a shared library stored in this folder:
- â€¢Windows 7 and 8:
- boot drive\Users\username\AppData\Local\Adobe\Flash CC\language\Configuration\External Libraries\FLfile.dll
- â€¢Mac OS X:
- Macintosh HD/Users/username/Library/Application Support/Adobe/Flash CC/language/Configuration/External Libraries/FLfile.dll
- Note: Shared libraries that hold symbols for Flash documents are not the same as JavaScript API shared libraries.
- FLfile methods operate on disk files and directories, so each call includes one or more parameters identifying a target file or folder location. That location is supplied as a string that resembles a website URL. The format is a file URI (Uniform Resource Identifier), written like this, including the quote marks:
- "file:///drive|/folder 1/folder 2/.../filename"
- As an example, to make a folder named config on the C drive under the Program Files
- MyApp folder, use this command:
- FLfile.createFolder("file:///C|/Program Files/MyApp/config");
- Then, to put config.ini inside that folder, use this command:
- FLfile.write("file:///C|/Program Files/MyApp/config/config.ini", "");
- For a Macintosh folder, this command is valid:
- FLfile.createFolder("file:///Macintosh/MyApp/config");
  \*/
  declare const FLfile: FLfileClass
  declare class FLfileClass {
  /\*\*
  - Copies one file to another location. The method returns false when copyURI is already present.
  - @returns Boolean true on success; false otherwise.
  - @param fileURI String in file:/// URI form that identifies the file to copy.
  - @param copyURI String in file:/// URI form that identifies the destination and copied-file name.
    \*/
    copy(fileURI: string, copyURI: string): boolean
    /\*\*
  - Creates the requested folder path at the specified location.
  - Multiple folders can be made in a single call. For example, this command creates both the MyData and the TempData folders if they do not already exist:
  - FLfile.createFolder("file:///c|/MyData/TempData")
  - @returns Boolean true on success; false when folderURI already exists.
  - @param folderURI Folder URI identifying the folder hierarchy to create.
    \*/
    createFolder(folderURI: string): boolean
    /\*\*
  - Checks whether the specified file exists. When you provide both a folder and filename, that folder must already be present. Use FLfile.createFolder() when folders need to be made.
  - @returns Boolean true on success; false otherwise.
  - @param fileURI String in file:/// URI form that identifies the file to check.
    \*/
    exists(fileURI: string): boolean
    /\*\*
  - Returns a string of attribute characters for the specified file or folder, or an empty string when there are no special attributes, meaning it is not read-only, hidden, and similar. Always call FLfile.exists() first to confirm the file or folder is present before using this method.
  - The string's characters have these meanings:
  - â€¢R â€” fileOrFolderURI is read-only
  - â€¢D â€” fileOrFolderURI is a folder (directory)
  - â€¢H â€” fileOrFolderURI is hidden (Windows only)
  - â€¢S â€” fileOrFolderURI is a system file or folder (Windows only)
  - â€¢A â€” fileOrFolderURI is ready for archiving (Windows only)
  - For a hidden-folder fileOrFolderURI value, the returned string is "DH".
  - @returns String containing the attributes for the specified file or folder.
  - If the file or folder is missing, results are unpredictable. Use FLfile.exists() before calling this method.
  - @param fileOrFolderURI String in file:/// URI form identifying the file or folder whose attributes should be retrieved.
    \*/
    getAttributes(fileOrFolderURI: string): string
    /\*\*
  - Reports the number of seconds between January 1, 1970 and the moment the file or folder was created. This method is mainly useful when comparing creation and modification times for files or folders.
  - @returns String containing a hexadecimal number for the seconds elapsed between January 1, 1970 and the file or folder creation time, or "00000000" when the file or folder is absent.
  - @param fileOrFolderURI String in file:/// URI form identifying the file or folder whose creation timestamp should come back as hexadecimal text.
    \*/
    getCreationDate(fileOrFolderURI: string): void
    /\*\*
  - Builds a JavaScript Date object from the specified file or folder's creation timestamp.
  - @returns JavaScript Date object for the specified file or folder's creation timestamp. When the file is absent, the object indicates a midnight GMT creation time on December 31, 1969.
  - @param fileOrFolderURI String in file:/// URI form identifying the file or folder whose creation timestamp should come back as a JavaScript Date object.
    \*/
    getCreationDateObj(fileOrFolderURI: string): Date
    /\*\*
  - Reports the number of seconds between January 1, 1970 and the time when the file or folder was most recently modified. This method is mainly used to compare creation and modification dates for files or folders.
  - @returns String containing a hexadecimal number for the seconds elapsed between January 1, 1970 and the file or folder's last modification time, or "00000000" when the file is absent.
  - @param fileOrFolderURI String in file:/// URI form identifying the file whose modification timestamp should come back as hexadecimal text.
    \*/
    getModificationDate(fileOrFolderURI: string): string
    /\*\*
  - Builds a JavaScript Date object from the specified file or folder's latest modification timestamp.
  - @returns JavaScript Date object for the specified file or folder's most recent modification timestamp. If the file or folder is absent, the object indicates a midnight GMT creation time on December 31, 1969.
  - @param fileOrFolderURI String in file:/// URI form identifying the file or folder whose modification timestamp should come back as a JavaScript Date object.
    \*/
    getModificationDateObj(fileOrFolderURI: string): Date
    /\*\*
  - Returns an integer for the specified file's size in bytes, or 0 when the file is absent. If 0 is returned, use FLfile.exists() to tell whether the file is zero bytes or missing.
  - Correct file size values are returned only for files with sizes less than or equal to 2GB.
  - @returns Integer size of the specified file in bytes, or 0 when the file is absent.
  - @param fileURI String in file:/// URI form identifying the file whose size should be retrieved.
    \*/
    getSize(fileURI: string): number
    /\*\*
  - Returns an array of strings for the folder's contents.
  - @returns Array of strings for the folder contents. If the folder is missing, or if no file or folder matches the specified criteria, an empty array is returned.
  - @param folderURI String in file:/// URI form identifying the folder whose contents should be retrieved. folderURI may include a wildcard mask; use \* for one-or-more-character matches and ? for exactly one character.
  - @param filesOrDirectories Optional string selecting only filenames or only folder (directory) names. If omitted, the result includes filenames and folder names. Use "files" or "directories" as accepted values.
    \*/
    listFolder(folderURI: string, filesOrDirectories?: string): string[]
    /\*\*
  - Converts a platform-specific filename to a file:/// URI.
  - @returns String in file:/// URI form.
  - @param fileName String in platform-specific form identifying the filename that should be converted.
    \*/
    platformPathToURI(fileName: string): string
    /\*\*
  - Reads the specified file and returns its contents as a string, or null when the read operation fails.
  - @returns File contents as a string, or null when reading fails.
  - @param fileURI String in file:/// URI form identifying the text-based file to read, such as .js, .txt, or .jsfl.
    \*/
    read(fileURI: string): string | null
    /\*\*
  - Deletes the specified file or folder. When a folder contains files, those files are deleted too. Files carrying the R (read-only) attribute cannot be deleted.
  - @returns Boolean true on success; false otherwise.
  - @param folderOrFolderURI String in file:/// URI form identifying the file or folder to remove (delete).
    \*/
    remove(folderOrFolderURI: string): boolean
    /\*\*
  - Sets system-level attributes on the specified file.
  - These values are valid for strAttrs:
  - â€¢N â€” No specific attributes (not read-only, not hidden, and so on)
  - â€¢A â€” Ready for archiving (Windows only)
  - â€¢R â€” Read-only (on the Macintosh, read-only means â€œlockedâ€)
  - â€¢W â€” Writable (overrides R)
  - â€¢H â€” Hidden (Windows only)
  - â€¢V â€” Visible (overrides H, Windows only)
  - If strAttrs contains both R and W, R is ignored and the file becomes writable. Likewise, if H and V are supplied together, H is ignored and the file becomes visible.
  - To ensure the archive attribute is not set, call this command with N before setting attributes. In other words, there is no direct equivalent of A for turning the archive attribute off.
  - @returns Boolean true on success.
  - Note: Missing files or folders make results unpredictable, so call FLfile.exists() before this method.
  - @param fileURI String in file:/// URI form identifying the file whose attributes should be set.
  - @param strAttrs String identifying the attribute value or values to set. For acceptable values for strAttrs, see the â€œDescriptionâ€ section below.
    \*/
    setAttributes(fileURI: string, strAttrs: string): boolean
    /\*\*
  - Converts a filename written as a file:/// URI into the platform-specific format.
  - @returns String representing a platform-specific path.
  - @param fileURI String in file:/// URI form identifying the filename that should be converted.
    \*/
    uriToPlatformPath(fileURI: string): void
    /\*\*
  - Writes a specified string as UTF-8 into the specified file. If the file is absent, it is created. The containing folder must already be present before calling this method. Use FLfile.createFolder() to make folders.
  - @returns Boolean true on success; false otherwise.
  - @param fileURI String in file:/// URI form identifying the file to write to.
  - @param textToWrite String containing the text to place into the file.
  - @param strAppendMode Optional string with the value "append", meaning textToWrite is added to the existing file. Without this parameter, textToWrite replaces fileURI content.
    \*/
    write(fileURI: string, textToWrite: string, strAppendMode?: string): boolean
    }
