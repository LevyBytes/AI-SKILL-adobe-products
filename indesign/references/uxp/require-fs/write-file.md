# writeFile(path, data, options, callback)

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
