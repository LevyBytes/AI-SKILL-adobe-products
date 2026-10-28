# Sandboxing

For security, UXP scripts execute inside a sandbox. File system access is limited to `plugin-temp:/` for generated output and `additionalContents` for supplied input; network calls are blocked, shell execution is unavailable, and scripts are separated from system resources.

**Restricted operations:**

- Server-side arbitrary file paths are unavailable
- Network requests are blocked (fetch, HTTP calls)
- Shell commands and external processes cannot be launched

**Working with files:**

For file handling in UXP scripts, route all file I/O through `plugin-temp:/`. Files that the script produces, such as JSON, text, logs, or metadata, should be written to `plugin-temp:/filename`; when `scriptOutputPattern` matches, those files are collected as outputs automatically. To read external inputs, pass them through `additionalContents` and reference the placeholder form (`__ADDITIONAL_CONTENTS_PATH_0__`) inside the script.

**Example: writing and reading files**

This example shows sandbox file I/O by saving processing results and loading config:

```bash
curl -X POST "https://photoshop-api.adobe.io/v2/execute-actions" \
  -H "Authorization: Bearer $TOKEN" \
  -H "x-api-key: $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "source": {
      "url": "https://your-storage.com/input.psd"
    }
  },
  "options": {
    "additionalContents": [
      {
        "source": {
          "url": "https://your-storage.com/config.json"
        }
      }
    ],
    "uxp": {
      "source": {
        "content": "const { app } = require(\"photoshop\"); const fs = require(\"fs\"); async function main() { const configPath = \"__ADDITIONAL_CONTENTS_PATH_0__\"; const config = JSON.parse(fs.readFileSync(configPath, \"utf-8\")); const doc = app.activeDocument; if (config.applyResize && doc.width > config.maxWidth) { await app.batchPlay([{\"_obj\":\"imageSize\",\"width\":{\"_unit\":\"pixelsUnit\",\"_value\":config.maxWidth},\"constrainProportions\":true}], {}); } const report = { originalSize: { width: doc.width, height: doc.height }, configApplied: config, processedAt: new Date().toISOString() }; fs.writeFileSync(\"plugin-temp:/process-report.json\", JSON.stringify(report, null, 2)); } main();",
        "contentType": "application/javascript"
      }
    }
  },
  "outputs": [
    {
      "mediaType": "image/jpeg",
      "destination": {
        "validityPeriod": 3600
      }
    },
    {
      "mediaType": "application/json",
      "destination": {
        "validityPeriod": 3600
      },
      "scriptOutputPattern": "process-report.json"
    }
  ]
}'
```
