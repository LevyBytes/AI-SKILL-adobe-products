# AEGP Suites — StreamRefs And EffectRefs

Wondering how to obtain an `AEGP_StreamRef` for an effect? Begin by fetching the effect's `AEGP_EffectRef` via `AEGP_GetNewEffectForEffect`().

Next call `AEGP_GetNewEffectStreamByIndex`() - using param index 1, for example - and it returns a parameter stream.

After that, a call to `AEGP_GetNewParentStreamRef`() delivers your `AEGP_StreamRef`, sir!

Should you grab references to an effect's streams, hold onto the `AEGP_EffectRefH` until you've finished with the streams, otherwise you'll throw After Effects' checkout mechanism out of balance. Keep in mind, too, that `AEGP_StreamRefHs` are opaque whereas `AEGP_StreamValue2s` are not (well, not completely).

For an effect's instance name (the one the user renamed it to), obtain the `AEGP_StreamRef` for the effect itself and call `AEGP_GetStreamName`.
