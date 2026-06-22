# Special Effects, Stereo Imagery Effects

> Adobe Audition reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: How to use special effects with Audition; Stereo imagery effects.

## How to use special effects with Audition

### Learn to transform audio in Adobe Audition with special effects including Distortion, Doppler, Vocal Enhancer, and others.

### Distortion effect

Special > Distortion can mimic overdriven amplifiers, muffled microphones, or damaged car speakers.

The Distortion effect can supply subtle harmonic saturation or heavier distortion for creative tone design.

Use the Distortion effect when you want either harmonic color or aggressive distortion as part of sound shaping.

- Positive and Negative graphs: Use separate curves for distortion of positive and negative sample values. The horizontal ruler (x-axis) shows the input level in decibels, and the vertical ruler (y-axis) shows output level. The default diagonal line represents an unchanged signal, where input and output values have a one-to-one relationship. Click and drag to add or move points on either graph. To delete a point, drag it outside the graph.

Tip

To duplicate settings from one graph to the other, use the arrow buttons between the graphs.

- Reset: Restores a graph to the default undistorted curve.

- Curve Smoothing: Uses curved segments between control points, which can create distortion that sounds more natural than linear segments.

- Time Smoothing: Sets the response speed for distortion as input levels change. Measurements focus on low-frequency material, giving the distortion a softer and more musical character.

- dB Range: Adjusts the graph amplitude range and confines distortion to that range.

- Linear Scale: Switches the graph amplitude scales from logarithmic decibels to normalized values.

- Post-filter DC Offset: Corrects sample offset that distortion processing may introduce. These offsets can create audible pops and clicks during later audio edits.

### Doppler Shifter (process) effect

Special > Doppler Shifter (process) creates the pitch rise and fall heard when a sound source moves toward a listener and then passes by, such as a siren on a passing police car. As the car approaches, forward motion compresses each sound wave, so the listener hears a higher frequency. After the car passes, the waves stretch, producing a lower pitch.

Note

The Doppler Shifter graph differs from many Adobe Audition effect graphs because it is not directly editable. You adjust parameters instead, and the graph updates from those settings.

The Doppler Shifter (process) effect dialog box is used to build moving-sound effects with natural Doppler pitch changes.

Use the Doppler Shifter (process) effect dialog box for sound-motion simulations that include natural Doppler pitch shifts.

- Path Type: Selects the apparent path followed by the sound source. Each path type exposes a different group of controls.

  - Starting Distance Away sets the virtual starting point (in meters) for the effect.
  - Velocity sets the virtual movement speed (in meters per second) for the effect.
  - Coming From sets the virtual direction (in degrees) from which the effect seems to approach.
  - Passes In Front By sets the apparent distance (in meters) that the effect passes in front of the listener.
  - Passes On Right By sets the apparent distance (in meters) that the effect passes to the listener's right.

  - Radius sets the circular size (in meters) for the effect.
  - Velocity sets the virtual movement speed (in meters per second) for the effect.
  - Starting Angle sets the initial virtual angle (in degrees) for the effect.
  - Center In Front By sets the sound source distance (in meters) in front of the listener.
  - Center On Right By sets the sound source distance (in meters) to the listener's right.

- Adjust Volume Based on Distance or Direction: Changes the effect volume automatically from the specified distance or direction values.

- Quality: Offers six processing-quality levels. Lower settings finish faster, while higher settings usually produce better audio.

### Guitar Suite effect

Special > Guitar Suite runs guitar tracks through a chain of processors that refine and reshape the sound. Compressor reduces dynamic range, making the track tighter and more forceful. Filter, Distortion, and Box Modeler reproduce familiar guitar effects used for expressive performances.

Note

Guitar Suite can also be applied to vocals, drums, or other audio when you want textured effects.

The Guitar Suite effect dialog box provides amp and effect simulations for shaping guitar tone.

Use the Guitar Suite effect dialog box to shape guitar tone through simulated amplifiers and effects.

- Compressor: Narrows dynamic range so guitar amplitude stays more consistent and the track can sit more prominently in a mix.

  - Type: Chooses which frequencies are filtered. Use Lowpass to remove high frequencies, Highpass to remove low frequencies, or Bandpass to remove frequencies above and below a center frequency.
  - Frequency: Sets the cutoff frequency for Lowpass and Highpass filters, or the center frequency for Bandpass filtering.
  - Resonance: Feeds frequencies around the cutoff back into the filter, adding crispness at low settings and whistling harmonics at high settings.

- Distortion: Adds the sharper edge often associated with guitar solos. To alter the distortion sound, select an option from the Type menu.

- Amplifier: Models several amplifier and speaker pairings used by guitarists to produce distinctive tones.

- Mix: Sets the balance between the original audio and the processed signal.

### Mastering effect

Mastering is the end-to-end preparation of audio for a target medium, such as radio, video, CD, or the web. In Adobe Audition, Special > Mixing effect lets you create a finished mix quickly.

Before mixing, account for the playback medium's requirements. For web delivery, for example, listeners may use computer speakers that reproduce bass poorly. You can offset that limitation by increasing bass during the equalization stage of the mix.

