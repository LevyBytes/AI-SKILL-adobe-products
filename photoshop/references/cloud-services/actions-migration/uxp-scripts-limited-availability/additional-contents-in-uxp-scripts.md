# Additional contents in UXP scripts

Like ActionJSON, UXP scripts can use placeholders for additional contents. That lets scripts access or composite multiple images.

**How It Works:**

1. Place additional contents in `options.additionalContents`
2. In UXP scripts, reference them as `__ADDITIONAL_CONTENTS_PATH_0__`, `__ADDITIONAL_CONTENTS_PATH_1__`, etc.
3. The placeholder number maps to the corresponding 0-based array position
4. Before execution, the worker substitutes those placeholders with actual file paths

**Example:**

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/execute-actions \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "source": {
      "url": "<BASE_IMAGE_URL>"
    }
  },
  "options": {
    "additionalContents": [
      {
        "source": {
          "url": "<OVERLAY_IMAGE_URL>"
        }
      },
      {
        "source": {
          "url": "<LOGO_IMAGE_URL>"
        }
      }
    ],
    "uxp": {
      "source": {
        "content": "const { app } = require(\"photoshop\"); const fs = require(\"fs\"); async function main() { const overlayPath = \"__ADDITIONAL_CONTENTS_PATH_0__\"; const logoPath = \"__ADDITIONAL_CONTENTS_PATH_1__\"; await app.batchPlay([{ _obj: \"placeEvent\", null: { _path: overlayPath, _kind: \"local\" } }], {}); fs.writeFileSync(\"plugin-temp:/result.json\", JSON.stringify({ overlayUsed: overlayPath, logoUsed: logoPath })); } main();",
        "contentType": "application/javascript"
      }
    }
  },
  "outputs": [
    {
      "destination": {
        "validityPeriod": 3600
      },
      "mediaType": "application/json",
      "scriptOutputPattern": "result.json"
    }
  ]
}'
```

A request can include up to 25 additional contents. Use each content's array index when referencing it from UXP scripts.

**Best Practices for UXP Scripts:**

1. **File Extension:** Use the `.psjs` extension for UXP scripts, identifying them as Photoshop JavaScript rather than general JavaScript files
2. **Output Path:** Save generated outputs under `plugin-temp:/filename`, for example `plugin-temp:/result.json`
3. **Path Handling:** Build file paths with `path.join()`; do not hardcode separators such as `"/"` or `"\\"`
4. **Path Utilities:** Rely on `path.dirname()`, `path.basename()`, and related Node.js path module helpers
5. **Platform-Agnostic:** Keep code free of platform-specific APIs or assumptions for Windows/macOS/Linux
6. **Descriptive Names:** Give output files clear, descriptive filenames
7. **Output Patterns:** Put the desired filename or pattern in the `scriptOutputPattern` parameter
8. **Destinations:** Select `embedded` or hosted storage through `validityPeriod` for destinations; external storage is unavailable for script outputs
9. **Media Types:** Use `mediaType` to filter outputs so only matching file extensions are included
10. **Error Handling:** Make UXP scripts handle errors cleanly
11. **Testing:** Validate scripts thoroughly before production use

Avoid hardcoded file paths and platform-specific separators in UXP scripts. Construct paths with `path.join()`, such as `path.join(outputFolder, "result.json")`, rather than `outputFolder + "/result.json"`. That pattern prevents runtime problems on different operating systems.
