# Entry Point

Every exchange between After Effects and an effect plug-in gets kicked off by After Effects, and the whole thing runs through the host (After Effects) invoking one single entry point function.

That entry point function has to carry this signature across all effect plug-ins:

```cpp
PF_Err main (
PF_Cmd cmd,
PF_InData *in_data,
PF_OutData *out_data,
PF_ParamDef *params[],
PF_LayerDef *output,
void *extra);

```

Here the entry point function goes by "main", yet whatever you declare in PiPL Resources can stand in for that name.

Ahead of every call into the entry point function, After Effects refreshes PF_InData together with the plug-in's parameter array PF_ParamDef[] (with the noted exceptions).

Once the plug-in returns from its call, After Effects inspects PF_OutData for any changes and, where it makes sense, draws on the PF_LayerDef the effect produced.
