# Noise Reduction Restoration Effects (part 2)

> Adobe Audition reference. Original prose; identifiers preserved verbatim.

## Click/Pop Eliminator effect

A practical starting value is about 25, or half of FFT Size when Auto beside FFT Size is not selected. If Run Size is too large, roughly over 100, repairs can become more audible because large data blocks are fixed at once. If Run Size is too small, neighboring clicks may not be fully repaired on the first pass.

Pulse Train Verification

Keeps normal waveform peaks from being classified as clicks. It can also miss legitimate clicks, making stronger threshold settings necessary. Select it only after other cleanup attempts leave persistent clicks behind.

Link Channels

Applies the same processing to every channel so stereo or surround balance is maintained. For example, if one channel contains a click, the other channel will probably be detected as clicked too.

Detect Big Pops

Removes large unwanted events, including ones more than a few hundred samples wide, that may not register as clicks. Values range from 30 to 200.

Because a sharp transient such as a loud snare drum hit can resemble a very large pop, use this option only when the audio truly contains very large pops, such as a vinyl record with a major scratch. If drum hits become softer, increase the threshold slightly so only loud, obvious pops are repaired.

When loud, obvious pops are not repaired, enable Detect Big Pops and use values from about 30 for quiet pops to 70 for loud pops.

Ignore Light Crackle

Smooths detected one-sample errors and often reduces extra background crackle. Disable it if the processed audio sounds thinner, flatter, or more tinny.

Passes

Runs as many as 32 automatic passes to catch clicks that are too close together for effective single-pass repair. The effect stops earlier if no additional clicks are found and all detections have been repaired. Typically, each later pass repairs about half as many clicks as the previous one. Raising the detection threshold can mean fewer repairs and better quality while all clicks are still removed.

The video demonstrates using Click/Pop Eliminator and DeClicker to remove microphone pops, clicks, light hiss, and crackles.

## DeHummer effect

Noise Reduction/Restoration > DeHummer removes narrow frequency bands along with their harmonics. It is most often used for power-line hum from lighting or electronics, but DeHummer can also work as a notch filter to remove an overly resonant frequency from the source audio.

Tip

For fast correction of common audio issues, choose a Presets menu option.

DeHummer removes low-frequency hum and power-line noise from recordings.

DeHummer can reduce low-frequency hum and power-line noise in recorded audio.

Frequency

Sets the hum's root frequency. If the exact frequency is uncertain, drag the control back and forth while previewing.

To adjust root frequency and gain visually, drag in the graph.

Q

Sets the width of the root frequency and the harmonics above it. Higher values affect a narrower frequency span, while lower values affect a wider span.

Gain

Sets the amount of hum attenuation.

Number of Harmonics

Chooses how many harmonic frequencies are processed.

Harmonic Slope

Adjusts the attenuation ratio applied to harmonic frequencies.

Output Hum Only

Previews the hum being removed so you can hear whether wanted audio is included.

## DeReverb effect

Noise Reduction/Restoration > DeReverb analyzes the reverberation profile and helps change the reverberation amount. Values run from 0% to 100% and determine how much processing is applied to the audio signal.

DeReverb reduces or removes unwanted room reverberation from audio recordings.

DeReverb can lower or eliminate unwanted room reverb in recorded audio.

## Processing focus

Five processing focus buttons are available. Each Processing focus button directs noise suppression toward a particular part of the signal's frequency spectrum.

Processing Focus buttons target noise suppression by frequency range.

A. All frequency focus B. Hi frequency focus C. Hi/low frequency focus D. Mid frequency focus E. Low frequency focus

Processing Focus buttons let you aim noise suppression at specific frequency ranges.

Dereverberation can produce a lower output level than the original audio because dynamic range is reduced. Output gain acts as make-up gain, letting you set the output signal level. Use the slider for manual gain changes, or enable automatic gain adjustment by selecting the Auto Gain checkbox.

## DeNoise effect

Noise Reduction/Restoration > DeNoise reduces noise in an audio file or removes it entirely. The unwanted material can include hum, hiss, fan noise, air conditioner noise, or other background sound. A slider controls how much noise reduction is used. Values span 0% to 100% and set the processing amount applied to the audio signal.

DeNoise reduces unwanted background noise in audio recordings.

DeNoise can lower unwanted background noise in recorded audio.

## Adjust Gain

