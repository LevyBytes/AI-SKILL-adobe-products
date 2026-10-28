# AEGP_SetRenderState

`AEGP_SetRenderState`

Sets whether the AEGP_RQItemRefH will render the next time the user clicks the Render button.

During rendering, this call returns an error.

This function will return:

- Err_PARAMETER if it is called while AEGP_RenderQueueState is not AEGP_RenderQueueState_STOPPED

- Err_RANGE when the supplied status is never legal, and

- Err_PARAMETER when the supplied status does not fit the item, such as queueing an item with no output path

Suite argument declaration (not a standalone call):

```cpp
AEGP_SetRenderState(
  AEGP_RQItemRefH  rq_itemH,
  A_Boolean        renderB);
```
