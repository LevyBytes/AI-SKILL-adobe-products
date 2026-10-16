# global_setup_func0

global_setup_func0

Called one time only, immediately after GP_Main. Global data is shared by every instance of the plug-in.

If Global Setup allocates memory, your global_setdown_func must release it.

Suite argument declaration (not a standalone call):

```cpp
PR_GlobalSetupFunc(
  const PR_InData    *in_dataP,
  PR_GlobalContextH  global_contextH,
  PR_GlobalDataH     *global_dataPH);
```
