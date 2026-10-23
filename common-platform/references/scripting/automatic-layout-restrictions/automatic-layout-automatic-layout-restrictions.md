# Automatic layout - Automatic layout restrictions

These restrictions apply to automatic layout:

- The default layout manager skips any container with a defined bounds property. A script author can change that behavior by assigning a custom layout manager to the container.
- After the initial layout is complete, the layout mechanism does not monitor later size changes on elements. A script can start another layout pass by calling the layout manager's layout method, and it can force child-container sizes to be recalculated by passing true as the optional argument.
