# UXP Scripts (Limited Availability) migration

**UXP Scripts (Limited Availability):**

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

In UXP scripts, write output files under the plugin temporary location with `plugin-temp:/filename.ext`, for example `plugin-temp:/result.json`, then point `scriptOutputPattern` at them.
