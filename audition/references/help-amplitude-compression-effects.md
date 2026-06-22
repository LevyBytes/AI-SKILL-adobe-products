# Amplitude Compression Effects (part 1)

> Adobe Audition reference. Original prose; identifiers preserved verbatim.

### Apply and control amplitude and compression effects in Adobe Audition.

## Amplify effect

The Amplitude and Compression > Amplify effect raises or lowers an audio signal. Because it runs in real time, it can be combined with other effects in the Effects Rack.

Use the Amplify effect when an audio signal needs to be made louder or softer by increasing or decreasing volume.

Use the Amplify effect when an audio signal needs to be made louder or softer by increasing or decreasing volume.

Gain sliders

Raise or lower separate audio channels.

Link Sliders

Moves channel sliders as a linked set.

## Channel Mixer effect

The Amplitude and Compression > Channel Mixer effect changes how stereo or surround channels are balanced. It can move the perceived position of sounds, repair level mismatches, or deal with phase problems.

Apply the Channel Mixer effect when the balance between stereo or surround audio channels needs adjustment.

Apply the Channel Mixer effect when the balance between stereo or surround audio channels needs adjustment.

Channel tabs

Select the output channel.

Input channel sliders

Set the percentage of current channels that will be mixed into the output channel. For example, in a stereo file, L set to 50 and R set to 50 creates an output channel with equal audio from the existing left and right channels.

Invert

Reverses a channel's phase. When every channel is inverted, the sound is not perceived as different. Inverting only one channel can change the sound dramatically.

Tip

Learn more about how sound waves interact.

## DeEsser effect

The Amplitude and Compression > DeEsser effect reduces sibilance, the "ess" sounds in speech and singing that can overemphasize high frequencies.

The graph shows which frequencies are being processed. To check how much audio exists inside that range, select the Preview button .

Use the DeEsser effect to soften harsh 's' and 'sh' vocal sounds by reducing excessive high-frequency sibilance.

Use the DeEsser effect to soften harsh 's' and 'sh' vocal sounds by reducing excessive high-frequency sibilance.

Mode

Choose Broadband to compress every frequency evenly, or Multiband to compress only the sibilance range. Multiband usually fits most audio material best, though it adds a small amount of processing time.

Threshold

Sets the amplitude level that must be exceeded before compression starts.

Center Frequency

Sets the frequency where sibilance is strongest. To confirm the value, adjust it during playback.

Bandwidth

Sets the frequency span that activates the compressor.

Tip

To adjust Center Frequency and Bandwidth visually, drag the selection edges in the graph.

Output Sibilance Only

Plays only the sibilance that was detected. Start playback, then fine-tune the settings above.

Gain Reduction

Shows how much compression is applied to the processed frequencies.

## Dynamics Processing effect

The Amplitude and Compression > Dynamics Processing effect can act as a compressor, limiter, or expander. In compressor and limiter use, it narrows dynamic range for steadier volume. As an expander, it widens dynamic range by lowering quiet signals. Very strong expander settings can form a noise gate that completely removes noise below a chosen amplitude threshold.

The Level Meter shows output volume, while the Gain Reduction Meter shows how much the signal is being reduced.

A. Level Meter B. Gain Reduction Meter

The Level Meter shows output volume, while the Gain Reduction Meter shows how much the signal is being reduced.

Dynamics Processing can make subtle changes that may become obvious only after several listening passes. When using this effect in the Waveform Editor, work on a copy of the original file so the original audio remains available.

In the Dynamic Processing Effect, the Level Meter and Gain Reduction Meter can be viewed. Level Meter shows the audio input level, and Gain Reduction Meter shows the way audio signals are compressed or expanded. These meters appear on the right side of the graph as shown below.

Note

The Broadcast Limiter preset mimics the processed sound of a modern radio station.

## Dynamics tab

Graph

