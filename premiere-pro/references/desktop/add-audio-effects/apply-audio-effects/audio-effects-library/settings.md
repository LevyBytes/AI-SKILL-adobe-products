# Settings

- General: supplies overall settings.
- Look Ahead Time: handles transient spikes that can occur when loud signals begin and go beyond the compressor's Attack Time settings. Longer Look Ahead Time makes compression begin before the audio becomes loud, preventing amplitude from passing a certain level. Shorter Look Ahead Time can preserve the punch of percussive sounds such as drum hits.
- Noise Gating: mutes signals completely when they are expanded below a 50-to-1 ratio.
- Level Detector: reads the original input amplitude.
- Input Gain: adds gain before the signal reaches the Level Detector.
- Attack Time: sets how many milliseconds pass before the input signal registers an amplitude change. For example, when audio suddenly falls 30 dB, the chosen attack time elapses before the input records that change. This helps avoid false amplitude readings from brief fluctuations.
- Release Time: sets how long, in milliseconds, the current amplitude level is held before another amplitude change can register.
- Peak mode: calculates levels from amplitude peaks. This mode is somewhat harder to use than RMS because peaks do not map precisely to the Dynamics graph, but it can help tame audio with loud transient peaks.
- RMS mode: calculates levels with the root-mean-square formula, an averaging method closer to human volume perception. RMS amplitudes appear accurately in the Dynamics graph; for example, a limiter shown as a flat horizontal line at -10 dB represents an average RMS amplitude of -10 dB.
- Gain Processor: raises or lowers the signal based on detected amplitude.
- Output Gain: adds gain to the output after all dynamics processing.
- Attack Time: sets how many milliseconds the output signal takes to reach the chosen level. For example, when audio suddenly falls 30 dB, the selected attack time passes before the output level changes.
- Release Time: sets how long, in milliseconds, the current output level is held.
- Link Channels: applies equal processing to every channel, keeping stereo or surround balance intact. For example, compression on a left-channel drum hit reduces the right-channel level by the same amount.
- Band Limiting: confines dynamics processing to a selected frequency range.
- Low Cutoff: marks the lowest frequency affected by dynamics processing.
- High Cutoff: marks the highest frequency affected by dynamics processing.
