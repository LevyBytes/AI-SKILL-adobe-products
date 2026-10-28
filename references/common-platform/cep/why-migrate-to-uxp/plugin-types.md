# Plugin Types

In CEP, placing an extension in the Window-->Extensions menu requires the `<Menu>` tag. To start the extension from an event, list those events with the `<StartOn>` tag. Define every CEP extension type in manifest.xml.

| CEP Extension Type | Specifications |
| --- | --- |
| Panel | DockableResizableFly-out menusRe-opened at startup if open at shutdown Modal Dialog Opens a new extension window and forces the user to interact with it before returning control to the host application |
| Invisible/Custom | Extensions that never become visible during their lifecycle (CEP 5.0+) Modeless Opens a new extension window but does not force the user to interact with the extension window |

UXP, by contrast, organizes plugins as commands or panels. Metadata such as size, icons, label, and ID lives in `manifest.json`, while `entrypoints.setup()` defines plugin behavior and functionality.

| UXP Plugin Type | Specifications |
| --- | --- |
| Panel | DockableResizableFly-out menusFly-out menusEasily theme-awareBy default, loads only when needed (PS 23.1+)Can be launched in a modal state Command Direct action command that executes a custom taskTriggered by user selection from Plugins menuOption for no UIA progress bar dialog will appear with a "Cancel" option if the task runs for longer than 2 seconds. To identify which task is running, the progress bar will be labeled with your command name.Can be launched in a modal state |

[Appendix 1: An overview of UXP vs. CEP vs. ExtendScript](../platform-capability-comparison.md)
