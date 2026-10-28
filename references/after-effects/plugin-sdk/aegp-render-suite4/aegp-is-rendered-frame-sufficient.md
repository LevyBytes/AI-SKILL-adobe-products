# AEGP_IsRenderedFrameSufficient

`AEGP_IsRenderedFrameSufficient`

Hand After Effects two sets of AEGP_RenderOptionsH and it returns TRUE when the pixels already rendered remain valid for the proposed AEGP_RenderOptionsH.

Suite argument declaration (not a standalone call):

```cpp
AEGP_IsRenderedFrameSufficient(
  AEGP_RenderOptionsH  rendered_optionsH,
  AEGP_RenderOptionsH  proposed_optionsH,
  A_Boolean            *is_sufficientPB);
```
