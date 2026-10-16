# Using File and Folder objects

Path-name rules differ sharply among Windows, Mac OS, and UNIX, so Adobe ExendScript supplies File and Folder objects as a platform-neutral layer over the file system. A File object denotes a disk file; a Folder object denotes a directory or folder.

- Folder provides file-system operations such as walking the hierarchy, creating, renaming, or removing files, and resolving file aliases.
- File provides input/output operations for reading from files or writing to them.

Scripts can tell File and Folder objects apart in several ways. Examples:

Use `f instanceof File` to distinguish a file object. A Folder does not expose the file-opening method, so `typeof f.open == "undefined"` also identifies that distinction in the illustrated context.

Where an API expects a path name for files or folders, a File or Folder object can be supplied, including in properties and arguments.

Note

Creating two File objects for the same disk file does not make them the same object. After one is opened for I/O, the operating system may block access through the other object because the underlying disk file is already open.
