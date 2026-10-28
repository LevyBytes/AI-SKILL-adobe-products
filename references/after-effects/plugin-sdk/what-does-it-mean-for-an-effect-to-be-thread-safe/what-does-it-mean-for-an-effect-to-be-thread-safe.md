# Multi-Frame Rendering in AE - What does it mean for an effect to be thread-safe?

You can call an effect thread-safe when its implementation and shared data are certain to be without race conditions and remain in a valid state whenever accessed from more than one thread at once.

Put more precisely, the effect:

1. Either carries no static or global variables at all, or any it does carry are kept clear of race conditions.
2. Leaves in*data->global_data unwritten at render time. Reads are fine; restrict any writes to `PF_Cmd_GLOBAL_SETUP` and `PF_Cmd_GLOBAL_SETDOWN`.
3. Leaves in*data->sequence_data unwritten at render time and throughout the `PF_Cmd_UPDATE_PARAMS_UI` event. Reads are fine through the `PF_EffectSequenceDataSuite` interface.

Note

Should an effect rely on any blocking synchronization primitives — mutexes or gates, say — it must not keep them held while calling back into the host. Typical such calls happen when you use a suite or issue a checkout call. Neglecting this will very probably land you in a deadlock.
