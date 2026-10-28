# PF_OutFlag_I_EXPAND_BUFFER

`PF_OutFlag_I_EXPAND_BUFFER`

The effect grows the output buffer. Set during `PF_Cmd_GLOBAL_SETUP`. Set both this flag and `PF_OutFlag_USE_OUTPUT_EXTENT` so that, during `PF_Cmd_FRAME_SETUP`, where your fresh buffer size overlaps the output extent_rect is what's used. Lean on the pre_effect_source_origin fields to spot other transformations.

Note

Set this flag only where you have to; it slashes caching efficiency.

Note

Obsolete for SmartFX.
