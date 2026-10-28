# User Interface

Script UI is limited to dialog display. Any interface a script creates is modal by nature. If `showModal()` is called without `await` and its Promise is not allowed to return, script execution can continue until completion, at which point the UI is destroyed. When a modal UI does not appear, verify that `await` precedes the call.

If a script needs more than 2-3 seconds to finish, Photoshop shows a **progress bar** automatically.
