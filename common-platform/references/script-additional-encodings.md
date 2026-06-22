# Additional Encodings, File, File Object Constructors, File Class Attributes ...

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Additional encodings; File; File Object Constructors; File Class Attributes; File Class Methods; File Object Attributes; File Object Methods.

## Additional encodings

### File- and Folder-supported encoding names — Additional encodings

In Windows, encodings are code pages with numeric identifiers. The usual Western Windows character set, for example, is code page 1252. Select a Windows code page by prefixing its number with "CP" or "WINDOWS"; for example, "CP1252" selects code page 1252. The File object also includes many built-in encoding names tied to predefined code page numbers. If a code page is absent, that encoding cannot be selected.

In Mac OS, encoders can be selected by name instead of by code page number. The File object queries Mac OS for the encoder. Where Mac OS character sets match Windows code pages, Mac OS also recognizes those Windows code page numbers.

On UNIX, the installed iconv library determines how many encoders are available.

### Common encoding names

Windows and Mac OS both implement these encoding names:

```
UTF-7, UTF7, UNICODE-1-1-UTF-7, X-UNICODE-2-0-UTF-7
ISO-8859-2, ISO-8859-2, ISO-8859-2:1987, ISO-IR-101, LATIN2
ISO-8859-3, ISO-8859-3, ISO-8859-3:1988, ISO-IR-109, LATIN3
ISO-8859-4, ISO-8859-4, ISO-8859-4:1988, ISO-IR-110, LATIN4, BALTIC
ISO-8859-5, ISO-8859-5, ISO-8859-5:1988, ISO-IR-144, CYRILLIC
ISO-8859-6, ISO-8859-6, ISO-8859-6:1987, ISO-IR-127, ECMA-114, ASMO-708, ARABIC
ISO-8859-7, ISO-8859-7, ISO-8859-7:1987, ISO-IR-126, ECMA-118, ELOT-928, GREEK8, GREEK
ISO-8859-8, ISO-8859-8, ISO-8859-8:1988, ISO-IR-138, HEBREW
ISO-8859-9, ISO-8859-9, ISO-8859-9:1989, ISO-IR-148, LATIN5, TURKISH
ISO-8859-10, ISO-8859-10, ISO-8859-10:1992, ISO-IR-157, LATIN6
ISO-8859-13, ISO-8859-13, ISO-IR-179, LATIN7
ISO-8859-14, ISO-8859-14, ISO-8859-14, ISO-8859-14:1998, ISO-IR-199, LATIN8
ISO-8859-15, ISO-8859-15, ISO-8859-15:1998, ISO-IR-203
ISO-8859-16, ISO-885, ISO-885, MS-EE
CP850, WINDOWS-850, IBM850
CP866, WINDOWS-866, IBM866
CP932, WINDOWS-932, SJIS, SHIFT-JIS, X-SJIS, X-MS-SJIS, MS-SJIS, MS-KANJI
CP936, WINDOWS-936, GBK, WINDOWS-936, GB2312, GB-2312-80, ISO-IR-58, CHINESE
CP949, WINDOWS-949, UHC, KSC-5601, KS-C-5601-1987, KS-C-5601-1989, ISO-IR-149, KOREAN
CP950, WINDOWS-950, BIG5, BIG-5, BIG-FIVE, BIGFIVE, CN-BIG5, X-X-BIG5
CP1251, WINDOWS-1251, MS-CYRL
CP1252, WINDOWS-1252, MS-ANSI
CP1253, WINDOWS-1253, MS-GREEK
CP1254, WINDOWS-1254, MS-TURK
CP1255, WINDOWS-1255, MS-HEBR
CP1256, WINDOWS-1256, MS-ARAB
CP1257, WINDOWS-1257, WINBALTRIM
CP1258, WINDOWS-1258
CP1361, WINDOWS-1361, JOHAB
EUC-JP, EUCJP, X-EUC-JP
EUC-KR, EUCKR, X-EUC-KR
HZ, HZ-GB-2312
X-MAC-JAPANESE
X-MAC-GREEK
X-MAC-CYRILLIC
X-MAC-LATIN
X-MAC-ICELANDIC
X-MAC-TURKISH
```

### Additional Windows encoding names:

```
CP437, IBM850, WINDOWS-437
CP709, WINDOWS-709, ASMO-449, BCONV4
EBCDIC
KOI-8R
KOI-8U
ISO-2022-JP
ISO-2022-KR
```

