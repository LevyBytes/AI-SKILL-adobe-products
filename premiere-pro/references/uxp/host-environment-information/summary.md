# Summary

1. **Three Information Sources**: UXP exposes three modules for detecting host environment details:

   - **`host`**: application name, version, and locale values (`host.name`, `host.version`, `host.uiLocale`).
   - **`versions`**: UXP runtime version and plugin version (`versions.uxp`, `versions.plugin`).
   - **`os`**: operating-system data (`platform()`, `release()`, `arch()`, `cpus()`, `totalmem()`, `freemem()`, `homedir()`).

2. **Platform Detection**: Call `os.platform()` to identify the operating system:

   - Returns `"darwin"` for macOS and `"win32"` for Windows.
   - Use the value when selecting platform-specific file paths, keyboard shortcuts, URL schemes, or UI conventions.
   - Store the result in a constant to avoid repeating the call.

3. **Version Checking**: Feature detection can be implemented by parsing version strings:

   - Test UXP compatibility through `versions.uxp`.
   - Test host-application feature availability through `host.version`.
   - Include fallbacks or clear error messages whenever a version is unsupported.
