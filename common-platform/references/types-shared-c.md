# Shared (cont. 2)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

## raw_githubusercontent_com_aenhancers_Types_for_Adobe_master_shared_JavaScript_d_ts

/\*\*

- True when a read attempt placed the current position at file end, or when the file is not open.
  \*/
  readonly eof: boolean

/\*\*

- String message for the most recent file-system error.
- Usually the file system sets this value, though a script may also set it. Assigning this property clears any message and resets the error bit for opened files. The value is an empty string when no error exists.
  \*/
  error: string

/\*\*

- True when this object points to a real file or file-system alias in the file system.
  \*/
  readonly exists: boolean

/\*\*

- Platform-specific absolute path for the referenced file.
  \*/
  readonly fsName: string

/\*\*

- Full path for the referenced file, written as URI notation.
  \*/
  readonly fullName: string

/\*\*

- True when the platform file browser hides this file.
- If the object points at a file-system alias or shortcut, the flag is changed on that alias rather than on the original file.
  \*/
  hidden: boolean

/\*\*

- File size measured in bytes.
- This can be assigned only while the file is not open; assignment truncates the file or pads it with 0-bytes to reach the new length.
  \*/
  length: number

/\*\*

- Controls how line feed characters are written by the file system.
- Supported values are "Windows", "Macintosh", and "Unix".
  \*/
  lineFeed: string

/\*\*

- Last modification date for the referenced file, or null when the object does not point to a disk file.
  \*/
  readonly modified: Date

/\*\*

- File-name part of the referenced file's absolute URI, excluding its path.
  \*/
  readonly name: string

/\*\*

- Folder object that contains this file.
  \*/
  readonly parent: Folder

/\*\*

- Path part of the referenced file's absolute URI, excluding the file name.
  \*/
  readonly path: string

/\*\*

- True prevents alteration or deletion of the file.
- For a referenced file-system alias or shortcut, this flag changes the alias rather than the original file.
  \*/
  readonly: boolean

/\*\*

- URI-notation path for the object, expressed relative to the current folder.
  \*/
  readonly relativeURI: string

/\*\*

- Four-character string identifying the file type.
- On Mac OS, this is the Mac OS file type.
- On Windows, .EXE files use "appl", .DLL files use "shlb", and any other file uses "TEXT".
  \*/
  readonly type: string

/\*\*

- Updates the path specification for the referenced file.
- @param path String holding the new path, either absolute or relative to the current folder.
  \*/
  changePath(path: string): boolean

/\*\*

- Closes the currently open file.
- Returns true when closing succeeds, or false when an I/O error occurs.
  \*/
  close(): boolean

/\*\*

- Copies the file referenced by this object to a requested target location.
- Aliases are resolved to locate the source file. An existing file at the destination is overwritten.
- Returns true when the copy succeeds.
- @param target URI path string for the destination, or a File object that refers to the destination.
  \*/
  copy(target: string): boolean

/\*\*

- Turns this file into a file-system alias or shortcut to another file.
- This object's referenced file must not already be present on disk. A true return value indicates success.
- @param path String containing the target file path.
  \*/
  createAlias(path: string): void

/\*\*

- Opens or executes this file with the suitable application, matching a file-browser double-click.
- This method can run scripts, launch applications, and similar actions. It returns true immediately when application launch succeeds.
  \*/
  execute(): boolean

/\*\*

- Gets this file's path relative to a specified base path, using URI notation.
- Without a supplied base path, the URI is relative to the current folder's path. The result is a string containing the relative URI.
- @param basePath Base path in URI notation.
  \*/
  getRelativeURI(basePath: string): string

/\*\*

