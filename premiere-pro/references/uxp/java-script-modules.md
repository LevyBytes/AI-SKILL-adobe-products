# JavaScript Modules

Organize plugin code across multiple JavaScript files by using modules.

### Overview

UXP plugins can use modular JavaScript, so related code can be split into separate files for cleaner structure and easier maintenance. For larger plugins, putting distinct functionality in separate modules makes the project easier to reuse and navigate.

For modules, UXP follows CommonJS: import with `require()` statements and export functionality through `module.exports`.
