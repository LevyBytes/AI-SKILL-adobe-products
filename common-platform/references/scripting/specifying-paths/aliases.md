# Aliases

Accessing an alias transparently forwards the operation to the real file. Only rename and remove calls, plus changes to readonly and hidden, affect the alias itself. When a File object represents an alias, its alias property returns true, and resolve returns the File or Folder object for the alias target.

On Windows, file-system aliases are shortcuts, which are real files with names ending in .lnk. Do not use this extension directly; File and Folder objects handle it without the extension.

For example, suppose /folder2 contains a shortcut to /folder1/some.txt. The shortcut's full Windows file name is \folder2\some.txt.lnk.

To access the shortcut through a File object, specify /folder2/some.txt. Calling open on that File object opens the linked file in /folder1. Calling rename on the File object renames the shortcut file itself and leaves the .lnk extension intact.

Windows, however, allows a file and its shortcut to occupy the same folder. In that situation, the File object always reaches the original file. You cannot construct a File object that accesses the shortcut when it sits beside its linked file.

A script can make a file alias by first creating a File object for a path that does not yet exist on disk, then calling createAlias to provide the alias target.
