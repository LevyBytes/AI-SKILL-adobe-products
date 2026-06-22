# Noise Reduction Restoration Effects (part 1)

> Adobe Audition reference. Original prose; identifiers preserved verbatim.

### Reduce unwanted noise and restore audio quality with noise reduction and restoration effects in Adobe Audition.

## How to reduce noise and restore audio in Adobe Audition

View this video to learn how reducing unwanted noise can restore audio and help produce quality audio content.

## Techniques for restoring audio

A broad set of audio problems can be handled by pairing two powerful features. Start with Spectral Display to find and select noise ranges or single artifacts visually. Next, fix problems with either the Diagnostic or Noise Reduction effects, including:

- Crackling introduced by wireless microphones or aged vinyl records.
- Background sounds, including wind rumble, tape hiss, and power-line hum.
- Phase-cancellation problems from stereo microphones placed poorly or tape machines that are not aligned.

Note

The real-time restoration effects listed above are available in both the Waveform and Multitrack editors and quickly handle common audio issues. For especially noisy audio, consider offline process effects that are unique to the Waveform Editor, including Hiss Reduction and Noise Reduction.

Watch the Audio restoration techniques video for best practices on repairing audio in Adobe Audition; it covers the Amplitude Statistics panel, spectral frequency display, adaptive noise reduction, the Diagnostics panel, plus DeClipper and DeHummer effects.

Tip

- For more details about the Spectral Frequency Display, see How to use the Spectral Frequency Display to clean up your audio.
- Watch the Audio restoration techniques video to see best practices for Audition repair workflows that combine the Amplitude Statistics panel with spectral frequency display, adaptive noise reduction, the Diagnostics panel, and the DeClipper and DeHummer effects.

## Noise Reduction effect (Waveform Editor only)

Noise Reduction/Restoration > Noise Reduction reduces background and broadband noise while keeping signal quality largely intact. It can remove combined noise sources such as tape hiss, microphone background noise, power-line hum, or other steady noise across a waveform.

The right reduction amount depends on the background-noise type and how much quality loss is acceptable in the remaining signal. As a general guide, the signal-to-noise ratio can be improved by 5 to 20 dB while preserving high audio quality.

For best results, apply Noise Reduction to audio that has no DC offset. If DC offset is present, quiet passages may develop clicks. Remove DC offset with Favorites > Repair DC Offset.

Evaluate and adjust noise with the Noise Reduction graph.

A. Drag control points to vary reduction in different frequency ranges B. Low amplitude noise. C. High amplitude noise D. Threshold below which noise reduction occurs.

Evaluate and adjust noise with the Noise Reduction graph.

## Apply the Noise Reduction effect

In the Waveform Editor, choose a noise-only range of 0.5 seconds or longer.

Choose Effects > Noise Reduction/Restoration > Capture Noise Print.

In the Editor panel, mark the range you want to clean.

Choose Effects > Noise Reduction/Restoration > Noise Reduction.

Configure the options you want. Note

- For noise in a specific frequency range, use the Marquee Selection tool.
- In noisy recording spaces, capture a few seconds of representative background noise so it can serve as a noise print later.

## Noise Reduction options

Capture Noise Print

Creates a noise profile from the selection, treating it as background noise only. Adobe Audition collects statistics about that background noise so the rest of the waveform can be cleaned.

Tip

When the selected range is too short, Capture Noise Print is unavailable. Lower FFT Size or select a longer noise segment. If no longer section exists, copy and paste the current selection to make one, then remove the pasted noise later with Edit > Delete.

Save the Current Noise Print

Stores the noise print as an .fft file. It records the sample type, FFT (Fast Fourier Transform) size, and three FFT coefficient sets: the lowest detected noise, the highest detected noise, and the power average.

Load a Noise Print from Disk

Loads a noise print already saved from Adobe Audition in FFT format. Noise prints can be used only with matching sample types; for example, a 22 kHz mono profile cannot be applied to 44kHz stereo samples.

Noise prints are highly specific, so a profile captured from one kind of noise will not work well on other kinds. If the same kind of noise is removed often, a saved profile can still make the work much faster.

