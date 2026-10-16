# Example: conditional text edits across layers

The UXP script selects each layer and toggles bold and italic on every text layer: not bold → set bold, bold → set regular, with the same pattern for italic. Document changes run inside `core.executeAsModal()`.

**Script**

```javascript
const { app, core } = require("photoshop");

// Recursively collect all layers including those in groups
function getAllLayers(layers, result = []) {
  for (let i = 0; i < layers.length; i++) {
    const layer = layers[i];
    result.push(layer);
    if (layer.layers && layer.layers.length > 0) {
      getAllLayers(layer.layers, result);
    }
  }
  return result;
}

async function main() {
  if (!app.activeDocument) {
    console.error("No active document");
    return;
  }

  await core.executeAsModal(
    async () => {
      const doc = app.activeDocument;
      const allLayers = getAllLayers(doc.layers);
      let editCount = 0;

      for (const layer of allLayers) {
        try {
          // Select the layer
          doc.activeLayers = [layer];

          if (layer.kind === "text" && layer.textItem) {
            const cs = layer.textItem.characterStyle;

            // Toggle bold: if not bold → bold; if bold → regular
            cs.fauxBold = !cs.fauxBold;

            // Toggle italic: if not italic → italic; if italic → regular
            cs.fauxItalic = !cs.fauxItalic;

            editCount++;
          }
        } catch (err) {
          console.warn(`Could not edit layer "${layer.name}":`, err.message);
        }
      }

      console.log(`Toggled bold/italic on ${editCount} text layer(s)`);
    },
    { commandName: "Conditional Text Layer Edits" },
  );
}

main().catch((err) => {
  console.error("Conditional text edit failed:", err);
  throw err;
});
```

**Request:**

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
        "content": "const { app, core } = require(\"photoshop\"); function getAllLayers(layers, result) { result = result || []; for (let i = 0; i < layers.length; i++) { const layer = layers[i]; result.push(layer); if (layer.layers && layer.layers.length > 0) getAllLayers(layer.layers, result); } return result; } async function main() { if (!app.activeDocument) return; await core.executeAsModal(async () => { const doc = app.activeDocument; const allLayers = getAllLayers(doc.layers); for (const layer of allLayers) { try { doc.activeLayers = [layer]; if (layer.kind === \"text\" && layer.textItem) { const cs = layer.textItem.characterStyle; cs.fauxBold = !cs.fauxBold; cs.fauxItalic = !cs.fauxItalic; } } catch (err) { console.warn(\"Could not edit layer:\", layer.name, err.message); } } }, { commandName: \"Conditional Text Layer Edits\" }); } main().catch(err => { console.error(\"Conditional text edit failed:\", err); throw err; });",
        "contentType": "application/javascript"
      }
    }
  },
  "outputs": [
    {
      "destination": {
        "url": "<SIGNED_POST_URL>"
      },
      "mediaType": "image/vnd.adobe.photoshop"
    }
  ]
}'
```
