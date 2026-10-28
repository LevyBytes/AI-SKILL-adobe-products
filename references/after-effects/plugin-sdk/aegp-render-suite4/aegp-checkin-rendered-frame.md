# AEGP_CheckinRenderedFrame

`AEGP_CheckinRenderedFrame`

Supply a rendered frame (AEGP_PlatformWorldH) to After Effects, which takes ownership of it.

ticksL is roughly how long the frame took to render.

Suite argument declaration (not a standalone call):

```cpp
AEGP_CheckinRenderedFrame(
  AEGP_RenderOptionsH    roH,
  const AEGP_TimeStamp*  time_stampP,
  A_u_long               ticksL,
  AEGP_PlatformWorldH    imageH);
```
