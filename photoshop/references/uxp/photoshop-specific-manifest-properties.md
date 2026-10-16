# Photoshop specific manifest properties

When the UXP plugin manifest lists Photoshop as a "host", the `data` object can include these options:
- apiVersion
- loadEvent
- enableMenuRecording 

```json
{
  "manifestVersion": 4,
  "id": "YOUR_ID_HERE",
  "name": "Name of your plugin",
  "version": "1.0.0",
  "main": "index.html",
  "host": {
    "app": "PS",
    "minVersion": "23.0.0",
    "data": {
      "apiVersion": 2,
      "loadEvent": "use",
      "enableMenuRecording": true
    }
  },
  "entrypoints": [
    {
      "type": "command",
      "id": "MENU_ITEM_ID",
      "label": {
        "default": "menu item's text"
      }
    }
  ]
}
```
