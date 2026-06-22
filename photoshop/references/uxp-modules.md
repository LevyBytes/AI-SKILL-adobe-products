# Fs, Os

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: require('fs'); Modules; require('os') — platform().

## require('fs')

FSAPI is UXP's Node.js-style file system API.
Compared with [Entry](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/modules/uxp/persistent-file-storage/entry.md)-based [File](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/modules/uxp/persistent-file-storage/file.md) and [Folder](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/modules/uxp/persistent-file-storage/folder.md) classes, FSAPI methods can reach a local file or folder directly by path or file descriptor.
The scheme determines where a native filesystem path begins.
For the path parameter, UXP accepts plugin-scoped schemes such as "plugin:", "plugin-data:", and "plugin-temp:", plus the native "file:" scheme.

Note:

1. When an FSAPI path parameter omits a scheme, FSAPI treats the path as if it used the "file:" scheme.

2. [UWP](https://learn.microsoft.com/en-us/windows/uwp/get-started/universal-application-platform-guide)(Universal Windows Platform) applies restrictive [File access permissions](https://learn.microsoft.com/en-us/windows/uwp/files/file-access-permissions), and anonymous filepaths can therefore cause UXP FSAPI access problems. For cross-platform compatibility, XD does not support this feature.

3. Except for UWP-powered features such as FilePicker and Drag&Drop on Win10 XD, UXP FSAPI's native layer is built on [libUV](https://libuv.org/).

### readFile(path, options, callback)

Asynchronously reads data at `path`.
Use `options.encoding` to choose the file's text format.
Without an encoding value, the data is treated as binary.

**Returns**: `Promise<string|ArrayBuffer>` - data read from the file

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | location of the file to read |
| options | `any` |  |
| [options.encoding] | `string` | file encoding; accepted values are "utf-8", "utf-16be" or "utf-16le" |
| callback | `function` | when omitted, this function returns a Promise object |

**Example**

```js
const data = await fs.readFile("plugin-data:/binaryFile.obj");
```

**Example**

```js
const text = await fs.readFile("plugin-data:/textFile.txt", { encoding: "utf-8" });
```

### readFileSync(path, options)

Synchronously reads data at `path`.
Use `options.encoding` to choose the file's text format.
Without an encoding value, the data is treated as binary.

**Returns**: `string` \| `ArrayBuffer` - data read from the file

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | location of the file to read |
| options | `any` |  |
| [options.encoding] | `string` | file encoding; accepted values are "utf-8", "utf-16be" or "utf-16le" |

**Example**

```js
const data = fs.readFileSync("plugin-data:/binaryFile.obj");
```

**Example**

```js
const text = fs.readFileSync("plugin-data:/textFile.txt", { encoding: "utf-8" });
```

### writeFile(path, data, options, callback)

Asynchronously writes `data` to `path`; use options when append-style behavior is needed.
`options.encoding` controls the file format, with binary used by default.

**Returns**: `Promise<number>` - length of the contents written to the file

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| path | `string` |  | location of the file to write |
| data | `string` \| `ArrayBuffer` \| `ArrayBufferView` |  | content to write into the file |
| options | `any` |  |  |
| [options.flag] | `number` \| `string` | `w` | see [file-system-flags](https://nodejs.org/api/fs.html#file-system-flags) in Node.js |
| [options.mode] | `number` \| `string` | `0o666` | see [File modes](https://nodejs.org/api/fs.html#file-modes) in Node.js |
| [options.encoding] | `string` |  | file encoding; accepted values are "utf-8", "utf-16be" or "utf-16le" |
| callback | `function` |  | when omitted, this function returns a Promise object |

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

Synchronously writes `data` to `path`; use options when append-style behavior is needed.
`options.encoding` controls the file format, with binary used by default.

**Returns**: `number` - length of the contents written to the file

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| path | `string` |  | location of the file to write |
| data | `string` \| `ArrayBuffer` \| `ArrayBufferView` |  | content to write into the file |
| options | `any` |  |  |
| [options.flag] | `number` \| `string` | `w` | see [file-system-flags](https://nodejs.org/api/fs.html#file-system-flags) in Node.js |
| [options.mode] | `number` \| `string` | `0o666` | see [File modes](https://nodejs.org/api/fs.html#file-modes) in Node.js |
| [options.encoding] | `string` |  | file encoding; accepted values are "utf-8", "utf-16be" or "utf-16le" |

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

Asynchronously opens a file or creates one when the selected flags allow it.

**Returns**: `Promise<number>` - fd(file descriptor)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| path | `string` |  | location of the file to open |
| [flag] | `number` \| `string` | `r` | see [file-system-flags](https://nodejs.org/api/fs.html#file-system-flags) in Node.js |
| [mode] | `number` \| `string` | `0o666` | see [File modes](https://nodejs.org/api/fs.html#file-modes) in Node.js |
| callback | `function` |  | when omitted, this function returns a Promise object |

**Example**

```js
const fd = await fs.open("plugin-data:/fileToRead.txt", "r");
```

### close(fd, callback)

Performs an asynchronous close operation for the supplied descriptor.

**Returns**: `number` - 0 if succeeded, otherwise throws an Error

| Param | Type | Description |
| --- | --- | --- |
| fd | `number` | file descriptor for the file being closed |
| callback | `function` | omitting callback makes the call return a `Promise` |

**Example**

```js
await fs.close(fd);
```

### read(fd, buffer, offset, length, position, callback)

Uses the supplied file descriptor to read file data a chunk at a time.

**Returns**: `Promise<Object>` - \{ bytesRead: number, buffer: ArrayBuffer }  
**Throws**:

- `Error` if invalid file descriptor is passed.
  if invalid parameter format or value is passed.

| Param | Type | Description |
| --- | --- | --- |
| fd | `number` | file descriptor returned by fs.open |
| buffer | `ArrayBuffer` | target buffer that receives the bytes read from the file |
| offset | `number` | buffer offset where copied bytes begin |
| length | `number` | number of bytes requested |
| position | `number` | file offset to read from. `-1` uses the current file position; after bytes are read, that position advances by the number of bytes read. A value greater than or equal to `0` selects an explicit file position, and after the read the current file position remains unchanged |
| callback | `function` | omitting callback makes the call return a `Promise` |

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

Uses the supplied file descriptor to write file data a chunk at a time.

**Returns**: `Promise<Object>` - \{ bytesWritten, buffer }  
**Throws**:

- `Error` if invalid file descriptor is passed
  if invalid parameter format or value is passed

| Param | Type | Description |
| --- | --- | --- |
| fd | `number` | file descriptor returned by fs.open |
| buffer | `ArrayBuffer` | buffer containing the data to write |
| offset | `number` | buffer offset where bytes to write begin |
| length | `number` | number of bytes to write |
| position | `number` | file position used for writing. `-1` starts at the current file position; after bytes are written, that position advances by the written byte count. A value greater than or equal to `0` selects an explicit file position, and writing there does not change the current file position |
| callback | `function` | omitting callback makes the call return a `Promise` |

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

Asynchronously retrieves information about the file or folder at the specified location.

**Returns**: `Promise<Object>` - see [Stats](https://nodejs.org/api/fs.html#class-fsstats) class in Node.js
Note: Platform limits can leave some methods or properties unsupported on the returned object.

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | location of the file whose information should be retrieved |
| callback | `function` | omitting callback makes the call return a `Promise` |

**Example**

```js
const stats = await fs.lstat("plugin-data:/textFile.txt");
const isFile = stats.isFile();
```

### lstatSync(path)

Synchronously retrieves information about the file or folder at the specified location.

**Returns**: `Object` - see [Stats](https://nodejs.org/api/fs.html#class-fsstats) class in Node.js
Note: Platform limits can leave some methods or properties unsupported on the returned object.

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | location of the file whose information should be retrieved |

**Example**

```js
const stats = fs.lstatSync("plugin-data:/textFile.txt");
const birthTime = stats.birthtime;
```

### rename(oldPath, newPath, callback)

Changes a file name, or moves the file when oldPath and newPath require it.

**Returns**: `Promise<number>` - 0 if succeeded, otherwise throws an Error

| Param | Type | Description |
| --- | --- | --- |
| oldPath | `string` | location of the file whose current name will change |
| newPath | `string` | target path for the new file name |
| callback | `function` | omitting callback makes the call return a `Promise` |

**Example**

```js
fs.rename("plugin-data:/oldName.txt", "plugin-temp:/newName.txt");
```

### copyFile(srcPath, destPath, flags, callback)

Copies a file or folder from one supplied location into another supplied location.

**Returns**: `Promise<number>` - 0 if succeeded, otherwise throws an Error

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| srcPath | `string` |  | location of the source file to copy |
| destPath | `string` |  | target location where the source file is copied |
| flags | `number` | `0` | see flags in [uv_fs_copyfile](https://docs.libuv.org/en/v1.x/fs.html) |
| callback | `function` |  | omitting callback makes the call return a `Promise` |

**Example**

```js
const data = fs.copyFile("plugin-data:/copyFrom.txt", "plugin-temp:/copyTo.txt");
```

### unlink(path, callback)

Asynchronously removes the named file entry and the file it references.

**Returns**: `Promise<number>` - 0 if succeeded, otherwise throws an Error

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | location of the file that should be deleted |
| callback | `function` | omitting callback makes the call return a `Promise` |

**Example**

```js
await fs.unlink("plugin-data:/fileToDelete.txt");
```

### mkdir(path, options, callback)

Asynchronously creates a directory at the given path.

**Returns**: `Promise<number>` - 0 if succeeded, otherwise throws an Error

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| path | `string` |  | location where the directory should be created |
| options | `*` |  |  |
| [options.recursive] | `boolean` | `false` | whether parent folders should also be created |
| callback | `function` |  | omitting callback makes the call return a `Promise` |

**Example**

```js
await fs.mkdir("plugin-data:/newDir");
```

### rmdir(path, callback)

Asynchronously removes a directory.

**Returns**: `Promise<number>` - 0 if succeeded, otherwise throws an Error

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | directory location to remove |
| callback | `function` | omitting callback makes the call return a `Promise` |

**Example**

```js
await fs.rmdir("plugin-data:/dirToRemove");
```

### readdir(path, callback)

Asynchronously reads a directory and returns the names of contained files and folders.

**Returns**: `Promise<Array<string>>` - string entries for files and directories found in the path

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | directory location to read |
| callback | `function` | omitting callback makes the call return a `Promise` |

**Example**

```js
const paths = await fs.readdir("plugin-data:/dirToRead");
```

### readdirSync(path)

Synchronously reads a directory and returns the names of contained files and folders.

**Returns**: `Array<string>` - string entries for files and directories found in the path

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | directory location to read |

**Example**

```js
const paths = fs.readdirSync("plugin-data:/dirToRead");
```

## Modules

- [fs](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/modules/fs/index.md)
- [os](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/modules/os/index.md)
- [uxp](uxp.md)

## require('os') — platform()

Returns the platform value for the current runtime (eg. "win32", "win10", "darwin").

**Returns**: `string` - the string representing the platform

### require('os') — release()

Provides the os release value (eg. "10.0.1.1032").

**Returns**: `string` - the string representing the release

### require('os') — arch()

Reports the architecture for the current platform (eg. "x32, x64, x86_64 etc").

**Returns**: `string` - the string representing the architecture

### require('os') — cpus()

Provides CPU information for the platform running the plugin. Example CPU tuple: "\{'Intel(R) Core(TM) i9-8950HK CPU @ 2.90GHz', 2900}".

**Returns**: `array` - objects describing each logical CPU core
Only `model` and `speed` are currently available; `times` is not supported.
On UWP, CPU details such as model string and frequency have limited access.
For UWP, the `model` value is returned as "ARM based architecture" or "X86 based architecture".
On UWP, `speed` returns 0.

### require('os') — totalmem()

Reports total system memory, measured in bytes.

**Returns**: `integer` - integer total for system memory in bytes

### require('os') — freemem()

Reports currently free system memory, measured in bytes.

**Returns**: `integer` - integer value for free system memory in bytes

### require('os') — homedir()

Provides the user's home directory path.

**Returns**: `string` - path for the user's home directory
