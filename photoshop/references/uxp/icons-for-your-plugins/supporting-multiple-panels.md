# Supporting multiple panels

Plugins may include multiple panels, and every panel can define a distinct icon. To do that, add an icons entry to the plugin's entrypoint and override the top-level icons entry. For example:

```json
{
  "entrypoints": [
    {
      "type": "panel",
      "id": "runPanel",
      "icons": [
        {
          "width": 23,
          "height": 23,
          "path": "icons/run-dark.png",
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
          "path": "icons/run-light.png",
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
  ],
  "icons": [
    {
      "width": 23,
      "height": 23,
      "path": "icons/plugin-dark.png",
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
      "path": "icons/plugin-light.png",
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

In that example, the runPanel panel displays its own icon.

> Provide a separate icon for every supported panel. Without one, users may not quickly identify the panel they are opening.
