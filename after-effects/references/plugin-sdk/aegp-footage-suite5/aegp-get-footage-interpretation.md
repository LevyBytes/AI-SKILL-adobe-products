# AEGP_GetFootageInterpretation

`AEGP_GetFootageInterpretation`

Populates an AEGP_FootageInterp describing the settings of the AEGP_FootageH.

There is no way to create a valid AEGP_FootageInterp other than by using this function.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetFootageInterpretation(
  AEGP_ItemH itemH,
  A_Boolean proxyB,
  AEGP_FootageInterp *interpP);
```

If proxyB is TRUE, the proxy footage's settings are retrieved.
