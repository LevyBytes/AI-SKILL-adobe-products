# Audio Effects Library (part 2)

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Filter and EQ

- Frequency: sets the center frequency for each notch.
- Gain: sets the amplitude for each notch.
- Enable: turns on the button so audio passes without processing.
- Notch Width: sets the frequency range for all notches. The three choices run from Narrow to Super Narrow. Narrow uses a second-order filter and removes some adjacent frequencies. Super Narrow uses a specific sixth-order filter.
- Ultra Quiet: nearly removes noise and artifacts but uses more processing. You hear the difference only on high-end headphones and monitoring systems.
- Fix Gain to: sets whether notches use equal gain levels or individual gain levels.

### Parametric Equalizer

Parametric Equalizer gives detailed control over tonal equalization, including frequency values, Q width, and gain amount.

- Frequency: chooses center frequencies for bands 1-5, plus corner frequencies for the band-pass and shelving filters.
- Gain: sets boost or attenuation for frequency bands and sets the per-octave slope of band-pass filters.
- Q/ Width: controls how wide the affected frequency band is. Low Q values cover more frequencies. High Q values near 100 narrow the affected band and work well for notch filters that remove specific frequencies such as 60-Hz hum.
- Band: enables as many as five intermediate bands plus high-pass, low-pass, and shelving filters, allowing detailed control of the equalization curve. Click the band button to activate the related settings. Slope buttons on the low and high shelving filters change shelves by 12 dB per octave instead of the default 6 dB per octave.
- Constant: represents a frequency band's width either as a Q value, a width-to-center-frequency ratio, or as an absolute width in Hz. Constant Q is the setting most often used.
- Ultra-Quiet: nearly removes noise and artifacts but uses more processing. The result is audible only on high-end headphones and monitoring systems.
- Range: switches the graph between a 30-dB range for more precise adjustment and a 96-dB range for more extreme adjustment.

### Scientific Filter

Scientific Filter provides advanced audio filtering controls. It is also available from the Effects Rack for single assets in the waveform editor, and for tracks and clips in the Multitrack editor.

- Bessel: gives accurate phase response without ringing or overshoot. The pass band slopes at the edges, where stop-band rejection is weakest among the filter types. These traits make Bessel useful for percussive, pulse-like signals. For other filtering work, use Butterworth.
- Butterworth: gives a flat pass band with minimal phase shift, ringing, and overshoot. Its stop-band rejection is much stronger than Bessel and only a little weaker than Chebychev 1 or 2. These overall traits make Butterworth the best option for most filtering tasks.
- Chebychev: gives the strongest stop-band rejection but the weakest phase response, ringing, and overshoot in the pass band. Use it only when rejecting the stop band matters more than keeping an accurate pass band.
- Elliptical: gives a sharp cutoff and narrow transition width. It can notch frequencies as well, unlike Butterworth and Chebychev filters. It can add ripples in both the stop band and the pass band.

- LowPass: allows low frequencies through and removes high frequencies. Set the cutoff point where frequencies are removed.
- HighPass: allows high frequencies through and removes low frequencies. Set the cutoff point where frequencies are removed.
- BandPass: keeps a band, or frequency range, while removing all other frequencies. Set two cutoff points to define the band's edges.
- BandStop: rejects frequencies inside the specified range. Also called a notch filter, Band Stop is the opposite of Band Pass. Set two cutoff points to define the band's edges.

- Master Gain: compensates when the overall volume may be too loud or too quiet after filter settings are changed.
- Cutoff: sets the frequency boundary between passed and removed frequencies. At this point, the filter changes from passing to attenuating, or the reverse. For filters that need a range, Band Pass and Band Stop, Cutoff sets the low-frequency boundary while High Cutoff sets the high-frequency boundary.
- High Cutoff: sets the high-frequency boundary in filters that require a range, Band Pass and Band Stop.
- Order: sets filter precision. Higher order values make the filter more precise, with steeper cutoff slopes and similar behavior, but high orders can also create more phase distortion.
- Transition Bandwidth: (Butterworth and Chebychev only) sets transition-band width. Lower values produce steeper slopes. If a transition bandwidth is entered, the Order setting is filled automatically, and the reverse is also true. In filters that need a range, Band Pass and Band Stop, this option sets the lower frequency transition, while High Width sets the higher frequency transition.
- High width: (Butterworth and Chebychev only) in range-based filters, Band Pass and Band Stop, this option sets the higher frequency transition, while Transition Bandwidth sets the lower frequency transition.
- Stop Attn: (Butterworth and Chebychev only) sets how much gain reduction is applied when frequencies are removed.
- Pass/Actual ripple: (Chebychev only) sets the maximum permitted ripple amount. Ripple means unwanted boosts and cuts around the cutoff point.