Graph

Shows frequency on the horizontal x-axis and the amount of noise reduction on the vertical y-axis.

The blue control curve defines the reduction amount for different frequency ranges. For example, to reduce noise only in higher frequencies, move the control curve downward on the graph's right side.

Selecting the Reset button to flatten the control curve makes the reduction amount depend completely on the noise print.

To concentrate on the noise floor, choose the menu button at the upper right of the graph, then turn off Show Control Curve and Show Tooltip Over Graph.

Noise Floor

High displays the greatest detected noise amplitude at each frequency; Low displays the smallest amplitude. Threshold displays the amplitude below which reduction is applied.

The three noise-floor elements may overlap in the graph. To separate them visually, choose the menu button and then choose items from the Show Noise Floor menu.

Scale

Sets how the horizontal x-axis arranges frequencies:

For more precise control in low frequencies, choose Logarithmic. A logarithmic scale more closely matches human hearing.

For detailed high-frequency work with evenly spaced frequency intervals, choose Linear.

Channel

Shows the selected channel in the graph. Noise reduction amount is always identical for every channel.

Select Entire File

Allows a captured noise print to be applied to the full file.

Noise Reduction

Sets the percentage of noise reduction in the output signal. Preview the audio while fine-tuning this value so noise reduction is maximized and artifacts are minimized.

Very high noise reduction settings can sometimes make audio sound flanged or out-of-phase.

Reduce By

Sets how much detected noise is reduced in amplitude. Values between 6 and 30 dB are effective. Use lower values to lessen bubbly artifacts.

Output Noise Only

Plays only the noise so you can judge whether desirable audio is being removed.

Advanced

Select the triangle to open the menu and see advanced settings:

- Spectral Decay Rate: Sets the percentage of frequencies processed after audio falls below the noise floor. Careful adjustment can increase noise reduction while reducing artifacts. Values of 40% to 75% work best. Below that range, bubbly-sounding artifacts are often audible; above it, too much noise usually remains.

- Smoothing: Considers how much the noise signal varies in each frequency band. Bands with large variation during analysis, such as white noise, are smoothed differently from constant bands such as 60-Hz hum. Generally, increasing smoothing up to about 2 reduces burbly background artifacts but raises the overall background broadband noise level.

- Precision Factor: Controls amplitude changes. Values of 5-10 work best, and odd numbers are best for symmetrical processing. With values of 3 or lower, the Fast Fourier transform runs in very large blocks, so drops or spikes in volume may occur between them. Values above 10 do not noticeably improve quality, but they do require more processing time.

- Transition Width: Sets the amplitude span between noise and desired audio. For example, zero width applies a hard noise gate to each frequency band: audio just above the threshold remains, while audio just below it is cut to silence. You can instead set a range where audio fades to silence according to the input level. For example, if Transition Width is 10 dB and the band's noise level is -60 dB, the -60 dB audio is unchanged, the -62 dB audio is reduced slightly, and the -70 dB audio is fully removed.

- FFT Size: Sets how many separate frequency bands are analyzed. This setting produces the largest quality changes. Each band is treated separately, so more bands allow noise to be removed with finer frequency detail. Good settings range from 4096 to 8192. Fast Fourier Transform size balances frequency accuracy against time accuracy. Larger FFT sizes can create swooshing or reverberant artifacts, but they remove noise frequencies very accurately. Smaller FFT sizes improve time response, for example by reducing swooshing before cymbal hits, but they may lower frequency resolution and create hollow or flanged sounds.

- Noise Print Snapshots: Sets how many noise snapshots are included in the captured profile. For accurate data, 4000 is optimal. Very small values have a strong effect on quality across noise reduction levels. More snapshots make a noise reduction level of 100 more likely to remove additional noise and additional original signal. With more snapshots, even a low noise reduction level will probably remove more noise while preserving the intended signal.

## Sound Remover effect

Sound Remover (Effects > Noise Reduction/Restoration) removes unwanted sound sources from a recording. It analyzes a selected part of the recording and creates a sound model that is then used to locate and remove that sound.

