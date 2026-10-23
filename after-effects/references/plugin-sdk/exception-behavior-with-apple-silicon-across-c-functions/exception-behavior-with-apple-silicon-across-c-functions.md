# Apple Silicon Support - Exception Behavior with Apple Silicon Across "C" Functions

Exceptions warrant extra caution on Apple Silicon. Plenty of environments let you throw exceptions that travel up through classic "C" functions without trouble. The practice was poor and its behavior undefined, yet it tended to "work" regardless.

What changes on Apple Silicon is the ABI: instead of undefined behavior, terminate() fires whenever this happens.

Because a plugin's main entry point always follows the extern "C" calling convention, you should enclose that code in a try/catch block so the program isn't terminated. As an illustration:

Declare `DispatchEffect` with the same parameters and `PF_Err` return type; it owns your existing command handling. This wrapper prevents C++ exceptions from crossing the C host boundary and preserves the required `extra` argument. Include the SDK effect headers.

```cpp
PF_Err EffectMain ( PF_Cmd cmd,
    PF_InData *in_data,
    PF_OutData *out_data,
    PF_ParamDef *params[],
    PF_LayerDef *output, void *extra )
{
    try
    {
        return DispatchEffect(cmd, in_data, out_data, params, output, extra);
    }
    catch (...)
    {
        return PF_Err_INTERNAL_STRUCT_DAMAGED;
    }
}
```
