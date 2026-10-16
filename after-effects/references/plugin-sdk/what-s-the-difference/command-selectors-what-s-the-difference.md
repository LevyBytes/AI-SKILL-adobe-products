# Command Selectors — What's The Difference?

A fine distinction separates `PF_Cmd_USER_CHANGED_PARAM` from `PF_Cmd_UPDATE_PARAMS_UI`.

What an effect has to tell apart is a genuine change to a parameter value by the user (`PF_Cmd_USER_CHANGED_PARAM`) versus mere scrubbing along the timeline (`PF_Cmd_UPDATE_PARAMS_UI`, which also fires the first time the plug-in loads).

Predictability extends only to the opening handful of command selectors; user action drives the remainder of the calling order.

On first application a plug-in is handed `PF_Cmd_GLOBAL_SETUP`, followed by `PF_Cmd_PARAM_SETUP`. `PF_Cmd_SEQUENCE_SETUP` arrives every time the user drops the effect onto a layer.

For every frame that a plain non-SmartFX effect renders, the order from After Effects is `PF_Cmd_FRAME_SETUP`, then `PF_Cmd_RENDER`, then `PF_Cmd_FRAME_SETDOWN`. `PF_Cmd_RENDER` must be handled by all effect plug-ins.

With SmartFX, any number of `PF_Cmd_SMART_PRE_RENDER` calls may precede the single `PF_Cmd_SMART_RENDER` that follows.

On exit — when the user pulls an effect or shuts the project — `PF_Cmd_SEQUENCE_SETDOWN` goes out. `PF_Cmd_SEQUENCE_RESETUP` goes out when a project loads or when the layer it sits on changes. `PF_Cmd_SEQUENCE_FLATTEN` goes out as the After Effects project gets written to disk.

`PF_Cmd_ABOUT` goes out once the user picks About... from the Effect Controls Window (ECW).

`PF_Cmd_GLOBAL_SETDOWN` goes out as After Effects shuts down, or once the final instance of the effect is pulled. Don't lean on this message to tell when your plug-in leaves memory; rely on OS-specific entry points for that.
