# Getting Started with the VS Code Debugger - Running the debugger

After your environment is prepared and your script is built:

- To launch the current script, press the status bar button labelled "▷ Eval in host app name"; alternatively, choose ExtendScript - Evaluate Script In Attached Host from the command pallette.
- When errors occur, variables and a call stack are available for inspection

Note

When a final jsx file is compiled from several source files, debugger errors appear in the compiled script rather than the original sources. Unless you generate source maps or use a similar approach, you must trace the failing source file yourself.

This may not apply to compiled files using #include
