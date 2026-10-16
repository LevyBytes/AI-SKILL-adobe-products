# FolderItem.items

app.project.item(index).items

### Description

An ItemCollection object whose Item objects make up the folder's top-level contents.

This collection differs from the one on the Project object: it lists only the folder's top-level items. Being top-level inside the folder is not equivalent to being top-level inside the project.

Items count as top-level in the Project only when they sit at the top level of the root folder.

### Type

ItemCollection object; read-only.
