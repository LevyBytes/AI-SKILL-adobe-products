# Preprocessor directives — #target name

Targets this JSX file at the named application. Treat name as an application specifier; see Application and namespace specifiers. Quotes around the value are optional.

When the Toolkit is the registered handler for the .jsx extension, as it normally is, opening that file launches the target application so the script can run.

Without this directive, the Toolkit opens the script and shows it. A user may launch a file by double-clicking it in a file browser; a script may also open one through a File object's execute method.
