# Tracking Data, The Call Stack, Code Profiling For Optimization, Profiling Options ...

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Tracking data; The call stack; Code profiling for optimization; Profiling Options; Viewing Profiling Info; Inspecting object models; File System Access; Using File and Folder objects; Specifying paths; Unicode I/O; File error handling; File access error messages; File- and Folder-supported encoding names.

## Tracking data

### Debugging in the Toolkit — Tracking data

The Data Browser panel exposes the JavaScript engine's live data. In the current context, it lists variables and their current values. When execution is stopped at a breakpoint, it shows variables declared with var in the current function, plus the function arguments. To view variables from the global scope or a calling scope, change context through the Call Stack (see The call stack).

Variable values can be inspected and changed in the Data Browser. - Click a variable name; the edit field at the top of the panel receives that variable's current value. - To change the value, type a replacement and press ENTER. For a Read only variable, the edit field is disabled.

The panel's flyout menu controls how much data is shown:

- Undefined Variables toggles variables whose value is undefined rather than null.
- Functions toggles functions attached to objects. In many cases, the most relevant data inside an object are its callable methods.
- Core JavaScript Elements toggles standard JavaScript-language data, including the Array constructor and the Math object.
- Prototype Elements toggles the JavaScript object prototype chain.

A small icon beside each variable identifies its data type. When an object reference points to an object that has been deleted, it is invalid and its object icon is crossed out in red. Undefined values have no icon.

| Icon | Status |
| --- | --- |
|  | Boolean |
|  | Number |
|  | String |
|  | Object |
|  | Method |
|  | null |

Click an object's icon to inspect its contents. The list expands to show the object's properties, and methods too when Functions display is enabled, while the triangle points downward to show that the object is open.

## The call stack

### Debugging in the Toolkit — The call stack

The Call Stack panel is active during program debugging. When a running program stops at a breakpoint or runtime error, the panel lists the function-call sequence that led to the current execution point. It shows active function names together with the actual arguments passed to each function.

Example: this panel can show a break at a breakpoint in RGBColorPicker():

The function that contains the breakpoint is highlighted in the Call Stack panel. The Document Window highlights the line that contains the breakpoint.

Click any function in the call hierarchy to inspect that function. In the document window, a green background marks the line containing the function call that led to that execution point. In the example, selecting the run() function in the call stack makes the Document Window highlight the line in that function where RGBColorPicker() was called.

Moving among functions in the call hierarchy lets you trace how the current function was reached. The Console and Data Browser panels stay coordinated with the Call Stack panel. When a function is selected in the Call Stack:

- The Console panel changes scope to that function's execution context, allowing inspection and modification of local variables. Those variables would otherwise be unavailable to the running JavaScript program from inside a called function.
- The Data Browser panel shows all data defined in the selected context.

## Code profiling for optimization

The Profiling tool is used to improve program execution.

With profiling enabled, the JavaScript engine gathers data while a program runs. It can count how many times a line or function executes, or measure how long a line or function takes to execute. You decide which profiling data should be shown.

## Profiling Options

### Code profiling for optimization — Profiling Options

Profiling makes execution much slower, so the Profile menu provides the following profiling choices.

### Off

Disables profiling.

This setting is selected by default.

### Functions

Counts calls to each function.

After execution ends, the total is displayed beside the line where the function header is defined, to the left of its line number.

### Lines

Counts every execution of each line.

When execution finishes, the total is shown to the left of the line number. This takes more execution time, but provides finer detail.

### Add Timing Info

Records elapsed time for each function or line instead of counting functions or lines.

After execution completes, the total number of microseconds spent in the function or line is shown to the left of the line number. This profiling mode takes the most time.

### No Profiler Data

When this is selected, profiler data is hidden.

### Show Hit Count

When this is selected, hit counts are shown.

### Show Timing

When this is selected, timing data is shown.

### Erase Profiler Data

Deletes all profiling data.

### Save Data As

Writes profiling data as comma-separated values in a CSV file, which can be opened in a spreadsheet program such as Excel.

## Viewing Profiling Info

### Code profiling for optimization — Viewing Profiling Info

When execution stops, whether because the program terminates, reaches a breakpoint, or hits a runtime error, the Toolkit shows profiling information line by line in the Document Window. The data uses color coding:

- Green marks the lowest hit count or the shortest execution time.
- Orange or yellow marks a likely trouble area, such as a line executed many times or the line with the longest execution time.

This example shows number-of-hits information:

This example shows timing information for the program in microseconds. The timing may not be precise to the microsecond, because it depends on the resolution and accuracy of the computer's hardware timers.

## Inspecting object models

The ExtendScript Toolkit can inspect the object model for any loaded dictionary through the Object Model Viewer, opened from the Help menu.

