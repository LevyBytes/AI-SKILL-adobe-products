# Time Pitch Manipulation Effects, Generate Tones Effect

> Adobe Audition reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Time and pitch manipulation effects; Generate tones and noise.

## Time and pitch manipulation effects

### Learn how to change tempo, fix pitch, and creatively reshape audio in Adobe Audition.

### Automatic Pitch Correction effect

Automatic Pitch Correction is available in both Waveform and Multitrack editors. In Multitrack, keyframes and hardware control surfaces can automate its settings over time.

Choose Effects > Time and Pitch > Automatic Pitch Correction, then configure these options:

Use Automatic Pitch Correction to quickly retune out-of-tune vocals or instruments to a selected key.

The Automatic Pitch Correction effect quickly corrects vocals or instruments that are out of tune, matching them to a chosen key.

Scale

Sets the scale type that fits the material best: Major, Minor, or Chromatic.

- Major or Minor moves notes to the chosen musical key.
- Chromatic moves notes to the nearest pitch without using a key.

Key

Sets the desired key for corrected audio. This control appears only when Scale is Major or Minor, because Chromatic includes all 12 tones and is not tied to a key.

Note

Together, scale and key define the key signature.

Attack

Sets how quickly Adobe Audition moves pitch toward the scale tone. Fast settings usually suit short notes, such as rapid staccato passages. Extremely fast attack can produce a robotic character. Slower settings give more natural correction for sustained notes, such as vocal lines with held notes and vibrato. Since musical material can vary during a performance, the best results often come from correcting short phrases separately.

Sensitivity

Sets the threshold outside which notes are not corrected. Sensitivity is measured in cents, with 100 cents in each semitone. For example, a Sensitivity value of 50 cents requires a note to fall within 50 cents, or half a semitone, of the target scale tone before automatic correction occurs.

Reference Channel

Choose the source channel where pitch changes are clearest. Audition analyzes only that channel, then applies pitch correction equally to every channel.

FFT Size

Sets the Fast Fourier Transform size for each data piece processed by the effect. Smaller values generally work better for correcting higher frequencies. For voices, 2048 or 4096 usually sounds most natural. For short staccato notes or percussive audio, try 1024.

Calibration

Sets the tuning standard for the source audio. In Western music, standard tuning is A4 at 440 Hz. If the source used a different reference, set A4 anywhere from 410 to 470 Hz.

Correction meter

During preview, shows the correction amount for flat and sharp tones.

### Manual Pitch Correction effect

Manual Pitch Correction provides visual pitch editing through the Spectral Pitch Display. The Spectral Pitch Display draws the fundamental pitch as a bright blue line, uses yellow-to-red hues for overtones, and shows corrected pitch as a bright green line.

Note

Pitch can be monitored visually at any time without applying Manual Pitch Correction. Select the Spectral Pitch Display icon in the options bar. Pitch Display settings in the Spectral Displays preferences control resolution, decibel range, and gridlines.

Choose Effects > Time and Pitch > Manual Pitch Correction.

In Manual Pitch Correction, configure these options:

Use Manual Pitch Correction for precise individual-note pitch adjustments with visual control over each change.

The Manual Pitch Correction effect lets you correct pitch precisely while controlling each pitch change visually.

Reference Channel

Choose the source channel where pitch changes are clearest. Audition analyzes only that channel, then applies pitch correction equally to every channel.

Spline Curves

Creates smoother transitions as envelope keyframes vary pitch correction across a clip.

Pitch Curve Resolution

Sets the Fast Fourier Transform size for each data piece processed by the effect. Smaller values generally work better for correcting higher frequencies. For voices, 2048 or 4096 usually sounds most natural, while 1024 can produce robotic-style results.

Inside the Editor panel, use one of these controls:

- For uniform pitch changes, drag the Adjust Pitch knob in the heads-up display.
- For pitch changes over time, add keyframes to the yellow envelope line centered in the waveform display.

Note

To zoom into particular pitch ranges, right-click and drag in the vertical ruler on the right side of the Spectral Pitch Display. To reset zoom or customize the displayed scale, right-click the ruler and choose options from the pop-up menu.

### Pitch Bender effect

Use Pitch Bender to change tempo over time, which varies pitch. Its keyframe edit envelope spans the full waveform, working much like the Fade effect and the Gain Envelope effect.

Choose Effects > Time and Pitch > Pitch Bender, then configure these options:

Use Pitch Bender to create smooth pitch bends or sweeps over time.

The Pitch Bender effect creates gradual pitch sweeps or bends through time.

Pitch

In the Editor panel, click the blue envelope line to add keyframes, then drag those keyframes up or down to change amplitude.

Note

Select Spline Curves to make curved, smoother keyframe transitions instead of linear ones.

Quality

Sets processing quality. Higher quality levels give the best sound but need more processing time. Lower quality levels finish sooner but produce more unwanted harmonic distortion. Harmonic distortion is usually hard to notice from Very Good upward. Aliasing can still happen when pitch is shifted up, but higher quality settings substantially reduce distortion when pitch is shifted down.

Range

Sets the vertical ruler (y-axis) scale to semitones (there are 12 semitones to an octave) or beats per minute. In semitone mode, pitch changes logarithmically, and you set how many semitones to shift upward or downward. In beats-per-minute mode, pitch changes linearly, and both a range and base tempo are required. You can enter the exact tempo of a selection to shift it to different rates, but doing so is optional.

### Pitch Shifter effect

Pitch Shifter changes musical pitch. It processes in real time and can sit alongside other effects in the mastering rack or effects rack. In Multitrack View, automation lanes can vary pitch over time.

