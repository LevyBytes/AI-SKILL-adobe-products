# AEGP_GetViewportOrigin

`AEGP_GetViewportOrigin`

Gets the source origin inside the frame, which is needed to translate between source and frame, for the supplied PR_RenderContextH.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetViewportOrigin(
  const PR_RenderContextH  contextH,
  A_long                   *origin_xPL,
  A_long                   *origin_yPL);
```
