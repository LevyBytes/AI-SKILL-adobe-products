# window.path

Utilities for file and directory path handling are exposed by the `path` module.
Path parameters can be strings or Entry objects.
String paths that use local file schemes, including `plugin-data:` or `plugin-temp:`, are not resolved into native paths.
Because `path` is registered on the global scope, it can be called without declaring it first.

**See**: [https://nodejs.org/api/path.html](https://nodejs.org/api/path.html)  
**Since**: UXP v6.4.0
