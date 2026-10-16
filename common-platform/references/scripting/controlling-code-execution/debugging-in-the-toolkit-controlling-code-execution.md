# Debugging in the Toolkit — Controlling code execution

You can invoke debugging commands through the Debug menu, the document window's right-click context menu, keyboard shortcuts, or toolbar buttons. When the JavaScript Debugger is active, use these commands and buttons to manage code execution.

| Icon | Action | Hotkey | Description |
| --- | --- | --- | --- |
|  | Run/Continue | F5 (Windows) Ctrl R (Mac OS) | Starts or resumes execution of a script. Disabled when script is executing. |
|  | Break | Ctrl F5 (Windows) Cmd . (Mac OS) | Halts the currently executing script temporarily and reactivates the JavaScript Debugger. Enabled when a script is executing. |
|  | Stop | Shift F5 (Windows) Ctrl K (Mac OS) | Stops execution of the script and generates a runtime error. Enabled when a script is executing. |
|  | Step Over | F10 (Windows) Ctrl S (Mac OS) | Halts after executing a single JavaScript line in the script. If the statement calls a JavaScript function, executes the function in its entirety before stopping (do not step into the function). |
|  | Step Into | F11 (Windows) Ctrl T (Mac OS) | Halts after executing a single JavaScript line statement in the script or after executing a single statement in any JavaScript function that the script calls. |
|  | Step Out | Shift F11 (Windows) Ctrl U (Mac OS) | When paused within the body of a JavaScript function, resumes script execution until the function returns. When paused outside the body of a function, resumes script execution until the script terminates. |
