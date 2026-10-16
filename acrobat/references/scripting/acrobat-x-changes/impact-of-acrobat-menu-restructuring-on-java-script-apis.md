# Impact of Acrobat menu restructuring on JavaScript APIs

From Acrobat X forward, the count of top-level menus was trimmed down. Only these top-level entries remain from Acrobat X onward: File, Edit, View, Window, and Help. Any earlier script that pointed at a top-level menu item that has since disappeared will no longer resolve.

From Acrobat X forward, toolbar commands surface through the Tools pane along the right edge of the screen. Because of that, the methods and properties for tailoring the toolbar — app.addToolButton, hideToolBarButton, and removeToolButton — now act on the Tools pane region instead. As an illustration, app.addToolButton drops a button onto the Plugin Addon Tools panel inside the Tools pane.