### Treble

Treble raises or lowers high frequencies, meaning 4000 Hz and above. Boost sets the amount, in decibels, to increase or decrease. The effect works with 5.1, stereo, or mono clips.

## Modulation

### Chorus/Flanger

The Chorus/Flanger effect combines two familiar delay designs. With the Chorus option, several short delays plus light feedback make one voice or instrument feel like multiple parts playing together. The sound becomes fuller and wider, which can strengthen vocal material or give mono audio more stereo space.

- Chorus: Creates the impression that several voices or instruments are sounding together.
- Flanger: Recreates the delayed, phase-shifted character associated with psychedelic music.

- Speed: Sets how fast delay time moves from zero up to the maximum value.
- Width: Defines the largest delay amount.
- Intensity: Sets the balance between source audio and the processed result.
- Transience: Accentuates transients so attacks sound sharper and more clearly separated.

### Flanger

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

### Phaser

Phasing, like flanging, changes an audio signal's phase and recombines it with the dry sound, producing psychedelic textures associated with 1960s musicians. Instead of the variable delays used by the Flanger effect, Modulation > Phaser moves a chain of phase-shifting filters toward and away from an upper frequency. The process can reshape the stereo image dramatically and create unusual sounds.

- Stages: Sets how many phase-shifting filters are used. Larger values make the phasing texture denser.
- Intensity: Sets the amount of phase-shifting placed on the signal.
- Depth: Sets how far the filters sweep below the upper frequency. Higher values create a broader tremolo; 100% sweeps from the upper frequency down to zero Hz.
- Mod Rate: Sets the modulation speed as the filters move to and from the upper frequency. Enter the value in Hz (cycles per second).
- Phase Diff: Sets the stereo-channel phase offset. Positive values begin the shift in the left channel, and negative values begin it in the right. +180° and -180° create a full offset and sound the same.
- Upper Freq: Chooses the top frequency used as the sweep starting point. For the strongest effect, use a frequency near the middle of the selected audio's range.
- Feedback: Routes a percentage of phaser output back into the input, making the effect stronger. Negative values invert phase before the audio returns.
- Mix: Sets the balance of source audio against processed audio.
- Output Gain: Changes level after the effect processes the signal.

## Noise Reduction/Restoration

### Automatic Click Remover

For fast cleanup of vinyl crackle and static, apply the Automatic Click Remover effect. It can repair a broad region of audio or focus on one click or pop.

- Threshold: Sets noise-detection sensitivity. Lower values catch more clicks and pops, but they can also select audio that should remain. Values run from 1 to 100; the default is 30.
- Complexity: Describes how complex the noise is. Higher values use more processing and can reduce audio quality. Values run from 1 to 100; the default is 16.

### DeHummer

The DeHummer effect targets narrow frequency bands and their harmonics. It is commonly used for power-line hum caused by lights and electronic devices. DeHummer can also work as a notch filter for removing an overly resonant frequency in source audio.

Note

Drag in the graph to adjust root frequency and gain visually.

- Q: Sets the root-frequency width and the width of harmonics above it. Higher values narrow the affected frequency area, while lower values broaden it.
- Gain: Sets how much hum reduction is applied.

- Number of Harmonics: Sets the count of harmonic frequencies to process.
- Harmonic Slope: Alters the attenuation relationship across harmonic frequencies.
- Output Hum Only: Previews only the removed hum so you can judge whether wanted audio is being removed.

### DeNoise

The DeNoise effect lowers or fully removes noise from an audio file, including hum, hiss, fans, air conditioners, or other background sound. Use its slider to set the amount of noise reduction. Values range from 0% to 100% and determine how much processing is applied to the audio signal.

### DeReverb

The DeReverb effect estimates the reverb profile and lets you change the reverberation amount. Values range from 0% to 100% and determine how much processing is applied to the audio signal.

## Reverb

### Convolution Reverb

Convolution Reverb recreates spaces from small coat closets through concert halls. This kind of reverb uses impulse files to model acoustic environments, producing very realistic results.

Note

Convolution Reverb uses substantial processing power. On slower systems, previews may include clicks or pops. After the effect is applied, those artifacts go away.

