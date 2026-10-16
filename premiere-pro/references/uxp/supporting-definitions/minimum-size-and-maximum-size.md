# `minimumSize` and `maximumSize`

| Name | Type | Required |
| --- | --- | --- |
| `minimumSize` | `{ width: number, height: number }` | optional |
| `maximumSize` | `{ width: number, height: number }` | optional |

Use `minimumSize` and `maximumSize` to request panel size bounds in pixels through `width` and `height`. The host application may be unable to honor those requests. If the properties are absent, default sizing applies.

Set `minimumSize` and `maximumSize` to the same value when a panel should be **locked to a specific size**.