- Opens the referenced file for later read/write work, resolving aliases to locate the file.
- A true return value means the file opened successfully. The method tries to infer the open file's encoding by reading a few bytes at the current location and checking for the Byte Order Mark character 0xFFFE. When that marker is present, the current position moves past it and the encoding property becomes one of UCS-2BE, UCS-2LE, UCS4-BE, UCS-4LE, or UTF-8. If no marker appears, the method checks for zero bytes at the current location and infers one of those formats, except UTF-8. If every detection path fails, the encoding property uses the system encoding.
- IMPORTANT: Opening the same file more than once is risky. The operating system often allows it, but writing through two different File objects can destroy your data.
- @param mode Read-write mode as a one-character string. Accepted characters: r (read) reads only and fails when the file is missing or cannot be located; w (write) writes, clears existing contents, and creates a new empty file if required; e (edit) reads and writes an existing file; a (append) reads and writes an existing file after moving the current position to the file end.
- @param type In Mac OS, 4-character type for a newly created file. Windows and UNIX ignore it.
- @param creator In Mac OS, 4-character creator for a newly created file. Windows and UNIX ignore it.
  \*/
  open(mode: string, type?: string, creator?: string): boolean

/\*\*

- Displays the built-in platform file browser so the user can select one existing file or several files, then creates File objects for those selections.
- Unlike the class method openDialog(), this starts with the current folder set to this File object's parent folder and the current file set to this object's associated file.
- If OK is clicked, the return value is a File or Folder object for the chosen file or folder, or an array of objects.
- If the user cancels, null is returned.
- @param prompt Prompt text used when the dialog supports prompting.
- @param filter Filter limiting which file types appear. On Windows, a filter expression can look like "Javascript files:_.jsx;All files:_.\*". On Mac OS, use a filter function that receives a File instance and returns true to include it in the display or false to exclude it.
- @param multiSelect When true, the dialog permits multiple selections and returns File[] results.
  \*/
  openDlg(prompt?: string, filter?: string | Function, multiSelect?: boolean): File | File[]
  openDlg(prompt: string, filter: string | Function, multiSelect: false): File
  openDlg(prompt: string, filter: string | Function, multiSelect: true): File[]

/\*\*

- Reads file contents beginning at the current position.
- The returned string contains up to the requested character count. Without a character count, reading continues from the current position through file end. For encoded files, forming one Unicode character may consume multiple bytes.
- @param chars Integer count of characters to read.
  \*/
  read(chars?: number): string

/\*\*

- Reads one text character from the file at the current position.
- Line feeds may appear as CR, LF, CRLF, or LFCR pairs. For encoded files, one Unicode character may require reading multiple bytes. The result is a string containing that character.
  \*/
  readch(): string

/\*\*

- Reads one line of text from the file at the current position.
- Line feeds may appear as CR, LF, CRLF, or LFCR pairs. For encoded files, one Unicode character may require reading multiple bytes. The result is a string containing the text.
  \*/
  readln(): string

/\*\*

- Immediately deletes the file associated with this object from disk, without sending it to the system trash.
- Aliases are not resolved; the referenced alias or shortcut file itself is deleted. A true return value means removal succeeded.
- IMPORTANT: This action cannot be undone. Prompting the user for permission before deleting is recommended.
  \*/
  remove(): boolean

/\*\*

- Renames the associated file.
- Aliases are not resolved; the referenced alias or shortcut file itself is renamed. A true return value means renaming succeeded.
- @param newName New file name without path information.
  \*/
  rename(newName: string): boolean

/\*\*

- Tries to resolve the file-system alias or shortcut referenced by this object.
- On success, returns a new File object pointing at the resolved file-system item. Returns null when this object is not an alias or when the alias cannot be resolved.
  \*/
  resolve(): File

/\*\*

- Displays the built-in platform file browser so the user can choose an existing location for saving information, then creates a new File object for the selected file.
- Unlike the class method saveDialog(), this starts with the current folder set to this File object's parent folder and the file set to this object's associated file.
- If OK is clicked, the selected file is returned as a File object.
- If the user cancels, null is returned.
- @param prompt Prompt text used when the dialog supports prompting.
- @param filter Windows only: filter limiting which file types appear. A filter expression can look like "Javascript files:_.jsx;All files:_._". Mac OS does not use it.
  _/
  saveDlg(prompt?: string, filter?: any): File

/\*\*

