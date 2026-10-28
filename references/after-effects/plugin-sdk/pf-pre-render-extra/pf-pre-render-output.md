# PF_PreRenderOutput

`PF_PreRenderOutput`

The effect fills this out to declare to After Effects, given the input, the output it intends to make.

```cpp
typedef struct {
  PF_LRect                    result_rect;
  PF_LRect                    max_result_rect;
  PF_Boolean                  solid;
  PF_Boolean                  reserved;
  PF_RenderOutputFlags        flags;
  void*                       pre_render_data;
  PF_DeletePreRenderDataFunc  delete_pre_render_data_func;
} PF_PreRenderOutput;
```

During `PF_Cmd_SMART_RENDER` the effect gets pre_render_data handed back to it. As of now the sole `PF_RenderOutputFlags` value is `PF_RenderOutputFlag_RETURNS_EXTRA_PIXELS`.

| Field | Purpose |
| --- | --- |
| result_rect | What the render request yields as output, in layer coordinates (may be empty). Barring `PF_RenderOutputFlag_RETURNS_EXTRA_PIXELS` being set, this can't exceed the input request rectangle, though it can fall short of it. |
| max_result_rect | The largest the output might ever be should After Effects ask for the whole thing. It must stay constant regardless of the requested output size. |
| solid | Mark this TRUE when every output pixel will be wholly opaque. Set it where you can, as it unlocks certain optimizations. |
| reserved | Ignore. |
| flags | For now the one flag is `PF_RenderOutputFlag_RETURNS_EXTRA_PIXELS`, signaling to After Effects that the smart effect will hand back more pixels than After Effects asked for. |
| pre_render_data | Aim this at whatever data the effect wants to reach while rendering. As with ordinary (non-smart) effects, an effect may also allocate handles and keep them in out*data>frame_data. Because `PF_Cmd_SMART_PRE_RENDER` can fire without any matching `PF_Cmd_SMART_RENDER`, effects must never delete this data on their own; the moment the effect returns from `PF_Cmd_SMART_PRE_RENDER`, ownership passes to After Effects, which will dispose of it (through either the function below or a standard free call). |
| delete_pre_render_data_func | Aim this at a function that will be called in due course to delete the pre_render_data. |
