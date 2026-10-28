# What's New - What's New in CC 2014 (13.0)?

From CC 2014 onward, After Effects will respect a change to custom UI height that was made via `PF_UpdateParamUI`.

AEGP Effect Suite has reached version 4 and brings new functions for handling effect masks. `AEGP_RenderSuite` now sits at version 4 with a new function, `AEGP_RenderAndCheckoutLayerFrame`, that permits checking out a frame of the current

layer with effects applied outside of render time. That's handy for any operation needing the frame — say, when a button gets clicked and a brief wait during rendering is tolerable.

Note

Because it isn't asynchronous, it won't address the broader case where custom UI has to draw from the frame.

You spell out the layer render options through the new `AEGP_LayerRenderOptionsSuite`.

Support for Mercury Transmit plug-ins and HTML5 Panels is now in place.
