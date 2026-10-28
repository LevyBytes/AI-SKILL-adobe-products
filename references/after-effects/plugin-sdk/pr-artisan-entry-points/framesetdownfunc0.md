# frame_setdown_func0

frame_setdown_func0

Dispose setup data allocated during frame_setup; After Effects sends this just after rendering ends.

Suite argument declaration (not a standalone call):

```cpp
PR_FrameSetdownFunc(
  const PR_InData      *in_dataP,
  PR_GlobalContextH    global_contextH,
  PR_InstanceContextH  instance_contextH,
  PR_RenderContextH    render_contextH,
  PR_GlobalDataH       global_dataH,
  PR_InstanceDataH     instance_dataH,
  PR_RenderDataH       render_dataH);
```
