# `PF_EffectWorld` / `PF_LayerDef` — Rowbytes In `PF_EffectWorlds`

Don't count on reaching a `PF_EffectWorld`'s next scanline with (width \* sizeof(current_pixel_type)) + 4 or anything similar; rely on the `PF_EffectWorld`'s rowbytes instead.

Writing past the marked region of a `PF_EffectWorld` is off-limits — doing so can corrupt cached image buffers you don't own.

Want to check that your effects respect the `PF_EffectWorld`>rowbytes? Run the Grow Bounds effect right after yours.

The output buffer ends up with bigger rowbytes than the input, even though its logical size stays the same.
