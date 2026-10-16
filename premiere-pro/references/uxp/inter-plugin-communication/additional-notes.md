# Additional notes

- Missing entrypoints may not produce an obvious error. Prefer checking `plugin.manifest.commands` and `plugin.manifest.panels` so your code chooses from the entrypoints that actually exist.
  A user can disable an individual plugin in the Adobe Creative Cloud Desktop App. Verify availability with `plugin.enabled` before attempting to invoke it.
- Payload objects cannot include methods.
- Cross-application communication is not available; for example, Premiere to Photoshop is not supported.
