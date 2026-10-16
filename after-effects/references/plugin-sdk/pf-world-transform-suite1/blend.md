# blend

blend

Blends two images, alpha-weighted. Does not deal with different-sized sources, though the destination may be either PF_EffectWorld.

```cpp
PF_Err blend (
  PF_ProgPtr            effect_ref,
  const PF_EffectWorld  *src1,
  const PF_EffectWorld  *src2,
  PF_Fixed              ratio,
  PF_EffectWorld        *dst);
```