Applying DeNoise can reduce the output signal level below the original audio level. Use the Gain slider to set the output amount. Enable the Output Noise Only checkbox to hear only the noise that is being removed.

The processing focus for DeNoise resembles the one used by DeReverb.

## Hiss Reduction effect (Waveform Editor only)

Noise Reduction/Restoration > Hiss Reduction reduces hiss from sources such as audio cassettes, vinyl records, and microphone preamps. It greatly lowers the amplitude of any frequency range that falls below an amplitude threshold known as the noise floor. Frequency ranges louder than that threshold are left unchanged. When background hiss stays at a consistent level, Hiss Reduction can remove it completely.

Note

For wide-frequency-range noise of other kinds, try Noise Reduction.

Capture Noise Floor

Plots an estimated noise floor. Hiss Reduction uses that estimate to remove hiss more precisely while keeping ordinary audio intact. This is the strongest control in Hiss Reduction.

For the most accurate noise-floor graph, choose Get Noise Floor while selecting audio that contains only hiss. Another option is to choose the area with the least wanted audio and the least high-frequency information. In the spectral display, find a region with no activity in the upper 75% of the display.

After the noise floor is captured, you may need to move the control points on the left, which represent lower frequencies, until the graph is as flat as possible. If music exists at any frequency, the surrounding control points will be higher than they should be.

Graph

Shows the estimated noise floor for every frequency in the source audio, with frequency on the horizontal ruler (x-axis) and noise-floor amplitude on the vertical ruler (y-axis). This view helps separate hiss from wanted audio information.

The value used for hiss reduction combines the graph with the Noise Floor slider, which moves the estimated noise-floor reading up or down for fine-tuning.

Scale

Sets the way frequencies are laid out on the horizontal x-axis:

For more precise low-frequency control, select Logarithmic. A logarithmic scale better matches human hearing.

For detailed high-frequency work with evenly spaced frequency intervals, select Linear.

Channel

Shows the chosen audio channel in the graph.

Reset

Restores the estimated noise floor. To reset it higher or lower, use the menu button at the upper right of the graph and choose an item from the Reset Control Curve menu.

Note

- For fast, general-purpose hiss reduction, a full noise-floor graph is not always required. Often you can reset the graph to a flat level and adjust the Noise Floor slider.
- To turn off frequency and amplitude tooltips, open the graph's upper-right menu button and deselect Show Tooltip Over Graph.

Noise Floor

Adjusts the noise floor until hiss reduction and quality reach the desired balance.

Reduce By

Sets hiss reduction strength for audio below the noise floor. Higher values, especially above 20 dB, can remove hiss dramatically, but the remaining audio may distort. Lower values remove less noise and keep the original audio signal more intact.

Output Hiss Only

Previews just the hiss so you can check whether wanted audio is being removed.

Advanced settings

Select the triangle to display these options:

Spectral Decay Rate

- Spectral Decay Rate: When audio rises above the estimated noise floor, this setting controls how much nearby-frequency audio is treated as continuing with it. Low values assume less neighboring audio continues, so hiss reduction cuts closer to the retained frequencies. Values from 40% to 75% work best. Above 90%, the result can include unnaturally long tails and reverbs. Too-low values can create bubbly background artifacts and make music sound artificial.

- Precision Factor: sets the time accuracy of hiss reduction. Typical values are 7 to 14. Lower values can leave a few milliseconds of hiss before and after louder audio sections. Larger values usually improve results but slow processing. Values over 20 generally do not add further quality improvement.

- Transition Width: creates a gradual hiss-reduction transition rather than a sudden change. Values from 5 to 10 usually work well. If the value is too high, hiss may remain after processing. If it is too low, background artifacts can appear.

- FFT Size: sets the Fast Fourier Transform size, which balances frequency accuracy against time accuracy. Sizes from 2048 to 8192 generally work best. Lower FFT sizes, 2048 and below, improve time response, such as less swooshing before cymbal hits, but can reduce frequency resolution and create hollow or flanged sounds. Higher FFT sizes, 8192 and above, may add swooshing, reverb, and drawn-out background tones, but they deliver very accurate frequency resolution.

- Control Points: sets the number of graph points created when Capture Noise Floor is selected.

The video demonstrates background-noise cleanup and hiss reduction.

### More like this

- Control effect settings with graphs
- Applying effects in the Waveform Editor
- Applying effects in the Multitrack Editor
- Use effect presets
