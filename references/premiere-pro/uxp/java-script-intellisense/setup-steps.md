# Setup steps

1. **Add `@adobe/premierepro` to development dependencies**
2. **Place `jsconfig.json`[^2] at the plugin root**:

[^2]: `jsconfig.json` configures JavaScript projects.

```json
{
  "compilerOptions": {
    "checkJs": true,
    "target": "ES2020",
    "lib": ["ES2020", "DOM"]
  },
  "include": ["*.js"],
  "exclude": ["node_modules", "dist"]
}
```

3. **Add JSDoc type hints** to your JavaScript code:

```javascript
/** @type {import('@adobe/premierepro').premierepro} */
const ppro = require("premierepro");

// Now you get full IntelliSense!
ppro.Project.getActiveProject(); // ✅ Autocomplete works!
```

Restarting the code editor may be necessary before IntelliSense becomes active.
