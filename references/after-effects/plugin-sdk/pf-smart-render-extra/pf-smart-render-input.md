# PF_SmartRenderInput

`PF_SmartRenderInput`

Made up of a `PF_RenderRequest`, the bitdepth, and a pointer to pre*render_data (which was allocated back in `PF_Cmd_SMART_PRE_RENDER`). The same `PF_SmartRenderInput` handed to the matching `PF_Cmd_SMART_PRE_RENDER` is what you get here.
