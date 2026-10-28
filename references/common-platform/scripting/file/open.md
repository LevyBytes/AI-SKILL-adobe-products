# File.open()

fileObj.open(mode[, type][, creator])

### Description

Prepares the referenced file for later reading and writing. Alias references are resolved before locating the file.

The method tries to detect the encoding of the opened file. It reads a few bytes at the current location and looks for Byte Order Mark character 0xFFFE. If found, the current position advances past that character and encoding is set to one of UCS-2BE, UCS-2LE, UCS4-BE, UCS-4LE, or UTF-8. If no marker character is found, the method checks for zero bytes at the current location and guesses one of those formats except UTF-8. If all checks fail, encoding is set to the system encoding.

Warning

Use care when opening a file more than once. The operating system usually allows it, but writing to the file through two different File objects can destroy your data.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| mode | String | String selecting the read/write mode. One of: - r: (read) Opens for reading. The call fails when the file is missing or cannot be found. - w: (write) Opens for writing. Existing contents are destroyed; a missing file is created as a new, empty file. - e: (edit) Opens an existing file for both reading and writing. - a: (append) Opens in Append mode and places the current position at the file end. |
| type | String | Optional. Mac OS only: a 4-character type assigned to a newly created file. Windows and UNIX ignore it. |
| creator | String | Optional. Mac OS only: a 4-character creator assigned to a newly created file. Windows and UNIX ignore it. |

### Returns

Boolean. true if the file opened successfully; otherwise false.
