# Preprocessor directives

ExtendScript includes preprocessor directives for bringing in external scripts, naming scripts, choosing a JavaScript engine, and setting selected flags.

Write directives either as a C-style statement whose first character is #, or in comment form with @:

ExtendScript preprocessor directives are processed by the Adobe host before JavaScript evaluation. The referenced include files must exist.

```javascript
#include "file.jsxinc"
//@include "file.jsxinc"
```

When a directive accepts arguments and an argument contains any nonalphanumeric character, wrap that argument in single or double quotes. Paths and file names commonly require quotes because they include dots or slashes.
