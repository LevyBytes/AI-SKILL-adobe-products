# `clipboard`

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `clipboard` | `"read"` or `"readAndWrite"` | optional | `undefined` |

`clipboard` grants clipboard capability to the plugin. Additional examples are available in the [clipboard recipe](../clipboard-operations/reference-index.md).

- `read`: grants read access to clipboard contents.
- `readAndWrite`: grants both clipboard reading and clipboard writing.

If unset, the value is `undefined`, which means no clipboard access.
