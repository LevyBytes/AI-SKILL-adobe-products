# Mac OS volumes

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
