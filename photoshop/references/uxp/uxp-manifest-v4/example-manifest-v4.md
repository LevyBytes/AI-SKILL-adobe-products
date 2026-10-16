# Example manifest (v4)

```json
{
  "manifestVersion": 4,
  "id": "YOUR_ID_HERE",
  "name": "Name of your plugin",
  "version": "1.0.0",
  "main": "index.html",
  "host": {
    "app": "PS",
    "minVersion": "23.0.0"
  },
  "entrypoints": [
    {
      "type": "command",
      "id": "commandFn",
      "label": {
        "default": "Show A Dialog"
      }
    },
    {
      "type": "panel",
      "id": "panelName",
      "label": {
        "default": "Panel Name"
      },
      "minimumSize": { "width": 230, "height": 200 },
      "maximumSize": { "width": 2000, "height": 2000 },
      "preferredDockedSize": { "width": 230, "height": 300 },
      "preferredFloatingSize": { "width": 230, "height": 300 },
      "icons": [
        {
          "width": 23,
          "height": 23,
          "path": "icons/dark.png",
          "scale": [1, 2],
          "theme": ["darkest", "dark", "medium"]
        },
        {
          "width": 23,
          "height": 23,
          "path": "icons/light.png",
          "scale": [1, 2],
          "theme": ["lightest", "light"]
        }
      ]
    }
  ],
  "icons": [
    {
      "width": 23,
      "height": 23,
      "path": "icons/icon_D.png",
      "scale": [1, 2],
      "theme": ["dark", "darkest"],
      "species": ["generic"]
    },
    {
      "width": 23,
      "height": 23,
      "path": "icons/icon_N.png",
      "scale": [1, 2],
      "theme": ["lightest", "light"],
      "species": ["generic"]
    }
  ]
}
```

Later sections describe each key/value field. Except where the notes say otherwise, every field is required.
