# DOM

- Closing a dialog leaves it in the DOM. That matches the specification. To remove it from the DOM, call `HTMLDialogElement#remove` explicitly.
- When HTML is applied through `innerHTML`, Photoshop currently parses event handlers and scripts, while XD does not. **DO NOT RELY ON THIS BEHAVIOR** because it will probably disappear later and align with XD's by-design behavior.
- On `Windows`, these **Canvas** APIs are not working: createLinearGradient(), createRadialGradient(), and clearRect().
