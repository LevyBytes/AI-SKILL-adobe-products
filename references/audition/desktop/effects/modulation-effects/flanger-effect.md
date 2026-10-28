# Flanger effect

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
