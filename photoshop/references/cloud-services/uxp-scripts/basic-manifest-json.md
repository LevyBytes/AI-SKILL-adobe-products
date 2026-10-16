# Basic manifest.json

```json
{
  "id": "com.yourcompany.myplugin",
  "name": "My Automation Plugin",
  "version": "1.0.0",
  "host": {
    "app": "PS",
    "minVersion": "23.0.0"
  },
  "entrypoints": [
    {
      "type": "command",
      "id": "runAutomation",
      "label": "Run My Automation"
    }
  ],
  "manifestVersion": 5
}
```
