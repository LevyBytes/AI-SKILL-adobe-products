# Folder.error

folderObj.error

### Description

Message for the latest file-system error; see File access error messages.

The file system usually sets this value, but scripts may assign it too. Assigning a value clears any stored error message and resets the error bit for opened files. When no error exists, the value is an empty string.

### Type

String
