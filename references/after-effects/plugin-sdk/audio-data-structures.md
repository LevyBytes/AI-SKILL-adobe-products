# Audio Data Structures

To describe audio data, After Effects relies on the data types listed below.

| Structure | Description |
| --- | --- |
| `PF_SoundFormat` | Tells you whether the audio uses unsigned pulse code modulation (PCM), signed PCM, or a floating point format. |
| `PF_SoundSampleSize` | Each sample occupies 1, 2, or 4 bytes. |
| `PF_SoundChannels` | Reports whether the audio is mono or stereo. |
| `PF_SoundFormatInfo` | Holds the sampling rate, the channel count, the sample size, and the format of the audio it describes. |
| `PF_SoundWorld` | Audio is represented through `PF_SoundWorlds`. Beyond a `PF_SoundFormatInfo`, each one carries the audio's length together with a pointer to the actual audio data. |

A `PF_SoundFormatInfo` is what contains `PF_SoundFormat`, `PF_SoundSampleSize`, and `PF_SoundChannels`.

Each `PF_SoundWorld` wraps a `PF_SoundFormatInfo` plus additional per-instance information.
