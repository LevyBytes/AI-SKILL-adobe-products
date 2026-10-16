# manifest.json

```json
{
  "id": "Test-responder",
  "name": "Responder",
  "shortname": "3pstarterplugin",
  "version": "1.0.0",
  "main": "index.html",
  "host": { "app": "premierepro", "minVersion": "25.6.0" },
  "manifestVersion": 5,
  "entrypoints": [
    {
      "id": "simplePanel",
      "type": "panel",
      "minimumSize": { "width": 430, "height": 500 },
      "maximumSize": { "width": 2000, "height": 2000 },
      "preferredDockedSize": { "width": 230, "height": 300 },
      "preferredFloatingSize": { "width": 400, "height": 300 },
      "label": { "default": "Main Panel" },
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
    },
    {
      "id": "simpleCommand",
      "type": "command",
      "label": {
        "default": "Simple Command"
      }
    },
    {
      "id": "commandWithInput",
      "type": "command",
      "label": {
        "default": "Command With Input"
      }
    }
  ],
  "icons": [
    {
      "width": 48,
      "height": 48,
      "path": "icons/plugin-icon.png",
      "scale": [1, 2],
      "theme": ["darkest", "dark", "medium", "lightest", "light", "all"],
      "species": ["pluginList"]
    }
  ]
}
```
