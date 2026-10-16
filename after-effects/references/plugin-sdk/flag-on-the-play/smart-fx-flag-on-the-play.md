# SmartFX — Flag On The Play

Ordinarily a given `PF_RenderRequest` has its max_result_rect clipped to whatever applied mask bounds it.

If `PF_OutFlag2_REVEALS_ZERO_ALPHA` is set, though, the max_result_rect becomes the size of the layer.
