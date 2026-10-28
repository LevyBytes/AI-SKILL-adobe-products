# Adaptive Noise Reduction effect

Noise Reduction/Restoration > Adaptive Noise Reduction is intended for changing broadband problems, including background sound, rumble, and wind. Since it works in real time, it can sit in the Effects Rack alongside other effects and can be used from the Multitrack Editor. The ordinary Noise Reduction effect, by comparison, runs only as an offline process in the Waveform Editor, though it can do a better job on steady noises such as hiss or hum.

For stronger results, choose audio where the unwanted noise comes first and the wanted material follows. The effect learns its noise profile from the opening seconds of the selection.

Note

This effect is processor-intensive. On slower systems, reduce FFT Size and disable High Quality Mode.

Adaptive Noise Reduction can lower shifting background noise automatically while playback and editing remain real time.

Adaptive Noise Reduction can automatically reduce changing background noise during real-time work.

Reduce Noise By

Sets how much noise reduction is applied. Values between 6 and 30 dB are generally useful; for fewer bubbly background artifacts, use lower values.

Noisiness

Shows what percentage of the original audio is treated as noise.

Fine Tune Noise Floor

Moves the noise floor manually above or below the level calculated by the effect.

Signal Threshold

Offsets the desired-audio threshold manually from the automatically calculated threshold.

Spectral Decay Rate

Controls the speed at which noise processing falls by 60 decibels. Careful adjustment can remove more noise with fewer artifacts. Settings that are too short can cause bubbly sounds, while overly long settings can create a reverb-like result.

Broadband Preservation

Protects wanted audio in selected frequency bands around detected artifacts. For example, 100 Hz prevents removal within 100 Hz above or below the detected artifact. Lower settings remove additional noise, but they can add audible processing effects.

FFT Size

Chooses the number of separate frequency bands to analyze. Higher settings favor frequency resolution, and lower settings favor time resolution. High values suit long artifacts such as squeaks or power-line hum; low values work better on brief artifacts such as clicks and pops.

Watch the video about removing noise from audio files for a demonstration of reducing noise and removing unwanted sounds from audio.