Shows input level on the horizontal ruler (x-axis) and the changed output level on the vertical ruler (y-axis). The default graph is a straight line from lower left to upper right, meaning the signal is unchanged and every input level keeps the same output level. Editing the graph changes the input-to-output relationship and therefore changes dynamic range.

For instance, when a useful sound element is around -20 dB, you can raise the input signal at that level while keeping the rest unchanged. You can also draw an inverse line, from upper left to lower right, to make quiet sounds louder and loud sounds quieter.

Add point

Adds a graph control point from the numeric input and output levels you enter. This gives more precision than adding points by clicking the graph.

Tip

To edit an existing control point by number, right-click it and select Edit Point.

Delete point

Deletes the selected point from the graph.

Invert

Reverses the graph, changing compression into expansion or expansion into compression.

Note

A graph can be inverted only when it includes points at both default corners (-100, -100 and 0, 0) and its output level rises from left to right, meaning each control point is higher than the point to its left.

Reset

Returns the graph to its default form.

Spline Curves

Creates smooth, curved transitions between control points rather than sharper linear transitions. Learn more about spline curves for graphs.

Make-Up Gain

Raises the processed signal.

## Settings tab

### General

The General section contains global controls.

Look-Ahead Time

Handles transient spikes that can happen at the beginning of loud signals extending past the compressor's Attack Time settings. Increasing Look-Ahead Time lets compression start before the audio becomes loud, preventing amplitude from crossing a chosen level. Reducing Look-Ahead Time can be useful when percussive music, such as drum hits, needs more impact.

Noise Gating

Silences signals completely when expansion falls below a 50-to-1 ratio.

### Level Detector

The Level Detector section sets how the original input amplitude is measured.

Input Gain

Adds gain before the signal reaches the Level Detector.

Attack Time

Sets how many milliseconds pass before the input signal registers an amplitude change. For example, if audio suddenly falls 30 dB, the selected attack time elapses before the input records that change. This helps avoid false amplitude readings from short-term changes.

Release Time

Sets how many milliseconds the current amplitude level is held before a new amplitude change can be registered.

Tip

Use fast attack and release values for audio with quick transients, and slower values for audio that is less percussive.

Peak mode

Measures levels from amplitude peaks. Compared with RMS, this mode is somewhat harder to work with because peaks are not shown exactly in the Dynamics graph. It can still help when the audio contains loud transient peaks that need reduction.

RMS mode

Measures levels with the root-mean-square formula, an averaging approach that better matches perceived loudness. This mode shows amplitudes accurately in the Dynamics graph. For example, a limiter shown by a flat horizontal line at -10 dB corresponds to an average RMS amplitude of -10 dB.

### Gain Processor

The Gain Processor settings raise or lower the signal according to the detected amplitude.

Output Gain

Adds gain to the output signal after dynamics processing is complete.

Attack Time

Sets how many milliseconds pass before the output signal reaches the chosen level. For example, if audio suddenly falls 30 dB, the selected attack time elapses before the output level changes.

Release Time

Sets how many milliseconds the current output level is held.

Note: If Attack and Release times are too short in combination, less than about 30 milliseconds, audible artifacts can occur. To find suitable attack and release values for different audio material, choose multiple options from the Presets menu.

Link Channels

Processes every channel equally so stereo or surround balance is preserved. For example, compressing a drum beat on the left channel lowers the right channel level by the same amount.

### Band Limiting

Use the Band Limiting section controls to limit dynamics processing to a selected frequency range.

Low Cutoff

Is the lowest frequency affected by dynamics processing.

High Cutoff

Is the highest frequency affected by dynamics processing.

## Dynamic Effect

Amplitude and Compression > Dynamics Effects contains four modules: Auto Gate, Compressor, Expander, and Limiter. Each module can be adjusted separately. LED indicators and gain-reduction meters show how the signal is being handled.

For steadier sound, shape loudness and dynamic range with compression, limiting, expansion, or gating.

Use compression, limiting, expansion, or gating to make loudness and dynamic range more consistent.

Dynamic effect includes these parameters:

