# AEGP_SetRenderQueueState

`AEGP_SetRenderQueueState`

Changes the render queue to one of three allowed states. A stopped queue cannot be changed directly to paused.

Suite argument declaration (not a standalone call):

```cpp
AEGP_SetRenderQueueState(
  AEGP_RenderQueueState  state);
```

- `AEGP_RenderQueueState_STOPPED` - `AEGP_RenderQueueState_PAUSED` - `AEGP_RenderQueueState_RENDERING`
