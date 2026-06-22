# Panels And Commands

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

Use this topic to compare the two core UXP plugin component types and decide where each one fits.

## Overview

A UXP plugin runs as a self-contained application inside Premiere. A plugin may use either or both component types: **Panels** and **Commands**. The distinction matters when designing plugins that align with how users work in Premiere.

In practical terms, **Commands are actions** and **Panels are workspaces**. Commands perform tasks and then end, while Panels stay open as ongoing interfaces beside Premiere's native panels.

## Commands

Commands are **menu items that execute code when clicked**. They live under **Window** > **UXP Plugins** and suit discrete tasks that do not need UI that remains open.

[Figure: UXP Plugins menu](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/panels-and-commands/img/entrypoints-menu-items.png)

### Command Traits

- **Run then finish**: a command runs its code, completes, and leaves no persistent UI behind.
- **Dialog option**: a command may show a [modal dialog](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/panels-and-commands/index.md#modal-dialogs) to collect input or present output; until dismissed, that dialog blocks interaction with Premiere.
- **Small footprint**: this component type fits compact tasks with no continuing user interaction.
- **No background lifecycle**: commands are not kept running in the background; they start when invoked and complete after execution.

### Good Fits for Commands

Use Commands when the plugin should:

- **Automate focused work**: apply a preset, produce an export, or run a calculation.
- **Run a single action**: transform clip metadata, rename sequences, or create a report.
- **Expose quick utilities**: display plugin information (About dialog), open documentation, or run system checks.
- **Keep the UI simple**: when no continuing interaction is required, a Command avoids adding clutter to the Premiere workspace.

## Panels

Panels are **persistent user interfaces** that can be docked into the Premiere workspace with built-in panels such as the Timeline or Effect Controls. They stay available and interactive during the editing session.

Docking starts from the panel title bar. Do not use the window frame bar; place the panel when the overlay indicates a docking target:

[Figure: Panel docking](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/panels-and-commands/img/entrypoints-docking.png)

### Panel Traits

- **Ongoing interface**: panels remain open and reachable, preserving state between uses.
- **Works alongside Premiere**: users can edit in Premiere and use the panel at the same time.
- **Flexible placement**: panels can be docked, floated, resized, and arranged like native Premiere panels.
- **Lifecycle hooks**: panels provide `create()`, `show()`, `hide()`, and `destroy()` hooks for state management.
- **Dialog option**: Panels, like Commands, can open modal dialogs when focused input or confirmation is needed.

### Good Fits for Panels

Use Panels when the plugin should:

- **Support continuous interaction**: keep controls, settings, or visualizations available across a session.
- **Handle complex workflows**: present multi-step flows or rich interfaces with tabs, lists, or forms.
- **Fit into the workspace**: give users a tool they can place and resize as part of their preferred layout.

## Key Differences

Use this comparison when choosing between the component types:

| Aspect | Commands | Panels |
| --- | --- | --- |
| **UI Presence** | No persistent UI (optional modal only) | Persistent, dockable UI |
| **User Interaction** | Blocking (if modal dialog is shown) | Non-blocking |
| **Lifecycle** | Execute and complete | Remain open with lifecycle hooks |
| **Best For** | One-time actions, automation | Ongoing interaction, complex workflows |
| **Complexity** | Lightweight, focused tasks | Rich interfaces with multiple controls |

## Modal Dialogs

Both Commands and Panels can display **modal dialogs**, which are temporary windows that prevent Premiere interaction until the user closes them. Modal dialogs work well for:

- **Input collection**: collect locations, dimension values, or configuration options.
- **Action confirmation**: "Are you sure you want to delete?"
- **Result presentation**: present completion messages, errors, or summary information.
- **Focused flows**: walk users through attention-requiring multi-step processes.

Modal Dialogs

Modal dialogs are **blocking by design**: users cannot return to Premiere until the dialog closes. That behavior is useful for required input or critical decisions, but overuse can interrupt a workflow.

### Commands with Modal Dialogs

For Commands, modal dialogs often serve as the **primary interface**. Because a Command has no persistent UI, the dialog can provide the input surface it needs. For example:

- An "Export Project Summary" Command might open a dialog for choosing output format and destination.
- An "About" Command can present plugin details inside a blocking dialog.

[Figure: Commands with Modal Dialogs](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/tutorials/add-modal-dialogs/img/add-modal-dialogs-command-modal.png)

### Panel Modal Dialog Patterns

Panels typically use modal dialogs for **secondary interactions** where the user must focus on a specific decision or task. The panel remains the main interface, and dialogs cover targeted operations. For example:

- A "Settings" button in a panel can open a modal dialog for preference configuration.
- A "Confirm Delete" dialog can appear after a user selects a destructive panel action.

[Figure: Panels with Modal Dialogs](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/tutorials/add-modal-dialogs/img/add-modal-dialogs-simple-modal.png)

## Combining Commands and Panels

One plugin may define **multiple Commands, multiple Panels, or both**. That flexibility lets plugin structure follow user needs:

- **Panel + Commands**: use a main panel for ongoing work and Commands for quick utilities or batch operations.
- **Multiple Panels**: split different features into separate panels, such as a control panel and a preview panel.
- **Multiple Commands**: collect related automation tasks under one plugin.

Every Command and Panel from the same plugin appears under that plugin's submenu in **Window** > **UXP Plugins**.

## Implementation

This guide focuses on the concept-level distinction between Panels and Commands. Implementation coverage is available here:

- **[Entrypoints Guide](uxp-concepts.md)**: covers declarations and implementation for Panels and Commands.
- **[Add a Command Tutorial](uxp-tutorials.md)**: walks through Command creation.
- **[Add Multiple Panels Tutorial](uxp-tutorials-2.md)**: shows how to build plugins with several Panel entrypoints.
- **[Add Modal Dialogs Tutorial](uxp-add-modal-dialogs.md)**: explains modal-dialog creation for Commands and Panels.

## Summary

**Commands** run discrete tasks and may use modal dialogs, making them suited to automation and one-time actions. **Panels** offer persistent, dockable interfaces for continuing interaction and more complex workflows. Either component type can show modal dialogs when focused input or confirmation is required.

Use the component model that best matches the plugin's purpose, or combine both to build flexible tools for Premiere users.
