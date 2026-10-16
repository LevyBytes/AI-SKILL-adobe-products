# DOM

- Closing a dialog does not remove it from the DOM. That behavior follows the spec. To remove the dialog from the DOM, call `HTMLDialogElement#remove` explicitly.
- Applying HTML through `innerHTML` currently parses event handlers and scripts in Photoshop, but not in XD. **DO NOT RELY ON THIS BEHAVIOR**, because it will probably be removed later and align with XD's intentional behavior.
- These **Canvas** APIs are not working on `Windows` - createLinearGradient(), createRadialGradient() and clearRect().
