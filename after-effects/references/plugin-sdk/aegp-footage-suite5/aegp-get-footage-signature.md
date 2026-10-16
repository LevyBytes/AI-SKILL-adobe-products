# AEGP_GetFootageSignature

`AEGP_GetFootageSignature`

Retrieves the footage signature of specified footage.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetFootageSignature(
  AEGP_FootageH          footageH,
  AEGP_FootageSignature  *sigP);
```

The signature will be one of the following: - `AEGP_FootageSignature_NONE` - `AEGP_FootageSignature_MISSING` - `AEGP_FootageSignature_SOLID`
