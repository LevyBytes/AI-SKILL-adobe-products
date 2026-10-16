# AEGP_GetBlendingTables

`AEGP_GetBlendingTables`

Reads back the present opaque PF_EffectBlendingTables, intended for use with AEGP_TransferRect.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetBlendingTables(
  PR_RenderContextH        render_contextH,
  PF_EffectBlendingTables  *blending_tables);
```
