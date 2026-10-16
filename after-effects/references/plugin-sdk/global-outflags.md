# Global Outflags

Every audio effect is obliged to set one of `PF_OutFlag_AUDIO_EFFECT_TOO` or `PF_OutFlag_AUDIO_EFFECT_ONLY`.

When a visual effect checks out audio data but leaves it untouched, that's what `PF_OutFlag_I_USE_AUDIO` is for.

Finer command over audio output comes from `PF_OutFlag_AUDIO_FLOAT_ONLY`, `PF_OutFlag_AUDIO_IIR` and `PF_OutFlag_I_SYNTHESIZE_AUDIO` (consult `PF_OutFlags` for the full story).
