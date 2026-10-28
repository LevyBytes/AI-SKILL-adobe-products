# AEGP_SetCropInfo

`AEGP_SetCropInfo`

Sets the crop enable state for outmodH and supplies the rectangle to use.

Suite argument declaration (not a standalone call):

```cpp
AEGP_SetCropInfo(
  AEGP_RQItemRefH        rq_itemH,
  AEGP_OutputModuleRefH  outmodH,
  A_Boolean              enableB,
  A_Rect                 crop_rect);
```
