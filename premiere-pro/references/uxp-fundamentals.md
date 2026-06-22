# Apis, Dom Apis, Eslint Support, Typescript Support

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Understanding UXP APIs; Premiere Pro DOM APIs; ESLint Support; TypeScript Support.

## Understanding UXP APIs

Covers the two UXP API categories and how to decide when each one applies.

### Overview

After completing your first [plugin](uxp-plugins.md), the next step is taking on richer tasks. Useful plugin work depends on knowing which APIs fit each situation.

UXP supplies two API groups that complement each other:

1. **UXP Core APIs**: handle user-interface construction, file access, network communication, and general plugin features.
2. **Premiere APIs**: interact with Premiere projects and sequences, including changes to them.

Most useful workflows combine both API sets to deliver the functionality you want. The sections below introduce each group and show how they work together.

### UXP Core APIs

UXP Core APIs are the base pieces used to build plugin behavior, and they are **shared** by Adobe Creative Cloud applications that support UXP. These APIs can:

- **Create user interfaces** with HTML, CSS, and JavaScript
- **Access the file system** for reading and writing files
- **Make network requests** for communication with external services
- **Handle clipboard operations** that support copy/paste behavior
- **Work with system utilities** such as shell commands and OS information

### Accessing UXP APIs

How you reach a UXP API depends on which API is being used.

[**Global APIs**](uxp-global-members-2.md) can be used immediately, with no import required. For example:

```javascript
// Crypto API is globally available
const hash = crypto.randomUUID();

// Document API is globally available
const button = document.createElement("sp-button");
```

[**Module-based APIs**](uxp-modules.md) are loaded with `require()`. For example:

```javascript
// Parent UXP module
const uxp = require("uxp");

// File system access
const fs = require("fs");

// Operating system utilities
const os = require("os");
```

**Permission-based APIs** must also be allow-listed in the plugin's `manifest.json`. For example, using the [file system](uxp-manifest.md) or making [network requests](uxp-manifest.md) requires the matching permissions. The [Manifest guide](uxp-manifest.md) explains those permissions in more detail.

### Premiere APIs

Premiere APIs, also called **DOM APIs** (Document Object Model) or **Premiere DOM APIs**, expose Premiere's document model directly. Among other tasks, they let plugins:

- **Access and modify projects** — work with sequences, tracks, clips, and markers
- **Work with media** — import files and manage project items
- **Control playback** — manage in/out points and the playhead
- **Apply effects** — place video and audio effects on clips
- **Export content** — set export options and start exports

The `app` object is the Premiere API entry point, and it is loaded from the `"premierepro"` module with `require()`.

```javascript
const app = require("premierepro");
```

The [Working with Premiere APIs](uxp-fundamentals.md) section explains how to access and use Premiere APIs, and the [Premiere API reference](uxp-ppro-reference.md) lists the available API surface.

Keep the two DOMs separate

The **Premiere DOM** operates on Premiere documents such as projects, sequences, and clips. The **HTML DOM** operates on the plugin interface, including buttons, inputs, and panels. Treat them as independent domains.

### Unified JavaScript Engine

As the platform's name [suggests](uxp-changelog-premiere-pro-v26-2-0.md), UXP uses a _unified_ JavaScript engine that can reach Premiere APIs and UXP Core APIs directly. That is a major difference from the earlier CEP extensibility model, where extension logic and the host application communicated through the CSInterface bridge by passing messages between separate runtimes.

In UXP, the code runs natively in one environment; load the needed API modules with `require()`.

### Practical Example

Consider a plugin that needs to combine both API categories. Suppose it must:

1. Load text content from a file on the user's computer
2. Add a new text layer to the active sequence
3. Apply a specific style to that text layer

Each step maps to a different API area:

**Step 1: Read file content** — Read with the `fs` module from UXP

```javascript
const fs = require("fs");
const file = await fs.getFileForOpening();
const content = await file.read();
```

**Step 2: Create text layer** — Create it through the Premiere DOM APIs

```javascript
const app = require("premierepro");
const sequence = app.project.activeSequence;
// Add text layer to sequence
```

**Step 3: Apply styling** — Combine both API areas

```javascript
// Premiere APIs to modify the clip properties
// UXP APIs to show progress in your plugin's UI
```

In this example, UXP Core APIs cover infrastructure work, while Premiere APIs make the creative-content changes.

### API Versioning and Compatibility

UXP and Premiere APIs continue to change, with each release adding capabilities. Knowing how versions line up helps keep a plugin running correctly.

### Host Application and UXP

- **Premiere version** (v25.6): controls which Premiere DOM APIs are present.
- **UXP version** (v8.1): controls which UXP Core APIs are present.

Every Premiere release bundles a particular UXP version; Premiere v25.6, for example, includes UXP v8.1.

Handling Version Mismatches

