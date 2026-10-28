# Folder Object - Folder Object Constructors

```javascript
Folder( [path] ); // Can return a File object
new Folder( [path] ); // Always returns a Folder object
```

Create a Folder object with either the Folder function or the new operator. Full and partial path names are accepted, and the constructor returns the created object.

| Parameter | Type | Description |
| --- | --- | --- |
| path | String | Optional. Absolute or relative path for the Folder associated with this object, written in platform-specific or URI form; see Specifying paths. The object stores the absolute path. The path does not have to name an existing Folder. If omitted, a temporary name is produced. When the path resolves to an existing file: - The Folder function yields a File object instead of a File object. - The new operator yields a Folder object for a nonexisting folder with a matching name.<br><br>Warning<br><br>In After Effects on MacOS, path.length values greater than 1002 crash After Effects.<br><br>Affected reports cite MacOS 10.11.6 together with After Effects 13.8 and 14.0. |
