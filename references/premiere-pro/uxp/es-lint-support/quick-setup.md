# Quick setup

1. **Install the required lint packages**

   ```sh
   npm install -D eslint @eslint/js @adobe/eslint-plugin-premierepro @adobe/premierepro
   ```

2. **Add an ESLint flat config** (ESLint 9+), e.g. `eslint.config.mjs` in the project root:

```javascript
// @ts-check

import premierepro from "@adobe/eslint-plugin-premierepro";
import js from "@eslint/js";
import { defineConfig } from "eslint/config";

export default defineConfig(
  js.configs.recommended,
  premierepro.configs.recommended
);
```

   This config applies [`@eslint/js`](https://www.npmjs.com/package/@eslint/js) `recommended` as the baseline JavaScript rules, then adds Premiere **syntactic** rules. ESLint has many other plugins and rules that can be substituted based on project or team needs; for example, a React project may include `eslint-plugin-react` or `eslint-plugin-react-hooks`.

3. **Add the `package.json` lint command**:

   ```json
   {
     "scripts": {
       "lint": "eslint ."
     }
   }
   ```

4. **Execute the lint script**

   ```sh
   npm run lint
   ```

When compiled files go into `dist/` or a similar folder, configure `ignores`, either inline or in a separate config object, so ESLint skips generated files.
