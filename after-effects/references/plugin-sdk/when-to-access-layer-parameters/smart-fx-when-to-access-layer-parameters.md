# SmartFX - When To Access Layer Parameters

You're free to check out any parameter except layer inputs whenever you like. Layer inputs, by contrast, can only be reached within `PF_Cmd_SMART_PRE_RENDER`.

That said, there's no obligation to actually consume every input.

Should you check out a frame (or just part of one) in `PF_Cmd_SMART_PRE_RENDER` yet never check it out again in `PF_Cmd_SMART_RENDER`, rendering it becomes unnecessary — a big win for performance.
