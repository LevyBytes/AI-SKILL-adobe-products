# manifest.json

```json
{
  "id": "multi-panel-demo",
  "name": "Multi Panel Demo",
  "version": "1.0.0",
  "main": "index.html",
  "host": {
    "app": "premierepro",
    "minVersion": "25.6.0"
  },
  "manifestVersion": 5,
  "requiredPermissions": {
    "ipc": {
      "enablePluginCommunication": true
    }
  },
  "entrypoints": [
    {
      "id": "uxp-first-panel",
      "type": "panel",
      "label": {
        "default": "First Panel"
      },
      "minimumSize": {
        "width": 430,
        "height": 500
      },
      "preferredDockedSize": {
        "width": 230,
        "height": 300
      }
    },
    {
      "id": "uxp-second-panel",
      "type": "panel",
      "label": {
        "default": "Second Panel"
      },
      "minimumSize": {
        "width": 430,
        "height": 500
      },
      "preferredDockedSize": {
        "width": 230,
        "height": 300
      }
    }
  ]
}
```

👇 Required for inter-panel control

...

...

...

Although this sample stays intentionally small, the same approach becomes useful once a panel's implementation starts getting more involved.
