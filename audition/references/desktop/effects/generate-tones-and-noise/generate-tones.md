# Generate Tones

Select Effects > Generate > Tones to build a simple waveform from amplitude- and frequency-related settings. Generated tones provide useful source material for sound effects.

Use Generate Tones settings to build simple waveforms by changing amplitude and frequency controls.

Sweep Frequencies

Moves tones from the Start tab settings toward the End tab settings. Waveform stays constant.

Base frequency

Sets the primary frequency used for tone generation.

Modulation Depth

Varies the base-frequency pitch across a user-defined range. For example, a 100 Hz value moves the original frequency from 50 Hz lower up to 50 Hz higher.

Modulation Rate

Sets the number of frequency modulations per second, creating a vibrato-like wobble.

Waveform

Select one of the following:

- Sine and Inverse Sine generate the fundamental frequency. A Type value of 1.00 creates pure tones; lower values move toward square waves, and higher values move toward triangular waves.
- Triangle/Sawtooth creates a true triangle waveform with only odd harmonics when Type is 50%. Values above or below that percentage create Sawtooth waveforms containing both odd and even harmonics.
- Square creates only odd harmonics. A true square wave uses a Type value of 50%. Values above or below that point change the waveform duty cycle between a 100% flat peak and a 0% flat trough. The extreme ends produce only an audible click.

Frequency Components

Adds as many as five overtones to the fundamental frequency (Base Frequency). Beneath the sliders, enter a specific frequency for each overtone or define it as a multiplier of the fundamental. Then use the Amplitude sliders to set the relative mix of the overtones.

Volume

Sets the effect's overall output level.

Duration

Sets the generated tone length using the time-ruler format currently in effect. Right-click the numbers to choose a different time format for Generate Tones.

Select Advanced to expand the following options:

Start Phase At

Sets the starting position in the waveform cycle. At 0 degrees, waves begin at the zero-crossing point. At 90 degrees, the wave begins at full amplitude, which creates a noticeable click.

2nd Channel Phase Difference

Changes the relative phase between stereo channels. A value of zero keeps the channels completely in phase, while 180 puts them completely out of phase.

Change Speed

Dynamically varies phase over time for the two channels of a stereo audio file. For example, entering 1 Hz makes the phase difference move through 360 degrees each second.

DC Offset

Adds a Direct Current offset, moving the waveform center upward or downward by the specified percentage. Use this setting to calibrate audio hardware or mimic hardware-created offset.

With Selected Audio

Select from the following:

- Replace: substitutes generated tones for the existing audio.
- Modulate: ring-modulates, or multiplies, existing audio with the current tone settings. This option works well for adding special effects.
- Demodulate: ring-demodulates existing audio with the current tone settings. Use this option to create unusual effects or restore audio that was previously processed with the Modulate option.
- Overlap: mixes generated tones together with existing audio.
