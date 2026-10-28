# AEGP_MemHandle

`AEGP_MemHandle`

There's more inside this structure than the memory it points at, so never dereference it straight away. Call `AEGP_LockMemHandle` in the AEGP Memory Suite to obtain a pointer to the memory the `AEGP_MemHandle` refers to — and naturally, unlock it once you've finished.

AEGP Memory Suite
