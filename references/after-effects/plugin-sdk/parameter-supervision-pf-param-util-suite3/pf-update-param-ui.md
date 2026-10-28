# PF_UpdateParamUI

`PF_UpdateParamUI`

Suite argument declaration (not a standalone call):

```cpp
PF_UpdateParamUI(
  PF_ProgPtr         effect_ref,
  PF_ParamIndex      param_index,
  const PF_ParamDef  *defP);
```

Compels After Effects to redraw the parameter's UI within the effect controls palette. From CC 2014 onward, a changed custom UI height is now respected by After Effects. Just adjust the ui_height on your custom UI `PF_ParamDef`, then invoke `PF_UpdateParamUI`. The Effect Control Window picks up the effect's revised custom UI height. As of CS6, disabling a parameter from a plug-in now records that condition in the UI flags, letting the plug-in consult that flag later to learn whether it remains disabled.

Danger

Passing param[0] here is something you must never do.
