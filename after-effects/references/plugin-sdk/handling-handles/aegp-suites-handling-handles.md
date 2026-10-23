# AEGP Suites - Handling Handles

Memory consumed by an AEGP is best handled through the AEGP Memory Suite. Catching memory-related faults early is possible because After Effects will surface such errors back to you.

Because an `AEGP_MemHandle` wraps more than the memory it points at, never dereference one directly. Instead, obtain a pointer into the referenced block by calling `AEGP_LockMemHandle`.

Release the lock once you've finished, naturally.
