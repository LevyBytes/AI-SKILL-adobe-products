# Fs, Os

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: require('fs'); Modules; require('os') — platform().

## require('fs')

UXP includes FSAPI, a Node.js style file system API.
Compared with the [Entry](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/uxp/persistent-file-storage/entry.md), [File](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/uxp/persistent-file-storage/file.md), or [Folder](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/uxp/persistent-file-storage/folder.md) classes,
these methods can reach a local file or folder directly when given a path or file descriptor.
The scheme determines where a native filesystem path begins.
For the path parameter, UXP accepts plugin-specific storage schemes such as "plugin:", "plugin-data:",
and "plugin-temp:", plus the native "file:" scheme.

Note:

1. When a FSAPI method receives a path parameter with no scheme, UXP treats the path as using the "file:" scheme.

2. [UWP](https://learn.microsoft.com/en-us/windows/uwp/get-started/universal-application-platform-guide)(Universal Windows Platform)
   enforces strict [File access permissions](https://learn.microsoft.com/en-us/windows/uwp/files/file-access-permissions),
   and UXP FSAPI can run into access issues with anonymous filepaths. For cross-platform compatibility, XD does not support this feature.

3. Except for UWP powered features such as FilePicker and Drag&Drop on Win10 XD, the native layer of UXP FSAPI builds on [libUV](https://libuv.org/).

### readFile(path, options, callback)

Reads the file at `path` without blocking.
Use `options.encoding` to choose the text format.
Without an encoding value, the file is handled as binary.

**Returns**: `Promise<string|ArrayBuffer>` - data read from the file

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | location of the file to read |
| options | `any` |  |
| [options.encoding] | `string` | text encoding to use; valid values are "utf-8", "utf-16be" or "utf-16le" |
| callback | `function` | leave out this argument to get a Promise |

**Example**

```js
const data = await fs.readFile("plugin-data:/binaryFile.obj");
```

**Example**

```js
const text = await fs.readFile("plugin-data:/textFile.txt", { encoding: "utf-8" });
```

### readFileSync(path, options)

Reads the file at `path` on the current thread.
Use `options.encoding` to select the text format.
When no encoding is supplied, the API treats the file as binary.

**Returns**: `string` \| `ArrayBuffer` - data read from the file

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | location of the file to read |
| options | `any` |  |
| [options.encoding] | `string` | text encoding to use; valid values are "utf-8", "utf-16be" or "utf-16le" |

**Example**

```js
const data = fs.readFileSync("plugin-data:/binaryFile.obj");
```

**Example**

```js
const text = fs.readFileSync("plugin-data:/textFile.txt", { encoding: "utf-8" });
```

### writeFile(path, data, options, callback)

Writes `data` to `path` asynchronously and can append depending on options.
`options.encoding` controls text serialization; if omitted, the operation uses binary output.

**Returns**: `Promise<number>` - amount of content written to the file

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| path | `string` |  | destination path for the file write |
| data | `string` \| `ArrayBuffer` \| `ArrayBufferView` |  | value written into the file |
| options | `any` |  |  |
| [options.flag] | `number` \| `string` | `w` | Node.js [file-system-flags](https://nodejs.org/api/fs.html#file-system-flags) reference |
| [options.mode] | `number` \| `string` | `0o666` | Node.js [File modes](https://nodejs.org/api/fs.html#file-modes) reference |
| [options.encoding] | `string` |  | text encoding to use; valid values are "utf-8", "utf-16be" or "utf-16le" |
| callback | `function` |  | leave out this argument to get a Promise |

**Example**

```js
const bufLen = await fs.writeFile("plugin-data:/binaryFile.obj", new Uint8Array([1, 2, 3]));
```

**Example**

```js
const strLen = await fs.writeFile(
  "plugin-data:/textFile.txt",
  "It was a dark and stormy night.\n",
  { encoding: "utf-8" },
);
```

### writeFileSync(path, data, options)

Writes `data` to `path` synchronously and can append depending on options.
`options.encoding` controls text serialization; if omitted, the operation uses binary output.

**Returns**: `number` - amount of content written to the file

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| path | `string` |  | destination path for the file write |
| data | `string` \| `ArrayBuffer` \| `ArrayBufferView` |  | value written into the file |
| options | `any` |  |  |
| [options.flag] | `number` \| `string` | `w` | Node.js [file-system-flags](https://nodejs.org/api/fs.html#file-system-flags) reference |
| [options.mode] | `number` \| `string` | `0o666` | Node.js [File modes](https://nodejs.org/api/fs.html#file-modes) reference |
| [options.encoding] | `string` |  | text encoding to use; valid values are "utf-8", "utf-16be" or "utf-16le" |

**Example**

```js
const bufLen = fs.writeFileSync("plugin-data:/binaryFile.obj", new Uint8Array([1, 2, 3]));
```

**Example**

```js
const strLen = fs.writeFileSync("plugin-data:/textFile.txt", "It was a dark and stormy night.\n", {
  encoding: "utf-8",
});
```

### open(path, [flag], [mode], callback)

Asynchronously opens a file, creating it when the supplied flag permits creation.

**Returns**: `Promise<number>` - fd(file descriptor)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| path | `string` |  | file path to open |
| [flag] | `number` \| `string` | `r` | Node.js [file-system-flags](https://nodejs.org/api/fs.html#file-system-flags) reference |
| [mode] | `number` \| `string` | `0o666` | Node.js [File modes](https://nodejs.org/api/fs.html#file-modes) reference |
| callback | `function` |  | leave out this argument to get a Promise |

**Example**

```js
const fd = await fs.open("plugin-data:/fileToRead.txt", "r");
```

### close(fd, callback)

Closes a file descriptor asynchronously.

**Returns**: `number` - 0 on success; otherwise throws an Error

| Param | Type | Description |
| --- | --- | --- |
| fd | `number` | file descriptor for the file to close |
| callback | `function` | leave out this argument to get a Promise |

**Example**

```js
await fs.close(fd);
```

### read(fd, buffer, offset, length, position, callback)

Reads file data in chunks through the supplied file descriptor.

**Returns**: `Promise<Object>` - \{ bytesRead: number, buffer: ArrayBuffer }  
**Throws**:

- `Error` when an invalid file descriptor is passed.
- `Error` when a parameter has an invalid format or value.

| Param | Type | Description |
| --- | --- | --- |
| fd | `number` | file descriptor returned by fs.open |
| buffer | `ArrayBuffer` | ArrayBuffer that receives the bytes read |
| offset | `number` | buffer offset at which read bytes are written |
| length | `number` | number of bytes to read |
| position | `number` | file position where reading begins. Use `-1` to read from the current file position; after bytes are read, that position advances by the read size. A value greater than or equal to `0` selects an explicit file position, and the current file position remains unchanged after reading. |
| callback | `function` | leave out this argument to get a Promise |

**Example**

```js
const fileSize = 1024;
const buffer = new ArrayBuffer(fileSize);
const fd = await fs.open("plugin-data:/fileToRead.txt", "r");
let bytesReadInTotal = 0;
while (bytesReadInTotal < fileSize) {
  const { bytesRead } = await fs.read(fd, buffer, bytesReadInTotal, 128, -1);
  if (!bytesRead) {
    break;
  }
  bytesReadInTotal += bytesRead;
}
await fs.close(fd);
```

### write(fd, buffer, offset, length, position, callback)

Writes file data in chunks through the supplied file descriptor.

**Returns**: `Promise<Object>` - \{ bytesWritten, buffer }  
**Throws**:

- `Error` when an invalid file descriptor is passed.
- `Error` when a parameter has an invalid format or value.

| Param | Type | Description |
| --- | --- | --- |
| fd | `number` | file descriptor returned by fs.open |
| buffer | `ArrayBuffer` | ArrayBuffer containing data to write |
| offset | `number` | buffer offset where written bytes begin |
| length | `number` | number of bytes to write |
| position | `number` | file position where writing begins. Use `-1` to write at the current file position; after bytes are written, that position advances by the written size. A value greater than or equal to `0` selects an explicit file position, and writing there does not change the current file position. |
| callback | `function` | leave out this argument to get a Promise |

**Example**

```js
const fd = await fs.open("plugin-data:/fileToWrite.txt", "w+");
const data = "It was a dark and stormy night.\n";
const srcBuffer = new Uint8Array(data.length);
for (let i = 0; i < data.length; i++) {
  srcBuffer[i] = data.charCodeAt(i);
}
const { bytesWritten } = await fs.write(fd, srcBuffer.buffer, 0, srcBuffer.length, 0);
await fs.close(fd);
```

### lstat(path, callback)

Asynchronously retrieves information for the file or folder at `path`.

**Returns**: `Promise<Object>` - Node.js [Stats](https://nodejs.org/api/fs.html#class-fsstats) class
Note: Platform limitations may leave some methods or properties unsupported on the returned object.

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | location of the file or folder to inspect |
| callback | `function` | leave out this argument to get a Promise |

**Example**

```js
const stats = await fs.lstat("plugin-data:/textFile.txt");
const isFile = stats.isFile();
```

### lstatSync(path)

Synchronously retrieves information for the file or folder at `path`.

**Returns**: `Object` - Node.js [Stats](https://nodejs.org/api/fs.html#class-fsstats) class
Note: Platform limitations may leave some methods or properties unsupported on the returned object.

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | location of the file or folder to inspect |

**Example**

```js
const stats = fs.lstatSync("plugin-data:/textFile.txt");
const birthTime = stats.birthtime;
```

### rename(oldPath, newPath, callback)

Renames the item at `oldPath` or moves it to `newPath` when needed.

**Returns**: `Promise<number>` - 0 on success; otherwise throws an Error

| Param | Type | Description |
| --- | --- | --- |
| oldPath | `string` | current path of the file name to change |
| newPath | `string` | path where the new file name should be placed |
| callback | `function` | leave out this argument to get a Promise |

**Example**

```js
fs.rename("plugin-data:/oldName.txt", "plugin-temp:/newName.txt");
```

### copyFile(srcPath, destPath, flags, callback)

Copies a file or folder from `srcPath` to `destPath`.

**Returns**: `Promise<number>` - 0 on success; otherwise throws an Error

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| srcPath | `string` |  | source path for the file to copy |
| destPath | `string` |  | destination path for the copied file |
| flags | `number` | `0` | use the [uv_fs_copyfile](https://docs.libuv.org/en/v1.x/fs.html) flags |
| callback | `function` |  | leave out this argument to get a Promise |

**Example**

```js
const data = fs.copyFile("plugin-data:/copyFrom.txt", "plugin-temp:/copyTo.txt");
```

### unlink(path, callback)

Deletes a name and the file it references asynchronously.

**Returns**: `Promise<number>` - 0 on success; otherwise throws an Error

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | location of the file to delete |
| callback | `function` | leave out this argument to get a Promise |

**Example**

```js
await fs.unlink("plugin-data:/fileToDelete.txt");
```

### mkdir(path, options, callback)

Asynchronously creates the directory at `path`.

**Returns**: `Promise<number>` - 0 on success; otherwise throws an Error

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| path | `string` |  | directory path to create |
| options | `*` |  |  |
| [options.recursive] | `boolean` | `false` | whether parent folders should also be created |
| callback | `function` |  | leave out this argument to get a Promise |

**Example**

```js
await fs.mkdir("plugin-data:/newDir");
```

### rmdir(path, callback)

Removes a directory asynchronously.

**Returns**: `Promise<number>` - 0 on success; otherwise throws an Error

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | directory path to remove |
| callback | `function` | leave out this argument to get a Promise |

**Example**

```js
await fs.rmdir("plugin-data:/dirToRemove");
```

### readdir(path, callback)

Asynchronously scans a directory and reports the files and subdirectories it contains.

**Returns**: `Promise<Array<string>>` - array of `string` entries for files and directories found at the path

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | directory path to read |
| callback | `function` | when omitted, the call returns a Promise object |

**Example**

```js
const paths = await fs.readdir("plugin-data:/dirToRead");
```

### readdirSync(path)

Synchronously scans a directory and reports the files and subdirectories it contains.

**Returns**: `Array<string>` - array of `string` entries for files and directories found at the path

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | directory path to read |

**Example**

```js
const paths = fs.readdirSync("plugin-data:/dirToRead");
```

## Modules

- [fs](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/fs/index.md)
- [os](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/uxp-api/reference-js/modules/os/index.md)
- [uxp](uxp.md)

## require('os') — platform()

Reports the platform that the runtime is using (eg. "win32", "win10", "darwin")

**Returns**: `string` - string value for the platform

### require('os') — release()

Reports the operating system release value (eg. "10.0.1.1032")

**Returns**: `string` - string value for the release

### require('os') — arch()

Reports the active platform architecture (eg. "x32, x64, x86_64 etc")

**Returns**: `string` - string value for the architecture

### require('os') — cpus()

Returns CPU details for the current platform (eg. "\{'Intel(R) Core(TM) i9-8950HK CPU @ 2.90GHz', 2900}")

**Returns**: `array` - array of objects with details for each logical CPU core
At present, only the model and speed properties are available; the times property is unavailable.
On UWP, CPU details such as model string and frequency have limited availability.
For UWP, the 'model' value is reported as "ARM based architecture" or "X86 based architecture".
For UWP, the 'speed' value is reported as 0.

### require('os') — totalmem()

Reports total system memory in bytes.

**Returns**: `integer` - total system memory in bytes, represented as an integer

### require('os') — freemem()

Reports free system memory in bytes.

**Returns**: `integer` - free system memory in bytes, represented as an integer

### require('os') — homedir()

Reports the path to the user's home directory.

**Returns**: `string` - user home directory path