Auto Gate

Noise below a chosen amplitude threshold is removed. The LED meter shows green while audio is passing through the gate, red when no audio passes, and yellow during attack, release, and hold intervals.

Compressor

Dynamic range is narrowed by reducing audio that rises above a defined threshold. Ratio controls how much the range changes, while Attack and Release set the timing response. Gain raises the level after compression. Gain Reduction reports how much the audio level has been lowered.

Expander

Dynamic range is widened by reducing audio that falls under the chosen threshold. Ratio determines the amount of range change. The gain reduction meter shows the amount of level reduction.

Limiter

Audio above a defined threshold is attenuated. The meter LED lights when the signal is being limited.

## Fade Envelope effect

Amplitude and Compression > Fade Envelope changes amplitude across time with a customizable volume envelope that can lower or raise the signal.

In the Waveform Editor panel, choose the yellow envelope line to create keyframes, then drag those points up or down to alter amplitude. Multiple keyframes can be selected, moved, or removed.

Amplitude can be raised or lowered over time with adjustable envelope controls.

Adjustable envelope controls let amplitude rise or fall over time. Tip

For curved transitions between keyframes instead of straight-line movement, select Spline Curves.

## Gain Envelope effect

Amplitude and Compression > Fade Envelope boosts or reduces amplitude as time passes.

In the Waveform Editor panel, choose the yellow envelope line to create keyframes, then drag them upward or downward to alter amplitude. Multiple keyframes can be selected, repositioned, or deleted.

Amplitude can be boosted or reduced over time with adjustable envelope controls.

Adjustable envelope controls let amplitude be boosted or reduced over time. Tip

For smoother curved movement between keyframes, instead of linear transitions, select Spline Curves.

## Hard Limiter effect

Amplitude and Compression > Hard Limiter strongly reduces audio that passes a chosen threshold. Limiting is often paired with input boost, which raises overall volume while preventing distortion.

Hard Limiter keeps audio below a chosen peak by sharply limiting or clipping louder material.

Use Hard Limiter when louder signals need sharp limiting or clipping so they do not exceed a set peak.

Maximum Amplitude

Defines the highest sample amplitude that can pass.

Tip

With 16-bit audio, avoid clipping by keeping this value no higher than -0.3 dB. Setting it lower, such as -3 dB, leaves extra headroom for later edits.

Input Boost

Raises the level before limiting, so a selection can become louder without clipping. Higher values produce stronger compression. Very high settings can create the loud, high-impact sound common in contemporary pop music.

Look-Ahead Time

Defines how many milliseconds ahead the effect begins attenuation before the loudest peak arrives. Keep the value at least 5 milliseconds. Values that are too small can introduce audible distortion.

Release Time

Controls how long, in milliseconds, attenuation takes to return by 12 dB, roughly matching the time audio needs to resume normal volume after a loud peak. Around 100, the default, usually works well and keeps low bass intact. If the value is too large, audio may stay quiet and recover slowly.

Link Channels

Ties channel loudness together so stereo or surround balance is maintained.

## Multiband Compressor effect

Amplitude and Compression > Multiband Compressor lets four separate frequency bands be compressed independently. Since each band often has its own dynamic behavior, multiband compression is especially useful in audio mastering.

Multiband Compressor controls define crossover frequencies precisely and apply compression settings per band. Select Solo buttons to audition bands alone, or use Bypass buttons to let bands pass without processing. After individual bands are tuned, select Link Band Controls for global adjustment, then refine overall level with the Output Gain slider and Limiter settings.

Note

Use automation lanes in the Multitrack Editor when compression settings need to change over time.

Use Multiband Compressor to set crossover frequencies and apply precise band-specific compression settings.

A. Frequency bands B. Crossover markers C. Bypassed band (no processing applied) D. Amplitude scale E. Frequency scale

With Multiband Compressor, crossover points and band-specific compression can be adjusted accurately.

Crossover