- Impulse: Selects the impulse file that represents the acoustic space. Use Load when adding a custom impulse file in WAV or AIFF format.
- Mix: Sets the balance between original audio and reverberant audio.
- Room Size: Sets the percentage of the complete room represented by the impulse file. Higher percentages create longer reverb.
- Damping LF: Lowers bass-heavy low-frequency material in the reverb, helping avoid muddiness and making the sound clearer and more articulate.
- Damping HF: Lowers transient high-frequency material in the reverb, reducing harshness and creating a warmer, fuller tone.
- Pre-Delay: Sets the milliseconds required for reverb to reach maximum amplitude. For the most natural response, use a short pre-delay of 0-10 milliseconds. For special effects, use a long pre-delay of 50 milliseconds or more.
- Width: Sets stereo spread. A value of 0 creates a mono reverb signal.
- Gain: Raises or lowers amplitude after processing.

## Studio Reverb

The Studio Reverb effect models acoustic environments. Because it is not convolution-based, it runs faster and uses less processor power than other reverb effects. That makes real-time adjustment in the Multitrack Editor practical without rendering effects on the track first.

### Characteristics

- Room Size: Defines the size of the simulated room.
- Decay: Sets reverberation decay time in milliseconds.
- Early Refections: Sets the percentage of first-arriving echoes, which helps communicate the perceived room size. Very high values can sound artificial, while very low values can remove the cues that imply room size. Half the original signal's volume is a useful starting value.
- Width: Sets stereo-channel spread. 0% creates a mono reverb signal; 100% gives the widest stereo separation.
- High Frequency Cut: Sets the highest frequency where reverb is allowed.
- Low Frequency Cut: Sets the lowest frequency where reverb is allowed.
- Damping: Sets how much the reverb signal's high frequencies are attenuated over time. Higher percentages add more damping for a warmer reverb tone.
- Diffusion: Models how reverberated sound is absorbed when it reflects from surfaces such as carpeting and drapes. Lower settings produce more discrete echoes, while higher settings make the reverberation smoother with fewer echoes.

### Output Level

- Dry: Sets the percentage of source audio sent to output with the effect.
- Wet: Sets the percentage of reverb sent to output.

### Surround Reverb

Surround Reverb is designed mainly for 5.1 sources, though it can add surround ambience to mono or stereo material. In the Waveform Editor, choose Edit > Convert Sample Type to change a mono or stereo file to 5.1, then apply Surround Reverb. In the Multitrack Editor, mono or stereo tracks can be routed to a 5.1 bus or master that uses Surround Reverb.

- Input Center: Sets how much of the center channel is included in the processed signal.
- Input LFE: Sets the percentage of the Low Frequency Enhancement channel used to drive reverb for other channels. The LFE signal itself does not receive reverb.
  - Impulse: Selects the impulse file for the acoustic model. Click Load to import a WAV or AIFF custom impulse file with 6-channel audio.
  - Room Size: Sets the percentage of the complete room represented by the impulse file. Higher percentages create longer reverb.
  - Damping LF: Reduces low-frequency, bass-heavy reverb material to avoid muddiness and make the result clearer and more articulate.
  - Damping HF: Reduces high-frequency transient reverb material to avoid harshness and make the result warmer and lusher.
  - Pre-Delay: Sets the milliseconds required for reverb to rise to maximum amplitude. For a natural response, use a short pre-delay of 0-10 milliseconds. For special effects, use a long pre-delay of 50 milliseconds or more.
  - Front Width: Sets stereo spread across the front three channels. A width value of 0 creates a mono reverb signal.
  - Surround Width: Sets width for the rear surround channels (Ls and Rs).

### Output

- C Wet Level: Sets how much reverb is added to the Center channel. Because that channel often carries dialog, its reverb is usually kept lower.
- L/R Bal: Sets left-right balance for front and rear speakers. 100 sends reverb only to the left; -100 sends it only to the right.
- F/B Bal: Sets front-back balance for left and right speakers. 100 sends reverb only to the front; -100 sends it only to the back.
- Mix: Sets the balance between original audio and reverberant audio. A value of 100 outputs only reverb.
- Gain: Raises or lowers amplitude after processing.

## Special

### Distortion

Apply this effect when an audio clip needs light grit or saturation. It can imitate blown car speakers, muffled microphones, or overdriven amplifiers.

- Positive and Negative graphs: Define independent curves for distorting positive and negative sample values. The horizontal ruler (x-axis) displays input level in decibels, while the vertical ruler (y-axis) displays output level. The default diagonal line represents a clean signal with a one-to-one relationship between input and output. Click and drag to add or move graph points. Drag points off a graph to delete them.
- Reset: Restores a graph to its original undistorted shape.
- Curve Smoothening: Uses curved transitions between control points, which can sound more natural than the standard linear transitions.
- Time Smoothing: Sets how quickly distortion responds to input-level changes. Because level measurement uses low-frequency content, the distortion becomes softer and more musical.
- dB Range: Changes the graph amplitude range, constraining distortion to that range.
- Linear Scale: Switches graph amplitude scales from logarithmic decibels to normalized values.