Parameters that describe complexity can modify the generated model. A more complex sound model needs additional refinement passes to process the recording, but it can produce more accurate results. The sound model can be saved for later. Presets are available for common noises, including sirens and ringing mobile phones.

Use the Sound Remover effect to lessen or eliminate unwanted background sounds in recordings.

Apply the Sound Remover effect when audio recordings contain unwanted background sounds that should be reduced or removed.

Learn Sound Model

Learns the sound model from the selected waveform. Choose a waveform area that contains only the sound to remove, then select Learn Sound Model. Sound models can also be saved to disk and loaded again.

Sound Model Complexity

Shows the complexity of the Sound Model. More complex or mixed sounds benefit from higher complexity settings, though calculation takes longer. Settings range from 1 to 100.

Sound Refinement Passes

Sets how many refinement passes remove the sound patterns represented in the sound model. More passes need more processing time, but they produce more accurate results.

Content Complexity

Shows the complexity of the signal. Higher complexity settings work better for more complex or mixed sound, although calculation takes longer. Settings range from 5 to 100.

Content Refinement Passes

Sets the number of passes applied to the content to remove sounds matching the sound model. More passes require extra processing time, but they usually improve accuracy.

Enhanced Supression

Increases how aggressively the sound removal algorithm works and can be adjusted with the Strength value. Higher values remove more of the sound model from mixed signals, which can also remove more desired signal. Lower values preserve more overlapping signal, so more of the noise may remain audible, though still less than in the original recording.

Enhance for Speech

Indicates that the audio includes speech and handles removal carefully for audio patterns that closely resemble speech. The result is intended to remove noise without removing speech.

FFT Size

Sets how many separate frequency bands are analyzed. This setting produces the largest quality changes. Each band is treated separately, so more bands allow noise to be removed with finer frequency detail. Good settings range from 4096 to 8192. Fast Fourier Transform size balances frequency accuracy against time accuracy. Larger FFT sizes can create swooshing or reverberant artifacts, but they remove noise frequencies very accurately. Smaller FFT sizes improve time response, such as less swooshing before cymbal hits, while reduced frequency resolution can lead to hollow or flanged results.

Watch the video titled Sound removal and noise reduction strategies to learn ways to reduce noise and remove unwanted sounds from audio.

## Adaptive Noise Reduction effect

Noise Reduction/Restoration > Adaptive Noise Reduction is intended for changing broadband problems, including background sound, rumble, and wind. Since it works in real time, it can sit in the Effects Rack alongside other effects and can be used from the Multitrack Editor. The ordinary Noise Reduction effect, by comparison, runs only as an offline process in the Waveform Editor, though it can do a better job on steady noises such as hiss or hum.

For stronger results, choose audio where the unwanted noise comes first and the wanted material follows. The effect learns its noise profile from the opening seconds of the selection.

Note

This effect is processor-intensive. On slower systems, reduce FFT Size and disable High Quality Mode.

Adaptive Noise Reduction can lower shifting background noise automatically while playback and editing remain real time.

Adaptive Noise Reduction can automatically reduce changing background noise during real-time work.

Reduce Noise By

Sets how much noise reduction is applied. Values between 6 and 30 dB are generally useful; for fewer bubbly background artifacts, use lower values.

Noisiness

Shows what percentage of the original audio is treated as noise.

Fine Tune Noise Floor

Moves the noise floor manually above or below the level calculated by the effect.

Signal Threshold

Offsets the desired-audio threshold manually from the automatically calculated threshold.

Spectral Decay Rate

Controls the speed at which noise processing falls by 60 decibels. Careful adjustment can remove more noise with fewer artifacts. Settings that are too short can cause bubbly sounds, while overly long settings can create a reverb-like result.

Broadband Preservation

Protects wanted audio in selected frequency bands around detected artifacts. For example, 100 Hz prevents removal within 100 Hz above or below the detected artifact. Lower settings remove additional noise, but they can add audible processing effects.

FFT Size

