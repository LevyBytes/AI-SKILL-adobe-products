# Command Selectors — Calling Sequence

Just the opening handful of command selectors can be counted on; from there, what the user does drives the rest of the calling sequence.

On first being applied, a plug-in gets PF_Cmd_GLOBAL_SETUP, followed by PF_Cmd_PARAM_SETUP. PF_Cmd_SEQUENCE_SETUP arrives every time the user attaches the effect to a layer.

For every frame a basic non-SmartFX effect renders, After Effects fires PF_Cmd_FRAME_SETUP, next PF_Cmd_RENDER, and then PF_Cmd_FRAME_SETDOWN.

PF_Cmd_RENDER is something every effect plug-in has to handle

With SmartFX, any number of PF_Cmd_SMART_PRE_RENDER calls can precede the lone PF_Cmd_SMART_RENDER that follows.

On exit — when the user strips out an effect or shuts the project — PF_Cmd_SEQUENCE_SETDOWN goes out. PF_Cmd_SEQUENCE_RESETUP fires when a project loads or when the layer it's attached to changes. When After Effects writes the project out to disk, PF_Cmd_SEQUENCE_FLATTEN is sent.

PF_Cmd_ABOUT goes out once the user picks About... from the Effect Controls Window (ECW).

After Effects sends PF_Cmd_GLOBAL_SETDOWN as it shuts down, or when the final instance of the effect goes away. Don't lean on this message to tell when your plug-in is leaving memory; rely on OS-specific entry points instead.

## Related plugin interfaces

- [AEIO registration and startup](../aeio-registration-lifecycle.md).
