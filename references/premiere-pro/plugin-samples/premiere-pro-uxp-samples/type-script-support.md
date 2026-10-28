# TypeScript support

Official TypeScript declarations for Premiere Pro UXP APIs are delivered through the [`@adobe/premierepro`](https://www.npmjs.com/package/@adobe/premierepro) package. Choose the channel that matches the project:

```bash

### Stable APIs

npm install -D @adobe/premierepro

### Beta APIs (preview of upcoming surface)

npm install -D @adobe/premierepro@beta
```

TypeScript projects load those declarations without extra configuration. For JavaScript projects that need autocomplete and inline documentation inside Visual Studio Code or Cursor, place a `jsconfig.json` at the plugin root:

```json
{
  "compilerOptions": {
    "types": ["@adobe/premierepro"]
  },
  "exclude": ["node_modules"]
}
```

After that, both TypeScript and JavaScript projects surface autocomplete and inline documentation.

<p align="center">
  <img src="https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro-samples/9fa39116b74fa65ab242150d026c8f1c53346fd8/payloads/ts_def_demo.png" alt="TypeScript autocomplete for Premiere UXP APIs" width="720">
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro-samples/9fa39116b74fa65ab242150d026c8f1c53346fd8/payloads/js_def_demo.png" alt="JSDoc type hints for Premiere UXP APIs in JavaScript" width="720">
</p>

---
