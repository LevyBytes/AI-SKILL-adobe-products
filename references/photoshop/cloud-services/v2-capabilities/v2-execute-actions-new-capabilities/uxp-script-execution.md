# UXP script execution

Alongside traditional `.atn` Photoshop actions and ActionJSON, V2 can run modern ES6+ JavaScript automation through Adobe's UXP platform. These UXP scripts execute inside Photoshop and can work with the full API surface for document structure and layers.

V1 handled `.atn` action files and ActionJSON. V2 adds UXP scripts, which are JavaScript programs that run inside Photoshop on Adobe's current extension platform:

```json
{
  "image": {
    "source": { "url": "https://example.com/input.psd" }
  },
  "options": {
    "uxp": [
      {
        "source": {
          "content": "const doc = require('photoshop').app.activeDocument;\nconst layers = doc.layers;\nconst info = layers.map(l => ({ name: l.name, kind: l.kind }));\nrequire('uxp').storage.localFileSystem.getTemporaryFolder()\n  .then(tmp => tmp.createFile('info.json'))\n  .then(f => f.write(JSON.stringify(info)));"
        }
      }
    ]
  },
  "outputs": [
    {
      "mediaType": "application/json",
      "destination": { "embedded": "json" },
      "scriptOutputPattern": "info.json"
    }
  ]
}
```

UXP scripts can:

- Use ES6+ JavaScript, including modern syntax, arrow functions, async/await, and modules
- Read and change document structure, layers, and effects through the full Photoshop API
- Execute in a Photoshop sandbox where file I/O is limited to `plugin-temp:/`
- Run together with `.atn` / ActionJSON in one request, with actions first and UXP scripts afterward
