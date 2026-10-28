# DeClipper options

Diagnostics > DeClipper repairs clipped waveforms by generating new audio data for clipped sections. Clipping happens when amplitude goes beyond the maximum level supported by the current bit depth, commonly because recording levels were set too high. During recording or playback, watch the Level Meters for clipping; when it occurs, the boxes at the far right turn red.

In the waveform view, clipped audio looks like wide flat areas along the top. To the ear, it sounds like static-like distortion.

Note

When clipped audio also needs DC offset correction, apply DeClipper first. If DC offset is adjusted first, DeClipper will not detect clipped areas that sit below 0 dBFS.

DeClipper settings can rebuild distorted peaks, restore clipped audio, and improve the overall sound.

Use DeClipper settings when clipped audio needs restored peaks and better sound quality.

Select Settings in the Diagnostics panel to access these options:

Gain

Sets how much attenuation happens before processing. Select Auto to derive the gain setting from average input amplitude.

Tolerance

Sets amplitude variation for clipped regions. At 0%, only perfectly horizontal lines at maximum amplitude are detected as clipping; at 1%, detection begins 1% below maximum amplitude, and so forth. A 1% value detects most clipping.

Min. Clip Size

Sets the shortest run of clipped samples that will be repaired. Lower values repair a larger percentage of clipped samples; higher values repair only clipped samples that are preceded or followed by other clipped samples.

Interpolation

- Cubic uses spline curves to rebuild the frequency content of clipped audio. It is generally faster in most cases, but it can add unwanted new frequencies.
- FFT uses Fast Fourier transforms to rebuild clipped audio. It is usually slower, but it works best for severe clipping. From the FFT Size menu, choose how many frequency bands to analyze and replace. More bands improve accuracy while increasing processing time.

Note

To preserve amplitude while restoring clipped audio, apply DeClipper with Gain set to zero, then apply Hard Limiting with Boost set to zero and Limit set to -0.2 dB.
