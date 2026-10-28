# AEGP_GetBaseAddr32

`AEGP_GetBaseAddr32`

Provides the AEGP_WorldH base address needed by pixel-iteration routines.

If the world is not 32bpc, this call reports an error.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetBaseAddr32(
  AEGP_WorldH worldH,
  PF_PixelFloat **base_addrP);
```
