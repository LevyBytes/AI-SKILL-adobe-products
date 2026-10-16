# query_func0

query_func0

When needed, Artisans may draw custom projection axes.

After Effects calls this function to obtain the transform from composition world space to those axes, plus several related preview drawing operations for on-screen and off-screen cases. Only interactive artisans use the on-screen path.

Suite argument declaration (not a standalone call):

```cpp
PR_QueryFunc(
  const PR_InData      *in_dataP,
  PR_GlobalContextH    global_contextH,
  PR_InstanceContextH  instance_contextH,
  PR_QueryContextH     query_contextH,
  PR_QueryType         query_type,
  PR_GlobalDataH       global_dataH,
  PR_InstanceDataH     instance_dataH);
```

`PR_QueryType` can be one of the following: - `PR_QueryType_NONE` = 0 - `PR_QueryType_TRANSFORM` - `PR_QueryType_INTERACTIVE_WINDOW_DISPOSE` - `PR_QueryType_INTERACTIVE_WINDOW_CLEAR` - `PR_QueryType_INTERACTIVE_WINDOW_FROZEN_PROXY` - `PR_QueryType_INTERACTIVE_SWAP_BUFFER` - `PR_QueryType_INTERACTIVE_DRAW_PROCS` - `PR_QueryType_PREPARE_FOR_LINE_DRAWING` - `PR_QueryType_UNPREPARE_FOR_LINE_DRAWING` - `PR_QueryType_GET_CURRENT_CONTEXT_SAFE_FOR_LINE_DRAWING` - `PR_QueryType_GET_ARTISAN_QUALITY` (New in CS6.)