- Moves to a specified file position.
- The new position cannot fall below 0 or exceed the current file size. The method returns true when the position changes.
- @param pos New current position expressed as a byte offset from the start, current position, or end, according to mode.
- @param mode Seek mode. One of: 0: absolute seek; pos=0 means the first byte of the file, and this is the default. 1: offset from the current position. 2. backward offset from the end of the file.
  \*/
  seek(pos: number, mode?: number): boolean

/\*\*

- Gets the current byte-offset position from the start of the file.
- Returns a number representing the position index.
  \*/
  tell(): number

/\*\*

- Creates and returns serialized source text for this object.
- Pass that string to eval() to recreate the object.
  \*/
  toSource(): string

/\*\*

- Converts this object into a string.
  \*/
  toString(): string

/\*\*

- Writes the provided text at the current file position.
- Multiple text values may be supplied; the strings are joined into one string. For encoded files, writing one Unicode character may output multiple bytes. A true return value indicates a successful write. IMPORTANT: Avoid writing to a file that is open in another application or object, because existing data can be overwritten.
- @param text Text string to write.
  \*/
  write(text: string): boolean

/\*\*

- Writes a string at the current file position and then appends a line-feed sequence.
- Multiple text values may be supplied. The strings are joined into one string, written to the file, and followed by one line-feed sequence using the style set by this object's linefeed property. For encoded files, writing one Unicode character may output multiple bytes. A true return value indicates a successful write. IMPORTANT: Avoid writing to a file that is open in another application or object, because existing data can be overwritten.
- @param text Text string to write.
  \*/
  writeln(text: string): boolean
  }

interface FolderConstructor {
readonly prototype: Folder

/\*\*

- Creates a Folder object that points at a file-system location.
- If the path name identifies an existing disk file, File is returned instead. Otherwise the result is the new Folder object.
- @param path Absolute or relative URI-format path to the folder associated with this object. The object stores the absolute path. The path does not need to identify an existing folder. If the path identifies an existing file rather than a folder, Folder() returns a File object instead of a Folder object, while new creates a Folder object named for a folder that is not yet present.
  \*/
  new (path?: string): Folder
  (path?: string): Folder

/\*\*

- Folder for application data shared by all users.
- Windows value: %APPDATA% (by default, C:\\Documents and Settings\\All Users\\Application Data)
- Mac OS path: /Library/Application Support
  \*/
  readonly appData: Folder

/\*\*

- On Mac OS, Folder object for the folder that contains the running application's bundle.
  \*/
  readonly appPackage: Folder

/\*\*

- Folder object for common files used by programs installed by the user.
- Windows value: %CommonProgramFiles% (by default, C:\\Program Files\\Common Files)
- Mac OS path: /Library/Application Support
  \*/
  readonly commonFiles: Folder

/\*\*

- Folder object representing the current folder.
- Assign a Folder object or path-name string to change the current folder. This class property is accessed through the Folder constructor.
  \*/
  current: Folder

/\*\*

- Folder object for the user's desktop.
- Windows path: C:\\Documents and Settings\\username\\Desktop
- Mac OS path: ~/Desktop
  \*/
  readonly desktop: Folder

/\*\*

- Name of the current file system.
- Possible values are "Windows", "Macintosh", and "Unix".
  \*/
  readonly fs: string

/\*\*

- Folder object for the user's My Documents location.
- Windows path: C:\\Documents and Settings\\username\\My Documents
- Mac OS path: ~/Documents
  \*/
  readonly myDocuments: Folder

/\*\*

- Folder object for the folder containing the running application's executable image.
  \*/
  readonly startup: Folder

/\*\*

- Folder object for operating system files.
- Windows value: %windir% (by default, C:\\Windows)
- Mac OS path: /System
  \*/
  readonly system: Folder

/\*\*

- Folder object for the default temporary-file folder.
  \*/
  readonly temp: Folder

/\*\*

- Folder object for deleted items. On Windows, the trash folder is virtual.
- Because it contains a database, this property is null on Windows.
  \*/
  readonly trash: Folder

/\*\*

- Folder object for the user's application data.
- Windows value: %USERDATA% (by default, C:\\Documents and Settings\\username\\Application Data)
- Mac OS path: ~/Library/Application Support.
  \*/
  readonly userData: Folder

/\*\*

- Decodes a UTF-8 string according to RFC 2396 and returns the decoded result.
- See also String.decodeURI().
- @param uri UTF-8 string to decode.
  \*/
  decode(uri: string): string

/\*\*

- Encodes a string according to RFC 2396 and returns the encoded result.
- Special characters are encoded as UTF-8 and represented by percent escapes followed by two hexadecimal digits. For example, "my file" becomes "my%20file".
- Characters treated as special have numeric values greater than 127, except for these characters: / - \_ . ! ~ \* ' ( )
- See also encodeURI().
- @param name String to encode.
  \*/
  encode(name: string): string

/\*\*

- Reports whether the named encoding can be used.
- @param name Encoding name. Common examples include "ASCII", "binary", and "UTF-8". See the JavaScript Tools Guide for the complete supported-encoding list.
  \*/
  isEncodingAvailable(name: string): boolean

/\*\*

- Displays the built-in platform file browser and creates a File or Folder object for the chosen file or folder.
- Unlike the object method selectDlg(), it does not preselect a folder.
- If OK is clicked, the return value is a File or Folder object for the chosen file or folder.
- If the user cancels, null is returned.
- @param prompt Prompt text, when the dialog supports prompting.
  \*/
  selectDialog(prompt?: string): Folder
  }
  declare const Folder: FolderConstructor

