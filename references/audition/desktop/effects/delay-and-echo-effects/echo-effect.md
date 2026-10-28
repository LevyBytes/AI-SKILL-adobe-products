# Echo effect

Delay and Echo > Echo adds repeated echoes that decay over time. Changing the delay amount can produce effects such as a Grand Canyon-type "Hello-ello-llo-lo-o" repeat or a metallic drainpipe clang. Equalized delays reshape the perceived room, making echoes brighter like reflective surfaces or darker like highly absorptive spaces.

Note

- For a single echo, use the Delay effect instead.
- Make sure the audio file lasts long enough for the echo to finish. If the echo stops abruptly before fully decaying, undo Echo, add several seconds of silence with Generate > Silence, and apply the effect again.

Echo controls add repeated echoes that fade gradually from a sound.

Use Echo controls to place a sequence of gradually fading repeats on a sound.

Delay Time

Sets the spacing between echoes in milliseconds, beats, or samples. For example, 100 milliseconds creates a 1/10th-second gap between successive echoes.

Feedback

Sets how much each echo falls off. Every following echo becomes a certain percentage lower than the one before it. A 0% decay setting creates no echo, while 100% decay creates an echo that never becomes quieter.

Echo Level

Sets the percentage of echoed wet signal mixed with the original dry signal in the final output.

Tip

Set different left and right values for Delay Time, Feedback, and Echo Level to create strong stereo echo effects.

Lock Left & Right

Links the Decay, Delay, and Initial Echo Volume sliders so both channels keep the same settings.

Echo Bounce

Makes echoes alternate between left and right channels. To create one echo that bounces between sides, set the initial echo volume to 100% for one channel and 0% for the other. Otherwise, each channel's settings bounce to the opposite side, producing two sets of echoes on each channel.

Successive Echo Equalization

Sends each successive echo through an eight-band equalizer, simulating natural room absorption. A value of 0 leaves a frequency band unchanged, while the maximum value of -15 lowers that frequency by 15 dB. Because -15 dB is applied to each successive echo, some frequencies decay much faster than others.

Delay Time Units

Sets milliseconds, beats, or samples as the units for Delay Time.

### More like this

- Applying effects in the Waveform Editor
- Applying effects in the Multitrack Editor
- Use effect presets