Use the Mastering effect dialog box when preparing files for radio, video, CD, web, or similar destinations.

The Mastering effect dialog box helps tailor audio files to radio, video, CD, and web output.

- Equalizer: Changes the overall tone balance.

- Graph: Displays frequency on the horizontal ruler (x-axis) and amplitude on the vertical ruler (y-axis); the curve shows how amplitude changes at specific frequencies. The graph presents frequencies logarithmically from low to high, with octave spacing.

Note

Drag graph control points to adjust the settings below visually.

- Low Shelf and High Shelf Enable: Turns on shelving filters at the low and high ends of the frequency spectrum.

- Peaking Enable: Turns on a peaking filter at the center of the frequency spectrum.

- Hz: Shows the center frequency for each frequency band.

- dB: Shows the level for each frequency band.

- Q: Sets how broad the selected frequency band is. Low Q values (up to 3) change a wider area and work well for broad audio enhancement. High Q values (6-12) target a very narrow band and suit removal of a specific problem frequency, such as 60-Hz hum.

- Reverb: Adds ambience. Move the Amount slider to control the balance between original and reverberated sound.

- Exciter: Emphasizes high-frequency harmonics for added crispness and clarity. Mode choices include Retro for mild distortion, Tape for a bright sound, and Tube for fast dynamic response. Move the Amount slider to set processing strength.

- Widener: Changes the stereo image and is unavailable for mono audio. Move the Width slider left to make the image narrower and emphasize the center. Move it right to widen the image and make individual sounds feel more spatially separated.

- Loudness Maximizer: Uses limiting to reduce dynamic range and raise perceived level. 0% keeps the original levels, while 100% applies the strongest limiting.

- Output Gain: Sets the level after processing. For instance, when EQ changes reduce overall level, increase Output Gain to compensate.

### Loudness Meter effect

Audition's Loudness Meter measures loudness with industry-standard LUFS and True Peak values, helping content satisfy broadcast and streaming loudness targets without changing the audio.

The Levels tab gives a single-view loudness summary and shows loudness variation over time.

The Levels tab displays a one-view loudness overview with changes across time.

### Settings

- Target Loudness: Sets the target loudness value.

- Low Level Below: Sets where the momentary loudness ring shifts between green and blue. This marks levels that may fall below the noise floor.

- Minimum True Peak: Sets the maximum True Peak level. The peak indicator turns on when this value is exceeded.

  - EBU +9: Displays audio levels in a tight range around the target loudness.
  - EBU +18: Displays audio levels in a broader range around the target loudness.

  - LUFS: EBU loudness unit.
  - LKFS: ITU loudness unit.
  - LU/LUFS: Shows Loudness Units (LU) for relative changes and LUFS for absolute loudness values.
  - LU/LKFS: Shows Loudness Units (LU) for relative changes and LKFS for absolute loudness values.

Note

Under EBU and ITU methods, LU expresses loudness relative to the target.

### Loudness Radar Meter effect

The Loudness Radar Meter effect plug-in reports peak, average, and range levels. It combines Loudness History, Momentary Loudness, True-peak Level, and flexible descriptors into a single loudness overview. A Radar sweep view is also available for a strong view of loudness changes over time. Select Effects > Special > Loudness Radar Meter.

Use the TC Electronic ITU Loudness Radar panel in Adobe Audition to monitor and correct broadcast audio loudness.

- Target Loudness: Sets the target loudness value.

- Radar Speed: Sets the duration of each radar sweep.

- Radar Resolution: Sets the loudness difference between neighboring concentric circles in the radar view.

- Momentary Range: Sets the momentary range. EBU +9 is the narrow loudness range used for normal broadcast, while EBU +18 is the wide range used for drama and music.

- Low Level Below: Sets where the momentary loudness ring shifts between green and blue. This marks levels that may fall below the noise floor.

  - LKFS: Loudness unit defined by the International Telecommunication Union (ITU).
  - LUFS: Loudness unit defined by the European Broadcasting Union (EBU).
  - LU: Unit for loudness relative to the target under EBU and ITU methods.

  - BS.1770-3: This ITU standard covers Broadcast loudness and True-peak Level measurement. It uses Leq(K) to measure loudness.
  - Leq(K): Loudness is derived from a Leq measurement using K-weighting, a frequency weighting from the Communications Research Center in Ottawa, Canada, a federal research institute.

- Peak Indicator: Sets the maximum True-Peak level. The peak indicator turns on when this value is exceeded.

### Vocal Enhancer effect

Special > Vocal Enhancer improves voice-over recordings quickly. Its modes automatically reduce sibilance, plosives, and microphone-handling noise such as low rumbles. They also use microphone modeling and compression to give vocals a radio-style character. Music mode adjusts soundtracks so they sit better behind a voice-over.

The Vocal Enhancer effect dialog box is used for quick improvements to voice-over recording quality.

Use the Vocal Enhancer effect dialog box to quickly improve voice-over recordings.

