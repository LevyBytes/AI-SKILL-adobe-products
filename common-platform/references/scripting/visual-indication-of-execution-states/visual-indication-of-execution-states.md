# Debugging in the Toolkit - Visual indication of execution states

When a script stops at a breakpoint, or reaches the next line during line-by-line stepping, the document window shows the current script and highlights the current line in yellow.

For a runtime error, the Toolkit stops script execution, shows the current script with the current line highlighted in orange, and reports the error in the status line. Use the Data Browser for more detail about current data assignments.

Scripts commonly wrap code that might raise a runtime error in a try/catch clause, so the error can be handled programmatically instead of terminating the script. To allow that normal catch-clause handling instead of breaking into the debugger, choose Debug > Don't Break On Guarded Exceptions. Some runtime errors, including Out Of Memory, always terminate the script regardless of this setting.
