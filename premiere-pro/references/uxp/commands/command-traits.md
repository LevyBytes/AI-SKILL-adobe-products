# Command Traits

- **Run then finish**: a command runs its code, completes, and leaves no persistent UI behind.
- **Dialog option**: a command may show a [modal dialog](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/concepts/panels-and-commands/index.md#modal-dialogs) to collect input or present output; until dismissed, that dialog blocks interaction with Premiere.
- **Small footprint**: this component type fits compact tasks with no continuing user interaction.
- **No background lifecycle**: commands are not kept running in the background; they start when invoked and complete after execution.
