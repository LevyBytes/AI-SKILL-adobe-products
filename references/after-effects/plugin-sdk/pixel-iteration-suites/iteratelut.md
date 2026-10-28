# iterate_lut

iterate_lut

PF_Iterate8Suite only. Allows a Look-Up Table (LUT) to be passed for iteration; you can pass the same or different LUTs for each color channel.

If no LUT is passed, an identity LUT is used.

Suite argument declaration (not a standalone call):

```cpp
iterate_lut(
  PF_InData       *in_data,
  A_long          prog_base,
  A_long          prog_final,
  PF_EffectWorld  *src,
  const PF_Rect   *area,
  A_u_char        *a_lut0,
  A_u_char        *r_lut0,
  A_u_char        *g_lut0,
  A_u_char        *b_lut0,
  PF_EffectWorld  *dst);
```
