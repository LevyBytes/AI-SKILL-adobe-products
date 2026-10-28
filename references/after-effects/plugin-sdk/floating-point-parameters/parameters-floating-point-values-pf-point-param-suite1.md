# Parameters & Floating Point Values`PF_PointParamSuite1`

Point parameters can be fetched as floating-point values too, by way of the following.

Function

Purpose

`PF_GetFloatingPoint` ValueFromPointDef

```cpp
PF_Err PF_GetFloatingPointValueFromPointDef(
  PF_ProgPtr         effect_ref,
  const PF_ParamDef  *point_defP,
  A_FloatPoint       *fp_pointP);
```
