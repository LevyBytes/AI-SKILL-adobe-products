# Implementation Details - Export Bit-Depth

In Output Module Settings, the user can choose Depth from the options that the AEIO declares as supported through `AEIO_GetDepths`() from `AEIO_FunctionBlock4`.

When a plug-in supports higher bit-depth exports, it should handle those higher bit-depth `PF_EffectWorlds` passed through `AEIO_AddFrame`() or `AEIO_OutputFrame`(), even if the export setting is not set to that same depth.

The frame delivered to the AEIO and the final output do not necessarily share a depth.

Frames may arrive in project bit-depth instead of final-output depth when After Effects judges that path to produce higher quality.
