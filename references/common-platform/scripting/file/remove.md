# File.remove()

fileObj.remove()

### Description

Immediately removes from disk the file represented by this object, without sending it to the system trash.

Aliases are not resolved; the alias or shortcut file itself is deleted.

Warning

This cannot be reversed. Ask the user before performing the deletion.

### Returns

Boolean. true when the file is deleted successfully.
