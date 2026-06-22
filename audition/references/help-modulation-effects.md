# Modulation Effects

> Adobe Audition reference. Original prose; identifiers preserved verbatim.

### Enhance Your Audio with Chorus, Flanger, and Phaser Effects in Adobe Audition.

## Chorus effect

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

## Chorus/Flanger effect

Modulation > Chorus/Flanger combines two common delay-based effects. Chorus simulates several voices or instruments at the same time by adding short delays and a little feedback, creating a rich, full sound. Use it to improve vocal tracks or to add stereo spaciousness to mono audio.

Flanger creates a psychedelic, phase-shifted sound by mixing the original signal with a short delay that changes over time. The technique originally used two reel-to-reel tape recorders playing the same audio while one reel flange was pressed periodically to slow it.

Use the Chorus/Flanger effect to enhance vocal tracks or make mono audio feel wider in stereo.

Apply the Chorus/Flanger effect for vocal enhancement or for adding stereo spaciousness to mono audio.

Chorus

Creates the impression of multiple voices or instruments performing together.

Flanger

Recreates the delayed, phase-shifted sound associated with psychedelic music.

Speed

Sets how fast delay time moves from zero to the maximum value.

Width

Sets the largest delay amount.

Intensity

Sets the balance between the original audio and processed audio.

Transience

Accentuates transients so they sound sharper and more clearly defined.

## Flanger effect

Flanging happens when the original signal is mixed with a short delay that varies over time at roughly equal level. The classic method sent the same audio to two reel-to-reel tape recorders, then slowed one by pressing the flange of a reel. When those two recordings were combined, the result was a phase-shifted, time-delay sound associated with psychedelic music from the 1960s and 1970s.

Modulation > Flanger creates a comparable effect by adding slight delay and phase changes to a signal at set or random intervals.

Use the Flanger effect to create this kind of delay-and-phase treatment at specified or random intervals.

Apply the Flanger effect when a signal needs slight delay and phasing at fixed or random timing.

Initial Delay Time

Sets, in milliseconds, where flanging begins behind the original signal. The effect cycles over time from this initial delay value to a second, or final, delay value.

Final Delay Time

Sets, in milliseconds, where flanging ends behind the original signal.

Stereo Phasing

Sets different left and right delay values, measured in degrees. For example, 180° makes the right channel's initial delay occur at the same time as the left channel's final delay. This option can reverse the initial and final delay values between left and right channels, producing a circular, psychedelic sound.

Feedback

Sets what percentage of the flanged signal is returned to the flanger. Without feedback, only the original signal is used. When feedback is added, the effect uses a percentage of the processed signal from before the current playback point.

Modulation Rate

Sets how fast the delay moves from the initial delay time to the final delay time, measured in cycles per second (Hz) or beats per minute (beats). Small value changes can produce very different sounds.

Mode

Offers three flanging approaches:

- Inverted: Inverts the delayed signal, so audio cancels periodically instead of being reinforced. If Original - Expanded mix values are 50/50, the waves cancel to silence whenever delay reaches zero.

- Special Effects: Combines normal and inverted flanging. The delayed signal is added into the effect, while the leading signal is subtracted.

- Sinusoidal: Uses a sine curve for the movement from initial delay to final delay and back. Without this option, the movement is linear, so the delay changes at a steady rate between the initial and final settings. When Sinusoidal is selected, the signal remains longer at the initial and final delays than it does between them.

Mix

Sets the blend of original (Dry) and flanged (Wet) signal. Both are needed for the cancellation and reinforcement that define flanging. At Original 100%, there is no flanging. At Delayed 100%, the output wavers like a bad tape player.

## Phaser effect

Phasing, like flanging, changes the phase of an audio signal and blends it back with the original, producing psychedelic effects that musicians first made popular in the 1960s.

Unlike Flanger, which relies on changing delays, Modulation > Phaser sweeps a set of phase-shifting filters toward and away from an upper frequency. The process can strongly reshape the stereo image and create otherworldly sounds.

Use the Phaser effect to phase-shift an audio signal and blend it back with the original.

Apply the Phaser effect when you want an audio signal recombined with a shifted-phase version.

Stages

Sets how many phase-shifting filters are used. Higher values make the phasing effect denser.

Intensity

Sets how much phase-shifting is applied to the signal.

Depth

Sets how far the filters move below the upper frequency. Larger values create a wider tremolo; 100% sweeps from the upper frequency down to zero Hz.

Mod Rate

Controls how quickly the filters move toward and away from the upper frequency. Enter the value in Hz (cycles per second).

Phase Diff

Sets the phase difference between stereo channels. Positive values begin phase shifts in the left channel, and negative values begin them in the right. The maximum values, +180 and -180 degrees, create a complete difference and sound identical.

Upper Freq

Sets the highest frequency from which the filters sweep. For the most dramatic sound, choose a frequency near the middle of the selected audio's range.

Feedback

Returns a percentage of the phaser output to the input, strengthening the effect. Negative values invert phase before the audio is fed back.

Mix

Sets the blend between original and processed audio.

Output Gain

Sets post-processing output level.

### More like this

- Applying effects in the Waveform Editor
- Applying effects in the Multitrack Editor
- Use effect presets
