# Add Modal Dialogs

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

Create a Modal Dialog for a Command interface or for extra UI launched from Panels.

Modal dialogs are short-lived windows shown above the main application UI. They require the user to respond before normal work can continue. Panels can sit docked in Premiere's workspace, but **modal dialogs block interaction with the host application until dismissed**, which fits alerts, required decisions, input collection, and other focused interactions.

In UXP, modal dialogs commonly cover two situations:

1. **Command UIs**: Give command entrypoints an interface when they need input or need to show information without keeping a panel open.
2. **Panel dialogs**: Open supplemental UI from a panel for settings, detail views, or data entry while keeping the main panel uncluttered.

You'll work through how to:

- Build modal dialogs launched by command entrypoints
- Open modal dialogs from panel entrypoints
- Set dialog size and behavior
- Process entered values and dialog results
