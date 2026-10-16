# HTML events and event listeners

Several approaches are available for catching an HTML event and attaching `eventlisteners` to an element.

The choice is mostly stylistic, so use whichever pattern fits your code best. Manifest setup is required for the inline-handler form, for example `<button onclick="btnClick()">Click Me</button>`.

Plugins and Scripts

**In plugins**, inline event handlers like the example above require `allowCodeGenerationFromStrings` to be enabled.
IMPORTANT: Review the [manifest permissions](uxp-plugins.md) module before continuing.

**In scripts**, inline event listeners cannot be added, so that permission has no effect.

### Examples

**Declaring event listeners in JavaScript**
