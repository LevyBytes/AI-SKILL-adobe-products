# User-interaction levels — AppleScript

AppleScript can send commands between machines, which means it has additional interaction cases. In AppleScript:, the user interaction level property has four possible values:

| Property Value | Result |
| --- | --- |
| never interact | No interaction is allowed. |
| interact with self | Interact only with scripts executed from the Scripts menu (File > Scripts). |
| interact with local | Interact with scripts executed on the local machine (including self ). |
| interact with all | Interact with all scripts. |

These four settings let scripts control interaction according to where the command originated. For example, suppose the application serves remote users. A dialog would be hard for a remote user to dismiss, while a person at the local machine could handle it easily. In that situation, interact with local blocks dialogs from stopping remote scripts but still permits dialogs for local scripts.
