# PF_CHECKOUT_PARAM

`PF_CHECKOUT_PARAM`

Obtains parameter values, or the source video layer, at a specified time. After Effects makes caching decisions based on the checkout state of parameters.

Allocate a new PF_ParamDef to hold the result; those passed to the plug-in are read-only.

If you check out a layer parameter that's set to &lt;none&gt;, the layer returned will be filled with zeros.

Masks are not included with checked-out layers.

Do not check out layer parameters during UI event handling.

```cpp
PF_Err PF_CHECKOUT_PARAM (
  PF_InData      *in_data,
  PF_ParamIndex  index,
  A_long         what_time,
  A_long         step,
  A_long         time_scale,
  PF_ParamDef    *param);
```

When the source layer is what you check out, the frame comes back deinterlaced. Request a time that points at the upper field and you get the upper field back, with a filter producing the in-between scanlines. Say lines 0 and 2 hold upper fields while line 1 holds a lower field: checking out the upper fields hands lines 0 and 2 straight from the source footage, and derives line 1 by averaging lines 0 and 2. To rebuild a full-resolution source frame containing both fields, call `PF_CHECKOUT_PARAM` twice — once per field — and reinterlace the footage yourself. And if the checkout time falls between frames? Every item carries effectively unlimited time resolution, so After Effects renders it at whatever time you request. With a composition, that means interpolating all the keyframe values to the subframe moment. With footage, After Effects returns the full image matching the requested time, namely the nearest frame to its left. Should that layer have frame-blending enabled, an interpolated frame is produced instead.
