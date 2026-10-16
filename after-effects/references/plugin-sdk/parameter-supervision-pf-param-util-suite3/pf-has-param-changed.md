# PF_HasParamChanged

`PF_HasParamChanged`

No longer supported in PFParamUtilsSuite3.

Suite argument declaration (not a standalone call):

```cpp
PF_HasParamChanged(
  PF_ProgPtr     effect_ref,
  const          PF_State *stateP,
  PF_ParamIndex  param_index,
  PF_Boolean     *changedPB);
```

Hand it a `PF_State` and it returns true when any tested parameter has drifted from the saved state. Despite what the name suggests, it offers no means of checking just one parameter. Every non-layer parameter, at the very least, gets tested. When you need finer control to test a particular group of parameters, reach for `PF_HaveInputsChangedOverTimeSpan` below instead. The param*index pre-defined constants are: - `PF_ParamIndex_CHECK_ALL` - examine every parameter, even every layer that a layer parameter points to. - `PF_ParamIndex_CHECK_ALL_EXCEPT_LAYER_PARAMS` - leave out all layers. Supply a particular layer parameter index to test only that one layer parameter.
