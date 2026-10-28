# readFileSync(path, options)

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
