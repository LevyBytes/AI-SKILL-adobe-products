# Key Concepts

Modal dialogs use the plugin's existing HTML document, much like [multiple panels](add-multiple-panels.md). Unlike panel content, they **appear as floating windows** and must be closed before the user can work in Premiere again. That behavior suits focused flows such as setup wizards, confirmation prompts, and data-entry forms.

At the simplest level, a modal dialog is a `<dialog>` element in the HTML document opened through the `uxpShowModal()` method.

[Figure: Modal Dialog](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/tutorials/add-modal-dialogs/img/add-modal-dialogs-simple-modal.png)

This example opens a basic modal dialog from a button in the main panel.