/\*\*

- Platform-independent object form for a file-system folder or directory.
  \*/
  interface Folder {
  /\*\*
  - Full path for the referenced folder, written as URI notation.
    \*/
    readonly absoluteURI: string

/\*\*

- True when the object identifies a file-system alias or shortcut.
  \*/
  readonly alias: boolean

/\*\*

- Creation date for the referenced folder, or null when the object does not point to a disk folder.
  \*/
  readonly created: Date

/\*\*

- Localized name portion of the referenced folder's absolute URI, without path components.
  \*/
  readonly displayName: string

/\*\*

- Message text for the most recent file-system error.
- Usually the file system sets this value, though a script may also set it. Assigning this property clears any message and resets the error bit for opened files. The value is an empty string when no error exists.
  \*/
  error: string

/\*\*

- True when the referenced folder is currently present in the file system.
  \*/
  readonly exists: boolean

/\*\*

- Platform-specific full path name for the referenced folder.
  \*/
  readonly fsName: string

/\*\*

- Full path for the referenced folder, written as URI notation. .
  \*/
  readonly fullName: string

/\*\*

- Last modification date for the referenced folder, or null when the object does not point to a disk folder.
  \*/
  readonly modified: Date

/\*\*

- Folder-name part of the absolute URI for the referenced file, excluding its path.
  \*/
  readonly name: string

/\*\*

- Folder object that contains this folder, or null when this object refers to a volume root.
  \*/
  readonly parent: Folder

/\*\*

- Path part of the object's absolute URI for the referenced file, excluding the folder name.
  \*/
  readonly path: string

/\*\*

- URI-notation path for the referenced folder, expressed relative to the current folder.
  \*/
  readonly relativeURI: string

/\*\*

- Updates the path specification for the referenced folder.
- @param path New path string; absolute paths and paths relative to Folder.current are both allowed.
  \*/
  changePath(path: string): boolean

/\*\*

- Builds a folder at the location named by this object's path property.
- Returns true when folder creation succeeds.
  \*/
  create(): boolean

/\*\*

- Opens this folder in the platform-specific file browser, equivalent to double-clicking it there.
- Returns true immediately when the folder opens successfully.
  \*/
  execute(): boolean

/\*\*

- Gets this folder's contents, limited by the supplied mask.
- Returns an array containing File and Folder objects, or null when this object's referenced folder does not exist.
- @param mask Search mask for file names, supplied as either a string or a function. A string mask may use question mark (?) and asterisk (_) wild cards. The default is "_", matching every file name. It may also be a function name that accepts a File or Folder object argument. Each found item is passed to it; when the function returns true, that object is added to the returned array. NOTE: In Windows, aliases always have the .lnk extension. ExtendScript removes that extension from the file name when it finds one, preserving compatibility with other operating systems. Supplying the search mask "_.lnk" searches for all aliases, but code using it is not portable.
  _/
  getFiles(mask?: any): Array<File | Folder>

/\*\*

- Builds and returns this file's path relative to the supplied base path, using URI notation.
- Without a base path, the URI is computed from the current folder path. The result is a string with the relative URI.
- @param basePath Base path supplied in URI notation.
  \*/
  getRelativeURI(basePath?: string): string

/\*\*

- Immediately removes from disk the folder represented by this object, bypassing the system trash.
- The folder has to be empty before removal. Alias resolution is not performed; the referenced alias or shortcut file is deleted instead. Returns true when removal succeeds.
- IMPORTANT: This action is irreversible. Prompting the user before deleting is recommended.
  \*/
  remove(): boolean

/\*\*

- Changes the name of the associated folder.
- Alias targets are not resolved; the alias or shortcut file referenced by the object is renamed. Returns true when the folder rename succeeds.
- @param newName New folder name only, with no path component.
  \*/
  rename(newName: string): boolean

/\*\*

- Tries to resolve the file-system alias or shortcut referenced by this object.
- On success, a new Folder object is created and returned for the resolved file-system item. Returns null when the object is not an alias, or when resolution fails.
  \*/
  resolve(): Folder

/\*\*

- Displays the built-in platform file browser and creates a File or Folder object from the user's selected item.
- Unlike the class method selectDialog(), this variant preselects the current folder.
- If OK is chosen, the selected file or folder is returned as a File or Folder object.
- If the dialog is cancelled, null is returned.
- @param prompt Prompt text, when that dialog type supports one.
  \*/
  selectDlg(prompt?: string): Folder

/\*\*

- Produces a serialized string form of this object.
- Provide that string to eval() when you need to recreate the object.
  \*/
  toSource(): string

/\*\*

- Produces this object as a string value.
  \*/
  toString(): string
  }

