# Additional notes

- The APIs are already on the global scope; no `require` import is needed to mount them.
- In a plugin manifest, `domains` can cover endpoint variants. For instance, a plugin might target 'api.dev.example.com', 'api.stage.example.com' or 'api.prod.example.com' based on environment; `[\"https://api.*.example.com\"]` covers all three.
- For `http` domains, note the host differences: Photoshop allows the http protocol only on Win32 and blocks it on macOS. InDesign does not apply that limitation.
