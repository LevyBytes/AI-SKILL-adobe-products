# Level Detector

The Level Detector section sets how the original input amplitude is measured.

Input Gain

Adds gain before the signal reaches the Level Detector.

Attack Time

Sets how many milliseconds pass before the input signal registers an amplitude change. For example, if audio suddenly falls 30 dB, the selected attack time elapses before the input records that change. This helps avoid false amplitude readings from short-term changes.

Release Time

Sets how many milliseconds the current amplitude level is held before a new amplitude change can be registered.

Tip

Use fast attack and release values for audio with quick transients, and slower values for audio that is less percussive.

Peak mode

Measures levels from amplitude peaks. Compared with RMS, this mode is somewhat harder to work with because peaks are not shown exactly in the Dynamics graph. It can still help when the audio contains loud transient peaks that need reduction.

RMS mode

Measures levels with the root-mean-square formula, an averaging approach that better matches perceived loudness. This mode shows amplitudes accurately in the Dynamics graph. For example, a limiter shown by a flat horizontal line at -10 dB corresponds to an average RMS amplitude of -10 dB.
