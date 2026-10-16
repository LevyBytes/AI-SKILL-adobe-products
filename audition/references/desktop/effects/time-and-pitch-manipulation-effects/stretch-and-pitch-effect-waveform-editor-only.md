# Stretch and Pitch effect (Waveform Editor only)

The Time and Pitch > Stretch and Pitch effect can alter pitch, tempo, or both for an audio signal. You can, for instance, transpose a song into a higher key while retaining its tempo, or slow spoken audio while leaving pitch unchanged.

Note

This effect runs as an offline process. While its dialog is active, waveform edits, selection changes, and current-time-indicator movement are unavailable.

Use Stretch and Pitch when an audio clip needs separate control over length and pitch.

Algorithm

Choose IZotope Radius when stretch and pitch shift should happen together, or choose Audition when stretch or pitch values need to vary over time. Processing with the iZotope Radius algorithm takes longer but generally creates fewer artifacts.

Precision

Increasing this value improves quality, with the tradeoff of additional processing time.

New Duration

Shows the resulting length after time-stretching. Change New Duration directly, or modify it indirectly through the Stretch percentage.

Note

For a duration you reuse often, select the Favorite icon to store that setting for later use.

Lock Stretch Settings to New Duration

Uses the duration change to calculate stretch values, replacing any custom or preset Stretch settings.

Stretch

Changes processed audio length compared with the original. To reduce audio to half of its present duration, for example, enter a Stretch value of 50%.

Pitch Shift

Moves audio tonality higher or lower. A semitone is the interval between adjacent notes on a keyboard.

Final Stretch or Pitch Shift

For the Audition algorithm, this varies the starting Stretch or Pitch Shift value across the selection and reaches the final value on the final sample in that selection.

Lock Initial Strech and Pitch Shift

For the Audition algorithm, this links stretch to pitch changes, or pitch to stretch changes. Final Stretch or Pitch Shift values do not change.

Lock Stretch and Pitch Shift

Available for the IZotope algorithm. Links stretch changes and pitch changes so one reflects the other.

Advanced settings for IZotope algorithm

Select the triangle to show these options:

- Solo Instrument or Voice: processes a solo performance more quickly.

- Preserve Speech Characteristics: keeps speech sounding realistic.

- Formant Shift: controls how formants move when pitch shifts occur. At the default value of zero, formants move with the pitch shift so timbre and realism are retained. Values above zero create higher timbres, such as making a male voice sound female. Values below zero create the opposite effect.

- Pitch Coherence: preserves the timbre of solo instruments or vocals. Higher values lower phasing artifacts, but they add more pitch modulation.

Advanced settings for Audition algorithm

Select the triangle to expand the section and show these options:

- Splicing Frequency: sets the size of each audio-data chunk used when stretching a waveform while preserving pitch or tempo. Higher values place stretched audio more accurately over time. Artifacts also become easier to hear as rates increase; the sound can turn tinny or tunnel-like. With higher Precision values, lower splicing frequencies can introduce stutter or echo.

- Overlapping: controls how far each audio-data chunk overlaps the chunks before and after it. If stretching creates a chorus effect, reduce the Overlapping percentage, but keep it high enough to avoid choppy playback. Overlapping can reach 400%, though that value is intended only for very large speed increases of 200% or more.

- Choose Appropriate Defaults: applies suitable defaults for Splicing Frequency and Overlapping. This option works well when preserving pitch or tempo.

- Constant Vowels: keeps vowel sounds intact in stretched vocals. Because this option needs substantial processing, test it on a short selection before using it on a larger range.

### More like this

- About process effects
- Apply individual effects in the Waveform Editor
- Use effect presets
