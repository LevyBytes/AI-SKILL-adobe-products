# Add Multiple Panels

Create a plugin that declares multiple panel entrypoints and controls their display from code.

### Overview

Many plugins use just one panel, but UXP also supports **multiple panels within the same plugin**. This helps when separate features should live in their own focused UI, such as a primary control panel plus a settings or preview panel. You'll learn how to:

- Define several panel entrypoints in a manifest
- Arrange HTML for multiple panels
- Use lifecycle hooks for panel visibility behavior
- Open one panel programmatically from another

Use the [Entrypoints guide](uxp-entrypoints/entrypoints.md) and [Lifecycle Hooks guide](add-lifecycle-hooks.md) as background for this tutorial. If those concepts are unfamiliar, review them first. Programmatically opening a panel from another panel uses the [Inter-Plugin Communication](inter-plugin-communication/reference-index.md) tutorial, though that detail is not required just to understand multi-panel plugin creation.
