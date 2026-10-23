# `PF_EffectWorld` / `PF_LayerDef` - Byte Alignment

There's no guarantee that a `PF_EffectWorld`'s pixels sit on 16-byte boundaries. An effect might be handed a subregion of a larger `PF_EffectWorld`. Anyone using Apple's sample pixel-processing optimization code, consider this your warning.

Past 8-bit-per-channel color, After Effects also handles 16-bit and 32-bit float per channel.

Effects will never be given input and output worlds of differing bit depths, nor worlds at a higher bit depth than they've declared they can handle.
