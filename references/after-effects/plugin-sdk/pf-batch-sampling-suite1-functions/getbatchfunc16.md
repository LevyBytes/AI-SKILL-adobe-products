# get_batch_func16

get_batch_func16

Obtains a pointer to After Effects' 16-bpc batch sampling function (also highly optimized).

```cpp
PF_Err (*get_batch_func16)(
  PF_ProgPtr            effect_ref,
  PF_Quality            quality,
  PF_ModeFlags          mode_flags,
  const PF_SampPB       *params,
  PF_BatchSample16Func  *batch);
```
