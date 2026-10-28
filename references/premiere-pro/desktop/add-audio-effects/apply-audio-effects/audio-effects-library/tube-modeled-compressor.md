# Tube-modeled Compressor

Tube-modeled Compressor simulates the warm tone of vintage hardware compressors. Use it to add subtle distortion that colors audio pleasantly.

- Threshold: sets the input level where compression begins. Values can range from -60 dB to 0 dB. The best setting depends on the source and musical style. To reduce only extreme peaks while retaining more dynamic range, try thresholds about 5 dB below the peak input level. To compress strongly and greatly reduce dynamic range, try values about 15 dB below the peak input level.
- Output Gain: raises or lowers the final output level after compression. Values can range from -18 dB to +18 dB, with 0 as unity gain. Double-click the meters to reset peak and clip indicators.
- Ratio: sets compression from 1-to-1 through 30-to-1. For example, at 3.0, each 3-dB rise above the compression threshold produces 1 dB of output. Common values are 2.0 to 5.0; higher values create the compressed character often heard in pop music.
- Attack: sets how quickly compression is applied when audio exceeds the threshold. Allowed values run from 0 milliseconds through 500 milliseconds. The 10 milliseconds default works well for many audio sources. Faster values suit fast transients, but can sound unnatural on less percussive audio.
- Release: sets how quickly compression ends after audio falls below the threshold. Allowed values run from 0 milliseconds through 5000 milliseconds. The 100 milliseconds default works well for many audio sources. Try faster values for fast transients and slower values for less percussive audio.
