# Parameter Supervision - Updating Parameter Values

The actual value of a parameter — not merely its UI — is editable while `PF_Cmd_USER_CHANGED_PARAM` runs, and also during `PF_Cmd_EVENT` (specifically `PF_Event_DO_CLICK`, `PF_Event_DRAG`, & `PF_Event_KEYDOWN`). Edits attempted outside those windows won't be respected by After Effects.

To alter a parameter's value rather than only its UI, work on the original parameter directly and assign `PF_Paramdef`.uu.change*flags the value `PF_ChangeFlag_CHANGED_VALUE`.

Doing so refreshes the UI as well and leaves the edit undoable by the user. Be aware that layer parameters do not support `PF_ChangeFlag_CHANGED_VALUE`.

The point of this suite is to hand effect plug-ins a measure of reach into their own parameter streams without dragging in AEGP suite usage. Several third-party hosts implement at least a portion of these functions. They prove particularly useful to effects that rely on supervised parameters.
