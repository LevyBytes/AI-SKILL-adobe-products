# PF_OutFlag2_DOESNT_NEED_EMPTY_PIXELS

`PF_OutFlag2_DOESNT_NEED_EMPTY_PIXELS`

Introduced as a render optimization; it trims the input buffer handed to the effect so empty pixels are left out (here "empty" means "zero alpha" — unless `PF_OutFlag2_REVEALS_ZERO_ALPHA` is on, in which case RGB has to be zero too). Set it during `PF_Cmd_GLOBAL_SETUP` or `PF_Cmd_QUERY_DYNAMIC_FLAGS`. You'll find where the trimmed buffer starts in in_data>pre_effect_source_origin. When an effect raises both this flag and `PF_OutFlag_I_EXPAND_BUFFER`, a fully empty input can result in a null input buffer being passed in, and the effect has to survive that case rather than crash.

Note

raising it may resize the output buffer.

Note

Has no purpose under SmartFX.
