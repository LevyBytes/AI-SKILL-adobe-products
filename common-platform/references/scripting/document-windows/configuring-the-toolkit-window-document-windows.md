# Configuring the Toolkit window — Document windows

Opening a script or text file creates a separate Script Editor document window for that file. By default, those document windows are docked as tabbed panes in the main window. Like panels, any document window can be dragged out of the frame and used as an independent floating window.

When multiple documents are displayed and at least one is undocked, the document windows can be shown tiled or cascaded: side by side in the main window, or overlapping there. Choose Window > Tile Documents or Window > Cascade to switch to those layouts.

Scripts can be edited or run in several document windows at the same time. The active document window is highlighted and receives input focus. Click another document window to select it, or use Window > Next document and Window > Previous document to move between windows. Their default shortcuts are F6 and SHIFT-F6; change them on the Keyboard Shortcuts page in the Preferences dialog (Edit > Preferences).

Note

Because scripts can run in the same application simultaneously, avoid interrupting one script's processing with another script.

For example, if a script opens a modal dialog in Photoshop and another script targeting Photoshop runs while that dialog remains open, the second script is likely to generate an error.

The button in the upper-right corner of a document window splits that window.

After splitting, the second window shows another view of the exact same source. Text edits, added breakpoints, and similar changes appear in both windows at once. By default, this copy is placed to the right of the original docked window. If you split the window with CTRL-click, the second view appears below the original instead.

For details on document windows and the Script Editor, see The Script Editor.
