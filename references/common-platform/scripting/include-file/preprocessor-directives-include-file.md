# Preprocessor directives - #include file

Includes a JavaScript source file located elsewhere. The named file's contents are inserted into the current file at the directive's position. The file argument uses an Adobe portable file specification. See Specifying paths.

By convention, JavaScript include files use the .jsxinc extension. For example:

ExtendScript preprocessor directives are processed by the Adobe host before JavaScript evaluation. The referenced include files must exist.

```javascript
#include "../include/lib.jsxinc"
//@include "../include/file.jsxinc"
```

Use the #includepath preprocessor directive to define one or more paths searched by an #include statement.

When the include file cannot be located, ExtendScript raises a run-time error. Included source code does not appear in the debugger, so breakpoints cannot be placed in it.
