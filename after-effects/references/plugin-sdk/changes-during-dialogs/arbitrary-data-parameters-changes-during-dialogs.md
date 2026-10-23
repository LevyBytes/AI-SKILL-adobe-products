# Arbitrary Data Parameters - Changes During Dialogs

Whatever edits land on arbitrary data parameters while `PF_Cmd_DO_DIALOG` is running, After Effects throws them away.

That's intentional: edits performed while the options dialog is on screen apply across the whole effect stream rather than to the arbitrary parameter at one specific time.

Should you need your arb to react to such edits, stash that detail in sequence data and bring it into play afterward — typically when `PF_Cmd_USER_CHANGED_PARAM` arrives.
