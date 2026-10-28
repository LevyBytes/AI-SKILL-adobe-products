# app.endUndoGroup()

app.endUndoGroup()

### Description

Flags where an undo group opened by app.beginUndoGroup() comes to an end. Use it to drop an undo-group boundary partway through a script when you want more than one undo group in a single script. With just one undo group per script you can skip it; left off at the script's end, the system seals the undo group for you. Calling it when no beginUndoGroup() has been set raises an error.

### Parameters

None.

### Returns

Nothing.