Sets crossover frequencies, which control each band's width. Enter specific Low, Midrange, and High frequencies, or move the crossover markers above the graph.

Band-specific controls in Multiband Compressor provide per-band compression adjustment.

A. Solo B. Bypass C. Threshold slider D. Input Level meters E. Gain Reduction meters

Adjust compression for each frequency band with the band-specific Multiband Compressor controls.

Solo buttons

Allow selected frequency bands to be heard. Enable one Solo button to monitor a single band, or enable multiple buttons to listen to two or more bands together.

Bypass buttons

Let individual bands pass through with no processing applied.

Tip

To give one band its own setting quickly, Alt-click (Windows) or Option-click (macOS) a Solo or Bypass button.

Threshold sliders

Set the input level where compression starts. Values can be -60 to 0 dB. The right setting depends on the source and musical style. To keep more dynamic range while compressing only extreme peaks, try thresholds about 5 dB below the peak input level. For heavy compression and a much smaller dynamic range, try settings near 15 dB below the peak input level.

Input Level meters

Show input amplitude. Double-click the meters to clear peak and clip indicators.

Gain Reduction meters

Use red meters to show amplitude reduction, with the top indicating minimal reduction and the bottom indicating maximum reduction.

Gain

Raises or lowers amplitude after compression. Values can be -18 to +18 dB, with 0 as unity gain.

Ratio

Sets compression ratio from 1-to-1 through 30-to-1. For example, at 3.0, the output rises by 1 dB for each 3-dB amount above the compression threshold. Common values are 2.0 to 5.0; higher values create the more compressed sound often associated with pop music.

Attack

Controls how fast compression begins once audio passes the threshold. Values can be 0 milliseconds to 500 milliseconds. A broad range of audio works well with the 10 milliseconds default. Shorter times suit audio with fast transients, though they can sound unnatural on less percussive material.

Release

Controls how fast compression ends after audio falls under the threshold. Values can be 0 milliseconds to 5000 milliseconds. The 100 milliseconds default works for many audio sources. Use shorter times for fast transients and longer times for less percussive content.

Output Gain

Raises or lowers the total output level after compression. Values can be -18 to +18 dB, with 0 as unity gain. Double-click the meters to clear peak and clip indicators.

Limiter

Runs limiting after Output Gain at the end of the signal path to optimize overall level. Use Threshold, Attack, and Release settings that are gentler than the comparable band-specific settings. Then set Margin to define the absolute ceiling relative to 0 dBFS.

Tip

To make compressed audio, enable Limiter and experiment with high Output Gain values.

Spectrum On Input

Shows the input signal's frequency spectrum in the multiband graph instead of the output signal. Toggle the option on and off to quickly compare how much compression is being applied to each band.

Brickwall Limiter

At the current Margin setting, this applies immediate hard limiting. Deselect it for slower soft limiting, which sounds less compressed but may go beyond the Margin setting. Brickwall limiting allows a maximum Attack time of 5 ms.

Link Band Controls

Allows compression settings for all bands to be adjusted globally while preserving their relative differences.

Tip

Hold Alt+Shift (Windows) or Option+Shift (macOS) to link band controls temporarily. To reset one control across every band, hold Ctrl+Alt+Shift (Windows) or Command+Option+Shift (macOS), then select the control.

## Normalize effect (Waveform Editor only)

Amplitude and Compression > Normalize sets a target peak level for a file or selection. Normalizing to 100% reaches digital audio's maximum allowed amplitude, 0 dBFS. When sending audio to a mastering engineer, use a value between -3 and -6 dBFS to leave room for later processing.

Normalize raises the whole file or selection by the same amount. For example, if source audio peaks at 80% and has a quieter low point at 20%, a 100% normalization raises the peak to 100% and the low point to 40%.

Note

- Offline processing is required for this effect. While the effect is open, waveform editing, selection adjustment, and current-time indicator movement are unavailable.
- For RMS normalization, choose Effects > Match Volume. That command can be applied to one file only if needed.

