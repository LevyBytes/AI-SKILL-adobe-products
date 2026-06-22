# Audio Effects Library (part 1)

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

### Improve Adobe Premiere video projects with audio tools for cleaner sound, creative treatment, and professional-grade results.

To find audio effects, open the project and select the timeline audio clip you plan to change. Then choose Window > Effects to open the Effects panel, and expand the Audio Effects folder to review the available effects.

## Types of audio effects

Premiere groups audio effects into these categories:

- Amplitude and Compression: changes volume levels and dynamic range.
- Delay and Echo: adds space and depth to audio.
- Filter and EQ: adjusts the frequency content of sound.
- Modulation: adds motion and texture to audio.
- Noise Reduction/Restoration: reduces unwanted noise and artifacts.
- Reverb: recreates different acoustic environments.
- Special: provides distinctive effects for creative sound design.
- Stereo Imagery: widens or otherwise improves the stereo field.

For efficient audio work, Premiere's Audio Effects panel arranges effects under categories such as Amplitude and Compression, Delay and Echo, Reverb, and others.

For efficient audio work, Premiere's Audio Effects panel arranges effects under categories such as Amplitude and Compression, Delay and Echo, Reverb, and others.

### Amplitude and Compression

Amplify raises or lowers an audio signal. Because it runs in real time, the effect can be used with other effects in the Effects Rack.

- Gain Sliders: raise or lower separate audio channels.
- Link Sliders: moves the channel sliders as a group.

### Channel Mixer

Channel Mixer changes how stereo or surround channels are balanced. It can reposition perceived sound, fix uneven levels, or help with phase problems.

- Channel tabs: chooses the output channel.
- Input channel sliders: set how much of the current channels feed the output channel.
- Invert: flips a channel's phase. Flipping every channel is not perceived as a sound change, but flipping only one channel can alter the sound significantly.

### Channel Volume

Channel Volume provides separate volume control for each channel in a stereo or 5.1 clip or track. Levels for individual channels are measured in decibels.

### DeEsser

DeEsser reduces sibilance and other high-frequency "SSS"-style sounds. Narrators or vocalists commonly create those sounds when pronouncing "s" and "t." The effect works with 5.1, stereo, or mono clips.

- Mode: choose Broadband to compress all frequencies evenly, or Multiband to compress only the sibilance range. Multiband usually suits most audio, though it can add a little processing time.
- Threshold: sets the amplitude level where compression starts.
- Center Frequency: sets the frequency where sibilance is strongest. Check it by adjusting the value during playback.
- Bandwidth: sets the frequency span that activates the compressor.
- Output Sibilance Only: lets you monitor the sibilance being detected. Play the audio and refine the settings above.
- Gain Reduction: displays how much compression is applied to the processed frequencies.

### Dynamics

Dynamics Effects contains four sections, each with independent controls. LED and gain reduction meters provide a quick view of signal processing.

Dynamic Effects includes these parameters:

- Auto Gate: removes noise under a selected amplitude threshold. The LED meter shows green when audio passes through, red when no audio passes, and yellow during attack, release, and hold intervals.
- Compressor: lowers the dynamic range by reducing audio above a chosen threshold. Ratio controls the dynamic-range change, while Attack and Release shape timing behavior. Gain raises the audio level after compression, and the Gain Reduction meter reports the amount of level reduction.
- Expander: expands dynamic range by reducing audio below the specified threshold. Ratio controls the amount of dynamic-range change. The Gain Reduction meter shows how much the audio level is reduced.
- Limiter: reduces audio that rises past a selected threshold. The meter LED lights when limiting occurs.

### Dynamics Processing

Dynamics Processing can function as a compressor, limiter, or expander. In compressor or limiter use, it narrows dynamic range to create steadier volume. In expander use, it widens dynamic range by lowering low-level signals. With very strong expander settings, it can act as a noise gate that removes noise below a chosen amplitude threshold.

### Dynamics

- Graph: shows input level on the horizontal ruler (x-axis) and the resulting output level on the vertical ruler (y-axis). The default straight line from lower left to upper right represents an unchanged signal, where each input level maps to the same output level. Changing the graph changes the input/output relationship and therefore the dynamic range. For example, if a desired sound sits near -20 dB, that input level can be boosted while the rest remains unchanged. An inverse line from upper left to lower right can also be drawn to raise quiet sounds and reduce loud ones.
- Add point: adds a graph control point from the input and output level numbers you enter. This is more precise than adding points by clicking the graph.
- Delete point: removes the currently selected graph point.
- Invert: reverses the graph so compression becomes expansion, or expansion becomes compression.
- Reset: restores the default graph state.
- Spline Curves: changes control-point transitions into smoother curves instead of sharper straight-line shifts.
- Make-up Gain: raises the processed signal level.

