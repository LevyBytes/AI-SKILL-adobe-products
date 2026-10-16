# window.path

The `path` module offers helpers for manipulating file and directory path values.
Path parameters may be strings or Entry objects.
String paths that use local file schemes such as `plugin-data:` or `plugin-temp:` are not converted into native paths.
Because the `path` module is registered globally, scripts do not need to declare it.

**See**: [https://nodejs.org/api/path.html](https://nodejs.org/api/path.html)  
**Since**: UXP v6.4.0
