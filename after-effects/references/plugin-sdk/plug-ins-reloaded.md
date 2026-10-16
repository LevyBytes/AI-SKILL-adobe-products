# Plug-Ins... Reloaded

On its first launch, Premiere Pro loads every plug-in, reads the PiPL, and sends `PF_Cmd_GLOBAL_SETUP` to determine plug-in capabilities. To speed later application launches, it stores some of those capabilities in the plug-in cache, which is the registry on Windows and a Property List file on macOS. On the next launch, cached information is used wherever possible instead of loading the plug-ins.

While debugging, holding Shift during Premiere Pro launch forces all plug-ins to reload.

If your effect must reload every time, caching can be disabled. From the Premiere Pro SDK headers, use the PF Cache On Load Suite in `AE_CacheOnLoadSuite`.h, then call `PF_SetNoCacheOnLoad`() during `PF_Cmd_GLOBAL_SETUP`. For that function's second parameter, pass a non-zero value when the effect should appear in the UI. Pass zero when loading failed but Premiere Pro should try loading it again on the next relaunch.
