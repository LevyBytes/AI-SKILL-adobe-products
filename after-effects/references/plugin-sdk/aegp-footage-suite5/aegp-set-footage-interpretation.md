# AEGP_SetFootageInterpretation

`AEGP_SetFootageInterpretation`

Apply the settings in the AEGP_FootageInterp to the AEGP_FootageH. Undo-able.

```cpp
AEGP_SetFootageInterpreta tion(
  const AEGP_ItemH          itemH,
  A_Boolean                 proxyB,
  const AEGP_FootageInterp  *interpP);
```

If proxyB is TRUE, the proxy footage's settings are modified.
