# `PF_EventUnion` — Keydown

A key was pressed by the user while the effect's UI is active.

To read and work with the key codes you receive, rely on the macros in `AE_EffectUI`.h.

For keydown events to arrive in Premiere Pro, a plug-in has to set `PF_CustomEFlag_COMP` in `PF_CustomUIInfo`.events during `PF_Cmd_PARAM_SETUP`.
