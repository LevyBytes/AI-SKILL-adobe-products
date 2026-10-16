# AEGP_IsItemWorthwhileToRender

`AEGP_IsItemWorthwhileToRender`

Tells you whether this frame would be worth rendering externally and checking back into the cache.

A speculative renderer ought to test this twice: ahead of sending the frame out to render, and once it finishes, just before it calls AEGP_NewPlatformWorld() and checks in.

This function is meant to work alongside AEGP_HasItemChangedSinceTimestamp(), never on its own.

Suite argument declaration (not a standalone call):

```cpp
AEGP_IsItemWorthwhileToRender(
  AEGP_RenderOptionsH   roH,
  const AEGP_TimeStamp  *time_stampP,
  A_Boolean             *worthwhilePB);
```
