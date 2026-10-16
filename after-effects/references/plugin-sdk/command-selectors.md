# Command Selectors

Put plainly, commands are what After Effects is asking your effect to carry out.

A few selectors demand a response; the bulk are optional — though keep in mind we didn't add them on a whim...

Every command selector it dispatches carries, for the effect to receive, the following: PF_InData holds details from After Effects; PF_ParamDef[] (an array describing the parameters, with the input layer among them) holds the input and parameter values; and callbacks plus function suites are made reachable too.

Back to After Effects they return data in PF_OutData and, where it fits, render their output into a PF_LayerDef, which also goes by PF_EffectWorld.

When events occur, event-specific details reach them through PF_EventExtra.
