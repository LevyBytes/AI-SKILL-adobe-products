# Event Notifications

While `executeAsModal` is active, unless [interactive](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/media/executeasmodal.md#interactive-mode) is enabled, Photoshop suppresses event notifications in a way similar to running an action from the actions panel.

As a result, other plugins cannot observe `batchPlay` commands executed during the modal scope.

To receive notifications when a modal JavaScript scope starts or ends, plugins can register for these events:

- `"modalJavaScriptScopeEnter"`
- `"modalJavaScriptScopeExit"`
