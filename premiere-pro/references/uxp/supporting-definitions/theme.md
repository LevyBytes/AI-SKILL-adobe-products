# `theme`

| Name | Type | Required | Default |
| --- | --- | --- | --- |
| `theme` | `string[]` | optional | ["all"] |

`theme` lists the UXP themes for which the icon is suitable. Valid theme values are `"all"` (default), `"lightest"`, `"light"`, `"medium"`, `"dark"`, and `"darkest"`.

```json
[
{
    "path": "icon-light.png",
    "width": 24,
    "height": 24,
    "theme": ["lightest", "light"]
},
{
    "path": "icon-dark.png",
    "width": 24,
    "height": 24,
    "theme": ["darkest", "dark"]
}
]
```
