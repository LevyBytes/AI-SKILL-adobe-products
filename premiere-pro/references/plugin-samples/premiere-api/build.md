# Build

```bash
cd sample-panels/premiere-api
npm install
npm run build
```

[Vite](https://vite.dev/) turns the TypeScript sources into CommonJS output in dist/, with one .js file generated for each source module. Files from public/ are copied into the same output area. sc --noEmit handles type checking separately from the emit step.

After the build completes, load sample-panels/premiere-api/dist/manifest.json in UDT and select **Load**.
