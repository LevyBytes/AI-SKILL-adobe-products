# PF_CHECKIN_PARAM

`PF_CHECKIN_PARAM`

Balance every PF_CHECKOUT_PARAM, with a PF_CHECKIN_PARAM.

Not doing so causes dismal performance and leaks memory. Once checked in, the fields in the PF_ParamDef will no longer be valid.

```cpp
PF_Err PF_CHECKIN_PARAM (
  PF_InData    *in_data,
  PF_ParamDef  *param );
```
