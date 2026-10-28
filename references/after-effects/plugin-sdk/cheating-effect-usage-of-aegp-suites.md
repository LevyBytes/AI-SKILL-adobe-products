# Cheating Effect Usage of AEGP Suites

When developers first saw AEGP suites, many immediately wanted to "cheat" by calling them from effects. That can be done, but remember that trouble can follow if an effect depends on information outside the effect API, meaning anything obtained from AEGP APIs. For example, if After Effects decides an effect already has enough information to render, parameter updates caused by AEGP function changes may not happen. This dependency problem is under active work for future versions; keep it in mind when writing effects that "masquerade" as AEGPs.

Some AEGP suites are available to effects for camera and lighting information, along with `AEGP_GetLayerParentComp` and `AEGP_GetCompBGColor` from `AEGP_CompSuite11`. Do not read that as permission for effects to call any AEGP suite. For details about effects adding keyframes, also see Effect UI & Events.

Start with `AEGP_PFInterfaceSuite`. Its functions retrieve the `AEGP_LayerH` for the layer receiving the effect and the `AEGP_EffectRefH` for the effect instance. `AEGP_RegisterWithAEGP` from `AEGP_UtilitySuite6` provides an `AEGP_PluginID`, which many AEGP calls require.
