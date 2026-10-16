# What's New — What's New in CS6 (11.0)?

A handful of refinements went into smoother parameter UI handling. The `PF_PUI_INVISIBLE` parameter UI flag now works in After Effects, which comes in handy if your plug-in calls for hidden parameters that still affect rendering. These days, when a plug-in disables a parameter through `PF_UpdateParamUI`, we record that state in the UI flags so the plug-in can later inspect the flag and learn whether it's disabled. There's also a new flag, `PF_ParamFlag_SKIP_REVEAL_WHEN_UNHIDDEN`, that lets a parameter be unhidden without twirling any parents open and without scrolling it into view within the Effect Controls panel and the Timeline panel.

Effects that paint a watermark over the output while the plug-in runs in trial mode can now report to After Effects whether watermark rendering mode is on or off, by way of the new `PF_OutFlag2_OUTPUT_IS_WATERMARKED`.

With the arrival of the Global Performance Cache, you now have to instruct After Effects to throw away old cached frames whenever you change how your effect renders.

We took out `PF_HasParamChanged` and `PF_HaveInputsChangedOverTimeSpan`, supplying `PF_AreStatesIdentical` in their place.

Effects offering custom UI can now be sent `PF_Event_MOUSE_EXITED`, alerting them that the mouse left the layer or comp panel. `PF_ParamUtilsSuite` has reached version 3.

`PF_GET_PLATFORM_DATA` now carries new selectors for retrieving the wide character path of the executable and the resource file: `PF_PlatData_EXE_FILE_PATH_W` and `PF_PlatData_RES_FILE_PATH_W`. Their earlier non-wide counterparts are now deprecated.

A central theme of AE CS6 is 3D. A new `AEGP_LayerFlag_ENVIRONMENT_LAYER` has been introduced. Numerous new layer streams were added as well.

On top of that, `AEGP_LayerStream_SPECULAR_COEFF` was renamed `AEGP_LayerStream_SPECULAR_INTENSITY`, `AEGP_LayerStream_SHININESS_COEFF` became `AEGP_LayerStream_SPECULAR_SHININESS`, and `AEGP_LayerStream_METAL_COEFF` was shortened to just `AEGP_LayerStream_METAL`.

A fresh suite, `AEGP_RenderQueueMonitorSuite`, hands a render queue manager everything it needs to work out what's going on at any moment in a render.

AEGP Mask Suite is now version 6 and supplies functions for reading and writing the mask feather falloff type. AEGP Mask Outline Suite has reached version 3 and opens up access to read and write mask outline feather information.

Effects that hinge on masks gain a new flag, `PF_OutFlag2_DEPENDS_ON_UNREFERENCED_MASKS`.

AEGP Composition Suite has moved to version 9. Both `AEGP_CreateTextLayerInComp` and

`AEGP_CreateBoxTextLayerInComp` now take a new parameter, select_new_layerB.

AEGP Render Suite is now version 3 and adds a new function for obtaining the GUID of a render receipt.

Lastly, we've introduced two new read-only Dynamic Stream flags: `AEGP_DynStreamFlag_SHOWN_WHEN_EMPTY` and `AEGP_DynStreamFlag_SKIP_REVEAL_WHEN_UNHIDDEN`.

For effects operating inside Premiere Pro CS6, we've added the means to obtain 32-bit float and YUV frames out of `PF_CHECKOUT_PARAM`.
