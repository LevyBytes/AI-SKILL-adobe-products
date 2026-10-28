# Using histograms to adjust color

How many pixels sit at each luminance value in an image is what a histogram depicts. When a histogram carries nonzero values at every luminance value, the image is making use of the entire tonal range. A histogram that falls short of the full tonal range points to a flat image short on contrast.

Spreading pixel values more evenly across the histogram from left to right — rather than letting them cluster at one extreme — is a routine color-correction job. For plenty of images, an easy and effective approach is to apply the Levels effect and tune its Input White and Input Black properties within the histogram.

Histogram for image that does not use full tonal range

Histogram for image that does not use full tonal range Input sliders moved so that output uses full tonal range

Input sliders moved so that output uses full tonal range Histogram showing highlight clipping

Histogram showing highlight clipping Histogram showing shadow clipping

Histogram showing shadow clipping
