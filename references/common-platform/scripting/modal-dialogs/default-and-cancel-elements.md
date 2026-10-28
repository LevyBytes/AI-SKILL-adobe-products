# Default and cancel elements

Users commonly close a modal dialog by clicking OK or Cancel, or by using certain keyboard shortcuts. Convention treats ENTER as equivalent to clicking OK or the default button, and ESC as equivalent to clicking Cancel. The shortcut behaves the same as calling notify for the related button control.

Set the Dialog object's defaultElement and cancelElement properties to choose which control receives each keyboard shortcut notification. Each value is the control object to notify when the user presses the corresponding shortcut.

- When a button is assigned to defaultElement and has no onClick handler, clicking it or pressing ENTER calls the parent dialog's close method, passing 1 back through the show call that opened the dialog.
- When a button is assigned to cancelElement and has no onClick handler, clicking it or pressing ESC calls the parent dialog's close method, passing 2 back through the show call that opened the dialog.

If defaultElement and cancelElement are not set directly, ScriptUI attempts to choose sensible defaults just before the dialog is first displayed. For the default element, it searches for a button whose name or text value is "ok" without considering case. For the cancel element, it searches for a button whose name or text value is "cancel" without considering case. Because name is examined before text, the behavior still works when the visible text is localized. If the dialog has no matching button, the property stays null and the keyboard shortcut does nothing in that dialog.

For best use of this feature, always include the name creation property on buttons intended for these roles.
