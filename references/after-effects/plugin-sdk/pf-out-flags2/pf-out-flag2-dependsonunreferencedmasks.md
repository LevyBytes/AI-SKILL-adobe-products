# PF_OutFlag2_DEPENDS_ON_UNREFERENCED_MASKS

`PF_OutFlag2_DEPENDS_ON_UNREFERENCED_MASKS`

New in CS6. Raise it when you intend to read paths that no path param points to directly — say, drawing a stroke across every mask. This lets After Effects know it must invalidate your output when a mask your effect doesn't appear to reference gets edited. Set it during `PF_Cmd_GLOBAL_SETUP` or `PF_Cmd_QUERY_DYNAMIC_FLAGS`.
