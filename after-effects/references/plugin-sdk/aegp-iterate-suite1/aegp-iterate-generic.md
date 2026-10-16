# AEGP_IterateGeneric

`AEGP_IterateGeneric`

Supplies a function that After Effects can manage across multiple processors.

The callback can be any function pointer named by fn_func, with the arguments listed below.

For how refconPV is used, see Private Data.

Suite argument declaration (not a standalone call):

```cpp
AEGP_IterateGeneric(
  A_long  iterationsL,
  void    *refconPV,
  A_Err   (*fn_func)
    (void   *refconPV,
    A_long  thread_indexL,
    A_long  i,
    A_long  iterationsL));
```
