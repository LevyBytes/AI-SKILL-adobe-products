# Fs, Os

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: require('fs'); Modules; require('os') — platform().

## require('fs')

UXP supplies FSAPI, a Node.js style file system API.
Unlike [Entry](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/modules/uxp/persistent-file-storage/entry.md)-based [File](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/modules/uxp/persistent-file-storage/file.md) and [Folder](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/reference/uxp-api/reference-js/modules/uxp/persistent-file-storage/folder.md) classes, these methods can reach local files or folders directly through a path or file descriptor.
The scheme determines where a native filesystem path begins.
For the path parameter, UXP recognizes plugin storage schemes such as "plugin:", "plugin-data:", and "plugin-temp:", along with the native "file:" scheme.

Note:

1. When an FSAPI method receives a path parameter without an explicit scheme, it treats that path as using the "file:" scheme.

2. [UWP](https://learn.microsoft.com/en-us/windows/uwp/get-started/universal-application-platform-guide)(Universal Windows Platform) enforces strict [File access permissions](https://learn.microsoft.com/en-us/windows/uwp/files/file-access-permissions), and anonymous filepaths may cause access problems for UXP FSAPI. For cross-platform compatibility, XD does not support this feature.

3. Except for UWP-powered features such as FilePicker and Drag&Drop on Win10 XD, the native UXP FSAPI layer is based on [libUV](https://libuv.org/).

### readFile(path, options, callback)

Asynchronously reads data at the specified path.
Use the encoding options to choose the file format.
Without an encoding value, the file is handled as binary data.

**Returns**: `Promise<string|ArrayBuffer>` - file contents

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | location of the file to read |
| options | `any` |  |
| [options.encoding] | `string` | file encoding; accepted values are "utf-8", "utf-16be", or "utf-16le" |
| callback | `function` | when omitted, the function returns a Promise object |

**Example**

```js
const data = await fs.readFile("plugin-data:/binaryFile.obj");
```

**Example**

```js
const text = await fs.readFile("plugin-data:/textFile.txt", { encoding: "utf-8" });
```

### readFileSync(path, options)

Synchronously reads data at the specified path.
Use the encoding options to choose the file format.
Without an encoding value, the file is handled as binary data.

**Returns**: `string` \| `ArrayBuffer` - file contents

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | location of the file to read |
| options | `any` |  |
| [options.encoding] | `string` | file encoding; accepted values are "utf-8", "utf-16be", or "utf-16le" |

**Example**

```js
const data = fs.readFileSync("plugin-data:/binaryFile.obj");
```

**Example**

```js
const text = fs.readFileSync("plugin-data:/textFile.txt", { encoding: "utf-8" });
```

### writeFile(path, data, options, callback)

Asynchronously writes data to the path, with optional appending behavior.
The encoding option determines the file format; binary output is the default.

**Returns**: `Promise<number>` - number of content units written to the file

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| path | `string` |  | location where the file is written |
| data | `string` \| `ArrayBuffer` \| `ArrayBufferView` |  | content to write into the file |
| options | `any` |  |  |
| [options.flag] | `number` \| `string` | `w` | see [file-system-flags](https://nodejs.org/api/fs.html#file-system-flags) in Node.js |
| [options.mode] | `number` \| `string` | `0o666` | see [File modes](https://nodejs.org/api/fs.html#file-modes) in Node.js |
| [options.encoding] | `string` |  | file encoding; accepted values are "utf-8", "utf-16be", or "utf-16le" |
| callback | `function` |  | when omitted, the function returns a Promise object |

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

Synchronously writes data to a path, with optional appending behavior.
The encoding option determines the file format; binary output is the default.

**Returns**: `number` - number of content units written to the file

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| path | `string` |  | location where the file is written |
| data | `string` \| `ArrayBuffer` \| `ArrayBufferView` |  | content to write into the file |
| options | `any` |  |  |
| [options.flag] | `number` \| `string` | `w` | see [file-system-flags](https://nodejs.org/api/fs.html#file-system-flags) in Node.js |
| [options.mode] | `number` \| `string` | `0o666` | see [File modes](https://nodejs.org/api/fs.html#file-modes) in Node.js |
| [options.encoding] | `string` |  | file encoding; accepted values are "utf-8", "utf-16be", or "utf-16le" |

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

Asynchronously opens or creates a file.

**Returns**: `Promise<number>` - fd(file descriptor)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| path | `string` |  | path used to open a file |
| [flag] | `number` \| `string` | `r` | see [file-system-flags](https://nodejs.org/api/fs.html#file-system-flags) in Node.js |
| [mode] | `number` \| `string` | `0o666` | see [File modes](https://nodejs.org/api/fs.html#file-modes) in Node.js |
| callback | `function` |  | when omitted, the function returns a Promise object |

**Example**

```js
const fd = await fs.open("plugin-data:/fileToRead.txt", "r");
```

### close(fd, callback)

Asynchronously closes a file descriptor.

**Returns**: `number` - 0 on success; otherwise, an Error is thrown

| Param | Type | Description |
| --- | --- | --- |
| fd | `number` | file descriptor for the file being closed |
| callback | `function` | when omitted, the function returns a Promise object |

**Example**

```js
await fs.close(fd);
```

### read(fd, buffer, offset, length, position, callback)

Reads chunked data from the file associated with the file descriptor.

**Returns**: `Promise<Object>` - \{ bytesRead: number, buffer: ArrayBuffer }  
**Throws**:

- `Error` when an invalid file descriptor is passed.
  when the parameter format or value is invalid.

| Param | Type | Description |
| --- | --- | --- |
| fd | `number` | file descriptor returned by fs.open |
| buffer | `ArrayBuffer` | buffer that receives the bytes read from the file |
| offset | `number` | position in the buffer where writing the read bytes begins |
| length | `number` | amount of data to read |
| position | `number` | file position to read from. A value of -1 uses the current file position; after bytes are read, the current file position advances by the number of bytes read. A value greater than or equal to 0 selects a file position for the read, and after the read, the current file position remains unchanged |
| callback | `function` | when omitted, the function returns a Promise object |

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

Writes chunked data through the supplied file descriptor.

**Returns**: `Promise<Object>` - \{ bytesWritten, buffer }  
**Throws**:

- `Error` when the file descriptor is not valid
- `Error` when an argument uses an invalid format or value

| Param | Type | Description |
| --- | --- | --- |
| fd | `number` | file descriptor returned by fs.open |
| buffer | `ArrayBuffer` | buffer that supplies the bytes to be written |
| offset | `number` | buffer offset where writing starts |
| length | `number` | number of bytes to write |
| position | `number` | target file position for the write. if -1, writing begins at the current file position. after bytes are written, the current file position advances by the written byte count. a value greater than or equal to 0 chooses that file position for the write. after that write completes, the current file position is unchanged |
| callback | `function` | leaving this argument out makes the call use a Promise result |

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

Fetches path metadata asynchronously for a file or folder.

**Returns**: `Promise<Object>` - refer to Node.js [Stats](https://nodejs.org/api/fs.html#class-fsstats)
Note: Platform limits can make some returned-object methods or properties unavailable.

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | location of the file whose information is requested |
| callback | `function` | leaving this argument out makes the call use a Promise result |

**Example**

```js
const stats = await fs.lstat("plugin-data:/textFile.txt");
const isFile = stats.isFile();
```

### lstatSync(path)

Fetches path metadata synchronously for a file or folder.

**Returns**: `Object` - refer to Node.js [Stats](https://nodejs.org/api/fs.html#class-fsstats)
Note: Platform limits can make some returned-object methods or properties unavailable.

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | location of the file whose information is requested |

**Example**

```js
const stats = fs.lstatSync("plugin-data:/textFile.txt");
const birthTime = stats.birthtime;
```

### rename(oldPath, newPath, callback)

Moves or renames the item from oldPath to newPath as needed.

**Returns**: `Promise<number>` - returns 0 on success; otherwise an Error is thrown

| Param | Type | Description |
| --- | --- | --- |
| oldPath | `string` | location containing the existing name to change |
| newPath | `string` | destination path for the new file name |
| callback | `function` | leaving this argument out makes the call use a Promise result |

**Example**

```js
fs.rename("plugin-data:/oldName.txt", "plugin-temp:/newName.txt");
```

### copyFile(srcPath, destPath, flags, callback)

Copies an item from its source path into the destination path.

**Returns**: `Promise<number>` - returns 0 on success; otherwise an Error is thrown

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| srcPath | `string` |  | location of the source file for copying |
| destPath | `string` |  | location where the copied source file is placed |
| flags | `number` | `0` | use the flags documented by [uv_fs_copyfile](https://docs.libuv.org/en/v1.x/fs.html) |
| callback | `function` |  | leaving this argument out makes the call use a Promise result |

**Example**

```js
const data = fs.copyFile("plugin-data:/copyFrom.txt", "plugin-temp:/copyTo.txt");
```

### unlink(path, callback)

Asynchronously removes the directory entry for the named file.

**Returns**: `Promise<number>` - returns 0 on success; otherwise an Error is thrown

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | location of the file to delete |
| callback | `function` | leaving this argument out makes the call use a Promise result |

**Example**

```js
await fs.unlink("plugin-data:/fileToDelete.txt");
```

### mkdir(path, options, callback)

Creates the directory at the specified path asynchronously.

**Returns**: `Promise<number>` - returns 0 on success; otherwise an Error is thrown

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| path | `string` |  | location where the directory should be created |
| options | `*` |  |  |
| [options.recursive] | `boolean` | `false` | whether parent folders are created as needed |
| callback | `function` |  | leaving this argument out makes the call use a Promise result |

**Example**

```js
await fs.mkdir("plugin-data:/newDir");
```

### rmdir(path, callback)

Asynchronously removes a directory.

**Returns**: `Promise<number>` - returns 0 on success; otherwise an Error is thrown

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | directory location to remove |
| callback | `function` | leaving this argument out makes the call use a Promise result |

**Example**

```js
await fs.rmdir("plugin-data:/dirToRemove");
```

### readdir(path, callback)

Reads a directory asynchronously and returns its contained file and directory names.

**Returns**: `Promise<Array<string>>` - string array listing the files and directories found at the path

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | directory location to read |
| callback | `function` | leaving this argument out makes the call use a Promise result |

**Example**

```js
const paths = await fs.readdir("plugin-data:/dirToRead");
```

### readdirSync(path)

Reads a directory synchronously and returns its contained file and directory names.

**Returns**: `Array<string>` - string array listing the files and directories found at the path

| Param | Type | Description |
| --- | --- | --- |
| path | `string` | directory location to read |

**Example**

```js
const paths = fs.readdirSync("plugin-data:/dirToRead");
```

## Modules

- [fs](uxp-modules.md)
- [os](uxp-modules.md)
- [uxp](uxp.md)

## require('os') — platform()

Reports the active platform, for example "win32", "win10", or "darwin".

**Returns**: `string` - string value that names the platform

### require('os') — release()

Reports the operating-system release number, for example "10.0.1.1032".

**Returns**: `string` - string value that names the release

### require('os') — arch()

Reports the active platform architecture, for example "x32, x64, x86_64 etc".

**Returns**: `string` - string value that names the architecture

### require('os') — cpus()

Reports CPU details for the current platform, for example "\{'Intel(R) Core(TM) i9-8950HK CPU @ 2.90GHz', 2900}".

**Returns**: `array` - array of objects with details for each logical CPU core
Only the model and speed properties are currently supported. the times property is unsupported.
On UWP, access to CPU details such as the model string and frequency is limited.
For UWP, the 'model' value is returned as "ARM based architecture" or "X86 based architecture".
For UWP, the 'speed' value is returned as 0.

### require('os') — totalmem()

Reports total system memory, measured in bytes.

**Returns**: `integer` - integer value for total system memory in bytes

### require('os') — freemem()

Reports total free system memory, measured in bytes.

**Returns**: `integer` - integer value for total free system memory in bytes

### require('os') — homedir()

Reports the user's home directory path.

**Returns**: `string` - user's home directory path
