# Dismissing a modal dialog

Every modal dialog needs at least one button the user can click to close it. Most modal dialogs use OK and Cancel buttons so the user can close while either accepting or abandoning the dialog's changes.

Button onClick callbacks can close the parent dialog by calling its close method. You may pass a value to close; that value is forwarded through and returned by the show method that opened the dialog. The return value lets the script tell closing events apart; for example, OK might return 1 and Cancel might return 2. For that common pattern, explicit callbacks are unnecessary; see Default and cancel elements.

A simple alert that has only OK usually does not need to return any value. More involved dialogs with several possible actions may need more outcomes. When more than two closing states must be distinguished, define custom closing callbacks instead of using the default behavior.

If a modal dialog is accidentally built without dismissal buttons, or if its buttons exist but their onClick handlers fail, the user can still close it by pressing ESC. In that situation, the system calls the dialog's close method with a value of 2. This is not a recommended dialog design; it exists as a fallback so an application is not left hanging because of a dialog operation error.