### Additional Mac OS encoding names

These names are alias names for encodings that Mac OS might know:

```
TIS-620, TIS620, TIS620-0, TIS620.2529-1, TIS620.2533-0, TIS620.2533-1, ISO-IR-166
CP874, WINDOWS-874
JP, JIS-C6220-1969-RO, ISO646-JP, ISO-IR-14
JIS-X0201, JISX0201-1976, X0201
JIS-X0208, JIS-X0208-1983, JIS-X0208-1990, JIS0208, X0208, ISO-IR-87
JIS-X0212, JIS-X0212.1990-0, JIS-X0212-1990, X0212, ISO-IR-159
CN, GB-1988-80, ISO646-CN, ISO-IR-57
ISO-IR-16, CN-GB-ISOIR165
KSC-5601, KS-C-5601-1987, KS-C-5601-1989, ISO-IR-149
EUC-CN, EUCCN, GB2312, CN-GB
EUC-TW, EUCTW, X-EUC-TW
```

### UNIX encodings

On UNIX, the File object checks for iconv library availability and uses whichever encodings are present there. For a special UNIX encoding, install an iconv encoding module that converts between UTF-16, the File object's internal format, and the desired encoding.

## File

### File Object

Provides a platform-independent representation of a local file-system file. Unless a member states otherwise, properties and methods automatically resolve file-system aliases and operate on the original file.

## File Object Constructors

### File Object — File Object Constructors

```
File ( [ path ] );    // Can return a Folder object
new File ([ path ] ); // Always returns a File object
```

Create a File object with either the File function or the new operator. The constructor accepts complete or partial path names and returns the created object.

The file's CRLF sequence starts as the system default, and encoding starts as the default system encoding.

Parameter

Type

Description

path

String

Optional. Platform-specific or URI-format absolute/relative path for the file associated with this object; see Specifying paths. The object stores it as an absolute path. The path may name a file that does not exist. If omitted, a temporary name is generated. When the path names an existing folder: - File returns a Folder object rather than File. - new returns a File object for a same-named file that does not exist.

Warning

In After Effects on MacOS, After Effects crashes if path.length is more than 1002.

Reports mention MacOS 10.11.6 with After Effects 13.8 and 14.0.

| --- | --- | --- |

## File Class Attributes

### File Object — File Class Attributes

This static property belongs to the File class, so an instance is not required before reading it.

### File.fs

File.fs

### Description

File-system name.

One of:

- Windows
- Macintosh
- Unix

### Type

String. Read only.

## File Class Methods

### File Object — File Class Methods

These static functions belong to the File class, so an instance is not required before calling them.

### File.decode()

File.decode(uri)

### Description

Decodes a string according to RFC 2396 requirements.

Characters needing escaping must be encoded in UTF-8 and stored as escaped characters that begin with percent sign followed by two hexadecimal digits. A special character is any character with numeric value greater than 127 except:

```
/ - _ . ! ~ * ' ( )
```

For example, "my%20file" decodes as "my
file".

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| uri | String | Encoded URI string. |

### Returns

String

### File.encode()

File.encode(name)

### Description

Encodes a string according to RFC 2396 requirements.

Special characters are encoded in UTF-8 and stored as escaped characters that begin with percent sign followed by two hexadecimal digits. For example, "my file" is encoded as "my%20file". A special character is any character with numeric value greater than 127 except:

```
/ - _ . ! ~ * ' ( )
```

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | String to encode. |

### Returns

String

### File.isEncodingAvailable()

File.isEncodingAvailable( name)

### Description

Reports whether a specified encoding is available.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| name | String | Encoding name. Examples include "ASCII", "binary", and "UTF-8"; see File- and Folder-supported encoding names. |

Boolean. true means the requested encoding is supported by the system; false means unsupported.

### File.openDialog()

File.openDialog([prompt="", filter="", multiSelect=false])

### Description

Shows the platform's native file-browsing dialog so the user can choose one or more existing files, then creates File objects for those selections.

### Parameters

Parameter

Type

Description

prompt

String

Optional. Prompt text, when the dialog supports a prompt.

filter

String or Function

Optional. Filter limiting which file types the dialog displays. In Windows, use a filter expression such as "JavaScript:_.jsx;All files:_.\*"

Tip

