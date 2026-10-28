# Multiband Compressor effect

Amplitude and Compression > Multiband Compressor lets four separate frequency bands be compressed independently. Since each band often has its own dynamic behavior, multiband compression is especially useful in audio mastering.

Multiband Compressor controls define crossover frequencies precisely and apply compression settings per band. Select Solo buttons to audition bands alone, or use Bypass buttons to let bands pass without processing. After individual bands are tuned, select Link Band Controls for global adjustment, then refine overall level with the Output Gain slider and Limiter settings.

Note

Use automation lanes in the Multitrack Editor when compression settings need to change over time.

Use Multiband Compressor to set crossover frequencies and apply precise band-specific compression settings.

A. Frequency bands B. Crossover markers C. Bypassed band (no processing applied) D. Amplitude scale E. Frequency scale

With Multiband Compressor, crossover points and band-specific compression can be adjusted accurately.

Crossover

Sets crossover frequencies, which control each band's width. Enter specific Low, Midrange, and High frequencies, or move the crossover markers above the graph.

Band-specific controls in Multiband Compressor provide per-band compression adjustment.

A. Solo B. Bypass C. Threshold slider D. Input Level meters E. Gain Reduction meters

Adjust compression for each frequency band with the band-specific Multiband Compressor controls.

Solo buttons

Allow selected frequency bands to be heard. Enable one Solo button to monitor a single band, or enable multiple buttons to listen to two or more bands together.

Bypass buttons

Let individual bands pass through with no processing applied.

Tip

To give one band its own setting quickly, Alt-click (Windows) or Option-click (macOS) a Solo or Bypass button.

Threshold sliders

Set the input level where compression starts. Values can be -60 to 0 dB. The right setting depends on the source and musical style. To keep more dynamic range while compressing only extreme peaks, try thresholds about 5 dB below the peak input level. For heavy compression and a much smaller dynamic range, try settings near 15 dB below the peak input level.

Input Level meters

Show input amplitude. Double-click the meters to clear peak and clip indicators.

Gain Reduction meters

Use red meters to show amplitude reduction, with the top indicating minimal reduction and the bottom indicating maximum reduction.

Gain

Raises or lowers amplitude after compression. Values can be -18 to +18 dB, with 0 as unity gain.

Ratio

Sets compression ratio from 1-to-1 through 30-to-1. For example, at 3.0, the output rises by 1 dB for each 3-dB amount above the compression threshold. Common values are 2.0 to 5.0; higher values create the more compressed sound often associated with pop music.

Attack

Controls how fast compression begins once audio passes the threshold. Values can be 0 milliseconds to 500 milliseconds. A broad range of audio works well with the 10 milliseconds default. Shorter times suit audio with fast transients, though they can sound unnatural on less percussive material.

Release

Controls how fast compression ends after audio falls under the threshold. Values can be 0 milliseconds to 5000 milliseconds. The 100 milliseconds default works for many audio sources. Use shorter times for fast transients and longer times for less percussive content.

Output Gain

Raises or lowers the total output level after compression. Values can be -18 to +18 dB, with 0 as unity gain. Double-click the meters to clear peak and clip indicators.

Limiter

Runs limiting after Output Gain at the end of the signal path to optimize overall level. Use Threshold, Attack, and Release settings that are gentler than the comparable band-specific settings. Then set Margin to define the absolute ceiling relative to 0 dBFS.

Tip

To make compressed audio, enable Limiter and experiment with high Output Gain values.

Spectrum On Input

Shows the input signal's frequency spectrum in the multiband graph instead of the output signal. Toggle the option on and off to quickly compare how much compression is being applied to each band.

Brickwall Limiter

At the current Margin setting, this applies immediate hard limiting. Deselect it for slower soft limiting, which sounds less compressed but may go beyond the Margin setting. Brickwall limiting allows a maximum Attack time of 5 ms.

Link Band Controls

Allows compression settings for all bands to be adjusted globally while preserving their relative differences.

Tip

Hold Alt+Shift (Windows) or Option+Shift (macOS) to link band controls temporarily. To reset one control across every band, hold Ctrl+Alt+Shift (Windows) or Command+Option+Shift (macOS), then select the control.
