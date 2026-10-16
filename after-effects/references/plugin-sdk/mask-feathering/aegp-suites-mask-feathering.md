# AEGP Suites — Mask Feathering

New for CS6, feathering can be applied to masks.

`AEGP_MaskFeather` is defined as follows:

```cpp
typedef struct {
    A_long                  segment;          // mask segment where feather is
    PF_FpLong               segment_sF;       // 0-1: feather location on segment
    PF_FpLong               radiusF;          // negative value allowed if type == AEGP_MaskFeatherType_INNER
    PF_FpShort              ui_corner_angleF; // 0-1: angle of UI handle on corners
    PF_FpShort              tensionF;         // 0-1: tension of boundary at feather pt
    AEGP_MaskFeatherInterp  interp;
    AEGP_MaskFeatherType    type;
} AEGP_MaskFeather;
```

`AEGP_MaskFeatherInterp` resolves to either `AEGP_MaskFeatherInterp_NORMAL` or `AEGP_MaskFeatherInterp_HOLD_CW`.

`AEGP_MaskFeatherType` resolves to either `AEGP_MaskFeatherType_OUTER` or `AEGP_MaskFeatherType_INNER`.

Through this suite, AEGPs can read and write the text carried by text layers.

Note: as a starting point, obtain an `AEGP_TextDocumentH` by calling `AEGP_GetLayerStreamValue`, above, passing `AEGP_StreamType_TEXT_DOCUMENT` for the `AEGP_StreamType`.
