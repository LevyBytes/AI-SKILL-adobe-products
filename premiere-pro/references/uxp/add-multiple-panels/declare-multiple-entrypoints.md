# 1. Declare Multiple Entrypoints

Start by editing `manifest.json` so it declares two panel entrypoints. The example also enables `ipc`:

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

After this manifest change, both panels appear in **Window** > **UXP Plugins** > **Multi Panel Demo**.
