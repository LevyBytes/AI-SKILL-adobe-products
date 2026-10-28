# What's New - What's New in CC (12.0)?

Effect names are now allowed up to 47 characters, raised from the prior limit of 31.

We introduced the `PF_AngleParamSuite`, which offers a route to read floating point values from angle parameters. Version 5 of PF App Suite brings `PF_AppGetLanguage` for querying the active language — letting a plug-in pick the right language string — plus several fresh `PF_App_ColorType` enum values covering new elements whose colors can be queried.

AEGP Persistent Data Suite has climbed to version 4, where `AEGP_GetApplicationBlob` gains an added parameter for choosing among several distinct application blobs. New functions also arrive for getting and setting time and ARGB values.

AEGP Composition Suite is now version 10, adding new functions that check or change whether layer names or source names appear, and whether the blend modes column shows. There are also new functions for reading and writing the Motion Blur Adaptive Sample Limit.

AEGP Layer Suite has moved to version 8 and adds new functions for setting and getting a layer's sampling quality. `AEGP_CanvasSuite` is now at version 8 as well. Its new `AEGP_MapCompToLayerTime` function deals with time remapping across collapsed or nested comps, which `AEGP_ConvertCompToLayerTime` does not.

`AEGP_UtilitySuite` has reached version 6 with a new Unicode-aware function, `AEGP_ReportInfoUnicode`. A further new function, `AEGP_GetPluginPaths`, surfaces some handy paths tied to the plug-in and to the After Effects executable itself.

`AEGP_NewPlaceholderFootageWithPath` had its behavior revised so that file_type should now be set properly; otherwise a warning shows up.

`AEGP_InsertMenuCommand` is now able to drop menu items into the File>New submenu.

`AEGP_IOInSuite` has advanced to version 5, adding new functions to get, set, and clear the native start time, and to get and set footage's drop-frame setting.
