# `runDialog()`

`runDialog()` awaits `uxpShowModal()` and processes the returned result after dismissal: `"ok"`, `"cancel"`, or `"reasonCanceled"` for the title-bar close control or Esc.

This method treats cancellation as an exception path. If the user cancels, it throws `"cancel"` so callers must handle that case in a `catch` block. When the dialog returns OK, it calls the private `#runRoutine()` method to perform the work, such as Premiere API calls.