Use Dynamics Processing to manage an audio clip's dynamic range by changing the compression curve and threshold levels.

Use Dynamics Processing to manage an audio clip's dynamic range by changing the compression curve and threshold levels.

### Settings

- General: supplies overall settings.
- Look Ahead Time: handles transient spikes that can occur when loud signals begin and go beyond the compressor's Attack Time settings. Longer Look Ahead Time makes compression begin before the audio becomes loud, preventing amplitude from passing a certain level. Shorter Look Ahead Time can preserve the punch of percussive sounds such as drum hits.
- Noise Gating: mutes signals completely when they are expanded below a 50-to-1 ratio.
- Level Detector: reads the original input amplitude.
- Input Gain: adds gain before the signal reaches the Level Detector.
- Attack Time: sets how many milliseconds pass before the input signal registers an amplitude change. For example, when audio suddenly falls 30 dB, the chosen attack time elapses before the input records that change. This helps avoid false amplitude readings from brief fluctuations.
- Release Time: sets how long, in milliseconds, the current amplitude level is held before another amplitude change can register.
- Peak mode: calculates levels from amplitude peaks. This mode is somewhat harder to use than RMS because peaks do not map precisely to the Dynamics graph, but it can help tame audio with loud transient peaks.
- RMS mode: calculates levels with the root-mean-square formula, an averaging method closer to human volume perception. RMS amplitudes appear accurately in the Dynamics graph; for example, a limiter shown as a flat horizontal line at -10 dB represents an average RMS amplitude of -10 dB.
- Gain Processor: raises or lowers the signal based on detected amplitude.
- Output Gain: adds gain to the output after all dynamics processing.
- Attack Time: sets how many milliseconds the output signal takes to reach the chosen level. For example, when audio suddenly falls 30 dB, the selected attack time passes before the output level changes.
- Release Time: sets how long, in milliseconds, the current output level is held.
- Link Channels: applies equal processing to every channel, keeping stereo or surround balance intact. For example, compression on a left-channel drum hit reduces the right-channel level by the same amount.
- Band Limiting: confines dynamics processing to a selected frequency range.
- Low Cutoff: marks the lowest frequency affected by dynamics processing.
- High Cutoff: marks the highest frequency affected by dynamics processing.

### Hard Limiter

- Hard Limiter: strongly reduces audio that exceeds a specified threshold. Limiting is often paired with input boost to raise overall volume while avoiding distortion.
- Maximum Amplitude: sets the highest permitted sample amplitude.
- Input Boost: preamplifies audio before limiting, making the selection louder without clipping. More of this level produces more compression. Extreme values can create the loud, high-impact sound common in contemporary pop music.
- Look Ahead Time: sets the time, in milliseconds, that audio is attenuated before the loudest peak arrives.
- Release Time: sets how long, in milliseconds, attenuation takes to rebound 12 dB. Around 100, the default, generally works well and preserves low bass frequencies.
- Link Channels: ties all channel loudness together while preserving stereo or surround balance.

Use Hard Limiter to cap an audio clip's maximum volume and avoid distortion by changing amplitude, input boost, and release time.

Use Hard Limiter to cap an audio clip's maximum volume and avoid distortion by changing amplitude, input boost, and release time.

### Multiband Compressor

Multiband Compressor lets you compress four separate frequency bands independently. Since each band often carries different dynamic content, multiband compression is useful for mastering audio.

