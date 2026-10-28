# writeFileSync(path, data, options)

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
