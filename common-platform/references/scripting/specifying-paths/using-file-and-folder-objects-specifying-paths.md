# Using File and Folder objects — Specifying paths

When you instantiate a File or Folder object, the path can be written in platform-specific form, or as an absolute or relative path in the platform-neutral universal resource identifier (URI) notation. The object stores a complete absolute path that points to a fixed location on disk.

- Call toString to get the file or folder name as a URI-notation absolute path string.
- Read fsName to get the platform-specific file name.
