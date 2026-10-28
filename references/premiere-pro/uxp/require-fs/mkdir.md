# mkdir(path, options, callback)

Asynchronously creates the directory at `path`.

**Returns**: `Promise<number>` - 0 on success; otherwise throws an Error

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| path | `string` |  | directory path to create |
| options | `_` |  |  |
| [options.recursive] | `boolean` | `false` | whether parent folders should also be created |
| callback | `function` |  | leave out this argument to get a Promise |

**Example**

```js
await fs.mkdir("plugin-data:/newDir");
```