- Crossover: sets the crossover frequencies that define each band's width. Enter Low, Midrange, and High frequencies directly, or drag the crossover markers above the graph.
- Solo Buttons: lets you monitor chosen frequency bands. Enable one Solo button for isolation, or enable several to hear multiple bands together.
- Bypass Buttons: bypasses individual bands so they pass through without processing.
- Thresh: sets the input level where compression begins. Values can range from -60 dB to 0 dB. The best value depends on the audio and musical style. To compress only the largest peaks while keeping more dynamic range, try thresholds about 5 dB under the peak input level. For heavy compression and much less dynamic range, try settings about 15 dB under the peak input level.
- Gain: raises or lowers amplitude after compression. Values can range from -18 dB to +18 dB, with 0 as unity gain.
- Ratio: sets compression from 1-to-1 through 30-to-1. For example, 3.0 outputs 1 dB for each 3-dB increase above the compression threshold. Common values are 2.0 to 5.0; higher values create the compressed character often heard in pop music.
- Attack: sets how fast compression engages after audio passes the threshold. Values can range from 0 milliseconds to 500 milliseconds. The 10 milliseconds default fits many audio sources. Faster values suit fast transients, though they can sound unnatural on less percussive material.
- Release: sets how fast compression stops after audio falls below the threshold. Values can range from 0 milliseconds to 5000 milliseconds. The 100 milliseconds default fits many audio sources. Use faster values with fast transients and slower values with less percussive audio.
- Output Gain: raises or lowers the overall output level after compression. Values can range from -18 dB to +18 dB, with 0 as unity gain. Double-click the meters to reset peak and clip indicators.
- Gain: raises or lowers amplitude after compression. Values can range from -18 dB to +18 dB, with 0 as unity gain.
- Limiter: adds limiting after Output Gain at the end of the signal path to optimize overall levels. Use Threshold, Attack, and Release values that are gentler than comparable band-specific settings, then set Margin for the absolute ceiling relative to 0 dBFS.

### Options

- Spectrum On Input: shows the input signal's frequency spectrum rather than the output signal in the multiband graph. Toggle it on and off to quickly compare how much compression each band receives.
- Brickwall Limiter: applies instant hard limiting at the current Margin setting. Deselect it to use slower soft limiting, which sounds less compressed but can go beyond the Margin setting. Note: with brickwall limiting, Attack can be at most 5 ms.
- Link Band Controls: adjusts compression settings globally for every band while keeping relative band differences.

Multiband Compressor applies compression to selected frequency ranges, letting you manage dynamics separately across low, mid, and high bands.

Multiband Compressor applies compression to selected frequency ranges, letting you manage dynamics separately across low, mid, and high bands.

### Single-band Compressor

Single-band Compressor reduces dynamic range to create steadier levels and greater perceived loudness. It works well on voiceovers because it can help speech stand out over music beds and background audio.

Note

Modern pop recordings provide examples of heavy compression. Most jazz recordings use lighter compression, while typical classical recordings often have no compression.

- Threshold: sets the input level where compression begins. The best value depends on the source audio and style. To reduce only extreme peaks while preserving more dynamic range, try thresholds about 5 dB below the peak input level. To compress heavily and greatly narrow dynamic range, try values about 15 dB below the peak input level.
- Ratio: sets compression from 1-to-1 through 30-to-1. For example, a value of three outputs 1 dB for each 3-dB increase above the threshold. Common values are 2 to 5; higher values create the compressed sound often associated with pop music.
- Attack: sets how quickly compression begins once audio passes the Threshold setting. The default, 10 milliseconds, works well for many source types. Use faster values only for quick transients, such as percussion.
- Release: sets how quickly compression ends once audio falls below the Threshold setting. The default, 100 milliseconds, works well for many audio sources. Use faster values for fast transients and slower values for less percussive audio.
- Output Gain: raises or lowers amplitude after compression. Values can range from -30 dB to +30 dB, with 0 as unity gain.

### Tube-modeled Compressor

Tube-modeled Compressor simulates the warm tone of vintage hardware compressors. Use it to add subtle distortion that colors audio pleasantly.

- Threshold: sets the input level where compression begins. Values can range from -60 dB to 0 dB. The best setting depends on the source and musical style. To reduce only extreme peaks while retaining more dynamic range, try thresholds about 5 dB below the peak input level. To compress strongly and greatly reduce dynamic range, try values about 15 dB below the peak input level.
- Output Gain: raises or lowers the final output level after compression. Values can range from -18 dB to +18 dB, with 0 as unity gain. Double-click the meters to reset peak and clip indicators.
- Ratio: sets compression from 1-to-1 through 30-to-1. For example, at 3.0, each 3-dB rise above the compression threshold produces 1 dB of output. Common values are 2.0 to 5.0; higher values create the compressed character often heard in pop music.
- Attack: sets how quickly compression is applied when audio exceeds the threshold. Allowed values run from 0 milliseconds through 500 milliseconds. The 10 milliseconds default works well for many audio sources. Faster values suit fast transients, but can sound unnatural on less percussive audio.
- Release: sets how quickly compression ends after audio falls below the threshold. Allowed values run from 0 milliseconds through 5000 milliseconds. The 100 milliseconds default works well for many audio sources. Try faster values for fast transients and slower values for less percussive audio.

## Delay and Echo

### Analog Delay

Analog Delay simulates the warm sound of vintage hardware delay units. Its options add characteristic distortion and control stereo spread. For separate echoes, use delay times of 35 milliseconds or longer; for subtler effects, use shorter times.

