# AEGP_GetCropInfo

`AEGP_GetCropInfo`

Reads the crop enable state for outmodH and returns the rectangle in use.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetCropInfo(
  AEGP_RQItemRefH        rq_itemH,
  AEGP_OutputModuleRefH  outmodH,
  A_Boolean              *is_enabledBP,
  A_Rect                 *crop_rectP);
```
