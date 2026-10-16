# Command execution options

An action descriptor may include an `_options` property. When it is present, the value defines how Photoshop executes the command.
`_options` supports these values:

- `dialogOptions: string`. This value determines how Photoshop presents UI while running the command. Available values are:
  - "silent": Photoshop runs the command with no UI. If an error happens, or if the command lacks required parameters, Photoshop returns a scripting error. This is the default.
  - "dontDisplay": Photoshop runs the command without UI unless an error happens or the command needs more parameters. In that case, UI may appear.
  - "display": Photoshop shows the standard UI for the command.
- `suppressProgressBar: boolean`. Use this value to hide a Photoshop progress bar while the command runs. It is mostly used when running a command that requires user interaction.
