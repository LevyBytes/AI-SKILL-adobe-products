# DOM

- Closing a dialog leaves it in the DOM, which follows the specification. To remove it from the DOM, explicitly call `HTMLDialogElement#remove`.
- HTML assigned through `innerHTML` currently has event handlers and scripts parsed in Photoshop, while XD does not parse them. **DO NOT RELY ON THIS BEHAVIOR** because it is likely to disappear later and align with XD's intentional behavior.
- These **Canvas** APIs do not work on `Windows`: createLinearGradient(), createRadialGradient() and clearRect().