Chooses the number of separate frequency bands to analyze. Higher settings favor frequency resolution, and lower settings favor time resolution. High values suit long artifacts such as squeaks or power-line hum; low values work better on brief artifacts such as clicks and pops.

Watch the video about removing noise from audio files for a demonstration of reducing noise and removing unwanted sounds from audio.

## Automatic Click Remover effect

For fast cleanup of vinyl crackle and static, use Noise Reduction/Restoration > Automatic Click Remover. It can process either a broad audio region or one individual click or pop.

The options match those in the DeClicker effect, where you decide which detected clicks should be repaired. Automatic Click Remover, however, works in real time, so it can be combined with other Effects Rack processing and used in the Multitrack Editor. It also performs several scan-and-repair passes on its own; reaching a comparable reduction level with DeClicker requires applying that effect repeatedly by hand.

Automatic Click Remover detects and removes clicks and pops in recorded audio.

Automatic Click Remover can find clicks and pops in audio recordings and remove them.

Threshold

Sets noise sensitivity. Lower values find more clicks and pops, but they can also include audio you want to keep. The range is 1 to 100, with 30 as the default.

Complexity

Describes how complex the noise is. Higher values use more processing and may reduce audio quality. The range is 1 to 100, with 16 as the default.

## Automatic Phase Correction effect

Noise Reduction/Restoration > Automatic Phase Correction fixes phase problems such as azimuth errors from misaligned tape heads, stereo smear caused by microphone placement, and other related issues.

Automatic Phase Correction can find and correct channel phase-alignment problems automatically.

Automatic Phase Correction automatically detects and repairs phase alignment issues between audio channels.

Global Time Shift

Turns on the Left and Right Channel Shift sliders so a single phase offset can be applied across all selected audio.

Auto Align Channels and Auto Center Panning

Corrects phase and panning over a set of separate time intervals, configured with these controls:

Time Resolution

Sets the interval length in milliseconds for each processed segment. Smaller values improve accuracy; larger values improve performance.

Responsiveness

Sets the overall processing speed. Slow settings prioritize accuracy, while fast settings prioritize performance.

Channel

Chooses which channels receive phase correction.

Analysis Size

Sets the sample count for each analyzed audio unit.

Note

For the most accurate and useful phase correction, choose Auto Align Channels. Use the Global Time Shift sliders only when a uniform offset is clearly needed, or when you want to animate phase correction manually in the Multitrack Editor.

## Click/Pop Eliminator effect

Click/Pop Eliminator, found under Effects > Noise Reduction/Restoration, removes microphone pops, clicks, light hiss, and crackles. These defects often appear in older vinyl transfers and field recordings. Its dialog remains open, letting you change the selection and repair multiple clicks without relaunching the effect.

Click and pop detection relies on detection and correction settings. The detection and rejection ranges appear as a graph.

Click/Pop Eliminator removes clicks, pops, and other short transient noise from audio recordings.

Click/Pop Eliminator can clean clicks, pops, and other brief transient noises from recorded audio.

Detection graph

Displays the threshold level applied at each amplitude, with amplitude on the horizontal ruler (x-axis) and threshold level on the vertical ruler (y-axis). For louder audio, Adobe Audition uses the right side of the curve, roughly above -20 dB; for softer audio, it uses the left side. Colors distinguish detection from rejection.

Scan for All Levels

Examines the selected area for clicks using Sensitivity and Discrimination, then derives Threshold, Detect, and Reject values. It selects five audio regions, moving from the quietest region to the loudest.

Sensitivity

Sets the click-detection level. A lower value, such as 10, finds many subtle clicks; a value of 20 catches fewer, louder clicks. Levels found with Scan for All Levels are always higher than those produced by this option.

Discrimination

Controls how many detected clicks are repaired. Higher values repair very few clicks and preserve more of the original audio. Lower values, such as 20 or 40, suit material with a moderate click count. Extremely low values, such as 2 or 4, target constant clicking.

Scan for Threshold Levels

Fills in the Maximum, Average, and Minimum Threshold levels automatically.

