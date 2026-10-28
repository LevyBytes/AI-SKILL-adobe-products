# Structuring documents for XML - Rearrange structured elements

Within the Structure pane, you can reorder elements and change their hierarchy level. Keep these constraints in mind:

An XML document must contain exactly one root element at the top of the structure. That root element is the parent container for all other elements. In the Structure pane, only the DTD shown as a DOCTYPE element, comments, and processing instructions can be placed before the root element.

Changing the XML hierarchy can change how tagged items appear on InCopy pages. For example, if you make a text element a child of an element elsewhere in the structure, the text also shifts in the layout.

A table cell element cannot be dragged into a table element, and elements cannot be moved into a table element.

In the Structure pane, use any of these methods:

To move an element, drag it to a different position in the structure. While you drag, a line shows the insertion point, and the line width indicates the hierarchy level.

To make an element a child of another element, drag it onto the intended parent until that parent is highlighted, or place it with the other children under that parent before releasing the mouse button.

To demote an element one hierarchy level, drag it just above another parent element, then move it slightly left until the placement line spans the parent element's width.

To copy or cut an element, select one or more elements in the Structure pane, and then choose Edit > Copy or Edit > Cut. Select the element immediately before the desired insertion point, and choose Edit > Paste.

Note

Cutting an element places the element and its contents on the clipboard, while the frame itself stays in place.
