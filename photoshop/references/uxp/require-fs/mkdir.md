# mkdir(path, options, callback)

Asynchronously creates a directory at the given path.

**Returns**: `Promise<number>` - 0 if succeeded, otherwise throws an Error

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| path | `string` |  | location where the directory should be created |
| options | `_` |  |  |
| [options.recursive] | `boolean` | `false` | whether parent folders should also be created |
| callback | `function` |  | omitting callback makes the call return a `Promise` |

**Example**

```js
await fs.mkdir("plugin-data:/newDir");
```
