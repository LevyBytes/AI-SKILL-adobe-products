# Combining actions with UXP scripts

A request can include several actions plus a single UXP script. The action list is processed before the UXP script.

Each request accepts only **one UXP script**, alongside a maximum of **10 actions**.

```json
{
  "options": {
    "actions": [
      {
        "source": {
          "content": "[{\"_obj\":\"imageSize\",\"width\":{\"_unit\":\"pixelsUnit\",\"_value\":1920}}]",
          "contentType": "application/json"
        }
      }
    ],
    "uxp": {
      "source": {
        "content": "const app = require('photoshop').app; const doc = app.activeDocument; /* custom UXP code */",
        "contentType": "application/javascript"
      }
    }
  }
}
```
