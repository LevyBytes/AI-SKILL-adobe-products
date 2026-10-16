# AEGP_ClassUnRegister

`AEGP_ClassUnRegister`

Drops a cache type you had registered earlier, identifying it by the same compute-class GUID.

Purging happens here: every stored value is released by way of delete_compute_value invocations.

PF_Cmd_GLOBAL_SETDOWN is the customary place for this call, yet any time works.

```cpp
A_Err (*AEGP_ClassUnregister)(
  AEGP_CCComputeClassIdP    compute_classP);
```
