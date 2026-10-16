# Entry Point — Entry Point Function Parameters

| Argument | Purpose |
| --- | --- |
| cmd | Through the Command Selectors, After Effects signals to the plug-in which action to perform. |
| in_data | Details on the application's state plus the data the plug-in has been directed to operate on. It also hands over pointers to a range of interface and image manipulation functions. |
| out_data | Relay information back to After Effects by populating fields inside out_data. |
| params | The plug-in's parameters as they stand at the moment given in in_data->current_time. The input image — a PF_EffectWorld / PF_LayerDef the effect is meant to process — sits at params[0]. These hold good only during specific selectors (noted within the selector descriptions). Parameters get a thorough treatment here: PF_ParamDef. |
| output | The image the effect plug-in renders and returns to After Effects. Good only during specific selectors. |
| extra | What the extra parameter holds shifts according to the command issued or, with PF_Cmd_EVENT, the event type. Its main role is event handling and Parameter Supervision. |
