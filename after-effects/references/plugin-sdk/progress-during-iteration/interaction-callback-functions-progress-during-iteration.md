# Interaction Callback Functions - Progress During Iteration

Keeping the interface lively for the person at the keyboard matters to After Effects even mid-render, and your plug-in should match that behavior by leaning on `PF_ITERATE`() wherever it fits. Imagine, say, that a single `PF_Cmd_RENDER` response leans on a `PF_ITERATE`'d routine across three separate passes.

The opening setup for that scenario looks like this:

For the three passes below, use the output world extent; `lines_per_iterateL`, `total_linesL` and `lines_so_farL` are `A_long` values. An empty extent requires no pixel work.

```cpp
lines_per_iterateL = output_worldP->extent_hint.bottom - output_worldP->extent_hint.top;
total_linesL = 3 * lines_per_iterateL;
lines_so_farL = 0;
```

Once a pass wraps up, roll the lines you've already finished into the running tally before the next call:

This render-body excerpt uses an `AEGP_SuiteHandler suites(in_data->pica_basicP)`, an existing `PF_Err err`, input/output worlds and the preceding progress counters. Supply all three `PF_IteratePixel8Func` callbacks and their refcon. `ERR` skips further operations after an error; return `err` from the callback. To process sequentially, point each later pass at the intended previous output.

```cpp
ERR(suites.Iterate8Suite1()->iterate(in_data, lines_so_farL,
                                total_linesL,
                                input_worldP,
                                &output_worldP->extent_hint,
                                refcon,
                                WhizBangPreProcessFunc,
                                output_worldP));

lines_so_farL += lines_per_iterateL;

ERR(PF_PROGRESS(lines_so_farL, total_linesL));

ERR(suites.Iterate8Suite1()->iterate(in_data, lines_so_farL,
                                total_linesL,
                                input_worldP,
                                &output_worldP->extent_hint,
                                refcon,
                                WhizBangRenderFunc,
                                output_worldP));

lines_so_farL += lines_per_iterateL;

ERR(PF_PROGRESS(lines_so_farL, total_linesL));

ERR(suites.Iterate8Suite1()->iterate(in_data, lines_so_farL,
                                total_linesL,
                                input_worldP,
                                &output_worldP->extent_hint,
                                refcon,
                                WhizBangPostProcessFunc,
                                output_worldP));

lines_so_farL += lines_per_iterateL;

ERR(PF_PROGRESS(lines_so_farL, total_linesL));
```
