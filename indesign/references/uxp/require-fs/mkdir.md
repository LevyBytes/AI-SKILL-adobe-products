# mkdir(path, options, callback)

Creates the directory at the specified path asynchronously.

**Returns**: `Promise<number>` - returns 0 on success; otherwise an Error is thrown

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| path | `string` |  | location where the directory should be created |
| options | `_` |  |  |
| [options.recursive] | `boolean` | `false` | whether parent folders are created as needed |
| callback | `function` |  | leaving this argument out makes the call use a Promise result |

**Example**

```js
await fs.mkdir("plugin-data:/newDir");
```
