# Parameters & Floating Point Values — `PF_AngleParamSuite1`

As of CS6.0.2, angle parameters can likewise be retrieved in floating-point form.

Function

Purpose

`PF_GetFloatingPoint` ValueFromAngleDef

```cpp
PF_Err PF_GetFloatingPointValueFromAngleDef(
  PF_ProgPtr         effect_ref,
  const PF_ParamDef  *angle_defP,
  A_FloatLong        *fp_valueP);
```
