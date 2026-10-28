# Setup steps

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
<script src="dist/main.js"></script>
```

7. **Build your plugin**:

```bash
npm run build
```