- Use semicolon (;) between expressions when one filter should include all listed types at once; (show jsx AND all)
- Use comma (,) between expressions to add separate choices to the filter dropdown, selecting one type at a time; (show jsx OR all)

In Mac OS, use a filter function that receives a File instance and returns true when that file should be displayed, or false when it should be excluded.

multiSelect

Boolean

Optional. When true, the user can select more than one file and the return value is an array. Default is false.

| --- | --- | --- |

### Returns

Returns one selected File, or an array of File Objects when the selection contains multiple files.

Returns null if the user cancels.

### File.saveDialog()

File.saveDialog(prompt[, preset=""])

### Description

Shows the platform's native file-browsing dialog so the user can choose where information should be saved, then creates a new File object for that location.

### Parameters

Parameter

Type

Description

prompt

String

A string containing prompt text, when the dialog supports a prompt.

filter

String or Function

Optional. Windows only. Filter limiting which file types the dialog displays. A filter expression, such as "JavaScript:_.jsx;All files:_.\*"

Tip

- Use semicolon (;) between expressions when one filter should include all listed types at once; (show jsx AND all)
- Use comma (,) between expressions to add separate choices to the filter dropdown, selecting one type at a time; (show jsx OR all)

| --- | --- | --- |

### Returns

Returns a File for the selected file location.

Returns null if the user cancels.

## File Object Attributes

### File Object — File Object Attributes

These properties are available for File objects.

### File.absoluteURI

fileObj.absoluteURI

### Description

Referenced file's complete URI-notation path.

### Type

String. Read only.

### File.alias

fileObj.alias

### Description

true when this object points at an alias or shortcut in the file system.

### Type

Boolean. Read only.

### File.created

fileObj.created

### Description

Creation date for the referenced file, or null when the object does not point to a disk file.

### Type

Date. Read only.

### File.creator

fileObj.creator

### Description

On Mac OS, the file creator as a four-character string. On Windows or UNIX, the value is "????".

### Type

String. Read only.

### File.displayName

fileObj.displayName

### Description

Localized name of the referenced file with the path removed.

### Type

String. Read only.

### File.encoding

fileObj.encoding

### Description

Gets or assigns the encoding for later read/write operations. Choose one of the constants in File- and Folder-supported encoding names.

Unrecognized values fall back to the system default encoding.

"BINARY" is a special encoder for reading binary files. It stores each file byte as one Unicode character without applying another encoding. When writing, the lower byte of each Unicode character is written as one byte.

### Type

String

### File.eof

fileObj.eof

### Description

true after a read leaves the current position at file end, or when the file is closed.

### Type

Boolean. Read only.

### File.error

fileObj.error

### Description

Message for the last file-system error; see File access error messages.

The file system usually sets this value, but scripts can assign it. Assignment clears any error message and resets the error bit for open files.

The empty string indicates that no error exists.

### Type

String

### File.exists

fileObj.exists

### Description

true when this object points to an existing file or file-system alias.

### Type

Boolean. Read only.

### File.fsName

fileObj.fsName

### Description

Referenced file's complete platform-native pathname.

### Type

String. Read only.

### File.fullName

fileObj.fullName

### Description

Referenced file's complete URI-notation path.

### Type

String. Read only.

### File.hidden

fileObj.hidden

### Description

true when the platform-specific file browser hides the file. Read/write. For a file-system alias or shortcut, the flag change applies to the alias rather than the original file.

### Type

Boolea

### File.length

fileObj.length

### Description

File size in bytes. This can be set only while the file is closed; setting it truncates the file or pads it with 0-bytes to reach the new length.

### Type

Number

### File.lineFeed

fileObj.lineFeed

### Description

Line-ending style used when File writes to disk.

One of:

- Windows - Windows style
- Macintosh - Mac OS style
- Unix - UNIX style

### Type

String

### File.localizedName

fileObj.localizedName

### Description

Localized file-name part of the referenced file's absolute URI, excluding the path.

### Type

String. Read only.

### File.modified

fileObj.modified

### Description

Last-modified date for the referenced file, or null when the object does not point to a disk file.

### Type

Date. Read only.

### File.name

fileObj.name

### Description

File-name part of the referenced file's absolute URI, excluding the path.

### Type

String. Read only.

### File.parent

fileObj.parent

### Description

Folder object for the folder containing this file.

### Type

Folder. Read only.

### File.path

fileObj.path

### Description

