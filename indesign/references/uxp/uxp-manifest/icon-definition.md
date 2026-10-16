# IconDefinition

Describes an icon for either the plugin overall or a particular entry point. Hosts may display it in the plugin list, toolbar, or other UI locations.

### Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `width` \* | `number` | required | Icon width, measured in pixels. |
| `height` \* | `number` | required | Icon height, measured in pixels. |
| `path` \* | `string` | required | Icon path relative to the plugin's installation directory. PNG (`.png`), JPG (`.jpg` or `.jpeg`), and SVG (`.svg`) files are supported. |
| `scale` | `number[]` | optional | Scaling factors available for this icon. **Example** `{ "path": "icon.png", "width": 24, "height": 24, "scale": [1, 2, 2.5] }` This maps to these icon files: • `icon.png` or `icon@1x.png` (24x24px) for 100% scaling\\• `icon@2x.png` (48x48px) for 200% scaling\\• `icon@2.5x.png` (60x60px) for 250% scaling **Default value** `[1]` (only supports 100% scaling) |
| `theme` | `("all" \| "lightest" \| "light" \| "medium" \| "dark" \| "darkest")[]` | optional | Themes for which this icon is valid. **Example** `{ "path": "icon.png", "width": 24, "height": 24, "theme": ["lightest", "light"] }` **Default value** `["all"]` (supports all themes) |
| `species` | `("generic" \| "toolbar" \| "pluginList")[]` | optional | Intended placement for this icon. The default species is `generic`, so the icon can be displayed in any placement. Options: • generic: can appear anywhere\\• toolbar: use for toolbar placement; sizes are 23x23px at 100% scaling and 46x46px at 200% scaling.\\• pluginList: use for plugin-list placement; sizes are 24x24px at 100% scaling and 48x48px at 200% scaling. **Default value** `["generic"]` (suitable for display anywhere) |