When a plugin uses an API introduced in UXP v8.2 but runs in Premiere v25.6, which includes only UXP v8.1, errors will be thrown and the plugin will fail. The same problem occurs when the plugin needs APIs added in Premiere v25.7 while the user remains on v25.6.

To prevent compatibility failures, target APIs that exist in both versions, or add fallback behavior for older releases when possible.

### Checking Versions

The UXP version can be checked in several places:

### 1. In the UXP Developer Tool

After Premiere is running and listed under "Connected apps", the Premiere version and UXP version are both displayed.

[Figure: UXP version in the UXP Developer Tool](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/resources/fundamentals/apis/img/apis-udt.png)

If only the host application version is visible, as with Photoshop in the screenshot above, select the arrow next to the product icon to expand the detail view.

### 2. Programmatically in your plugin

```javascript
const { host, version } = require("uxp");
console.log(`Premiere ${host.version}`); // Premiere 25.6.0
console.log(`UXP ${versions.uxp}`); // UXP uxp-8.1.0-local
```

For a full example, see the [host info recipe](uxp-recipes-2.md).

### 3. In the documentation

The [What's new](uxp-changelog-premiere-pro-v26-2-0.md) area maps each Premiere release to its UXP version and lists new features, changes, and fixes.

### Next Steps

With the two available API types in view, continue by:

- Exploring practical [code recipes](uxp-recipes-2.md) for common tasks
- Learning how to [work with Premiere APIs](uxp-fundamentals.md) in depth
- Browsing the full [UXP API reference](uxp-api.md) and [Premiere API reference](uxp-ppro-reference.md)

## Premiere Pro DOM APIs

Premiere Pro APIs (aka Document Object Model DOM or OMV) create and change the application document and its content.

Premiere DOM is supplied only as a JavaScript module, so load it with `require()` when needed.

To access the Premiere DOM APIs, use:

```js
const app = require("premierepro");
```

### DOM version

For UXP development, the required minimum DOM version matches the minimum Premiere Pro version that supports UXP development.

## ESLint Support

Shows how to pair ESLint with UXP plugins for Premiere Pro.

### Overview

[ESLint](https://eslint.org/) scans source code for likely issues before a plugin is run or distributed. It can catch broad JavaScript problems such as undefined variables and suspicious patterns; shared configurations can also add team-wide style and quality policy.

For Premiere's UXP DOM APIs, many incorrect patterns fail only at runtime. Examples include using actions outside `Project.lockedAccess()` / `Project.executeTransaction()`, doing awaited work inside those callbacks, or allowing action objects to escape the lock boundary. Use [`@adobe/eslint-plugin-premierepro`](https://www.npmjs.com/package/@adobe/eslint-plugin-premierepro) to add rules for those cases so editor or CI linting can catch them earlier.

There are two rule tiers:

1. **[Syntactic rules](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/resources/fundamentals/eslint-support/index.md#syntactic-rules-and-configuration)** — pattern-matching rules that do not need TypeScript's type checker. They support **plain JavaScript** projects as well as **TypeScript** projects.
2. **[Type-checked rules](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/resources/fundamentals/eslint-support/index.md#type-checked-rules-and-configuration)** — rules backed by [typed linting](https://typescript-eslint.io/getting-started/typed-linting/) (`typescript-eslint`, a `tsconfig`, and types from [`@adobe/premierepro`](uxp-fundamentals.md)). With actual Premiere types, they reduce false positives and cover patterns, such as helper indirection, that syntax-only checks may not see reliably.

Use **syntactic** configs when typed ESLint is not part of the project. Use **type-checked** configs when TypeScript and `typescript-eslint` are already configured.

### `@adobe/eslint-plugin-premierepro`

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

### What the Premiere rules cover (summary)

For **Syntactic rules**, detection comes from names and AST shapes such as `create*Action()` and `addAction()`. **Type-checked rules** use TypeScript to identify real `Action` types and related APIs. Covered topics include:

- Checking that `create*Action()` is used inside `Project.lockedAccess()` or `Project.executeTransaction()`
- Checking that `addAction()` runs inside `Project.executeTransaction()`
- Blocking `async` work inside `lockedAccess()` / `executeTransaction()` callbacks
- Blocking `Action` instances that escape their lock scope
- Optional style checks (undo strings, wrapping `executeTransaction()` in `lockedAccess()`)

The [plugin README](https://github.com/adobe/eslint-plugin-premierepro/blob/main/README.md#rules) on GitHub lists the complete rule names and descriptions.

### Using pnpm — Syntactic rules and configuration

Choose this setup for **JavaScript-only** plugins, or for TypeScript projects that have **not** enabled typed ESLint. The toolchain stays small: core ESLint, shared recommendations for JavaScript, and the Premiere-specific ESLint plugin.

### Quick setup

1. **Install the required lint packages**

   ```sh
   npm install -D eslint @eslint/js @adobe/eslint-plugin-premierepro @adobe/premierepro
   ```

2. **Add an ESLint flat config** (ESLint 9+), e.g. `eslint.config.mjs` in the project root:

   ```javascript
   // @ts-check

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

### Pros and cons (syntactic)

**Pros:** Minimal tooling; same workflow for `.js` and `.ts`; fast execution; does not require a `tsconfig` or type-aware parser.

**Cons:** Because Premiere usage is inferred from patterns, rules may miss certain refactors or edge cases and can produce more noise than type-checked rules.

### Using pnpm — Type-checked rules and configuration

For a **TypeScript** plugin where ESLint should analyze types, install **`typescript-eslint`** (the unified npm package named `typescript-eslint`) together with `eslint` and `@eslint/js`. Typed rules let `recommendedTypeChecked` consult the same [Premiere type definitions](uxp-fundamentals.md) used by the editor, which keeps lint results tied to the actual APIs.

### Fast setup

1. **Install dependencies**

   ```sh
   npm install -D eslint @eslint/js typescript-eslint @adobe/eslint-plugin-premierepro @adobe/premierepro
   ```

   `typescript-eslint` supplies the parser and `@typescript-eslint/*` tooling that type-aware lint rules need. Keep `@adobe/premierepro` on a release accepted by the ESLint plugin; check peer compatibility at https://www.npmjs.com/package/@adobe/eslint-plugin-premierepro.

2. **Make sure `tsconfig.json` includes your plugin sources**

   The TypeScript project should include the same files that ESLint checks, such as `src/**/*`. For a standard `tsconfig.json` shape, see [TypeScript projects](uxp-fundamentals.md).

3. **Create an ESLint flat config** that loads `typescript-eslint`, turns on type-aware parsing, and then applies Premiere's type-checked rule set:

   ```javascript
   // @ts-check

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

### Type-checked tradeoffs

**Pros:** Premiere API checks become stronger and type-accurate; pattern-matching false positives drop; helper-wrapped actions are handled better.

**Cons:** The setup needs TypeScript, `typescript-eslint`, and a valid `tsconfig`; typed lint runs take longer than syntax-only linting.

### Using pnpm — Development workflow

A common development cycle looks like this:

1. **Terminal** - run `npm run lint`, or connect linting to CI, before packaging the plugin or opening a PR.
2. **Editor** - enable an ESLint extension so problems appear while code is being edited.
3. **Premiere** - after fixes, and after rebuilding when a compile step exists, reload the plugin from the UXP Developer Tool.

For TypeScript plugins, use this material alongside [TypeScript support](uxp-fundamentals.md); the same types drive IntelliSense and type-checked ESLint rules.

## TypeScript Support

Use TypeScript when building UXP plugins.

### Overview

Accurate autocomplete and type checking make Premiere UXP plugin development much smoother. Whether the codebase stays in plain JavaScript or moves fully to TypeScript, the same type definitions can provide IntelliSense, error reporting, and inline documentation inside the editor.

This guide presents two paths:

1. **[JavaScript with JSDoc](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/resources/fundamentals/typescript-support/index.md#javascript-intellisense)**: add IntelliSense to existing JavaScript code without adding a build step.
2. **[TypeScript projects](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/resources/fundamentals/typescript-support/index.md#typescript-projects)**: choose TypeScript for compile-time checks and more advanced language features.

Both paths rely on the same Type Definitions for Premiere DOM APIs, so autocomplete and reference documentation stay accurate no matter which option is used.

### Premiere DOM APIs

### Type Definitions

The full TypeScript definitions for Premiere DOM APIs are published as the NPM package [`@adobe/premierepro`](https://www.npmjs.com/package/@adobe/premierepro). It provides:

- Premiere classes and methods, including `Project`, `Sequence`, `VideoTrack`, and related APIs
- Constants and enums such as `MediaType` and `TrackItemType`
- Method signatures that include parameters and return types
- JSDoc comments describing each API

Install the package with `npm` or another package manager, for example:

```sh
$ npm install -D @adobe/premierepro

### Using yarn

$ yarn add -D @adobe/premierepro

### Using pnpm

$ pnpm add -D @adobe/premierepro
```

### JavaScript Intellisense

Plain JavaScript files can still receive full IntelliSense[^1] **without TypeScript** by using JSDoc comments. This route keeps the current JavaScript workflow and does not add a build step.

[^1]: IntelliSense supplies editor autocomplete plus type hint behavior.

### Setup steps

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

### JSDoc Patterns

These patterns show common ways to add type hints in JavaScript. Start by typing the main `ppro` object; after that, method calls carry types forward automatically. Use explicit annotations mainly for function parameters or when extra clarity helps.

**Type hint for the main API:**

```javascript
/** @type {import('@adobe/premierepro').premierepro} */
const ppro = require("premierepro");

async function example() {
  const project = await ppro.Project.getActiveProject();
  const sequence = await project.getActiveSequence();

  // Types flow through automatically; sequence has full IntelliSense!
  const trackCount = await sequence.getVideoTrackCount();
}
```

**Function parameters and return types:**

```javascript
/**
 * Analyze all video tracks in a sequence
 * @param {import('@adobe/premierepro').Sequence} sequence - The sequence to analyze
 * @returns {Promise<void>}
 */
async function analyzeTracks(sequence) {
  const videoTrackCount = await sequence.getVideoTrackCount();

  for (let i = 0; i < videoTrackCount; i++) {
    const track = await sequence.getVideoTrack(i);
    console.log(`Track ${i}: ${track.name}`);
  }
}
```

**Arrays and complex types:**

```javascript
/**
 * Process multiple track items
 * @param {import('@adobe/premierepro').VideoClipTrackItem[]} trackItems
 */
async function processTrackItems(trackItems) {
  for (const item of trackItems) {
    // item has full IntelliSense
    const name = await item.getName();
    console.log(name);
  }
}
```

### Pros and Cons of the JSDoc Approach

JSDoc's main benefit is that **it doesn't require any build steps**. The existing development flow stays intact while the editor gains **full IntelliSense with autocomplete and type hints**. Type checks happen during editing, which can expose mistakes before runtime. The approach works in modern editors such as VSCode and Cursor.

The tradeoff is that JSDoc is not equivalent to full TypeScript. Type issues show up as **editor warnings rather than compile-time errors** that stop execution. More explicit type annotations may be needed across the codebase, because JSDoc comments do not infer as much as TypeScript. **Advanced TypeScript features** such as generics, utility types, and conditional types **are not available** in JSDoc.

For smaller plugins, JSDoc is a practical way to add types without changing the build. As a plugin becomes more complex, the project can move to TypeScript later.

### TypeScript Projects

TypeScript is a common choice for larger codebases and teams. It adds **compile-time error checking**, improves **refactoring support**, and makes **advanced TypeScript features** available.

### Setup steps

1. **Add the `@adobe/premierepro` package**
2. **Install TypeScript** and make `src`:

```bash
npm install --save-dev typescript
mkdir src
```

3. **Write `tsconfig.json` in the plugin root**:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020", "DOM"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

4. **Move your code to TypeScript**: move `main.js` to `src/main.ts` and update your code to use TypeScript syntax

The project layout should now resemble this:

```text
your-plugin/
    ├── tsconfig.json      # TypeScript config
    ├── package.json
    ├── manifest.json
    ├── index.html
    ├── src/
    │   └── main.ts       # Your TypeScript code
    └── dist/             # Generated JavaScript (after build)
        └── main.js
```

1. **Add build scripts** to your `package.json`:

```json
{
  "scripts": {
    "build": "tsc",
    "watch": "tsc --watch"
  }
}
```

6. **Update your `index.html`** to reference the compiled output:

```html

```

7. **Build your plugin**:

```bash
npm run build
```

### TypeScript Syntax

TypeScript gives cleaner syntax and stronger inference:

```typescript
const ppro = require("premierepro") as premierepro;

async function analyzeSequence(): Promise<void> {
  const project = await ppro.Project.getActiveProject();
  if (!project) return;

  // TypeScript infers types automatically
  const sequence = await project.getActiveSequence();
  if (!sequence) return;

  // Full type safety and IntelliSense
  const videoTrackCount: number = await sequence.getVideoTrackCount();

  for (let i = 0; i < videoTrackCount; i++) {
    const track: VideoTrack = await sequence.getVideoTrack(i);
    console.log(`Track ${i}: ${track.name}`);
  }
}
```

### Development Workflow

A TypeScript project usually follows this loop:

1. **Terminal**: keep `npm run watch` running so compilation happens automatically
2. **Editor**: work in `src/main.ts` while IntelliSense and type checking stay active
3. **Premiere**: test the latest changes by reloading the plugin through UXP Developer Tool

### Pros and Cons of TypeScript

TypeScript has clear benefits for larger projects. **Compile-time type checking** can catch bugs before the plugin is run, and stronger inference gives autocomplete more precision than JSDoc. **Refactoring becomes safer** because variables and functions can be renamed across the codebase with more confidence. It also unlocks **access to advanced features** such as interfaces, generics, and utility types, plus the debugging and IDE support that come with them.

The cost is **additional setup and tooling**. Before testing the plugin, TypeScript must be **compiled** to JavaScript, adding a build step. Developers who are new to TypeScript also face a **learning curve** around its syntax and concepts. For complex plugins, or for teams already comfortable with TypeScript, those costs are usually outweighed by better developer experience and code quality.
