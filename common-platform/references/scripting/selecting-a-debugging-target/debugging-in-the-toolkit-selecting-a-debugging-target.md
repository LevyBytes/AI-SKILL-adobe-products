# Debugging in the Toolkit — Selecting a debugging target

Multiple applications can be debugged at once by the Toolkit. When more than one Adobe application is installed, the drop-down list at the upper left of a document window selects that window's target application. The list includes every installed application that supports JavaScript. If a script is run in an application that is not already running, the Toolkit asks for permission to start it.

Some applications provide more than one JavaScript engine. The engines available in the chosen target application appear in the drop-down list to the right of the application list, along with an icon showing each engine's current debugging state. A target application may expose several JavaScript engines, and more than one engine can be active even though only one is current. An active engine is currently executing code, paused at a breakpoint, or finished with all scripts and waiting for events.

The icon next to an engine name reports one of three states: running, halted, or waiting for input:

| Icon | Status |
| --- | --- |
|  | running |
|  | halted |
|  | waiting |

Toolkit panes show the data and state for the current engine. If the selected target application has only one engine, choosing the application makes that engine current. If the target application has multiple engines, selecting one from the list makes that engine current.

At startup, the Toolkit itself is the default target application. Choosing a different target that is not running causes the Toolkit to request permission and then launch that application. The same permission prompt appears if a script uses the #target directive to specify an application that is not running. If the application is already running but is not the current target, the Toolkit asks whether to switch to it.

Selecting an application that the Toolkit cannot debug opens an error dialog stating that the Toolkit cannot connect to that application.

JSX files use the ExtendScript Toolkit as their default editor. When a JSX file is double-clicked in a file browser, the Toolkit looks for a #target directive and launches that application to run the script, but it checks the script for syntax errors first.

If syntax errors are found, the Toolkit shows the error in a message box and exits silently instead of launching the target application. Example follows:
