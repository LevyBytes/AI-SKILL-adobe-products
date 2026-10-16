# AEGP_ClassRegister

`AEGP_ClassRegister`

Associates a cache type with a compute-class GUID that is unique everywhere, for instance "adobe.ae.effect.test_effect.cache_v_1".

Populate an AEGP_ComputeCacheCallbacks structure, wiring its function pointers to the callbacks that AEGP_ComputeCacheSuite1 expects.

Although PF_Cmd_GLOBAL_SETUP is the usual moment for this call, you are free to invoke it whenever you like.

```cpp
A_Err (*AEGP_ClassRegister)(
  AEGP_CCComputeClassIdP  compute_classP,
  const AEGP_ComputeCacheCallbacks  *callbacksP);
```