Choose Effects > Time and Pitch > Pitch Shifter effect, then configure these options:

Use Pitch Shifter to raise or lower audio pitch without changing duration.

The Pitch Shifter effect raises or lowers audio pitch while keeping duration unchanged.

Pitch Transpose

Contains controls for changing pitch:

- Semi-Tones: Shifts pitch in semi-tone increments, equivalent to musical half-notes. For example, C# is one semi-tone higher than C. A value of 0 keeps the original pitch; +12 semi-tones raises it one octave; -12 semi-tones lowers it one octave.
- Cents: Changes pitch by fractions of semi-tones. Values can range from -100, or one semi-tone lower, to +100, or one semi-tone higher.
- Ratio: Sets the relationship between shifted frequency and original frequency. Values range from 0.5, one octave lower, to 2.0, one octave higher.

Precision

Sets sound quality; High takes the most time to process. Use Low for 8-bit or low-quality audio, and High for professionally recorded material.

Note

To decide on a Precision setting quickly, process a small selected range with each setting and compare quality against processing time.

Pitch Settings

Control audio processing behavior:

- Splicing Frequency: Sets the size of each small audio-data chunk used by Pitch Shifter processing. Higher values place stretched audio more precisely over time, but artifacts become easier to hear as values rise. With higher Precision settings, lower Splicing Frequency can introduce stutter or echo. If it is too high, sound can become tinny and voices can take on a tunnel-like character.
- Overlapping: Sets how much each audio-data chunk overlaps the neighboring chunks before and after it. If stretching creates a chorus effect, reduce Overlapping. If the result becomes choppy, adjust the percentage to balance choppiness against chorusing. Values range from 0 to 50%.
- Use Appropriate Default Settings: Applies suitable default values for Splicing Frequency and Overlapping.

### Stretch and Pitch effect (Waveform Editor only)

The Time and Pitch > Stretch and Pitch effect can alter pitch, tempo, or both for an audio signal. You can, for instance, transpose a song into a higher key while retaining its tempo, or slow spoken audio while leaving pitch unchanged.

Note

This effect runs as an offline process. While its dialog is active, waveform edits, selection changes, and current-time-indicator movement are unavailable.

Use Stretch and Pitch when an audio clip needs separate control over length and pitch.

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

## Generate tones and noise

### Generate effects can create custom tones, colored noise, and sweeps for sound-design work and audio testing.

### Generate Noise

The Noise command creates random noise in multiple colors. Color traditionally describes the spectral makeup of noise, and each color has distinct behavior. Noise generation helps build calming sounds, including waterfall-like material that pairs well with the Binaural Auto-Panner function in Adobe Audition, and it can also produce test signals for checking the frequency response of a speaker, microphone, or another audio-system component.

Set the cursor at the insertion point for the noise. To replace existing waveform material instead, select the desired range of audio data.

Select Effects > Generate > Noise.

Set these options as needed:

Use Generate Noise effect settings to choose the noise color, style, and related values.

Use Generate Noise effect settings to choose the noise color, style, and related values.

Color

Sets the noise color:

- Brown noise: has a spectral frequency of 1/f2. In plain terms, this means the noise contains much more low-frequency energy, giving it a thunder-like or waterfall-like sound. The name Brown noise comes from Brownian motion: each next waveform sample equals the previous sample plus a small random amount. When plotted, the waveform resembles jagged peaks.
- Pink noise: has a spectral frequency of 1/f and appears often in nature. Among these noise types, it sounds the most natural. With equalization, pink noise can produce believable rainfall, waterfalls, wind, rushing rivers, and other natural sounds. Pink noise sits exactly between brown and white noise, which is why some people formerly called it tan noise. It is neither fully random nor predictable; visually, it has a fractal-like character. When magnified, the pattern resembles the zoomed-out version, but at lower amplitude.
- White noise: has a spectral frequency of 1, so all frequencies are present in equal proportions. Because human hearing is more sensitive to high frequencies, white noise has a very hissy sound. Adobe Audition creates white noise by selecting random values for each sample.

Style

Sets the noise style:

- Spatial Stereo: builds noise from three separate noise sources and spatially encodes them so one seems to come from the left, one from the center, and one from the right. Over stereo headphones, the result is perceived as sound arriving from around the listener. To set how far the left and right noise sources sit from the center, enter a delay value in microseconds. About 900 to 1000 microseconds is the largest delay that can be perceived. A delay of zero matches monaural noise, with identical left and right channels.
- Independent Channels: builds noise from two separate sources, one for each channel. The left channel's noise is entirely independent from the right channel's noise.
- Mono: builds noise from one source, with left and right channels both assigned equally to that source.
- Inverse: builds noise from one source, much like the Mono option. However, the left channel's noise is the exact inverse of the right channel's noise. Over stereo headphones, the result is perceived as coming from inside the listener's head instead of from an outside source.

Intensity

Sets noise intensity on a scale from 2 to 40. Higher intensities make the noise more erratic, harsher, and louder.

DC Offset

Applies a constant DC (Direct Current) amplitude to the tone, shifting the waveform upward or downward by the specified percentage to center it differently.

Duration

Sets how many seconds of noise Adobe Audition generates.

Select OK.

### Generate Speech

Select Effects > Generate > Speech when you need to type or paste text and create a realistic voice-over or narration track. The effect relies on the speech libraries installed with the operating system, making it useful for synthesized voices in videos, games, and audio productions. Learn more about Generate Speech.

### Generate Tones

Select Effects > Generate > Tones to build a simple waveform from amplitude- and frequency-related settings. Generated tones provide useful source material for sound effects.

Use Generate Tones settings to build simple waveforms by changing amplitude and frequency controls.

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
