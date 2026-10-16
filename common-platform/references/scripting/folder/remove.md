# Folder.remove()

folderObj.remove()

### Description

Immediately deletes from disk the empty folder represented by this object, without sending it to the system trash.

Folders have to be empty before deletion. Aliases are not resolved; the alias or shortcut file itself is deleted.

Note

This cannot be reversed. Ask the user before performing the deletion.

### Returns

Boolean. true when deletion succeeds.
