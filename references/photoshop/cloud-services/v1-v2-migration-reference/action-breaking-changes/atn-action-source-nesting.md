# .atn action source nesting

| V1 | V2 |
| --- | --- |
| `options.actions[].href` | `options.actions[].source.url` |
| `options.actions[].storage` | _(implicit from source field)_ |

V1 allowed only one action per request. V2 permits up to **10 actions** in sequence, including mixed `.atn` files and inline ActionJSON.
