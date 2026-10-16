# IconDefinition

| Key | Type | Description |
| --- | --- | --- |
| `width` | `number` | Logical-pixel width `height` `number` Logical-pixel height |
| `path` | `string` | Icon path relative to the plugin root `scale` `number[]` Provided scale values. For example, `[1, 2]` indicates `@1x` and `@2x` icon versions at the specified `path`. (For densities beyond `1x`, place `@2x` before the icon extension) |
| `theme` | `string[]` | Themes supported by this icon. Photoshop recognizes `lightest`, `light`, `dark`, and `darkest`. Use `all` when the icon works for every theme. (Default is `all`). `species` `string[]` Icon type and suitable display location. The default is `generic`, which lets Photoshop place the icon wherever appropriate. |
