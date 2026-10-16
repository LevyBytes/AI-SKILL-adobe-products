# Supporting Themes

Photoshop has multiple themes, so an icon can be designed to respond to them. The refreshed samples include icons that match the active theme. Compared with a single-icon setup, theme support adds a second icons entry and another file set. For example: 

Manifest property fragment: merge into the surrounding manifest.

```json
{
  "icons": [
    {
      "width": 23,
      "height": 23,
      "path": "icons/dark.png",
      "scale": [
        1,
        2
      ],
      "theme": [
        "darkest",
        "dark"
      ]
    },
    {
      "width": 23,
      "height": 23,
      "path": "icons/light.png",
      "scale": [
        1,
        2
      ],
      "theme": [
        "lightest",
        "light"
      ]
    }
  ]
}
```

In this setup, Photoshop selects the "dark.png" icons while a dark theme is active, and selects "light.png" while a light theme is active.

You should seriously consider theme support for plugin icons, because skipping it can create poor contrast under some themes.
