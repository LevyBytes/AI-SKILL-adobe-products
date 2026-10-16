# Flanger

Flanging happens when a changing short delay is mixed with the original signal at about the same level. The tape-era technique used two reel-to-reel machines carrying the same audio; slowing one reel by touching its flange created the timing offset. When the two recordings were recombined, the result had the phase-shifted delay sound identified with psychedelic music from the 1960s and 1970s. The Flanger effect produces related movement by adding slight delay and phase changes at fixed or random timing intervals.

- Initial Delay Time: Chooses the millisecond offset where flanging begins after the source signal. Over time, the effect sweeps from this starting delay toward a second, final delay value.
- Final Delay Time: Chooses the millisecond offset where flanging finishes after the source signal.
- Stereo Phasing: Gives the left and right delays separate degree values. For example, 180° makes the right channel's initial delay happen when the left channel reaches its final delay. Reversing initial and final delay placement between channels with this control creates a circular, psychedelic motion.
- Feedback: Sets how much of the flanged output returns into the flanger. At zero feedback, only the original signal is used; adding feedback reuses a portion of earlier affected audio before the current playback point.
- Modulation Rate: Controls the speed of the sweep between initial and final delay times, expressed as cycles per second (Hz) or beats per minute (beats). Even small value changes can strongly alter the effect.

  - Inverted: Flips the delayed signal so audio cancels periodically instead of reinforcing. With the Original - Expanded mix at 50/50, zero delay makes the waves cancel to silence.
  - Special Effects: Blends regular and inverted flanging. The effect adds the delayed signal while subtracting the leading signal.
  - Sinusoidal: Uses a sine curve for movement from initial delay to final delay and back. Without this option, the transition is linear and delay changes at a constant rate. When Sinusoidal is active, the signal spends more time near the initial and final delay values than between them.

- Mix: Sets the proportion of original (Dry) signal and flanged (Wet) signal. The recognizable flanging cancellations and reinforcements need both signals. Original at 100% removes flanging entirely; Delayed at 100% gives a wavering tone similar to a failing tape player.