Object Model Viewer (OMV) opens as its own floating window. In the OMV, you can browse the object hierarchy, inspect each property's type and description, and view each method's description and parameters.

The Browser section's drop-down menu at the upper left lets you choose among loaded object dictionaries. Each dictionary gives access to one application or subsystem's object model.

- Adobe tools and utilities such as File and Folder are included in the Core JavaScript Classes dictionary.
- The ScriptUI Classes dictionary lists interface elements from the ScriptUI JavaScript module.
- Every Adobe application defines a dictionary for its Document Object Model (DOM). A particular application's dictionary may appear only after that application is launched or selected as the Toolkit target.

To inspect an object model, choose the relevant dictionary from the Browser menu. Classes from that model appear in the Classes panel. Selecting a class fills the Types panel with available element types (Constructor, Class, Instance, Event). Selecting a type fills the Properties and Methods panel with elements of that type.

After you select a class or element, a description opens on the right. Descriptions stack and remain visible until closed. Each one can be closed separately from the mouse-over menu in its lower-right corner, or every open description can be closed with the Close All button at the upper left of the OMV window.

The same mouse-over menu can bookmark an element for quick access or copy text from the description. Live links in descriptions navigate to related objects and elements, and text can be searched in names or descriptions.

## File System Access

Adobe ExtendScript provides classes that make cross-platform file-system access easier. Any application supporting a JavaScript interface can use these classes.

- The first section of this chapter, Using File and Folder objects, explains how to use these classes and gives details about pathname syntax.
- File object and Folder object contain reference information for the objects, properties, methods, and creation parameters. Within the ExtendScript Toolkit, the Help menu also opens the Core JavaScript Classes dictionary so the objects can be inspected in the Object Model Viewer.

## Using File and Folder objects

Path-name rules differ sharply among Windows, Mac OS, and UNIX, so Adobe ExendScript supplies File and Folder objects as a platform-neutral layer over the file system. A File object denotes a disk file; a Folder object denotes a directory or folder.

- Folder provides file-system operations such as walking the hierarchy, creating, renaming, or removing files, and resolving file aliases.
- File provides input/output operations for reading from files or writing to them.

Scripts can tell File and Folder objects apart in several ways. Examples:

```
if ( f instanceof File ) ...
if ( typeof f.open == "undefined" ) ... // Folders do not open
```

Where an API expects a path name for files or folders, a File or Folder object can be supplied, including in properties and arguments.

Note

Creating two File objects for the same disk file does not make them the same object. After one is opened for I/O, the operating system may block access through the other object because the underlying disk file is already open.

## Specifying paths

### Using File and Folder objects — Specifying paths

When you instantiate a File or Folder object, the path can be written in platform-specific form, or as an absolute or relative path in the platform-neutral universal resource identifier (URI) notation. The object stores a complete absolute path that points to a fixed location on disk.

- Call toString to get the file or folder name as a URI-notation absolute path string.
- Read fsName to get the platform-specific file name.

### Absolute and relative path names

In URI notation, an absolute path gives the complete route from a root directory to a specific file or folder. It begins with one or two slashes (/), and slashes separate the path elements.

For example, this path points absolutely to myFile.jsx:

```
/dir1/dir2/mydir/myFile.jsx
```

URI-notation relative paths are resolved by appending them to the current directory path stored in the global Folder.current property. They begin with a folder or file name, dot (.) for the current directory, or dot dot (..) for its parent. A slash (/) separates path elements.

For example, these paths point to different relative locations for myFile.jsx:

| File reference | Location |
| --- | --- |
| myFile.jsx | In the current directory. |
| ./myFile.jsx |  |
| ../myFile.jsx | In the parent of the current directory. |
| ../../myFile.jsx | In the grandparent of the current directory. |
| ../dir1/myFile.jsx | In dir1, which is parallel to the current directory. |

Relative path names avoid volume names that vary by machine and operating system, making code much easier to move. One practical pattern is to use an absolute path only once, to set Folder.current, and then use relative paths for the rest of the operations. Moving to another platform or file location then requires only one code change.

### Character interpretation in paths

Platforms interpret pathnames differently:

- Windows and Mac OS compare path names without case sensitivity; UNIX treats case as significant.
- Windows accepts both slash (/) and backslash (\) as path element separators. Because backslash is also the escape character, write double backslash (\\) when you mean that character.
- Mac OS accepts both slash (/) and colon (:) as path element separators.

When a path name begins with two slashes, or with two backslashes on Windows, the first element names a remote server. For example, //myhost/mydir/myfile refers to /mydir/myfile on the server myhost.