- Mode: selects the hardware-emulation type and therefore the equalization and distortion character. Tape and Tube match vintage delay-unit character, while Analog matches later electronic delay lines.
- Dry Out: sets the level of the original unprocessed audio.
- Wet Out: sets the level of delayed processed audio.
- Delay: sets the delay time in milliseconds.
- Feedback: creates repeat echoes by sending delayed audio back through the delay line. At 20%, delayed audio returns at one-fifth of its original volume and fades gently. At 200%, delayed audio returns at twice its original volume and intensifies quickly.
- Trash: adds distortion and boosts low frequencies for warmth.
- Spread: sets the stereo width of the delayed signal.

Analog Delay can add warmth and echo, with adjustable delay time, feedback, and spread for creative sound design.

Analog Delay can add warmth and echo, with adjustable delay time, feedback, and spread for creative sound design.

### Delay

Delay creates single echoes and other related effects. Delay values of 35 milliseconds or longer produce distinct echoes, while values from 15 to 34 milliseconds can produce a basic chorus or flanging effect.

### Multitap Delay

Multitap Delay adds as many as four echoes of the clip's original audio. The effect works with 5.1, stereo, or mono clips.

## Filter and EQ

### Bandpass

Bandpass removes frequencies outside a specified frequency band. The effect works with 5.1, stereo, or mono clips.

### Bass

Bass raises or lowers low frequencies, meaning 200 Hz and below. Boost sets the number of decibels used to increase those lower frequencies. The effect works with 5.1, stereo, or mono clips.

### FFT Filter

FFT Filter lets you draw curves or notches for rejecting or boosting chosen frequencies. FFT means Fast Fourier Transform, which rapidly evaluates amplitude and frequency content.

This effect can create:

- Broad high or low-pass filters (to keep high or low frequencies)
- Narrow band-pass filters (to imitate a telephone-call sound)
- Notch filters (to remove narrow, exact frequency ranges)

  - For more detailed low-frequency control, select Logarithmic. A logarithmic scale more closely matches human hearing.
  - For detailed high-frequency edits with evenly spaced frequency intervals, select Linear.

- Spline Curves: creates smoother curved transitions between control points instead of sharper linear transitions.
- Reset: returns the graph to its default state and removes filtering.
  - FFT Size: sets the Fast Fourier Transform size, which controls the tradeoff between frequency accuracy and time accuracy. Choose higher values for steep, precise frequency filters. Choose lower values to reduce transient artifacts in percussive audio. Values from 1024 through 8192 work well for most material.
  - Window: sets the Fast Fourier Transform shape, with each choice producing a different frequency response curve. The functions are ordered from narrowest to widest. Narrow functions include fewer surrounding, or sidelobe, frequencies but represent center frequencies less precisely. Wider functions include more surrounding frequencies but represent center frequencies more precisely. Hamming and Blackman provide strong overall results.

### Graphic Equalizer

Graphic Equalizer boosts or cuts specific frequency bands and visually shows the resulting EQ curve. Unlike Parametric Equalizer, Graphic Equalizer uses preset bands for fast, straightforward equalization.

Frequency bands can be spaced at these intervals:

- One octave spacing (10 bands)
- One-half octave spacing (20 bands)
- One-third octave spacing (30 bands)

Graphic Equalizers with fewer bands adjust faster; versions with more bands offer more precision.

- Gain sliders: set the exact boost or attenuation, measured in decibels, for the selected band.
- Range: sets the slider-control span. Enter any value from 1.5 dB to 120 dB. For comparison, standard hardware equalizers usually cover about 12 dB to 30 dB.
- Accuracy: sets the equalization accuracy level. Higher accuracy improves lower-range frequency response but requires more processing time. If only higher frequencies are being equalized, lower accuracy can be used.
- Master Gain: compensates when the overall volume is too quiet or too loud after EQ adjustments. The default 0 dB means no master gain adjustment.

### Highpass

Highpass removes frequencies below the chosen Cutoff frequency. Highpass works with 5.1, stereo, or mono clips.

### Lowpass

Lowpass removes frequencies above the chosen Cutoff frequency. Lowpass works with 5.1, stereo, or mono clips.

### Notch Filter

Notch Filter removes up to six user-defined frequency bands. Use it to remove narrow ranges, such as a 60-Hz hum, while leaving adjacent frequencies untouched.

Note

To reduce shrill "ess" sounds, use the Sibilance Softener preset. DTMF presets can remove standard analog telephone-system tones.
