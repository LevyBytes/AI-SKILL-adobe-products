# Example: Close a Modal Dialog and return a value

This example uses a modal dialog with two buttons: **OK** and **Cancel**. Either click dismisses the dialog and returns `"ok"` or `"cancel"` as appropriate.

[Figure: Modal Dialog - close event](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/tutorials/add-modal-dialogs/img/add-modal-dialogs-close-event.png)

To receive that value, call `uxpShowModal()` with `await`; mark the button "click" event handler as `async` too.
