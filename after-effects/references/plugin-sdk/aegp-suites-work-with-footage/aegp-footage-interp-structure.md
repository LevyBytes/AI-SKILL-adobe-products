# `AEGP_FootageInterp` Structure

Member

Purpose

`AEGP_InterlaceLabel` il;

The interlace settings for the footage item.

```cpp
A_u_long signature; // 'FIEL'
A_short version;
FIEL_Type type;
FIEL_Order order;
A_u_long reserved;
```

`FIEL_Type` is one of the following: - `FIEL_Type_FRAME_RENDERED` - `FIEL_Type_INTERLACED` - `FIEL_Type_HALF_HEIGHT` - `FIEL_Type_FIELD_DOUBLED` (60 full-sized field doubled frames per second.) `FIEL_Order` is either: - `FIEL_Order_UPPER_FIRST` - `FIEL_Order_LOWER_FIRST`

`AEGP_AlphaLabel` al;

```cpp
AEGP_AlphaFlag flags;
A_u_char redCu;
A_u_char greenCu;
A_u_char blueCu;
```

`AEGP_AlphaFlags` is one or more of the following, OR'd together: - `AEGP_AlphaPremul` - `AEGP_AlphaInverted` (indicates that higher values are transparent, instead of lower) - `AEGP_AlphaIgnore` If `AEGP_AlphaPremul` is not set, straight alpha is assumed.

`AEGP_PulldownPhase` pd;

Indicates the phase for use in 3:2 pulldown. One of the following: - `AEGP_PulldownPhase_NO_PULLDOWN` - `AEGP_PulldownPhase_WSSWW` - `AEGP_PulldownPhase_SSWWW` - `AEGP_PulldownPhase_SWWWS` - `AEGP_PulldownPhase_WWWSS` - `AEGP_PulldownPhase_WWSSW` - `AEGP_PulldownPhase_WWWSW` - `AEGP_PulldownPhase_WWSWW` - `AEGP_PulldownPhase_WSWWW` - `AEGP_PulldownPhase_SWWWW` - `AEGP_PulldownPhase_WWWWS`

`AEGP_LoopBehavior` loop;

Indicates the number of times the footage should loop.

```cpp
A_long loops;
A_long reserved;
```

`A_Ratio` pix_aspect_ratio;

Expresses the pixel aspect ratio of the footage (x over y).

`A_FpLong` native_fpsF;

The original framerate (in frames per second) of the footage item.

`A_FpLong` conform_fpsF;

The framerate being used for the footage item.

A_long depthL;

The pixel depth of the footage. One of the following: - `AEGP_Footage_Depth_1` - `AEGP_Footage_Depth_2` - `AEGP_Footage_Depth_4` - `AEGP_Footage_Depth_8` - `AEGP_Footage_Depth_16` - `AEGP_Footage_Depth_24` - `AEGP_Footage_Depth_30` - `AEGP_Footage_Depth_32` - `AEGP_Footage_Depth_GRAY_2` - `AEGP_Footage_Depth_GRAY_4` - `AEGP_Footage_Depth_GRAY_8` - `AEGP_Footage_Depth_48` - `AEGP_Footage_Depth_64` - `AEGP_Footage_Depth_GRAY_16`

`A_Boolean` motion_dB;

Indicates whether motion de-interlacing is being applied to the footage item.

|  |  |
| --- | --- |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
