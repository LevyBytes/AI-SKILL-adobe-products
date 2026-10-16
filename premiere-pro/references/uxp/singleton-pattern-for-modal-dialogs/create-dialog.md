# `createDialog()`

`createDialog()` awaits `createDialogElements()` and shares an in-progress creation promise between concurrent callers. The helper uses `fetch()` and checks the DOM before creating elements; a failed load propagates and can be retried.

The helper inserts CSS under `<head>` with the ID `modal-dialog-styles`, enabling later calls to skip duplicate injection. The dialog has the ID and class `modal-dialog`: the ID supports lookup, and the class scopes selectors such as `dialog.modal-dialog` in the fragment stylesheet.

When the dialog already exists, the helper returns that DOM element for reuse.
