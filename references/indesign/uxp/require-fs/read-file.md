# readFile(path, options, callback)

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
