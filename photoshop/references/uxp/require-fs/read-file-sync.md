# readFileSync(path, options)

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