### Fill Left with Right

Fill Left with Right copies the left channel from the audio clip into the right channel and removes the clip's original right-channel information.

### Fill Right with Left

Fill Right with Left copies the right channel information into the left channel and removes the existing left-channel information. Use it only with stereo audio clips.

### Guitar Suite

Guitar Suite runs guitar tracks through several processors that reshape and optimize their tone. The Compressor stage narrows dynamic range for a tighter, stronger sound. Filter, Distortion, and Box Modeler stages reproduce common guitarist effects used for expressive performances.

- Compressor: Narrows dynamic range so amplitude stays more consistent and guitar tracks cut through a mix.

  - Filter: Recreates guitar filters from resonators through talk boxes.
  - Type: Chooses the frequency area that the filter affects. Lowpass removes high frequencies, Highpass removes low frequencies, and Bandpass removes frequencies outside a center range.
  - Frequency: Defines the cutoff used by Lowpass and Highpass filters, or defines the center frequency used by Bandpass filtering.
  - Resonance: Feeds frequencies near the cutoff point back into the filter, adding crispness at low values and whistling harmonics at high values.

- Distort: Adds the kind of edge commonly heard in guitar solos. To alter the distortion character, choose an option from the Type menu.
- Amplifier: Models different amplifier and speaker combinations used by guitarists to make distinct tones.
- Mix: Sets the balance between original audio and processed audio.

### Invert

Invert (audio) flips phase on every channel. The effect can be used with 5.1, stereo, or mono clips.

### Loudness Radar

Loudness Radar measures audio level for clips, tracks, or sequences.

### Mastering

Mastering is the full process of preparing and optimizing audio files for a target medium such as radio, video, CD, or the web.

Before mastering, account for the needs of the destination medium. For web delivery, for example, playback often happens on computer speakers that do not reproduce bass well. Boosting bass during equalization can help compensate.

- Equalizer: Changes the overall tonal balance.

  - Low Shelf Enable: Turns on shelving filters at the low end of the frequency spectrum.
  - Peaking Enable: Enables a peaking filter at the middle of the frequency spectrum.
  - High Shelf Enable: Enables shelving filters for the upper end of the frequency spectrum.
  - Hz: Shows the center frequency for each frequency band.
  - dB: Shows the level for each frequency band.
  - Q: Sets the affected frequency band's width. Low Q values (up to 3) cover a wider range and work well for broad audio enhancement. High Q values (6-12) isolate a narrow band and are useful for removing a specific problem frequency such as 60-Hz hum.

- Reverb: Adds ambience. Move the Amount slider to set the balance between original sound and reverberant sound.

  - Retro: Changes light distortion.
  - Tape: Changes bright tone.
  - Tube: Changes quick, dynamic response.
  - Amount: Sets the processing level.

- Widener: Changes the stereo image and is disabled for mono audio. Move the Width slider left to narrow the image and emphasize the center. Move it right to broaden the image and improve the spatial placement of individual sounds.
- Loudness Maximiser: Uses a limiter to reduce dynamic range and raise perceived loudness. 0% reflects the original level; 100% applies the strongest limiting.
- Output Gain: Sets the level after processing. For example, raise output gain to offset EQ changes that lowered the overall level.

### Swap Channels

Swap Channels exchanges the left and right channel positions. Use it only on stereo clips.

### Vocal Enhancer

Vocal Enhancer quickly improves voice-over recording quality. The Male and Female modes automatically reduce sibilance, plosives, and microphone-handling noise such as low rumbles. They also use microphone modeling and compression to create a radio-style vocal sound. The Music mode adjusts soundtracks so they sit better under a voice-over.

- Male: Optimizes audio for a male voice.
- Female: Optimizes audio for a female voice.
- Music: Applies compression and equalization to music or background audio.

## Stereo Imagery

### Stereo Expander

Stereo Imagery positions and widens the stereo image. Since Stereo Expander is VST-based, it works alongside other effects in the Mastering Rack and Effects Rack. Automation lanes in Multitrack View can vary the effect over time.

- Center Channel Pan: Places the stereo image center anywhere from hard left (-100%) to hard right (100%).
- Stereo Expand: Widens the stereo image from Narrow/Normal (0) to Wide (300). Narrow/Normal represents the original, unprocessed audio.
