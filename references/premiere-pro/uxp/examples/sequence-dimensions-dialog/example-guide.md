# Sequence dimensions dialog

This example implements a Premiere Pro UXP panel for collecting width and height. It logs accepted dimensions; it does not change a sequence. It requires Premiere Pro 25.6 or later and UXP manifest version 5.

Fetch `modal-dialog.js` and `manifest.json` from Adobe's [modal dialog tutorial](https://developer.adobe.com/premiere-pro/uxp/plugins/tutorials/add-modal-dialogs/), then use them with the linked example files in their shown relative layout. Supply the manifest's `icons/dark.png`, `icons/light.png` and `icons/plugin-icon.png` assets before loading the plugin, or remove those optional icon declarations from your own manifest.

- `settings.js` retains the title, 240-by-150 dialog size, 1920-by-1080 defaults and 320–10240 permitted dimension range.
- `dialog-elements.js` loads the fragment HTML and scoped CSS once; failures propagate so a later attempt can retry.
- `dialog-input.js` resets defaults and attaches handlers once. OK alerts on invalid input; Enter leaves invalid input open. Cancel closes without running the routine.
- `modal-dialog.js` retains the singleton, private parameters, result/cancellation behavior and copy-returning `getParams()`. Its routine remains an explicit host-operation placeholder.
- `main.js` opens the dialog from the panel button and restores the button after completion or failure.

The input validation requires complete integers. Values such as `320px` or `320.5` are rejected instead of being silently truncated by `parseInt`. A separate sanitizer is unnecessary because invalid text remains available for correction and cannot be accepted.

The manifest retains the source's `enableAlerts` feature flag and local-filesystem permission. Relative fragment loading follows the source tutorial; the bundled icons are prerequisites, not supplied image assets.
