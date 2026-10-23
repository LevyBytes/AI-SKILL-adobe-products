# Preprocessor directives - #includepath path

Specifies one or more paths used by #include when finding files to include. Semicolons (;) separate the path names.

When a #include file name begins with a slash (/), it is treated as an absolute path, and the include paths are bypassed. In other cases, ExtendScript tries to locate the file by adding each #includepath path before the file name.

For example:

ExtendScript preprocessor directives are processed by the Adobe host before JavaScript evaluation. The referenced include files must exist.

```javascript
#includepath "include;../include"
#include "file.jsxinc"
//@includepath "include;../include"
//@include "file.jsxinc"
```

Multiple #includepath statements can be used; each execution changes the active path list.

As a fallback, ExtendScript also reads JSINCLUDE from the environment and treats its contents as include paths.

Some engines may define include paths in advance. If they do, #includepath entries are searched before those predefined paths. For example, if an engine has predefined paths predef;predef/include, the previous example produces this lookup order:

- file.jsxinc: literal lookup
- include/file.jsxinc: first #includepath path
- ../include/file.jsxinc: second #includepath path
- predef/file.jsxinc: first predefined engine path
- predef/include/file.jsxinc: second predefined engine path
