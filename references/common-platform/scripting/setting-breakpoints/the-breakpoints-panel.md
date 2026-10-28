# The Breakpoints panel

Every breakpoint set in the current document window is listed in the Breakpoints panel. Its flyout menu can add, change, or remove a breakpoint.

Double-click a breakpoint to edit it, or select it and choose Add or Modify from the panel menu. A dialog lets you change the line number, the enabled state, and the condition statement. It can also set a hit count, allowing the breakpoint to be skipped for a specified number of hits before the debugger is entered. The default is 1, so the first execution breaks.

After the specified hit count is reached, the debugger evaluates the condition. If the condition is not true, the breakpoint is ignored and execution continues. This makes it possible to break only under particular conditions, such as when a variable has a chosen value.
