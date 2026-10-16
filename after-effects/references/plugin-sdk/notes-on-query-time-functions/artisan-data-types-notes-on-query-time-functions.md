# Artisan Data Types — Notes On Query Time Functions

`AEGP_QueryXformGetTransformTime`() and `AEGP_QueryXformGetViewTime`() are both required when an artisan builds the scene representation it will render.

`AEGP_QueryXformGetTransformTime`() retrieves the transform time, which is then supplied to `AEGP_GetCompShutterFrameRange`() from `AEGP_CompSuite11`.

`AEGP_QueryXformGetViewTime`() retrieves the view time, which is used when calling `AEGP_GetLayerToWorldXformFromView`() from `AEGP_LayerSuite9`.
