# ListBox, DropDownList and TreeView

ListBox, DropDownList and TreeView controls present item lists. The items property holds those entries as ListItem objects, and scripts can reach them with a 0-based index.

- A ListBox control shows a set of choices. At creation time, you decide whether selection is limited to one item or can include multiple items. When the available display area cannot show every entry, a scrollbar can appear so the user can move through the full list. List boxes can also use multiple columns; see Creating multi-column lists.
- A DropDownList control shows one selected item while closed. Clicking the control opens a list where another item can be selected. Drop-down lists may include nonselectable separator items, like menu separators, to visually divide related groups.
- A TreeView control works much like a ListBox, but its items may contain child items. Items that have children can expand or collapse to reveal or hide those children. A child item may itself have further children.
- Use title when an optional label is needed; titleLayout controls where that label sits relative to the list.

Choices can be supplied while the list object is created, or later through the list object's add() method. Scripts can delete entries with the list object's remove() and removeAll() methods.
