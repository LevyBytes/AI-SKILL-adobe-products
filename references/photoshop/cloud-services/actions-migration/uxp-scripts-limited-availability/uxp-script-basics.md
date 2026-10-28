# UXP Script Basics

Provide a UXP script either as an external `.psjs` (Photoshop JavaScript) file or as inline content:

**External UXP script source:**

```json
{
  "options": {
    "uxp": {
      "source": {
        "url": "<UXP_SCRIPT_URL>"
      }
    }
  }
}
```

**Inline UXP script source:**

```json
{
  "options": {
    "uxp": {
      "source": {
        "content": "const app = require('photoshop').app; app.activeDocument.flatten();",
        "contentType": "application/javascript"
      }
    }
  }
}
```
