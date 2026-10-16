# selection

windowOrContainerObj.selection

### Description

Info

For TabbedPanel objects only.

The active Tab child. Assigning this property switches the active tab. Its value may be null only when the panel has no children; assigning null otherwise is an error.

Whenever the value changes, whether from the user choosing another tab or from a script assignment, the panel's onChange callback is invoked.

### Type

tab
