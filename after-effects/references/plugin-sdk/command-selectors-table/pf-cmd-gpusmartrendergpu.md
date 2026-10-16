# PF_Cmd_GPU_SMART_RENDER_GPU

`PF_Cmd_GPU_SMART_RENDER_GPU`

The GPU counterpart of the established PF_Cmd_SMART_RENDER selector.

Whether PF_Cmd_SMART_RENDER or PF_Cmd_SMART_RENDER_GPU fires at render time hinges on whether a CPU or a GPU frame is the expected output from the effect.

PF_Cmd_SMART_RENDER_GPU fires only where what_gpu != PF_GPU_Framework_None, and it bears on every input / output PF_LayerDef.

Every frame check-in and check-out works on GPU frames while this selector is underway. Be aware the Extra structs are shared with PF_Cmd_SMART_RENDER.

```cpp
typedef struct {
  PF_RenderRequest  output_request;   // what the effect is being asked to render
  short             bitdepth;         // bitdepth the effect is being driven in (in bpc)
  void              *pre_render_data; // passed back from value placed in extra->output->pre_render_data during PF_Cmd_PRE_RENDER
  const void        *gpu_data;        // (new AE 16.0)
  PF_GPU_Framework  what_gpu;         // (new AE 16.0)
  A_u_long          device_index;     // (new AE 16.0)
} PF_SmartRenderInput;

typedef struct {
  PF_SmartRenderInput *input;
  PF_SmartRenderCallbacks *cb;
} PF_SmartRenderExtra;
```

For the GPU-related selectors, the what*gpu and device_index fields carried in the extra input tell the plug-in which GPU framework rendering will use. Input and output buffers get readied on that framework and device. PrSDKGPUDeviceSuite::GetDeviceInfo lets you query the device, context, command queue, and the rest of the related GPU state. The value of what_gpu stays identical across the `PF_Cmd_SMART_PRE_RENDER` and `PF_Cmd_SMART_RENDER_GPU` selector calls.
