# PF_Cmd_SEQUENCE_RESETUP

`PF_Cmd_SEQUENCE_RESETUP`

Rebuild — typically unflatten — the sequence data. This comes through after the data has been loaded from disk, while pre-composing, or upon the effect being copied; before any duplication After Effects flattens the sequence data. When duplicating, both the original and the freshly made sequence get a `PF_Cmd_SEQUENCE_RESETUP`. A `PF_Cmd_SEQUENCE_FLATTEN` won't necessarily appear between two `PF_Cmd_SEQUENCE_RESETUPs`.
