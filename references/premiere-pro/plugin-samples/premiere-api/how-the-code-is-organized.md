# How the code is organized

This TypeScript sample must be built before UDT can load it. The important project layout is:

```text
premiere-api/
├── assets/          ← preset files, transcript spec
├── dist/            ← compiled output (after npm run build)
|   └── manifest.json    ← point UDT here, not the one in public/
├── public/          ← static assets copied to dist/ (manifest, HTML, icons)
├── src/             ← one .ts file per API area
├── index.ts         ← entry point, wires src/ to buttons
├── package.json
├── tsconfig.json
├── vite.config.mjs
├── eslint.config.mjs
```

dist/ is created only after the first
pm run build or
pm run dev.

**UDT should load dist/, not the source folders.** When .ts files change, rebuild first; otherwise UDT keeps showing the previous compiled JavaScript. This missed rebuild is the usual first-run problem.

Panel markup, the manifest, and icons live in public/ (index.html, manifest.json, icons/). Vite copies those static files into dist/ during every build.
