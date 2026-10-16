# Item.id

app.project.item(index).id

### Description

A persistent, one-of-a-kind identification number the application uses internally to tell an item apart across sessions. Saving the project to a file and reopening it later leaves this ID untouched. Import the project into a different project, though, and every item from the imported project receives fresh IDs. The ID never surfaces anywhere in the user interface.

### Type

Integer; read-only.