Path part of the referenced file's absolute URI, excluding the file name.

### Type

String. Read only.

### File.readonly

fileObj.readonly

### Description

true blocks changes to or deletion of this file. For a file-system alias or shortcut, the flag change applies to the alias rather than the original file.

### Type

Boolean

### File.relativeURI

fileObj.relativeURI

### Description

URI-notation path name for the referenced file from the current folder.

### Type

String. Read only.

### File.type

fileObj.type

### Description

File type as a four-character string.

- In Mac OS, the value is the Mac OS file type.
  - In Windows, .EXE files use "appl", .DLL files use "shlb", and all other files use "TEXT".

Missing files return "????".

### Type

String. Read only.

## File Object Methods

### File Object — File Object Methods

File objects provide these functions.

### File.changePath()

fileObj.changePath(path)

### Description

Changes the referenced file's path specification.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| path | String | Replacement path, either absolute or current-folder-relative. |

### Returns

Boolean. true on success.

### File.close()

fileObj.close()

### Description

Closes this file when it is open.

### Returns

Boolean. true on success, false if I/O errors occur.

### File.copy()

fileObj.copy(target)

### Description

Duplicates the file referenced by this object at target.

Aliases are resolved before locating the source file. A preexisting file at target is overwritten.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| target | String or File object | URI path for target, or a File object pointing at target. |

### Returns

Boolean. true if the copy succeeds; otherwise false.

### File.createAlias()

fileObj.createAlias( [path])

### Description

Turns this file into a file-system alias or shortcut to the specified file. The object must reference a disk path that is still absent.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| path | String | Path of the target file. |

### Returns

Boolean. true if the operation succeeds; otherwise false.

### File.execute()

fileObj.execute()

### Description

Opens this file with the appropriate application, as though it had been double-clicked in a file browser.

This method can launch applications, run scripts, and similar actions.

### Returns

Boolean. true immediately if the application launch succeeds.

### File.getRelativeURI()

fileObj.getRelativeURI([basePath])

### Description

Returns this file's URI in URI notation, calculated from the specified base path. Without basePath, the current folder path is the base.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| basePath | String | Optional. Base path string used to calculate the relative URI. The current folder is the default base. |

### Returns

String

### File.open()

fileObj.open(mode[, type][, creator])

### Description

Prepares the referenced file for later reading and writing. Alias references are resolved before locating the file.

The method tries to detect the encoding of the opened file. It reads a few bytes at the current location and looks for Byte Order Mark character 0xFFFE. If found, the current position advances past that character and encoding is set to one of UCS-2BE, UCS-2LE, UCS4-BE, UCS-4LE, or UTF-8. If no marker character is found, the method checks for zero bytes at the current location and guesses one of those formats except UTF-8. If all checks fail, encoding is set to the system encoding.

Warning

Use care when opening a file more than once. The operating system usually allows it, but writing to the file through two different File objects can destroy your data.

### Parameters

Parameter

Type

Description

mode

String

String selecting the read/write mode. One of: - r: (read) Opens for reading. The call fails when the file is missing or cannot be found. - w: (write) Opens for writing. Existing contents are destroyed; a missing file is created as a new, empty file. - e: (edit) Opens an existing file for both reading and writing. - a: (append) Opens in Append mode and places the current position at the file end.

type

String

Optional. Mac OS only: a 4-character type assigned to a newly created file. Windows and UNIX ignore it.

creator

String

Optional. Mac OS only: a 4-character creator assigned to a newly created file. Windows and UNIX ignore it.

| --- | --- | --- |

### Returns

Boolean. true if the file opened successfully; otherwise false.

### File.openDlg()

fileObj.openDlg([prompt=""][, filter=""][, multiSelect=false])

### Description

Displays the built-in platform-specific file-browsing dialog so the user can choose one or more existing files, then builds new File objects for those selections. Unlike the class method openDialog(), this object method starts in this File object's parent folder and preselects the file associated with this object.

### Parameters

Parameter

Type

Description

prompt

String

Optional. Prompt copy used when the dialog supports one.

filter

String or Function

Optional. Limits which file types appear in the dialog. On Windows, supply a filter expression such as "JavaScript:_.jsx;All files:_.\*"

Tip

- Use a semicolon (;) between expressions when all of those types should appear together; (show jsx AND all)
- Use a comma (,) to create separate filter-dropdown entries, picking one filter class per choice (show jsx OR all)

