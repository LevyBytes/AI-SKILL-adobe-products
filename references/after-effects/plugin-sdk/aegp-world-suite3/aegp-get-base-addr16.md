# AEGP_GetBaseAddr16

`AEGP_GetBaseAddr16`

Provides the AEGP_WorldH base address needed by pixel-iteration routines.

If the world is not 16bpc, this call reports an error.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetBaseAddr16(
  AEGP_WorldH worldH,
  PF_Pixel16 **base_addrP);
```
