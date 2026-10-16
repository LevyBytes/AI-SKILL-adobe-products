# AEIO_DrawSparseFrame

`AEIO_DrawSparseFrame`

Draws a frame from AEIO_InSpecH.

PF_EffectWorld* supplies the width and height to use, but account for required_region0 when it is not NULL.

Suite argument declaration; the host supplies the frame and requested region.

```cpp
AEIO_DrawSparseFrame(
  AEIO_BasicData            *basic_dataP,
  AEIO_InSpecH              inH,
  AEIO_Quality              qual,
  const AEIO_RationalScale  *rs0,
  const A_Time              *tr,
  const A_Time              *duration0,
  const A_Rect               *required_region0,
  PF_EffectWorld            *wP,
  A_long                   originx,
  A_long                   originy,
  AEIO_DrawingFlags         *draw_flagsP);
```

NOTE: Return linear-light data (1.0); After Effects handles any transforms needed to move the footage into the working colorspace.

Input

Yes
