# Debugging in the Toolkit - Setting breakpoints

During debugging, pausing on chosen lines helps with inspecting environment state, checking function-call nesting, and confirming variable contents.

- To make a script stop on a particular line, click left of the line number and set a breakpoint. The breakpoint is shown by a red dot.
- A second click disables the breakpoint temporarily, changing the icon color.
- A third click removes the breakpoint and its icon.

Conditional breakpoints are useful in some situations. For example, a loop that runs several thousand times should not necessarily stop on every iteration, but might need to stop only on every 1000th pass.

A breakpoint condition is written as a JavaScript expression. Each time execution reaches that breakpoint, the JavaScript expression runs. Execution stops if the expression evaluates to a nonzero number or true.

For a loop breakpoint, one possible condition is "i >= 1000"; execution stops once iteration variable i has reached 1000 or above.
