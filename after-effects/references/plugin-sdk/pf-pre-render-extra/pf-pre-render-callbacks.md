# PF_PreRenderCallbacks

`PF_PreRenderCallbacks`

For the moment a single callback exists — checkout_layer. The effect picks checkout_idL.

Keep it positive and distinct. After Effects fills in the PF_CheckoutResult.

```cpp
PF_Err checkout_layer(
  PF_ProgPtr              effect_ref,
  PF_ParamIndex           index,
  A_long                  checkout_idL,
  const PF_RenderRequest  *req,
  A_long                  what_time,
  A_long                  time_step,
  A_u_long                time_scale,
PF_CheckoutResult       *result);

typedef struct {
  PF_LRect          result_rect;
  PF_LRect          max_result_rect;
  PF_RationalScale  par;
  long              solid;
  PF_Boolean        reservedB[3];
  A_long            ref_width;
  A_long            ref_height;
} PF_CheckoutResult;
```

result*rect is allowed to be empty. max_result_rect is the biggest the output could become if the host requested every bit of it. solid being TRUE means the whole result_rect carries opaque alpha. ref_width and ref_height give the layer's original size, before any effects, downsample factors set aside. For collapsed layers that equals the composition's size. Version 11.0 has a bug with the Global Performance Cache when a SmartFX effect sets both `PF_OutFlag2_AUTOMATIC_WIDE_TIME_INPUT` & `PF_OutFlag_NON_PARAM_VARY`: a checkout_layer call during `PF_Cmd_SMART_PRE_RENDER` hands back empty rects in `PF_CheckoutResult`. Just repeating the call works around it. As of 11.0.1 this workaround is unnecessary.
