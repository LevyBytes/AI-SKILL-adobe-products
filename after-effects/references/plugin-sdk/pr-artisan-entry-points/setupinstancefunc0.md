# setup_instance_func0

setup_instance_func0

Allocate and initialize data that belongs to this Artisan instance.

Suite argument declaration (not a standalone call):

```cpp
PR_InstanceSetupFunc(
  const PR_InData      *in_dataP,
  PR_GlobalContextH    global_contextH,
  PR_InstanceContextH  instance_contextH,
  PR_GlobalDataH       global_dataH,
  PR_InstanceFlags     flags,
  PR_FlatHandle        flat_dataH0,
  PR_InstanceDataH     *instance_dataPH);
```