On Mac OS, use a filter function that receives a File instance and returns true to show that file, or false to hide it.

multiSelect

Boolean.

Optional. Set to true to let the user pick multiple files; the method then returns an array. The default is false.

| --- | --- | --- |

### Returns

Choosing OK returns a File or Folder object for the selection, or an array of those objects.

Canceling the dialog returns null.

### File.read()

fileObj.read([chars])

### Description

Reads file contents beginning at the current position.

The result is a string with no more than the requested number of characters.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| chars | Number | Optional. Integer count of characters to read. Without this argument, reading continues from the current position through the end of the file. Encoded files may require multiple bytes for one Unicode character. |

### Returns

String

### File.readch()

fileObj.readch()

### Description

Reads one text character from the current file position. Line endings can be CR, LF, CRLF, or LFCR pairs. Encoded files may use several bytes to form one Unicode character.

Returns the character as a string.

### Returns

String

### File.readln()

fileObj.readln()

### Description

Reads one line of text at the current file position and gives it back as a string. Line endings can be CR, LF, CRLF, or LFCR pairs. Encoded files may use several bytes to form one Unicode character.

Returns a string containing that line's text.

### Returns

String

### File.remove()

fileObj.remove()

### Description

Immediately removes from disk the file represented by this object, without sending it to the system trash.

Aliases are not resolved; the alias or shortcut file itself is deleted.

Warning

This cannot be reversed. Ask the user before performing the deletion.

### Returns

Boolean. true when the file is deleted successfully.

### File.rename()

fileObj.rename(newName)

### Description

Changes the name of the associated file.

Aliases are not resolved; the referenced alias or shortcut file itself is renamed.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| newName | String | New file name only; omit any path. |

### Returns

Boolean. true on success.

### File.resolve()

fileObj.resolve()

### Description

When this object points at an alias or shortcut, the method follows it and returns a new File object for the file-system element reached by that alias.

### Returns

A new File object; returns null when this object is not an alias reference or the alias cannot be resolved.

### File.saveDlg()

fileObj.saveDlg([prompt=""][, preset=""])

### Description

Displays the built-in platform-specific file-browsing dialog so the user can choose an existing save location, then creates a new File object for that choice.

Unlike the class method saveDialog(), this object method starts in this File object's parent folder and uses the file associated with this object.

### Parameters

Parameter

Type

Description

prompt

String

Optional. Prompt copy used when the dialog supports one.

filter

String or Function

Optional. Limits which file types appear in the dialog. On Windows, supply a filter expression such as "JavaScript:_.jsx;All files:_.\*"

Tip

- Use a semicolon (;) between expressions when all of those types should appear together; (show jsx AND all)
- Use a comma (,) to create separate filter-dropdown entries, picking one filter class per choice (show jsx OR all)

Not used in MacOS

| --- | --- | --- |

### Returns

Returns the File object that represents the chosen file.

Canceling the dialog returns null.

### File.seek()

fileObj.seek(pos[, mode=0])

### Description

Moves to the requested file position. The resulting position must stay within 0 and the current file size.

### Parameters

Parameter

Type

Description

pos

Number

Byte offset for the new current position, measured from the start, current position, or end according to mode.

mode

Number

Optional. Seek mode. Use 0 for an absolute position, where pos=0 refers to the first byte; this is the default. Use 1 to seek relative to the current position. Use 2 to seek backward from the end of the file.

| --- | --- | --- |

### Returns

Boolean. true when the position changed.

### File.tell()

fileObj.tell()

### Description

Gets the current byte-offset position, measured relative to byte 0.

### Returns

Number

### File.write()

fileObj.write( text[, text...]...)

### Description

Writes the supplied text at the current file position. With encoded files, one Unicode character can require multiple bytes.

Warning

Avoid writing to files that another application or object already has open, because existing data can be overwritten.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| text | String | One or more strings to write; the arguments are joined together before writing. |

### Returns

Boolean. true when writing succeeds.

### File.writeln()

fileObj.writeln (text[, text...]...)

### Description

Writes the supplied text at the current file position, then adds a Line Feed sequence using the style set by the linefeed property. With encoded files, one Unicode character can require multiple bytes.

Warning

Avoid writing to files that another application or object already has open, because existing data can be overwritten.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| text | String | One or more strings to write; the arguments are joined together before writing. |

### Returns

Boolean. true on success.
