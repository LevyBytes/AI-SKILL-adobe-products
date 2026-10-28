# Fast setup

1. **Install dependencies**

   ```sh
   npm install -D eslint @eslint/js typescript-eslint @adobe/eslint-plugin-premierepro @adobe/premierepro
   ```

   `typescript-eslint` supplies the parser and `@typescript-eslint/*` tooling that type-aware lint rules need. Keep `@adobe/premierepro` on a release accepted by the ESLint plugin; check peer compatibility at https://www.npmjs.com/package/@adobe/eslint-plugin-premierepro.

2. **Make sure `tsconfig.json` includes your plugin sources**

   The TypeScript project should include the same files that ESLint checks, such as `src/**/*`. For a standard `tsconfig.json` shape, see [TypeScript projects](../type-script-projects/reference-index.md).

3. **Create an ESLint flat config** that loads `typescript-eslint`, turns on type-aware parsing, and then applies Premiere's type-checked rule set:

```javascript
// @ts-check

import premierepro from "@adobe/eslint-plugin-premierepro";
import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig(
  js.configs.recommended,
  tseslint.configs.recommended,
  premierepro.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  }
);
```

   For `projectService: true` and related settings, consult the [typed linting documentation for `typescript-eslint`](https://typescript-eslint.io/getting-started/typed-linting/).

4. **Run ESLint** with the same command used for the syntax-only setup, `npm run lint`.
