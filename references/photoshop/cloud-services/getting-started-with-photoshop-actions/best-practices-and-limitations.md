# Best practices and limitations

- Photoshop app dialogs are supported, but interactions with operating system dialogs are not. As a result, Photoshop API cannot programmatically open a system-level print settings dialog.
- Create Actions that avoid user intervention, including confirmation prompts or file-path entry.
- Test actions in Photoshop against several different input/images. If Photoshop reports errors, the same action will not complete successfully on servers.

Photoshop API has these known unsupported areas:

- Photoshop 3D plus Video and animation features.
- Custom presets, such as color swatches and brushes.
- Multiple file inputs are not currently supported by this endpoint.

Playback can run every task recorded in an Action, or target one task from an Actions file while excluding the rest.
