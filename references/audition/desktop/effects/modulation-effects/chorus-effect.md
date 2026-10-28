# Chorus effect

Modulation > Chorus creates the impression of multiple voices or instruments at once by adding several short delays with light feedback. The sound becomes rich and full. Chorus can improve a vocal track or give mono audio more stereo space.

Adobe Audition creates chorus with a direct-simulation method, separating each voice from the original through small changes in timing, intonation, and vibrato. Feedback adds more detail to the processed sound.

Note

For best results with mono files, convert the audio to stereo before using the Chorus effect.

Use the Chorus effect to improve vocals or widen mono audio into a stereo-feeling space.

Apply the Chorus effect when a vocal track needs enhancement or mono material needs stereo spaciousness.

Characteristics

Define the qualities of each chorus voice.

- Voices: Sets how many voices are simulated. Adding voices makes the sound fuller, while processing also takes longer.

- Delay Time: Sets the greatest permitted delay amount. Chorus relies on short delays, often in the 15-35 millisecond range, whose duration changes over time. If the value is too small, the voices blend back into the original and can create unnatural flanging. If the value is too high, the result may wobble like tape being pulled through a cassette deck.

- Delay Rate: Sets how fast the delay moves from zero to the maximum delay value. Because delay changes with time, sample pitch rises or falls over time, creating the sense of separate voices that are slightly out of tune. For example, 2 Hz changes the delay from zero to the maximum and back twice each second, simulating pitch vibrato twice per second. Too low a value leaves little pitch difference between voices. Too high a value can make the voices change so quickly that a warbled sound results.

- Feedback: Sends a percentage of processed voices back into the effect input. It can add an echo or reverb-like quality to a waveform. Small amounts, less than 10%, may add richness depending on the delay and vibrato settings. Higher values create conventional feedback, a ringing tone that can become loud enough to clip.

- Spread: Adds delay to each voice, separating them by as much as 200 milliseconds (1/5th of a second). With high values, the voices begin at different times; larger values place their starts farther apart. Low values keep voices in unison. Depending on the other settings, low values can also cause flanging, which may be unwanted when a realistic chorus is the goal.

- Modulation Depth: Sets the largest amplitude variation. For example, a chorused voice can be made 5 dB louder or quieter than the original. At very high settings, audio may drop in and out, creating an unpleasant warble. At very low settings, less than 1 dB, the effect may be hard to notice unless Modulation Rate is extremely high. Natural vibratos are usually around 2 dB to 5 dB. This value is only a maximum; vibrato volume might not always fall as low as the setting suggests. That behavior is intentional because it sounds more natural.

- Modulation Rate: Sets the fastest rate of amplitude change. Very low values make the voice slowly rise and fall in level, like a singer with uneven breath control. Very high values can sound jittery and artificial.

- Highest Quality: Uses the best quality processing. Raising quality also increases the time needed to preview and apply the effect.

Stereo Width

Sets voice placement in the stereo field and controls how the original stereo signal is handled. These options apply only with stereo files:

- Average Left & Right Channel Input: Mixes the original left and right channels together. When this option is off, the channels remain separate so the stereo image is preserved. Leave it off if the stereo source was originally monophonic; the only result would be extra processing time.

- Add Binaural Cues: Applies separate delays to each voice's left and right outputs. Through headphones, the delay can make each voice seem to arrive from a different direction. For more separation on audio intended for standard speakers, turn this option off.

- Stereo Field: Sets where chorused voices sit across the left-to-right stereo image. Lower values keep voices nearer the center. At 50%, voices are distributed evenly from left to right. Higher values push them toward the outer edges. If the voice count is odd, one voice always remains centered.

Output Level

Sets the balance between original (Dry) signal and chorused (Wet) signal. Very high values can clip.

Note

In the Multitrack Editor, automation lanes can change the Wet level over time. This is useful for bringing out vocal or instrumental solos.
