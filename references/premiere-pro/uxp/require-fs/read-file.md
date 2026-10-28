# readFile(path, options, callback)

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