- Maximum, Average, Minimum: define separate detection and rejection thresholds for the audio maximum, average, and minimum amplitudes. For audio whose maximum RMS amplitude is -10 dB, Maximum Threshold should be -10 dB. When minimum RMS amplitude is -55 dB, Minimum Threshold should be -55.
- Configure threshold levels before changing the related Detect and Reject values. Set Maximum Threshold and Minimum Threshold first, because they usually need little further adjustment once placed. Put Average Threshold at roughly three quarters of the distance from Minimum Threshold to Maximum Threshold. For example, with Maximum Threshold at 30 and Minimum Threshold at 10, use 25 for Average Threshold.
- After previewing a short repaired section, refine the controls as needed. If a quiet passage still contains many clicks, reduce Minimum Threshold slightly. If loud material still clicks, lower Average Threshold or Maximum Threshold. Louder audio usually needs less correction because the program material masks many clicks, while quiet audio exposes clicks and therefore tends to need lower detection and rejection thresholds.

Second Level Verification (Reject Clicks)

Filters out some possible clicks found by the click-detection algorithm. In material such as trumpets, saxophones, female vocals, and snare drum hits, normal peaks can be mistaken for clicks. Correcting those peaks makes the audio sound muffled, so Second Level Verification rejects them and repairs only real clicks.

Detect

Sets sensitivity for clicks and pops. Values can be 1 to 150, though 6 to 60 is the recommended range. Lower values catch more clicks.

Begin with thresholds of 35 for high-amplitude material above -15 dB, 25 for average amplitudes, and 10 for low-amplitude material below -50 dB. These values find the largest number of clicks and typically catch all louder ones. If constant background crackle remains in the source, reduce Min Threshold or raise the assigned dB level. The level can go down to 6, but values below that may make the filter remove non-click audio.

Finding more clicks means performing more repairs, which raises the chance of distortion. When this kind of distortion becomes excessive, the audio can turn flat and lifeless. In that situation, use a fairly low detection threshold and enable Second Level Verification so the detected clicks are analyzed again and percussive transients that are not clicks are ignored.

Reject

Sets how many possible clicks, identified with Detection Threshold, are rejected when Second Level Verification is enabled. Values run from 1 to 100, and 30 is a useful starting point. Lower values allow more click repairs; higher values can block repairs because the events may not be actual clicks.

The goal is to reject as many detections as possible while still removing every audible click. If clicks in a trumpet-like sound remain, lower the value so fewer candidates are rejected. If a sound becomes distorted, raise the setting to minimize repairs. Fewer repairs are preferable when they still produce good results.

FFT Size

Chooses the FFT size for repairing clicks, pops, and crackle. Usually, select Auto and let Adobe Audition choose the FFT size. For some audio, you may instead enter a specific FFT size from 8 to 512. Start around 32; if clicks are still obvious, try 48, then 64, and continue upward as needed. Higher values slow correction but can improve results. Excessive values may produce rumbly low-frequency distortion.

Fill Single Click

Repairs one click inside the selected audio range. When Auto is selected beside FFT Size, the restoration uses an FFT size suited to the size of the area being fixed. Otherwise, values from 128 to 256 work well for filling single clicks. After filling one click, press F3 to repeat the action. A quick key can also be created in the Favorites menu for filling single clicks.

Pop Oversamples Width

Adds neighboring samples to detected clicks. When a possible click is located, its start and end points are marked as tightly as possible. Pop Oversamples, which ranges from 0 to 300, expands the region so extra samples on both sides are treated as part of the click.

If repaired clicks get quieter but remain audible, raise Pop oversamples. Start at 8, then increase gradually up to 30 or 40. Audio outside a click should change very little during correction, so this buffer should stay mostly unaffected by the replacement algorithm.

Raising Pop Oversamples also forces larger FFT sizes when Auto is selected. A larger value can remove clicks more cleanly, but an excessive value makes audio distort at the repair points.

Run Size

Sets the sample distance used to separate individual clicks. Values range from 0 to 1000. For independent repair of extremely close clicks, use a low value; clicks inside the Run Size span are repaired together.
