# flatten_instance_func0

flatten_instance_func0

Flatten your data before it is written to disk, ensuring OS independence when the Artisan requires it.

Suite argument declaration (not a standalone call):

```cpp
PR_FlattenInstanceFunc(
  const PR_InData      *in_dataP,
  PR_GlobalContextH    global_contextH,
  PR_InstanceContextH  instance_contextH,
  PR_GlobalDataH       global_dataH,
  PR_InstanceDataH     instance_dataH,
  PR_FlatHandle        *flatH);
```
