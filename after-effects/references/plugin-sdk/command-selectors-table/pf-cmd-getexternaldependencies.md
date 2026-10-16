# PF_Cmd_GET_EXTERNAL_DEPENDENCIES

`PF_Cmd_GET_EXTERNAL_DEPENDENCIES`

Sent solely when `PF_OutFlag_I_HAVE_EXTERNAL_DEPENDENCIES` was turned on under `PF_Cmd_GLOBAL_SETUP`. Load up a string handle (found in the `PF_ExtDependenciesExtra` that extra points to) with a rundown of what your plug-in depends on, taking care to leave room for the closing NULL character. Should there be nothing to declare, just hand back a NULL pointer for the string handle. Where the check type is `PF_DepCheckType_ALL_DEPENDENCIES`, declare everything your plug-in could conceivably need to render. Declare only the items that are absent (or a null string when none are) where the check type is `PF_DepCheckType_MISSING_DEPENDENCIES`.