URI notation supports special characters in pathnames, but each one must be written as escape character (%) followed by a hexadecimal character code. Here, special characters are characters that are not alphanumeric and are not one of:

```
/ - - . ! ~ * ' ( )
```

For example, a space becomes %20, so "my file" is written as "my%20file". Likewise, ä becomes %E4, so "Bräun" is written as "Br%E4un".

The global JavaScript functions encodeURI and decodeURI use this same encoding scheme.

### The home directory

A leading tilde (~) in a path name means the user's home directory and maps to the platform's HOME environment variable.

UNIX and Mac OS set HOME from the user's login. On Mac OS, the default home directory is /Users/username. On UNIX, it is usually /home/username or /users/username. ExtendScript takes the home directory value directly from the platform.

On Windows, HOME is optional. If HOME is set, its value must be a Windows path name or a path name to a remote server, such as \\myhost\mydir. If HOME is undefined, ExtendScript defaults to the user's home directory, usually C:\Users\username.

Note

Many folders named by platform-specific variables are exposed through static, globally available Folder class properties; for instance, appData refers to the folder used for application data for all users.

### Volume and drive names

In URI notation, an absolute path can begin with a volume or drive name. The platform determines how those values are interpreted.

### Mac OS volumes

When Mac OS X starts, the startup volume becomes the file-system root directory. Other volumes, including remote volumes, appear inside /Volumes. File and Folder use these rules for the first element of a path name:

- If the name matches the startup volume name, omit it.
- If the name matches a volume name, prepend /Volumes.
- Otherwise, keep the path unchanged.

Mac OS 9 is not supported as an operating system, but colon-separated path syntax is still supported and maps to URI and Mac OS X paths as shown below. These examples assume startup volume MacOSX and mounted volume Remote.

| URI path name | Mac OS 9 path name | Mac OS X path name |
| --- | --- | --- |
| /MacOSX/dir/file | MacOSX:dir:file | /dir/file |
| /Remote/dir/file | Remote:dir:file | /Volumes/Remote/dir/file |
| /root/dir/file | Root:dir:file | /root/dir/file |
| ~/dir/file |  | /Users/jdoe/dir/file |

### Windows drives

In Windows, volume names map to drive letters. Normally, URI path /c/temp/file becomes Windows path C:\temp\file.

If the first path component matches an existing drive name, that component is always treated as the drive.

A root folder can have the same name as a drive; for example, Windows can contain C:\C. A path beginning with /c still targets drive C:, so to reach that folder by name, include both the drive and folder names, such as /c/c for C:\C.

On the current drive, a root folder whose name matches another drive letter is treated as a folder. If D:\C exists and the current drive is D:, then URI path /c/temp/file translates to Windows path D:\c\temp\file. To access drive C in that situation, use Windows path name conventions.

Remote volumes use a uniform naming convention (UNC) path name in the form //servername/sharename. These path names remain portable because Mac OS X and UNIX ignore repeated slash characters. For Windows local volumes, UNC names are not valid. The examples below assume current drive D:

| URI path name | Windows path name |
| --- | --- |
| /c/dir/file | c:\\dir\\file |
| /remote/dir/file | D:\\remote\\dir\\file |
| /root/dir/file | D:\\root\\dir\\file |
| ~/dir/file | C:\\Users\\jdoe\\dir\\file |

### Aliases

Accessing an alias transparently forwards the operation to the real file. Only rename and remove calls, plus changes to readonly and hidden, affect the alias itself. When a File object represents an alias, its alias property returns true, and resolve returns the File or Folder object for the alias target.

On Windows, file-system aliases are shortcuts, which are real files with names ending in .lnk. Do not use this extension directly; File and Folder objects handle it without the extension.

For example, suppose /folder2 contains a shortcut to /folder1/some.txt. The shortcut's full Windows file name is \folder2\some.txt.lnk.

To access the shortcut through a File object, specify /folder2/some.txt. Calling open on that File object opens the linked file in /folder1. Calling rename on the File object renames the shortcut file itself and leaves the .lnk extension intact.

Windows, however, allows a file and its shortcut to occupy the same folder. In that situation, the File object always reaches the original file. You cannot construct a File object that accesses the shortcut when it sits beside its linked file.

A script can make a file alias by first creating a File object for a path that does not yet exist on disk, then calling createAlias to provide the alias target.

### Portability issues

For applications expected to run on several platforms, prefer relative path names or build paths from the home directory. If neither approach works, use Mac OS X and UNIX aliases, and keep the files on a machine remote from Windows so UNC names can be used.

For example, suppose the UNIX machine myServer stores the data. If you create an alias share in myServer's root directory and create a Windows-accessible share named share that points to the same data location, //myServer/share/file works on all three platforms.

