# Dialog-based Debugging

For spot checks that should appear in the UI instead of the console, use dialog methods to show values or request input.

Premiere does not fully support `alert()`, `confirm()`, and `prompt()` yet; a later release will address those methods.

Requires Manifest configuration

Before using [`alert()`](../dom/window/alert.md), [`confirm()`](../dom/window/confirm.md), or [`prompt()`](../dom/window/prompt.md), turn on the `enableAlerts` feature flag in [`manifest.json`](../manifest.md).
