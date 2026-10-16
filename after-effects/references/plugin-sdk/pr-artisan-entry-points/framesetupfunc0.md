# frame_setup_func0

frame_setup_func0

Perform whatever preparation a frame render needs; After Effects calls this just before rendering starts.

Suite argument declaration (not a standalone call):

```cpp
PR_FrameSetupFunc(
  const PR_InData      *in_dataP,
  PR_GlobalContextH    global_contextH,
  PR_InstanceContextH  instance_contextH,
  PR_RenderContextH    render_contextH,
  PR_GlobalDataH       global_dataH,
  PR_InstanceDataH     instance_dataH,
  PR_RenderDataH       *render_dataPH);
```
