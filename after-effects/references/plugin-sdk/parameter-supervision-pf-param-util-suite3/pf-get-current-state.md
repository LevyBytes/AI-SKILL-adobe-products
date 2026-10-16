# PF_GetCurrentState

`PF_GetCurrentState`

Suite argument declaration (not a standalone call):

```cpp
PF_GetCurrentState(
  PF_ProgPtr     effect_ref,
  PF_ParamIndex  param_index,
  const A_Time   *startPT0,
  const A_Time   *durationPT0,
  PF_State       *stateP);
```

Paired with `PF_AreStatesIdentical` further down, this API tells you whether a collection of inputs (layers, other properties, or a mix) differs between an earlier `PF_GetCurrentState` call and the present one — which makes it handy for caching. You may scope it to a span of time or to all time. CS6 widened it with param*index, startPT0, and durationPT0. The param_index pre-defined constants are: - `PF_ParamIndex_CHECK_ALL` - examine every parameter, even every layer that a layer parameter points to. - `PF_ParamIndex_CHECK_ALL_EXCEPT_LAYER_PARAMS` - leave out all layers. Supply a particular layer parameter index to test only that one layer parameter. - `PF_ParamIndex_CHECK_ALL_HONOR_EXCLUDE` - like `CHECK_ALL`, except it respects `PF_ParamFlag_EXCLUDE_FROM_HAVE_INPUTS_CHANGED`. Supplying NULL for start and duration both means all time. With effects that simulate across time and consequently set `PF_OutFlag2_AUTOMATIC_WIDE_TIME_INPUT`, a time range you query gets stretched to cover whatever times are required to generate that range. Fills in a `PF_State`, an opaque type that serves as a receipt capturing the present condition of the effect's parameters (within our frame-caching database internally, this `PF_State` is what gets used).
