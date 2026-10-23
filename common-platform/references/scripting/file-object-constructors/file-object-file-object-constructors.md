# File Object - File Object Constructors

```javascript
File ( [ path ] );    // Can return a Folder object
new File ([ path ] ); // Always returns a File object
```

Create a File object with either the File function or the new operator. The constructor accepts complete or partial path names and returns the created object.

The file's CRLF sequence starts as the system default, and encoding starts as the default system encoding.

| Parameter | Type | Description |
| --- | --- | --- |
| path | String | Optional. Platform-specific or URI-format absolute/relative path for the file associated with this object; see Specifying paths. The object stores it as an absolute path. The path may name a file that does not exist. If omitted, a temporary name is generated. When the path names an existing folder: - File returns a Folder object rather than File. - new returns a File object for a same-named file that does not exist.<br><br>Warning<br><br>In After Effects on MacOS, After Effects crashes if path.length is more than 1002.<br><br>Reports mention MacOS 10.11.6 with After Effects 13.8 and 14.0. |
