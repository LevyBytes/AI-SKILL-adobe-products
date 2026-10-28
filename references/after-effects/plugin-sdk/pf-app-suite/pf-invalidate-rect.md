# PF_InvalidateRect

`PF_InvalidateRect`

Queue up a redraw of a specific area of the custom UI for an effect.

Only valid while handling a non-drawing event in the effect.

Specify rectP0 as NULL to invalidate the entire window. The redraw will happen at the next available idle moment after returning from the event.

Set the PF_EO_UPDATE_NOW event outflag to update the window immediately after the event returns.

Suite argument declaration (not a standalone call):

```cpp
PF_InvalidateRect(
  const PF_ContextH  contextH,
  const PF_Rect*     rectP0);
```
