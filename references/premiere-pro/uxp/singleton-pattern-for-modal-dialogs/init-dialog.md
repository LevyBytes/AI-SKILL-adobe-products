# `initDialog()`

After the dialog has been created in the DOM, `initDialog()` applies defaults and connects handlers. It has two main phases:

1. **State reset**.
2. **Event listener attachment**.

The reset phase runs every time `initDialog()` is called, restoring the input fields to their default values so each opening starts from a clean state. The listener phase is protected by a conditional. It uses HTML5 `data-*` attributes to record whether the handlers have already been installed. When they are missing, the method attaches them and sets the marker to `"true"`, preventing duplicated listeners across repeated openings.

Several helper functions and event handlers appear in this section:

- **Input policy**: Reject incomplete or non-integer values on acceptance; do not silently alter the user’s text. No no-op sanitizer is installed.
- **`readDimensions()`**: Requires complete integer strings, checks both values against the configured range, and returns a width/height object or `null`.
- **OK button handler**: Reads dimensions, stores validated values through the supplied callback and closes with `"ok"`. Invalid input produces an alert and leaves the dialog open.
- **Cancel button handler**: Closes the dialog with `"cancel"`.
- **Enter key handler**: Adds **keyboard accessibility** so pressing Enter can submit the dialog instead of requiring an OK click.

The Enter handler leaves the dialog open when input is invalid. That is intentional: Enter should not submit bad values, so the user must either correct them or cancel explicitly.
