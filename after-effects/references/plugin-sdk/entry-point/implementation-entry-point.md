# Implementation - Entry Point

```cpp
A_Err AEGP_PluginInitFuncPrototype(
struct SPBasicSuite *pica_basicP,
A_long major_versionL,
A_long minor_versionL,
AEGP_PluginID aegp_plugin_id,
AEGP_GlobalRefcon *global_refconP);

```

Exported through the PiPL Resources, the plug-in's entry point fires only one time at launch; every other call destined for the AEGP lands on the functions it registered.

That stands in sharp contrast to the effect plug-in design, where one shared entry point carries all communication.

Since load order among plug-ins isn't fixed, grabbing suites that After Effects doesn't itself provide during your entry point function is never wise. Hold off until the right hook function(s) instead.

When an AEGP has to act differently or cope with differing behavior, the AEGP API Versions let it tell one After Effects version apart from another.

Those remaining functions get registered as callback hooks. Any AEGP that contributes menu items has to register an UpdateMenuHook function (its signature is laid out in AE_GeneralPlug.h) that After Effects can invoke to decide whether to enable them. By the same token, plug-ins that handle commands register a CommandHook — just one for the lot.
