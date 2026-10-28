# AEGP_CauseIdleRoutinesToBeCalled

`AEGP_CauseIdleRoutinesToBeCalled`

You can safely invoke this routine from threads other than the main one. Being asynchronous, it returns before the idle handler runs.

The suite functions that retrieve this function pointer aren't thread safe; grab it on the main thread so the child thread can use it.

Suite argument declaration (not a standalone call):

```cpp
AEGP_CauseIdleRoutinesToBeCalled(void);
```
