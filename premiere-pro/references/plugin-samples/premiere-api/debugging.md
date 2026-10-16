# Debugging

Use **Debug** beside the loaded plugin in UDT to attach a Chromium DevTools window to the panel. That gives access to the console, network inspection, sources, and DOM tools.

The build writes separate `.js` files into `dist/`, such as `index.js`, `src/project.js`, and `src/utils.js`, and includes source maps. In the UDT Sources panel, those loaded modules appear like the older multi-file `tsc` output, so breakpoints can still be set against the original `.ts` sources.

The panel also includes its own console region at the top of the UI. Each button click writes its result there, so DevTools is not always required for a quick check.

## See also

- [Known Issues](../../uxp/known-issues/reference-index.md)
