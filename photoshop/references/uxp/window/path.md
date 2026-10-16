# window.path

`path` contains helpers for handling filesystem-style directory and file path values.
Path arguments may be supplied as strings or as Entry objects.
When a path is passed as a string, local schemes like `plugin-data:` or `plugin-temp:` are not translated into native paths.
Because `path` is registered globally, scripts can call it without first declaring it.

**See**: [https://nodejs.org/api/path.html](https://nodejs.org/api/path.html)  
**Since**: UXP v6.4.0
