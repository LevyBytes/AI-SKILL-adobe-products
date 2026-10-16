# `@adobe/eslint-plugin-premierepro`

Add the plugin as a development dependency:

```sh
npm install -D @adobe/eslint-plugin-premierepro

### Using yarn

yarn add -D @adobe/eslint-plugin-premierepro

### Using pnpm

pnpm add -D @adobe/eslint-plugin-premierepro
```

The package expects [`@adobe/premierepro`](https://www.npmjs.com/package/@adobe/premierepro) as a peer dependency matching the ESLint plugin version. Add that package to your project, usually as a dev dependency, so the versions stay aligned:

```sh
npm install -D @adobe/premierepro @adobe/eslint-plugin-premierepro
```

Prebuilt configs:

| Config | Purpose |
| --- | --- |
| `premierepro.configs.recommended` | Turns on **syntactic** Premiere rules with default severities; works for any JS/TS project. |
| `premierepro.configs.recommendedTypeChecked` | Turns on **type-checked** Premiere rules; needs typed linting with `typescript-eslint`. |

Type-checked rules take the place of their syntactic equivalents; normally, enable one tier rather than both. During a migration, running both for a short period is possible, but duplicate messages can appear for one issue.
