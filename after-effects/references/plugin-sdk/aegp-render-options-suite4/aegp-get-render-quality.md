# AEGP_GetRenderQuality

`AEGP_GetRenderQuality`

Read what render quality is set on the item in the render queue.

Quality is either AEGP_ItemQuality_DRAFT or AEGP_ItemQuality_BEST.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetRenderQuality(
  AEGP_RenderOptionsH  optionsH,
  AEGP_ItemQuality     *qualityP);
```
