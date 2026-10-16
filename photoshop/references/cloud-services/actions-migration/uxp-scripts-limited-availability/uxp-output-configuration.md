# UXP output configuration

UXP scripts are restricted to the UXP plugin temporary directory:

**Mechanics:**

1. **Plugin Temp Directory Writes:**

   - In the UXP script, write with the literal path `plugin-temp:/filename.ext`
   - The UXP module's `storage.localFileSystem` object can also open the plugin temporary directory
   - `plugin-temp:/` is mapped automatically to the correct temporary directory

2. **Specify Output Pattern:**

   - In the output configuration, set `scriptOutputPattern` to select the files to capture
   - Use exact filenames such as `"result.json"` or glob patterns such as `"*.png"` and `"layer-*.jpg"`
   - Captured outputs must match both the pattern and `mediaType`

3. **File Discovery and Upload:**
   - After UXP execution finishes, the worker scans the plugin temp directory
   - It compares files to `scriptOutputPattern` and filters matches by `mediaType`
   - The job result receives one output entry per matched file
   - Upload targets can be `hosted`, `embedded`, or external storage, based on the requested destination

**UXP script example:**

```javascript
const { app } = require("photoshop");
const fs = require("fs");
const path = require("path");

// using plugin-temp: to access plugin temporary directory
const outputFile = "plugin-temp:/generated.json";

async function main() {
  // Generate your output data
  const result = {
    documentName: app.activeDocument.name,
    layers: app.activeDocument.layers.length,
    timestamp: new Date().toISOString(),
  };

  // Save output files to the UXP temp folder
  fs.writeFileSync(outputFile, JSON.stringify(result, null, 2));

  console.log("Output saved to:", outputFile);
}

main().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
```

**UXP `scriptOutputPattern` example:**

```shell
curl -X POST \
  https://photoshop-api.adobe.io/v2/execute-actions \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json" \
  -d '{
  "image": {
    "source": {
      "url": "<SIGNED_GET_URL>"
    }
  },
  "options": {
    "uxp": {
      "source": {
        "url": "<UXP_SCRIPT_URL>"
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
    },
    {
      "destination": {
        "validityPeriod": 3600
      },
      "mediaType": "image/jpeg",
      "scriptOutputPattern": "processed_image.jpg"
    }
  ]
}'
```
