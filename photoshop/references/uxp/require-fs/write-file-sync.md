# writeFileSync(path, data, options)

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
