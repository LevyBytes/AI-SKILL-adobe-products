# get_batch_func

get_batch_func

Obtains a pointer to After Effects' batch sampling function (highly optimized).

```cpp
PF_Err (*get_batch_func)(
  PF_ProgPtr          effect_ref,
  PF_Quality          quality,
  PF_ModeFlags        mode_flags,
  const PF_SampPB     *params,
  PF_BatchSampleFunc  *batch);
```
