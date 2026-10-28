# JSXBIN from the Command Line

The VS Code extension can export a single file or a whole directory from the command line, but the process requires some setup.

Warning

A built-in method exists, but it can be fairly awkward to use. As another option, consider the gulp-accessible npm package jsxbin. It performs the same task as the steps below with much less manual work.

Reports indicate that this package can have problems on Windows. For a different gulp task, you can try this script from Justin Taylor.

Both approaches above require the VS Code extension to be installed.

Saved output uses the same directory and filename, with .jsxbin as the suffix. Directories supplied as input are traversed recursively.

- Substitute the current version # for X.X.X
- MacOS: $HOME/.vscode/extensions/adobe.extendscript-debug-X.X.X/public-scripts/exportToJSX.js
- Windows: %USERPROFILE%\.vscode\extensions\adobe.extendscript-debug-X.X.X\public-scripts\exportToJSX.js

- -f, --force: replace any existing '.jsxbin' file/files.
- -n, --name: provide a '.js/.jsx' script path, or a directory path that contains those files.
- h, --help: print the help text, then exit

- Invoke it from your command line with node path/to/exportToJSX.js [options] [file/directory]
