# PF_ParamFlag_USE_VALUE_FOR_OLD_PROJECTS

`PF_ParamFlag_USE_VALUE_FOR_OLD_PROJECTS`

This matters only when loading projects saved by an older build of the effect that didn't yet have parameters you added later. With it set, the `PF_ParamDef`.value supplied in `PF_ADD_PARAM`() seeds the missing parameter, while the dephault field still drives the initial value when the effect is freshly applied or reset. It helps when you want one default value yet need a different one to keep older projects rendering as before.
