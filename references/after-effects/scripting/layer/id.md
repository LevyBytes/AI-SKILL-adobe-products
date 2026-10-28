# Layer.id

app.project.item(index).layer(index).id

Note

This functionality was added in After Effects 22.0 (2022)

### Description

A property on each Layer instance that yields a stable, one-of-a-kind identification number used behind the scenes to tell one Layer from another across sessions.

Saving the project to a file and reopening it later leaves the ID unchanged.

Import that project into a different project, though, and fresh IDs are handed out to all of the imported project's Layers. Nowhere in the user interface is the ID shown..

### Type

Integer; read-only.
