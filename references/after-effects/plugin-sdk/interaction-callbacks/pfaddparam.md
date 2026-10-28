# PF_ADD_PARAM

`PF_ADD_PARAM`

Call this repeatedly while handling `PF_Cmd_PARAM_SETUP` to declare each of your plug-in's parameters to After Effects.

Note

Lots of trouble can stem from a `PF_ParamDef` that was not fully cleared ahead of `PF_ADD_PARAM`(). Make a habit of running `AEFX_CLR_STRUCT` before you add any parameter.

```cpp
PF_Err PF_ADD_PARAM (
  PF_InData       *in_data,
  PF_ParamIndex   index,
  PF_ParamDefPtr  def);
```

We provide convenience macros for specific parameter types, in Utils/ Param_Utils.h: - `PF_ADD_COLOR` - `PF_ADD_ARBITRARY` - `PF_ADD_SLIDER` - `PF_ADD_FIXED` - `PF_ADD_FLOAT_SLIDERX` - `PF_ADD_CHECKBOXX` - `PF_ADD_BUTTON` - `PF_ADD_ANGLE` - `PF_ADD_NULL` - `PF_ADD_LAYER` - `PF_ADD_255_SLIDER` - `PF_ADD_PERCENT` - `PF_ADD_POINT` - `PF_ADD_POINT_3D` - `PF_ADD_TOPICX` - `PF_END_TOPIC` - `PF_ADD_POPUPX` - `PF_ADD_FLOAT_SLIDERX_DISABLED`
