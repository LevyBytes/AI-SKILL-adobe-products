# Multiband Compressor

Multiband Compressor lets you compress four separate frequency bands independently. Since each band often carries different dynamic content, multiband compression is useful for mastering audio.

- Crossover: sets the crossover frequencies that define each band's width. Enter Low, Midrange, and High frequencies directly, or drag the crossover markers above the graph.
- Solo Buttons: lets you monitor chosen frequency bands. Enable one Solo button for isolation, or enable several to hear multiple bands together.
- Bypass Buttons: bypasses individual bands so they pass through without processing.
- Thresh: sets the input level where compression begins. Values can range from -60 dB to 0 dB. The best value depends on the audio and musical style. To compress only the largest peaks while keeping more dynamic range, try thresholds about 5 dB under the peak input level. For heavy compression and much less dynamic range, try settings about 15 dB under the peak input level.
- Gain: raises or lowers amplitude after compression. Values can range from -18 dB to +18 dB, with 0 as unity gain.
- Ratio: sets compression from 1-to-1 through 30-to-1. For example, 3.0 outputs 1 dB for each 3-dB increase above the compression threshold. Common values are 2.0 to 5.0; higher values create the compressed character often heard in pop music.
- Attack: sets how fast compression engages after audio passes the threshold. Values can range from 0 milliseconds to 500 milliseconds. The 10 milliseconds default fits many audio sources. Faster values suit fast transients, though they can sound unnatural on less percussive material.
- Release: sets how fast compression stops after audio falls below the threshold. Values can range from 0 milliseconds to 5000 milliseconds. The 100 milliseconds default fits many audio sources. Use faster values with fast transients and slower values with less percussive audio.
- Output Gain: raises or lowers the overall output level after compression. Values can range from -18 dB to +18 dB, with 0 as unity gain. Double-click the meters to reset peak and clip indicators.
- Gain: raises or lowers amplitude after compression. Values can range from -18 dB to +18 dB, with 0 as unity gain.
- Limiter: adds limiting after Output Gain at the end of the signal path to optimize overall levels. Use Threshold, Attack, and Release values that are gentler than comparable band-specific settings, then set Margin for the absolute ceiling relative to 0 dBFS.
