# PF_Cmd_SMART_PRE_RENDER

`PF_Cmd_SMART_PRE_RENDER`

SmartFX only. Work out, by whatever logic the effect uses, which region(s) of the input are needed to generate its output.

When the host is MediaCore, this can arrive as many as two times. The first one shows up inside GetFrameDependencies as the inputs are gathered.

Full frame dimensions are something the source checkouts may hand back at this point. After the sources finish rendering, should their size not match what the first call produced, a second emission of this selector follows, carrying the real source sizes so the output size comes out right.

Keep in mind that the entire output is what MediaCore is after, hence PF_PreRenderOutput::max_result_rect is what gets used.

New in 16.0

To drive rendering on the GPU, turn on PF_RenderOutputFlag_GPU_RENDER_POSSIBLE within PF_PreRenderOutput.

When that flag stays off, the render being asked for cannot run on the requested GPU — whether due to parameters or to render settings.

PreRender may be issued again by the host carrying a different what_gpu choice (or PF_GPU_Framework_None).

```cpp
typedef struct {
  PF_RenderRequest  output_request; // what the effect is being asked to render
  short             bitdepth;       // bitdepth the effect is being driven in (in bpc)
  const             void *gpu_data; // (new AE 16.0)
  PF_GPU_Framework  what_gpu;       // (new AE 16.0)
  A_u_long          device_index;   // (new AE 16.0) For use in conjunction with PrSDKGPUDeviceSuite
} PF_PreRenderInput;
```
