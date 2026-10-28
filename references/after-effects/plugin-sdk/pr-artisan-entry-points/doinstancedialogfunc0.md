# do_instance_dialog_func0

do_instance_dialog_func0

When an Artisan exposes extra parameters through its Options dialog, this function handles reading and writing those values.

Suite argument declaration (not a standalone call):

```cpp
PR_DoInstanceDialogFunc(
  const PR_InData      *in_dataP,
  PR_GlobalContextH    global_contextH,
  PR_InstanceContextH  instance_contextH,
  PR_GlobalDataH       global_dataH,
  PR_InstanceDataH     instance_dataH,
  PR_DialogResult      *resultP);
```

`PR_DialogResultis` is either `PR_DialogResult_NO_CHANGE` or `PR_DialogResult_CHANGE_MADE`.