## Unicode I/O

### Using File and Folder objects — Unicode I/O

During file I/O, Adobe applications translate 8-bit character encodings into Unicode. By default, the conversion assumes the system encoding, such as code page 1252 on Windows or Mac Roman on Mac OS. A File object's encoding property reports the current encoding. Scripts can set encoding to the desired encoding name, and File then asks the operating system for the matching encoder for later I/O. The name is one of the standard Internet encoding names used for HTML, such as ASCII, X-SJIS, or ISO-8859-1. For the full list, see File- and Folder-supported encoding names.

BINARY is a special encoder for binary I/O. It expands each 8-bit character it reads into a Unicode character from 0 through 255. When writing binary files through this encoder, only the lower 8 bits of each Unicode character are written. For example, writing Unicode character 1000, or 0x3E8, actually writes character 232, or 0xE8.

Some common file formats, including UCS-2, UCS-4, UTF-8, and UTF-16, begin their data with a byte order mark (BOM) character (\uFEFF). File.open reads the first few bytes looking for that character. If it finds one, the matching encoding is selected automatically and the character is skipped. If the file begins without a BOM, open() reads the first 2 KB and checks whether the data could be valid UTF-8; when it can, encoding is set to UTF-8.

For 16-bit Unicode output in UTF-16 format, set encoding to UCS-2. This encoding uses the byte-order format supported by the host platform.

When writing UTF-8 encoding or 16-bit Unicode, write the BOM character "\uFEFF" as the first character of the file.

## File error handling

### Using File and Folder objects — File error handling

Each object exposes an error property. When property access or a method call fails, this property stores a message naming the error type. After success, the property contains the empty string. Scripts may assign to the property, but assignment only clears the error message. If a file is open, assigning any value to error also resets its error flag.

For the complete set of supported messages, see File access error messages.

## File access error messages

The error property can contain these messages.

| Message | Explanation |
| --- | --- |
| File or folder does not exist | Parent folder exists, but the requested file or folder is missing. |
| File or folder already exists | Requested file or folder is already present. |
| I/O device is not open | An I/O operation targeted a closed file. |
| Read past EOF | Read operation attempted to go beyond file end. |
| Conversion error | File content cannot be translated to Unicode. |
| Partial multibyte character found | File data contains an invalid character-encoding sequence. |
| Permission denied | The OS blocked the requested operation. |
| Cannot change directory | Current folder could not be changed. |
| Cannot create | Folder creation failed. |
| Cannot rename | File or folder rename failed. |
| Cannot delete | File or folder deletion failed. |
| I/O error | Unspecified I/O error. |
| Cannot set size | File-size update failed. |
| Cannot open | File opening failed. |
| Cannot close | File closing failed. |
| Read error | File read failed. |
| Write error | File write failed. |
| Cannot seek | Seek operation failed. |
| Cannot execute | Specified file could not be executed. |

## File- and Folder-supported encoding names

This basic set of encoding names is supported by the File object. Some character encoders are built in; for most others, File asks the operating system.

Installed language packs can affect whether particular encodings are available. Names for the same encoding appear on one line. Before an encoding name is matched, underlines are changed to dashes.

For Unicode values above 65535, the File object represents the character as a Unicode surrogate pair, which is two characters in the 0xD700-0xDFFF range.

Built-in encodings are:

```
US-ASCII, ASCII, ISO646-US, ISO-646.IRV:1991, ISO-IR-6,
ANSI-X3.4-1968, CP367, IBM367, US, ISO646.1991-IRV
UCS-2, UCS2, ISO-10646-UCS-2
UCS2LE, UCS-2LE, ISO-10646-UCS-2LE
UCS2BE, UCS-2BE, ISO-10646-UCS-2BE
UCS-4, UCS4, ISO-10646-UCS-4
UCS4LE, UCS-4LE, ISO-10646-UCS-4LE
UCS4BE, UCS-4BE, ISO-10646-UCS-4BE
UTF-8, UTF8, UNICODE-1-1-UTF-8, UNICODE-2-0-UTF-8, X-UNICODE-2-0-UTF-8
UTF16, UTF-16, ISO-10646-UTF-16
UTF16LE, UTF-16LE, ISO-10646-UTF-16LE
UTF16BE, UTF-16BE, ISO-10646-UTF-16BE
CP1252, WINDOWS-1252, MS-ANSI
ISO-8859-1, ISO-8859-1, ISO-8859-1:1987, ISO-IR-100, LATIN1
MACINTOSH, X-MAC-ROMAN
BINARY
```

ASCII raises errors for characters greater than 127. BINARY converts between bytes and Unicode characters by using the lower 8 bits, which makes it convenient for reading and writing binary data.