Use Normalize when the loudest point in audio should reach a specified peak.

Normalize can adjust audio so its highest point reaches a chosen peak level.

Normalize To

Sets the highest peak as a percentage of maximum amplitude.

Tip

Select dB when the Normalize value should be entered in decibels rather than as a percentage.

Normalize All Channels Equally

Calculates amplification from all channels in a stereo or surround waveform. When this option is off, each channel is calculated separately, which can make one channel much louder than another.

DC Bias Adjust

Adjusts where the waveform sits in the wave display. Some recording hardware adds DC bias, making the recorded waveform appear above or below the display's normal center line. Set the percentage to zero to center the waveform. Use a positive or negative percentage to shift the full selected waveform above or below the center line.

## Single-band Compressor effect

Amplitude and Compression > Single-band Compressor reduces dynamic range, yielding steadier volume and greater perceived loudness. For voiceovers, single-band compression helps the speaker remain clear over music beds and background audio.

Single-band Compressor reduces dynamic range to create steadier volume and more loudness.

Use Single-band Compressor for more consistent volume, reduced dynamic range, and increased loudness. Note

Modern pop recordings provide examples of heavy compression. Most jazz recordings use lighter compression, while typical classical recordings often use none.

Threshold

Sets the input level where compression starts. The best value depends on the audio and style. To keep more dynamic range and compress only the strongest peaks, try thresholds around 5 dB below the peak input level. For substantial compression and a large reduction in dynamic range, try about 15 dB below the peak input level.

Ratio

Sets compression ratio from 1-to-1 to 30-to-1. For example, with a setting of three, each 3-dB rise above the threshold produces 1 dB at output. Common settings are 2 to 5; higher values produce the compressed character frequently heard in pop music.

Attack

Controls how soon compression begins after audio goes above the Threshold setting. The 10 milliseconds default suits many kinds of source material. Use faster settings only for quick-transient audio, such as percussion recordings.

Release

Controls how soon compression ends when audio falls under the Threshold setting. The 100 milliseconds default works well for many sources. Use faster release for fast transients and slower release for less percussive audio.

Output Gain

Raises or lowers amplitude after compression. Values can be -30 dB to +30 dB, with 0 as unity gain.

## Speech Volume Leveler effect

Amplitude and Compression > Speech Volume Leveler is a compression effect for dialogue that evens levels, optimizes speech, and removes background noise.

For best results, use this workflow:

Choose the lowest-level audio. Move Target Volume Level and Leveling Amount to the left. Begin playback, then raise Leveling Amount gradually until speech is clearly audible without bringing up background noise.

Move Target Volume Level and Leveling Amount sliders left to reduce overall volume and make leveling less pronounced.

For subtler volume leveling and a lower overall level, move the Target Volume Level and Leveling Amount sliders to the left.

Choose the highest-level audio and start playback. Change Target Volume Level until it matches the loudness of the quieter passage adjusted earlier.

If the sound becomes too compressed, adjust Leveling Amount again.

Speech Volume Leveler provides these adjustable settings:

Target Volume Level

Sets the target output level compared with zero dBFS. See measuring amplitude in dBFS for more detail.

Leveling Amount

At low values, speech is raised modestly without lifting the noise floor. At high values, the entire signal is amplified more as it approaches the noise floor.

Boost Low Signals

Treats shorter, quiet passages as speech intended for amplification. For most material, turn this option off to keep the sound smoother.

Target Dynamic Range

Reduces background noises while amplifying and leveling speech only. For most content, best results usually come from a Target Dynamic Range value between -45dB and -60dB.

Note

- Higher parameter values, up to -80dB, can greatly reduce background noise, but they apply less leveling and amplification to speech.
- Lower parameter values, down to -30dB, improve speech leveling but may raise background noise more than desired.

Compressor

Keeps the processed signal strong when it falls below a threshold relative to zero dBFS.

Noise Gate

Cuts background noise by sharply lowering output level when the signal drops by the offset you specify.
