# Summary

In UXP plugins, JavaScript modules help maintainability by splitting behavior into multiple files instead of keeping all functionality together.

**Key Concepts:**

1. **Module exports**: expose functions, objects, or variables from a module file with `module.exports`.
2. **Module imports**: bring modules into other files by using `require()` with relative paths.
3. **Directory structure**: use relative paths to place modules in subdirectories and keep the project better organized.
4. **Path requirements**: include the full relative path and the `.js` extension because UXP does not search global paths.
