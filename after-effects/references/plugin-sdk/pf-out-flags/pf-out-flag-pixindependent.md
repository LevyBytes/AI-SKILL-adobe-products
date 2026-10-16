# PF_OutFlag_PIX_INDEPENDENT

`PF_OutFlag_PIX_INDEPENDENT`

Any given pixel stands apart from the pixels surrounding it. Set during `PF_Cmd_GLOBAL_SETUP` or `PF_Cmd_QUERY_DYNAMIC_FLAGS`. For instance, color correction effects tend to be pixel independent while distortions aren't.

Note

Where your effect doesn't let one pixel's color values sway those of neighboring pixels, set this outflag!

The performance gains can be dramatic.
