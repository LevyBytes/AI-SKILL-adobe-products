# iterate_generic

iterate_generic

`PF_Iterate8Suite` only. If you want to do something once per available CPU, this is the function to use (pass `PF_Iterations_ONCE_PER_PROCESSOR` for iterationsL). Only call abort and progress functions from thread index 0.

Note

You can iterate over more than pixels. Internally, we use it for row-based image processing, and for once-per-entity updates of complex sequence data.

Suite argument declaration (not a standalone call):

```cpp
iterate_generic(
  A_long iterationsL,
  void   *refconPV,
  PF_Err (*fn_func)(
    void    *refconPV,
    A_long  thread_idxL,
    A_long  i,
    A_long  itrtL));
```
