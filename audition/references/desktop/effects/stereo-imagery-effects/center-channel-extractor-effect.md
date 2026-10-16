# Center Channel Extractor effect

Stereo Imagery > Center Channel Extractor preserves or removes frequencies shared by the left and right channels, meaning sounds panned to the center. Voice, bass, and lead instruments are often recorded that way. You can therefore raise the level of vocals, bass, or kick drum, or remove one of them for a karaoke-style mix.

Use Center Channel Extractor to isolate, boost, or remove center-panned audio within a stereo mix.

The Center Channel Extractor effect can isolate, enhance, or remove audio panned to the center of a stereo mix.

Extraction

Restricts extraction to audio matching selected characteristics.

- Extract: Choose Center, Left, Right, or Surround for the channel to target, or choose Custom and enter the exact phase degree, pan percentage, and delay time for material targeted for extraction or removal. Surround targets material with perfect opposite phase between the left and right channels.

- Frequency Range: Sets the frequency range targeted for extraction or removal. Preset ranges include Low Voice, High Voice, Bass, and Full Spectrum. Choose Custom to define your own frequency range.

Discrimination

Provides controls that help Audition identify the center channel.

- Crossover Bleed: Drag left to allow more bleed and make the result sound less artificial. Drag right to isolate the center-channel material more strongly from the rest of the mix.

- Phase Discrimination: Higher values generally work better when extracting the center channel, while lower values tend to work better when removing it. Lower settings permit more bleed and may not cleanly separate vocals from a mix, but they can capture more of all center material. A range from 2 to 7 is usually effective.

- Amplitude Discrimination and Amplitude Bandwidth: Audition sums the left and right channels and builds a perfectly out-of-phase third channel to remove similar frequencies. When amplitudes at a frequency are similar, in-phase content common to both channels is included too. Lower Amplitude Discrimination and Amplitude Bandwidth values remove more from the mix but can also remove vocals. Higher values make extraction depend more on phase and less on channel amplitude. Useful ranges are 0.5 to 10 for Amplitude Discrimination and 1 to 20 for Amplitude Bandwidth.

- Spectral Decay Rate: Use 0% for quicker processing. Use 80% to 98% to smooth background distortions.

Center and Side Channel Levels

Sets how much selected signal is extracted or removed. Raise the sliders to include more material.

Advanced

Select the triangle to open these settings:

- FFT Size: Sets the Fast Fourier Transform size; lower values process faster, while higher values improve quality. Settings between 4096 and 8192 usually work best.

- Overlays: Sets how many FFT windows overlap. Higher values can make the result smoother or create a chorus-like effect, though processing takes longer. Lower values can create bubbly-sounding background noise. Values of 3 to 9 work well.

- Window Width: Sets how much of each FFT window is used. Values from 30% through 100% work well.
