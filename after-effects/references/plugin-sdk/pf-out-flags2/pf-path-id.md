# PF_PathID

`PF_PathID`

Path parameters point to masks on the same layer as the effect. You can't reach path parameter data directly; manage and query paths through `PF_PathQuerySuite1` and `PF_PathDataSuite`. `PF_PathDef`.path_id holds the index of the user's chosen mask. Obtain the matching `AEGP_MaskRefH` via `AEGP_GetLayerMaskByIndex` from `AEGP_MaskSuite6`.

`PF_Param_GROUP_START` `PF_Param_GROUP_END`

(none) (none)

Parameter groups — also called topics — bundle parameters into sets. Every group gets a twirly of its own and sits indented in the ECP next to the surrounding parameters or groups. You can nest one group inside another. The user can spin any twirly open or shut, and so can the effect under program control. The effect is free to start some groups open and others closed.
