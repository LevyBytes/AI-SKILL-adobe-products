# AEGP_GetBaseAddr8

`AEGP_GetBaseAddr8`

Provides the AEGP_WorldH base address needed by pixel-iteration routines.

If the world is not 8bpc, this call reports an error.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetBaseAddr8(
  AEGP_WorldH worldH,
  PF_Pixel8 **base_addrP);
```
