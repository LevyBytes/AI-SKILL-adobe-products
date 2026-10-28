# Debugging in the Toolkit - The call stack

The Call Stack panel is active during program debugging. When a running program stops at a breakpoint or runtime error, the panel lists the function-call sequence that led to the current execution point. It shows active function names together with the actual arguments passed to each function.

Example: this panel can show a break at a breakpoint in RGBColorPicker():

The function that contains the breakpoint is highlighted in the Call Stack panel. The Document Window highlights the line that contains the breakpoint.

Click any function in the call hierarchy to inspect that function. In the document window, a green background marks the line containing the function call that led to that execution point. In the example, selecting the run() function in the call stack makes the Document Window highlight the line in that function where RGBColorPicker() was called.

Moving among functions in the call hierarchy lets you trace how the current function was reached. The Console and Data Browser panels stay coordinated with the Call Stack panel. When a function is selected in the Call Stack:

- The Console panel changes scope to that function's execution context, allowing inspection and modification of local variables. Those variables would otherwise be unavailable to the running JavaScript program from inside a called function.
- The Data Browser panel shows all data defined in the selected context.
