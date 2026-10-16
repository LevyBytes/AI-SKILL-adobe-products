# GroupItem

app.activeDocument.groupItems[index]

### Description

A GroupItem represents art collected into one group. It can include any page item type that a layer can hold, including groups nested inside it.

When a script queries document paths, paths inside a group or compound path are returned as separate path objects. Querying paths from a layer that contains that group or compound path does not return the paths inside it.
