# Single-band Compressor

Single-band Compressor reduces dynamic range to create steadier levels and greater perceived loudness. It works well on voiceovers because it can help speech stand out over music beds and background audio.

Note

Modern pop recordings provide examples of heavy compression. Most jazz recordings use lighter compression, while typical classical recordings often have no compression.

- Threshold: sets the input level where compression begins. The best value depends on the source audio and style. To reduce only extreme peaks while preserving more dynamic range, try thresholds about 5 dB below the peak input level. To compress heavily and greatly narrow dynamic range, try values about 15 dB below the peak input level.
- Ratio: sets compression from 1-to-1 through 30-to-1. For example, a value of three outputs 1 dB for each 3-dB increase above the threshold. Common values are 2 to 5; higher values create the compressed sound often associated with pop music.
- Attack: sets how quickly compression begins once audio passes the Threshold setting. The default, 10 milliseconds, works well for many source types. Use faster values only for quick transients, such as percussion.
- Release: sets how quickly compression ends once audio falls below the Threshold setting. The default, 100 milliseconds, works well for many audio sources. Use faster values for fast transients and slower values for less percussive audio.
- Output Gain: raises or lowers amplitude after compression. Values can range from -30 dB to +30 dB, with 0 as unity gain.
