# Quick Start

To add icons to a plugin, use this workflow:
1. Build each icon with a margin. For a 32x32 1x asset, for example, draw the icon itself at 23x23 and leave a small border so rendering works well. Larger assets are allowed, although they may appear blurrier. Apply comparable margins to the other sizes.
2. Export two scale variants for the icon assets: @1x and @2x. `pluginIcon@1x.png` [note the "@1x" suffix] and `pluginIcon@2x.png`
3. For the manifest entry, use the following form. This example assumes the exported icons above were placed in the plugin's "icons" folder; that folder is not required, but it keeps the project organized. 

Manifest property fragment: merge into the surrounding manifest.

```json
{
  "icons": [
    {
      "width": 23,
      "height": 23,
      "path": "icons/pluginIcon.png",
      "scale": [
        1,
        1.25,
        1.5,
        2
      ],
      "theme": [
        "darkest",
        "dark",
        "light",
        "lightest",
        "all"
      ]
    }
  ]
}
```

 In current Ps behavior, width and height set the icon size that Photoshop uses, not the pixel resolution of the underlying asset. Values other than 23x23 are likely to render badly. After this setup, the plugin icon should appear inside Photoshop. It will not appear in the Plugin Panel, and that limitation is intentional.