interface SocketConstructor {
readonly prototype: Socket

/\*\*

- Constructs a Socket object.
  \*/
  new (): Socket
  (): Socket
  }
  declare const Socket: SocketConstructor

/\*\*

- Opens a TCP/IP connection or sets up a TCP/IP server.
  \*/
  interface Socket {
  /\*\*
  - True indicates that the connection is currently active.
    \*/
    readonly connected: boolean

/\*\*

- Gets or sets the encoding name used when data is transmitted.
- Common values include "ASCII", "BINARY", and "UTF-8".
  \*/
  encoding: string

/\*\*

- True means the receive buffer currently has no data.
  \*/
  readonly eof: boolean

/\*\*

- Message for the latest error; assigning to this property clears the stored error.
  \*/
  error: string

/\*\*

- Name of the remote computer after a connection has been made.
- When no connection exists, or after it is closed, this property contains an empty string.
  \*/
  readonly host: string

/\*\*

- Timeout, in seconds, applied to read and write operations.
  \*/
  timeout: number

/\*\*

- Closes the active connection.
- Returns true after a successful close and false when an I/O error occurs.
- Object deletion also closes the connection, although only after JavaScript garbage collection. Close explicitly to avoid leaving the connection open longer than intended.
  \*/
  close(): boolean

/\*\*

- Directs the object to wait for an incoming connection.
- open() and listen() are alternatives; call only one of them for a given object.
- @param port TCP/IP port to monitor. Valid port numbers are 1 to 65535. Examples include 80 for a Web server and 23 for Telnet.
- @param encoding Encoding used by the connection. Common values include "ASCII", "BINARY", and "UTF-8".
  \*/
  listen(port: number, encoding?: string): boolean
