# Bigger Differences — `PF_CHECKOUT_PARAM` and Pixel Formats

Before CS6, `PF_CHECKOUT_PARAM`() always returned 8-bit ARGB buffers, regardless of the pixel format being used for rendering. Beginning in CS6, an effect can opt in to receive checked-out frames in the render request's format, such as 32-bit float, YUV, and so on.

Plug-ins may ask for this behavior, while existing plug-ins continue to receive 8-bit ARGB frames. Use EffectWantsCheckedOutFramesToMatch RenderPixelFormat() from the PF Utility Suite defined in PrSDKAESupport.h. Make the call during `PF_Cmd_GLOBAL_SETUP`, the same selector where an effect would advertise support beyond 8-bit RGB with AddSupportedPixelFormat().
