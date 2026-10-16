# Audio Waveform effect

Put the Audio Waveform effect on a video layer to show the audio waveform of a layer carrying audio (and, if you like, video). It offers several display styles, including following an open or closed mask path.

note: Audio Waveform reads the audio source footage raw, ignoring time-remapping, effects, stretch, and levels. If you need the spectrum to reflect those, precompose the audio layer first, then apply the Audio Waveform effect.

Note

So that masks on the layer don't clip what the Audio Waveform effect outputs, switch their mask modes to None. (See Mask modes.)

Color depths of 8-bpc, 16-bpc, and 32-bpc are supported by this effect.

Original (upper-left), and with effect applied (lower-left and right)

Audio Layer

Which audio layer you want rendered as a waveform.

Start Point, End Point

Where the waveform begins and ends when Path is set to None.

Path

Set this to None and the audio waveform runs along the layer's path.

Displayed Samples

How many samples appear in the waveform.

Maximum Height

The tallest a shown frequency can reach, in pixels.

Audio Duration

How much audio, in milliseconds, feeds the waveform calculation.

Audio Offset

The time offset, in milliseconds, applied when pulling the audio.

Thickness

How thick the waveform is.

Softness

How feathered or blurry the waveform looks.

Inside Color, Outside Color

The waveform's inner and outer colors.

Waveform Options

Mono folds the audio layer's left and right channels together. Audio layers that aren't stereo play back as Mono.

Display Options

Digital draws each sample as one vertical line spanning the lowest and highest source sample, mimicking the readout on digital gear. Analog Lines draws each sample as a line joining the previous and next sample taken from either the lowest or highest audio source sample, mimicking the retrace seen on an analog oscilloscope. Analog Dots draws each sample as a dot standing for either the lowest or highest audio source sample.

Composite On Original

Blends the audio waveform onto the original layer through the Add blending mode. Turn it off and you'll see the audio waveform by itself.