- Male: Tunes processing for a man's voice.
- Female: Targets a female voice.
- Music: Uses compression and equalization on music or background audio.

## Stereo imagery effects

### Learn to shape and enhance stereo sound in Adobe Audition with Stereo Imagery effects.

Note

Certain effects can shift the perceived position, or stereo imagery, of sounds from the speakers.

### Center Channel Extractor effect

Stereo Imagery > Center Channel Extractor preserves or removes frequencies shared by the left and right channels, meaning sounds panned to the center. Voice, bass, and lead instruments are often recorded that way. You can therefore raise the level of vocals, bass, or kick drum, or remove one of them for a karaoke-style mix.

Use Center Channel Extractor to isolate, boost, or remove center-panned audio within a stereo mix.

The Center Channel Extractor effect can isolate, enhance, or remove audio panned to the center of a stereo mix.

Extraction

Restricts extraction to audio matching selected characteristics.

- Extract: Choose Center, Left, Right, or Surround for the channel to target, or choose Custom and enter the exact phase degree, pan percentage, and delay time for material targeted for extraction or removal. Surround targets material with perfect opposite phase between the left and right channels.

- Frequency Range: Sets the frequency range targeted for extraction or removal. Preset ranges include Low Voice, High Voice, Bass, and Full Spectrum. Choose Custom to define your own frequency range.

Discrimination

Provides controls that help Audition identify the center channel.

- Crossover Bleed: Drag left to allow more bleed and make the result sound less artificial. Drag right to isolate the center-channel material more strongly from the rest of the mix.

- Phase Discrimination: Higher values generally work better when extracting the center channel, while lower values tend to work better when removing it. Lower settings permit more bleed and may not cleanly separate vocals from a mix, but they can capture more of all center material. A range from 2 to 7 is usually effective.

- Amplitude Discrimination and Amplitude Bandwidth: Audition sums the left and right channels and builds a perfectly out-of-phase third channel to remove similar frequencies. When amplitudes at a frequency are similar, in-phase content common to both channels is included too. Lower Amplitude Discrimination and Amplitude Bandwidth values remove more from the mix but can also remove vocals. Higher values make extraction depend more on phase and less on channel amplitude. Useful ranges are 0.5 to 10 for Amplitude Discrimination and 1 to 20 for Amplitude Bandwidth.

- Spectral Decay Rate: Use 0% for quicker processing. Use 80% to 98% to smooth background distortions.

Center and Side Channel Levels

Sets how much selected signal is extracted or removed. Raise the sliders to include more material.

Advanced

Select the triangle to open these settings:

- FFT Size: Sets the Fast Fourier Transform size; lower values process faster, while higher values improve quality. Settings between 4096 and 8192 usually work best.

- Overlays: Sets how many FFT windows overlap. Higher values can make the result smoother or create a chorus-like effect, though processing takes longer. Lower values can create bubbly-sounding background noise. Values of 3 to 9 work well.

- Window Width: Sets how much of each FFT window is used. Values from 30% through 100% work well.

### Graphic Phase Shifter effect

Stereo Imagery > Graphic Phase Shifter lets you change waveform phase by placing control points on a graph.

Note

Right-click a point to open the Edit Point dialog box for precise numeric editing.

Use Graphic Phase Shifter to change waveform phase by adding points to a graph.

The Graphic Phase Shifter effect adjusts waveform phase through graph control points.

Phase shift graph

On the graph, the horizontal ruler (x-axis) represents frequency, and the vertical ruler (y-axis) shows phase-shift amount in degrees, with zero meaning no phase shift. To simulate stereo, build a zigzag pattern on one channel that becomes stronger at higher frequencies.

Frequency Scale

Sets the horizontal ruler (x-axis) values to either linear or logarithmic scaling.

- Select Logarithmic for finer work in lower frequencies. Logarithmic scaling better matches how human hearing emphasizes frequency.
- Select Linear for finer work in higher frequencies.

Range

Sets the vertical ruler (y-axis) values to a 360° or 180° scale.

Channel

Chooses which channel or channels receive the phase shift.

Note

For best results, process only one channel. Applying the same phase shift to both stereo channels leaves the file sounding unchanged.

FFT Size

Sets the Fast Fourier Transform size. Larger sizes improve precision but require more processing time.

### Stereo Expander effect

The Stereo Imagery effect places and broadens the stereo image. Because Stereo Expander is VST-based, it can sit in an effects chain in the Mastering Rack and Effects Rack. Automation lanes in Multitrack View can vary the effect over time.

Select Effects > Stereo Imagery > Stereo Expander, and set the following options:

Use Stereo Expander to widen or narrow the stereo image of a mix.

The Stereo Expander effect widens or narrows a mix's stereo image.

Center Channel Pan

Places the center of the stereo image from hard left (-100%) through hard right (100%).

Stereo Expand

Expands from Narrow or Normal (0) up to Wide (300). Narrow or Normal leaves the stereo image at its original, unprocessed width.

### More like this

- Applying effects in the Waveform Editor
- Applying effects in the Multitrack Editor
- Use effect presets
