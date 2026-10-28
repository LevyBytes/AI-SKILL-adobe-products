# Absolute and relative path names

In URI notation, an absolute path gives the complete route from a root directory to a specific file or folder. It begins with one or two slashes (/), and slashes separate the path elements.

For example, this path points absolutely to myFile.jsx:

Reference data, output or notation; not an executable JavaScript program.

```text
/dir1/dir2/mydir/myFile.jsx
```

URI-notation relative paths are resolved by appending them to the current directory path stored in the global Folder.current property. They begin with a folder or file name, dot (.) for the current directory, or dot dot (..) for its parent. A slash (/) separates path elements.

For example, these paths point to different relative locations for myFile.jsx:

| File reference | Location |
| --- | --- |
| myFile.jsx | In the current directory. |
| ./myFile.jsx |  |
| ../myFile.jsx | In the parent of the current directory. |
| ../../myFile.jsx | In the grandparent of the current directory. |
| ../dir1/myFile.jsx | In dir1, which is parallel to the current directory. |

Relative path names avoid volume names that vary by machine and operating system, making code much easier to move. One practical pattern is to use an absolute path only once, to set Folder.current, and then use relative paths for the rest of the operations. Moving to another platform or file location then requires only one code change.
