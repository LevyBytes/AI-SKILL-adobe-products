# app.beginUndoGroup()

app.beginUndoGroup(undoString)

### Description

Flags where an undo group starts, letting a script bundle all its actions into one undoable step (handy with the Edit > Undo/Redo menu items). Pair it with the app.endUndoGroup() method to flag where the group ends.

You can nest beginUndoGroup() and endUndoGroup() pairs. An inner group folds into the surrounding one and still undoes properly; when that happens the inner group names go unused.

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| undoString | String | The text that will appear for the Undo command in the Edit menu (that is, "Undo") |

### Returns

Nothing.
