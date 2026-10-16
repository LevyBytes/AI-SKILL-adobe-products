# File.error

fileObj.error

### Description

Message for the last file-system error; see File access error messages.

The file system usually sets this value, but scripts can assign it. Assignment clears any error message and resets the error bit for open files.

The empty string indicates that no error exists.

### Type

String
