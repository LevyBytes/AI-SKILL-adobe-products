# Audio Spectrum effect

Put the Audio Spectrum effect on a video layer to show the audio spectrum of a layer carrying audio (and, if you like, video). What it draws is the strength of audio levels across the frequency span you mark out with Start Frequency and End Frequency. There are several display styles available, one of which follows a mask path.

Note

Audio Spectrum reads the audio source footage raw, ignoring time-remapping, effects, stretch, and levels. If you need the spectrum to reflect those, precompose the audio layer first, then apply the Audio Spectrum effect.

Note

So that other masks on the layer don't clip what the Audio Spectrum effect outputs, switch their mask modes to None. (See Mask modes.)

Color depths of 8-bpc, 16-bpc, and 32-bpc are supported by this effect.

Original (upper-left), and with effect applied (lower-left and right)

Audio Layer

Which audio layer to feed in as the source.

Start Point, End Point

Sets where the spectrum begins or ends when Path is set to None.

Path

Which mask path the audio spectrum traces.

Use Polar Path

Makes the path radiate from one point as a radial graph.

Start Frequency, End Frequency

The bottom and top frequencies, given in hertz, to show.

Frequency Bands

How many frequency bands the shown frequencies are split into.

Maximum Height

The tallest a shown frequency can reach, in pixels.

Audio Duration

How much audio, in milliseconds, feeds the spectrum calculation.

Audio Offset

The time offset, in milliseconds, applied when pulling the audio.

Thickness

How thick the bands are.

Softness

How feathered or blurry the bands look.

Inside Color, Outside Color

The bands' inner and outer colors.

Blend Overlapping Colors

Tells overlapping spectrums to blend together.

Hue Interpolation

When this sits above 0, the shown frequencies cycle around the hue color space.

Dynamic Hue Phase

With this on and Hue Interpolation above 0, the Start color migrates to the top frequency within the shown range. That lets the hue track the spectrum's fundamental frequency as it moves.

Color Symmetry

With this on and Hue Interpolation above 0, the start and end colors match. That keeps color continuous on closed paths.

Display Options

Chooses whether frequency shows as Digital, Analog Lines, or Analog Dots.

Side Options

Chooses whether the spectrum sits above the path (Side A), below it (Side B), or on both (Side A & B).

Duration Averaging

Averages the audio frequencies to cut down randomness.

Composite On Original

With this on, the original layer shows alongside the effect.
