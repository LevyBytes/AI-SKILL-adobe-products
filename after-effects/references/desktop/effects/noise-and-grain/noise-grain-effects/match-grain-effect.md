# Match Grain effect

Noise between a pair of images is reconciled by the Match Grain effect, which shines in compositing and in bluescreen/greenscreen jobs. Because the Match Grain effect can only put noise in and never take it out, an exact match isn't reachable when the destination already carries more noise than the source. The workaround is to clean the destination first with the Remove Grain effect, then run the Match Grain effect on that result for a flawless match.

The starting point for the Match Grain effect is noise sampling. In essence, whole frames of fresh noise get synthesized to line up with the noise samples. Before the effect lands on the new image, you can reshape that noise in plenty of ways — for example, lifting the noise off one image yet making it bigger and redder before laying it onto a different image.

Some of the Match Grain effect's controls overlap with those of the Add Grain effect. Supported color depths are 8-bpc and 16-bpc.

Note

The Match Grain effect takes its noise sample from whichever frame in the source layer aligns with the first frame in the destination layer. When the source layer is absent at that frame, or when the noise samples include transparent regions, nothing is sampled and nothing is applied.

Original image

Reference image with grains

Match Grain effect applied
