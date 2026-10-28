# `preferredDockedSize` and `preferredFloatingSize`

| Name | Type | Required |
| --- | --- | --- |
| `preferredDockedSize` | `{ width: number, height: number }` | optional |
| `preferredFloatingSize` | `{ width: number, height: number }` | optional |

These properties tell the host the preferred dimensions for docked panel states, modal dialogs that do not include `reference_node_id`, and floating states. The host can ignore the request; if values are absent, defaults apply.
